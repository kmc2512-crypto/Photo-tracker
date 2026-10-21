import { AREAS, localDate } from './model.mjs';

const clone = value => structuredClone(value);
const keyOf = task => String(task.id || `${task.title || ''}${task.due || task.dueDate || ''}`);
export const stepKey = (parent, step) => `step:${encodeURIComponent(parent)}:${encodeURIComponent(step)}`;
const areaOf = (item, fallback) => Object.hasOwn(AREAS, item?.area) ? item.area : fallback;
const mapCopy = value => Object.assign(Object.create(null), clone(value || {}));
function inferArea(source) {
  const category = String(source.subject || source.category || '').toLowerCase();
  if (/生活|日常|用事|life/.test(category)) return 'life';
  if (/コンテスト|応募|contest/.test(category)) return 'contest';
  if (!source._manual || /学校|課題|数学|代数|英語|体育|school/.test(category)) return 'school';
  return 'creative';
}
const completedAt = (done, key, task) => {
  const record = done[key];
  if (record === true || record?.completed) return record?.completedAt || task.completedAt || '2000-01-01T00:00:00.000Z';
  return task.completed ? task.completedAt || '2000-01-01T00:00:00.000Z' : '';
};

export function fromNative(snapshot) {
  const meta = snapshot.workspace || {};
  const tasks = [];
  const projects = [];
  const done = snapshot.tasksDone || {};
  for (const source of snapshot.visibleTasks || []) {
    const key = keyOf(source);
    const taskMeta = meta.tasks?.[key] || {};
    const projectMeta = meta.projects?.[key] || {};
    const fallbackArea = inferArea(source);
    const dueDate = source.due || source.dueDate || '';
    const startDate = source.start || source.startDate || '';
    const completed = completedAt(done, key, source);
    if (source.taskType === 'main') {
      projects.push({
        id: key, title: source.title, kind: projectMeta.kind || 'project',
        area: areaOf(projectMeta, fallbackArea), startDate, dueDate,
        dueTime: source.dueTime || '', description: source.description || '',
        status: completed ? 'completed' : projectMeta.status === 'paused' ? 'paused' : 'active',
        nextTaskId: projectMeta.nextTaskId || '',
        contest: clone(projectMeta.contest || { organizer: '', url: '', stage: 'considering', checks: [] }),
        nativeTaskKey: key, sourceLabel: source._manual ? '手動' : 'Classroom / 外部', sourceCategory: source.subject || source.category || ''
      });
      const steps = source.milestones || source.subtasks || [];
      steps.forEach((step, index) => {
        const id = stepKey(key, step.id || `ms_existing_${index}`);
        const m = meta.tasks?.[id] || {};
        tasks.push({
          ...clone(m), id, title: step.title || '作業ステップ', projectId: key,
          area: areaOf(m, areaOf(projectMeta, fallbackArea)),
          state: m.state || 'next', priority: m.priority || 'normal',
          startDate: step.startDate || step.start || '', dueDate: step.dueDate || step.due || '',
          dueTime: step.dueTime || '', plannedDate: m.plannedDate || '', note: step.note || '',
          completedAt: step.completed ? m.completedAt || step.completedAt || '2000-01-01T00:00:00.000Z' : '',
          createdAt: m.createdAt || source.createdAt || source.updatedAt || `${localDate()}T12:00:00`,
          order: m.order ?? index, nativeMilestoneId: step.id || `ms_existing_${index}`, nativeTaskKey: key, sourceCategory: source.subject || source.category || ''
        });
      });
    } else {
      tasks.push({
        ...clone(taskMeta), id: key, title: source.title || 'タスク', projectId: '',
        area: areaOf(taskMeta, fallbackArea), state: taskMeta.state || 'next',
        priority: source.priority || 'normal', startDate, dueDate, dueTime: source.dueTime || '',
        plannedDate: taskMeta.plannedDate || '', note: source.description || source.memo || '',
        completedAt: completed, createdAt: source.createdAt || source.updatedAt || taskMeta.createdAt || `${localDate()}T12:00:00`, nativeTaskKey: key, sourceCategory: source.subject || source.category || '', sourceLabel: source._manual ? '手動' : 'Classroom / 外部'
      });
    }
  }
  for (const inbox of snapshot.inboxItems || []) {
    if (inbox.archived || inbox.convertedToTaskId) continue;
    tasks.push({ id: inbox.id, title: inbox.text, projectId: '', area: 'life', state: 'inbox', priority: 'normal',
      startDate: '', dueDate: '', dueTime: '', plannedDate: '', note: '', completedAt: '',
      createdAt: inbox.createdAt || new Date().toISOString(), nativeInboxId: inbox.id });
  }
  return { version: 1, sample: false, tasks, projects, reviews: clone(meta.reviews || {}), updatedAt: meta.updatedAt || new Date().toISOString() };
}

