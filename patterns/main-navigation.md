---
name: Main Navigation
status: draft
version: 0.1.0
last_updated: 2026-03-20
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Main Navigation — Ripple Design System

## Overview

The **Main Navigation** pattern describes how the Navbar component works together with Drawers to create a complete enterprise application navigation system. This pattern combines a fixed 64 px vertical Navbar with contextual drawers that open to reveal deeper navigation structures, search functionality, notifications, and other global utilities.

The Main Navigation pattern is essential for complex enterprise applications where users need quick access to multiple modules, global utilities, and persistent navigation while working across different areas of the product.

---

## When to use

Use the Main Navigation pattern when:

* Building enterprise applications with multiple distinct modules or product areas
* Users need persistent access to global utilities (search, notifications, settings)
* The application requires both global and contextual navigation hierarchies
* Product identity and environment context must remain visible at all times
* Users frequently switch between different functional areas
* The application has a complex information architecture requiring deep navigation

Do not use the Main Navigation pattern when:

* Building simple single-page applications or marketing websites
* The application has a shallow navigation hierarchy (use Tabs or Page Header navigation instead)
* Horizontal navigation better suits the content and layout
* The product doesn't require persistent global utilities
* Mobile-first design is the primary concern (consider alternative responsive patterns)

---

## Anatomy

The Main Navigation pattern consists of two primary components working together:

```
┌─────────┬──────────────────────────────────────────┐
│         │                                          │
│  64 px  │  Main Content Area                       │
│  Navbar │  (Responsive width)                      │
│         │                                          │
│  [Logo] │  ┌────────────────────────────────────┐ │
│  [⋮⋮⋮]  │  │ Drawer (280-400 px)                │ │
│  [Nav]  │  │ ├─ Header                          │ │
│  [Nav]  │  │ ├─ Tools (optional)                │ │
│  [Nav]  │  │ ├─ Content                         │ │
│         │  │ └─ Footer (optional)               │ │
│  spacer │  └────────────────────────────────────┘ │
│         │                                          │
│  [User] │  Page Content                            │
│         │                                          │
└─────────┴──────────────────────────────────────────┘
```

### 1. Navbar (Fixed Shell)

* **Width**: Fixed 64 px
* **Position**: Fixed to left edge of viewport
* **Height**: 100% of viewport
* **Contains**:
  * Logo area (64 × 64 px)
  * Optional tenant badge
  * Global navigation buttons (up to 5)
  * Contextual navigation buttons (up to 5 visible + overflow)
  * User menu (anchored to bottom)

See the [Navbar component documentation](/guidelines/components/navbar.md) for complete details.

### 2. Drawers (Contextual Panels)

Drawers open from the Navbar buttons to reveal:
* **Navigation drawers**: Deeper navigation structures, menu trees, or module navigation
* **Search drawer**: Global search with results
* **Notifications drawer**: Activity feed, alerts, and notifications
* **Settings drawer**: Application or module settings
* **Help drawer**: Documentation, support, or contextual help
* **Custom utility drawers**: Any other global functionality

See the [Drawer component documentation](/guidelines/components/drawer.md) for complete details.

### 3. Main Content Area

* **Position**: To the right of the Navbar
* **Width**: `calc(100vw - 64px)` when no drawer is open
* **Width with drawer**: `calc(100vw - 64px - drawer-width)` when drawer is open
* **Contains**:
  * Page Header component (title, breadcrumbs, actions)
  * Page content (cards, tables, forms, etc.)

---

## Navigation Patterns

### Interactive Navigation

In this pattern, drawers open on-demand and overlay or push the content area. Each Navbar button controls its associated drawer's open/close state.

**Characteristics:**
* Drawers open when Navbar buttons are clicked
* Only one drawer can be open at a time
* Drawer can overlay content (with backdrop) or push content aside
* Nav button shows "selected" state when its drawer is open
* Clicking the same button again closes the drawer
* Clicking a different button switches to that drawer

**Use when:**
* Users need occasional access to navigation or utilities
* Screen real estate is limited
* Drawers contain utilities that aren't constantly needed
* The content area should remain prominent when drawers are closed

