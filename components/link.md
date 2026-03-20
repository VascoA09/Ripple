---
name: Link
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, action]
---

# Link Component

## Overview

An inline navigational element that renders an `<a>` tag. Supports two visual variants (loud and soft), two sizes matching body text scales, full interactive states, and automatic external-link treatment when `target="_blank"` is set.

---

## Anatomy

```
[label text] [external icon?]
```

- **Label**: The link text content
- **External icon**: ExternalLink icon (lucide-react), auto-rendered when `target="_blank"`. Never render it manually.

---

## Variants

| Variant | Underline |
|---------|-----------|
| `loud`  | Always visible (default) |
| `soft`  | Visible on hover and focus only |

**When to use:**
- `loud` — standalone links, call-to-action links, links that need to be immediately recognisable as interactive
- `soft` — links embedded in running body text where persistent underlines would create visual noise (e.g., article body), navigation links in dense UI

---

## Sizes

| Size  | Font size token   | Font size | Line height |
|-------|-------------------|-----------|-------------|
| `100` | `--font-size-100` | 16px      | 150%        |
| `80`  | `--font-size-80`  | 14px      | 150%        |

Default size is `100`.

Match link size to its surrounding text. A link inside `typography-caption` text should use `size="80"`.

---

## Token Mapping

### Color

| State   | Token                 | Light value          | Dark value           |
|---------|-----------------------|----------------------|----------------------|
| Default | `--text-link`         | `#005E8A` (blue.90)  | `#E1F3FC` (blue.20)  |
| Active  | `--text-link-active`  | `#004C6F` (blue.100) | `#F1FAFF` (blue.10)  |
| Visited | `--text-link-visited` | `#5B55B5` (purple.90)| `#D8D6FE` (purple.30)|

### Focus

| Property       | Token               | Value                   |
|----------------|---------------------|-------------------------|
| Outline color | `--border-focus`    | `--color-primary`       |
| Outline width  | `2px`               | —                       |
| Outline offset | `2px`               | —                       |

### External icon

| Size prop | Icon size |
|-----------|-----------|
| `100`     | 14px      |
| `80`      | 12px      |

Gap between label and icon: `--spacing-25` (4px)

### Underline

| Property               | Value |
|------------------------|-------|
| `text-underline-offset`| `2px` |

---

## External Links

When `target="_blank"` is set:
1. `rel="noopener noreferrer"` is applied automatically — never needs manual setting
2. An `ExternalLink` icon (from lucide-react) appended after the label text
3. Icon is `aria-hidden` — the `aria-label` or surrounding context must communicate externality to screen readers when needed

```tsx
// Both of these produce the same output:
<Link href="https://example.com" target="_blank">Visit site</Link>
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">Visit site</Link>
```

---

## States

| State        | Visual treatment |
|--------------|-----------------|
| Default      | `--text-link` color, underline per variant |
| Hover        | Soft variant: underline appears |
| Active       | `--text-link-active` (darker) |
| Focus        | 2px outline at `--border-focus`, 2px offset |
| Visited      | `--text-link-visited` |
| Disabled     | Not supported — use `aria-disabled` and remove `href` if navigation must be prevented |

---

## Usage Rules

**Do:**
- Match size to surrounding text scale
- Provide meaningful link text — avoid "click here" or "read more" without context
- Use `aria-label` on icon-only or ambiguous links
- Prefer `loud` for standalone links so they are immediately discoverable

**Don't:**
- Use a link for actions that change state — use a `Button` (ghost or outline) instead
- Use `soft` for standalone links — the underline on hover only is less discoverable
- Manually add `rel="noopener noreferrer"` when `target="_blank"` is already set — it's automatic
- Nest links inside links

---

## Accessibility

- Renders a native `<a>` element — keyboard focusable by default
- Focus ring uses `--border-focus` (high-contrast blue) at 2px width and 2px offset
- External icon is `aria-hidden`; for screen readers, consider appending visually-hidden text ("(opens in new tab)") when the external destination is not apparent from context
- Visited state color meets contrast requirements in both light and dark themes

---

## Audit Checklist

- [ ] Contrast ≥ 4.5:1 for link text against surrounding body text and background
- [ ] Focus ring visible on both light and dark themes
- [ ] Visited state distinct from default state
- [ ] External icon present and hidden from assistive technology
- [ ] `rel="noopener noreferrer"` on all `target="_blank"` links
- [ ] Link text is meaningful in isolation (screen reader context)
