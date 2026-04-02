---
name: DatePicker
status: stable
version: 1.0.0
last_updated: 2026-04-01
owner: Vasco Antunes
figma: TBD
storybook: Components/DatePicker
tags: [form, input, date, datetime]
---

# DatePicker

## Description

The DatePicker lets users enter or select a specific date. It combines a segmented keyboard-operable input (DD/MM/YYYY) with a calendar panel offering day, month, and year views. Users can type directly into each segment or open the calendar for visual selection.

The component outputs ISO date strings (`YYYY-MM-DD`) regardless of display format.

### When to Use

- Scheduling, booking, and appointment workflows.
- ERP processes requiring precise date input: payroll periods, invoice dates, absence booking, shift planning, contract milestones.
- Any form where the date directly affects system logic and accuracy matters.

### When Not to Use

- When the date is system-controlled and not user-editable — use a read-only display.
- For time selection — use TimePicker instead.
- For date ranges — assemble two DatePickers. Do not attempt to pack start and end into a single field.
- For relative date inputs ("in 3 days", "next week") — use a different control.

---

## Anatomy

### Collapsed (field only)

1. **Label** — describes the field. Always required. May be visually hidden with `hideLabel`.
2. **Date input** — segmented display with three independently focusable spinbuttons:
   - **Custom icon** *(optional)* — leading icon for contextual signals (e.g. plane icon for travel dates).
   - **Day segment** — `DD`, spinbutton, 01–31.
   - **Separator** — `/`, decorative, `aria-hidden`.
   - **Month segment** — `MM`, spinbutton, 01–12.
   - **Separator** — `/`, decorative, `aria-hidden`.
   - **Year segment** — `YYYY`, spinbutton, 4-digit year.
   - **Clear button** *(optional)* — shown when `clearable` is true and a value is set.
   - **Calendar button** — opens the calendar panel.
3. **Supporting text** — hint or validation message below the field.

### Expanded (calendar panel)

The panel appears below the field when the calendar button is activated. It has three views:

**Day view** (default)
- **Header:** Month + Year label (Ripple ghost neutral Button, cycles to Month view) + prev/next navigation (Ripple ghost neutral IconButton).
- **Day grid:** 7 columns (Mon–Sun), up to 6 rows. Day cells are 40×40px circles. Adjacent-month days shown in muted colour.
- **Week numbers** *(optional)*: ISO week numbers in a left column.
- **Footer** *(optional, `showFooter`)*: Clear (left, ghost primary small, disabled until a day is selected) and Today (right, ghost primary small).

**Month view** (accessed from Day view header)
- **Header:** Year label (Ripple ghost neutral Button, cycles to Year view) + prev/next navigation (Ripple ghost neutral IconButton).
- **Month grid:** 3×4 grid of abbreviated month names. Each cell is a Ripple ghost neutral Button (full width). Selected month shows `bg-neutral` fill with white text.

**Year view** (accessed from Month view header)
- **Header:** Year range label + prev/next 12-year navigation (Ripple ghost neutral IconButton).
- **Year grid:** 3×4 grid showing 12 years. Each cell is a Ripple ghost neutral Button (full width). Selected year shows `bg-neutral` fill with white text.

---

## Sizes

| Size | Height | Font size | Use when |
|------|--------|-----------|----------|
| `small` | 32px | 14px | Compact forms, data grids, dense layouts |
| `medium` | 40px | 16px | Default. Most forms and workflows. |
| `large` | 48px | 18px | Prominent fields, large touch targets |

Changing the field size has no effect on the calendar panel dimensions.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | **Required.** Visible field label. |
| `hideLabel` | `boolean` | `false` | Hides the label visually; keeps it accessible. |
| `value` | `string` | — | Controlled ISO date `"YYYY-MM-DD"`. |
| `onChange` | `(value: string) => void` | — | Called when a date is committed. Always emits `"YYYY-MM-DD"`. |
| `hint` | `string` | — | Helper text below the field. Replaced by `validationMessage` when triggered. |
| `validation` | `'positive' \| 'notice' \| 'negative'` | — | Validation state. |
| `validationMessage` | `string` | — | Validation feedback text with icon. Replaces hint. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Field height. |
| `disabled` | `boolean` | `false` | Prevents all interaction. |
| `readOnly` | `boolean` | `false` | Displays the value; prevents editing. |
| `required` | `boolean` | `false` | Marks the field as required with a visual asterisk. |
| `clearable` | `boolean` | `false` | Shows a clear button when a value is set. |
| `iconStart` | `ReactNode` | — | Optional leading icon inside the field. |
| `showWeekNumbers` | `boolean` | `false` | Shows ISO week numbers in the day view. |
| `showFooter` | `boolean` | `true` | Shows the calendar footer with Clear (disabled until a day is selected) and Today. |
| `disablePast` | `boolean` | `false` | Disables all dates before today. |
| `disableFuture` | `boolean` | `false` | Disables all dates after today. |
| `minDate` | `string` | — | Minimum selectable date (`"YYYY-MM-DD"`). |
| `maxDate` | `string` | — | Maximum selectable date (`"YYYY-MM-DD"`). |
| `className` | `string` | — | Applied to the root element. |