**Implementation:**
```tsx
const [searchOpen, setSearchOpen] = useState(false);
const [notifOpen, setNotifOpen] = useState(false);

<Navbar
  globalNavItems={[
    {
      id: 'search',
      icon: <Search size={18} />,
      label: 'Search',
      onClick: () => {
        setSearchOpen(!searchOpen);
        setNotifOpen(false); // Close other drawers
      },
      selected: searchOpen,
    },
    {
      id: 'notifications',
      icon: <Bell size={18} />,
      label: 'Notifications',
      count: 3,
      countColor: 'negative',
      onClick: () => {
        setNotifOpen(!notifOpen);
        setSearchOpen(false); // Close other drawers
      },
      selected: notifOpen,
    },
  ]}
  userName="User"
  userMenuItems={userMenuItems}
/>

{searchOpen && (
  <RippleDrawer
    open={searchOpen}
    onClose={() => setSearchOpen(false)}
    title="Search"
    size="small"
    tools={<TextInput placeholder="Search..." />}
  >
    {/* Search results */}
  </RippleDrawer>
)}

{notifOpen && (
  <RippleDrawer
    open={notifOpen}
    onClose={() => setNotifOpen(false)}
    title="Notifications"
    count={3}
    size="small"
  >
    {/* Notification list */}
  </RippleDrawer>
)}
```

### Persistent Navigation

In this pattern, a navigation drawer remains open and visible alongside the content area, providing constant access to a navigation hierarchy. Common in ERP and enterprise systems.

**Characteristics:**
* Navigation drawer is always visible (unless explicitly toggled)
* Drawer is part of the page layout, not an overlay
* Content area adjusts width to accommodate the drawer
* Nav button in Navbar toggles drawer visibility
* No backdrop/overlay (drawer is part of layout)
* Drawer width reduces available content area

**Use when:**
* Users need constant access to a navigation tree or menu
* The application has a deep navigation hierarchy
* Users frequently navigate between many pages or modules
* Screen size allows for both drawer and content (desktop applications)
* Navigation context should remain visible while working

**Implementation:**
```tsx
const [navOpen, setNavOpen] = useState(true);

<div style={{ display: 'flex', height: '100vh' }}>
  {/* Navbar */}
  <Navbar
    globalNavItems={[
      {
        id: 'nav',
        icon: <Menu size={18} />,
        label: 'Navigation',
        onClick: () => setNavOpen(!navOpen),
        selected: navOpen,
      },
    ]}
    userName="User"
    userMenuItems={userMenuItems}
  />

  {/* Persistent Navigation Drawer */}
  {navOpen && (
    <div style={{
      width: '320px',
      backgroundColor: 'var(--bg-surface)',
      borderRight: '1px solid var(--border-neutral)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Drawer header, content, etc. */}
    </div>
  )}

  {/* Main Content Area */}
  <div style={{ flex: 1, overflow: 'auto' }}>
    {/* Page content */}
  </div>
</div>
```

---

## Common Drawer Types

### Search Drawer

**Purpose**: Global search across the application

**Size**: Small (280 px)

**Tools Area**: TextInput component for search query

**Content**: Search results, recent searches, or suggestions

**Best practices**:
* Auto-focus the search input when drawer opens
* Show recent searches when input is empty
* Display results as the user types (debounced)
* Include keyboard shortcuts (e.g., Cmd+K to open)
* Clear results when drawer closes

**Example:**
```tsx
<RippleDrawer
  open={searchOpen}
  onClose={() => setSearchOpen(false)}
  title="Search"
  size="small"
  tools={
    <TextInput
      placeholder="Search across modules..."
      icon={<Search size={16} />}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  }
>
  <DrawerSection title="Recent searches">
    {/* Recent search items */}
  </DrawerSection>
  <DrawerSection title="Results" divider>
    {/* Search results */}
  </DrawerSection>
</RippleDrawer>
```

### Notifications Drawer

**Purpose**: Display activity feed, alerts, and notifications

**Size**: Small (280 px)

**Header**: Title with counter badge showing unread count

**Header Actions**: "Mark all read" action

**Content**: List of notification items (DrawerListItem)

**Footer**: Optional "View all" link to notifications page

**Best practices**:
* Show most recent notifications first
* Display unread notifications with visual indicator
* Include timestamps (relative, e.g., "2 minutes ago")
* Group notifications by type or date
* Use avatars to identify notification sources
* Allow inline actions (approve, dismiss, etc.)

