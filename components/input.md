---
name: Input
status: stable
version: 1.0.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Input

Input lets users enter and edit short, single-line text. It is one of the most fundamental form components, used wherever a user needs to type a value — a name, email address, search term, or any freeform text.

The component uses [`FieldLabel`](field-label.md) to render its label and [`Hint`](hint.md) to render helper text. This ensures consistent label and hint presentation across all field components.

---

## Usage

Use Input when you need to collect a short, freeform, single-line value from the user.

**Use when:**
- Collecting names, email addresses, phone numbers, or URLs
- Building search functionality
- Capturing usernames, passwords, or account identifiers
- Requesting structured single-line data (codes, reference numbers)

**Do not use when:**
- The expected response spans multiple lines — use TextArea
- Users must choose from predefined options — use Dropdown, Combobox, or Radio
- Entering dates or times — use a dedicated date picker
- Multi-value entry is required — use a tag input or multi-select

---

## Dependencies

| Component | Role |
|-----------|------|
| [`FieldLabel`](field-label.md) | Renders the label and required indicator above the field |
| [`Hint`](hint.md) | Renders helper text below the field when no validation message is active |

These are consumed internally. Consumers do not compose them manually.

---

## Anatomy

```
┌─────────────────────────────────────────┐
│ FieldLabel (label text + required)      │  ← rendered by <FieldLabel>
├─────────────────────────────────────────┤
│ ┌──────────────────────────────────────┐│
│ │ [prefix] [icon] input field [icon]  ││  ← .input__wrapper
│ │                          [suffix]   ││
│ └──────────────────────────────────────┘│
├─────────────────────────────────────────┤
│ Hint / validation message   [counter]  │  ← <Hint> or .input__message
└─────────────────────────────────────────┘
```

**Elements:**

- **Label** — Rendered by `FieldLabel`. Positioned above the field. Supports required indicator and an accessible help tooltip via FieldLabel's own API.
- **Input field** — The `<input>` element. Transparent background; the wrapper owns the border and surface colour.
- **Placeholder** — Light hint text inside the field when empty. Disappears on first keystroke.
- **Prefix / Suffix** — Non-editable attached blocks at the start or end of the wrapper. Styled separately from the field.
- **Icon start / Icon end** — Decorative icons inside the field at the leading or trailing edge.
- **Helper text** — Rendered by `Hint`. Sits below the field, associated with the input via `aria-describedby`.
- **Validation message** — Replaces the hint when validation is active. Includes an icon and coloured text. Error messages carry `role="alert"`.
- **Character counter** — Shows current vs maximum character count when `showCounter` is set alongside `maxLength`.

---

## Input Types

| Type | Behaviour | Use for |
|------|-----------|---------|
| `text` (default) | General single-line input | Names, addresses, freeform text |
| `password` | Characters masked; includes show/hide toggle | Passwords, PINs, secrets |
| `search` | Auto-injects Search icon; shows clear (X) when value is present | Search bars, filter inputs |
| `email` | Browser email validation; correct mobile keyboard | Email fields |
| `url` | URL format validation | Website fields, link inputs |
| `tel` | Numeric mobile keyboard | Phone number fields |
| `number` | Numeric input | Quantities, counts, numeric data |

---

## Sizes

| Size | Height token | Height | Font token | Font size | Use for |
|------|-------------|--------|-----------|-----------|---------|
| `small` | `--size-component-height-small` | 32px | `--font-size-80` | 14px | Dense layouts, data tables, toolbars |
| `medium` (default) | `--size-component-height-default` | 40px | `--font-size-100` | 16px | Standard forms |
| `large` | `--size-component-height-large` | 48px | `--font-size-120` | 18px | Prominent inputs, onboarding, touch |

Icon size scales with input size: 14px (small), 16px (medium), 18px (large).

---

## States

