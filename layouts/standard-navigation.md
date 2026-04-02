---
name: Standard Navigation
type: layout
status: draft
version: 0.1.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout, erpx]
---

# Standard Navigation

## Classification

**Type: Layout** — not a pattern.

Standard Navigation is a stateless structural scaffold. It arranges a top Navbar, a persistent collapsible Drawer, and a main content area (Page Header + scrollable Body) into a two-region application shell. All interaction state (drawer open/closed, active menu item, page content) is owned by the consuming application and its patterns.

> **⚠ Zone arrangement pending confirmation.** This spec documents the assumed structure based on ERPx Standard Navigation behaviour. Confirm the exact layout zones with the ERPx product team before moving this to `review`.

Source: `src/layouts/StandardNavigation/` (not yet implemented)

---

## Description

Standard Navigation provides a conventional enterprise application shell: a horizontal top bar for global actions and branding, a vertical sidebar for module-level navigation, and a primary content area. It is the default navigation structure for ERPx when the multi-tab workspace (Footer tab bar) is not needed.

> **Device scope:** Desktop and tablet. Do not use on mobile. At mobile viewports, the sidebar should collapse to an overlay or be replaced with a mobile navigation pattern.

---

## Anatomy

### 1. Navbar (top bar)

- Spans the full width at the top of the viewport
- Contains product branding, global actions (Search, Hub, Notifications, Client or user menu)
- Fixed (does not scroll)
- Uses `var(--bg-nav)` background

### 2. Sidebar (Drawer)

- Persistent vertical panel, left side, below the Navbar
- Contains hierarchical module/section navigation via `DrawerSection` and `DrawerMenuItem`
- Collapsible: collapsed state shows icon-only items; expanded state shows icon + label
- Width transitions smoothly on toggle
- Does not overlay the main area — pushes it

### 3. Main Area

#### Page Header
- Sticky, sits at the top of the main area (below Navbar)
- Contains: page title, breadcrumbs, primary actions

#### Body
- Scrollable content region below the Page Header
- Uses the Ripple Grid for content layout

---

## Layout Structure

```
┌────────────────────────────────────────────────┐
│  Navbar (top, full width, fixed)               │
├──────────────┬─────────────────────────────────┤
│              │  Page Header (sticky)           │
│  Sidebar     ├─────────────────────────────────┤
│  (Drawer)    │                                 │
│              │  Body (scrollable)              │
│  Collapsed:  │  Uses Grid System               │
│  icons only  │                                 │
│              │                                 │
└──────────────┴─────────────────────────────────┘
```

---

## Differences From Micro Navigation

| | Standard Navigation | Micro Navigation |
|---|---|---|
| **Bottom Footer** | No | Yes (tab bar) |
| **Multi-page workspace** | No | Yes |
| **Sidebar** | Pushes content | Pushes content |
| **Primary use case** | Single-page focus, module navigation | Multi-tab document workspace |
| **Navbar position** | Top, full width | Top, full width |

Use Standard Navigation when users work in one context at a time. Use Micro Navigation when users manage multiple open pages simultaneously.

---

## Use Cases

- Module-level navigation across ERPx functional areas (Finance, HR, Projects)
- Applications where users work in a single context before navigating elsewhere
- Simpler workflows that do not require a persistent tab bar
- Cases where the tab management overhead of Micro Navigation is unnecessary

---

## Usage Guidelines

### When to Use

- The application has clear module-level navigation with hierarchical sections
- Users do not need to manage multiple open pages simultaneously
- A conventional sidebar + top bar pattern meets the workflow requirements

### When Not to Use

- Users frequently work across multiple pages at once → use Micro Navigation instead
- Mobile-only or responsive-first applications
- Applications with flat navigation (three items or fewer) — consider a simpler Navbar-only layout

---

## Accessibility

Inherits all requirements from MicroNavigation. Key points for this layout:

- The Navbar and Drawer must use correct landmark roles (`banner`, `navigation`)
- The main content region must use `<main>`
- Sidebar collapse state must be communicated via `aria-expanded`
- Focus must not be trapped in the sidebar when it collapses
- Page Header must remain accessible when sticky

---

## Component Integration

### Required
- **Navbar** — top bar branding and global actions
- **Drawer** — sidebar navigation container
- **DrawerSection** — groups navigation items
- **DrawerMenuItem** — individual navigation items
- **PageHeader** — page title, breadcrumbs, actions
- **Grid** — body content layout

### Supporting
- **IconButton** — actions in Navbar and Drawer header
- **Breadcrumbs** — location context in PageHeader
- **Button** — primary actions in PageHeader

---

## Related

- [Micro Navigation](micro-navigation.md) — adds a footer tab bar for multi-page workspaces
- [ERPx MicroNavigation Template](../templates/erp-micro-navigation.md) — ERPx-specific pre-configuration of MicroNavigation
- **ERPx Standard Navigation Template** — planned; ERPx-specific pre-configuration of this layout
