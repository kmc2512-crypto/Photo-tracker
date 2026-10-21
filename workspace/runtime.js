(() => {
  'use strict';
  const keys = ['manual_tasks', 'task_overrides', 'tasks_done', 'inbox_items', 'manual_tasks_deleted', 'external_tasks_completed', 'todo_workspace', 'tasks_cache', 'todo_done_log'];
  const baselineKey = 'ptr_todo_workspace_baseline_v1';
  const read = key => JSON.parse(localStorage.getItem('ptr_' + key) || 'null');
  function mergeWorkspace(remote = {}, local = {}) {
    const result = { ...remote, ...local, version: 1 };
    const fallback = '1970-01-01T00:00:00.000Z';
    for (const field of ['tasks', 'projects', 'nativeFields']) {
      result[field] = Object.create(null);
      for (const source of [remote, local]) {
        for (const [key, value] of Object.entries(source[field] || {})) {
          if (!value || typeof value !== 'object') continue;
          const previous = result[field][key];
          if (!previous || String(value.updatedAt || source.updatedAt || fallback) >= String(previous.updatedAt || fallback)) {
            result[field][key] = { ...value, updatedAt: value.updatedAt || source.updatedAt || fallback };
          }
        }
      }
    }
    result.reviews = Object.create(null);
    result.reviewUpdates = Object.create(null);
    for (const source of [remote, local]) {
      for (const [week, fields] of Object.entries(source.reviews || {})) {
        result.reviews[week] ||= Object.create(null);
        result.reviewUpdates[week] ||= Object.create(null);
        for (const [key, value] of Object.entries(fields || {})) {
          const at = source.reviewUpdates?.[week]?.[key] || source.updatedAt || fallback;
          if (at >= (result.reviewUpdates[week][key] || fallback)) {
            result.reviews[week][key] = value;
            result.reviewUpdates[week][key] = at;
          }
        }
      }
    }
    result.updatedAt = [remote.updatedAt, local.updatedAt].filter(Boolean).sort().at(-1) || fallback;
    return result;
  }
  function overlayTask(task, overlay, editAt = '', doneRecord = null) {
    if (!overlay?.updatedAt || editAt > overlay.updatedAt) return task;
    const result = { ...task, ...overlay };
    if (doneRecord?.completedAt > overlay.updatedAt) {
      result.completed = true;
      result.completedAt = doneRecord.completedAt;
    }
    return result;
  }
  let error = '';
  try {
    if (!localStorage.getItem(baselineKey)) {
      const values = Object.fromEntries(keys.map(key => [key, read(key)]));
      localStorage.setItem(baselineKey, JSON.stringify({ version: 1, createdAt: new Date().toISOString(), values }));
    }
  } catch (cause) {
    error = '統合前データの控えを保存できませんでした。データ画面からバックアップを書き出し、端末の空き容量を確認してください。';
  }
  window.PhotoTodoWorkspace = { keys, baselineKey, error, mergeWorkspace, overlayTask };
})();
