export const KEY = 'work-desk-lab-v1';
export const AREAS = { school: '学校', creative: '制作', life: '生活', contest: 'コンテスト' };
export const STATES = { inbox: '未整理', next: '次にやる', waiting: '待機中', someday: '保留' };
export const PRIORITIES = { normal: '通常', high: '高', low: '低' };
export const STAGES = { considering: '検討中', preparing: '準備中', ready: '提出準備', submitted: '応募済み', result: '結果待ち' };
export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function addDays(value, days) {
  const d = new Date(`${value}T12:00:00`);
  d.setDate(d.getDate() + days);
  return localDate(d);
}
export function diffDays(value, today = localDate()) {
  return Math.round((Date.parse(`${value}T12:00:00Z`) - Date.parse(`${today}T12:00:00Z`)) / 86400000);
}
export const uid = () => crypto.randomUUID();
export function isOpen(task) { return !task.completedAt; }
export function isActionable(task, data) {
  const project = data.projects.find(p => p.id === task.projectId);
  return isOpen(task) && task.state === 'next' && (!project || project.status === 'active');
}
export function nextStep(project, data) {
  if (project.status !== 'active') return null;
  const tasks = data.tasks.filter(t => t.projectId === project.id && isActionable(t, data));
  return tasks.find(t => t.id === project.nextTaskId) || tasks.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))[0] || null;
}
export function focusTasks(data, today = localDate()) {
  return data.tasks.filter(t => t.plannedDate === today && isActionable(t, data));
}
export function progress(project, data) {
  const steps = data.tasks.filter(t => t.projectId === project.id);
  return { done: steps.filter(t => t.completedAt).length, total: steps.length };
}
export function weekKey(today = localDate()) {
  const d = new Date(`${today}T12:00:00`);
  return addDays(today, -((d.getDay() + 6) % 7));
}
export function createSeed(today = localDate()) {
  const date = n => addDays(today, n);
  const base = { state: 'next', priority: 'normal', dueDate: '', dueTime: '', plannedDate: '', startDate: '', projectId: '', completedAt: '', note: '', createdAt: new Date().toISOString() };
  const task = (id, title, area, extra = {}) => ({ ...base, id, title, area, ...extra });
  return {
    version: 1, sample: true, updatedAt: new Date().toISOString(), reviews: {},
    projects: [
      { id: 'sample-film', title: '文化祭のダイジェスト動画', area: 'creative', kind: 'project', status: 'active', startDate: date(-3), dueDate: date(9), dueTime: '18:00', description: '写真部の展示に合わせて、60秒のダイジェストを仕上げる。', nextTaskId: 'sample-cut', contest: { checks: [] } },
      { id: 'sample-math', title: '数学の小テスト対策', area: 'school', kind: 'project', status: 'active', startDate: date(-1), dueDate: date(5), dueTime: '', description: '数列の範囲。解けなかった問題を復習する。', nextTaskId: 'sample-math-1', contest: { checks: [] } },
      { id: 'sample-photo', title: '学生写真コンテストに応募', area: 'contest', kind: 'contest', status: 'active', startDate: today, dueDate: date(16), dueTime: '17:00', description: 'テーマ「境界」に合うシリーズを3枚選ぶ。サンプルの応募情報です。', nextTaskId: 'sample-select', contest: { organizer: 'サンプル写真協会', url: '', stage: 'preparing', checks: [{ id: 'check1', title: '応募資格を確認', done: true }, { id: 'check2', title: 'JPEG・長辺3000px', done: false }, { id: 'check3', title: 'タイトルと200字の作品説明', done: false }] } }
    ],
    tasks: [
      task('sample-cut', '冒頭30秒のカットを組む', 'creative', { projectId: 'sample-film', startDate: today, dueDate: date(2), plannedDate: today, order: 1, priority: 'high' }),
      task('sample-subtitle', '字幕と音量を調整する', 'creative', { projectId: 'sample-film', startDate: date(3), dueDate: date(6), order: 2 }),
      task('sample-export', '書き出して提出する', 'creative', { projectId: 'sample-film', dueDate: date(8), order: 3 }),
      task('sample-math-1', '問題集の問1〜5を解く', 'school', { projectId: 'sample-math', plannedDate: today, dueDate: date(2), order: 1 }),
      task('sample-math-2', '間違えた問題を解き直す', 'school', { projectId: 'sample-math', startDate: date(3), dueDate: date(4), order: 2 }),
      task('sample-select', '候補の写真を10枚選ぶ', 'contest', { projectId: 'sample-photo', startDate: date(1), dueDate: date(4), order: 1 }),
      task('sample-retouch', '応募する3枚を編集する', 'contest', { projectId: 'sample-photo', startDate: date(5), dueDate: date(11), order: 2 }),
      task('sample-entry', '応募フォームへ提出する', 'contest', { projectId: 'sample-photo', dueDate: date(14), order: 3 }),
      task('sample-life', '薬を受け取りに行く', 'life', { dueDate: date(1), plannedDate: today }),
      task('sample-school', '課題の提出状況を確認する', 'school', { dueDate: date(-1), priority: 'high' }),
      task('sample-wait', '先生から構成案の返事をもらう', 'school', { state: 'waiting', note: '月曜に送信済み。金曜まで返事がなければ確認する。' }),
      task('sample-someday', '夜の駅を撮影してみる', 'creative', { state: 'someday' }),
      task('sample-inbox', '展示の案内をつくりたい', 'creative', { state: 'inbox' }),
      task('sample-inbox-2', '週末に必要なものを買う', 'life', { state: 'inbox' })
    ]
  };
}

const dateValid = value => value === '' || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && localDate(new Date(`${value}T12:00:00`)) === value);
export function validateData(data) {
  if (!data || data.version !== 1 || !Array.isArray(data.tasks) || !Array.isArray(data.projects)) throw new Error('Work Desk形式のバックアップを選んでください。');
  if (!data.reviews || typeof data.reviews !== 'object' || Array.isArray(data.reviews)) throw new Error('レビューの形式が不正です。');
  const taskIds = new Set();
  const projectIds = new Set();
  for (const p of data.projects) {
    if (typeof p.id !== 'string' || projectIds.has(p.id) || typeof p.title !== 'string' || !p.title.trim() || !Object.hasOwn(AREAS, p.area) || !['project', 'contest'].includes(p.kind) || !['active', 'paused', 'completed'].includes(p.status) || !dateValid(p.dueDate || '') || !dateValid(p.startDate || '')) throw new Error('プロジェクトの形式が不正です。');
    if (p.contest?.checks && (!Array.isArray(p.contest.checks) || p.contest.checks.some(c => typeof c.id !== 'string' || typeof c.title !== 'string'))) throw new Error('応募条件の形式が不正です。');
    projectIds.add(p.id);
  }
  for (const t of data.tasks) {
    if (typeof t.id !== 'string' || taskIds.has(t.id) || typeof t.title !== 'string' || !t.title.trim() || !Object.hasOwn(STATES, t.state) || !Object.hasOwn(AREAS, t.area) || !['dueDate', 'plannedDate', 'startDate'].every(k => dateValid(t[k] || ''))) throw new Error('タスクの形式が不正です。');
    if (t.projectId && !projectIds.has(t.projectId)) throw new Error('関連プロジェクトが見つかりません。');
    taskIds.add(t.id);
  }
  return data;
}
