(() => {
  'use strict';
  const config = window.PhotoTodoWorkspace;
  const keys = { manualTasks: 'manual_tasks', overrides: 'task_overrides', tasksDone: 'tasks_done', inboxItems: 'inbox_items', deleted: 'manual_tasks_deleted', externalCompleted: 'external_tasks_completed', workspace: 'todo_workspace', doneLog: 'todo_done_log' };
  const changeEvent = 'photo-todo-workspace-change';
  let applying = false;
  let syncTimer;
  let syncing = false;
  function notify() { window.dispatchEvent(new Event(changeEvent)); }
  const originalGetAllTasks = getAllTasks;
  getAllTasks = function () {
    const fields = LS.get('todo_workspace')?.nativeFields || {};
    const overrides = LS.get('task_overrides') || {};
    const manualIds = new Set((LS.get('manual_tasks') || []).map(task => task.id));
    return originalGetAllTasks().map(source => {
      const task = { ...source, _manual: !!source._manual || manualIds.has(source.id) || manualIds.has(source._sourceId) };
      const key = getTaskKey(task);
      const editAt = task._repeatInstance ? '' : task._manual ? task.updatedAt || '' : overrides[task._overrideKey || key]?.updatedAt || '';
      const merged = config.overlayTask(task, fields[key], editAt, state.tasksDone[key]);
      // Repeating instances must remain manual even though their overlay is per occurrence.
      if (task._manual) merged._manual = true;
      if (merged !== task) {
        if (merged.completed) state.tasksDone[key] = { completed: true, completedAt: merged.completedAt };
        else delete state.tasksDone[key];
      }
      return merged;
    });
  };
  const originalRender = renderTodo;
  renderTodo = function (...args) {
    const result = originalRender(...args);
    if (!applying) notify();
    return result;
  };
  function snapshot() {
    return { visibleTasks: getAllTasks(), manualTasks: LS.get('manual_tasks') || [], overrides: LS.get('task_overrides') || {}, tasksDone: state.tasksDone || {}, inboxItems: LS.get('inbox_items') || [], deleted: LS.get('manual_tasks_deleted') || [], externalCompleted: LS.get('external_tasks_completed') || [], workspace: LS.get('todo_workspace') || {}, doneLog: LS.get('todo_done_log') || [] };
  }
  function pendingKeys() { return LS.get('todo_workspace_pending') || []; }
  function status() {
    const pending = pendingKeys().length;
    const health = LS.get('sync_health') || {};
    return pending ? (navigator.onLine === false ? '端末保存済み / オフライン・同期待ち' : health.workspaceSyncOk === false ? '端末保存済み / 同期を再試行してください' : '端末保存済み / 同期待ち') : health.workspaceSyncedAt ? '端末保存済み / クラウド同期済み' : '端末に保存済み';
  }
  async function flush() {
    if (syncing || navigator.onLine === false || !pendingKeys().length) return;
    syncing = true;
    let failed = false;
    try {
      for (const key of pendingKeys()) {
        const value = localStorage.getItem('ptr_' + key);
        const ok = await SB.setSetting(key, JSON.parse(value || 'null'));
        if (ok && localStorage.getItem('ptr_' + key) === value) {
          localStorage.setItem('ptr_todo_workspace_pending', JSON.stringify(pendingKeys().filter(item => item !== key)));
        } else if (!ok) failed = true;
      }
      setSyncHealth({ workspaceSyncOk: !failed, ...(pendingKeys().length ? {} : { workspaceSyncedAt: new Date().toISOString() }), pending: pendingKeys().length > 0 });
    } catch { setSyncHealth({ workspaceSyncOk: false, pending: true }); }
    finally { syncing = false; notify(); }
  }
  function queueSync() { clearTimeout(syncTimer); syncTimer = setTimeout(flush, 500); }
  function apply(next) {
    if (config.error) throw new Error(config.error);
    const doneLog = [...(next.doneLog || LS.get('todo_done_log') || [])];
    const previousDone = LS.get('tasks_done') || {};
    for (const [key, record] of Object.entries(next.tasksDone)) {
      if (!record?.completed || previousDone[key]?.completed || previousDone[key] === true) continue;
      const task = next.workspace?.nativeFields?.[key] || next.manualTasks.find(item => getTaskKey(item) === key);
      if (task) doneLog.unshift({ id: key, title: task.title || '', subject: task.subject || '', priority: task.priority || 'normal', completedAt: record.completedAt });
    }
    next = { ...next, doneLog: doneLog.slice(0, 50) };
    const before = Object.fromEntries([...Object.values(keys), 'todo_workspace_pending'].map(key => [key, localStorage.getItem('ptr_' + key)]));
    const changed = Object.entries(keys).filter(([property, key]) => JSON.stringify(next[property]) !== before[key]);
    if (!changed.length) return;
    applying = true;
    try {
      localStorage.setItem('ptr_todo_workspace_pending', JSON.stringify([...new Set([...pendingKeys(), ...changed.map(([, key]) => key)])]));
      for (const [property, key] of changed) localStorage.setItem('ptr_' + key, JSON.stringify(next[property]));
    } catch (error) {
      for (const [key, value] of Object.entries(before)) {
        try { if (value === null) localStorage.removeItem('ptr_' + key); else localStorage.setItem('ptr_' + key, value); } catch { /* Preserve the original storage error. */ }
      }
      throw error;
    } finally { applying = false; }
    state.tasksDone = next.tasksDone;
    scheduleFullBackup('todo-workspace');
    scheduleTaskNotifications();
    renderTodo();
    renderCommandCenter();
    renderTodoWidget();
    if (state.tab === 'brief') renderDailyBrief();
    setSyncHealth({ pending: true });
    queueSync();
  }
  function importOriginal(payload) {
    if (!payload || !Array.isArray(payload.manualTasks) || payload.manualTasks.some(t => !t || typeof t.title !== 'string')) throw new Error('Photo-tracker形式のバックアップを選んでください。');
    // Save the complete current backup before merging only Todo-related fields.
    localStorage.setItem('ptr_todo_workspace_before_import', JSON.stringify(createFullBackupPayload('before-todo-import')));
    const current = snapshot();
    const deleted = [...new Set([...current.deleted, ...(payload.manualTasksDeleted || [])])];
    const inbox = new Map();
    for (const item of [...(payload.inboxItems || []), ...current.inboxItems]) {
      const previous = inbox.get(item.id);
      if (!previous || String(item.updatedAt || item.createdAt || '') >= String(previous.updatedAt || previous.createdAt || '')) inbox.set(item.id, item);
    }
    apply({ ...current, manualTasks: mergeTaskListsById(payload.manualTasks, current.manualTasks, deleted),
      overrides: mergeTaskOverrideMaps(payload.taskOverrides || {}, current.overrides),
      tasksDone: mergeTaskDoneMaps(payload.tasksDone || {}, current.tasksDone), inboxItems: [...inbox.values()], deleted,
      externalCompleted: [...new Set([...(payload.externalTasksCompleted || []), ...current.externalCompleted])],
      workspace: config.mergeWorkspace(payload.todoWorkspace || {}, current.workspace) });
  }
  function baselineBackup() {
    const baseline = JSON.parse(localStorage.getItem(config.baselineKey) || 'null');
    if (!baseline) throw new Error('統合前の控えが見つかりません。');
    const v = baseline.values;
    return { version: 2, todoOnly: true, reason: 'before-todo-workspace', exportedAt: baseline.createdAt, meta: {},
      manualTasks: v.manual_tasks || [], taskOverrides: v.task_overrides || {}, tasksDone: v.tasks_done || {},
      inboxItems: v.inbox_items || [], manualTasksDeleted: v.manual_tasks_deleted || [], externalTasksCompleted: v.external_tasks_completed || [],
      todoWorkspace: v.todo_workspace || {}, tasksCache: v.tasks_cache || null, todoDoneLog: v.todo_done_log || [] };
  }
  function previewBackup() {
    const read = key => JSON.parse(localStorage.getItem('ptr_todo_preview_v1_' + key) || 'null');
    if (!localStorage.getItem('ptr_todo_preview_v1_initialized')) return null;
    return { meta: {}, manualTasks: read('manual_tasks') || [], taskOverrides: read('task_overrides') || {}, tasksDone: read('tasks_done') || {},
      inboxItems: read('inbox_items') || [], manualTasksDeleted: read('manual_tasks_deleted') || [], externalTasksCompleted: read('external_tasks_completed') || [], todoWorkspace: read('todo_workspace') || {} };
  }
  window.PhotoTodoWorkspaceNative = { snapshot, apply, status, retrySync: flush, importOriginal, baselineBackup, previewBackup, originalBackup: () => createFullBackupPayload('todo-workspace-export') };
  document.querySelectorAll('[data-todo-mode]').forEach(button => button.addEventListener('click', () => {
    const legacy = button.dataset.todoMode === 'legacy';
    document.querySelector('#todo-workspace').hidden = legacy;
    document.querySelector('#todo-legacy').hidden = !legacy;
    document.querySelectorAll('[data-todo-mode]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    if (legacy) renderTodo(); else notify();
  }));
  window.addEventListener('storage', event => {
    if (!event.key || Object.values(keys).some(key => event.key === 'ptr_' + key)) {
      state.tasksDone = LS.get('tasks_done') || {};
      notify();
    }
  });
  window.addEventListener('online', queueSync);
  window.addEventListener('offline', notify);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { notify(); queueSync(); } });
  setInterval(queueSync, 60000);
  queueSync();
})();
