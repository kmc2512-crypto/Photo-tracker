# Design Rules for This App

## Source
- https://www.ui-skills.com/skills
- `AGENTS.md`

## このアプリで重視するUI原則
- The app must feel usable before it feels decorative.
- A first-time user should understand what each Todo surface is for without knowing the implementation.
- Task management is work planning: tasks, details, subtasks, dates, and progress must remain connected.
- Existing saved data is part of the product surface; UI changes must preserve compatibility.

## レイアウト規律
- Use a visible 4px / 8px rhythm for gaps, padding, and row heights.
- Keep left edges aligned across titles, labels, inputs, and actions.
- Do not mix centered and left-aligned layouts inside dense task-management surfaces.
- Use cards or bordered rows only when they group a real object or action set.

## 余白規律
- Use 12px to 24px padding inside cards, forms, and sheets.
- Use 24px to 48px between major sections.
- Keep labels close to the fields they describe.
- Separate unrelated actions with borders or section spacing, not random empty space.

## タイポグラフィ規律
- Important task names should be at least 12px on desktop and 14px on mobile.
- Metadata may be smaller, but should not carry critical meaning alone.
- Avoid excessive letter spacing in Japanese labels.
- Use tabular numbers for dates, time, counts, and deadline badges.

## 情報階層規律
- A task row should read in this order: title, category/priority/date, progress, actions.
- A detail sheet should read in this order: title, metadata, description, subtasks, edit controls.
- Primary actions should be visually stronger than secondary or destructive actions.
- Completed items should be quieter without becoming unreadable.

## フォームUI規律
- Every input must have a fixed label or accessible name.
- Placeholder text is a hint, not the only label.
- Save/add buttons should align with the field group they submit.
- Empty required fields should keep focus near the failing field.
- Enter-to-add must not trigger during Japanese IME composition.

## タスク詳細シート規律
- The sheet is a task workspace, not a generic modal.
- It must identify the current task clearly and keep actions close to the edited object.
- The sheet should have dialog semantics and predictable close behavior.
- The sheet must work at desktop and mobile widths without horizontal dependence.

## サブタスクUI規律
- Subtasks are work steps.
- A subtask can be title-only.
- `dueDate`, `dueTime`, and `note` are optional enhancements.
- `milestones` and `subtasks` must remain data-compatible.
- Editing a subtask must make it obvious which item is being edited.
- Completed subtasks should be muted; too many subtasks should be summarized.

## ガント / タイムラインUI規律
- Only tasks with a start and end date should be duration bars.
- Deadline-only tasks should show a deadline marker and a clear relation to today.
- Today, overdue, and future states should be readable by position and form, not color alone.
- Subtasks with due dates may appear lightly inside the parent row.
- Subtasks without due dates must not add noise to the timeline.

## スマホUI規律
- Do not shrink the desktop Gantt into a tiny chart.
- Prioritize Today, Overdue, 3 days, 7 days, Later, Completed.
- Tap targets should be around 44px.
- Avoid horizontal-scroll dependence at 375px and 390px widths.
- Toasts and banners must not block navigation.

## ダーク / ライトテーマ規律
- Borders, rail backgrounds, inputs, and disabled states must remain visible in both themes.
- Accent colors should be limited and mapped to meaning.
- Light theme must not inherit dark rail blocks that overpower the page.
- Theme changes should preserve hierarchy, not invert it into visual noise.

## インタラクション規律
- User actions should produce visible feedback near where they happen.
- Destructive actions need confirmation.
- Rows that open details should be keyboard reachable.
- Hidden advanced controls should not hide required paths.

## アクセシビリティ規律
- Interactive controls need accessible names.
- Dialogs need `role="dialog"`, `aria-modal`, and labelled titles.
- Keyboard users need visible focus and Escape close where applicable.
- Do not rely on color alone for task urgency, completion, or warnings.

## PWA / ショートカット表示規律
- Home-screen usage should expose the main Todo and deadline surfaces quickly.
- Icons, theme color, and offline behavior should not feel like an afterthought.
- File URL warnings should not dominate the mobile app-like experience.

## 禁止するUI
- Fake duration bars for deadline-only tasks.
- Unlabelled custom controls.
- Dense mobile layouts that require side scrolling.
- Labels that are only placeholders.
- Decorative lines or colors whose meaning cannot be explained.
- Regressions that delete or reshape existing Todo / milestone / subtask data.
