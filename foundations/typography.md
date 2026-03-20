---
foundation: typography
last_updated: 2026-02-22
owner: Vasco Antunes
---

# Typography Tokens

## Overview

Typography tokens encode every text decision in Ripple. They control font family, size, weight, and line height across all Unit4 products. Consistent use of typography tokens ensures readability, visual hierarchy, and accessibility compliance in both light and dark themes.

Ripple uses a single typeface — Open Sans — across all text. Font size follows a major second scale (ratio 1.125), starting from a 16px base. Semantic styles combine primitive tokens into named, purpose-driven presets that components consume directly.

---

## Primitive Tokens

### Font Family

| Token | Value | Description |
|-------|-------|-------------|
| `font.family.base` | `'Open Sans', sans-serif` | The sole typeface in Ripple. Used for all text. |

### Font Size

Scale ratio: 1.125 (major second). Base: 16px.

| Token | Value | Description |
|-------|-------|-------------|
| `font.size.220` | `32px` | Largest heading. Display or hero text. |
| `font.size.200` | `28px` | Large heading. |
| `font.size.180` | `24px` | Medium heading. |
| `font.size.120` | `18px` | Small heading. |
| `font.size.100` | `16px` | Baseline. Default body text. |
| `font.size.80`  | `14px` | Caption and label text. |
| `font.size.60`  | `12px` | Detail text. Fine print. |

> The major second scale (×1.125) was used to derive these values, but not every step is a token. Every primitive here maps to at least one semantic style. If a future component needs a different size, propose a new semantic style — do not reach for an ad hoc pixel value.

### Line Height

| Token | Value | Description |
|-------|-------|-------------|
| `font.line-height.heading` | `1.3` (130%) | Tighter leading for headings. Preserves vertical compactness at large sizes. |
| `font.line-height.body`    | `1.5` (150%) | Comfortable reading rhythm for paragraph and caption text. |
| `font.line-height.tight`   | `1` (100%)   | Single-line elements only: badges, tags, icon labels. Risk of descender clipping — do not use for multi-line text. |

### Font Weight

| Token | Value | Description |
|-------|-------|-------------|
| `font.weight.regular`  | `400` | Default body text. |
| `font.weight.semibold` | `600` | Emphasis within body text and smaller headings. |
| `font.weight.bold`     | `700` | Hierarchy at the largest heading sizes. |

---

## Semantic Typography Styles

These are the presets components consume. Each style is a named combination of size, line height, and weight. Do not deviate from these combinations — if a new combination is needed, propose a new style via the contribution model.

| Style | Size token | Size value | Line height | Weight |
|-------|-----------|------------|-------------|--------|
| `typography.heading.xl`         | `font.size.220` | 32px | 130% | Bold (700) |
| `typography.heading.l`          | `font.size.200` | 28px | 130% | Bold (700) |
| `typography.heading.m`          | `font.size.180` | 24px | 130% | Bold (700) |
| `typography.heading.s`          | `font.size.120` | 18px | 130% | Semibold (600) |
| `typography.body`               | `font.size.100` | 16px | 150% | Regular (400) |
| `typography.body.semibold`      | `font.size.100` | 16px | 150% | Semibold (600) |
| `typography.caption`            | `font.size.80`  | 14px | 150% | Regular (400) |
| `typography.caption.semibold`   | `font.size.80`  | 14px | 150% | Semibold (600) |
| `typography.label`              | `font.size.80`  | 14px | 130% | Semibold (600) |
| `typography.detail`             | `font.size.60`  | 12px | 150% | Regular (400) |

### Style Intent

| Style | Use when |
|-------|----------|
| `heading.xl` | Page titles, hero headings. One per page maximum. |
| `heading.l` | Section headings, dialog titles. |
| `heading.m` | Sub-section headings, card titles. |
| `heading.s` | Group labels, panel headings, sidebar sections. |
| `body` | Default paragraph text, descriptions, content. |
| `body.semibold` | Emphasis within body copy, table headers, field labels. |
| `caption` | Help text, secondary descriptions, hints. |
| `caption.semibold` | Emphasised captions, metadata labels. |
| `label` | Form labels, button text, nav items, tags. Use 130% line height to keep single-line elements compact. |
| `detail` | Fine print, timestamps, version numbers, legal text. |

---

## Color Tokens

Typography always references color tokens from `foundations/themes.md`. Never hardcode color values in text styles.

| Color token | Use when |
|-------------|----------|
| `text.loud` | Headings, key labels requiring maximum emphasis. |
| `text` | Default body copy. |
| `text.soft` | Secondary text, captions, help text. |
| `text.disabled` | Disabled labels and placeholder text. |
| `text.accent` | Hyperlinks, interactive text labels. |
| `text.negative` | Error messages, destructive action descriptions. |
| `text.notice` | Warning messages. |
| `text.positive` | Success confirmations. |
| `text.loud.inverse` | Headings on dark or brand-colored surfaces. |
| `text.inverse` | Body text on dark surfaces. |
| `text.soft.inverse` | Secondary text on dark surfaces. |

> The `color.neutral.loud` reference in the source design file does not belong to the text color group. It is a surface/border color used in informational components. Reference it via `bg.neutral.loud` or `border.neutral.loud` — not as a text color.

---

## Component Token Mappings

This section grows as components are built.

| Component | Property | Token |
|-----------|----------|-------|
| | | |

---

## Usage Rules

- Always use a semantic typography style. Do not compose font-size + weight + line-height manually in component styles.
- Always pair a typography style with the correct text color token. Do not rely on color inheritance unless explicitly documented.
- Do not use `font.size.20` (10px) for readable content. It exists as a primitive for non-text purposes (e.g., data badges in dense table views) and must be used with caution.
- `font.line-height.tight` is for single-line elements only. Never apply it to multi-line text — descenders will be clipped.
- `heading.xl` maps to an `<h1>`. Use heading levels semantically — the visual style and the HTML element must match.
- `label` uses 130% line height (not 150%) because it targets compact single-line UI elements. If a label wraps, reconsider the component design before adjusting the style.

---

## Accessibility

- Minimum accessible font size for body text is 12px. `font.size.60` (12px) is at the threshold — use only for `detail` style with adequate contrast.
- `font.size.40` (11px) and `font.size.20` (10px) approach or fall below WCAG guidance for normal text. Avoid for readable content.
- All text must meet WCAG 2.1 AA contrast ratios: 4.5:1 for normal text, 3:1 for large text (18px+ regular or 14px+ bold).
- Large text at WCAG definition: `heading.xl`, `heading.l`, `heading.m` qualify. `heading.s` (18px semibold) also qualifies.
- Do not convey meaning through typographic weight or size alone — pair with color tokens and/or icons.

---

## Audit Checklist

- [x] All primitive tokens documented with values
- [x] Semantic styles cover all documented use cases
- [x] Semantic styles use only primitive tokens (no hardcoded values)
- [x] Color token usage documented
- [x] Accessibility requirements specified
- [ ] Open Sans loaded via font stack in consuming projects (not bundled in Ripple)
- [x] Unused primitives (font.size.160, 140, 40, 20) removed — no semantic style, no token
- [ ] Semantic styles validated against actual component usage in Figma
- [ ] Responsive typography behaviour documented (mobile scale-down, if applicable)
