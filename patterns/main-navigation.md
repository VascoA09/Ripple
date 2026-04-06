---
name: Main Navigation
status: draft
version: 0.2.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Main Navigation — Ripple Design System

## Overview

The **Main Navigation** pattern describes how the Navbar component works together with Drawers to create a complete enterprise application navigation system. It combines a fixed 72 px vertical Navbar with contextual drawers that open to reveal deeper navigation, search, notifications, and other global utilities.

The pattern is implemented as a single `MainNavigation` component that manages drawer state, mutual selection logic, and layout internally. Consumers declare their drawers declaratively via the `drawers` prop — no manual open/close state required.

---

## When to use

Use the Main Navigation pattern when:

* Building enterprise applications with multiple distinct modules or product areas
* Users need persistent access to global utilities (search, notifications, settings)
* The application requires both global and contextual navigation hierarchies
* Product identity and environment context must remain visible at all times
* Users frequently switch between different functional areas

Do not use the Main Navigation pattern when:

* Building simple single-page applications or marketing sites
* The application has a shallow navigation hierarchy (use Tabs or Page Header navigation instead)
* Horizontal navigation better suits the content and layout
* The product doesn't require persistent global utilities
* Mobile-first design is the primary concern (consider alternative responsive patterns)

---

## Anatomy

