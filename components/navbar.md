---
name: Navbar
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Navbar — Ripple Design System

## Overview

The **Navbar** is the persistent vertical navigation shell used in Ripple-based enterprise applications. It identifies the product and environment the user is working in, provides access to global and contextual navigation areas, and exposes the user menu — all within a fixed **64 px wide** column anchored to the left edge of the viewport.

Clicking navigation buttons opens a drawer or navigates to a destination. Clicking the logo area returns the user to the product home. The Navbar is always visible and does not collapse.

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
│  Logo Area   │  64 × 64 px — logo + product name
│  Tenant Badge│  Optional — environment indicator
├──────────────┤
│  Global Nav  │  Up to 5 nav buttons
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

* **Size**: Fixed 64 × 64 px
* **Logo**: Product SVG icon rendered at 32 × 32 px in `var(--color-primary)`
* **Product name**: Abbreviated product label (e.g., "ERPx", "ESS") rendered below the logo
  * Font size: `var(--font-size-20)` (10 px)
  * Font weight: `var(--font-weight-bold)`
  * Color: `var(--text-loud)`
  * Max width: 56 px with overflow truncation
* **Interaction**: When `onLogoClick` is provided, the entire 64 × 64 px area becomes an interactive button (`aria-label="Go to home"`) with hover and focus states

### 2. Tenant Badge

* Built on the Ripple **Badge** component (`variant="fill"`, `size="small"`)
* **Default color**: `notice` (orange) — clearly signals non-production environments
* **Supported colors**: All Badge color variants (`primary`, `notice`, `negative`, `positive`, `neutral`)
* **Max width**: 52 px — labels that exceed this width are truncated with an ellipsis
* Truncated labels are exposed in full via a **Tooltip** on hover and keyboard focus
* Positioned directly below the logo area with 8 px bottom margin
* Optional — omit for production environments where the environment is unambiguous

### 3. Global Navigation

* Contains up to **5 nav buttons** representing the top-level product destinations
* Overflow beyond 5 is silently ignored — curate global items carefully
* Buttons are arranged vertically with `var(--spacing-25)` (4 px) gap between them
* Padded `var(--spacing-75)` (12 px) horizontally within the 64 px column

### 4. Contextual Navigation

* Supplementary navigation for module-specific destinations
* Separated from global nav by an optional 1 px horizontal divider (`var(--border-neutral)`)
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
* **Trigger**: Ripple **Avatar** component (`size="m"`, initials or image)
* **Opens**: A Ripple FlyoutMenu positioned to the right (`side="right"`, `align="end"`)
* Menu header: Non-interactive display of the user's full name
* Menu items: About, Help, Your profile, Log out (and any custom items)
* Supports separators between menu item groups via the `separator` property
* Tooltip shows the user's name on hover/focus when the menu is closed

---

## Nav Button

Nav buttons are the primary interactive element within both the Global and Contextual navigation zones.

### Structure

* **Size**: 40 × 40 px
* **Border radius**: `var(--border-radius-150)` (8 px)
* **Icon**: 20 × 20 px, centered
* **Counter** (optional): Ripple Counter `size="small"` positioned `top: 2px; right: 2px` relative to the button

### States

| State | Background | Color | Notes |
|-------|-----------|-------|-------|
| Default | transparent | `var(--text)` | Resting state |
| Hover | `var(--bg-neutral-softest)` | `var(--text)` | Pointer interaction |
| Active (pressed) | `var(--bg-neutral-soft)` | `var(--text)` | Mouse down |
| Focus | transparent + 2 px focus ring | `var(--text)` | Keyboard focus |
| Selected | `var(--bg-primary-soft)` | `var(--color-primary-loud)` | Drawer is open |
| Disabled | transparent, opacity 0.4 | `var(--text-disabled)` | Not interactive |

* Focus ring: `2px solid var(--border-focus)` with `2px offset`
* Disabled buttons are excluded from tab order via the `disabled` attribute

### Counter

* Use the Ripple **Counter** component (`size="small"`, `variant="fill"`)
* Recommended colors by semantic meaning:
  * `negative` — errors, critical alerts
  * `primary` — informational counts (messages)
  * `notice` — warnings, pending items
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
| Logo area | Fixed 64 × 64 px | — |
| Vertical padding (top/bottom) | `var(--spacing-50)` | 8 px |
| Nav section horizontal padding | `var(--spacing-75)` | 12 px |
| Gap between nav buttons | `var(--spacing-25)` | 4 px |
| Contextual divider margin | `var(--spacing-50)` each side | 8 px |
| User menu bottom padding | `var(--spacing-50)` | 8 px |

---

## Design Tokens

### Colors

| Element | Token |
|---------|-------|
| Background | `var(--bg-surface)` |
| Border (right edge) | `var(--border-neutral)` |
| Nav button selected bg | `var(--bg-primary-soft)` |
| Nav button selected icon | `var(--color-primary-loud)` |
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
| Product name | `var(--font-size-20)` | `var(--font-weight-bold)` |

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | Default SVG | Product logo element |
| `productName` | `string` | — | Abbreviated product name below the logo |
| `onLogoClick` | `() => void` | — | Makes logo interactive; navigates to home |
| `tenantLabel` | `string` | — | Environment/tenant badge label |
| `tenantColor` | `BadgeColor` | `'notice'` | Badge color variant |
| `globalNavItems` | `NavItem[]` | `[]` | Top-level navigation (max 5) |
| `contextualNavItems` | `NavItem[]` | `[]` | Module navigation (5 visible + overflow) |
| `showContextualDivider` | `boolean` | `true` | Divider between global and contextual nav |
| `userName` | `string` | `'User'` | Name for avatar initials and user menu header |
| `userAvatarSrc` | `string` | — | Image URL for the avatar |
| `userMenuItems` | `UserMenuItem[]` | `[]` | Items in the user menu flyout |
| `className` | `string` | — | Additional CSS class on `<nav>` |
| `style` | `CSSProperties` | — | Additional inline styles |

