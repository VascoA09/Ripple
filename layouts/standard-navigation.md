---
name: Standard Navigation
type: layout
status: review
version: 0.2.0
last_updated: 2026-10-29
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Standard Navigation

## Classification

**Type: Layout** — not a pattern.

Standard Navigation is a stateless structural scaffold. It composes the [Navbar](../patterns/navbar.md) pattern into a complete application shell with a content area using `var(--background-app)`. It has no behavioural logic of its own — all state (drawers, nav selection) is owned by the consuming application.

Micro Navigation is the default layout for Ripple applications. Use Standard Navigation when the product works one page at a time and needs no Footer tab bar, or needs a persistent navigation drawer.

Source: `src/layouts/StandardNavigation/`

---

## Description

Standard Navigation provides the baseline enterprise application shell: a fixed 72 px vertical Navbar on the left and a scrollable content area on the right. The content area uses `var(--background-app)` as its background.

Both overlay and persistent drawer variants are supported. PageHeader, Grid, and content structure are the consumer's responsibility — this layout provides the shell only.

> **Device scope:** Desktop and tablet. Do not use on mobile.

---

## Anatomy

```
┌──────────┬──────────────────────────────────────────────┐
│          │                                              │
│  72 px   │  Content area (var(--background-app))                │
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
│  72 px   │  Persistent  │  Content area (var(--background-app)) │
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
| **Content background** | `var(--background-app)` | `var(--background-app)` |
| **Drawer variants** | Overlay and persistent | Overlay only |
| **Default for new apps** | No | Yes |

Use Standard Navigation when users work in a single context at a time. Use Micro Navigation when users manage multiple open pages simultaneously via a tab bar.

---

## When to Use

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
   * Forwarded to the Navbar pattern. Both overlay and persistent drawers are
   * supported. Use MicroNavigation if a Footer tab bar is needed.
   */
  nav: NavbarProps
  /** Page content rendered in the scrollable main area. */
  children?: React.ReactNode
  className?: string
}
```

---

## Component Integration

### Required

- **[Navbar](../patterns/navbar.md)**: navigation column, drawer wiring, current page and user menu

### Consumer responsibility

- **PageHeader** — page title, breadcrumbs, and actions
- **Grid** — body content layout
- **DrawerHeader, DrawerContent, DrawerSection, DrawerMenuItem** — drawer contents

---

## Accessibility

Inherits all accessibility requirements from the Navbar pattern. Key points:

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
| Content area background | `var(--background-app)` |
| Navbar width | `navbar.width` (proposed, 72 px), owned by Navbar |
| Navbar background | Owned by Navbar |
| Persistent panel background | Owned by Drawer |

---

## Related

- [Navbar](../patterns/navbar.md): the pattern this layout composes (replaces Main Navigation, deprecated)
- [Micro Navigation](micro-navigation.md) — adds a Footer tab bar for multi-page workspaces

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| 0.2.0 | 2026-10-29 | Composes the Navbar pattern instead of Main Navigation (deprecated); `nav` prop typed as `NavbarProps`. Remains the only layout for persistent navigation drawers. Micro Navigation is now the default layout, not Standard Navigation. Source: `Research/Navigation` exploration. |
| 0.1.0 | 2026-04-06 | Initial draft. |
