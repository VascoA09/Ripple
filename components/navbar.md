---
name: Navbar
status: draft
version: 0.2.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Navbar — Ripple Design System

## Overview

The **Navbar** is the persistent vertical navigation shell used in Ripple-based enterprise applications. It identifies the product and environment the user is working in, provides access to global and contextual navigation areas, and exposes the user menu — all within a fixed **72 px wide** column anchored to the left edge of the viewport.

Clicking navigation buttons opens a drawer or navigates to a destination. The logo area is non-interactive product identity. The Navbar is always visible and does not collapse.

---

## When to use

Use the Navbar when:

* The application has multiple distinct top-level areas that users navigate between frequently
* Persistent product identity (logo, product name, tenant badge) is required on every page
* Notification counts must be surfaced alongside navigation actions
* Contextual navigation must update based on the active module or section
* A persistent user menu (profile, help, logout) is required

Do not use the Navbar when:

* The application is a simple single-page layout with no navigation hierarchy (use Tabs instead)
* Navigation is temporary or overlaid (use a Drawer or Flyout Menu instead)
* Horizontal navigation better fits the layout and content hierarchy
* The component would serve as a secondary navigation element already handled by the Page Header or Tabs

---

## Anatomy

The Navbar is composed of the following zones, stacked vertically:

```
┌──────────────┐
│  Logo Area   │  72 px wide — logo + product name
│  Tenant Badge│  Optional — environment indicator
├──────────────┤
│  Global Nav  │  Up to 5 nav buttons (48 × 48 px each)
├──────────────┤  ← optional divider
│  Contextual  │  Up to 5 visible + overflow menu
│  Navigation  │
├──────────────┤
│   (spacer)   │  flex: 1 — pushes user menu to bottom
├──────────────┤
│  User Menu   │  Avatar trigger → Flyout Menu
└──────────────┘
```

### 1. Logo Area

* **Width**: Fills the 72 px column (`width: 100%`)
* **Logo**: Product SVG icon rendered in `var(--color-primary)`
* **Product name**: Abbreviated product label (e.g., "ERPx", "ESS") rendered below the logo
  * Font size: `var(--font-size-80)` (14 px)
  * Font weight: `var(--font-weight-semibold)`
  * Color: `var(--text-loud)`
  * Max width: 100% of column with overflow truncation
* **Interaction**: The logo area is non-interactive (`<div>`). It is purely product identity. There is no `onLogoClick` prop.
* **Spacing**: `var(--spacing-50)` (8 px) padding top and bottom; `margin-bottom: var(--spacing-75)` (12 px) gap to tenant badge

### 2. Tenant Badge

* Built on the Ripple **Badge** component (`variant="outline"`, `size="small"`)
* **Default color**: `notice` (orange) — clearly signals non-production environments
* **Supported colors**: All Badge color variants (`primary`, `notice`, `negative`, `positive`, `neutral`)
* **Max width**: Constrained by `box-sizing: border-box` within the 72 px column
* Truncated labels are exposed in full via a **Tooltip** on hover and keyboard focus
* Positioned directly below the logo area, separated by the 12 px logo margin
* Optional — omit for production environments where the environment is unambiguous

### 3. Global Navigation

* Contains up to **5 nav buttons** representing the top-level product destinations
* Overflow beyond 5 is silently ignored — curate global items carefully
* Buttons are arranged vertically with `var(--spacing-25)` (4 px) gap between them
* Nav list has no horizontal padding — buttons fill the column

### 4. Contextual Navigation

* Supplementary navigation for module-specific destinations
* Separated from global nav by an optional 1 px full-width horizontal divider (`var(--border-neutral)`)
* Maximum **5 visible buttons**; if more items exist, the 5th slot becomes the **Contextual Menu** button (⋯)
* The contextual nav can change dynamically as the user navigates between product modules
* Same button style and sizing as global nav buttons

### 5. Contextual Menu (overflow)

* Rendered as a **MoreHorizontal (⋯)** icon button using the Ripple FlyoutMenu component
* Opens a portal-rendered Flyout Menu to the right of the Navbar
* Lists all overflow contextual items as menu entries, including their icons and counters
* `aria-label="More navigation items"`, `aria-haspopup="menu"`, `aria-expanded` managed automatically
* When a user selects an item from the contextual menu, consumers may reorder items to surface the selected destination into the visible area

### 6. User Menu

* Anchored to the bottom of the Navbar using `flex: 1` spacer
* **Trigger**: Ripple **Avatar** component (`size="large"`, initials or image) wrapped in a plain `<button>` for Radix `asChild` compatibility
* **Opens**: A Ripple FlyoutMenu positioned to the right (`side="right"`, `align="end"`)
* Menu header: Non-interactive display of the user's full name, role, and product area
* Menu items: About, Help, Your profile, Log out (and any custom items)
* Supports separators between menu item groups via the `separator` property
* Tooltip shows the user's name on hover/focus when the menu is closed

---

## Nav Button

