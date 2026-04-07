---
name: Micro Navigation
type: layout
status: draft
version: 0.1.0
last_updated: 2026-04-06
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, layout]
---

# Micro Navigation

## Classification

**Type: Layout template** — not a pattern.

Micro Navigation has no behavioural logic of its own. It arranges two existing patterns — MainNavigation and Footer — into an L-shaped shell. All state (drawers, tabs, groups) is owned by those patterns and managed by the consuming application.

This distinction matters for maintenance:
- **Patterns** own behaviour and are individually tested
- **Layout templates** declare how patterns combine spatially, nothing more

Source: `src/layouts/MicroNavigation/`

---

## Description

Micro Navigation composes MainNavigation and Footer into a persistent L-shaped application shell for enterprise products. Users can navigate between modules (left panel) and manage open pages (bottom tab bar) simultaneously, without interrupting their current context.

> **Device scope:** Desktop and tablet only. The layout requires enough horizontal space for the Navbar (64px), optional navigation panel, and meaningful content area. Do not use on mobile.

---

## Anatomy

The Micro navigation template consists of four main elements that work together to create a cohesive navigation experience:

### 1. L-Shape Navigation

The L-shape navigation forms the structural foundation of the template, consisting of:

#### Main Navigation (Vertical Part of "L")
- **Navbar:** The top section providing product branding, global actions, and user menu
- **Drawer:** The expandable sidebar below the navbar containing hierarchical navigation items
- **Location:** Left side of the screen, spanning full height
- **Behavior:** Can be expanded or collapsed to adjust workspace size

> **Contextual navigation is not shown by default.** The Navbar supports two groups of nav items: global items (always present — Search, Hub, Notifications, Client) and contextual items (module-specific, e.g. Finance, People, Reports). Contextual items are omitted from the layout default because they are product and team specific. Consuming applications add them via `contextualNavItems` and set `showContextualDivider: true` to visually separate the two groups.

#### Footer (Horizontal Part of "L")
- **Tab Bar:** Displays currently open pages as tabs
- **Location:** Bottom of the screen, spanning full width
- **Background:** Uses `var(--bg-nav)` for proper theme adaptation
- **Behavior:** Allows users to switch between pages, organize tabs into groups, and manage workspace

### 2. Main Container

The main container hosts the page content and is divided into two sections:

#### Page Header
- **Location:** Top of the main content area
- **Position:** Sticky (remains visible when scrolling)
- **Contains:** Page title, breadcrumbs, primary actions
- **Purpose:** Provides context and access to page-level actions

#### Body Container
- **Location:** Below the page header
- **Behavior:** Scrollable content area
- **Grid System:** Uses Ripple Grid for organized content layout
- **Purpose:** Displays the main page content

---

## Layout Structure

```
┌─────────┬──────────────────────────────────────┐
│         │  Page Header (Sticky)                │
│  Main   ├──────────────────────────────────────┤
│  Nav    │                                      │
│ (Navbar │                                      │
│    +    │  Body Container (Scrollable)         │
│ Drawer) │  Uses Grid System                    │
│         │                                      │
├─────────┴──────────────────────────────────────┤
│  Footer (Tab Bar) - bg-nav                     │
└────────────────────────────────────────────────┘
```

---

## Use Cases

Micro navigation is designed for enterprise applications where users need to:

### Document Management
- Work with multiple documents simultaneously
- Compare different versions or related documents
- Access reference materials while editing

### Data Entry Applications
- Process multiple records concurrently (invoices, orders, customer records)
- Switch between related data views
- Maintain context across different workflow steps

### Analytical Workspaces
- View multiple reports or dashboards
- Compare data across different time periods
- Analyze multiple datasets in parallel

### Administrative Tools
- Manage system configurations across different categories
- Monitor multiple metrics or logs simultaneously
- Handle multiple tasks or approvals in parallel

---

## Usage Guidelines

### When to Use

Use Micro Navigation when:
- Building enterprise applications with complex navigation hierarchies
- Users frequently work with multiple pages simultaneously
- The application requires persistent access to navigation while viewing content
- Context preservation across multiple views is critical
- The target devices are desktop or tablet (up to tablet sizes)

### When Not to Use

