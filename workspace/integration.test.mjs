import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { fromNative, toNative } from './adapter.mjs';

const runtime = readFileSync(new URL('./runtime.js', import.meta.url), 'utf8');
const bridge = readFileSync(new URL('./bridge.js', import.meta.url), 'utf8');
function environment() {
  const values = new Map();
  const callbacks = [];
  const writes = [];
  let failKey = '';
  const context = vm.createContext({
    window: { dispatchEvent() {}, addEventListener() {} }, Event: class {},
    document: { querySelectorAll: () => [], addEventListener() {} },
    navigator: { onLine: true }, setTimeout: fn => { callbacks.push(fn); return callbacks.length; }, clearTimeout() {}, setInterval() {},
    localStorage: { getItem: key => values.get(key) ?? null, setItem(key, value) { if (key === failKey) { failKey = ''; throw new Error('quota'); } values.set(key, value); }, removeItem: key => values.delete(key) },
    LS: { get: key => JSON.parse(values.get('ptr_' + key) || 'null') },
    state: { tasksDone: {}, tab: 'todo' }, getAllTasks: () => [], getTaskKey: t => t.id,
    renderTodo() {}, renderCommandCenter() {}, renderTodoWidget() {}, renderDailyBrief() {}, scheduleFullBackup() {}, scheduleTaskNotifications() {},
    SB: { setSetting: async (key, value) => { writes.push([key, value]); return true; } }, setSyncHealth: patch => values.set('ptr_sync_health', JSON.stringify(patch))
  });
  vm.runInContext(runtime, context);
  return { values, context, writes, callbacks, fail: key => { failKey = key; }, config: context.window.PhotoTodoWorkspace };
}
const date = n => `2026-10-${n}T12:00:00.000Z`;
const emptySnapshot = () => ({ visibleTasks: [], manualTasks: [], overrides: {}, tasksDone: {}, inboxItems: [], deleted: [], externalCompleted: [], workspace: {} });

test('起動時の控えは一度だけ作成し、認証・写真・試用データを書き換えない', () => {
  const env = environment();
  env.values.set('ptr_manual_tasks', '[{"id":"one","title":"元タスク"}]');
  env.values.set('ptr_auth_session', '{"token":"private"}');
  env.values.set('ptr_todo_preview_v1_manual_tasks', '[{"id":"preview"}]');
  env.values.delete(env.config.baselineKey);
  vm.runInContext(runtime, env.context);
  const baseline = env.values.get(env.config.baselineKey);
  env.values.set('ptr_manual_tasks', '[]');
  vm.runInContext(runtime, env.context);
  assert.equal(env.values.get(env.config.baselineKey), baseline);
  assert.ok(!baseline.includes('private'));
  assert.equal(env.values.get('ptr_todo_preview_v1_manual_tasks'), '[{"id":"preview"}]');
});

test('別端末の異なるタスク・プロジェクト・レビュー項目を残す', () => {
  const { config } = environment();
  const remote = { updatedAt: date(21), tasks: { a: { plannedDate: '2026-10-21', updatedAt: date(21) } }, projects: { p: { kind: 'contest', updatedAt: date(20) } }, reviews: { week: { inbox: true } }, reviewUpdates: { week: { inbox: date(21) } } };
  const local = { updatedAt: date(22), tasks: { b: { state: 'waiting', updatedAt: date(22) } }, reviews: { week: { due: true } }, reviewUpdates: { week: { due: date(22) } } };
  const merged = config.mergeWorkspace(remote, local);
  assert.ok(merged.tasks.a);
  assert.ok(merged.tasks.b);
  assert.equal(merged.projects.p.kind, 'contest');
  assert.equal(merged.reviews.week.inbox, true);
  assert.equal(merged.reviews.week.due, true);
});

test('古い端末の完了・工程が再同期しても、新しい未完了・工程削除を優先する', () => {
  const { config } = environment();
  const task = { id: 'p', completed: true, milestones: [{ id: 'removed' }] };
  const overlay = { updatedAt: date(22), completed: false, completedAt: '', milestones: [] };
  const merged = config.overlayTask(task, overlay, date(21), { completedAt: date(20) });
  assert.equal(merged.completed, false);
  assert.equal(merged.milestones.length, 0);
  assert.equal(config.overlayTask(task, overlay, date(23)), task);
  assert.equal(config.overlayTask(task, overlay, '', { completedAt: date(23) }).completed, true);
});

test('無関係な操作で既存タスクの更新日時や内容を変更しない', () => {
  const task = { id: 'a', title: '既存', _manual: true, updatedAt: date(20), taskType: 'simple', due: '2026-10-30' };
  const snapshot = { ...emptySnapshot(), visibleTasks: [task], manualTasks: [task] };
  const data = fromNative(snapshot);
  data.reviews = { week: { inbox: true } };
  const next = toNative(data, snapshot);
  assert.deepEqual(next.manualTasks, snapshot.manualTasks);
  assert.equal(next.workspace.nativeFields.a, undefined);
  assert.ok(next.workspace.reviewUpdates.week.inbox);
});