Nav buttons are the primary interactive element within both the Global and Contextual navigation zones.

### Structure

* **Component**: Ripple `IconButton` with `size="large"`
* **Size**: 48 × 48 px
* **Border radius**: `var(--border-radius-150)` (8 px)
* **Icon**: Centered, `aria-hidden`
* **Counter** (optional): Ripple Counter `size="small"`, `color="negative"`, positioned `top: 2px; right: 2px` relative to the button

### States

| State | Background | Color | Notes |
|-------|-----------|-------|-------|
| Default | transparent | `var(--text)` | Resting state |
| Hover | `var(--bg-neutral-softest)` | `var(--text)` | Pointer interaction |
| Active (pressed) | `var(--bg-neutral-soft)` | `var(--text)` | Mouse down |
| Focus | transparent + 2 px focus ring | `var(--text)` | Keyboard focus |
| Selected | `var(--bg-neutral)` | `var(--text-loud-inverse)` | Drawer is open — dark background, white icon |
| Disabled | transparent, opacity 0.4 | `var(--text-disabled)` | Not interactive |

* Focus ring: `2px solid var(--border-focus)` with `2px offset`
* Disabled buttons are excluded from tab order via the `disabled` attribute
* Only one nav button can be selected at a time. When a drawer opens, all other buttons deselect.

### Counter

* Use the Ripple **Counter** component (`size="small"`, `variant="fill"`, `color="negative"`)
* Counter color is always `negative` — the Navbar does not support custom counter colors
* Capped at 99+ per Counter component rules
* Counter is `aria-hidden`; announce count in the button's `aria-label`

### Tooltip

Every nav button shows a Tooltip on the right side (`side="right"`, `sideOffset={12}`) displaying:
* The button label (e.g., "Notifications")
* The count if present (e.g., "Notifications (4)")

---

## Spacing

| Area | Token | Value |
|------|-------|-------|
| Navbar width | — | 72 px |
| Padding top | `var(--spacing-100)` | 16 px |
| Padding right / left | `var(--spacing-50)` | 8 px |
| Padding bottom | `var(--spacing-50)` | 8 px |
| Logo bottom margin (gap to badge) | `var(--spacing-75)` | 12 px |
| Gap between nav buttons | `var(--spacing-25)` | 4 px |
| Nav section horizontal padding | None | 0 px |
| Divider | Full width | — |

---

## Design Tokens

### Layout

| Element | Token | Value |
|---------|-------|-------|
| Width | — | 72 px fixed |
| Z-index | — | 500 (above Drawer panels and overlays) |

### Colors

| Element | Token |
|---------|-------|
| Background | `var(--bg-surface)` |
| Border (right edge) | `var(--border-neutral)` |
| Nav button selected bg | `var(--bg-neutral)` |
| Nav button selected icon | `var(--text-loud-inverse)` |
| Nav button hover bg | `var(--bg-neutral-softest)` |
| Nav button pressed bg | `var(--bg-neutral-soft)` |
| Focus ring | `var(--border-focus)` |
| Divider | `var(--border-neutral)` |
| Logo icon | `var(--color-primary)` |
| Product name | `var(--text-loud)` |
| Disabled opacity | 0.4 |

### Typography

| Element | Size | Weight |
|---------|------|--------|
| Product name | `var(--font-size-80)` (14 px) | `var(--font-weight-semibold)` |

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | Default SVG | Product logo element |
| `productName` | `string` | — | Abbreviated product name below the logo |
| `tenantLabel` | `string` | — | Environment/tenant badge label |
| `tenantColor` | `BadgeColor` | `'notice'` | Badge color variant |
| `globalNavItems` | `NavItem[]` | `[]` | Top-level navigation (max 5) |
| `contextualNavItems` | `NavItem[]` | `[]` | Module navigation (5 visible + overflow) |
| `showContextualDivider` | `boolean` | `true` | Divider between global and contextual nav |
| `userName` | `string` | `'User'` | Name for avatar initials and user menu header |
| `userRole` | `string` | — | User's role, shown in user menu header |
| `userProductArea` | `string` | — | User's product area, shown in user menu header |
| `userAvatarSrc` | `string` | — | Image URL for the avatar |
| `userMenuItems` | `UserMenuItem[]` | `[]` | Items in the user menu flyout |
| `className` | `string` | — | Additional CSS class on `<nav>` |
| `style` | `CSSProperties` | — | Additional inline styles |

### NavItem shape

```ts
interface NavItem {
  id: string;          // Unique key
  icon: ReactNode;     // Icon element
  label: string;       // Accessible label + tooltip text
  count?: number;      // Counter value (shown when > 0, always negative color)
  onClick?: () => void; // Click handler
  selected?: boolean;  // True when associated drawer is open
  disabled?: boolean;  // Prevents interaction
}
```

**Note**: `countColor` is not supported. All counters use `color="negative"`.

### UserMenuItem shape

```ts
interface UserMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;    // Optional leading icon
  separator?: boolean; // Renders a separator line before this item
  onClick?: () => void;
}
```

