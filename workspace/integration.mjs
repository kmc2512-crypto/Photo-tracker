import { KEY, AREAS, STATES, PRIORITIES, STAGES, localDate, addDays, diffDays, uid, isOpen, isActionable, nextStep, focusTasks, progress, weekKey, createSeed, validateData } from './model.mjs';
import { fromNative, toNative } from './adapter.mjs';

const native = window.PhotoTodoWorkspaceNative;
const root = document.querySelector('#todo-workspace').attachShadow({ mode: 'open' });
root.host.replaceChildren();
const shell = await fetch(new URL('shell.html', import.meta.url)).then(res => {
  if (!res.ok) throw new Error('Todo画面を読み込めませんでした。');
  return res.text();
});
root.innerHTML = `<link rel="stylesheet" href="${new URL('styles.css', import.meta.url)}"><link rel="stylesheet" href="${new URL('embedded.css', import.meta.url)}">${shell}`;
const baselineButton = document.createElement('button');
baselineButton.type = 'button';
baselineButton.className = 'button';
baselineButton.dataset.action = 'export-baseline';
baselineButton.textContent = '統合前のTodoを書き出す';
root.querySelector('.backup-actions').prepend(baselineButton);
if (native.previewBackup()) {
  const importPreview = document.createElement('button');
  importPreview.type = 'button';
  importPreview.className = 'button';
  importPreview.dataset.action = 'import-preview';
  importPreview.textContent = '試用版のTodoを取り込む';
  root.querySelector('.backup-actions').append(importPreview);
}
const retryButton = document.createElement('button');
retryButton.type = 'button';
retryButton.className = 'text-button';
retryButton.textContent = '同期を再試行';
retryButton.addEventListener('click', () => native.retrySync());
document.querySelector('.todo-workspace-toolbar > div').append(retryButton);

const $ = (s, parent = root) => parent.querySelector(s);
const $$ = (s, parent = root) => [...parent.querySelectorAll(s)];
const ROUTES = { today: '今日', inbox: 'Inbox', tasks: 'タスク一覧', projects: 'プロジェクト', plan: '計画', review: '週次レビュー' };
const esc = (v = '') => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const fmt = (d, full = false) => d ? new Intl.DateTimeFormat('ja-JP', { ...(full ? { year: 'numeric' } : {}), month: 'numeric', day: 'numeric', weekday: 'short' }).format(new Date(`${d}T12:00:00`)) : '未設定';
const dateInput = (name, value = '') => `<input type="date" name="${name}" value="${esc(value)}">`;
const options = (values, selected) => Object.entries(values).map(([value, label]) => `<option value="${esc(value)}" ${value === selected ? 'selected' : ''}>${esc(label)}</option>`).join('');
let storageError = window.PhotoTodoWorkspace.error;
let data = fromNative(native.snapshot());
const initialWork = new URL(location.href).searchParams.get('work');
let route = Object.hasOwn(ROUTES, initialWork) ? initialWork : 'today';
let taskFilter = 'open';
let projectFilter = 'active';
let areaFilter = 'all';
let search = '';
let planOffset = -3;
let currentProjectId = '';
let toastId;
let composition = false;
const dialogFocus = new WeakMap();

function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  clearTimeout(toastId);
  toastId = setTimeout(() => $('#toast').classList.remove('visible'), 3500);
}

function commit(change, message) {
  if (storageError) { toast(storageError); return false; }
  const next = structuredClone(data);
  change(next);
  next.updatedAt = new Date().toISOString();
  try { native.apply(toNative(next, native.snapshot())); }
  catch { $('#saveStatus').textContent = '保存できませんでした'; toast('端末に保存できませんでした。バックアップを書き出してください。'); return false; }
  data = fromNative(native.snapshot());
  $('#saveStatus').textContent = native.status();
  render();
  if ($('#projectDetail').open && currentProjectId) renderDetail(currentProjectId);
  if (message) toast(message);
  return true;
}

function projectOf(task) { return data.projects.find(p => p.id === task.projectId); }
function taskById(id) { return data.tasks.find(t => t.id === id); }
function projectById(id) { return data.projects.find(p => p.id === id); }
function deadline(due) {
  if (!due) return { text: '締切なし', urgent: false };
  const days = diffDays(due);
  return { text: days < 0 ? `${-days}日超過` : days === 0 ? '今日締切' : days === 1 ? '明日締切' : `あと${days}日`, urgent: days <= 3 };
}
function areaTag(area) { return `<span><span class="area-dot ${esc(area)}"></span>${AREAS[area] || '未分類'}</span>`; }
function heading(title, eyebrow, description, actions = '') {
  return `<header class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p class="description">${description}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ''}</header>`;
}
function sectionHead(title, count = '', action = '') { return `<div class="section-head"><h2>${title}</h2>${action || `<span class="count">${count}</span>`}</div>`; }
function empty(title, description, button = '') { return `<div class="empty"><strong>${title}</strong><p>${description}</p>${button}</div>`; }
function button(label, action, id = '', primary = false) { return `<button type="button" class="button${primary ? ' primary' : ''}" data-action="${action}" data-id="${esc(id)}">${label}</button>`; }
function mobileTools() { return `<div class="mobile-tools"><a class="text-button" href="#review">週次レビュー</a><button class="text-button" data-action="backup">バックアップ</button><button class="text-button" data-action="theme">配色切替</button></div>`; }