**Example:**
```tsx
<RippleDrawer
  open={notifOpen}
  onClose={() => setNotifOpen(false)}
  title="Notifications"
  count={3}
  size="small"
  headerActions={[
    {
      icon: <CheckCheck size={14} />,
      label: 'Mark all read',
      onClick: handleMarkAllRead,
    },
  ]}
>
  <DrawerSection>
    <DrawerListItem
      header="Approval request"
      secondary="2 minutes ago"
      message="Invoice #4821 requires your approval"
      unread={true}
      contentBefore={<Avatar name="System" size="m" />}
      onClick={() => handleNotificationClick('4821')}
    />
    {/* More notifications */}
  </DrawerSection>
</RippleDrawer>
```

### Global Hub Drawer

**Purpose**: Quick access to modules, workspaces, or product areas

**Size**: Small (280 px)

**Content**: Organized sections of navigation links using DrawerMenuItem

**Best practices**:
* Group related modules into sections
* Use icons to aid recognition
* Show active/selected module
* Keep labels concise
* Limit to 2-3 sections for scannability

**Example:**
```tsx
<RippleDrawer
  open={hubOpen}
  onClose={() => setHubOpen(false)}
  title="Global Hub"
  description="Quick access"
  size="small"
>
  <DrawerSection title="Modules">
    <DrawerMenuItem
      label="Finance"
      icon={<DollarSign size={14} />}
      onClick={() => navigate('/finance')}
      active={currentModule === 'finance'}
    />
    <DrawerMenuItem
      label="Procurement"
      icon={<ShoppingCart size={14} />}
      onClick={() => navigate('/procurement')}
      active={currentModule === 'procurement'}
    />
  </DrawerSection>
  <DrawerSection title="Tools" divider>
    <DrawerMenuItem
      label="Reports"
      icon={<BarChart2 size={14} />}
      onClick={() => navigate('/reports')}
    />
  </DrawerSection>
</RippleDrawer>
```

### Client/Tenant Switcher Drawer

**Purpose**: Switch between clients, tenants, or environments

**Size**: Small (280 px)

**Content**: List of available clients/tenants using DrawerListItem

**Best practices**:
* Show current client/tenant at the top
* Mark current selection clearly
* Include search if list is long (5+ items)
* Show client metadata (status, last accessed, etc.)
* Confirm before switching if there's unsaved work

**Example:**
```tsx
<RippleDrawer
  open={clientMenuOpen}
  onClose={() => setClientMenuOpen(false)}
  title="Client Menu"
  description="Switch environment"
  size="small"
>
  <DrawerSection title="Clients">
    <DrawerListItem
      header="Redrock Industries"
      secondary="Current"
      metadata="Active"
      onClick={() => switchClient('redrock')}
      active={currentClient === 'redrock'}
    />
    <DrawerListItem
      header="BlueWave Corp"
      metadata="Active"
      onClick={() => switchClient('bluewave')}
    />
  </DrawerSection>
</RippleDrawer>
```

### Navigation Tree Drawer (Persistent)

**Purpose**: Display deep hierarchical navigation

**Size**: Medium (320 px) or custom

**Variant**: Persistent (part of layout, not overlay)

**Content**: Nested navigation structure using DrawerMenuItem and DrawerSection

**Best practices**:
* Keep hierarchy shallow (2-3 levels max)
* Use sections to group related items
* Show active page/item clearly
* Support expand/collapse for nested items
* Maintain scroll position when navigating

---

## Drawer Sizing Guidelines

| Size | Width | Use case |
|------|-------|----------|
| **Small** | 280 px | Utilities, simple lists, quick actions (search, notifications, simple menus) |
| **Medium** | 320 px | Navigation trees, forms, detailed lists (persistent navigation, client switcher) |
| **Large** | 400 px | Rich content, detailed views, settings panels (help documentation, detailed forms) |
| **Custom** | Any | Special use cases requiring specific width |

**General rules:**
* Use **small** for most utility drawers (search, notifications, quick menus)
* Use **medium** for persistent navigation or lists with metadata
* Use **large** sparingly for truly rich content
* Maintain consistency across similar drawer types

---

## Interaction Patterns

### Single Drawer at a Time

Only one drawer can be open at a time. When opening a new drawer:
1. Close any currently open drawer
2. Open the newly selected drawer
3. Update the "selected" state on the appropriate Navbar button

```tsx
const openDrawer = (drawerName: string) => {
  // Close all drawers
  setSearchOpen(false);
  setNotifOpen(false);
  setHubOpen(false);

  // Open requested drawer
  switch(drawerName) {
    case 'search': setSearchOpen(true); break;
    case 'notif': setNotifOpen(true); break;
    case 'hub': setHubOpen(true); break;
  }
};
```

