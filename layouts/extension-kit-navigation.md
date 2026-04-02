---
name: Extension Kit Navigation
type: layout
status: draft
version: 0.1.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout, extension-kit]
---

# Extension Kit Navigation

## Classification

**Type: Layout** — not a pattern.

Extension Kit Navigation is a stateless structural scaffold specific to Unit4 Extension Kit applications. It arranges a persistent collapsible sidebar and a main area (top bar + page header + content) into a complete application shell. All interaction state (sidebar expanded/collapsed, active nav item, page content) is owned by the consuming application.

Source: `src/layouts/ExtensionKitNavigation/` (not yet implemented)

---

## Description

Extension Kit Navigation provides the standard shell for Unit4 Extension Kit applications. It uses a persistent vertical sidebar that pushes (never overlaps) the main content area, with a main area topped by a branded bar showing the Unit4 logo and the extension name.

The layout encodes Extension Kit product identity — the sidebar structure (user, tenant, nav, footer metadata) and the top bar branding are fixed conventions for all Extension Kit applications, not configuration choices.

> **Device scope:** Desktop and tablet. The persistent sidebar requires sufficient horizontal space. Do not use on mobile. Confirm responsive breakpoints with the Extension Kit product team.

---

## Anatomy

### 1. Sidebar

The sidebar is persistent and collapsible. It pushes the main area — it does not overlay it.

#### Top section — Identity
- User name and avatar
- Tenant/environment name
- Visible in expanded state; hidden (or icon-only) in collapsed state

#### Middle section — Navigation
- Navigation icon (navicon) — always visible
- Navigation buttons: icon + label in expanded state; icon only in collapsed state
- Active state indicated on the current nav button

#### Bottom section — Metadata
- Log out button
- Extension Kit version number
- Copyright notice

In collapsed state:
- Top section: hidden (or compressed to avatar icon only)
- Middle section: navicon + nav button icons only
- Bottom section: log out icon only (label hidden)

#### Sidebar widths

| State | Width |
|-------|-------|
| Expanded | TBD (confirm with Extension Kit team) |
| Collapsed | TBD (confirm with Extension Kit team) |

---

### 2. Main Area

#### Top Bar
- Fixed at the top of the main area
- Contains: Unit4 logo + Extension Kit application name
- Does not scroll with content
- Background: `var(--bg-nav)` or a product-specific surface token (TBD)

#### Page Area
- Below the top bar
- Starts with a **Page Header** (title, breadcrumbs, primary actions)
- Below the page header: scrollable **Page Content**

---

## Layout Structure

```
┌──────────┬────────────────────────────────────┐
│ [User]   │  Top Bar: Unit4 logo + App name    │
│ [Tenant] ├────────────────────────────────────┤
│          │  Page Header (sticky)              │
│ Nav      ├────────────────────────────────────┤
│ Buttons  │                                    │
│          │  Page Content (scrollable)         │
│ ─────    │                                    │
│ [Logout] │                                    │
│ [v1.0.0] │                                    │
│ [©]      │                                    │
└──────────┴────────────────────────────────────┘

Collapsed sidebar:
┌────┬──────────────────────────────────────────┐
│[▣] │  Top Bar: Unit4 logo + App name         │
│    ├──────────────────────────────────────────┤
│[◉] │  Page Header                            │
│[◉] ├──────────────────────────────────────────┤
│[◉] │  Page Content                           │
│    │                                          │
│[↪] │                                          │
└────┴──────────────────────────────────────────┘
```

---

## Differences From Other Layouts

| | Extension Kit Navigation | Standard Navigation | Micro Navigation |
|---|---|---|---|
| **Sidebar position** | Left, persistent, pushes content | Left, persistent, pushes content | Left, persistent, pushes content |
| **Top bar** | Unit4 logo + app name | Navbar (product branding + global actions) | Navbar (product branding + global actions) |
| **Bottom footer** | No (tab bar) | No | Yes (tab bar) |
| **Identity in sidebar** | User + tenant in sidebar | User in Navbar | User in Navbar |
| **Metadata in sidebar** | Logout, version, copyright | No | No |
| **Product scope** | Extension Kit only | ERPx | ERPx |

---

## Use Cases

This layout is used exclusively for Unit4 Extension Kit applications. It is not a generic layout — it encodes Extension Kit product conventions and should not be repurposed for other products.

---

## Usage Guidelines

### When to Use

- Building a Unit4 Extension Kit application
- The application requires the standard Extension Kit shell with persistent sidebar

### When Not to Use

- Building an ERPx application → use Standard Navigation or Micro Navigation
- Building any non-Extension-Kit Unit4 product

---

## Accessibility

- The sidebar must use `<nav>` with a descriptive `aria-label` (e.g., "Extension Kit navigation")
- The main area must use `<main>`
- The top bar must use `<header>`
- Sidebar collapse state must be communicated via `aria-expanded` on the toggle control
- In collapsed state, hidden labels must remain accessible to screen readers via `aria-label` or `title` on nav buttons
- User and tenant information in the sidebar must be readable by screen readers
- Log out button must have a clear accessible label
- Focus must not be trapped in the sidebar on collapse/expand

---

## Component Integration

### Required
- **Sidebar** — custom to Extension Kit Navigation (not Ripple Drawer; structural differences)
- **PageHeader** — page title, breadcrumbs, actions
- **Grid** — body content layout

### Supporting
- **IconButton** — nav buttons in collapsed state, logout button
- **Button** — nav buttons in expanded state, logout
- **Avatar** — user identity in sidebar top section
- **Breadcrumbs** — location context in PageHeader

> Note: The Extension Kit sidebar is structurally distinct from the Ripple Drawer. Confirm whether it should reuse `Drawer` internals or be built as a dedicated layout-level component.

---

## Open Questions

Before moving this to `review`:

1. Confirm sidebar expanded and collapsed widths with the Extension Kit team
2. Confirm exact content of the top bar (Unit4 wordmark? Logo mark? Both? Separator?)
3. Confirm whether user avatar is shown in collapsed state or hidden entirely
4. Confirm responsive breakpoint where the layout switches to a mobile alternative
5. Confirm the background token for the top bar and sidebar
6. Clarify whether the sidebar uses Ripple `Drawer` internals or is built independently

---

## Related

- [Micro Navigation](micro-navigation.md) — ERPx multi-tab workspace layout
- [Standard Navigation](standard-navigation.md) — ERPx single-context layout
- **Extension Kit Navigation Template** — not planned; this layout is itself the starting point for Extension Kit apps