function render() {
  document.querySelector('#todo-workspace-status').textContent = native.status();
  $('#breadcrumb').textContent = ROUTES[route];
  $$('[data-route]').forEach(link => {
    const active = link.dataset.route === route;
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  $('[data-count=today]').textContent = focusTasks(data).length || '';
  $('[data-count=inbox]').textContent = data.tasks.filter(t => t.state === 'inbox' && isOpen(t)).length || '';
  const views = { today: todayView, inbox: inboxView, tasks: tasksView, projects: projectsView, plan: planView, review: reviewView };
  $('#main').innerHTML = (storageError ? `<p class="warning-panel" role="alert">${esc(storageError)}</p>` : '') + migrationHint() + views[route]() + mobileTools();
  $$('.task-row').forEach(row => {
    const task = data.tasks.find(t => t.id === row.querySelector('.task-title')?.dataset.id);
    const meta = row.querySelector('.task-meta');
    if (task?.sourceCategory && task.sourceCategory !== AREAS[task.area] && meta) {
      const category = document.createElement('span');
      category.textContent = task.sourceCategory;
      meta.append(category);
    }
  });
  if (route === 'plan') {
    const picker = document.createElement('label');
    picker.className = 'plan-date-picker';
    picker.textContent = '表示開始日';
    const input = document.createElement('input');
    input.type = 'date';
    input.id = 'planStartDate';
    input.value = addDays(localDate(), planOffset);
    picker.append(input);
    const first = document.createElement('button');
    first.className = 'button small';
    first.type = 'button';
    first.dataset.action = 'plan-first-deadline';
    first.textContent = '最初の締切へ';
    $('#main .toolbar').append(picker, first);
  }
}
function navigate() {
  const work = new URL(location.href).searchParams.get('work');
  route = Object.hasOwn(ROUTES, work) ? work : 'today';
  data = fromNative(native.snapshot());
  render();
}

function setWorkspaceRoute(value) {
  const url = new URL(location.href);
  url.searchParams.set('tab', 'todo');
  url.searchParams.set('work', value);
  url.hash = '';
  history.pushState({}, '', url);
  navigate();
  root.host.scrollIntoView({ block: 'start' });
}
function migrationHint() {
  if (data.tasks.length || data.projects.length) return '';
  return `<div class="migration-hint"><div><strong>思いついたことから始めましょう</strong><p>Inboxに入力し、取り組む日と締切を分けて整理できます。以前のバックアップがある場合はJSONから取り込めます。</p></div><button class="button" data-action="backup">バックアップ</button></div>`;
}

function captureForm(id = 'capture') {
  return `<form class="capture-form" id="${id}"><input name="capture" aria-label="Inboxに追加する内容" autocomplete="off" placeholder="思いついたことをInboxへ" required maxlength="300"><button type="submit" class="button" disabled>＋ 追加</button></form><p class="capture-result" id="${id}Result" aria-live="polite"></p>`;
}
function taskRow(task, { detail = false } = {}) {
  const p = projectOf(task);
  const due = deadline(task.dueDate);
  const planned = task.plannedDate === localDate();
  const next = p && nextStep(p, data)?.id === task.id;
  return `<article class="task-row${task.completedAt ? ' done' : ''}"><button class="check-button" type="button" data-action="complete" data-id="${esc(task.id)}" aria-pressed="${!!task.completedAt}" aria-label="${esc(task.title)}を${task.completedAt ? '未完了に戻す' : '完了にする'}"><span class="check-ring">${task.completedAt ? '✓' : ''}</span></button><div><button class="task-title" data-action="edit-task" data-id="${esc(task.id)}">${esc(task.title)}</button><div class="task-meta">${areaTag(task.area)}${p && !detail ? `<span>${esc(p.title)}</span>` : ''}${task.state !== 'next' ? `<span>${STATES[task.state]}</span>` : ''}${task.priority === 'high' ? '<span>優先度 高</span>' : ''}${task.dueDate ? `<span class="${due.urgent ? 'urgent' : ''}">締切 ${fmt(task.dueDate)}${task.dueTime ? ` ${esc(task.dueTime)}` : ''}</span>` : ''}${task.plannedDate ? `<span>取り組む日 ${task.plannedDate === localDate() ? '今日' : fmt(task.plannedDate)}</span>` : ''}${next && !task.completedAt ? '<span class="next-pin">次の工程</span>' : ''}</div></div><div class="task-controls">${!task.completedAt ? `<button class="today-toggle" type="button" data-action="plan-today" data-id="${esc(task.id)}" aria-label="${esc(task.title)}を${planned ? '今日の予定から外す' : '今日の予定に入れる'}" aria-pressed="${planned}" title="${planned ? '今日から外す' : '今日に入れる'}">${planned ? '★' : '☆'}</button>` : ''}<button class="icon-button" data-action="edit-task" data-id="${esc(task.id)}" aria-label="${esc(task.title)}を編集" title="編集">⋯</button></div></article>`;
}
function deadlineRow(task) {
  const d = deadline(task.dueDate);
  return `<div class="deadline-row"><span class="deadline-day ${d.urgent ? 'urgent' : ''}">${d.text}</span><div><button class="deadline-name" data-action="edit-task" data-id="${esc(task.id)}">${esc(task.title)}</button><small>${fmt(task.dueDate)}${task.dueTime ? ` ${esc(task.dueTime)}` : ''} · ${AREAS[task.area]}</small></div><button class="today-toggle" data-action="plan-today" data-id="${esc(task.id)}" aria-label="${esc(task.title)}を今日の予定に入れる" title="今日に入れる">☆</button></div>`;
}

function todayView() {
  const today = localDate();
  const focus = focusTasks(data);
  const overdue = data.tasks.filter(t => isOpen(t) && t.state !== 'inbox' && t.dueDate && t.dueDate < today);
  const stale = data.tasks.filter(t => isActionable(t, data) && t.plannedDate && t.plannedDate < today);
  const deadlines = data.tasks.filter(t => isOpen(t) && t.state !== 'inbox' && t.dueDate && diffDays(t.dueDate) <= 7 && !focus.some(f => f.id === t.id)).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const projects = data.projects.filter(p => p.status === 'active').map(p => ({ project: p, task: nextStep(p, data) }));
  return heading('今日、進めること。', new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }).format(new Date()), '学校も、制作も、暮らしも。今日の一歩をここに。', button('今日の行動を選ぶ', 'choose-today')) +
    (data.sample ? '<div class="sample-notice"><strong>サンプル入り</strong><span>架空の課題・制作・用事・応募を入れています。編集して操作感を試せます。</span></div>' : '') +
    `<div class="today-layout"><div class="stack"><section>${sectionHead('今日の行動', `${focus.filter(t => !t.completedAt).length} SELECTED`)}<div class="focus-lead"><span>まずは3件を目安に。締切とは別の、今日の予定です。</span></div>${focus.length ? focus.map(t => taskRow(t)).join('') : empty('今日の行動を選びましょう', '「次にやる」から選ぶと、ここに並びます。', button('行動を選ぶ', 'choose-today'))}${focus.length > 3 ? '<p class="notice-warning">4件以上あります。今日使える時間に合わせて調整できます。</p>' : ''}<div class="focus-footer"><a href="#tasks" class="text-button">すべてのタスクを見る →</a><span class="secondary">完了すると次の工程へ</span></div></section><section>${sectionHead('Quick Capture', 'INBOX')}${captureForm()}</section>${stale.length ? `<section>${sectionHead('取り組む日を過ぎた予定', `${stale.length} 件`)}${stale.slice(0, 3).map(t => taskRow(t)).join('')}</section>` : ''}</div><aside class="stack"><section>${sectionHead('締切の確認', `${deadlines.length} 件`)}${deadlines.length ? deadlines.slice(0, 5).map(deadlineRow).join('') : '<p class="quiet-block">今日の予定以外に、7日以内の締切はありません。</p>'}${deadlines.length > 5 ? '<a class="text-button" href="#tasks">残りは一覧へ →</a>' : ''}<div class="today-summary"><span class="summary-item${overdue.length ? ' urgent' : ''}"><strong>${overdue.length}</strong>期限超過</span><span class="summary-item"><strong>${data.tasks.filter(isOpen).length}</strong>未完了</span></div></section><section>${sectionHead('プロジェクトの次の一歩', `${projects.length} PROJECTS`)}${projects.length ? projects.slice(0, 4).map(({ project: p, task: t }) => `<div class="next-project"><button class="project-link" data-action="project-detail" data-id="${p.id}">${esc(p.title)}</button><div class="next-action"><span aria-hidden="true">↳</span>${t ? `<button class="task-title" data-action="edit-task" data-id="${t.id}">${esc(t.title)}</button>` : `<span class="secondary">${progress(p, data).total ? '工程の状態を確認' : '最初の工程を追加'}</span>`}</div></div>`).join('') : '<p class="quiet-block">まだプロジェクトはありません。</p>'}</section></aside></div>`;
}