```
┌──────────┬──────────────────────────────────────────────┐
│          │                                              │
│  72 px   │  Main Content Area                           │
│  Navbar  │  (Responsive width)                          │
│          │                                              │
│  [Logo]  │  ┌────────────────────────────────────────┐ │
│  [Nav]   │  │ Drawer (280 – 400 px)                  │ │
│  [Nav]   │  │ ├─ Header                              │ │
│  [Nav]   │  │ ├─ Tools (optional)                    │ │
│          │  │ ├─ Content                             │ │
│  spacer  │  │ └─ Footer (optional)                   │ │
│          │  └────────────────────────────────────────┘ │
│  [User]  │  Page Content                                │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

### 1. Navbar (Fixed Shell)

* **Width**: Fixed 72 px
* **Position**: Fixed to the left edge of the viewport, `z-index: 500`
* **Height**: 100% of viewport
* **Contains**: Logo area, optional tenant badge, global nav buttons, contextual nav buttons, user menu

See the [Navbar component documentation](/guidelines/components/navbar.md) for complete details.

### 2. Drawers (Contextual Panels)

Drawers open from Navbar buttons to reveal navigation structures, search, notifications, settings, and other global utilities.

See the [Drawer component documentation](/guidelines/components/drawer.md) for complete details.

### 3. Main Content Area

* **Position**: To the right of the Navbar (`margin-left: 72px`)
* **Contains**: Page Header, page content

---

## Navigation Types

### Overlay

Drawers open on-demand over the content area with a backdrop. The content area does not resize when a drawer opens.

**Characteristics:**
* Drawers open and close via Navbar button clicks
* Only one drawer open at a time
* Drawer overlays the content area with a semi-transparent backdrop
* The backdrop starts at `left: 72px` — it never covers the Navbar
* The drawer panel itself starts at `left: 72px`, extending to the right
* Nav button shows selected state while its drawer is open
* Clicking the active button again closes its drawer

**Use when:**
* Users need occasional access to navigation or utilities
* Screen real estate is limited
* The content area should remain prominent when drawers are closed

### Persistent

A navigation drawer remains open as part of the page layout. The content area shifts to accommodate it.

**Characteristics:**
* Navigation drawer is open by default (or user-toggled)
* Drawer is part of the layout — no backdrop
* Content area width adjusts to accommodate the open drawer
* The drawer's close button is provided internally via `DrawerContext.Provider`
* Nav button shows selected state while the panel is visible

**Use when:**
* Users need constant access to a navigation tree or menu
* The application has a deep navigation hierarchy
* Screen size allows both drawer and content simultaneously
* Navigation context must remain visible while working

---

## Component API

The `MainNavigation` component is the recommended implementation. It wraps `Navbar`, manages the `openId` state, and renders all declared drawers.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `drawers` | `DrawerConfig[]` | `[]` | Drawer definitions (see below) |
| `productName` | `string` | — | Abbreviated product name |
| `logo` | `ReactNode` | Default SVG | Product logo |
| `tenantLabel` | `string` | — | Tenant/environment badge label |
| `tenantColor` | `BadgeColor` | `'notice'` | Badge color |
| `globalNavItems` | `NavItem[]` | `[]` | Top-level nav (max 5) |
| `contextualNavItems` | `NavItem[]` | `[]` | Module nav (5 visible + overflow) |
| `showContextualDivider` | `boolean` | `true` | Divider between global and contextual nav |
| `userName` | `string` | `'User'` | Name for avatar and user menu |
| `userRole` | `string` | — | Role shown in user menu header |
| `userProductArea` | `string` | — | Product area shown in user menu header |
| `userAvatarSrc` | `string` | — | Avatar image URL |
| `userMenuItems` | `UserMenuItem[]` | `[]` | User menu flyout items |
| `className` | `string` | — | Additional CSS class |

### DrawerConfig shape

```ts
interface DrawerConfig {
  id: string;           // Matches NavItem id — used to link button to drawer
  title: string;        // Drawer header title
  size?: 'small' | 'medium' | 'large';  // Default: 'small'
  variant?: 'modal' | 'persistent';     // Default: 'modal' (Overlay type)
  count?: number;       // Badge count shown in drawer header
  headerActions?: ReactNode;            // Actions in drawer header (e.g. "Mark all read")
  tools?: ReactNode;    // Drawer tools area content
  footer?: ReactNode;   // Drawer footer content
  children: ReactNode;  // Drawer body content
}
```

---

## Usage Examples

### Overlay — Notifications and Search

```tsx
<MainNavigation
  productName="ERPx"
  tenantLabel="Redrock"
  userName="Alex Johnson"
  userRole="Finance Manager"
  userProductArea="Finance"
  globalNavItems={[
    { id: 'search',        label: 'Search',        icon: <Search size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, count: 4 },
    { id: 'hub',           label: 'Hub',           icon: <Grid size={20} /> },
  ]}
  userMenuItems={userMenuItems}
  drawers={[
    {
      id: 'search',
      title: 'Search',
      size: 'small',
      tools: <TextInput placeholder="Search across modules..." />,
      children: <SearchResults />,
    },
    {
      id: 'notifications',
      title: 'Notifications',
      size: 'small',
      count: 4,
      headerActions: (
        <Button variant="ghost" size="small">Mark all read</Button>
      ),
      tools: (
        <ChipGroup>
          <Chip label="All" />
          <Chip label="Unread" />
          <Chip label="Mentions" />
        </ChipGroup>
      ),
      children: <NotificationList />,
    },
    {
      id: 'hub',
      title: 'Global Hub',
      size: 'small',
      children: <ModuleList />,
    },
  ]}
/>
```

### Persistent Navigation

```tsx
<MainNavigation
  productName="ERPx"
  userName="Alex Johnson"
  globalNavItems={[
    { id: 'nav', label: 'Navigation', icon: <Menu size={20} /> },
  ]}
  userMenuItems={userMenuItems}
  drawers={[
    {
      id: 'nav',
      title: 'Navigation',
      size: 'medium',
      variant: 'persistent',
      children: <NavigationTree />,
    },
  ]}
/>
```

---

## Single Selection Behaviour

Only one Navbar button can be in the selected state at a time. The `MainNavigation` component enforces this automatically:

* When a drawer button is clicked, it sets `openId` to that drawer's id — all other buttons deselect
* When a non-drawer nav item is clicked, `openId` is cleared — all drawer buttons deselect
* When the active button is clicked again, `openId` is cleared — the drawer closes

This means consumers do not need to manage selected state manually. Pass `selected` on a `NavItem` only for non-drawer items where selection reflects an active view (not a drawer). The component will suppress that selection when any drawer is open.

---

## Layout and Positioning

### Drawer offset

Both the drawer panel and its backdrop start at `left: 72px` — the full width of the Navbar. The Navbar is never obscured by a drawer or overlay.

```css
/* Overlay drawer — positioned to the right of the Navbar */
.drawer.main-navigation__modal-drawer[data-side="left"] {
  left: 72px;
}