Avoid Micro Navigation when:
- Building mobile-first applications (screen space is too limited)
- The application has simple, linear navigation flows
- Users typically work with only one page at a time
- Browser tabs provide sufficient page management
- A public-facing marketing site doesn't need complex navigation

---

## Best Practices

### Layout and Structure

**Do:**
- Maintain the sticky Page Header for consistent navigation access
- Use the Grid system in the Body Container for organized content
- Allow the drawer to be expanded/collapsed for workspace flexibility
- Keep related navigation items grouped in drawer sections using `DrawerSection` and `DrawerMenuItem`
- Provide breadcrumbs in the Page Header to show current location
- Use `var(--bg-nav)` for footer backgrounds to ensure proper theme adaptation

**Don't:**
- Don't override the sticky positioning of the Page Header
- Don't nest multiple levels of navigation without clear hierarchy
- Don't use Micro Navigation on mobile devices
- Don't hide critical navigation items when the drawer is collapsed
- Don't create custom drawer menu items; use `DrawerSection` and `DrawerMenuItem` components

### Drawer Implementation

**Do:**
- Use `DrawerSection` to organize navigation items into logical groups
- Use `DrawerMenuItem` for all navigation items
- Include section labels for clarity and structure
- Use icons consistently across navigation items
- Provide clear active states using the built-in `active` prop

**Don't:**
- Don't create custom card-style or button-style drawer items
- Don't bypass the standard drawer components
- Don't use inconsistent spacing or styling
- Don't mix different drawer item patterns

### Interactive Elements

**Do:**
- Use `IconButton variant="ghost" color="neutral"` for all close buttons in drawer headers
- Use proper Ripple button variants (fill, outline, ghost) for actions
- Provide clear hover and focus states
- Ensure all interactive elements meet minimum touch targets (48px)

**Don't:**
- Don't create custom close button implementations
- Don't use bare icons without proper button wrappers
- Don't use inconsistent button styles across similar contexts
- Don't make interactive elements too small for touch devices

### Tab Management

**Do:**
- Allow users to organize tabs into meaningful groups
- Provide tab actions (lock, pin, close) through contextual menus
- Show visual indicators for different tab types (standard, locked, pinned)
- Implement reasonable limits on the number of open tabs
- Persist tab state across sessions when appropriate

**Don't:**
- Don't allow unlimited tabs (can overwhelm users)
- Don't auto-close tabs without user confirmation
- Don't remove tab organization when users switch pages
- Don't hide all tabs when only one is open (show the single tab)

### Navigation Hierarchy

**Do:**
- Organize drawer items into logical sections with labels
- Use icons consistently across navigation items
- Provide clear active states for current page/section
- Keep navigation labels concise and descriptive
- Maintain consistent navigation patterns across the application

**Don't:**
- Don't create more than 2-3 levels of navigation hierarchy
- Don't use overly technical or ambiguous labels
- Don't mix different navigation paradigms
- Don't change navigation structure based on user role without clear indication

### Workspace Management

**Do:**
- Save drawer expansion state across sessions
- Preserve tab organization when users navigate
- Provide clear visual feedback for all interactive elements
- Allow keyboard navigation through all components
- Ensure focus management when switching between tabs

**Don't:**
- Don't reset workspace state on every page load
- Don't lose tab groups when users refresh the page
- Don't trap keyboard focus within navigation components
- Don't prevent users from customizing their workspace

---

## Accessibility

### Keyboard Navigation

All interactive elements must be keyboard accessible:
- **Tab / Shift+Tab:** Navigate between regions and interactive elements
- **Enter / Space:** Activate buttons and menu items
- **Escape:** Close open menus or dialogs
- **Arrow Keys:** Navigate within menus and tab lists

### Screen Reader Support

Provide proper semantic structure:
- Use landmark regions (navigation, main, contentinfo)
- Add descriptive labels to navigation regions
- Announce active states (aria-selected, aria-current)
- Communicate drawer expansion state (aria-expanded)
- Announce page title changes when switching tabs

### Focus Management

Maintain clear focus indicators and manage focus appropriately:
- Provide visible focus indicators on all interactive elements (2px border with 2px offset for buttons)
- Move focus to activated content when switching tabs
- Return focus to trigger when closing menus
- Don't trap focus within navigation components
- Ensure focus order follows visual layout