function inboxView() {
  const items = data.tasks.filter(t => isOpen(t) && t.state === 'inbox');
  return heading('Inbox', 'CAPTURE → CLARIFY', 'まだ整理していない思いつき。実行する内容・取り組む日・関連先を決めます。') + captureForm('inboxCapture') + `<section style="margin-top:24px">${sectionHead('未整理', `${items.length} 件`)}${items.length ? items.map(t => `<article class="inbox-row"><div><p>${esc(t.title)}</p><small>${fmt(localDate(new Date(t.createdAt)))}に追加</small></div>${button('整理する', 'edit-task', t.id)}</article>`).join('') : empty('Inboxは空です', '思いついたことは、上の入力欄から保存できます。')}</section>`;
}

function tasksView() {
  const filterLabels = { open: '未完了', next: '次にやる', waiting: '待機中', someday: '保留', done: '完了' };
  const items = data.tasks.filter(t => taskFilter === 'done' ? !isOpen(t) : isOpen(t) && (taskFilter === 'open' ? t.state !== 'inbox' : t.state === taskFilter)).filter(t => areaFilter === 'all' || t.area === areaFilter).filter(t => `${t.title} ${projectOf(t)?.title || ''}`.toLowerCase().includes(search.toLowerCase())).sort((a, b) => (a.dueDate || '9999').localeCompare(b.dueDate || '9999'));
  return heading('タスク一覧', 'ACTION INVENTORY', '締切・取り組む日・待ち状態をまとめて整理します。', button('＋ タスクを追加', 'new-task', '', true)) + `<div class="toolbar"><div class="filter-group" aria-label="状態で絞り込み">${Object.entries(filterLabels).map(([v, label]) => `<button class="filter-button" data-action="task-filter" data-id="${v}" aria-pressed="${taskFilter === v}">${label}</button>`).join('')}</div><div class="inline-filters"><select id="areaFilter" aria-label="分野で絞り込み">${options({ all: 'すべての分野', ...AREAS }, areaFilter)}</select><input class="search" id="taskSearch" type="search" value="${esc(search)}" aria-label="タスクを検索" placeholder="タスク・プロジェクト名で検索"></div></div><div class="list-label"><span>${filterLabels[taskFilter]} / ${items.length} 件</span><span>☆ 今日に入れる</span></div>${items.length ? items.map(t => taskRow(t)).join('') : empty('該当するタスクはありません', '条件を変更するか、新しいタスクを追加してください。', button('タスクを追加', 'new-task'))}`;
}

function projectsView() {
  const list = data.projects.filter(p => projectFilter === 'all' || p.status === projectFilter);
  return heading('プロジェクト', 'WORK IN PROGRESS', '課題、作品、コンテスト。複数の工程を持つものをまとめて管理します。', button('＋ プロジェクト', 'new-project', '', true)) + `<div class="toolbar"><div class="filter-group" aria-label="プロジェクトの状態">${Object.entries({ active: '進行中', paused: '保留', completed: '完了', all: 'すべて' }).map(([v, label]) => `<button class="filter-button" data-action="project-filter" data-id="${v}" aria-pressed="${projectFilter === v}">${label}</button>`).join('')}</div><span class="secondary">${list.length} プロジェクト</span></div>${list.length ? `<div class="project-grid">${list.map(p => {
    const step = nextStep(p, data);
    const pr = progress(p, data);
    const d = deadline(p.dueDate);
    return `<article class="project-card"><div class="project-card-top">${areaTag(p.area)}<div class="project-badges">${p.kind === 'contest' ? `<span class="badge">${STAGES[p.contest?.stage] || '応募'}</span>` : ''}<span class="badge">${{ active: '進行中', paused: '保留', completed: '完了' }[p.status]}</span></div></div><div><button class="project-heading" data-action="project-detail" data-id="${p.id}">${esc(p.title)}</button><p class="project-description">${esc(p.description || '説明なし')}</p></div><div class="project-card-next"><span class="eyebrow">NEXT ACTION</span>${step ? `<button class="task-title" data-action="edit-task" data-id="${step.id}">${esc(step.title)}</button>` : `<span class="secondary">${p.status === 'paused' ? '再開まで保留中' : p.status === 'completed' ? 'プロジェクト完了' : '次の工程を設定する'}</span>`}</div><div class="project-card-footer"><div class="progress-meta"><span>工程 ${pr.done} / ${pr.total}</span><span class="${d.urgent ? 'urgent' : ''}">${p.dueDate ? `${fmt(p.dueDate)} · ${d.text}` : '締切未設定'}</span></div><div class="progress-bar" role="meter" aria-label="${esc(p.title)}の完了工程" aria-valuenow="${pr.done}" aria-valuemin="0" aria-valuemax="${Math.max(pr.total, 1)}"><span style="width:${pr.total ? pr.done / pr.total * 100 : 0}%"></span></div></div></article>`;
  }).join('')}</div>` : empty('この状態のプロジェクトはありません', '複数の作業がある課題や制作を、プロジェクトとして登録できます。', button('プロジェクトを作る', 'new-project'))}`;
}

