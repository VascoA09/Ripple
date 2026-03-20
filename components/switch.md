---
name: Switch
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Switch

## Overview

Switch is an on/off control for settings that take immediate effect. It wraps a native `<input type="checkbox" role="switch">` inside a `<label>` — fully keyboard accessible, screen-reader announced, with CSS-only state management via the `:checked` sibling selector.

---

## When to Use

- Controlling settings that apply in real time (dark mode, notifications, auto-save)
- Enabling or disabling a single feature
- On/off or true/false states where no save or submit is required

## When Not to Use

- Changes require a save or submit action — use a Checkbox or Radio button
- Multiple options can be selected — use Checkboxes
- The workflow is part of a multi-step form — use a single Checkbox instead

---

## Anatomy

```
[track ── handle]  [label text?]
```

- **Track**: Pill-shaped background that slides the handle. Colored by state.
- **Handle**: White circle with a border that moves left (off) or right (on).
- **Label** (optional): Text description of what the Switch controls. Can be positioned before or after the track.

---

## Sizes

| Size     | Track        | Handle   | Notes              |
|----------|--------------|----------|--------------------|
| `medium` | 42 × 24px    | 20 × 20px| Only size (default)|

---

## States

### Off (unchecked)

| State    | Track bg                    | Handle border              |
|----------|-----------------------------|----------------------------|
| Default  | `--color-cool-gray-20`     | `--color-cool-gray-70`    |
| Hover    | `--color-cool-gray-40`     | `--color-cool-gray-80`    |
| Active   | `--color-cool-gray-40`     | `--color-cool-gray-80`    |
| Disabled | Default + `opacity: 0.4`   | Default + `opacity: 0.4`   |

### On (checked)

| State    | Track bg             | Handle border          |
|----------|----------------------|------------------------|
| Default  | `--bg-primary`       | `--border-primary`     |
| Hover    | `--bg-primary-loud`  | `--border-primary-loud`|
| Active   | `--bg-primary-loud`  | `--border-primary-loud`|
| Disabled | Default + `opacity: 0.4` | Default + `opacity: 0.4` |

Handle background is always `--bg-surface` (white). Focus ring: `--border-width-focus` outline at `--border-focus` with 2px offset, applied to the track (input is visually hidden).

---

## Label

The label describes what the Switch controls. Both position variants are supported.

| `labelPosition` | Layout              | When to use                              |
|-----------------|---------------------|------------------------------------------|
| `'after'`       | Track → Label       | Default. Most layouts.                   |
| `'before'`      | Label → Track       | Settings rows where label is left-aligned|

### Stand-alone Switch (no label)

Omit the `label` prop and pass `aria-label` directly when context makes the purpose obvious.

```tsx
<Switch aria-label="Toggle auto-save" />
```

Use sparingly — only when surrounding UI provides unambiguous context.

---

## Implementation

```tsx
import { Switch } from '@ripple/ui'

// Uncontrolled
<Switch label="Enable notifications" defaultChecked />

// Controlled
<Switch
  label="Dark mode"
  checked={darkMode}
  onChange={e => setDarkMode(e.target.checked)}
/>

// Label before
<Switch label="Auto-save" labelPosition="before" />

// Disabled
<Switch label="Analytics" disabled />

// Stand-alone (no visible label)
<Switch aria-label="Toggle notifications" />
```

### Props

| Prop            | Type                    | Default    | Description                                          |
|-----------------|-------------------------|------------|------------------------------------------------------|
| `label`         | `string`                | —          | Visible label text. Omit only when context is clear. |
| `labelPosition` | `'before' \| 'after'`   | `'after'`  | Position of the label relative to the track.         |
| `checked`       | `boolean`               | —          | Controlled checked state.                            |
| `defaultChecked`| `boolean`               | —          | Uncontrolled initial state.                          |
| `onChange`      | `ChangeEventHandler`    | —          | Fired on toggle.                                     |
| `disabled`      | `boolean`               | `false`    | Prevents interaction.                                |
| `id`            | `string`                | auto       | Auto-generated via `useId` if not provided.          |

All standard `<input>` attributes are forwarded via `...rest` (e.g. `aria-label`, `name`, `form`).

---

## CSS Architecture

State is managed entirely in CSS via sibling and descendant selectors on the hidden input:

```css
/* On state */
.switch__input:checked + .switch__track { ... }
.switch__input:checked + .switch__track .switch__handle { ... }

/* Hover via parent label (input hover doesn't fire when visually hidden) */
.switch:hover .switch__input:not(:checked):not(:disabled) + .switch__track { ... }

/* Focus ring on track */
.switch__input:focus-visible + .switch__track { outline: ...; }
```

Private tokens on `.switch__handle`:

```css
.switch__handle {
  --_handle-border-color: var(--color-cool-gray-70);
}
.switch__input:checked + .switch__track .switch__handle {
  --_handle-border-color: var(--border-primary);
}
```

---

## Accessibility

- Native `<input type="checkbox" role="switch">` — browser announces state ("on"/"off") without extra ARIA
- `<label>` wraps the whole component — clicking the label text also toggles the switch
- `id` links the input to its label; auto-generated via `useId` if not provided
- Focus ring on the track (visible), not the hidden input
- Disabled: `cursor: not-allowed` on wrapper; hover styles suppressed via `:not(:disabled)` on the input; input is natively non-focusable when disabled
- Keyboard: Space / Enter toggle; Tab moves focus in/out

---

## Best Practices

**Do:**
- Always provide immediate feedback — the change takes effect without a save button
- Use a clear label that describes what the Switch controls in both on and off states
- Default to the most common or safest state
- Group related switches in a settings list with clear section headings

**Don't:**
- Use when changes require saving or submission
- Use for multi-select scenarios (use Checkboxes instead)
- Use ambiguous labels like "On/Off" or "Yes/No"
- Remove the label unless context makes the purpose completely obvious
- Use inside forms that batch multiple changes before submission

---

## Audit Checklist

- [ ] Toggle produces an immediate result — no save required
- [ ] Label clearly describes both the on and off state
- [ ] `aria-label` provided when visible label is absent
- [ ] Keyboard toggle works (Space / Enter)
- [ ] Focus ring is visible on the track
- [ ] Disabled state is visually distinct
- [ ] Touch target is adequate (label wraps track + text)
