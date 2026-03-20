---
name: Icon Badge
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, status]
---

# IconBadge Component

## Overview

A layout wrapper that positions a `Counter` overlay on the top-right corner of any icon child. Used for notification counts, unread indicators, and activity signals on icon buttons or standalone icons.

`IconBadge` is structural — it owns the positioning logic only. Interactive semantics (button, link, focusability) belong to the consuming element that wraps it.

---

## Anatomy

```
┌──────────────────┐
│  [icon child]    │
│              ┌───┤
│              │ N │  ← Counter (small, absolute)
│              └───┤
└──────────────────┘
```

- **Icon child**: any `ReactNode`, typically a 20–24px icon. The component is agnostic to size.
- **Counter**: always `size="small"` (16px). Positioned at `top: -6px; right: -8px` — this centres the counter on the icon's top-right corner.

---

## Props

| Prop       | Type                                                              | Default      | Description                              |
|------------|-------------------------------------------------------------------|--------------|------------------------------------------|
| `count`    | `number`                                                          | required     | Count value. Above 99 renders as "99+".  |
| `color`   | `'primary' \| 'notice' \| 'negative' \| 'positive' \| 'neutral'` | `'negative'` | Counter color.                          |
| `variant`  | `'fill' \| 'outline'`                                             | `'fill'`     | Counter variant.                         |
| `children` | `ReactNode`                                                       | required     | The icon to wrap.                        |

All standard `<span>` HTML attributes are also accepted and spread onto the wrapper element.

---

## Colors

| Color     | Semantic intent                      | Examples                      |
|------------|--------------------------------------|-------------------------------|
| `negative` | Errors, failures, urgent actions     | Unread messages, error count  |
| `primary`  | General informational counts         | Inbox items, pending reviews  |
| `notice`   | Warnings, items needing attention    | Flagged items, warnings       |
| `positive` | Successful or approved counts        | Completed tasks               |
| `neutral`  | Secondary, low-emphasis counts       | Archived items                |

Default is `negative` — the most common use case is a notification/alert count.

---

## Variants

| Variant   | Use when                                          |
|-----------|---------------------------------------------------|
| `fill`    | High-emphasis: primary nav, critical notifications |
| `outline` | Lower emphasis: secondary actions, softer signals  |

---

## Usage

```tsx
{/* Inside an icon button — the recommended pattern */}
<Button variant="ghost" color="neutral" aria-label="Notifications, 12 unread">
  <IconBadge count={12} color="negative">
    <Bell size={20} />
  </IconBadge>
</Button>

{/* Standalone icon with badge */}
<IconBadge count={5} color="primary">
  <Inbox size={24} color="var(--text-soft)" />
</IconBadge>
```

---

## Zero Count

`IconBadge` always renders the counter, even when `count` is 0. Hiding the badge when the count is zero is the consumer's responsibility:

```tsx
{unreadCount > 0 && (
  <IconBadge count={unreadCount} color="negative">
    <Bell size={20} />
  </IconBadge>
)}
```

This keeps the component predictable and avoids baking product logic into the primitive.

---

## Accessibility

`IconBadge` is a visual layout primitive. The count is visible on screen but the accessible experience depends on the surrounding context.

**Recommended pattern — carry the count in the button's `aria-label`:**

```tsx
<Button aria-label={`Notifications, ${count} unread`}>
  <IconBadge count={count} color="negative">
    <Bell size={20} />
  </IconBadge>
</Button>
```

This gives screen reader users the full context ("Notifications, 12 unread") in a single focused element, rather than reading "Bell 12" from separate children.

**Do not** add `aria-label` to `IconBadge` itself — it is a `<span>`, not an interactive element, and the label would be orphaned from the interactive wrapper.

---

## Implementation Notes

- `size` is not a prop — the Counter is always `size="small"` (16px). Notification badges have one correct size.
- `pointer-events: none` on `.icon-badge__counter` prevents the counter from intercepting clicks when the icon is interactive.
- `line-height: 1` on `.icon-badge__counter` collapses inherited leading that would otherwise shift the counter vertically.
- The `top: -6px; right: -8px` offset is derived from the small Counter height (16px): the right offset (8px) centres the counter on the icon's right edge; the top offset (6px) is slightly less than half to sit naturally in the corner rather than bisecting the top edge.

---

## Related Components

- **Counter** — the underlying count primitive. Use directly when displaying counts inline (nav rows, table cells) rather than overlaid on an icon.
- **Badge** — for text labels and status indicators. Use when the content is a word or phrase, not a number.

---

## Audit Checklist

- [ ] Interactive wrapper has a meaningful `aria-label` that includes the count
- [ ] Zero count is handled by the consumer (not rendered, or rendered intentionally)
- [ ] Icon size is 20–24px — smaller icons may cause the counter to visually overlap the icon content
- [ ] `pointer-events: none` is preserved on `.icon-badge__counter` if overriding styles
- [ ] Counter color matches the semantic intent of the notification type