function position(date, start) { return Math.max(0, Math.min(100, diffDays(date, start) / 21 * 100)); }
function range(start, end, visibleStart) {
  if (!start || !end || end < visibleStart || start > addDays(visibleStart, 21)) return null;
  const left = position(start, visibleStart);
  return { left, width: Math.max(.5, position(end, visibleStart) - left) };
}
function railGrid(start) {
  return `<div class="day-grid">${Array.from({ length: 21 }, (_, i) => {
    const date = addDays(start, i);
    const weekend = [0, 6].includes(new Date(`${date}T12:00:00`).getDay());
    return `${weekend ? `<span class="day-weekend" style="left:${i / 21 * 100}%;width:${100 / 21}%"></span>` : ''}<span class="day-line" style="left:${i / 21 * 100}%"></span>`;
  }).join('')}</div>${localDate() >= start && localDate() <= addDays(start, 21) ? `<span class="today-line" style="left:${position(localDate(), start)}%"></span>` : ''}`;
}
function planView() {
  const start = addDays(localDate(), planOffset);
  const end = addDays(start, 21);
  const projects = data.projects.filter(p => p.status === 'active');
  const standalone = data.tasks.filter(t => !t.projectId && isActionable(t, data) && t.dueDate);
  const grid = railGrid(start);
  const timelineProjects = projects.map(p => {
    const r = range(p.startDate, p.dueDate, start);
    const steps = data.tasks.filter(t => t.projectId === p.id && t.dueDate).map(t => {
      if (t.startDate) {
        const seg = range(t.startDate, t.dueDate, start);
        return seg ? `<button class="step-segment${t.completedAt ? ' complete' : ''}${p.dueDate && t.dueDate > p.dueDate ? ' late' : ''}" style="left:${seg.left}%;width:${seg.width}%" data-action="edit-task" data-id="${t.id}" title="${esc(t.title)} / ${fmt(t.startDate)}〜${fmt(t.dueDate)}${t.completedAt ? ' / 完了' : ''}" aria-label="${esc(t.title)} ${fmt(t.startDate)}から${fmt(t.dueDate)}">${seg.width >= 11 ? esc(t.title) : ''}</button>` : '';
      }
      return t.dueDate >= start && t.dueDate <= end ? `<button class="step-segment marker${t.completedAt ? ' complete' : ''}" style="left:${position(t.dueDate, start)}%" data-action="edit-task" data-id="${t.id}" title="${esc(t.title)} / ${fmt(t.dueDate)}" aria-label="${esc(t.title)} 締切${fmt(t.dueDate)}"></button>` : '';
    }).join('');
    return `<div class="timeline-row"><div class="timeline-name"><button data-action="project-detail" data-id="${p.id}">${esc(p.title)}</button><small>${AREAS[p.area]} · ${p.startDate ? fmt(p.startDate) : '開始未設定'} → ${fmt(p.dueDate)}</small></div><div class="timeline-rail">${grid}${r ? `<span class="project-bar" style="left:${r.left}%;width:${r.width}%"></span>` : '<span class="rail-empty">表示範囲外、または期間未設定</span>'}${steps}${p.dueDate >= start && p.dueDate <= end ? `<span class="deadline-mark project-final" style="left:${position(p.dueDate, start)}%" title="最終締切 ${fmt(p.dueDate)}"></span>` : ''}</div></div>`;
  }).join('');
  const timelineTasks = standalone.map(t => {
    const from = t.startDate || localDate(new Date(t.createdAt));
    const r = range(from, t.dueDate, start);
    const urgent = deadline(t.dueDate).urgent;
    return `<div class="timeline-row"><div class="timeline-name"><button data-action="edit-task" data-id="${t.id}">${esc(t.title)}</button><small>${AREAS[t.area]} · 締切 ${fmt(t.dueDate)}</small></div><div class="timeline-rail">${grid}${r ? `<span class="attention-bar${urgent ? ' urgent' : ''}" style="left:${r.left}%;width:${r.width}%"></span>` : ''}${t.dueDate >= start && t.dueDate <= end ? `<span class="deadline-mark${urgent ? ' urgent' : ''}" style="left:${position(t.dueDate, start)}%" title="締切 ${fmt(t.dueDate)}"></span>` : `<span class="rail-empty">締切は表示範囲${t.dueDate < start ? 'より前' : 'より先'}</span>`}</div></div>`;
  }).join('');
  return heading('計画', 'TIME & CAPACITY', '工程と締切を見て、取り組む日を調整します。', `<a class="button" href="#review">週次レビュー →</a>`) + `<div class="toolbar"><span class="secondary">${fmt(start)} — ${fmt(end)}</span><div class="filter-group"><button class="button small" data-action="plan-prev" aria-label="前の週">←</button><button class="button small" data-action="plan-reset">今日へ</button><button class="button small" data-action="plan-next" aria-label="次の週">→</button></div></div><div class="timeline-legend"><span><i class="legend-line"></i>単独タスク：注意期間</span><span><i class="legend-line thick"></i>プロジェクト：作業期間と工程</span><span>縦線：今日 / 終端：締切</span></div><div class="timeline"><div class="timeline-heading"><div class="timeline-heading-label">TASK / PROJECT</div><div class="timeline-scale">${Array.from({ length: 7 }, (_, i) => `<span class="scale-label" style="left:${(i * 3 + 1) / 21 * 100}%">${fmt(addDays(start, i * 3 + 1)).split('(')[0]}</span>`).join('')}${localDate() >= start && localDate() <= end ? `<span class="scale-label current" style="left:${position(localDate(), start)}%;top:31px">今日</span>` : ''}</div></div>${timelineProjects}${timelineTasks}</div><div class="mobile-agenda"><p class="plan-caption">${fmt(start)}〜${fmt(end)}の工程・締切</p>${data.tasks.filter(t => isOpen(t) && t.dueDate && t.dueDate >= start && t.dueDate <= end).sort((a, b) => a.dueDate.localeCompare(b.dueDate)).map(t => taskRow(t)).join('') || empty('この期間の締切はありません', '日付を移動して、ほかの期間を確認できます。')}</div><div class="review-link"><div><h3>予定を見直す時間を。</h3><p class="secondary">未整理・待機・工程の抜けを週に一度確認します。</p></div><a class="button" href="#review">レビューへ</a></div>`;
}

