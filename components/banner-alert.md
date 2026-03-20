---
name: Banner Alert
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [feedback, status]
---

# Banner Alert

Persistent or dismissible notification for system messages. Full-width within its container. Non-blocking — does not interrupt workflow.

Not for decisions requiring user input (use Dialog). Not for brief, transient feedback (use Toast).

---

## Variants

| Variant | Background | Border | Icon | Role | When |
|---------|------------|--------|------|------|------|
| `informative` (default) | `--bg-primary-softest` | `--border-primary` | Info circle | `status` | System updates, new features, process info |
| `positive` | `--bg-positive-soft` | `--border-positive` | Check circle | `status` | Confirmed actions, completed tasks |
| `notice` | `--bg-notice-soft` | `--border-notice` | Alert triangle | `alert` | Time-sensitive warnings, deadlines, deprecations |
| `negative` | `--bg-negative-soft` | `--border-negative` | X circle | `alert` | Errors, failures, critical issues |

Icons are fixed per variant — cannot be overridden.

---

## Anatomy

```
[ Icon ] [ Title? ]                  [ Close? ]
         [ Message (may include links) ]
         [ Actions? (1–2 buttons)     ]
```

- **Icon**: Always present, variant-specific, 20px, `aria-hidden`
- **Title**: Optional. 14px semibold. Max 50 chars recommended.
- **Message**: Required. 14px regular. May contain links.
- **Actions**: Optional ReactNode. Up to 2 buttons — `outline` for primary, `ghost` for secondary.
- **Close button**: Rendered when `onClose` is provided. 24×24px. Consumer manages visibility.

---

## Close button guidance

| Variant | Close button |
|---------|-------------|
| Informative | Highly recommended |
| Positive | Recommended |
| Notice | Context-dependent — omit if action is required |
| Negative | Generally not recommended — should persist until resolved |

---

## ARIA

| Variant | `role` | `aria-live` |
|---------|--------|-------------|
| `informative`, `positive` | `status` | `polite` |
| `notice`, `negative` | `alert` | `assertive` |

Close button: `aria-label="Close banner"`.

Banners do not steal focus on mount. Content is discoverable by screen readers via the live region.

---

## Spacing tokens

| Property | Token | Value |
|----------|-------|-------|
| Padding | `--spacing-100` | 16px |
| Icon-to-content gap | `--spacing-75` | 12px |
| Title-to-message gap | `--spacing-25` | 4px |
| Actions top margin | `--spacing-75` | 12px |
| Action button gap | `--spacing-50` | 8px |
| Border radius | `--border-radius-200` | 8px |
| Border width | `--border-width-100` | 1px |
| Close button size | `--size-150` | 24×24px |

---

## Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `'informative' \| 'positive' \| 'notice' \| 'negative'` | `'informative'` | |
| `title` | `string` | — | Optional heading above message |
| `children` | `ReactNode` | required | Message content; may include links |
| `actions` | `ReactNode` | — | Up to 2 buttons |
| `onClose` | `() => void` | — | Presence renders close button; consumer manages visibility |
| `className` | `string` | — | |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | — | Forwarded to root element |

---

## Contrast verification (WCAG AA)

All text uses `--text-loud` (titles) or `--text` (messages), both dark grays.

| Variant | Background | `--text` contrast | `--text-loud` contrast |
|---------|------------|-------------------|------------------------|
| Informative | #F1FAFF | ~8.0:1 | ~14.7:1 |
| Positive | #D0E6BC | ~7.5:1 | ~13.8:1 |
| Notice | #FFCEAD | ~7.0:1 | ~12.8:1 |
| Negative | #F8B7B4 | ~5.9:1 | ~10.7:1 |

All pairs exceed WCAG AA (4.5:1). Most exceed AAA (7:1).