---

## States

### Field states

| State | Description |
|-------|-------------|
| Enabled | Default. Segments show `DD`, `MM`, `YYYY` as placeholders when empty. |
| Focused | Active segment gets a primary background highlight. Wrapper shows the Ripple focus ring. |
| Hover | Wrapper border transitions to `border-primary` (not when focused). |
| Read-only | Background changes to `bg-neutral-softest`. Calendar button hidden. Segments non-interactive. |
| Disabled | Entire component dimmed (`opacity: 0.5`). No interaction. |

### Segment states

| State | Visual |
|-------|--------|
| Empty | Shows placeholder (`DD`, `MM`, `YYYY`) in `text-soft`. |
| Partial | Shows accumulated digits while typing. |
| Populated | Shows zero-padded value (`15`, `03`, `2026`). |
| Focused | Primary background highlight (`bg-primary-softest`). |

### Calendar states

Day cells are 40×40px circles.

| State | Visual |
|-------|--------|
| Default | Transparent background, `text` colour. |
| Hover | `bg-neutral-soft` background. |
| Pressed | `bg-neutral` background, white text. |
| Focused | 2px `border-focus` outline ring. |
| Today | 1.5px inset `border-primary` ring, semibold, primary colour. |
| Today hover | `bg-primary-soft` background. |
| Today pressed | `bg-primary-loud` background, white text. |
| Selected | `bg-primary` background, white text, semibold. |
| Selected hover | `bg-primary-loud` background. |
| Disabled | `text-soft`, 40% opacity, not interactive. Controlled by `disablePast`, `disableFuture`, `minDate`, `maxDate`. |
| Adjacent | Days from prev/next month shown in `text-soft`. |

### Month and year button states

Month and year selector cells are Ripple ghost neutral Buttons (full width, medium size).

| State | Visual |
|-------|--------|
| Default | Ghost neutral (transparent, `text` colour). |
| Hover | `bg-neutral-soft` background (Button default). |
| Focused | 2px `border-focus` outline ring (Button default). |
| Selected | `bg-neutral` background, white text, semibold. Persists on hover. |

---

## Validation

| State | Token | When to use |
|-------|-------|-------------|
| `positive` | `border-positive`, `text-positive` | Date is valid and meets all conditions. |
| `notice` | `border-notice`, `text-notice` | Date is acceptable but needs attention (e.g. close to a deadline). |
| `negative` | `border-negative`, `text-negative` | Date is invalid (e.g. outside allowed range). |

Validation messages replace the hint text and include a contextual icon.

### Past and Future Validation

**disablePast** — prevents selection of any date before today.
- Day view: all past days greyed out and non-interactive.
- Month/Year views: months and years ending entirely before today are non-interactive.

**disableFuture** — prevents selection of any date after today.
- Day view: all future days greyed out.
- Month/Year views: months and years beginning entirely after today are non-interactive.

---

## Keyboard Navigation

### Segments (DD / MM / YYYY)

| Key | Action |
|-----|--------|
| `↑` | Increment segment. Wraps at max (e.g. 12 → 1 for month). |
| `↓` | Decrement segment. Wraps at min. |
| `←` | Move focus to previous segment. |
| `→` | Move focus to next segment. |
| `0–9` | Type digit. Auto-advances to next segment after 2 digits (DD/MM) or 4 digits (YYYY). Advances early if the next digit would exceed the max (e.g. `3` in a 24h day → commit `3`, advance). |
| `Enter` / `Space` | Open or close the calendar panel. |
| `Escape` | Close the panel. |

### Calendar day grid

| Key | Action |
|-----|--------|
| `←` / `→` / `↑` / `↓` | Move focus between days. Navigates across month boundaries. |
| `Page Up` | Move focus to the last day of the current month. |
| `Page Down` | Move focus to the first day of the current month. |
| `Home` | Move focus to the first day of the current week within the month. |
| `End` | Move focus to the last day of the current week within the month. |
| `Enter` / `Space` | Select the focused day. |
| `Escape` | Close the panel; return focus to the Day segment. |
| `Tab` | Close the panel; move focus to the next element. |

---

## Value Format

All values are ISO 8601 date strings:

- Input: `"YYYY-MM-DD"` — e.g. `"2026-03-31"`
- Output: always `"YYYY-MM-DD"` regardless of display format

The DD/MM/YYYY display is UK locale formatting only. The value output is locale-agnostic.

When the user types a day that exceeds the days in the selected month (e.g. 31 in February), the day is automatically clamped to the last valid day of that month when building the output.

---

## Usage Guidelines

### Labels