### Color Contrast

Meet WCAG AA standards:
- All text meets minimum 4.5:1 contrast ratio
- Interactive elements have 3:1 contrast against backgrounds
- Don't rely on color alone to convey information
- Provide multiple visual cues for states (color, icon, border)

---

## Responsive Behavior

### Desktop (1024px and above)
- Full Micro Navigation with all features enabled
- Drawer can be expanded or collapsed
- Footer displays all tabs with scrolling when needed
- Page Header shows full breadcrumbs and actions

### Tablet (768px - 1023px)
- Micro Navigation remains functional
- Drawer defaults to collapsed to save space
- Footer tabs may scroll more frequently
- Page Header may condense actions into menus

### Mobile (Below 768px)
- **Do not use Micro Navigation**
- Use alternative patterns:
  - Bottom navigation bars for primary navigation
  - Hamburger menus with full-screen overlays
  - Tab bars for section switching
  - Simplified headers without footer tabs

---

## Component Integration

Micro Navigation uses the following Ripple components:

### Required Components
- **Navbar:** Product branding and global actions
- **RippleDrawer:** Hierarchical navigation menu container
- **DrawerSection:** Organizes navigation items into labeled groups
- **DrawerMenuItem:** Individual navigation items within sections
- **Footer:** Tab bar for workspace management
- **PageHeader:** Context and page-level actions
- **Grid:** Content organization in body

### Supporting Components
- **IconButton:** Used in navbar, footer, and drawer headers (variant="ghost" color="neutral" for close buttons)
- **FlyoutMenu:** Contextual actions in tabs and groups
- **Breadcrumbs:** Location context in page header
- **Button:** Primary actions in page header (use proper variants: fill, outline, ghost)

---

## Spacing

All spacing uses Ripple spacing tokens:
- **Component gaps:** `var(--spacing-100)` to `var(--spacing-150)`
- **Content padding:** `var(--spacing-150)` to `var(--spacing-200)`
- **Section spacing:** `var(--spacing-200)` to `var(--spacing-250)`
- **Drawer section spacing:** Managed by `DrawerSection` component
- **Drawer item spacing:** Managed by `DrawerMenuItem` component

---

## Colors

All colors use Ripple color tokens:
- **Background:** `var(--bg-app)`, `var(--bg-surface)`, `var(--bg-nav)`
- **Borders:** `var(--border-neutral)`, `var(--border-primary)`
- **Text:** `var(--text)`, `var(--text-loud)`, `var(--text-soft)`
- **Active states:** `var(--color-primary)`, `var(--border-primary)`
- **Navigation background:** `var(--bg-nav)` (used for navbar, drawer, and footer)

---

## Typography

All text uses Ripple typography tokens:
- **Font family:** `var(--font-family)`
- **Font sizes:** `var(--font-size-80)` to `var(--font-size-140)`
- **Font weights:** `var(--font-weight-normal)`, `var(--font-weight-semibold)`

---

## Implementation Example

