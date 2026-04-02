---
name: TimePicker
status: stable
version: 1.0.0
last_updated: 2026-04-01
owner: Vasco Antunes
figma: TBD
storybook: Components/TimePicker
tags: [form, input, time, datetime]
---

# TimePicker

## Description

The TimePicker lets users enter or select a time value. It combines a segmented keyboard-operable input with an optional clock panel for visual selection. Users can type directly into each segment (HH, MM, SS) using the keyboard, or open the panel to scroll through values.

The component outputs time values in 24-hour `HH:MM` or `HH:MM:SS` format regardless of display mode. The `hourCycle` prop controls the display only.

### When to Use

- When a form requires a specific time of day — scheduling, booking, shift planning, payroll.
- When both manual keyboard entry and visual selection should be supported.
- In ERP workflows: absence booking, timesheet entry, meeting scheduling, payroll deadlines.

### When Not to Use

- When the time is predefined or system-controlled and does not require user input — use read-only display instead.
- For duration input (hours worked, elapsed time) — TimePicker is for clock times, not durations.
- For date selection — use DatePicker instead. Do not combine date and time into a single TimePicker field.

---

## Anatomy

### Collapsed (field only)

1. **Label** — describes the field purpose. Always required (may be visually hidden with `hideLabel`).
2. **Time input** — segmented display showing HH · MM (and optionally SS). Each segment is independently focusable and editable.
   - **Hour segment** — keyboard-operable spinbutton.
   - **Separator** — colon `:`, decorative, `aria-hidden`.
   - **Minute segment** — keyboard-operable spinbutton.
   - **Seconds segment** *(optional)* — shown when `showSeconds` is true.
   - **AM/PM segment** *(optional)* — shown when `hourCycle={12}`.
   - **Clear button** *(optional)* — shown when `clearable` is true and a value is set.
   - **Clock button** — opens the selection panel.
3. **Supporting text** — hint or validation message below the field.

### Expanded (panel open)

The panel appears below the field when the clock button is activated. It contains:

- **Column headers** — Hour / Minute / Second (small uppercase labels).
- **Scroll columns** — one per unit (H, M, S). Each shows all possible values in a scrollable list. Items are 40px tall with 4px border radius. The selected value is centred and highlighted.
- **AM/PM toggle** *(optional, 12h mode)* — two Ripple ghost primary Buttons (AM / PM) stacked vertically, aligned to the top of the column. Selected button shows a filled primary background.
- **Panel footer** — Clear (left, ghost primary small, disabled until a time is set) and Now (right, ghost primary small).

---

## Sizes

| Size | Height | Font size | Icon size | Use when |
|------|--------|-----------|-----------|----------|
| `small` | 32px | 14px | 14px | Compact forms, data grids, dense layouts |
| `medium` | 40px | 16px | 16px | Default. Most forms and workflows. |
| `large` | 48px | 18px | 18px | Prominent fields, large touch targets, spacious layouts |

Changing the field size has no effect on the panel dimensions.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | **Required.** Visible label for the field. |
| `hideLabel` | `boolean` | `false` | Hides the label visually while keeping it accessible. |
| `value` | `string` | — | Controlled value in 24-hour `HH:MM` or `HH:MM:SS` format. |
| `onChange` | `(value: string) => void` | — | Called when the time value changes. Always emits 24-hour format. |
| `hint` | `string` | — | Helper text below the field. Hidden when `validationMessage` is shown. |
| `validation` | `'positive' \| 'notice' \| 'negative'` | — | Validation state. |
| `validationMessage` | `string` | — | Validation feedback text, shown with an icon. Replaces hint. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Field height. |
| `disabled` | `boolean` | `false` | Prevents interaction. |
| `readOnly` | `boolean` | `false` | Displays the value but prevents changes. |
| `required` | `boolean` | `false` | Marks the field as required with a visual asterisk. |
| `clearable` | `boolean` | `false` | Shows a clear button in the field when a value is set. |
| `showSeconds` | `boolean` | `false` | Adds a seconds segment and a third scroll column. |
| `hourCycle` | `12 \| 24` | `24` | Controls display format only. Value is always emitted in 24-hour format. |
| `className` | `string` | — | Applied to the root element. |