/* Backdrop — never covers the Navbar */
.main-navigation__drawer-overlay {
  left: 72px;
}
```

### Z-index layering

| Layer | Z-index |
|-------|---------|
| Navbar | 500 |
| Drawer panel | 401 |
| Drawer backdrop | 400 |

The Navbar always renders above drawers and their backdrops.

### Content area

| State | Content area |
|-------|-------------|
| No drawer open | `margin-left: 72px` |
| Overlay drawer open | `margin-left: 72px` — unchanged (drawer overlays) |
| Persistent drawer open | `margin-left: 72px + drawer-width` |

---

## Common Drawer Types

### Notifications Drawer

**Purpose**: Activity feed, alerts, and notification management

**Size**: Small (280 px)

**Header actions**: "Mark all read" Button (`variant="ghost"`, `size="small"`)

**Tools area**: `ChipGroup` with filter chips (All, Unread, Mentions, etc.)

**Content**: List of `DrawerNotificationItem` entries — unread items include a "View" action button

**Best practices**:
* Show most recent first
* Unread items have a visual indicator and an inline "View" action
* Include relative timestamps ("2 minutes ago")
* Use `Avatar` to identify notification sources

### Search Drawer

**Purpose**: Global search across the application

**Size**: Small (280 px)

**Tools area**: `TextInput` with search icon (auto-focused on open)

**Content**: Recent searches when empty; results as user types (debounced)

**Best practices**:
* Auto-focus the search input when the drawer opens
* Clear results when the drawer closes
* Consider Cmd+K as a keyboard shortcut to open

### Global Hub Drawer

**Purpose**: Quick access to modules, workspaces, or product areas

**Size**: Small (280 px)

**Content**: `DrawerSection` groups of `DrawerMenuItem` items

**Best practices**:
* Group related modules into sections
* Limit to 2–3 sections for scannability
* Mark the currently active module

### Client / Tenant Switcher Drawer

**Purpose**: Switch between clients, tenants, or environments

**Size**: Small (280 px)

**Content**: `DrawerListItem` entries — current client/tenant shown at the top, clearly marked

**Best practices**:
* Include search if the list exceeds 5 items
* Confirm before switching if there is unsaved work

### Navigation Tree Drawer (Persistent)

**Purpose**: Deep hierarchical navigation

**Size**: Medium (320 px), `variant="persistent"`

**Content**: Nested `DrawerMenuItem` and `DrawerSection` structure

**Best practices**:
* Keep hierarchy shallow (2–3 levels max)
* Maintain scroll position when navigating
* Show the active page clearly

---

## Drawer Sizing Guidelines

| Size | Width | Use case |
|------|-------|----------|
| **Small** | 280 px | Utilities: search, notifications, quick menus |
| **Medium** | 320 px | Navigation trees, detailed lists, persistent nav |
| **Large** | 400 px | Rich content, detailed forms, help documentation |

---

## Interaction Patterns

### Drawer Dismissal

Drawers can be closed by:
* Clicking the active Navbar button again
* Clicking another Navbar button (switches to that drawer)
* Clicking the close button in the drawer header
* Clicking the backdrop (overlay drawers only)
* Pressing Escape

### Keyboard Navigation

* **Tab**: Move focus through interactive elements
* **Escape**: Close the active drawer and return focus to the trigger button
* **Arrow keys**: Navigate menu items within the drawer
* **Enter / Space**: Activate the focused item

---

## Visual Design

### Background Colors

| Element | Token |
|---------|-------|
| Navbar | `var(--bg-surface)` |
| Drawer | `var(--bg-surface)` |
| Content area | `var(--bg-canvas)` |

### Borders and Shadows

* **Navbar right border**: `1px solid var(--border-neutral)`
* **Overlay drawer**: `var(--box-shadow-400)` — elevated above content
* **Persistent drawer**: `1px solid var(--border-neutral)` right edge — no shadow

### Spacing

| Area | Token | Value |
|------|-------|-------|
| Navbar width | — | 72 px |
| Drawer / overlay left offset | — | 72 px |
| Drawer header padding | `var(--spacing-150) var(--spacing-100) var(--spacing-100)` | 24px 16px 16px |
| Drawer content padding | `var(--spacing-100)` | 16 px |
| Drawer tools padding | `var(--spacing-100)` | 16 px |

---

## Accessibility

### Navigation Landmark

The Navbar renders as `<nav aria-label="Application navigation">`. Drawers use `role="dialog"` (overlay) or `role="complementary"` (persistent) with `aria-modal="true"` for overlay variants.

### Focus Management

* When a drawer opens, focus moves to the first interactive element (close button or search input)
* When a drawer closes, focus returns to the Navbar button that opened it
* Overlay drawers trap focus until dismissed
* Persistent drawers do not trap focus

### Screen Reader Announcements

* Announce drawer open/close state: "Notifications opened" / "Notifications closed"
* Use `aria-live` regions for dynamic content (search results, notification updates)
* Counter values are in the button's `aria-label` (e.g., "Notifications (4)")

### ARIA Attributes

* **Navbar buttons**: `aria-pressed="true"` when selected, `aria-label` includes count
* **Overlay drawer**: `role="dialog"`, `aria-modal="true"`, `aria-label` from title
* **Persistent drawer**: `role="complementary"`, `aria-label` from title
* **Close button**: `aria-label="Close [drawer name]"`

---

## Best Practices

### Do

* Use the `MainNavigation` component — it handles state, selection, and layout
* Keep global navigation to 5 items
* Use small drawers (280 px) for utilities
* Use medium drawers (320 px) for persistent navigation
* Include a close button in every drawer header
* Return focus to the trigger button when a drawer closes
* Use `DrawerSection` to organise drawer content
* Show counters only for actionable items

### Don't

* Manage drawer open/close state manually — let `MainNavigation` handle it
* Open multiple drawers simultaneously
* Use large drawers (400 px) unless content genuinely requires it
* Forget to set `id` on `DrawerConfig` to match the corresponding `NavItem` id
* Use drawers for primary page content
* Show the backdrop over the Navbar
* Exceed 5 visible contextual nav items

---

## Implementation Checklist

- [ ] Navbar is 72 px wide and fixed to the left edge
- [ ] Navbar z-index is 500 (above all drawers and overlays)
- [ ] Global navigation limited to 5 items
- [ ] Contextual navigation shows max 5 visible + overflow
- [ ] `MainNavigation` component used (not manual Navbar + Drawer wiring)
- [ ] Drawer and overlay `left` offset is 72 px — Navbar never obscured
- [ ] Only one drawer open at a time (single-selection enforced by component)
- [ ] Navbar button selected state is mutually exclusive
- [ ] Drawers have consistent sizes (small for utilities, medium for navigation)
- [ ] Close button in every drawer header
- [ ] Focus management implemented (focus to drawer on open, return on close)
- [ ] Escape key closes the active drawer
- [ ] Keyboard navigation works throughout
- [ ] ARIA attributes correctly set
- [ ] Content area adjusts for persistent drawers
- [ ] `DrawerSection` used to organise drawer content
- [ ] Spacing uses design tokens throughout

---

## Related Components

* **[Navbar](/guidelines/components/navbar.md)** — The fixed 72 px navigation shell
* **[Drawer](/guidelines/components/drawer.md)** — The contextual panel component
* **[Page Header](/guidelines/components/page-header.md)** — Page-level title and actions
* **[Avatar](/guidelines/components/avatar.md)** — User menu trigger
* **[Badge](/guidelines/components/badge.md)** — Tenant environment indicator
* **[Counter](/guidelines/components/counter.md)** — Notification counts on nav buttons
* **[FlyoutMenu](/guidelines/components/flyout-menu.md)** — User menu and overflow menu
* **[Micro Navigation](/guidelines/layouts/micro-navigation.md)** — Layout that assembles Main Navigation and Footer into a full-page shell