export function toNative(next, snapshot) {
  const output = {
    manualTasks: clone(snapshot.manualTasks || []), overrides: mapCopy(snapshot.overrides), tasksDone: mapCopy(snapshot.tasksDone),
    inboxItems: clone(snapshot.inboxItems || []), deleted: [...(snapshot.deleted || [])], externalCompleted: [...(snapshot.externalCompleted || [])],
    workspace: { ...clone(snapshot.workspace || {}), version: 1, tasks: mapCopy(snapshot.workspace?.tasks), projects: mapCopy(snapshot.workspace?.projects), nativeFields: mapCopy(snapshot.workspace?.nativeFields), reviews: clone(next.reviews || {}), updatedAt: next.updatedAt }
  };
  const native = new Map((snapshot.visibleTasks || []).map(t => [keyOf(t), t]));
  const old = fromNative(snapshot);
  const incoming = new Map(next.tasks.map(t => [t.id, t]));
  const canonicalIds = new Map(next.tasks.map(t => [t.id, t.projectId ? stepKey(t.projectId, t.nativeMilestoneId || t.id) : t.id]));
  const now = new Date().toISOString();
  output.workspace.reviewUpdates = clone(snapshot.workspace?.reviewUpdates || {});
  for (const [week, fields] of Object.entries(next.reviews || {})) {
    for (const [key, value] of Object.entries(fields)) {
      if (value !== snapshot.workspace?.reviews?.[week]?.[key]) {
        output.workspace.reviewUpdates[week] ||= {};
        output.workspace.reviewUpdates[week][key] = now;
      }
    }
  }
  const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  function remember(map, key, record) {
    const previous = map[key];
    const { updatedAt: _oldTime, ...oldFields } = previous || {};
    const { updatedAt: _newTime, ...fields } = record;
    if (!previous || !equal(oldFields, fields)) map[key] = { ...record, updatedAt: now };
  }

  function setDone(key, at) {
    if (at) output.tasksDone[key] = { completed: true, completedAt: at };
    else delete output.tasksDone[key];
  }
  function storeTask(key, record) {
    const source = native.get(key);
    if (source?._repeatInstance || (source && !source._manual)) {
      if (!source._repeatInstance) output.overrides[source._overrideKey || key] = { ...(output.overrides[source._overrideKey || key] || {}), ...record };
      output.workspace.nativeFields[key] = { ...record, id: source.id || key };
    } else {
      const index = output.manualTasks.findIndex(t => keyOf(t) === key);
      const item = { ...(index >= 0 ? output.manualTasks[index] : {}), ...record, _manual: true };
      if (index >= 0) output.manualTasks[index] = item; else output.manualTasks.push(item);
    }
  }
  function removeRoot(oldTask) {
    const source = native.get(oldTask.id);
    if (!source) return;
    if (source._manual) {
      if (!source._repeatInstance) output.manualTasks = output.manualTasks.filter(t => keyOf(t) !== oldTask.id);
      if (!output.deleted.includes(oldTask.id)) output.deleted.push(oldTask.id);
    } else if (!output.externalCompleted.includes(oldTask.id)) output.externalCompleted.push(oldTask.id);
    delete output.tasksDone[oldTask.id];
  }

  for (const p of next.projects) {
    const oldProject = old.projects.find(item => item.id === p.id);
    const projectSteps = next.tasks.filter(t => t.projectId === p.id);
    const previousSteps = old.tasks.filter(t => t.projectId === p.id);
    if (equal(p, oldProject) && equal(projectSteps, previousSteps)) continue;
    const source = native.get(p.id);
    const manualBase = output.manualTasks.find(t => keyOf(t) === p.id);
    const base = manualBase || source || {};
    const originalSteps = base.milestones || base.subtasks || [];
    const steps = next.tasks.filter(t => t.projectId === p.id).map((t, index) => {
      const msId = t.nativeMilestoneId || t.id;
      const prev = originalSteps.find(ms => ms.id === msId) || {};
      const canonical = canonicalIds.get(t.id);
      remember(output.workspace.tasks, canonical, { ...clone(t), id: canonical, nativeMilestoneId: msId, order: index });
      return { ...prev, id: msId, title: t.title, startDate: t.startDate || '', start: t.startDate || '', dueDate: t.dueDate || '', due: t.dueDate || '', dueTime: t.dueTime || '', note: t.note || '', completed: !!t.completedAt };
    });
    remember(output.workspace.projects, p.id, { ...clone(p), nextTaskId: canonicalIds.get(p.nextTaskId) || p.nextTaskId || '' });
    const at = p.status === 'completed' ? completedAt(output.tasksDone, p.id, source || {}) || now : '';
    const record = { ...base, id: base.id || p.id, title: p.title, taskType: 'main', start: p.startDate || '', startDate: p.startDate || '', due: p.dueDate || '', dueDate: p.dueDate || '', dueTime: p.dueTime || '', dateType: p.startDate && p.dueDate ? 'range' : p.dueDate ? 'deadline' : 'none', description: p.description || '', subject: base.subject || base.category || AREAS[p.area], milestones: steps, subtasks: steps, completed: !!at, completedAt: at, updatedAt: now, createdAt: base.createdAt || now };
    storeTask(p.id, record);
    output.workspace.nativeFields[p.id] = record;
    setDone(p.id, at);
  }

  for (const t of next.tasks) {
    if (t.projectId) continue;
    if (equal(t, old.tasks.find(item => item.id === t.id))) continue;
    if (t.state === 'inbox') {
      const previous = output.inboxItems.find(item => item.id === t.id);
      const item = { ...previous, id: t.id, text: t.title, archived: false, convertedToTaskId: '', createdAt: t.createdAt || now, updatedAt: now, source: previous?.source || 'todo-workspace' };
      if (previous) output.inboxItems = output.inboxItems.map(x => x.id === t.id ? item : x); else output.inboxItems.push(item);
      continue;
    }
    remember(output.workspace.tasks, t.id, clone(t));
    const source = native.get(t.id);
    const manualBase = output.manualTasks.find(item => keyOf(item) === t.id);
    const base = manualBase || source || {};
    const oldTask = old.tasks.find(item => item.id === t.id);
    const noteAliases = oldTask && oldTask.note !== t.note && Object.hasOwn(base, 'memo') ? { memo: t.note || '' } : {};
    const record = { ...base, ...noteAliases, id: base.id || t.id, taskType: 'simple', title: t.title, due: t.dueDate || '', dueDate: t.dueDate || '', dueTime: t.dueTime || '', start: t.startDate || '', startDate: t.startDate || '', description: t.note || '', dateType: t.startDate && t.dueDate ? 'range' : t.dueDate ? 'deadline' : 'none', priority: t.priority || 'normal', subject: base.subject || base.category || AREAS[t.area], completed: !!t.completedAt, completedAt: t.completedAt || '', updatedAt: now, createdAt: base.createdAt || t.createdAt || now };
    storeTask(t.id, record);
    output.workspace.nativeFields[t.id] = record;
    setDone(t.id, t.completedAt);
  }

  for (const previous of old.tasks) {
    const target = incoming.get(previous.id);
    if (previous.state === 'inbox' && (!target || target.state !== 'inbox' || target.projectId)) {
      output.inboxItems = output.inboxItems.map(item => item.id === previous.id ? { ...item, archived: true, convertedToTaskId: target ? canonicalIds.get(target.id) : '', updatedAt: now } : item);
    } else if (!previous.projectId && previous.state !== 'inbox' && !next.projects.some(p => p.id === previous.id) && (!target || target.projectId || target.state === 'inbox')) removeRoot(previous);
  }
  return output;
}
