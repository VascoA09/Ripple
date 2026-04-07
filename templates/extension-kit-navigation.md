---
name: Extension Kit Navigation
type: template
status: draft
version: 0.1.0
last_updated: 2026-04-07
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, template, extension-kit]
---

# Extension Kit Navigation

## Classification

**Type: App Template** — not a layout.

Extension Kit Navigation is a product-specific shell for Unit4 Extension Kit applications. It encodes Extension Kit product conventions directly — the sidebar structure, top bar branding, and visual identity are fixed for all Extension Kit applications, not configuration choices available to generic consumers.

> **Note on layout dependency:** Extension Kit Navigation does not wrap an existing generic layout. No "HorizontalNavigation" layout has been extracted yet because no other product requires this structural pattern. If that changes, extract the layout then. The template is self-contained until that point.

Source: `src/templates/ExtensionKitNavigation/`

---

## Description

Extension Kit Navigation provides the standard application shell for Unit4 Extension Kit products. It composes a persistent collapsible sidebar and a main area (top bar + scrollable content) into an L-shaped shell with a horizontal axis.

The top bar carries the Unit4 wordmark and Extension Kit application name. The sidebar carries user and tenant identity, navigation items, and footer metadata (logout, version, copyright).

> **Device scope:** Desktop and tablet. Do not use on mobile.

---

## Anatomy

```
◄── 360px ──►◄────────── content area ──────────────────►
┌────────────┬───────────────────────────────────────────┐
│  [toggle◄] │  <Unit4Wordmark h=24 />  Extension Kit    │
│            │  ──────────────────── 2px #7eb843 ─────── │
│  [user]    ├───────────────────────────────────────────┤
│  [tenant]  │                                           │
│            │  Content area  (var(--bg-app))            │
│  [nav]     │  Consumer owns PageHeader + body          │
│  [nav]     │                                           │
│  [nav]     │                                           │
│  ────────  │                                           │
│  [logout]  │                                           │
│  [v1.0.0]  │                                           │
│  [©]       │                                           │
└────────────┴───────────────────────────────────────────┘
```

Collapsed sidebar (56px):

```
◄56►◄──────────── content area ─────────────────────────►
┌──┬─────────────────────────────────────────────────────┐
│[►]│  <Unit4Wordmark h=24 />  Extension Kit             │
│   │  ────────────────────── 2px #7eb843 ────────────── │
│   ├─────────────────────────────────────────────────── │
│[◉]│                                                    │
│[◉]│  Content area                                      │
│[◉]│                                                    │
└───┴─────────────────────────────────────────────────── │
```

Note: identity section (user + tenant) and entire footer section (logout, version, copyright) are hidden in collapsed state.

---

## Zones

### 1. Sidebar

Persistent and collapsible. Pushes the main area — never overlaps it. Background: `var(--bg-nav)`.

#### Toggle button
- Fixed at the top of the sidebar
- Collapses the sidebar to icon-only state; expands it to show labels
- Always visible in both states

#### Top section — Identity
- User avatar (size `l`) and user name
- Tenant/environment name
- Expanded: avatar + name + tenant visible. Collapsed: hidden entirely

#### Middle section — Navigation
- Navigation items: icon + label in expanded state; icon only in collapsed state
- In collapsed state, each nav item shows a `Tooltip` (`placement="right"`) on hover displaying the item label. The tooltip is suppressed when the sidebar is expanded.

##### States

| State | Background | Left border |
|-------|-----------|-------------|
| Default | transparent | 3px transparent (reserves space, prevents layout shift) |
| Hover | `var(--bg-primary-softest)` | — |
| Selected | `var(--bg-primary-soft)` | 3px solid `var(--border-primary)` |

#### Bottom section — Metadata
- Log out button (`Button`, `variant="fill"`, `color="primary"`, `size="small"`)
- Extension Kit version number
- Copyright notice
- Collapsed: entire footer section hidden (logout, version, and copyright)

#### Sidebar widths

| State | Width |
|-------|-------|
| Expanded | 360px |
| Collapsed | 56px |

---

