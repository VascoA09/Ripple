---
name: Standard Navigation
type: layout
status: draft
version: 0.1.0
last_updated: 2026-04-06
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Standard Navigation

## Classification

**Type: Layout** — not a pattern.

Standard Navigation is a stateless structural scaffold. It composes `MainNavigation` into a complete application shell with a content area using `var(--bg-app)`. It has no behavioural logic of its own — all state (drawers, nav selection) is owned by the consuming application.

This is the default layout for Ripple applications. When building a new app with Ripple and no other layout is specified, use Standard Navigation.

Source: `src/layouts/StandardNavigation/`

---

## Description

Standard Navigation provides the baseline enterprise application shell: a fixed 72 px vertical Navbar on the left and a scrollable content area on the right. The content area uses `var(--bg-app)` as its background.

Both overlay and persistent drawer variants are supported. PageHeader, Grid, and content structure are the consumer's responsibility — this layout provides the shell only.

> **Device scope:** Desktop and tablet. Do not use on mobile.

---

## Anatomy

```
┌──────────┬──────────────────────────────────────────────┐
│          │                                              │
│  72 px   │  Content area (var(--bg-app))                │
│  Navbar  │                                              │
│          │  Consumer owns:                              │
│          │  - Page Header (sticky)                      │
│          │  - Body content                              │
│          │  - Grid layout                               │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

With a persistent drawer open:

```
┌──────────┬──────────────┬───────────────────────────────┐
│          │              │                               │
│  72 px   │  Persistent  │  Content area (var(--bg-app)) │
│  Navbar  │  panel       │                               │
│          │  (280–400px) │                               │
└──────────┴──────────────┴───────────────────────────────┘
```

---

## Drawer Variants

### Overlay (default)

Drawers open on demand over the content area. Content width does not change. Use for global utilities: search, notifications, hub.

### Persistent

A drawer panel renders in-flow to the right of the Navbar, pushing the content area. Use for module-level navigation trees that users need visible while working.

Both variants are configured via `nav.drawers`. Set `persistent: true` on a drawer definition for the persistent variant.

---

## Differences From Micro Navigation

| | Standard Navigation | Micro Navigation |
|---|---|---|
| **Footer tab bar** | No | Yes |
| **Multi-page workspace** | No | Yes |
| **Content background** | `var(--bg-app)` | `var(--bg-app)` |
| **Drawer variants** | Overlay and persistent | Overlay only |
| **Default for new apps** | Yes | No |

Use Standard Navigation when users work in a single context at a time. Use Micro Navigation when users manage multiple open pages simultaneously via a tab bar.

---

## When to Use

- Building a new Ripple app with no other layout specified
- The application has module-level navigation without a multi-tab workspace
- Users work in a single context before navigating elsewhere
- A persistent navigation panel is needed alongside content

## When Not to Use

- Users need to manage multiple open pages simultaneously — use Micro Navigation
- Mobile-only or responsive-first applications
- Applications with very flat navigation (three items or fewer)

---

## Component API

```ts
interface StandardNavigationProps {
  /**
   * Forwarded to MainNavigation. Both overlay and persistent drawers are
   * supported. `belowScroll` is excluded — use MicroNavigation if a bottom
   * slot is needed.
   */
  nav: Omit<MainNavigationProps, 'children' | 'belowScroll'>
  /** Page content rendered in the scrollable main area. */
  children?: React.ReactNode
  className?: string
}
```

---

## Component Integration

### Required

- **MainNavigation** — Navbar, drawer management, and the left-side layout shell

### Consumer responsibility

- **PageHeader** — page title, breadcrumbs, and actions
- **Grid** — body content layout
- **DrawerHeader, DrawerContent, DrawerSection, DrawerMenuItem** — drawer contents

---

## Accessibility

Inherits all accessibility requirements from MainNavigation. Key points:

- The Navbar renders as `<nav aria-label="Application navigation">`
- The content area uses `<main>` via the `standard-navigation__main` wrapper
- Overlay drawers use `role="dialog"` with `aria-modal="true"` and focus trap
- Persistent drawers use `role="complementary"` with no focus trap
- Focus returns to the triggering Navbar button when a drawer closes

---

## Responsive Behaviour

### Desktop (1024 px and above)
Full layout. Persistent panels work alongside content.

### Tablet (768 px – 1023 px)
Layout remains functional. Persistent drawers may be omitted in favour of overlay at narrower widths.

### Mobile (below 768 px)
Do not use Standard Navigation. Use alternative mobile navigation patterns.

---

## Tokens

| Area | Token |
|------|-------|
| Content area background | `var(--bg-app)` |
| Navbar background | Owned by MainNavigation |
| Persistent panel background | Owned by MainNavigation |

---

## Related

- [Main Navigation](../patterns/main-navigation.md) — the pattern this layout composes
- [Micro Navigation](micro-navigation.md) — adds a Footer tab bar for multi-page workspaces