### Toggle Behavior

Clicking an active (selected) Navbar button should close its drawer:

```tsx
onClick: () => setSearchOpen(!searchOpen)
// OR
onClick: () => setSearchOpen(prev => !prev)
```

### Drawer Dismissal

Drawers can be closed by:
* Clicking the X button in the drawer header
* Clicking the active Navbar button again
* Clicking another Navbar button (switches to that drawer)
* Clicking the backdrop/overlay (for non-persistent drawers)
* Pressing the Escape key
* Navigating to a new page (context-dependent)

### Keyboard Navigation

* **Tab**: Move focus through interactive elements in the drawer
* **Escape**: Close the drawer and return focus to the trigger button
* **Arrow keys**: Navigate menu items within the drawer
* **Enter/Space**: Activate the focused item

---

## Layout Considerations

### Content Area Width

When a drawer is open, the content area must adjust:

**Without drawer:**
```tsx
width: calc(100vw - 64px) // Full width minus Navbar
```

**With overlay drawer:**
```tsx
width: calc(100vw - 64px) // Content doesn't resize; drawer overlays
```

**With persistent drawer:**
```tsx
width: calc(100vw - 64px - 320px) // Minus Navbar and drawer width
```

### Responsive Behavior

**Desktop (> 1024 px):**
* Show full Navbar and drawer
* Content area adjusts width

**Tablet (768-1024 px):**
* Show full Navbar
* Drawer overlays content with backdrop
* Consider smaller drawer sizes

**Mobile (< 768 px):**
* Consider alternative navigation patterns
* Full-screen drawers may be more appropriate
* Navbar may need responsive treatment

---

## Visual Design

### Background Colors

| Element | Token | Usage |
|---------|-------|-------|
| Navbar | `var(--bg-surface)` | Consistent with drawer |
| Drawer | `var(--bg-surface)` | Matches Navbar |
| Content area | `var(--bg-app)` | Differentiated from navigation |
| Page Header | `var(--bg-app)` | Blends with content area |

### Borders

* **Navbar right border**: `1px solid var(--border-neutral)` — separates from content
* **Drawer border**: `1px solid var(--border-neutral)` — separates from content (persistent) or uses shadow (overlay)
* **Page Header bottom border**: Optional, use when you need separation from content

### Shadows

* **Navbar**: None (uses border only)
* **Overlay drawer**: `var(--box-shadow-400)` — elevated above content
* **Persistent drawer**: None (uses border only)

### Spacing

* **Navbar internal padding**: `var(--spacing-75)` (12 px) horizontal
* **Drawer header padding**: `var(--spacing-150) var(--spacing-100) var(--spacing-100)` (24px 16px 16px)
* **Drawer content padding**: `var(--spacing-100)` (16 px)
* **Drawer tools padding**: `var(--spacing-100)` (16 px)
* **Page Header padding**: `var(--spacing-150)` (24 px)

---

## Accessibility

### Navigation Landmark

The entire navigation structure should be within a navigation landmark:

```tsx
<nav aria-label="Application navigation">
  <Navbar {...props} />
  {/* Drawers are typically rendered as siblings or children */}
</nav>
```

### Focus Management

* When a drawer opens, focus should move to the first interactive element (typically search input or close button)
* When a drawer closes via Escape or X button, focus should return to the Navbar button that opened it
* Tab order should flow naturally: Navbar → Drawer → Content

### Screen Reader Announcements

* Announce when drawers open/close: "Search drawer opened" / "Search drawer closed"
* Use `aria-live` regions for dynamic content updates (e.g., search results)
* Ensure drawer content is fully accessible to screen readers
* Announce counter updates on Navbar buttons

### Keyboard Accessibility

* All Navbar buttons must be keyboard accessible (Tab, Enter/Space)
* Drawer content must be fully keyboard navigable
* Focus trap within drawer when overlay is active
* Escape key closes drawer
* Arrow keys navigate menu items within drawer

### ARIA Attributes

* **Navbar buttons**: `aria-pressed="true"` when selected, `aria-label` with counter info
* **Drawer**: `role="dialog"` (overlay) or `role="complementary"` (persistent), `aria-modal="true"` (overlay)
* **Close button**: `aria-label="Close drawer"` or `"Close [drawer name]"`
* **Counters**: `aria-hidden="true"` (count announced in button label)

---

## Best Practices

### Do