```tsx
import { useState } from 'react'
import { MicroNavigation } from '@ripple/ui'
import type { FooterTab } from '@ripple/ui'
import {
  DrawerHeader,
  DrawerContent,
  DrawerSection,
  DrawerMenuItem,
} from '@ripple/ui'
import { PageHeader } from '@ripple/ui'
import { Unit4Logo } from '@ripple/ui'
import { BarChart2, DollarSign, FileText, LayoutDashboard, Search, Users } from 'lucide-react'

const USER_MENU = [
  { id: 'profile', label: 'My profile',    icon: <User size={14} /> },
  { id: 'signout', label: 'Sign out',      icon: <LogOut size={14} />, separator: true },
]

function SearchDrawerContent() {
  const [query, setQuery] = useState('')
  return (
    <>
      <DrawerHeader title="Search" />
      <DrawerContent>
        <DrawerSection title="Recent">
          <DrawerMenuItem label="Payroll Navigator" icon={<DollarSign size={14} />} onClick={() => {}} />
          <DrawerMenuItem label="Q1 Budget Report"  icon={<BarChart2 size={14} />}  onClick={() => {}} />
        </DrawerSection>
      </DrawerContent>
    </>
  )
}

function App() {
  const [activeTabId, setActiveTabId] = useState('dashboard')
  const [tabs, setTabs] = useState<FooterTab[]>([
    { id: 'dashboard', label: 'Dashboard',     icon: <LayoutDashboard size={14} /> },
    { id: 'invoices',  label: 'Invoices',      icon: <FileText size={14} /> },
  ])

  function handleTabClose(tabId: string) {
    setTabs(prev => {
      const next = prev.filter(t => t.id !== tabId)
      if (activeTabId === tabId && next.length > 0) {
        setActiveTabId(next[next.length - 1].id)
      }
      return next
    })
  }

  return (
    <MicroNavigation
      nav={{
        logo:            <Unit4Logo />,
        productName:     'ERPx',
        globalNavItems: [
          { id: 'search', icon: <Search size={20} />, label: 'Search', drawerId: 'search' },
        ],
        contextualNavItems: [
          { id: 'finance', icon: <DollarSign size={20} />, label: 'Finance', selected: true },
          { id: 'people',  icon: <Users size={20} />,      label: 'People' },
          { id: 'reports', icon: <BarChart2 size={20} />,  label: 'Reports' },
        ],
        showContextualDivider: true,
        userName:        'Alex Johnson',
        userRole:        'Finance Manager',
        userProductArea: 'Finance',
        userMenuItems:   USER_MENU,
        drawers: [
          { id: 'search', size: 'small', content: <SearchDrawerContent /> },
        ],
      }}
      footer={{
        tabs,
        activeTabId,
        onTabActivate:    setActiveTabId,
        onTabClose:       handleTabClose,
        onCloseAllTabs:   () => setTabs([]),
        onCloseOtherTabs: id => setTabs(prev => prev.filter(t => t.id === id)),
        onTabLock:   id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' }   : t)),
        onTabUnlock: id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
        onTabPin:    id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'pinned' }   : t)),
        onTabUnpin:  id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
      }}
    >
      <PageHeader
        title="Dashboard"
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Finance', href: '#' },
          { label: 'Dashboard' },
        ]}
        mainActions={[
          { id: 'create', label: 'Create new', type: 'primary', onClick: () => {} },
        ]}
      />
      {/* Page body content */}
    </MicroNavigation>
  )
}
```

---

## Quick Access Drawer

The Quick Access drawer is a specialized drawer component that provides users with shortcuts to frequently used features and actions:

### Structure
- **Header:** Contains title and close button (`IconButton variant="ghost" color="neutral"`)
- **Sections:** Organized using `DrawerSection` components
- **Menu Items:** Built with `DrawerMenuItem` components for consistency

### Usage
```tsx
// Passed as the `content` of a DrawerConfig in the `nav.drawers` array:
{
  id: 'quick-access',
  size: 'small',
  content: (
    <>
      <DrawerHeader title="Quick Access" />
      <DrawerContent>
        <DrawerSection title="Frequently Used">
          <DrawerMenuItem icon={<FileText size={14} />} label="Create Invoice" onClick={() => {}} />
          <DrawerMenuItem icon={<Users size={14} />}    label="Add Customer"   onClick={() => {}} />
          <DrawerMenuItem icon={<Package size={14} />}  label="New Order"      onClick={() => {}} />
        </DrawerSection>
        <DrawerSection title="Recent">
          <DrawerMenuItem icon={<Clock size={14} />} label="Invoice #1234"        onClick={() => {}} />
          <DrawerMenuItem icon={<Clock size={14} />} label="Customer: Acme Corp"  onClick={() => {}} />
        </DrawerSection>
      </DrawerContent>
    </>
  ),
}
```

---

## Related Patterns

- **Main Navigation:** The combination of Navbar and Drawer
- **Footer:** Tab bar for workspace management
- **Page Header:** Context and actions for current page
- **Grid:** Content organization system

---

## Maintenance and Updates

When updating the Micro Navigation template:
- Maintain backward compatibility with existing implementations
- Test across all supported device sizes
- Verify keyboard navigation and screen reader support
- Update related component documentation
- Communicate changes to design system users
- Ensure all drawer implementations use `DrawerSection` and `DrawerMenuItem`
- Verify all close buttons use `IconButton variant="ghost" color="neutral"`
- Test theme adaptation with `var(--bg-nav)` background
