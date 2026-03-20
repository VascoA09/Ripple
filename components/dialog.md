---
name: Dialog
status: draft
version: 0.1.0
last_updated: 2026-02-24
owner: Vasco Antunes
figma: N/A
storybook: N/A
tags: [overlay, modal, feedback, interaction]
---

## Dialog

### Purpose

Dialog interrupts the user with a focused task or decision that must be resolved before continuing. It renders above the page in a modal overlay, blocking interaction with the content beneath. Use it only when the context demands immediate attention — not for passive notifications or content that can live inline.

### Anatomy

- **Backdrop** — semi-transparent overlay covering the viewport. Click closes the dialog.
- **Dialog container** — white surface, rounded corners, drop shadow. Sized by `size` prop.
- **DialogHeader** — optional. Contains an icon slot (left), title (`aria-labelledby` target), and a close button (right).
- **DialogBody** — scrollable content area. Grows to fill available height.
- **DialogFooter** — optional. Action buttons, right-aligned, stacks vertically on narrow screens.

### Props

#### Dialog

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `open` | `boolean` | — | Yes | Controls visibility. Dialog mounts/unmounts with animation. |
| `onClose` | `() => void` | — | Yes | Called on backdrop click, Escape key, or header close button. |
| `size` | `'small' \| 'medium'` | `'medium'` | No | Sets max-width. Small = 400px, Medium = 640px. |
| `children` | `ReactNode` | — | Yes | Dialog sub-components. |
| `className` | `string` | — | No | Additional class on the dialog container. |

#### DialogHeader

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `icon` | `ReactNode` | — | No | Decorative icon left of the title. Use a Lucide icon at 20px. |
| `children` | `ReactNode` | — | Yes | Title text. Rendered as `<h2>` and wired to `aria-labelledby`. |

#### DialogBody

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `ReactNode` | — | Yes | Scrollable dialog content. |

#### DialogFooter

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `ReactNode` | — | Yes | Action buttons. Max 3. Right-aligned; stacks at ≤413px. |

All sub-components forward `ref` and spread remaining HTML attributes onto their root element.

### Variants

| Variant | Description | Use when |
|---------|-------------|----------|
| `small` | Max 400px wide | Confirmations, destructive actions, short prompts with 1–2 fields |
| `medium` | Max 640px wide | Forms, detail panels, longer content requiring more horizontal space |

### States

| State | Visual behaviour | Notes |
|-------|-----------------|-------|
| Closed | Not in DOM | Unmounts after exit animation completes (200ms) |
| Opening | Backdrop fades in, container scales from 0.96 + 6px offset to 1 | Triggered by `open` becoming `true` |
| Open | Fully visible, focus trapped inside | Body scroll locked |
| Closing | Reverse of opening animation | Triggered by `open` becoming `false` |

### Design Tokens

| Element | Property | Token |
|---------|----------|-------|
| Dialog container | background | `--bg-surface` |
| Dialog container | border-radius | `--border-radius-overlay-default` (12px) |
| Dialog container | box-shadow | `--elevation-overlay` → `--box-shadow-800` |
| Backdrop | background | `rgba(0,0,0,0.3)` — component-level value (lighter than `--bg-overlay`) |
| Header / footer | padding | `--spacing-125` (20px) × `--spacing-150` (24px) |
| Header gap | gap | `--spacing-100` (16px) |
| Header icon | color | `--icon-default` |
| Title | font-family | `--font-family-base` |
| Title | font-size | `--font-size-120` (18px) |
| Title | font-weight | `--font-weight-semibold` |
| Title | line-height | `--font-line-height-heading` |
| Title | color | `--text-loud` |
| Body | padding | `--spacing-150` (24px) |
| Body | font-family | `--font-family-base` |
| Body | font-size | `--font-size-100` (16px) |
| Body | font-weight | `--font-weight-regular` |
| Body | line-height | `--font-line-height-body` |
| Body | color | `--text` |
| Footer gap | gap | `--spacing-75` (12px) |
| Scrollbar | color | `--border-neutral` |

### Accessibility

- **Role**: `role="dialog"` on the container. `aria-modal="true"` signals to screen readers that content outside is inert.
- **Label**: `aria-labelledby` auto-wired to the `<h2>` inside `DialogHeader`. If no `DialogHeader` is used, add `aria-label` to `Dialog` directly.
- **Keyboard**:
  - `Tab` / `Shift+Tab` — cycles focus within the dialog (focus trap)
  - `Escape` — closes the dialog
  - Focus moves to the first focusable element inside the dialog on open
- **Screen reader**: Announced as "dialog" with the title as its accessible name. The backdrop is `aria-hidden`.
- **Scroll lock**: `overflow: hidden` applied to `document.body` while the dialog is open. Restored on close.
- **Focus restoration**: Consumers should restore focus to the triggering element after close (e.g. the button that opened the dialog). Not handled internally — manage via `onClose` callback.
- **Contrast**: Title (`--text-loud` on `--bg-surface`) passes WCAG AAA. Body (`--text` on `--bg-surface`) passes WCAG AA.

### Usage Guidelines

#### When to use

- A task requires user input or a decision before proceeding (e.g. confirming deletion, completing a form).
- The action is high-stakes or irreversible and requires deliberate acknowledgement.
- The content is self-contained and short-lived — not ongoing page-level navigation.

#### When not to use

- For passive notifications — use `BannerAlert` instead.
- For contextual detail that doesn't block workflow — use a `Panel` or inline expansion.
- For navigation between sections — use tabs, pages, or sidebars.
- When the form is long or complex enough to warrant its own page — navigate instead of stacking everything into a dialog.

### Content Guidelines

- **Title**: Short and action-oriented. State what the dialog is for, not what it contains. "Delete project" not "Are you sure you want to delete this project?".
- **Body**: Lead with the key information. One idea per paragraph. Avoid walls of text. If there is a warning, put it at the top.
- **Buttons**: Use verb phrases for actions ("Save changes", "Delete project"). The primary action always sits rightmost (or topmost when stacked). "Cancel" is secondary — never use "No" or "Dismiss" as button text.
- **Destructive actions**: Use `color="negative"` on the confirm button. Make the consequence clear in the body copy before asking for confirmation.

### Related Components

- **BannerAlert** — for non-blocking feedback within a page, not requiring user action to proceed.
- **Panel** — for collapsible content sections within a page. Use when content can live inline.
- **Section** — for structural page groupings. Not an overlay.

### Changelog

| Version | Date | Change |
|---------|------|--------|
| 0.1.0 | 2026-02-24 | Initial draft — Dialog, DialogHeader, DialogBody, DialogFooter |
