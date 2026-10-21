import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

test('完全バックアップの端末間同期でも新Todoの整理情報と最新キャッシュを保持する', () => {
  const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  const runtime = readFileSync(new URL('./runtime.js', import.meta.url), 'utf8');
  const context = vm.createContext({
    window: {}, localStorage: { getItem: () => 'null', setItem() {} },
    mergeTaskDoneMaps: (...maps) => Object.assign({}, ...maps),
    mergeTaskOverrideMaps: (...maps) => Object.assign({}, ...maps),
    mergeTaskListsById: (remote = [], local = []) => [...remote, ...local],
  });
  vm.runInContext(runtime, context);
  const start = source.indexOf('function mergeRecordMapByUpdatedAt(');
  const end = source.indexOf('\nfunction applyFullBackupPayload', start);
  vm.runInContext(source.slice(start, end), context);
  const remote = { meta: { photo: { comment: '新しい撮影メモ', updatedAt: '2026-10-22' } }, todoWorkspace: { tasks: { a: { plannedDate: '2026-10-22', updatedAt: '2026-10-22' } } }, tasksCache: { fetchedAt: '2026-10-22', tasks: [{ id: 'latest' }] } };
  const local = { meta: { photo: { comment: '古い撮影メモ', updatedAt: '2026-10-21' } }, todoWorkspace: { tasks: { b: { state: 'waiting', updatedAt: '2026-10-23' } } }, tasksCache: { fetchedAt: '2026-10-21', tasks: [] } };
  const result = context.mergeFullBackupPayload(remote, local);
  assert.equal(result.meta.photo.comment, '新しい撮影メモ');
  assert.equal(result.todoWorkspace.tasks.a.plannedDate, '2026-10-22');
  assert.equal(result.todoWorkspace.tasks.b.state, 'waiting');
  assert.equal(result.tasksCache.tasks[0].id, 'latest');
});