function reviewView() {
  const checks = data.reviews[weekKey()] || {};
  const inbox = data.tasks.filter(t => isOpen(t) && t.state === 'inbox').length;
  const waiting = data.tasks.filter(t => isOpen(t) && t.state === 'waiting').length;
  const missing = data.projects.filter(p => p.status === 'active' && !nextStep(p, data));
  const late = data.tasks.filter(t => isOpen(t) && t.dueDate && t.dueDate < localDate() && t.state !== 'inbox');
  const steps = [
    ['inbox', 'Inboxを整理する', `未整理 ${inbox} 件。実行する・保留する・プロジェクトに分ける。`],
    ['due', '締切と過ぎた予定を見直す', `期限超過 ${late.length} 件。締切と取り組む日を分けて調整する。`],
    ['waiting', '待機中を確認する', `待機中 ${waiting} 件。返信待ちや素材待ちに、確認する日を決める。`],
    ['projects', 'プロジェクトの次の一手を決める', `次の行動がない進行中プロジェクト ${missing.length} 件。`],
    ['capacity', '今週進める量を絞る', '学校の予定も含め、使える時間に合わせる。見送るものは保留へ。']
  ];
  return heading('週次レビュー', `WEEK OF ${fmt(weekKey())}`, '15分で予定を整える。増やすだけでなく、待つ・見送る判断も。', '<a class="button" href="#plan">計画へ戻る</a>') + `<div class="review-layout"><section>${sectionHead('今週の点検', `${steps.filter(([id]) => checks[id]).length} / 5`)}${steps.map(([id, title, note]) => `<label class="review-check"><input type="checkbox" data-review="${id}" ${checks[id] ? 'checked' : ''}><span><strong>${title}</strong><p>${note}</p></span></label>`).join('')}</section><aside>${sectionHead('いま見直したいもの', `${missing.length + late.length} 件`)}${late.slice(0, 4).map(t => `<div class="review-risk"><button class="text-button" data-action="edit-task" data-id="${t.id}">${esc(t.title)}</button><small class="urgent">${deadline(t.dueDate).text}</small></div>`).join('')}${missing.map(p => `<div class="review-risk"><button class="text-button" data-action="project-detail" data-id="${p.id}">${esc(p.title)}</button><small>次の行動が未設定</small></div>`).join('')}${!late.length && !missing.length ? '<p class="quiet-block">次の行動と締切は整理されています。</p>' : ''}</aside></div>`;
}

function showDialog(selector) {
  const el = $(selector);
  if (!el.open) {
    const trigger = root.activeElement || document.activeElement;
    dialogFocus.set(el, { trigger, action: trigger?.dataset.action, id: trigger?.dataset.id });
    el.showModal();
  }
}
function taskEditor(id = '', projectId = '') {
  const t = taskById(id) || { id: '', title: '', area: projectById(projectId)?.area || 'life', projectId, state: 'next', priority: 'normal', startDate: '', dueDate: '', dueTime: '', plannedDate: '', note: '' };
  const title = id ? t.state === 'inbox' ? 'Inboxを整理' : 'タスクを編集' : 'タスクを追加';
  $('#editorContent').innerHTML = `<form id="taskForm" class="dialog-content"><div class="dialog-heading"><h2 id="editorTitle">${title}</h2><button class="icon-button" type="button" data-action="close" aria-label="閉じる">×</button></div><input type="hidden" name="id" value="${esc(t.id)}"><div class="form-grid"><label class="field full">タスク名 <input name="title" required maxlength="300" value="${esc(t.title)}" placeholder="例：問題集の問1〜5を解く"></label><label class="field">分野<select name="area">${options(AREAS, t.area)}</select></label><label class="field">状態<select name="state">${options(STATES, t.state === 'inbox' ? 'next' : t.state)}</select></label><label class="field full">関連プロジェクト<select name="projectId"><option value="">単独タスク</option>${data.projects.map(p => `<option value="${p.id}" ${p.id === t.projectId ? 'selected' : ''}>${esc(p.title)}</option>`).join('')}</select></label><div class="date-section-label">実行の予定</div><label class="field">取り組む日${dateInput('plannedDate', t.plannedDate)}<small>自分がこの作業を進める日</small></label><label class="field">優先度<select name="priority">${options(PRIORITIES, t.priority)}</select></label><div class="date-section-label">締切・期間</div><label class="field">締切日${dateInput('dueDate', t.dueDate)}<small>提出や完了が必要な日</small></label><label class="field">締切時刻<input type="time" name="dueTime" value="${esc(t.dueTime || '')}"></label><label class="field full">作業開始日（任意）${dateInput('startDate', t.startDate)}</label><label class="field full">メモ<textarea name="note">${esc(t.note)}</textarea></label>${t.projectId ? `<label class="field full"><span>次の工程</span><select name="pinNext">${options({ no: '工程の順序に合わせる', yes: 'このタスクを次の一手にする' }, projectById(t.projectId)?.nextTaskId === t.id ? 'yes' : 'no')}</select></label>` : ''}</div><p class="form-message" id="formError" role="alert"></p><div class="dialog-footer">${id ? `<button type="button" class="button push-left" data-action="delete-task" data-id="${t.id}">タスクを削除</button>` : ''}<button type="button" class="button" data-action="close">キャンセル</button><button class="button primary" type="submit">${t.state === 'inbox' ? '整理して保存' : '保存する'}</button></div></form>`;
  showDialog('#editor');
  if (!t.projectId && id && !t.completedAt) {
    const convert = document.createElement('button');
    convert.type = 'button';
    convert.className = 'button';
    convert.dataset.action = 'convert-inbox';
    convert.dataset.id = id;
    convert.textContent = '工程のあるプロジェクトにする';
    const field = document.createElement('div');
    field.className = 'field full';
    field.append(convert);
    $('#taskForm .form-grid').append(field);
  }
  $('#taskForm [name=title]').focus();
}

