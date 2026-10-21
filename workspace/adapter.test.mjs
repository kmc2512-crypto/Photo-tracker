import test from 'node:test';
import assert from 'node:assert/strict';
import { fromNative, toNative, stepKey } from './adapter.mjs';

function fixture() {
  const simple = { id: 'manual-1', title: '薬を受け取る', due: '2026-10-25', taskType: 'simple', _manual: true, extra: { keep: true } };
  const parent = { id: 'main-1', title: '動画編集', due: '2026-10-30', start: '2026-10-20', taskType: 'main', _manual: true, custom: 'keep-parent', milestones: [{ id: 'ms-1', title: 'カット', dueDate: '2026-10-24', completed: false, custom: 'keep-step' }] };
  const external = { id: 'class-1', title: '数学の課題', due: '2026-10-26', taskType: 'simple', _overrideKey: 'class-1' };
  return { manualTasks: [simple, parent], visibleTasks: [simple, parent, external], tasksDone: {}, overrides: {}, inboxItems: [{ id: 'inbox-1', text: '作品集を作りたい', createdAt: '2026-10-20T00:00:00Z' }], deleted: [], externalCompleted: [], workspace: {} };
}

test('既存Main Taskはプロジェクトと工程へ対応し、日付なし工程も保持する', () => {
  const snapshot = fixture();
  snapshot.visibleTasks[1].milestones.push({ id: 'ms-2', title: '構成を考える', completed: true });
  const data = fromNative(snapshot);
  assert.equal(data.projects[0].title, '動画編集');
  assert.equal(data.tasks.find(t => t.id === stepKey('main-1', 'ms-1')).dueDate, '2026-10-24');
  assert.equal(data.tasks.find(t => t.id === stepKey('main-1', 'ms-2')).dueDate, '');
  assert.ok(data.tasks.find(t => t.id === stepKey('main-1', 'ms-2')).completedAt);
});

test('元スナップショットと未知のフィールドを壊さず、取り組む日を別保存する', () => {
  const snapshot = fixture();
  const before = structuredClone(snapshot);
  const data = fromNative(snapshot);
  data.tasks.find(t => t.id === 'manual-1').plannedDate = '2026-10-20';
  data.tasks.find(t => t.id === 'manual-1').state = 'waiting';
  const result = toNative(data, snapshot);
  assert.deepEqual(snapshot, before);
  assert.equal(result.manualTasks.find(t => t.id === 'manual-1').due, '2026-10-25');
  assert.deepEqual(result.manualTasks.find(t => t.id === 'manual-1').extra, { keep: true });
  assert.equal(result.workspace.tasks['manual-1'].plannedDate, '2026-10-20');
  assert.equal(result.workspace.tasks['manual-1'].state, 'waiting');
  assert.equal(result.manualTasks.find(t => t.id === 'main-1').milestones[0].custom, 'keep-step');
});

test('工程編集と完了を同じmilestone IDへ戻し、単独タスクを重複作成しない', () => {
  const snapshot = fixture();
  const data = fromNative(snapshot);
  const step = data.tasks.find(t => t.id === stepKey('main-1', 'ms-1'));
  step.title = '冒頭30秒をカット';
  step.completedAt = '2026-10-20T02:00:00Z';
  const result = toNative(data, snapshot);
  const parent = result.manualTasks.find(t => t.id === 'main-1');
  assert.equal(parent.milestones[0].id, 'ms-1');
  assert.equal(parent.milestones[0].title, step.title);
  assert.equal(parent.milestones[0].completed, true);
  assert.equal(result.manualTasks.length, 2);
});

test('Classroom編集は外部ソースではなく上書き情報と追加メタデータへ保存する', () => {
  const snapshot = fixture();
  const data = fromNative(snapshot);
  const external = data.tasks.find(t => t.id === 'class-1');
  external.note = '問1から着手';
  external.plannedDate = '2026-10-21';
  external.completedAt = '2026-10-20T02:00:00Z';
  const result = toNative(data, snapshot);
  assert.equal(snapshot.visibleTasks[2].description, undefined);
  assert.equal(result.overrides['class-1'].description, '問1から着手');
  assert.equal(result.workspace.tasks['class-1'].plannedDate, '2026-10-21');
  assert.equal(result.tasksDone['class-1'].completed, true);
  assert.equal(result.manualTasks.length, 2);
});

test('Inboxをプロジェクトへ整理しても入力原文をInbox履歴に残す', () => {
  const snapshot = fixture();
  const data = fromNative(snapshot);
  data.projects.push({ id: 'new-project', title: '作品集を作る', area: 'creative', kind: 'project', status: 'active', startDate: '', dueDate: '', dueTime: '', description: '', nextTaskId: 'inbox-1', contest: { checks: [] } });
  const task = data.tasks.find(t => t.id === 'inbox-1');
  task.projectId = 'new-project';
  task.title = '掲載する写真を選ぶ';
  task.state = 'next';
  const result = toNative(data, snapshot);
  assert.equal(result.inboxItems[0].text, '作品集を作りたい');
  assert.equal(result.inboxItems[0].archived, true);
  assert.equal(result.manualTasks.find(t => t.id === 'new-project').milestones[0].title, '掲載する写真を選ぶ');
  assert.equal(result.workspace.projects['new-project'].nextTaskId, stepKey('new-project', 'inbox-1'));
});

test('単独タスクを工程へ移すと元の単独行を残さず、既存工程は残す', () => {
  const snapshot = fixture();
  const data = fromNative(snapshot);
  data.tasks.find(t => t.id === 'manual-1').projectId = 'main-1';
  const result = toNative(data, snapshot);
  assert.ok(!result.manualTasks.some(t => t.id === 'manual-1'));
  assert.equal(result.manualTasks.find(t => t.id === 'main-1').milestones.length, 2);
  assert.ok(result.deleted.includes('manual-1'));
});

test('応募情報と工程の完了を混ぜず保持する', () => {
  const snapshot = fixture();
  const data = fromNative(snapshot);
  data.projects[0].kind = 'contest';
  data.projects[0].contest = { stage: 'ready', checks: [{ id: 'c', title: '画像形式', done: true }] };
  const result = toNative(data, snapshot);
  assert.equal(result.workspace.projects['main-1'].contest.checks[0].done, true);
  assert.equal(result.manualTasks.find(t => t.id === 'main-1').milestones[0].completed, false);
});

test('Classroomタスクを工程付きにしても手動の重複タスクを作らない', () => {
  const snapshot = fixture();
  const data = fromNative(snapshot);
  data.tasks = data.tasks.filter(t => t.id !== 'class-1');
  data.projects.push({ id: 'class-1', title: '数学の課題', area: 'school', kind: 'project', status: 'active', startDate: '2026-10-20', dueDate: '2026-10-26', dueTime: '', description: '分解して進める', nextTaskId: 'new-step', contest: { checks: [] } });
  data.tasks.push({ id: 'new-step', title: '問1から5を解く', area: 'school', projectId: 'class-1', state: 'next', priority: 'normal', dueDate: '2026-10-22', startDate: '', dueTime: '', plannedDate: '2026-10-20', note: '', completedAt: '' });
  const result = toNative(data, snapshot);
  assert.equal(result.manualTasks.length, 2);
  assert.equal(result.overrides['class-1'].taskType, 'main');
  assert.equal(result.overrides['class-1'].milestones[0].title, '問1から5を解く');
  assert.ok(!result.externalCompleted.includes('class-1'));
  assert.equal(result.workspace.projects['class-1'].nextTaskId, stepKey('class-1', 'new-step'));
  assert.equal(snapshot.visibleTasks[2].taskType, 'simple');
});
