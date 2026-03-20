---
name: Badge
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, status]
---

# Badge Component

## Overview

A non-interactive inline label used to convey status, highlight recently added content, or provide contextual categorisation. Renders as a `<span>` — never interactive.

---

## Anatomy

```
[icon?] [label text]
```

- **Icon** (optional): Left-aligned, matches font size, `aria-hidden`
- **Label**: Concise text, max 200px with ellipsis truncation

---

## Variants

| Variant   | Background              | Border     | Text       | Use when                        |
|-----------|-------------------------|------------|------------|---------------------------------|
| `fill`    | Solid semantic color   | None       | Inverse    | High-emphasis, maximum visibility |
| `outline` | Softest semantic tint   | Semantic   | Semantic   | Lower emphasis, secondary status |

**When to use fill vs outline:**
- `fill` — primary status in a list (e.g., "Live" in a pipeline row), critical error state, anything that must be immediately noticed
- `outline` — secondary metadata, paired alongside a fill badge, less critical categorisation

Note: sparingly use `fill` primary — it can be mistaken for a button at a glance.

---

## Sizes

| Size     | Height | Font size           | Padding inline | Icon size |
|----------|--------|---------------------|----------------|-----------|
| `small`  | 20px   | `--font-size-60`    | `--spacing-25` (4px)  | 12px |
| `medium` | 24px   | `--font-size-80`    | `--spacing-50` (8px)  | 14px |
| `large`  | 32px   | `--font-size-120`   | `--spacing-100` (16px)| 18px |

Default size is `medium`.

---

## Colors

| Color     | Semantic intent              | Examples                              |
|------------|------------------------------|---------------------------------------|
| `primary`  | General / informational      | Pending, Public, New                  |
| `notice`   | Warning / needs attention    | Draft, Beta, Warning, Private         |
| `negative` | Error / failure / blocked    | Error, Rejected, Failed, Denied       |
| `positive` | Success / approved / live    | Live, Published, Approved, Accepted   |
| `neutral`  | Secondary / no strong intent | Archived, Deleted, Triggered          |

Default color is `primary`.

---

## Token Mapping

### Fill variant

| Color     | Background         | Text                    | Border      |
|------------|--------------------|-------------------------|-------------|
| `primary`  | `--bg-primary`     | `--text-loud-inverse`   | transparent |
| `notice`   | `--bg-notice`      | `--text-loud-inverse`   | transparent |
| `negative` | `--bg-negative`    | `--text-loud-inverse`   | transparent |
| `positive` | `--bg-positive`    | `--text-loud-inverse`   | transparent |
| `neutral`  | `--bg-neutral`     | `--text-loud-inverse`   | transparent |

### Outline variant

| Color     | Background                | Border                  | Text              |
|------------|---------------------------|-------------------------|-------------------|
| `primary`  | `--bg-primary-softest`    | `--border-primary`      | `--text-accent`   |
| `notice`   | `--bg-notice-softest`     | `--border-notice`       | `--text-notice`   |
| `negative` | `--bg-negative-softest`   | `--border-negative`     | `--text-negative` |
| `positive` | `--bg-positive-softest`   | `--border-positive`     | `--text-positive` |
| `neutral`  | `--bg-neutral-softest`    | `--border-neutral-loud` | `--text`          |

### Structure

| Property         | Token                    | Value |
|------------------|--------------------------|-------|
| Border radius    | `--border-radius-100`    | 4px   |
| Border width     | `--border-width-default` | 1px   |
| Max width        | `200px`                  | —     |
| Icon gap         | `--spacing-25`           | 4px   |
| Font weight      | `--font-weight-semibold` | 600   |

---

## Maximum Width

Max width is 200px. Text beyond that truncates with `text-overflow: ellipsis`.

Avoid truncation by design:
- 1–2 words preferred
- Don't use abbreviations unless universally understood
- If longer text is necessary, reconsider the component

---

## Icons

- Rendered on the left side of the label
- Sized to match the badge's font size (12/14/18px per size)
- `aria-hidden` — the label text carries the accessible meaning
- Must reinforce the label meaning, not decorate it

```tsx
<Badge color="negative" icon={<XCircle />}>Rejected</Badge>
<Badge color="positive" icon={<CheckCircle />}>Approved</Badge>
```

---

## Usage Rules

**Do:**
- Use sentence case ("In progress", not "IN PROGRESS")
- Match color to semantic intent — don't use `positive` for warnings
- Limit to 1–3 badges per item
- Place the most important badge first when grouping

**Don't:**
- Use badges for interactive actions — use `Button` instead
- Rely on color alone to communicate status — the label text must be descriptive
- Use icon-only badges — always pair with a text label
- Nest badges or make them focusable

---

## Accessibility

- Renders a `<span>` — non-focusable, non-interactive
- Icon is `aria-hidden`; the label text carries the full accessible meaning
- All color combinations meet WCAG AA contrast requirements (4.5:1 for text, 3:1 for large/bold text)
- For dynamically updated badges (e.g., live status), wrap in an `aria-live="polite"` region at the page level — do not add it to individual badges

---

## Audit Checklist

- [ ] Label text is meaningful without color
- [ ] Icon is `aria-hidden` and reinforces label meaning
- [ ] Color matches semantic intent
- [ ] Fill white text contrast ≥ 3:1 (semibold text)
- [ ] Outline text color contrast ≥ 4.5:1 against background
- [ ] Badge is not interactive (no click handlers, no `tabindex`)
- [ ] Text truncates at 200px with ellipsis
- [ ] `title` attribute added when text may be truncated
