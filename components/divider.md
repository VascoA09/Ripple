---
name: Divider
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout]
---

# Divider

Non-interactive visual separator. Splits vertically-stacked or side-by-side content with a 1px line. Optional centred text label for section marking.

Not for status (use Badge). Not interactive (use Button or Link).

---

## Element

| Condition | Element | Notes |
|-----------|---------|-------|
| Horizontal, no label | `<hr>` | Implicit `role="separator"`, self-closing |
| Horizontal with label | `<div role="separator">` | `<hr>` cannot contain children |
| Vertical | `<div role="separator" aria-orientation="vertical">` | |

---

## Orientations

| Value | Description | Default dimension |
|-------|-------------|-------------------|
| `horizontal` (default) | Spans container width | 100% width, 1px height |
| `vertical` | Spans container height | 1px width, 100% height via `align-self: stretch` |

Vertical dividers require a flex-row context. Outside flex, height collapses unless the parent has an explicit height.

---

## Variants

| Value | Description | Margins |
|-------|-------------|---------|
| `full` (default) | Edge-to-edge, no margins | None |
| `inset` | Margins on both ends | `--spacing-100` (16px) inline (H) or block (V) |
| `inset-text` | Label centred between two line segments | Same as inset — `--spacing-100` on containing element |

---

## Sizes

Dividers have no size prop. Line thickness is always 1px.

---

## Visual tokens

| Property | Token | Value |
|----------|-------|-------|
| Line color | `--color-gray-30` | `#D8D9D9` |
| Label font-size | `--font-size-60` | 12px |
| Label font-family | `--font-family-base` | Open Sans |
| Label font-weight | `--font-weight-regular` | 400 |
| Label color | `--text` | `#424747` (light) / `#F9F9F9` (dark) |
| Label letter-spacing | `0.05em` | |
| Label transform | `uppercase` | |
| Inset margin | `--spacing-100` | 16px |
| Label gap | `--spacing-50` | 8px |

---

## Accessibility

- `<hr>` provides implicit ARIA separator semantics — no extra attributes needed
- `<div>` variants use `role="separator"` explicitly
- Vertical `<div>` adds `aria-orientation="vertical"` (horizontal is ARIA default)
- String labels are passed as `aria-label` on the separator element for screen readers
- Dividers are not focusable and not in the tab order
- Do not rely solely on dividers to convey meaning — pair with heading structure

---

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | |
| `variant` | `'full' \| 'inset' \| 'inset-text'` | `'full'` | |
| `children` | `ReactNode` | — | Label text for `inset-text`; used as `aria-label` |
| `className` | `string` | — | |
| `...rest` | `HTMLAttributes<HTMLElement>` | — | Forwarded to root element |

---

## Usage notes

- For `inset-text`, pass a plain string — it doubles as the visual label and `aria-label`
- `inset-text` on a vertical divider: text remains horizontal (not rotated), centred between two vertical line segments
- Do not add color overrides — `--color-gray-30` is the only correct line color in the system
- Never add click, hover, or focus states; Divider is permanently non-interactive
