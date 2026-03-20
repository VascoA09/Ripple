---
name: Counter
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, data]
---

# Counter Component

## Overview

A non-interactive circular indicator that displays a numerical count. Renders as a `<span>`. Circles for 1–2 digit values; stretches to a pill for "99+". Never interactive.

---

## Anatomy

```
( count )
```

A single number, always centred. No icons. No labels.

---

## Variants

| Variant   | Background            | Border   | Text       | Use when                         |
|-----------|-----------------------|----------|------------|----------------------------------|
| `fill`    | Solid semantic color | None     | Inverse    | High-emphasis, notification-style |
| `outline` | Softest semantic tint | Semantic | Semantic   | Lower emphasis, secondary counts |

---

## Sizes

| Size     | Diameter | Font size | Use case                              |
|----------|----------|-----------|---------------------------------------|
| `small`  | 16px     | 10px      | Icon badges, tight spaces             |
| `medium` | 20px     | 12px      | Standard layouts, list items (default)|
| `large`  | 24px     | 14px      | Dashboard widgets, prominent metrics  |

Diameter = `height` = `min-width`. For values beyond a single digit, width expands to fit the text — the component stays pill-shaped rather than forcing overflow.

---

## Display Logic

| `count` value | Displayed |
|---------------|-----------|
| 0–99          | The number as-is |
| > 99          | `99+`     |

Hiding a count of `0` is the consumer's responsibility — the component renders whatever is passed.

---

## Colors

| Color     | Semantic intent              | Examples                           |
|------------|------------------------------|------------------------------------|
| `primary`  | General / informational      | Unread messages, notifications     |
| `notice`   | Warning / needs attention    | Pending reviews, approvals needed  |
| `negative` | Error / urgent               | Errors, failed jobs                |
| `positive` | Success / positive metric    | Completed tasks                    |
| `neutral`  | No strong semantic meaning   | Generic counts                     |

Default color is `primary`.

---

## Token Mapping

### Fill variant

| Color     | Background              | Text                    |
|------------|-------------------------|-------------------------|
| `primary`  | `--bg-primary`          | `--text-loud-inverse`   |
| `notice`   | `--bg-notice`           | `--text-loud-inverse`   |
| `negative` | `--bg-negative`         | `--text-loud-inverse`   |
| `positive` | `--bg-positive-loud`    | `--text-loud-inverse`   |
| `neutral`  | `--bg-neutral`          | `--text-loud-inverse`   |

`positive` uses `--bg-positive-loud` (`#2D6100`) rather than `--bg-positive` (`#3C8000`) — the standard shade gives only 4.9:1 with white, which is borderline at the smallest sizes.

### Outline variant

| Color     | Background                | Border                  | Text              |
|------------|---------------------------|-------------------------|-------------------|
| `primary`  | `--bg-primary-softest`    | `--border-primary`      | `--text-accent`   |
| `notice`   | `--bg-notice-softest`     | `--border-notice`       | `--text-notice`   |
| `negative` | `--bg-negative-softest`   | `--border-negative`     | `--text-negative` |
| `positive` | `--bg-positive-softest`   | `--border-positive`     | `--text-positive` |
| `neutral`  | `--bg-neutral-softest`    | `--border-neutral-loud` | `--text`          |

### Structure

| Property       | Token / Value            |
|----------------|--------------------------|
| Border radius  | `--border-radius-pill`   |
| Border width   | `--border-width-default` |
| Font weight    | `--font-weight-semibold` |
| Padding inline | `--spacing-25` (4px)     |

---

## Accessibility

- Renders a `<span>` — non-focusable, non-interactive
- Decorative by default: must be accompanied by adjacent labelled context
- Pass `aria-label` to provide a readable description when adjacent text is absent (e.g. `aria-label="12 unread messages"`)
- For counters that update live, wrap in an `aria-live="polite"` region at the page level — do not apply `aria-live` to individual counter elements
- Note: 10px (small) is below the typical legibility threshold for many users — use with caution in high-stakes contexts

---

## Audit Checklist

- [ ] Counter is not interactive (no click handlers, no `tabindex`)
- [ ] Adjacent label or `aria-label` provides context
- [ ] Color matches semantic intent
- [ ] Fill positive uses `--bg-positive-loud` for adequate contrast at small sizes
- [ ] Values above 99 display as "99+"
- [ ] Counter updates in real time when the count changes
