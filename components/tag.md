---
name: Tag
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, filter]
---

# Tag

A non-interactive visual label for categorising, organising, or identifying items using keywords. Tags use decorative colors to visually differentiate items.

**Not for status** (use Badge). **Not interactive** (use Chip).

---

## Usage

```tsx
<Tag>Technology</Tag>
<Tag color="blue" icon={<Code size={14} />}>Frontend</Tag>
<Tag color="green" size="small">React</Tag>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Label text |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `color` | `TagColor` | `'gray'` | Decorative color |
| `icon` | `ReactNode` | — | Optional icon before the label |

---

## Sizes

| Size | Height | Padding | Font | Icon | Gap |
|------|--------|---------|------|------|-----|
| `small` | 20px (`--size-125`) | 4px (`--spacing-25`) | 12px (`--font-size-60`) | 12px | 4px |
| `medium` | 24px (`--size-150`) | 8px (`--spacing-50`) | 14px (`--font-size-80`) | 14px | 4px |
| `large` | 32px (`--size-200`) | 12px (`--spacing-75`) | 16px (`--font-size-100`) | 16px | 8px |

---

## Colors

11 decorative colors. Not semantic — use for visual differentiation only.

| `color` | Background | Text | Contrast |
|----------|------------|------|----------|
| `gray` (default) | `--color-cool-gray-10` #EAEAEA | `--color-cool-gray-100` #252828 | 12.7:1 |
| `blue` | `--color-blue-10` #E1F3FC | `--color-blue-100` #004C6F | 8.5:1 |
| `green` | `--color-green-10` #DFEFD2 | `--color-green-100` #2D6100 | ~7.5:1 |
| `emerald` | `--color-emerald-10` #D4EBE2 | `--color-emerald-100` #195C42 | ~7.2:1 |
| `aqua` | `--color-aqua-10` #CCEBEE | `--color-aqua-100` #01545B | ~7.1:1 |
| `purple` | `--color-purple-10` #E5E4FE | `--color-purple-100` #47428D | ~7.0:1 |
| `violet` | `--color-violet-10` #F2E6F8 | `--color-violet-100` #654578 | ~6.5:1 |
| `pink` | `--color-pink-10` #F9E4EB | `--color-pink-100` #622D40 | ~8.6:1 |
| `red` | `--color-red-10` #FBD2D0 | `--color-red-100` #990606 | ~7.8:1 |
| `orange` | `--color-orange-10` #FFE0CC | `--color-orange-100` #993D00 | ~7.6:1 |
| `ochre` | `--color-ochre-10` #F4EFDB | `--color-ochre-100` #5A4F22 | ~7.0:1 |

All combinations pass WCAG AA (4.5:1). Most pass AAA (7:1).

---

## Token note

Tag colors use primitive tokens directly — no semantic aliases exist in `themes.css` for these 11 decorative hues. This is intentional: decorative colors carry no semantic meaning and do not adapt to dark mode. The palette provides sufficient visual variety for categorisation without dark-mode inversion.

---

## Accessibility

- Non-interactive `<span>` — not in tab order
- Icons are `aria-hidden="true"`; text label must convey meaning without color
- All color combinations meet WCAG AA at all sizes

---

## Related

| Component | Use for |
|-----------|---------|
| Badge | Status with semantic meaning (positive/negative/notice) |
| Counter | Numerical counts |
| Chip | Interactive, selectable, or removable tags |
