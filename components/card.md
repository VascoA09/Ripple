---
name: Card
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout, display]
---

# Card

Flexible surface container. Groups related content and actions into a distinct visual unit. Not a layout primitive — use only when the content can stand alone as a discrete piece of information.

---

## Variants

| Variant | Background | Shadow | Use |
|---------|------------|--------|-----|
| `elevated` (default) | `--bg-surface` (white / dark-gray.90) | `--elevation-card` | Primary cards on page background |
| `flat` | `--bg-app` (gray.10) | None | Nested inside elevated cards only |

Do not nest elevated inside elevated. Flat inside elevated = one valid nesting level.

---

## Interactive

Only elevated cards can be interactive (`interactive={true}`). Flat cards are always static.

| Condition | Element |
|-----------|---------|
| Non-interactive | `<div>` |
| `interactive` + `href` | `<a>` (link navigation) |
| `interactive`, no `href` | `<div role="button" tabIndex={0}>` (action) |

Keyboard: Enter and Space trigger `onClick` on the `<div role="button">` variant.

---

## States (interactive elevated only)

| State | Visual change |
|-------|--------------|
| Default | `--elevation-card` shadow |
| Hover | `--elevation-raised` shadow |
| Focus-visible | `2px solid var(--border-focus)`, `outline-offset: 0` |
| Active | Background → `--bg-app`, shadow → `none`, `translateY(1px)` |

---

## Sub-components

All sections have default padding `--spacing-100` (16px). Pass a `padding` prop to override with any CSS value.

| Component | Element | Layout | Notes |
|-----------|---------|--------|-------|
| `CardSection` | `<div>` | Block | Generic content area |
| `CardHeader` | `<div>` | `flex-direction: column; gap: 4px` | Typically holds title + description |
| `CardTitle` | `<h3>` (default) | Block | Accepts `as` for heading level |
| `CardDescription` | `<p>` | Block | Muted supporting text |
| `CardContent` | `<div>` | Block | Primary content area |
| `CardFooter` | `<div>` | `flex; align-items: center; gap: 8px` | Actions and metadata |
| `CardDivider` | `<Divider />` | — | Full-width `full` variant; no padding |

---

## Tokens used

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-surface` | `#FFFFFF` / dark: `#373939` | Elevated card background |
| `--bg-app` | `#F9F9F9` / dark: `#252828` | Flat card bg; pressed bg |
| `--elevation-card` | `0 2px 4px rgba(...)` | Default shadow |
| `--elevation-raised` | `0 4px 8px rgba(...)` | Hover shadow |
| `--border-focus` | `var(--color-primary)` | Focus outline |
| `--border-radius-container-default` | `8px` | Card corner radius |
| `--spacing-100` | `16px` | Default section padding |

---

## Accessibility

- Interactive cards are keyboard focusable (Tab)
- Enter and Space activate `<div role="button">` cards
- `<a>` cards follow standard link activation (Enter)
- Focus ring appears directly on the card edge (0px offset), distinct from button focus (4px offset)
- Never make a card interactive if it contains multiple focusable elements
- CardTitle renders as `<h3>` by default — adjust `as` to maintain correct document heading hierarchy
- All content must meet WCAG AA contrast on the card's surface color

---

## Usage notes

- Cards have no built-in padding — all spacing comes from section sub-components
- For full-bleed images, place `<img>` directly in `<Card>` (outside a section wrapper)
- Card uses `overflow: hidden` to clip full-bleed content to border-radius
- Minimum gap between cards: `--spacing-50` (8px)