function projectEditor(id = '', sourceId = '') {
  const source = taskById(sourceId);
  const p = projectById(id) || { id: source && source.state !== 'inbox' ? source.id : '', title: source?.title || '', kind: 'project', area: source?.area || 'creative', status: 'active', startDate: source?.startDate || localDate(), dueDate: source?.dueDate || '', dueTime: source?.dueTime || '', description: source?.note || '', contest: { organizer: '', url: '', stage: 'considering', checks: [] } };
  const c = p.contest || {};
  $('#editorContent').innerHTML = `<form id="projectForm" class="dialog-content"><div class="dialog-heading"><h2 id="editorTitle">${id ? 'プロジェクトを編集' : 'プロジェクトを作成'}</h2><button class="icon-button" type="button" data-action="close" aria-label="閉じる">×</button></div><input type="hidden" name="id" value="${p.id}"><div class="form-grid"><label class="field full">プロジェクト名<input name="title" value="${esc(p.title)}" required maxlength="300" placeholder="例：文化祭のポスターを制作する"></label><label class="field">種類<select name="kind" id="projectKind">${options({ project: '通常のプロジェクト', contest: 'コンテスト応募' }, p.kind)}</select></label><label class="field">分野<select name="area">${options(AREAS, p.area)}</select></label><label class="field">状態<select name="status">${options({ active: '進行中', paused: '保留', completed: '完了' }, p.status)}</select></label><label class="field">開始日${dateInput('startDate', p.startDate)}</label><label class="field">最終締切${dateInput('dueDate', p.dueDate)}</label><label class="field">締切時刻<input type="time" name="dueTime" value="${esc(p.dueTime || '')}"></label><label class="field full">説明<textarea name="description">${esc(p.description)}</textarea></label><div class="contest-fields" ${p.kind !== 'contest' ? 'hidden' : ''}><label class="field">主催者<input name="organizer" value="${esc(c.organizer || '')}"></label><label class="field">応募状態<select name="stage">${options(STAGES, c.stage || 'considering')}</select></label><label class="field full">募集・応募URL<input type="url" name="url" value="${esc(c.url || '')}" placeholder="https://"></label><label class="field full">応募条件・提出物<textarea name="checks" placeholder="1行に1項目">${esc((c.checks || []).map(item => item.title).join('\n'))}</textarea><small>工程とは別に、応募資格やファイル形式を確認します。</small></label></div></div><p class="form-message" id="formError" role="alert"></p><div class="dialog-footer"><button type="button" class="button" data-action="close">キャンセル</button><button class="button primary" type="submit">保存する</button></div></form>`;
  showDialog('#editor');
  if (source) {
    const marker = document.createElement('input');
    marker.type = 'hidden';
    marker.name = 'sourceTaskId';
    marker.value = source.id;
    $('#projectForm').append(marker);
    const field = document.createElement('label');
    field.className = 'field full';
    field.textContent = '最初の具体的な行動';
    const input = document.createElement('input');
    input.name = 'firstAction';
    input.required = true;
    input.maxLength = 300;
    input.placeholder = '例：展示の構成案を3つ書く';
    field.append(input);
    $('#projectForm .form-grid').prepend(field);
  }
  $('#projectForm [name=title]').focus();
}

function renderDetail(id) {
  const p = projectById(id);
  if (!p) return;
  currentProjectId = id;
  const steps = data.tasks.filter(t => t.projectId === id).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const pr = progress(p, data);
  const next = nextStep(p, data);
  const lateSteps = steps.filter(t => isOpen(t) && t.dueDate && p.dueDate && t.dueDate > p.dueDate);
  const incomplete = steps.some(isOpen);
  const contest = p.contest || {};
  $('#detailContent').innerHTML = `<div class="dialog-content"><div class="dialog-heading"><div><span class="eyebrow">${AREAS[p.area]} / ${p.kind === 'contest' ? 'CONTEST' : 'PROJECT'}</span><h2 id="detailTitle">${esc(p.title)}</h2></div><button class="icon-button" data-action="close" aria-label="閉じる">×</button></div><p class="detail-description">${esc(p.description || '説明はまだありません。')}</p><div class="detail-dates"><div><span>作業期間</span><strong>${p.startDate ? fmt(p.startDate) : '未設定'} → ${fmt(p.dueDate)}</strong></div><div><span>最終締切</span><strong>${fmt(p.dueDate)} ${esc(p.dueTime || '')}</strong></div><div><span>進捗 / 状態</span><strong>工程 ${pr.done}/${pr.total} · ${{ active: '進行中', paused: '保留', completed: '完了' }[p.status]}</strong></div></div>${lateSteps.length ? `<p class="warning-panel">${lateSteps.length}件の工程が最終締切を超えています。親の締切は変更していません。</p>` : ''}<div class="detail-body"><section>${sectionHead('作業ステップ', '', `<button class="text-button" data-action="new-task" data-id="${p.id}">＋ 工程を追加</button>`)}${steps.length ? steps.map(t => taskRow(t, { detail: true })).join('') : empty('最初の一歩を決めましょう', '「構成案を3つ書く」など、着手できる行動を追加します。', button('工程を追加', 'new-task', p.id))}</section><aside><h3>次の一手</h3><p class="quiet-block">${next ? esc(next.title) : p.status === 'paused' ? 'プロジェクトは保留中です。' : '実行できる工程がありません。'}</p>${p.kind === 'contest' ? `<h3>応募条件・提出物</h3>${(contest.checks || []).map(item => `<label class="detail-check"><input type="checkbox" data-condition="${item.id}" data-project="${p.id}" ${item.done ? 'checked' : ''}><span>${esc(item.title)}</span></label>`).join('') || '<p class="quiet-block">条件は未登録です。</p>'}<p class="quiet-block">応募状態：${STAGES[contest.stage] || '未設定'}</p>${safeUrl(contest.url) ? `<a class="button" href="${esc(contest.url)}" target="_blank" rel="noopener noreferrer">募集・応募ページ ↗</a>` : ''}` : `<h3>取り組み方</h3><p class="quiet-block">次の工程を今日に入れて進めます。待機・保留の工程は次の一手から外れます。</p>`}</aside></div><div class="detail-bottom">${button('編集する', 'edit-project', p.id)}<button class="button" data-action="project-status" data-id="${p.id}">${p.status === 'completed' ? '進行中に戻す' : p.status === 'paused' ? '再開する' : '完了にする'}</button></div>${p.status === 'active' && incomplete ? '<p class="secondary" style="margin-top:12px">未完了の工程がある場合、完了操作の前に確認します。</p>' : ''}</div>`;
}
function safeUrl(value) { try { return ['https:', 'http:'].includes(new URL(value).protocol); } catch { return false; } }

async function confirmAction(title, description, label = '削除する') {
  $('#confirmTitle').textContent = title;
  $('#confirmText').textContent = description;
  $('#confirmDialog [value=confirm]').textContent = label;
  showDialog('#confirmDialog');
  return new Promise(resolve => $('#confirmDialog').addEventListener('close', () => resolve($('#confirmDialog').returnValue === 'confirm'), { once: true }));
}

