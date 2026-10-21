import test from 'node:test';
import assert from 'node:assert/strict';
import { createSeed, validateData, nextStep, focusTasks, isActionable, addDays, diffDays, weekKey } from './model.mjs';

const TODAY = '2026-10-20';

test('今日の予定は締切と独立し、日付が変わっても自動で繰り越さない', () => {
  const data = createSeed(TODAY);
  const task = data.tasks.find(t => t.id === 'sample-cut');
  const originalDue = task.dueDate;
  task.plannedDate = addDays(TODAY, 1);
  assert.equal(task.dueDate, originalDue);
  assert.ok(!focusTasks(data, TODAY).includes(task));
  assert.ok(focusTasks(data, addDays(TODAY, 1)).includes(task));
  assert.ok(!focusTasks(data, addDays(TODAY, 2)).includes(task));
});

test('選んだ工程を完了すると次の未完了工程へ進み、待機・保留は選ばれない', () => {
  const data = createSeed(TODAY);
  const project = data.projects[0];
  assert.equal(nextStep(project, data).id, 'sample-cut');
  data.tasks.find(t => t.id === 'sample-cut').completedAt = '2026-10-20T01:00:00Z';
  assert.equal(nextStep(project, data).id, 'sample-subtitle');
  data.tasks.find(t => t.id === 'sample-subtitle').state = 'waiting';
  assert.equal(nextStep(project, data).id, 'sample-export');
  data.tasks.find(t => t.id === 'sample-export').state = 'someday';
  assert.equal(nextStep(project, data), null);
});

test('保留したプロジェクトの工程は今日に出さず、予定と締切は保持する', () => {
  const data = createSeed(TODAY);
  const project = data.projects[0];
  const task = data.tasks.find(t => t.id === 'sample-cut');
  project.status = 'paused';
  assert.equal(isActionable(task, data), false);
  assert.equal(nextStep(project, data), null);
  assert.equal(task.plannedDate, TODAY);
  assert.equal(task.dueDate, '2026-10-22');
  assert.ok(!focusTasks(data, TODAY).some(t => t.id === task.id));
});

test('今日の行動は3件を超えてもデータを削除・拒否しない', () => {
  const data = createSeed(TODAY);
  data.tasks.find(t => t.id === 'sample-select').plannedDate = TODAY;
  assert.equal(focusTasks(data, TODAY).length, 4);
});

test('JSONを検証し、不正な日付・重複ID・切れた関連を受け付けない', () => {
  assert.doesNotThrow(() => validateData(createSeed(TODAY)));
  const badDate = createSeed(TODAY);
  badDate.tasks[0].dueDate = '2026-02-31';
  assert.throws(() => validateData(badDate));
  const duplicate = createSeed(TODAY);
  duplicate.tasks.push({ ...duplicate.tasks[0] });
  assert.throws(() => validateData(duplicate));
  const orphan = createSeed(TODAY);
  orphan.tasks[0].projectId = 'missing';
  assert.throws(() => validateData(orphan));
});

test('月・年をまたぐ日付計算と月曜始まりのレビュー', () => {
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(diffDays('2027-01-01', '2026-12-31'), 1);
  assert.equal(weekKey('2026-10-25'), '2026-10-19');
  assert.equal(weekKey('2026-10-26'), '2026-10-26');
});