---

## States

### Field states

| State | Description |
|-------|-------------|
| Enabled | Default appearance. All segments show `--` if no value is set. |
| Focused | Segment-level focus: the focused segment gets a primary background highlight. The wrapper shows the Ripple focus ring. |
| Hover | Wrapper border transitions to `border-primary` on hover (not when focused). |
| Read-only | Background changes to `bg-neutral-softest`. Clock and clear buttons are hidden. Segments are not interactable. |
| Disabled | Entire component is dimmed (`opacity: 0.5`). No interaction. |

### Segment states

| State | Visual |
|-------|--------|
| Empty | Shows `--` in `text-soft` colour. |
| Populated | Shows the zero-padded value (e.g. `09`). |
| Focused | Blue background highlight (`bg-primary-softest`). |

### Panel states

The panel is 320px wide. Columns divide the available width equally with 4px side padding each.

| State | Description |
|-------|-------------|
| Closed | Panel not rendered. |
| Open | Panel appears below the field. Selected item is centred in its column. |

### Column item states

Items are 40px tall with 4px border radius.

| State | Visual |
|-------|--------|
| Default | Transparent background, `text` colour. |
| Hover | `bg-primary-softest` background. |
| Pressed | `bg-primary` background, white text. |
| Focused (keyboard) | 2px `border-focus` outline ring, inset. |
| Selected | `bg-primary-soft` background, primary colour, semibold. |
| Selected pressed | `bg-primary` background, white text. |

### AM/PM button states

AM/PM buttons are Ripple ghost primary Buttons (medium, full width), top-aligned in their column.

| State | Visual |
|-------|--------|
| Default | Ghost primary (transparent, primary colour). |
| Hover | `bg-primary-softest` background (Button default). |
| Selected | `bg-primary` background, white text, semibold. Persists on hover. |

---

## Validation

| State | Token | When to use |
|-------|-------|-------------|
| `positive` | `border-positive`, `text-positive` | The time is valid and meets all conditions. |
| `notice` | `border-notice`, `text-notice` | The time is acceptable but needs attention — e.g. close to a deadline. |
| `negative` | `border-negative`, `text-negative` | The time is invalid — e.g. outside an allowed range. |

Validation messages replace the hint text and include a contextual icon (check, warning, or x-circle).

---

## Keyboard Navigation

### Segments

| Key | Action |
|-----|--------|
| `↑` | Increment the focused segment. Wraps at max (e.g. 23 → 0 for 24h hours). |
| `↓` | Decrement the focused segment. Wraps at min (e.g. 0 → 23). |
| `←` | Move focus to the previous segment. |
| `→` | Move focus to the next segment. |
| `0–9` | Type a digit. Auto-advances to the next segment after 2 digits or when the next digit would exceed the maximum. |
| `a` / `p` | Set AM or PM (AM/PM segment only). |
| `Enter` / `Space` | Open or close the panel. |
| `Escape` | Close the panel and return focus to the hours segment. |
| `Tab` | Move focus out of the component (browser-native). |

### Panel columns

Panel columns are mouse/touch operated. The panel does not trap keyboard focus — `Tab` leaves the panel and closes it is not required. Users can also set the value entirely via keyboard without opening the panel.

---

## Value Format

The component always emits and accepts values in **24-hour ISO-compatible format**:

- `HH:MM` — e.g. `"09:30"`, `"14:00"`, `"23:59"`
- `HH:MM:SS` — e.g. `"09:30:00"` (when `showSeconds` is true)

When `hourCycle={12}`, the display shows 12-hour format with AM/PM, but `onChange` still emits 24-hour values. This makes the value safe to use as-is with `<input type="time">` or ISO datetime strings.

---

## Usage Guidelines

### Clear and descriptive labels

Always provide a meaningful label. "Time" is too generic — "Start time", "Meeting time", "Check-in time" are better. When using `hideLabel`, ensure `aria-label` context is still available via the label prop.

### Pair with DatePicker for date-time selection