Always provide a meaningful label. "Date" is too generic — "Invoice date", "Absence start", "Contract end date" are better. When `hideLabel` is used, the `label` prop still provides the accessible name.

### Date ranges

Assemble two DatePickers for start/end date input. Use `minDate` on the end picker to prevent end dates before start:

```tsx
<div style={{ display: 'flex', gap: '16px' }}>
  <DatePicker
    label="From"
    value={start}
    onChange={val => { setStart(val); if (end && val > end) setEnd('') }}
    clearable
  />
  <DatePicker
    label="To"
    value={end}
    onChange={setEnd}
    minDate={start || undefined}
    clearable
  />
</div>
```

### Pairing with TimePicker

For date-time input, place a DatePicker and a TimePicker side by side. Both values are independent and combined by the consuming application:

```tsx
<DatePicker label="Date" value={date} onChange={setDate} />
<TimePicker label="Time" value={time} onChange={setTime} />
```

### Custom icons

Use `iconStart` to signal the context — not to decorate. A plane icon on a travel departure date field communicates intent; a generic calendar icon adds no information (the calendar button already does that).

### Show week numbers for time-sensitive workflows

Enable `showWeekNumbers` in payroll, project planning, and manufacturing contexts where users think in terms of weeks. Avoid it in general-purpose date selection where it adds visual noise.

---

## Accessibility

### Roles and labels

- The segments container uses `role="group"` with `aria-label` matching the field label.
- Each segment uses `role="spinbutton"` with `aria-label` ("Day", "Month", "Year"), `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext`.
- Separators (`/`) use `aria-hidden="true"`.
- The calendar panel uses `role="dialog"` with `aria-label="Select date"`.
- The day grid uses `role="grid"` with column headers (`role="columnheader"`) and grid cells (`role="gridcell"`).
- Day buttons include `aria-label` with the full human-readable date (`"Monday, 15 March 2026"`), `aria-pressed` for selected state, and `aria-current="date"` for today.
- Navigation buttons have descriptive `aria-label` values ("Previous month", "Next year", etc.).

### Focus management

- Panel open: focus moves to the selected date or today's date in the day grid.
- Panel close: focus returns to the Day segment.
- Day grid uses roving tabIndex — only the focused day has `tabIndex={0}` at any time.
- After day selection: panel closes and focus returns to the Day segment.
- After Today / Clear actions: focus moves appropriately within or returns to the segment.

### Validation messages

- Negative messages use `role="alert"` for immediate screen reader announcement.
- Notice and positive messages do not use `role="alert"`.

### Touch targets

Day cells are 40×40px. They are inset within flex cells that stretch to fill the row, providing a spacing buffer that compensates for the 4px shortfall from the 44×44px standard. All other interactive elements (calendar trigger, clear button, month/year buttons, nav buttons, footer actions) meet the 44×44px minimum.

---

## Design Tokens

### Size tokens

| Token | Value | Used for |
|-------|-------|----------|
| `--size-component-height-small` | 32px | Small field height |
| `--size-component-height-default` | 40px | Medium field height |
| `--size-component-height-large` | 48px | Large field height |

### Colour tokens

| Token | Used for |
|-------|----------|
| `--bg-surface` | Field and panel background |
| `--bg-neutral-softest` | Read-only background |
| `--bg-neutral-soft` | Day cell hover |
| `--bg-neutral` | Day cell pressed, selected month/year fill |
| `--bg-primary-softest` | Focused segment, active trigger |
| `--bg-primary-soft` | Today cell hover |
| `--bg-primary` | Selected day fill |
| `--bg-primary-loud` | Today cell pressed, selected day hover |
| `--border-default` | Default field border |
| `--border-focus` | Focus ring |
| `--border-primary` | Hover field border, today ring |
| `--border-neutral` | Panel border, calendar footer divider |
| `--border-negative` / `--border-notice` / `--border-positive` | Validation borders |
| `--text` | Default text |
| `--text-soft` | Placeholder segments, adjacent days, week numbers, column headers |
| `--text-loud-inverse` | Text on filled backgrounds (selected day, pressed states) |
| `--icon-default` | Calendar and clear icons |
| `--box-shadow-400` | Calendar panel drop shadow |

---

## Related

- **TimePicker** — for time selection. Pair with DatePicker for date-time input.
- **Input** — for free-form text input.
- **FieldLabel** — shared label component used internally.
- **Hint** — shared hint component used internally.

---

## Component Review Checklist

- [x] Spec in `components/date-picker.md`
- [x] All variants and states documented (field states, calendar states, validation)
- [x] Accessibility requirements defined (roles, focus management, keyboard)
- [x] Design tokens mapped (no hardcoded values)
- [x] Usage guidelines (when to use, date range pattern, icon guidance)
- [x] Content guidelines (label requirements documented)
- [x] Coded implementation in React/TypeScript
- [x] Status set: `stable`
- [ ] Figma link (TBD)
- [ ] Reviewed against `templates/component-review-checklist.md`
