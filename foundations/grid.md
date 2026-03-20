---
foundation: grid
last_updated: 2026-02-22
owner: Vasco Antunes
---

# Grid System

## Overview

Ripple uses a mobile-first, 12-column grid system with six named breakpoints. Layouts are built by combining columns and gutters — gutter width increases at larger breakpoints to maintain visual rhythm as content areas expand.

The grid is not a component. It is a set of layout primitives — CSS custom properties and utility classes — that components and page templates consume directly.

---

## Breakpoints

| Name | Token | Min width | Max content width | Gutter |
|------|-------|-----------|-------------------|--------|
| `xs` | `--breakpoint-xs` | `0px`    | `100%`    | `16px` |
| `s`  | `--breakpoint-s`  | `576px`  | `560px`   | `16px` |
| `m`  | `--breakpoint-m`  | `768px`  | `744px`   | `16px` |
| `l`  | `--breakpoint-l`  | `1024px` | `984px`   | `24px` |
| `xl` | `--breakpoint-xl` | `1400px` | `1320px`  | `24px` |
| `xxl`| `--breakpoint-xxl`| `1920px` | `1792px`  | `32px` |

Breakpoints are min-width only. Never use max-width media queries — they break mobile-first inheritance and create gaps in the cascade.

---

## Responsive Gutter

The active gutter is exposed via `--grid-gutter`, updated at each breakpoint via media queries. Components that need to align to the grid use `--grid-gutter` directly.

| Breakpoints | Gutter value | Spacing token |
|-------------|-------------|---------------|
| `xs`, `s`, `m` | `16px` | `--spacing-100` |
| `l`, `xl`       | `24px` | `--spacing-150` |
| `xxl`           | `32px` | `--spacing-200` |

---

## Column System

12 columns, always. A layout element spans 1–12 columns. Column width is derived from the container width and active gutter:

```
column-width = (container-width - (11 × gutter)) / 12
```

For page-level layouts, prefer named span patterns:
- **Full** (12 col): Full-bleed content, page headers
- **Wide** (10 col): Primary content with side margin
- **Main** (8 col): Content area in a two-column layout
- **Sidebar** (4 col): Accompanying sidebar or supporting panel
- **Half** (6 col): Two equal columns
- **Third** (4 col): Three equal columns
- **Quarter** (3 col): Four equal columns

---

## Container

The `.container` class centres content and applies the responsive max-width and horizontal padding. It is the standard page wrapper.

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--grid-gutter);
  max-width: var(--grid-max-width);
}
```

`--grid-max-width` updates at each breakpoint alongside `--grid-gutter`.

---

## Token Reference

### Breakpoint primitives

| Token | Value |
|-------|-------|
| `--breakpoint-xs`  | `0px`    |
| `--breakpoint-s`   | `576px`  |
| `--breakpoint-m`   | `768px`  |
| `--breakpoint-l`   | `1024px` |
| `--breakpoint-xl`  | `1400px` |
| `--breakpoint-xxl` | `1920px` |

### Responsive tokens (updated via media queries)

| Token | Default (`xs`) | At `s`/`m` | At `l`/`xl` | At `xxl` |
|-------|----------------|------------|-------------|----------|
| `--grid-columns`   | `12`    | `12`    | `12`    | `12`    |
| `--grid-gutter`    | `16px`  | `16px`  | `24px`  | `32px`  |
| `--grid-max-width` | `100%`  | `560px` | `984px` | `1792px`|

> Note: breakpoint tokens (`--breakpoint-*`) are reference values only. Media queries in CSS cannot use custom properties — the pixel values are used directly in `@media` rules.

---

## Usage Rules

- Always build mobile-first. Start with `xs` styles, layer breakpoints upward.
- Use `--grid-gutter` for any spacing that must align to the grid edge (container padding, card gaps, section margins).
- Do not use breakpoint primitives to drive layout logic directly — they are documentation anchors, not functional `@media` values.
- Never hardcode gutter values (e.g. `padding: 16px`). Reference `--grid-gutter` so the layout adapts across breakpoints automatically.
- The `.container` class is the standard page wrapper. Do not create ad hoc centred wrappers.
- Column spans in component code should reference the 12-column system semantically (e.g. `grid-column: span 6`) rather than percentage widths.

---

## Accessibility

- Content must remain readable at all breakpoints. Do not allow text to span more than 80 characters per line — constrain with `max-width` or `ch` units on text containers.
- Avoid single-column layouts only at `xs`. If a layout only works at `l+`, reconsider the component design for smaller viewports.

---

## Audit Checklist

- [x] Breakpoints defined and documented
- [x] Responsive gutter mapped to spacing tokens
- [x] Max-width values documented per breakpoint
- [x] Container utility class specified
- [x] Usage rules cover mobile-first constraint
- [ ] Grid utility classes validated in consuming project
- [ ] Column span helpers implemented (if needed)
- [ ] Responsive typography scale (mobile size reduction) cross-referenced