TimePicker handles time only. For date-time input, use a DatePicker and a TimePicker side by side:

```tsx
<div style={{ display: 'flex', gap: '16px' }}>
  <DatePicker label="Date" value={date} onChange={setDate} />
  <TimePicker label="Time" value={time} onChange={setTime} />
</div>
```

### Use clearable for optional fields

If the time is not required, set `clearable` so users can remove a value they set accidentally.

### showSeconds for precision

Only show seconds when the use case requires sub-minute precision (e.g. exact audit timestamps, race timing). For most scheduling and booking workflows, HH:MM is sufficient.

### 12-hour vs 24-hour

Match the user's locale and product context. ERPx defaults to 24h in most markets. For US/CA users, 12h may be expected. The emitted value is always 24h regardless of display.

---

## Accessibility

### Labels and roles

- The outer `<div>` uses `role="group"` with `aria-label` matching the field label, grouping the segments for screen readers.
- Each segment uses `role="spinbutton"` with `aria-label` ("Hours", "Minutes", "Seconds"), `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` (zero-padded or "empty").
- The AM/PM segment uses `role="spinbutton"` with `aria-valuetext` of "AM" or "PM".
- Separators (`:`) are `aria-hidden="true"`.

### Focus management

- Initial focus on field render: hours segment.
- Panel open: focus remains on the segment that triggered opening. Panel columns are mouse-operated; they do not capture keyboard focus.
- Panel close (Escape): focus returns to the hours segment.
- Clear button: focus returns to the hours segment after clearing.

### Validation messages

- Negative messages use `role="alert"` to announce the error to screen readers immediately.
- Notice and positive messages do not use `role="alert"` (they do not require immediate announcement).

### Touch targets

- Column items are 40×40px (height × full column width). The 4px shortfall from the 44px standard is offset by the column's padding buffer.
- AM/PM buttons are full-width medium Buttons (40px height). Same spacing buffer applies.
- All other interactive elements (clear button, clock trigger, panel footer buttons) meet the 44×44px minimum.

---

## Tokens

### Size tokens

| Token | Value | Used for |
|-------|-------|----------|
| `--size-component-height-small` | 32px | Small field height |
| `--size-component-height-default` | 40px | Medium field height |
| `--size-component-height-large` | 48px | Large field height |

### Colour tokens

| Token | Used for |
|-------|----------|
| `--bg-surface` | Field background |
| `--bg-neutral-softest` | Read-only background |
| `--bg-primary-softest` | Focused segment, column item hover, active clock trigger |
| `--bg-primary-soft` | Selected column item background |
| `--bg-primary` | Column item pressed, AM/PM selected fill |
| `--border-default` | Default field border |
| `--border-focus` | Focus ring |
| `--border-primary` | Hover field border |
| `--border-neutral` | Panel border, column separators |
| `--border-negative` | Negative validation border |
| `--border-notice` | Notice validation border |
| `--border-positive` | Positive validation border |
| `--text` | Default text |
| `--text-soft` | Placeholder segments, separators, column labels |
| `--text-loud-inverse` | Text on filled backgrounds (pressed items, selected AM/PM) |
| `--text-negative` | Negative validation text |
| `--text-notice` | Notice validation text |
| `--text-positive` | Positive validation text |
| `--icon-default` | Clock and clear icons |
| `--box-shadow-400` | Panel drop shadow |

---

## Related

- **DatePicker** — for date selection. Pair with TimePicker for date-time input.
- **Input** — for free-form text input.
- **FieldLabel** — shared label component used internally.
- **Hint** — shared hint component used internally.

---

## Component Review Checklist

- [x] Spec in `components/time-picker.md`
- [x] All variants and states documented
- [x] Accessibility requirements defined
- [x] Design tokens mapped (no hardcoded values)
- [x] Usage guidelines (when to use, when not to use)
- [x] Content guidelines (label requirements documented)
- [x] Coded implementation in React/TypeScript
- [x] Status set in `components/_index.md` (pending)
- [ ] Figma link (TBD)
- [ ] Storybook link verified after Storybook build
