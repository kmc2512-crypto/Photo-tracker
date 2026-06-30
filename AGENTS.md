# AGENTS.md

## Project Goal

This app is a personal production app for photo tracking, Todo, and progress management.
The long-term goal is to make it practical enough that a first-time human user can operate it without confusion, not just make it appear finished.

"It works" is not enough. The app should satisfy:

- The purpose is understandable at first glance.
- Main features can be used without confusion.
- PC and mobile layouts do not break.
- UI does not look unfinished.
- Existing data is not corrupted.
- Users can understand what happened after an action.
- Error and empty states do not leave users stuck.
- Task management can be used as a real work-planning tool.
- Gantt, list, and mobile card views each feel natural.

## Non-Negotiable Rules

- Do not push.
- Do not commit.
- Do not corrupt existing Todo data.
- Keep compatibility with saved data such as localStorage.
- Do not break existing task add, edit, complete, or delete flows.
- Do not break the Gantt view.
- Do not break mobile views.
- Do not add new external libraries without a direct request.
- Do not do a purposeless full redesign.
- Fix only one primary problem per loop.
- Write a problem definition before changing code.
- Verify after changing code.
- Re-audit from a human-use perspective after changes.

## Evaluation Policy

Do not use 10-point self-scores.
Evaluate strictly with:

- PASS: A human can use it without major discomfort.
- NEEDS WORK: Usable, but still confusing, hard to read, hard to tap, or unfinished-feeling.
- FAIL: Not practical or broken.

When unsure, choose NEEDS WORK.
If a human might feel "this is weird", "unclear", or "hard to press", do not mark it PASS.

## Design Rules

- Prefer 4px / 8px spacing rhythm.
- Align left edges, widths, row heights, and button positions.
- Keep related information close and unrelated information separated.
- Create clear hierarchy between primary and secondary information.
- Use 12px to 24px as a baseline for card padding.
- Use 24px to 48px as a baseline for section spacing.
- Avoid horizontal-scroll dependence on mobile.
- Keep important tap targets around 44px.
- Check both dark and light themes.
- Avoid excessive letter spacing in Japanese UI.
- Avoid important information below 12px.

## Todo / Task Rules

Todo should behave as work planning, not just a title and deadline list.

Parent tasks can have:

- title
- dueDate
- dueTime
- category
- priority
- completed
- description
- subtasks / milestones

Subtasks can have:

- title
- completed
- dueDate, optional
- dueTime, optional
- note, optional

Important:

- A subtask is valid without a deadline.
- A subtask is a work step, not merely a small deadline.
- UI should call these "サブタスク" or "作業ステップ".
- Existing `milestones` data must be preserved and treated as subtasks.
- Show a warning when a subtask deadline is later than the parent task deadline.
- Do not automatically change the parent task deadline.

## Gantt Rules

For Gantt / Deadline Timeline:

- Match task dates to their visual positions.
- Do not render deadline-only tasks as fake long duration bars.
- Only tasks with both start and end dates should be duration bars.
- Deadline-only tasks should be deadline markers.
- Align the today line with the date header.
- Make overdue, today, and future states understandable.
- If a subtask has `dueDate`, show it lightly inside the parent task row.
- Do not force subtasks without `dueDate` into the Gantt view.
- Consider omission or `+n` display when there are many subtasks.
- Completed subtasks should be visually muted.
- Do not let the Gantt become noisy.

## Mobile Rules

Do not simply shrink the desktop Gantt on mobile.

Prioritize mobile Todo views in this order:

1. Tasks to check today
2. Overdue tasks
3. Within 3 days
4. Within 7 days
5. Later
6. Completed

Mobile should be vertical-card centered.
Avoid horizontal-scroll dependence.
Consider 375px, 390px, and 430px widths.

## IME Input Rules

Do not save accidentally when Enter is used to confirm Japanese text conversion.

- Always check `event.isComposing`.
- Also consider `keyCode === 229`.
- If needed, track `compositionstart` / `compositionend`.
- Enter-based add actions should only run when not composing.
- Add buttons should still reliably add items.

## Verification Commands

Check `package.json` and run only commands that exist:

- `npm run lint`
- `npm run build`
- `npm test`
- `npm run typecheck`
- `node --check app.js`
- `git diff --check`

Do not force commands that do not exist.
If an error appears, fix it if caused by the current change.
If it is pre-existing, record it without unrelated large refactors.