---

## Usage Examples

### Minimal Navbar

```tsx
<Navbar
  productName="ERPx"
  globalNavItems={[
    { id: 'home',     label: 'Home',     icon: <Home size={20} />,     onClick: () => navigate('/') },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, onClick: () => navigate('/settings') },
  ]}
  userName="Alex Johnson"
  userMenuItems={[
    { id: 'profile', label: 'Your profile', icon: <User size={16} />,   onClick: () => navigate('/profile') },
    { id: 'logout',  label: 'Log out',      icon: <LogOut size={16} />, separator: true, onClick: handleLogout },
  ]}
/>
```

### With Tenant Badge and Counter

```tsx
<Navbar
  productName="ERPx"
  tenantLabel="Redrock"
  tenantColor="notice"
  globalNavItems={[
    { id: 'home',          label: 'Home',          icon: <Home size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, count: 4, selected: openId === 'notifications', onClick: () => toggleDrawer('notifications') },
    { id: 'messages',      label: 'Messages',      icon: <MessageSquare size={20} />, count: 12, selected: openId === 'messages', onClick: () => toggleDrawer('messages') },
  ]}
  userName="Alex Johnson"
  userRole="Finance Manager"
  userProductArea="Finance"
  userMenuItems={defaultUserMenuItems}
/>
```

### With Contextual Navigation

```tsx
<Navbar
  productName="ERPx"
  tenantLabel="Redrock"
  globalNavItems={globalItems}
  contextualNavItems={[
    { id: 'users',   label: 'Users',   icon: <Users size={20} />,    onClick: () => navigate('/users') },
    { id: 'reports', label: 'Reports', icon: <BarChart2 size={20} />, onClick: () => navigate('/reports') },
  ]}
  showContextualDivider
  userName="Alex Johnson"
  userMenuItems={userMenuItems}
/>
```

### In the Main Navigation Pattern

In production, the Navbar is composed via the `MainNavigation` pattern component, which handles drawer state, single-selection logic, and layout automatically. Direct `Navbar` usage is for standalone or custom layouts.

See [Main Navigation pattern](/guidelines/patterns/main-navigation.md) for the full enterprise shell.

---

## Accessibility

* **Navigation landmark**: The root element is `<nav aria-label="Application navigation">`, ensuring it is identified as a navigation region by screen readers
* **Nav button labels**: Every button has `aria-label` matching its visible tooltip; icon-only buttons must never rely on icon alone
* **Selected state**: `aria-pressed="true"` is set when the associated drawer is open; `aria-pressed="false"` in the resting state
* **Single selection**: Only one nav button is selected at a time — the pattern enforces mutual exclusivity
* **Counter announcement**: Counter badges are `aria-hidden`; the count is appended to `aria-label` (e.g., "Notifications (4)") so it is announced by screen readers
* **Disabled buttons**: Use the `disabled` HTML attribute to remove from tab order and prevent interaction; `aria-disabled` is also set for programmatic consumers
* **Overflow menu**: The ⋯ button uses `aria-haspopup="menu"` and `aria-expanded`; the menu is keyboard-navigable with Arrow keys and dismisses on Escape
* **User menu**: The avatar trigger uses `aria-haspopup="menu"` and `aria-expanded`; the user's name is announced as the trigger's `aria-label`
* **Focus indicators**: All interactive elements use a 2 px focus ring with 2 px offset using `var(--border-focus)`, meeting WCAG 2.2 AA
* **Tenant badge tooltip**: Truncated labels are accessible via Tooltip on both hover and keyboard focus

---

## Best Practices

### Do

* Keep global navigation to **5 items** representing the highest-level product destinations
* Use contextual navigation for module-specific destinations that update per active area
* Show counters only for **actionable** notifications (unread messages, critical alerts)
* Use the tenant badge to clearly differentiate non-production environments
* Always include a user menu with at minimum a **Log out** action
* Match the selected state to the actual open drawer
* Use `userRole` and `userProductArea` to give the user menu header useful context

### Don't

* Exceed 5 global navigation items
* Use the Navbar for in-page section navigation (use Tabs instead)
* Omit `aria-label` on any nav button
* Show counters on every button — reserve them for genuinely important notifications
* Make the logo interactive — it is product identity only
* Use the Navbar for temporary overlays (use Drawer or Flyout Menu instead)
* Place destructive or administrative actions in global nav — use the user menu
* Rely on color alone to communicate counter meaning

---

## Related Patterns

* **Avatar** — Used as the user menu trigger
* **Badge** — Used for the tenant environment badge
* **Counter** — Used for notification counts on nav buttons
* **FlyoutMenu** — Used for the contextual overflow menu and user menu
* **Tooltip** — Used for nav button labels and truncated tenant badge
* **Page Header** — Page-level heading and actions within the content area
* **Drawer** — Panel that opens from the Navbar buttons to reveal deeper navigation
* **Main Navigation** — The composed pattern for the full enterprise navigation shell