root.addEventListener('click', async event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && Object.hasOwn(ROUTES, link.getAttribute('href').slice(1))) {
    event.preventDefault();
    setWorkspaceRoute(link.getAttribute('href').slice(1));
    return;
  }
  const el = event.target.closest('[data-action]');
  if (!el) return;
  const { action, id } = el.dataset;
  if (action === 'import-preview') {
    if (await confirmAction('試用版のTodoを元サイトへ取り込みますか？', '現在のTodoを控えに保存してから統合します。同じIDは新しい更新を優先し、写真・アカウントは変更しません。', '取り込む')) {
      try { native.importOriginal(native.previewBackup()); data = fromNative(native.snapshot()); render(); toast('試用版のTodoを統合しました'); }
      catch (error) { $('#importMessage').textContent = '取り込めませんでした: ' + error.message; }
    }
    return;
  }
  if (action === 'export-baseline') {
    const url = URL.createObjectURL(new Blob([JSON.stringify(native.baselineBackup(), null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `photo-tracker-original-data-${localDate()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('統合前のTodoを書き出しました');
    return;
  }
  if (action === 'plan-first-deadline') {
    const dates = [...data.tasks.filter(isOpen), ...data.projects.filter(p => p.status === 'active')].map(t => t.dueDate).filter(Boolean).sort();
    if (dates.length) { planOffset = diffDays(dates[0]) - 2; render(); }
    return;
  }
  if (action === 'close') { el.closest('dialog')?.close(); return; }
  if (action === 'new-task' || action === 'edit-task') return taskEditor(action === 'edit-task' ? id : '', action === 'new-task' ? id : '');
  if (action === 'new-project' || action === 'edit-project') return projectEditor(action === 'edit-project' ? id : '');
  if (action === 'convert-inbox') return projectEditor('', id);
  if (action === 'project-detail') { renderDetail(id); showDialog('#projectDetail'); return; }
  if (action === 'task-filter') { taskFilter = id; render(); return; }
  if (action === 'project-filter') { projectFilter = id; render(); return; }
  if (action === 'choose-today') { taskFilter = 'next'; setWorkspaceRoute('tasks'); return; }
  if (action === 'complete') {
    const t = taskById(id);
    if (!t) return;
    const reopening = !!t.completedAt;
    commit(d => { const target = d.tasks.find(item => item.id === id); target.completedAt = reopening ? '' : new Date().toISOString(); }, reopening ? '未完了に戻しました' : '完了しました。次の工程を確認できます。');
    return;
  }
  if (action === 'plan-today') {
    const t = taskById(id);
    if (!t) return;
    if (!isActionable(t, data)) { toast('状態を「次にやる」にして、プロジェクトを再開すると今日に入れられます。'); taskEditor(id); return; }
    const remove = t.plannedDate === localDate();
    commit(d => { d.tasks.find(item => item.id === id).plannedDate = remove ? '' : localDate(); }, remove ? '今日の予定から外しました。締切はそのままです。' : '今日の予定に入れました。締切はそのままです。');
    return;
  }
  if (action === 'delete-task') {
    const t = taskById(id);
    if (t && await confirmAction('タスクを削除しますか？', `「${t.title}」を削除します。Classroomなど外部由来のタスクは再同期でも戻らないよう非表示にします。`)) {
      if (commit(d => { d.tasks = d.tasks.filter(item => item.id !== id); }, 'タスクを削除しました')) $('#editor').close();
    }
    return;
  }
  if (action === 'project-status') {
    const p = projectById(id);
    const target = p.status === 'active' ? 'completed' : 'active';
    if (target === 'completed' && data.tasks.some(t => t.projectId === id && isOpen(t)) && !await confirmAction('未完了の工程があります', 'プロジェクトだけを完了にします。工程の完了状態は変わりません。', 'プロジェクトを完了')) return;
    commit(d => { d.projects.find(item => item.id === id).status = target; }, target === 'active' ? 'プロジェクトを再開しました' : 'プロジェクトを完了しました');
    return;
  }
  if (action.startsWith('plan-')) { planOffset = action === 'plan-prev' ? planOffset - 7 : action === 'plan-next' ? planOffset + 7 : -3; render(); return; }
  if (action === 'backup') showDialog('#backupDialog');
  if (action === 'theme') toggleTheme();
});

root.addEventListener('submit', event => {
  if (event.target.matches('.capture-form')) {
    event.preventDefault();
    if (composition) return;
    const input = event.target.elements.capture;
    const title = input.value.trim();
    if (!title) return;
    const formId = event.target.id;
    const task = { id: uid(), title, area: 'life', state: 'inbox', priority: 'normal', projectId: '', plannedDate: '', dueDate: '', dueTime: '', startDate: '', note: '', completedAt: '', createdAt: new Date().toISOString() };
    if (commit(d => d.tasks.unshift(task), 'Inboxに追加しました')) {
      const result = $(`#${formId}Result`);
      if (result) result.innerHTML = `Inboxに保存しました。 <button type="button" class="text-button" data-action="edit-task" data-id="${task.id}">今すぐ整理 →</button>`;
      $(`#${formId} input`)?.focus();
    }
    return;
  }
  if (!event.target.matches('#taskForm, #projectForm')) return;
  event.preventDefault();
  const fields = Object.fromEntries(new FormData(event.target));
  fields.title = fields.title.trim();
  if (!fields.title) return formError('タイトルを入力してください。', 'title');
  if (fields.startDate && fields.dueDate && fields.startDate > fields.dueDate) return formError('開始日は締切日以前にしてください。', 'startDate');
  if (fields.dueTime && !fields.dueDate) return formError('締切時刻を設定する場合は、締切日も入力してください。', 'dueDate');
  if (event.target.matches('#taskForm')) {
    const existing = taskById(fields.id);
    const { pinNext, ...taskFields } = fields;
    const task = { completedAt: '', createdAt: new Date().toISOString(), ...existing, ...taskFields, id: fields.id || uid(), order: existing?.order ?? data.tasks.filter(t => t.projectId === fields.projectId).length + 1 };
    if (commit(d => {
      const index = d.tasks.findIndex(t => t.id === task.id);
      if (index >= 0) d.tasks[index] = task; else d.tasks.push(task);
      if (pinNext === 'yes' && task.projectId) d.projects.find(p => p.id === task.projectId).nextTaskId = task.id;
      else if (pinNext === 'no' && task.projectId && d.projects.find(p => p.id === task.projectId)?.nextTaskId === task.id) d.projects.find(p => p.id === task.projectId).nextTaskId = '';
    }, 'タスクを保存しました')) $('#editor').close();
  } else {
    const existing = projectById(fields.id);
    if (fields.url && !safeUrl(fields.url)) return formError('URLはhttps://またはhttp://で入力してください。', 'url');
    const oldChecks = new Map((existing?.contest?.checks || []).map(c => [c.title, c]));
    const p = { ...existing, id: fields.id || uid(), title: fields.title, kind: fields.kind, area: fields.area, status: fields.status, startDate: fields.startDate, dueDate: fields.dueDate, dueTime: fields.dueTime, description: fields.description, nextTaskId: existing?.nextTaskId || '', contest: { ...existing?.contest, organizer: fields.organizer, url: fields.url, stage: fields.stage, checks: fields.checks.split('\n').map(s => s.trim()).filter(Boolean).map(title => oldChecks.get(title) || { id: uid(), title, done: false }) } };
    if (fields.sourceTaskId && !fields.firstAction?.trim()) return formError('最初の行動を入力してください。', 'firstAction');
    if (commit(d => {
      const index = d.projects.findIndex(item => item.id === p.id);
      if (index >= 0) d.projects[index] = p; else d.projects.push(p);
      if (fields.sourceTaskId) {
        const source = d.tasks.find(t => t.id === fields.sourceTaskId);
        if (source) {
          source.originalCaptureTitle ||= source.title;
          source.title = fields.firstAction.trim();
          source.projectId = p.id;
          source.state = 'next';
          source.order = 1;
          d.projects.find(item => item.id === p.id).nextTaskId = source.id;
        }
      }
    }, 'プロジェクトを保存しました')) {
      $('#editor').close();
      renderDetail(p.id);
      showDialog('#projectDetail');
    }
  }
});

function formError(message, name) {
  $('#formError').textContent = message;
  const field = $(`#editor [name="${name}"]`);
  field?.setAttribute('aria-invalid', 'true');
  field?.setAttribute('aria-describedby', 'formError');
  field?.focus();
}
root.addEventListener('compositionstart', () => { composition = true; });
root.addEventListener('compositionend', () => { composition = false; });
root.addEventListener('keydown', event => {
  if (event.target.closest('.capture-form') && event.key === 'Enter' && (event.isComposing || event.keyCode === 229 || composition)) event.preventDefault();
});
root.addEventListener('input', event => {
  if (event.target.name === 'capture') event.target.form.querySelector('[type=submit]').disabled = !event.target.value.trim();
  if (event.target.id === 'taskSearch') {
    search = event.target.value;
    const caret = event.target.selectionStart;
    render();
    $('#taskSearch').focus();
    if ($('#taskSearch').type !== 'search') $('#taskSearch').setSelectionRange(caret, caret);
  }
  if (event.target.hasAttribute('aria-invalid')) event.target.removeAttribute('aria-invalid');
});
root.addEventListener('change', event => {
  const el = event.target;
  if (el.id === 'planStartDate' && el.value) { planOffset = diffDays(el.value); render(); }
  if (el.id === 'areaFilter') { areaFilter = el.value; render(); }
  if (el.id === 'projectKind') $('.contest-fields').hidden = el.value !== 'contest';
  if (el.hasAttribute('data-condition')) commit(d => { d.projects.find(p => p.id === el.dataset.project).contest.checks.find(c => c.id === el.dataset.condition).done = el.checked; }, '応募条件を更新しました');
  if (el.hasAttribute('data-review')) commit(d => { const key = weekKey(); d.reviews[key] ||= {}; d.reviews[key][el.dataset.review] = el.checked; }, 'レビューを保存しました');
});

function toggleTheme() {
  document.querySelector('#theme-btn').click();
  syncTheme();
}
function syncTheme() {
  const light = document.documentElement.classList.contains('light');
  root.host.dataset.theme = light ? 'light' : 'dark';
  $('#themeButton').textContent = light ? 'ダークモード' : 'ライトモード';
}
syncTheme();
new MutationObserver(syncTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
$('#themeButton').addEventListener('click', toggleTheme);
$('#backupButton').addEventListener('click', () => showDialog('#backupDialog'));
$('#importButton').addEventListener('click', () => $('#importFile').click());
$('#exportButton').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify(native.originalBackup(), null, 2)], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = `photo-tracker-${localDate()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('バックアップを書き出しました');
});
$('#importFile').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 5 * 1024 * 1024) throw new Error('5MB以下のJSONファイルを選んでください。');
    const parsed = JSON.parse(await file.text());
    if (parsed.meta && Array.isArray(parsed.manualTasks)) {
      if (!await confirmAction('Todoのバックアップを取り込みますか？', '同じIDは更新日時を比べて統合します。現在のTodoを控えに保存し、写真・アカウント・同期キーは変更しません。', '取り込む')) return;
      native.importOriginal(parsed);
      data = fromNative(native.snapshot());
      render();
      $('#importMessage').textContent = 'Todoを統合しました。写真とアカウント設定は変更していません。';
      event.target.value = '';
      return;
    }
    const imported = validateData(parsed);
    const taskIds = new Set(data.tasks.map(t => t.id));
    const projectIds = new Set(data.projects.map(p => p.id));
    let count = 0;
    if (commit(d => {
      imported.projects.forEach(p => { if (!projectIds.has(p.id)) { d.projects.push(p); count++; } });
      imported.tasks.forEach(t => { if (!taskIds.has(t.id)) { d.tasks.push(t); count++; } });
    }, 'バックアップを統合しました')) $('#importMessage').textContent = `${count}件を追加しました。同じIDの既存データは変更していません。`;
  } catch (error) { $('#importMessage').textContent = error.message || '読み込みに失敗しました。現在のデータは変更していません。'; }
  event.target.value = '';
});
$$('dialog').forEach(dialog => dialog.addEventListener('close', () => {
  if (root.activeElement && root.activeElement !== $('#main')) return;
  const target = dialogFocus.get(dialog);
  if (target?.trigger?.isConnected) { target.trigger.focus(); return; }
  const activeDialog = $$('dialog[open]').at(-1);
  if (activeDialog) { activeDialog.querySelector('button, input, select')?.focus(); return; }
  const replacement = target?.action ? $$('[data-action]').find(el => el.dataset.action === target.action && el.dataset.id === target.id) : null;
  (replacement || $('#main')).focus();
}));
window.addEventListener('popstate', navigate);
window.addEventListener('photo-todo-workspace-change', () => {
  const drafts = $$('.capture-form input').map(input => ({ id: input.form.id, value: input.value, focused: input === root.activeElement }));
  data = fromNative(native.snapshot());
  render();
  drafts.forEach(draft => {
    const input = $(`#${draft.id} input`);
    if (!input || !draft.value) return;
    input.value = draft.value;
    input.form.querySelector('[type=submit]').disabled = !draft.value.trim();
    if (draft.focused) input.focus({ preventScroll: true });
  });
  if ($('#projectDetail').open) renderDetail(currentProjectId);
});
let activeDate = localDate();
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && localDate() !== activeDate) { activeDate = localDate(); render(); }
});
render();
