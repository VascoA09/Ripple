import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  Activity,
  BarChart2,
  Bell,
  Briefcase,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  Home,
  LayoutGrid,
  LogOut,
  Package,
  Search,
  Server,
  Settings,
  User,
  Users,
} from '../../icons'
import {
  DrawerHeader,
  DrawerContent,
  DrawerSection,
  DrawerMenuItem,
  DrawerNotificationItem,
} from '../../components/Drawer'
import { Navbar } from './Navbar'
import type { NavbarProps, NavItem, NavbarDrawer, UserMenuItem } from './Navbar'

// Spec: patterns/navbar.md (0.3.0). Repo Storybook files patterns under "Patterns";
// production Storybook keeps Navbar under "Components" (decision 2026-10-29).

const meta: Meta<NavbarProps> = {
  title: 'Patterns/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  decorators: [
    Story => (
      <div style={{ display: 'flex', height: '100vh', background: 'var(--background-app)' }}>
        <Story />
        <div style={{ flex: 1, padding: 'var(--spacing-200)', fontFamily: 'var(--font-family-base)' }}>
          <p style={{ color: 'var(--text-soft)', fontSize: 'var(--font-size-80)' }}>Page content area</p>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<NavbarProps>

// ---------------------------------------------------------------------------
// Fixtures (fictional data)
// ---------------------------------------------------------------------------

const userMenuItems: UserMenuItem[] = [
  { id: 'profile', label: 'Your profile', icon: <User size={16} /> },
  { id: 'help',    label: 'Help',         icon: <HelpCircle size={16} /> },
  { id: 'logout',  label: 'Log out',      icon: <LogOut size={16} />, separator: true },
]

const user = {
  userName:        'Sam Rivera',
  userRole:        'Finance Manager',
  userProductArea: 'Finance',
  userMenuItems,
}

function drawerContent(title: string, body: ReactNode) {
  return (
    <>
      <DrawerHeader title={title} />
      <DrawerContent>{body}</DrawerContent>
    </>
  )
}

const drawers: NavbarDrawer[] = [
  {
    id: 'search',
    size: 'small',
    content: drawerContent('Search', (
      <DrawerSection title="Recent">
        <DrawerMenuItem icon={<FileText size={16} />} label="Invoice 10482" />
        <DrawerMenuItem icon={<FileText size={16} />} label="Supplier ledger" />
      </DrawerSection>
    )),
  },
  {
    id: 'notifications',
    size: 'small',
    content: drawerContent('Notifications', (
      <>
        <DrawerNotificationItem title="Invoice on hold" message="Invoice 10482 is missing a PO number." timestamp="5m" unread />
        <DrawerNotificationItem title="Period closing" message="October closes on Friday." timestamp="1h" unread />
      </>
    )),
  },
]

/** Page items with `current` driven by local state, like a router would. */
function usePages(ids: { id: string; label: string; icon: ReactNode }[], initial: string) {
  const [page, setPage] = useState(initial)
  const items: NavItem[] = ids.map(p => ({ ...p, current: page === p.id, onClick: () => setPage(p.id) }))
  return items
}

const financePages = [
  { id: 'finance', label: 'Finance', icon: <DollarSign size={20} /> },
  { id: 'people',  label: 'People',  icon: <Users size={20} /> },
  { id: 'reports', label: 'Reports', icon: <BarChart2 size={20} /> },
]

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

/** Plain: no drawers, every button navigates. */
export const Plain: Story = {
  render: () => {
    const pages = usePages([
      { id: 'home',       label: 'Home',       icon: <Home size={20} /> },
      { id: 'projects',   label: 'Projects',   icon: <Briefcase size={20} /> },
      { id: 'timesheets', label: 'Timesheets', icon: <Clock size={20} /> },
    ], 'home')
    return <Navbar productName="Coda" productFullName="Unit4 Coda" globalNavItems={pages} {...user} />
  },
}

/** Overlay drawers: one at a time; the current page keeps its edge indicator. */
export const WithOverlayDrawers: Story = {
  name: 'With overlay drawers',
  render: () => {
    const pages = usePages(financePages, 'finance')
    return (
      <Navbar
        productName="ERPx"
        productFullName="Unit4 ERPx"
        globalNavItems={[
          { id: 'search',        label: 'Search',        icon: <Search size={20} />, drawerId: 'search' },
          { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />,   drawerId: 'notifications', count: 2 },
        ]}
        contextualNavItems={pages}
        drawers={drawers}
        {...user}
      />
    )
  },
}

/** Persistent drawer: in-flow panel that pushes content, no focus trap. Standard Navigation only. */
export const WithPersistentDrawer: Story = {
  name: 'With persistent drawer',
  render: () => (
    <Navbar
      productName="CM"
      productFullName="Unit4 Configuration Manager"
      globalNavItems={[
        { id: 'tree',   label: 'Navigation', icon: <LayoutGrid size={20} />, drawerId: 'tree' },
        { id: 'search', label: 'Search',     icon: <Search size={20} />,     drawerId: 'search' },
      ]}
      drawers={[
        {
          id: 'tree',
          size: 'small',
          persistent: true,
          content: drawerContent('Navigation', (
            <>
              <DrawerSection title="Environments">
                <DrawerMenuItem icon={<Server size={16} />} label="Production, EU" active />
                <DrawerMenuItem icon={<Server size={16} />} label="Test, EU" />
              </DrawerSection>
              <DrawerSection title="Packages">
                <DrawerMenuItem icon={<Package size={16} />} label="Package 3.4.1" />
              </DrawerSection>
            </>
          )),
        },
        drawers[0],
      ]}
      {...user}
    />
  ),
}

// ---------------------------------------------------------------------------
// States and content
// ---------------------------------------------------------------------------

/** Drawer open and current page at the same time: two distinct states. */
export const DrawerOpenAndCurrentPage: Story = {
  name: 'State: drawer open + current page',
  render: () => (
    <Navbar
      productName="ERPx"
      globalNavItems={[
        { id: 'search',        label: 'Search',        icon: <Search size={20} />, drawerId: 'search' },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />,   drawerId: 'notifications', count: 2 },
      ]}
      contextualNavItems={[
        { id: 'finance', label: 'Finance', icon: <DollarSign size={20} />, current: true },
        { id: 'people',  label: 'People',  icon: <Users size={20} /> },
      ]}
      drawers={drawers}
      openDrawerId="notifications"
      {...user}
    />
  ),
}

/** Tenant badge, counters and a disabled item. */
export const TenantCountersDisabled: Story = {
  name: 'State: tenant, counters, disabled',
  args: {
    productName: 'ERPx',
    tenantLabel: 'UAT',
    globalNavItems: [
      { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, count: 4 },
      { id: 'inbox',         label: 'Inbox',         icon: <FileText size={20} />, count: 103 },
      { id: 'settings',      label: 'Settings',      icon: <Settings size={20} />, disabled: true },
    ],
    ...user,
  },
}

/** More than 5 contextual items: the 5th slot becomes the overflow menu. */
export const ContextualOverflow: Story = {
  name: 'Contextual overflow',
  render: () => {
    const pages = usePages([
      ...financePages,
      { id: 'projects', label: 'Projects',  icon: <Briefcase size={20} /> },
      { id: 'settings', label: 'Settings',  icon: <Settings size={20} /> },
      { id: 'audit',    label: 'Audit log', icon: <Activity size={20} /> },
    ], 'finance')
    return <Navbar productName="ERPx" globalNavItems={[{ id: 'home', label: 'Home', icon: <Home size={20} /> }]} contextualNavItems={pages} {...user} />
  },
}

/** Abbreviated name with an accessible full name, and a name that truncates. */
export const ProductNames: Story = {
  name: 'Content: product names',
  render: () => (
    <div style={{ display: 'flex' }}>
      <Navbar productName="CM" productFullName="Unit4 Configuration Manager" {...user} />
      <Navbar productName="Configuration Manager" productFullName="Unit4 Configuration Manager" {...user} />
    </div>
  ),
}

/** Development warning: more than 5 global items (check the console). */
export const GlobalOverflowWarning: Story = {
  name: 'Warning: more than 5 global items',
  args: {
    productName: 'ERPx',
    globalNavItems: [
      { id: 'a', label: 'Home',       icon: <Home size={20} /> },
      { id: 'b', label: 'Search',     icon: <Search size={20} /> },
      { id: 'c', label: 'Alerts',     icon: <Bell size={20} /> },
      { id: 'd', label: 'Projects',   icon: <Briefcase size={20} /> },
      { id: 'e', label: 'Timesheets', icon: <Clock size={20} /> },
      { id: 'f', label: 'Reports',    icon: <BarChart2 size={20} /> },
    ],
    ...user,
  },
}

/** Dark theme. */
export const DarkTheme: Story = {
  name: 'Dark theme',
  decorators: [
    Story => (
      <div data-theme="dark" style={{ display: 'flex', height: '100vh', background: 'var(--background-app)' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const pages = usePages(financePages, 'finance')
    return (
      <Navbar
        productName="ERPx"
        tenantLabel="UAT"
        globalNavItems={[
          { id: 'search',        label: 'Search',        icon: <Search size={20} />, drawerId: 'search' },
          { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />,   drawerId: 'notifications', count: 2 },
        ]}
        contextualNavItems={pages}
        drawers={drawers}
        {...user}
      />
    )
  },
}