| State | Visual |
|-------|--------|
| Default | `var(--border-default)` border, `var(--bg-surface)` background |
| Hover | Border shifts to `var(--border-primary)` (not applied when focused, disabled, or read-only) |
| Focus | `var(--border-focus)` border + 2px solid outline with 2px offset |
| Filled | Placeholder replaced by user input |
| Disabled | `opacity: 0.5`, `pointer-events: none`; background `var(--bg-neutral-soft)` |
| Read-only | Background `var(--bg-neutral-softest)`; value visible but not editable; remains focusable |
| Error (`negative`) | `var(--border-negative)` border, `var(--text-negative)` input text and message; XCircle icon (14px) |
| Notice | `var(--border-notice)` border, `var(--text-notice)` input text and message; AlertCircle icon (14px) |
| Success (`positive`) | `var(--border-positive)` border, `var(--text-positive)` input text and message; CheckCircle icon (14px) |

In all validation states, prefix and suffix backgrounds and borders adopt the matching validation colour.

---

## Behaviour

### Focus management
The focus ring is driven by `data-focused` on the wrapper via React `onFocus`/`onBlur` — not CSS `:focus-within` — to prevent false activation when nested buttons (password toggle, search clear) receive focus.

### Password toggle
Automatically rendered for `type="password"`. Toggles the input type between `password` and `text`. Returns focus to the input after toggling. The button label updates to "Show password" / "Hide password" for screen readers.

### Search clear
Rendered for `type="search"` when the field has a value. Clicking clears the field, calls `onClear`, and returns focus. In controlled usage, update your value state inside `onClear`.

### Character counter
When `showCounter` and `maxLength` are both set, a live counter appears below the field showing `current / max`. At the limit it turns `var(--text-negative)`. A `aria-live="polite"` region announces "Character limit of N reached" to screen readers.

### Validation
The component is intentionally uncontrolled with respect to validation timing — the consumer drives when `validation` and `validationMessage` are set. Recommended strategy: validate on blur, re-validate on change after the first blur.

### Prefix and suffix
Non-editable blocks attached to the wrapper. Both are `aria-hidden="true"` — any information they convey must also be present in the label or hint. They do not affect the submitted value.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | Visible label text. Rendered via `FieldLabel`. |
| `hideLabel` | `boolean` | `false` | Visually hides the label while keeping it accessible. |
| `hint` | `string` | — | Helper text below the field. Rendered via `Hint`. Replaced by `validationMessage` when validation is active. |
| `validation` | `'positive' \| 'notice' \| 'negative'` | — | Activates validation styling. |
| `validationMessage` | `string` | — | Message rendered with an icon. Requires `validation`. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Height scale. |
| `prefix` | `ReactNode` | — | Attached block at the leading edge of the wrapper. |
| `suffix` | `ReactNode` | — | Attached block at the trailing edge of the wrapper. |
| `iconStart` | `ReactNode` | — | Icon inside the field at the leading edge. Auto-populated for `type="search"`. |
| `iconEnd` | `ReactNode` | — | Icon inside the field at the trailing edge. Not applicable to `type="password"` or `type="search"`. |
| `showCounter` | `boolean` | `false` | Shows a character counter. Requires `maxLength`. |
| `onClear` | `() => void` | — | Called when the clear button is clicked on a search input. |
| `className` | `string` | — | Applied to the root container. |
| `style` | `CSSProperties` | — | Applied to the root container. |

All standard `HTMLInputElement` attributes are also accepted (`type`, `required`, `disabled`, `readOnly`, `value`, `defaultValue`, `onChange`, `maxLength`, `placeholder`, etc.).

---

## Label

Rendered internally by `FieldLabel` as a `<label>` associated to the input via `htmlFor`. Consumers only pass `label` (and optionally `required`) to `Input`.

**Typography:** `--font-size-80` (14px), `--font-weight-semibold`, `var(--text-loud)`.

**Required indicator:** Passing `required` on `Input` renders a red `*` via `FieldLabel` and sets `aria-required="true"` on the `<input>`.

**Hidden label (`hideLabel`):** Applies a visually hidden CSS class to the `FieldLabel` root. The label remains present in the accessibility tree. Use only when the context unambiguously identifies the field (e.g. a standalone search bar).

---

## Helper Text

Rendered by `Hint` when `hint` is provided and no `validationMessage` is active. `Hint` renders a `<p>` element associated with the input via `aria-describedby`.

**Typography:** `--font-size-80` (14px), `--font-weight-regular`, `var(--text-soft)`.

When `validationMessage` is active, the hint is hidden and the validation message takes its place in the footer, using a separate `aria-describedby` id.

---

## Validation Messages