### NavItem shape

```ts
interface NavItem {
  id: string;                          // Unique key
  icon: ReactNode;                     // Icon element (rendered at 20 × 20 px)
  label: string;                       // Accessible label + tooltip text
  count?: number;                      // Counter value (shown when > 0)
  countColor?: CounterColor;           // 'primary' | 'notice' | 'negative' | 'positive' | 'neutral'
  onClick?: () => void;                // Click handler
  selected?: boolean;                  // True when associated drawer is open
  disabled?: boolean;                  // Prevents interaction
}
```

### UserMenuItem shape

```ts
interface UserMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;                    // Optional leading icon
  separator?: boolean;                 // Renders a separator line before this item
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
    { id: 'home', label: 'Home', icon: <Home size={20} />, onClick: () => navigate('/') },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, onClick: () => navigate('/settings') },
  ]}
  userName="Alex Johnson"
  userMenuItems={[
    { id: 'profile', label: 'Your profile', icon: <User size={16} />, onClick: () => navigate('/profile') },
    { id: 'logout', label: 'Log out', icon: <LogOut size={16} />, separator: true, onClick: handleLogout },
  ]}
/>
```

### With Tenant Badge and Selected State

```tsx
<Navbar
  productName="ERPx"
  tenantLabel="Redrock"
  tenantColor="notice"
  globalNavItems={[
    { id: 'home',          label: 'Home',          icon: <Home size={20} />,         selected: activeNav === 'home',          onClick: () => setActiveNav('home') },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />,         selected: activeNav === 'notifications', onClick: () => setActiveNav('notifications'), count: 4, countColor: 'negative' },
    { id: 'messages',      label: 'Messages',      icon: <MessageSquare size={20} />, selected: activeNav === 'messages',      onClick: () => setActiveNav('messages'), count: 12, countColor: 'primary' },
  ]}
  userName="Alex Johnson"
  onLogoClick={() => navigate('/')}
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
    { id: 'users',    label: 'Users',    icon: <Users size={20} />,    onClick: () => navigate('/users') },
    { id: 'reports',  label: 'Reports',  icon: <BarChart2 size={20} />, onClick: () => navigate('/reports') },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} />, onClick: () => navigate('/projects') },
  ]}
  showContextualDivider
  userName="Alex Johnson"
  userMenuItems={userMenuItems}
/>
```

### With Overflow Contextual Menu

```tsx
// 7 contextual items → 4 visible + ⋯ overflow menu with 3 items
<Navbar
  productName="ERPx"
  contextualNavItems={sevenContextualItems}
  showContextualDivider
  userName="Alex Johnson"
  userMenuItems={userMenuItems}
/>
```

---

## Accessibility

* **Navigation landmark**: The root element is `<nav aria-label="Application navigation">`, ensuring it is identified as a navigation region by screen readers
* **Nav button labels**: Every button has `aria-label` matching its visible tooltip; icon-only buttons must never rely on icon alone
* **Selected state**: `aria-pressed="true"` is set when the associated drawer is open; `aria-pressed="false"` in the resting state
* **Counter announcement**: Counter badges are `aria-hidden`; the count is appended to `aria-label` (e.g., "Notifications (4)") so it is announced by screen readers
* **Disabled buttons**: Use the `disabled` HTML attribute to remove from tab order and prevent interaction; `aria-disabled` is also set for programmatic consumers
* **Overflow menu**: The ⋯ button uses `aria-haspopup="menu"` and `aria-expanded`; the menu is keyboard-navigable with Arrow keys and dismisses on Escape
* **User menu**: The avatar trigger uses `aria-haspopup="menu"` and `aria-expanded`; the user's name is announced as the trigger's `aria-label`
* **Focus indicators**: All interactive elements use a 2 px focus ring with 2 px offset using `var(--border-focus)`, meeting WCAG 2.1 AA
* **Tenant badge tooltip**: Truncated labels are accessible via Tooltip on both hover and keyboard focus
* **Tooltips**: All nav buttons display Tooltips to the right of the Navbar, providing context for icon-only navigation

---

## Best Practices

### Do

* Keep global navigation to **5 items** representing the highest-level product destinations
* Use contextual navigation for module-specific destinations that update per active area
* Show counters only for **actionable** notifications (unread messages, critical alerts)
* Provide `onLogoClick` to let users navigate to the product home from anywhere
* Use the tenant badge to clearly differentiate non-production environments
* Use `negative` counter color for errors/alerts and `primary` for informational counts
* Always include a user menu with at minimum a **Log out** action
* Match the selected state to the actual open drawer or active view

### Don't

* Exceed 5 global navigation items
* Use the Navbar for in-page section navigation (use Tabs instead)
* Omit `aria-label` on any nav button
* Show counters on every button — reserve them for genuinely important notifications
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