* Keep global navigation to 5 items or fewer
* Use small drawers (280 px) for utilities like search and notifications
* Use medium drawers (320 px) for persistent navigation
* Show only one drawer at a time (unless persistent)
* Update "selected" state on Navbar buttons when drawers open/close
* Provide keyboard shortcuts for common drawer actions (e.g., Cmd+K for search)
* Use consistent drawer sizes for similar types of content
* Include a close button in every drawer header
* Return focus to the trigger button when drawer closes
* Use DrawerSection to organize drawer content
* Show counters only for actionable items (unread notifications)
* Match drawer width to content needs, not arbitrary sizes
* Test navigation patterns on various screen sizes

### Don't

* Open multiple drawers simultaneously (except persistent navigation)
* Use large drawers (400 px) unless absolutely necessary
* Forget to update Navbar button "selected" state
* Omit close buttons from drawer headers
* Show Page Header borders when content area has bg-app background
* Use drawers for primary content (use Page content area instead)
* Exceed 5 visible contextual navigation items (use overflow menu)
* Show tenant badges in production environments
* Use counters decoratively (only for actionable notifications)
* Forget to handle keyboard navigation and Escape key
* Mix different drawer sizes for the same type of utility
* Create drawer content without proper sections and structure
* Forget to test responsive behavior

---

## Common Patterns Summary

### Pattern 1: Utilities Bar
Navbar with search, notifications, and global hub drawers. All small size, overlay content.

**Navigation buttons:**
* Search (opens search drawer)
* Notifications (opens notification drawer with count)
* Global Hub (opens module/workspace switcher)

### Pattern 2: Persistent Navigation
Navbar with toggleable navigation drawer that remains open. Medium size, part of layout.

**Navigation buttons:**
* Navigation (toggles persistent drawer)
* Optional utilities (search, notifications)

### Pattern 3: Full Enterprise Shell
Combines persistent navigation with utility drawers. Navigation drawer is persistent medium size, utilities are small overlay drawers.

**Navigation buttons:**
* Navigation (toggles persistent drawer)
* Search (small overlay)
* Notifications (small overlay)
* Global Hub (small overlay)
* Client Switcher (small overlay)

---

## Implementation Checklist

When implementing the Main Navigation pattern:

- [ ] Navbar is 64 px wide and fixed to left edge
- [ ] Global navigation limited to 5 items
- [ ] Contextual navigation shows 5 visible + overflow if needed
- [ ] Only one drawer open at a time (unless persistent)
- [ ] Navbar buttons show "selected" state when drawer is open
- [ ] Drawers have consistent sizes (small for utilities, medium for navigation)
- [ ] Close button in every drawer header
- [ ] Focus management implemented (focus to drawer on open, return on close)
- [ ] Escape key closes active drawer
- [ ] Keyboard navigation works throughout
- [ ] ARIA attributes properly set
- [ ] Screen reader announcements for drawer state changes
- [ ] Content area width adjusts for persistent drawers
- [ ] Responsive behavior tested
- [ ] Page Header background set to bg-app
- [ ] Page Header border removed (when appropriate)
- [ ] Drawer tools area has proper padding
- [ ] DrawerSection used to organize content
- [ ] Consistent spacing using design tokens

---

## Related Components

* **[Navbar](/guidelines/components/navbar.md)** — The fixed 64 px navigation shell
* **[Drawer](/guidelines/components/drawer.md)** — The contextual panel component
* **[Page Header](/guidelines/components/page-header.md)** — Page-level title and actions
* **[Avatar](/guidelines/components/avatar.md)** — User menu trigger
* **[Badge](/guidelines/components/badge.md)** — Tenant environment indicator
* **[Counter](/guidelines/components/counter.md)** — Notification counts
* **[FlyoutMenu](/guidelines/components/flyout-menu.md)** — User menu and overflow menu
* **[TextInput](/guidelines/components/text-input.md)** — Search input in drawer tools
* **[Breadcrumbs](/guidelines/components/breadcrumbs.md)** — Page location context

---

## Migration Notes

When migrating from other navigation patterns:

* Replace horizontal navigation bars with Navbar + Drawer pattern
* Convert side navigation panels to persistent drawers
* Move global utilities (search, notifications) to Navbar buttons with drawers
* Consolidate multiple navigation zones into single Navbar with contextual sections
* Replace modal dialogs for search/settings with drawer pattern
* Ensure all navigation is keyboard accessible
* Update layout to accommodate 64 px Navbar width
* Review and simplify navigation hierarchy to fit within global/contextual structure