test('完了を戻す・工程を削除する操作を正確な親データとして記録する', () => {
  const task = { id: 'p', title: '課題', taskType: 'main', _manual: true, completed: true, completedAt: date(20), milestones: [{ id: 'one', title: '工程', completed: true }] };
  const snapshot = { ...emptySnapshot(), visibleTasks: [task], manualTasks: [task], tasksDone: { p: { completed: true, completedAt: date(20) } } };
  const data = fromNative(snapshot);
  data.projects[0].status = 'active';
  data.tasks = [];
  const next = toNative(data, snapshot);
  assert.equal(next.workspace.nativeFields.p.completed, false);
  assert.deepEqual(next.workspace.nativeFields.p.milestones, []);
  assert.equal(next.tasksDone.p, undefined);
});

test('保存容量エラーなら全キーを元に戻し、同期キューに中途半端な変更を残さない', () => {
  const env = environment();
  env.values.set('ptr_manual_tasks', '[]');
  vm.runInContext(bridge, env.context);
  const before = new Map(env.values);
  env.fail('ptr_task_overrides');
  assert.throws(() => env.context.window.PhotoTodoWorkspaceNative.apply({ ...emptySnapshot(), manualTasks: [{ id: 'a', title: '新規' }] }), /quota/);
  assert.deepEqual(env.values, before);
  assert.equal(env.writes.length, 0);
});

test('クラウド失敗は端末に残し、再試行が成功したキーだけキューから外す', async () => {
  const env = environment();
  vm.runInContext(bridge, env.context);
  const native = env.context.window.PhotoTodoWorkspaceNative;
  native.apply({ ...emptySnapshot(), manualTasks: [{ id: 'a', title: '保存' }], workspace: { version: 1 } });
  env.context.SB.setSetting = async () => false;
  await native.retrySync();
  assert.ok(JSON.parse(env.values.get('ptr_todo_workspace_pending')).length);
  assert.equal(JSON.parse(env.values.get('ptr_manual_tasks'))[0].title, '保存');
  env.context.SB.setSetting = async () => true;
  await native.retrySync();
  assert.deepEqual(JSON.parse(env.values.get('ptr_todo_workspace_pending')), []);
  assert.match(native.status(), /クラウド同期済み/);
});

test('新Todoファイルは試用版の同期停止設定を読み込まない', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(!html.includes('preview-runtime'));
  assert.ok(!html.includes('preview-bridge'));
  assert.ok(html.includes('workspace/start.mjs'));
  const app = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  assert.ok(!app.includes('PTR_TODO_PREVIEW'));
  assert.ok(app.includes("todoWorkspace: LS.get('todo_workspace')"));
});

test('_manualがない旧手動タスクもClassroomと混同せず元のIDで編集する', () => {
  const env = environment();
  const task = { id: 'old', title: '旧形式', updatedAt: date(21) };
  env.values.set('ptr_manual_tasks', JSON.stringify([task]));
  env.context.getAllTasks = () => [task];
  vm.runInContext(bridge, env.context);
  const snapshot = env.context.window.PhotoTodoWorkspaceNative.snapshot();
  assert.equal(snapshot.visibleTasks[0]._manual, true);
  const next = fromNative(snapshot);
  next.tasks[0].title = '編集後';
  const result = toNative(next, snapshot);
  assert.equal(result.manualTasks[0].id, 'old');
  assert.equal(result.manualTasks[0].title, '編集後');
  assert.deepEqual(Object.keys(result.overrides), []);
});

test('ワークスペースで完了した親タスクを既存の完了ログにも残す', () => {
  const env = environment();
  vm.runInContext(bridge, env.context);
  const completed = { id: 'one', title: '提出', completed: true, completedAt: date(21) };
  env.context.window.PhotoTodoWorkspaceNative.apply({ ...emptySnapshot(), manualTasks: [completed], tasksDone: { one: { completed: true, completedAt: date(21) } } });
  assert.equal(JSON.parse(env.values.get('ptr_todo_done_log'))[0].title, '提出');
});

test('GAS由来タスクの完了も管理済みなら履歴に残し、明示的非表示は維持する', () => {
  const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  const start = source.indexOf('function filterVisibleExternalTasks(');
  const end = source.indexOf('\nfunction ', start + 1);
  const context = vm.createContext({ getExternalCompletedTaskIds: () => ['hidden'], getTaskKey: t => t.id, sourceMarksTaskDone: t => t.completed, isWorkspaceManagedTask: key => ['managed', 'hidden'].includes(key) });
  vm.runInContext(source.slice(start, end), context);
  const result = context.filterVisibleExternalTasks([{ id: 'managed', completed: true }, { id: 'source-done', completed: true }, { id: 'hidden', completed: true }]);
  assert.deepEqual(Array.from(result, t => t.id), ['managed']);
});

test('Todo専用の控えをデータ画面で復元しても写真メタデータや認証は変更しない', () => {
  const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  const start = source.indexOf('function applyFullBackupPayload(');
  const end = source.indexOf('\nasync function ', start + 1);
  const values = new Map([['meta', { photo: '残す' }], ['auth_session', { token: '残す' }]]);
  const context = vm.createContext({ LS: { set: (key, value) => values.set(key, value) } });
  vm.runInContext(source.slice(start, end), context);
  context.applyFullBackupPayload({ todoOnly: true, meta: {}, manualTasks: [{ id: 'restore' }], tasksDone: {}, todoWorkspace: {} });
  assert.deepEqual(values.get('meta'), { photo: '残す' });
  assert.deepEqual(values.get('auth_session'), { token: '残す' });
  assert.equal(values.get('manual_tasks')[0].id, 'restore');
});
