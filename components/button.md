---
name: Button
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [action, form]
---

# Button

## Overview

The Button component is an interactive element used to trigger actions. It communicates what actions are available, provides clear affordances and visual feedback, and establishes hierarchy across the UI.

Buttons are available in three variants (fill, outline, ghost), four sizes, and three colors. They can carry icons before or after the label, or function as icon-only controls.

---

## Anatomy

A Button is composed of:

- **Container**: the clickable surface — carries border, radius, and background
- **Label**: the action text. Required unless icon-only.
- **Icon start** (optional): icon before the label
- **Icon end** (optional): icon after the label
- **Spinner**: replaces icon start during the loading state

---

## Variants

| Variant | Purpose | When to use |
|---------|---------|-------------|
| `fill` | Primary or most important action in a section | One per section maximum |
| `outline` | Secondary actions that support the primary action | Use alongside Fill for lower-prominence actions |
| `ghost` | Tertiary or low-emphasis actions | Contextual areas, toolbars, or where minimal visual weight is needed |

---

## Sizes

| Size | Height | Font size | Padding (inline) | Gap (icon–label) | Use case |
|------|--------|-----------|------------------|------------------|----------|
| `xsmall` | 24px | 12px | 8px  | 4px | Dense interfaces, constrained layouts. Avoid as primary action on touch. |
| `small`  | 32px | 14px | 12px | 4px | Compact layouts, secondary actions. Not recommended for main touch targets. |
| `medium` | 40px | 14px | 16px | 8px | Default. Standard desktop and mobile layouts. |
| `large`  | 48px | 16px | 20px | 8px | Touch-first or high-emphasis actions. Minimum for primary touch actions. |

---

## Colors

| Color | Purpose | When to use |
|--------|---------|-------------|
| `primary` | Positive or non-destructive actions | Default. Most common button color. |
| `neutral` | Secondary or supporting actions | When the action should not dominate visually. |
| `negative` | Destructive actions | Delete, remove, exit, or irreversible operations. |

---

## Component Token Mappings

### Size tokens

| Token | Value | Resolves to |
|-------|-------|-------------|
| Button height xsmall | `--size-150` | 24px |
| Button height small  | `--size-component-height-small` | 32px |
| Button height medium | `--size-component-height-default` | 40px |
| Button height large  | `--size-component-height-large` | 48px |
| Padding xsmall | `--spacing-50` | 8px |
| Padding small  | `--spacing-75` | 12px |
| Padding medium | `--spacing-100` | 16px |
| Padding large  | `--spacing-125` | 20px |
| Gap xsmall/small | `--spacing-25` | 4px |
| Gap medium/large | `--spacing-50` | 8px |

### Structure tokens

| Token | Value | Resolves to |
|-------|-------|-------------|
| Border radius | `--border-radius-component-default` | 4px |
| Border width  | `--border-width-default` | 1px |
| Focus ring width | `--border-width-focus` | 2px |
| Focus ring color | `--border-focus` | Primary color (theme-aware) |
| Disabled opacity | `--opacity-40` | 0.4 |

### Color tokens by variant × color

| Variant | Color | Background | Background (hover/active) | Text | Border |
|---------|--------|------------|---------------------------|------|--------|
| Fill | Primary | `--bg-primary` | `--bg-primary-loud` | `--text-loud-inverse` | — |
| Fill | Neutral | `--bg-neutral` | `--bg-neutral-loud` | `--text-loud-inverse` | — |
| Fill | Negative | `--bg-negative` | `--bg-negative-loud` | `--text-loud-inverse` | — |
| Outline | Primary | Transparent | `--bg-primary-softest` / `--bg-primary-soft` | `--text-accent` | `--border-primary` |
| Outline | Neutral | Transparent | `--bg-hover` / `--bg-pressed` | `--text` | `--border-default` |
| Outline | Negative | Transparent | `--bg-negative-softest` / `--bg-negative-soft` | `--text-negative` | `--border-negative` |
| Ghost | Primary | Transparent | `--bg-primary-softest` / `--bg-primary-soft` | `--text-accent` | — |
| Ghost | Neutral | Transparent | `--bg-hover` / `--bg-pressed` | `--text` | — |
| Ghost | Negative | Transparent | `--bg-negative-softest` / `--bg-negative-soft` | `--text-negative` | — |

---

## States

| State | Trigger | Visual change |
|-------|---------|---------------|
| Default | Resting | Baseline appearance |
| Hover | `mouseenter` | Background updates to hover value |
| Focus | Keyboard focus | 2px focus ring at `var(--border-focus)`, `outline-offset: 2px` |
| Active | Pointer or key down | Background updates to active value + 1px downward shift |
| Loading | `loading={true}` | Spinner prepends content; button is disabled; opacity unchanged |
| Disabled | `disabled={true}` | Opacity `var(--opacity-40)`, cursor `not-allowed` |

---

## Icons

- Icons are passed via `iconStart` (before label) or `iconEnd` (after label).
- Icons should reinforce the label, not replace it.
- Size icons at `1em` relative to the button font size — they scale automatically.
- During loading, the spinner replaces `iconStart`. `iconEnd` is hidden.
- For icon-only buttons: omit `children` and always provide `aria-label`.

---

## Usage Rules

- Limit one `fill` button per section. This maintains visual hierarchy.
- Fill, outline, and ghost can be combined in one section as a priority hierarchy.
- Never use color alone to convey meaning — always pair with a clear label.
- Use `large` as the minimum size for primary actions on touch-enabled devices (48px minimum touch target).
- Icon-only buttons must have a descriptive `aria-label`. A `title` attribute is also advisable for sighted users.
- The `loading` state disables the button. The consuming component is responsible for toggling `loading` off when the async action completes.
- Maintain at least 8px spacing between Buttons and other interactive elements (`--spacing-50`).

---

## Accessibility

- All enabled buttons pass WCAG 2.2 AA contrast requirements (minimum 4.5:1 for normal text).
- Disabled buttons are excluded from contrast requirements.
- The focus ring is 2px, uses `var(--border-focus)` (primary color), with `outline-offset: 2px`.
- `aria-busy="true"` is set on the button during loading.
- The HTML `disabled` attribute is used for both `disabled` and `loading` states — this removes the button from the tab order and prevents activation via keyboard.
- Icon-only buttons require `aria-label`. Do not rely on the icon or color alone.
- Do not use `pointer-events: none` as a substitute for the `disabled` attribute.

---

## Content Guidelines

- Use sentence case for labels: "Save changes", not "SAVE CHANGES".
- Lead with a verb: "Save", "Delete", "Add team member".
- Keep labels concise — avoid wrapping text. If the label wraps, reconsider the copy or the layout.
- Avoid vague labels ("Click here", "Submit") in favour of specific, outcome-oriented text.

---

## Audit Checklist

- [x] All variants documented and implemented
- [x] All sizes documented with token mapping
- [x] All colors documented with token mapping
- [x] All 9 variant × color combinations implemented
- [x] Loading state uses `aria-busy` and spinner
- [x] Disabled state uses HTML `disabled` attribute
- [x] Focus style uses `--border-focus` token
- [x] Icon-only pattern documented and implemented
- [x] Dark mode handled via semantic token inheritance
- [ ] Contrast ratios validated in both themes
- [ ] Touch target size verified on device
- [ ] Button grouping (ButtonGroup) pattern documented
- [ ] Form integration tested (submit, reset types)