| State | Icon | Icon size | Text colour |
|-------|------|-----------|-------------|
| `negative` | XCircle | 14px | `var(--text-negative)` |
| `notice` | AlertCircle | 14px | `var(--text-notice)` |
| `positive` | CheckCircle | 14px | `var(--text-positive)` |

Error messages (`negative`) use `role="alert"` — screen readers announce them immediately without requiring re-focus.

**Writing validation messages:**
- Specific: "Email must include @" not "Invalid email"
- Actionable: guide users to fix the issue
- Plain language — no technical jargon
- One error per field at a time

---

## Prefix and Suffix

Non-editable content attached at the wrapper boundary, visually distinct from the input field.

**Examples:** `$` (currency), `@` (mentions), `https://` (URL protocol), `.com` (domain), `kg` (unit).

**Colour by validation state:**

| State | Background | Border |
|-------|-----------|--------|
| Default | `var(--bg-neutral-softest)` | `var(--border-default)` |
| `negative` | `var(--bg-negative-softest)` | `var(--border-negative)` |
| `notice` | `var(--bg-notice-softest)` | `var(--border-notice)` |
| `positive` | `var(--bg-positive-softest)` | `var(--border-positive)` |

Both prefix and suffix are `aria-hidden="true"`. Any context they provide must also appear in the label or hint.

---

## Width Guidelines

Size the input width to reflect the expected content length:

| Content | Suggested width |
|---------|----------------|
| Short codes (zip, PIN, age) | 80–120px |
| Names, phone numbers | 200–300px |
| Email, URL, search | 300–500px |
| Address, longer text | 100% |

Avoid uniform widths across all fields unless a grid layout requires it.

---

## Spacing

| Location | Token | Value |
|----------|-------|-------|
| Between label, wrapper, and footer | `--spacing-25` | 4px |
| Inner horizontal padding (small / medium) | `--spacing-100` | 16px |
| Inner horizontal padding (large) | `--spacing-125` | 20px |
| Gap between inner icon and text | `--spacing-50` | 8px |
| Prefix / suffix internal padding | `--spacing-75` | 12px |
| Border radius (medium / large) | `--border-radius-200` | 8px |
| Border radius (small) | `--border-radius-150` | 6px |

---

## Accessibility

- Every input has a visible label associated via `for`/`id` — handled by `FieldLabel`.
- Placeholder text does not substitute for a label. Do not use `hideLabel` unless the context makes the field's purpose self-evident.
- `Hint` is associated via `aria-describedby`. Validation messages use a separate id so the correct text is read on state change.
- Error messages use `role="alert"` — announced immediately by screen readers.
- `aria-invalid="true"` is set on the input when `validation="negative"`.
- `aria-required="true"` is set when `required` is passed.
- All interactive elements (password toggle, search clear) are `<button>` elements with descriptive `aria-label`.
- Disabled inputs are removed from tab order.
- Read-only inputs remain focusable for selection and copying.
- Character counter uses `aria-live="polite"` to announce limit reached.
- Color is not the sole indicator of validation state — icons and text supplement it (WCAG 1.4.1).
- Focus ring: 2px solid outline at 2px offset using `var(--border-focus)`.
- Touch targets: action buttons (password toggle, search clear) target 44×44px minimum.
- Minimum contrast: text 4.5:1, borders and UI components 3:1 (WCAG 2.2 AA).

---

## Content Guidelines

### Labels
- 1–3 words when possible, sentence case
- Describe what to enter: "Email address" not "Email"
- Avoid "Enter" or "Input" as a prefix

### Placeholder
- Use as a format example: "e.g., jane@example.com"
- Never duplicate the label
- Never put critical instructions here — it disappears on input

### Helper text
- Clarify format ("Use DD/MM/YYYY"), give an example, explain constraints
- Maximum 1–2 sentences

---

## Related Components

- [`FieldLabel`](field-label.md) — Standalone label. Used internally by Input.
- [`Hint`](hint.md) — Standalone hint text. Used internally by Input.
- [`TextArea`](text-area.md) — Multi-line text input.
- [`Dropdown`](dropdown.md) — Selecting from predefined options.
- [`Combobox`](combobox.md) — Searchable select with optional freeform entry.
- [`Checkbox`](checkbox.md), [`Radio`](radio.md) — Binary or single-choice selection.