### 2. Top Bar

- Positioned in the main area, to the right of the sidebar
- Fixed — does not scroll with content
- **Left**: `<Unit4Wordmark height={24} />` + Extension Kit application name
- **Right**: empty by default; in some views contains a search icon button and a filters icon button
- **Bottom border**: `2px solid #7eb843`
- **Background**: `var(--bg-nav)`

---

### 3. Content Area

- Below the top bar, to the right of the sidebar
- Scrollable
- Consumer owns PageHeader, body content, and Grid layout
- **Background**: `var(--bg-app)`

---

## Pre-configured Slots

| Slot | Pre-configured | Consumer responsibility |
|------|---------------|------------------------|
| Sidebar structure | Yes — user, tenant, nav, metadata sections | Nav items content |
| Top bar branding | Yes — `Unit4Wordmark` (24px) + app name + green border | Optional search/filter icon buttons |
| Content area | No — empty scrollable region | PageHeader, body, Grid |

---

## Differences From Other Layouts and Templates

| | Extension Kit Navigation | Standard Navigation | Micro Navigation |
|---|---|---|---|
| **Top bar** | Horizontal, in main area, product-branded | Left vertical Navbar | Left vertical Navbar |
| **Sidebar** | Left, collapsible, user + nav + metadata | MainNavigation drawers | MainNavigation drawers |
| **Footer tab bar** | No | No | Yes |
| **Identity location** | Sidebar (user + tenant) | Navbar (user only) | Navbar (user only) |
| **Product scope** | Extension Kit | Any | Any |

---

## Accessibility

- Sidebar uses `<nav>` with `aria-label="Extension Kit navigation"`
- Main area uses `<main>`
- Top bar uses `<header>`
- Sidebar toggle communicates collapse state via `aria-expanded`
- Nav item labels remain accessible to screen readers in collapsed state via `aria-label`
- Nav item tooltips surface labels visually on hover in collapsed state
- User and tenant information is readable by screen readers
- Log out button has a clear accessible label
- Focus is not trapped in the sidebar on collapse or expand

---

## Component Integration

### Built

**SideNav** (`src/components/SideNav/`) — dedicated sidebar component for Extension Kit. Structurally distinct from Ripple `Drawer`.

Key API:
- Collapse: uncontrolled via `defaultCollapsed`, or controlled via `collapsed` + `onCollapsedChange`
- `Avatar` size `l` for user identity
- `Tooltip` (`placement="right"`) for nav item labels in collapsed state
- `Button` (`variant="fill"`, `color="primary"`, `size="small"`) for logout

### Supporting

| Component | Usage |
|-----------|-------|
| **Avatar** (`size="l"`) | User identity in sidebar top section |
| **Tooltip** (`placement="right"`) | Nav item label in collapsed state |
| **Button** (`fill`, `primary`, `small`) | Logout action |
| **IconButton** (`ghost`, `neutral`, `small`) | Sidebar toggle; optional top bar actions |
| **Unit4Wordmark** | Top bar brand mark at 24px height |

### Consumer responsibility
- **PageHeader** — page title, breadcrumbs, actions
- **Grid** — body content layout

---

## Open Questions

Before moving to `review`:

1. ~~Confirm sidebar expanded and collapsed widths~~ — **360px / 56px** ✓
2. ~~Confirm whether user avatar is shown in collapsed state or hidden~~ — **Hidden entirely** ✓
3. Confirm responsive breakpoint where layout switches to a mobile alternative
4. ~~Confirm background token for top bar and sidebar~~ — **`var(--bg-nav)` both** ✓
5. ~~Confirm background token for content area~~ — **`var(--bg-app)`** ✓
6. ~~Confirm exact top bar content~~ — **`<Unit4Wordmark height={24} />` + application name** ✓

---

## Related

- [Micro Navigation](../layouts/micro-navigation.md) — ERPx multi-tab workspace layout
- [Standard Navigation](../layouts/standard-navigation.md) — default single-context layout
- [ERPx MicroNavigation](erp-micro-navigation.md) — ERPx-specific app template
