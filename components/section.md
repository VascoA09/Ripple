---
name: Section
status: stable
version: 1.1.0
last_updated: 2026-04-01
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout]
---

# Section

Layout element that groups related content into a semantically meaningful region using the `<section>` HTML element.

---

## Anatomy

| Element | HTML | Purpose |
|---|---|---|
| Root | `<section>` | Semantic page region |
| Header | `<div>` | Wraps heading + description. Only rendered when either is present. |
| Title | `<h2>`–`<h6>` | Section heading at the appropriate document level |
| Description | `<p>` | Optional supporting text below the title |
| Divider | `<hr>` | Sibling element rendered **after** `</section>`, not inside it |

---

## Variants

| Variant | Background | Border | Shadow | Padding |
|---|---|---|---|---|
| `flat` (default) | `--bg-surface` | `--border-neutral` | none | `--spacing-125` (20px) |
| `elevated` | `--bg-surface` | none | `--box-shadow-200` | `--spacing-125` (20px) |
| `no-padding` | none | none | none | none |

Use `elevated` sparingly — competing elevations on one screen create visual noise.

Use `no-padding` when wrapping full-bleed content or components that manage their own spacing.

---

## Typography

| Element | Class | Size | Weight | Color |
|---|---|---|---|---|
| Title | `typography-heading-s` | 18px | Semibold | `--text-loud` |
| Description | `typography-caption` | 14px | Regular | `--text-soft` |

The title is always `typography-heading-s` regardless of the `headingLevel` prop. `headingLevel` controls semantic HTML only (`h2`–`h6`) — it has no effect on visual size. Description is clamped to 2 lines.

---

## Divider

Optional `<hr>` rendered as a **sibling after** `</section>`. Controlled by `divider` prop.

- Height: `--border-width-100` (1px)
- Color: `--border-neutral`
- Margin: `--spacing-150` top and bottom (24px each)

---

## Spacing tokens

| Region | Token | Value |
|---|---|---|
| Flat/elevated padding | `--spacing-125` | 20px |
| Header margin-bottom | `--spacing-150` | 24px |
| Description margin-top | — | 0 |
| Divider vertical margin | `--spacing-150` | 24px each |
| Border radius | `--border-radius-200` | 8px |

---

## Accessibility

| Feature | Implementation |
|---|---|
| Semantic region | `<section>` element |
| Visible heading | `<h2>`–`<h6>` with appropriate level |
| No visible heading | Pass `aria-label` or `aria-labelledby` via standard HTML props |
| Divider | `<hr>` is semantic — screen readers announce it as a thematic break |

Match heading level to document hierarchy. If a section has no meaningful heading, prefer `<div>` over `<section>` to avoid adding empty regions to the page outline.

---

## Properties

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'flat' \| 'elevated' \| 'no-padding'` | `'flat'` | Visual style |
| `heading` | `ReactNode` | — | Section title. Renders the header block. |
| `headingLevel` | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | Heading element level |
| `description` | `ReactNode` | — | Supporting text below the heading |
| `divider` | `boolean` | `false` | Render `<hr>` as sibling after `</section>` |
| `children` | `ReactNode` | — | Section body content |
| …rest | `HTMLAttributes<HTMLElement>` | — | Forwarded to `<section>` (e.g. `aria-label`) |

---

## Nesting rules

- `Section` inside `Section`: allowed when semantically meaningful. Max 2 levels.
- `Panel` inside `Section`: common pattern for structured content.
- `Card` inside `Section`: cards can live within sections.
- Each nested section should carry its own heading for a coherent document outline.
- If no heading is needed, use `<div>` instead to avoid semantic noise.

---

## Related components

- **Panel** — adds header/footer/tabs and collapsibility to a content block
- **Card** — interactive content units within sections
- **Divider** — standalone divider for in-content separation
