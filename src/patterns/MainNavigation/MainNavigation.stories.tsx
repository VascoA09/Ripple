import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart2,
  Bell,
  BookOpen,
  CheckCheck,
  Clock,
  DollarSign,
  FileText,
  Grid,
  HelpCircle,
  Info,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  ShoppingCart,
  User,
  Users,
} from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import type { MainNavigationProps } from './MainNavigation'
import {
  DrawerHeader,
  DrawerTools,
  DrawerContent,
  DrawerSection,
  DrawerMenuItem,
  DrawerMultiLevelItem,
  DrawerNotificationItem,
} from '../../components/Drawer'
import { TextInput } from '../../components/TextInput'
import { Avatar } from '../../components/Avatar'
import { Unit4Logo } from '../../assets/Unit4Logo'

// ---------------------------------------------------------------------------

const meta: Meta<MainNavigationProps> = {
  title: 'Patterns/MainNavigation',
  component: MainNavigation,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<MainNavigationProps>

// ---------------------------------------------------------------------------
// Shared user menu (used across all stories)
// ---------------------------------------------------------------------------

const USER_MENU = [
  { id: 'about',   label: 'About',        icon: <Info size={14} /> },
  { id: 'help',    label: 'Help',         icon: <HelpCircle size={14} /> },
  { id: 'profile', label: 'Your profile', icon: <User size={14} /> },
  { id: 'logout',  label: 'Log out',      icon: <LogOut size={14} />, separator: true },
]

// ---------------------------------------------------------------------------
// Page content placeholder — keeps stories readable
// ---------------------------------------------------------------------------

function PageContent({ title }: { title: string }) {
  return (
    <div style={{
      padding: '32px',
      fontFamily: 'var(--font-family-base)',
    }}>
      <h1 style={{
        margin: '0 0 8px',
        fontSize: 'var(--font-size-160)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--text-loud)',
      }}>
        {title}
      </h1>
      <p style={{ margin: 0, fontSize: 'var(--font-size-80)', color: 'var(--text-soft)' }}>
        Application content area. The Main Navigation sits to the left.
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Drawer content factories
// ---------------------------------------------------------------------------

function SearchDrawerContent() {
  const [query, setQuery] = useState('')

  return (
    <>
      <DrawerHeader title="Search" />
      <DrawerTools>
        <TextInput
          label="Search"
          hideLabel
          placeholder="Search across modules…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          iconStart={<Search size={14} />}
          autoFocus
        />
      </DrawerTools>
      <DrawerContent>
        {!query && (
          <DrawerSection title="Recent">
            <DrawerMenuItem label="Payroll Navigator" icon={<Clock size={14} />} onClick={() => {}} />
            <DrawerMenuItem label="Q1 Budget Report"  icon={<Clock size={14} />} onClick={() => {}} />
            <DrawerMenuItem label="New Hire Checklist" icon={<Clock size={14} />} onClick={() => {}} />
          </DrawerSection>
        )}
        {query && (
          <DrawerSection title="Results">
            <DrawerMenuItem label={`"${query}" in Finance`}    icon={<DollarSign size={14} />} onClick={() => {}} />
            <DrawerMenuItem label={`"${query}" in HR`}         icon={<Users size={14} />}      onClick={() => {}} />
            <DrawerMenuItem label={`"${query}" in Procurement`} icon={<ShoppingCart size={14} />} onClick={() => {}} />
          </DrawerSection>
        )}
      </DrawerContent>
    </>
  )
}

function NotificationsDrawerContent() {
  const [items, setItems] = useState([
    { id: '1', title: 'Approval required',   message: 'Invoice #4821 requires your approval', time: '2m ago',  unread: true  },
    { id: '2', title: 'Document shared',      message: 'Anna shared "Q1 Finance Report" with you', time: '14m ago', unread: true  },
    { id: '3', title: 'Task completed',       message: 'Payroll run for March completed successfully', time: '1h ago',  unread: false },
    { id: '4', title: 'New comment',          message: 'John commented on Budget Review 2026', time: '3h ago',  unread: false },
  ])

  const unreadCount = items.filter(n => n.unread).length

  function markAllRead() {
    setItems(prev => prev.map(n => ({ ...n, unread: false })))
  }

  return (
    <>
      <DrawerHeader
        title="Notifications"
        actions={
          unreadCount > 0 ? (
            <button
              type="button"
              onClick={markAllRead}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 8px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: 'var(--font-size-70)',
                color: 'var(--text-action)',
              }}
            >
              <CheckCheck size={12} />
              Mark all read
            </button>
          ) : undefined
        }
      />
      <DrawerContent>
        <DrawerSection count={unreadCount > 0 ? unreadCount : undefined}>
          {items.map((n, i) => (
            <DrawerNotificationItem
              key={n.id}
              title={n.title}
              message={n.message}
              timestamp={n.time}
              unread={n.unread}
              avatar={<Avatar name={n.title} size="s" />}
              last={i === items.length - 1}
              onClick={() => setItems(prev => prev.map(item => item.id === n.id ? { ...item, unread: false } : item))}
            />
          ))}
        </DrawerSection>
      </DrawerContent>
    </>
  )
}

function NavigationDrawerContent({ activeItem, onNavigate }: { activeItem: string; onNavigate: (id: string) => void }) {
  return (
    <>
      <DrawerHeader title="Finance" description="Module navigation" />
      <DrawerContent>
        <DrawerSection>
          <DrawerMenuItem
            label="Dashboard"
            icon={<LayoutDashboard size={14} />}
            active={activeItem === 'dashboard'}
            onClick={() => onNavigate('dashboard')}
          />
          <DrawerMenuItem
            label="General Ledger"
            icon={<BookOpen size={14} />}
            active={activeItem === 'ledger'}
            onClick={() => onNavigate('ledger')}
          />
          <DrawerMultiLevelItem
            label="Reports"
            icon={<BarChart2 size={14} />}
            defaultExpanded={activeItem.startsWith('report')}
          >
            <DrawerMenuItem
              label="Monthly Summary"
              active={activeItem === 'report-monthly'}
              onClick={() => onNavigate('report-monthly')}
            />
            <DrawerMenuItem
              label="Quarterly Review"
              active={activeItem === 'report-quarterly'}
              onClick={() => onNavigate('report-quarterly')}
            />
            <DrawerMenuItem
              label="Annual Report"
              active={activeItem === 'report-annual'}
              onClick={() => onNavigate('report-annual')}
            />
          </DrawerMultiLevelItem>
        </DrawerSection>
        <DrawerSection title="Payables" divider>
          <DrawerMenuItem
            label="Purchase Orders"
            icon={<ShoppingCart size={14} />}
            active={activeItem === 'purchase-orders'}
            onClick={() => onNavigate('purchase-orders')}
          />
          <DrawerMenuItem
            label="Invoices"
            icon={<FileText size={14} />}
            active={activeItem === 'invoices'}
            onClick={() => onNavigate('invoices')}
          />
        </DrawerSection>
      </DrawerContent>
    </>
  )
}

// ---------------------------------------------------------------------------
// Pattern 1: Utilities Bar
// Overlay drawers for search and notifications. No persistent panel.
// ---------------------------------------------------------------------------

export const UtilitiesBar: Story = {
  name: 'Utilities Bar',
  render: () => {
    const [page, setPage] = useState('home')

    return (
      <MainNavigation
        logo={<Unit4Logo />}
        productName="ERPx"
        globalNavItems={[
          { id: 'search',        icon: <Search size={20} />,   label: 'Search',        drawerId: 'search' },
          { id: 'notifications', icon: <Bell size={20} />,     label: 'Notifications', drawerId: 'notifications', count: 2 },
        ]}
        contextualNavItems={[
          { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard',  selected: page === 'dashboard',  onClick: () => setPage('dashboard') },
          { id: 'people',    icon: <Users size={20} />,           label: 'People',     selected: page === 'people',     onClick: () => setPage('people') },
          { id: 'finance',   icon: <DollarSign size={20} />,      label: 'Finance',    selected: page === 'finance',    onClick: () => setPage('finance') },
          { id: 'reports',   icon: <BarChart2 size={20} />,       label: 'Reports',    selected: page === 'reports',    onClick: () => setPage('reports') },
          { id: 'settings',  icon: <Settings size={20} />,        label: 'Settings',   selected: page === 'settings',   onClick: () => setPage('settings') },
        ]}
        showContextualDivider
        userName="Vasco Antunes"
        userRole="Finance Manager"
        userProductArea="Finance"
        userMenuItems={USER_MENU}
        drawers={[
          {
            id:      'search',
            size:    'small',
            side:    'right',
            content: <SearchDrawerContent />,
          },
          {
            id:      'notifications',
            size:    'small',
            side:    'right',
            content: <NotificationsDrawerContent />,
          },
        ]}
      >
        <PageContent title={page.charAt(0).toUpperCase() + page.slice(1)} />
      </MainNavigation>
    )
  },
}

// ---------------------------------------------------------------------------
// Pattern 2: Persistent Navigation
// A toggleable in-flow nav panel for a module with a deep hierarchy.
// ---------------------------------------------------------------------------

export const PersistentNavigation: Story = {
  name: 'Persistent Navigation',
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard')

    return (
      <MainNavigation
        logo={<Unit4Logo />}
        productName="ERPx"
        globalNavItems={[
          { id: 'nav', icon: <Grid size={20} />, label: 'Finance navigation', drawerId: 'nav' },
        ]}
        userName="Vasco Antunes"
        userRole="Finance Manager"
        userProductArea="Finance"
        userMenuItems={USER_MENU}
        drawers={[
          {
            id:         'nav',
            size:       'small',
            persistent: true,
            content:    (
              <NavigationDrawerContent
                activeItem={activeItem}
                onNavigate={setActiveItem}
              />
            ),
          },
        ]}
      >
        <PageContent title={activeItem.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} />
      </MainNavigation>
    )
  },
}

// ---------------------------------------------------------------------------
// Pattern 3: Full Enterprise Shell
// Persistent nav panel + utility overlay drawers + tenant badge.
// ---------------------------------------------------------------------------

export const FullEnterpriseShell: Story = {
  name: 'Full Enterprise Shell',
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard')

    return (
      <MainNavigation
        logo={<Unit4Logo />}
        productName="ERPx"
        tenantLabel="Demo"
        tenantColor="notice"
        globalNavItems={[
          { id: 'nav',           icon: <Grid size={20} />,   label: 'Finance navigation', drawerId: 'nav' },
          { id: 'search',        icon: <Search size={20} />, label: 'Search',             drawerId: 'search' },
          { id: 'notifications', icon: <Bell size={20} />,   label: 'Notifications',      drawerId: 'notifications', count: 2 },
        ]}
        contextualNavItems={[
          { id: 'finance',      icon: <DollarSign size={20} />,   label: 'Finance',     selected: true },
          { id: 'procurement',  icon: <ShoppingCart size={20} />, label: 'Procurement'  },
          { id: 'hr',           icon: <Users size={20} />,        label: 'HR'           },
          { id: 'reports',      icon: <BarChart2 size={20} />,    label: 'Reports'      },
          { id: 'settings',     icon: <Settings size={20} />,     label: 'Settings'     },
        ]}
        showContextualDivider
        userName="Vasco Antunes"
        userRole="Finance Manager"
        userProductArea="Finance"
        userMenuItems={USER_MENU}
        drawers={[
          {
            id:         'nav',
            size:       'small',
            persistent: true,
            content:    (
              <NavigationDrawerContent
                activeItem={activeItem}
                onNavigate={setActiveItem}
              />
            ),
          },
          {
            id:      'search',
            size:    'small',
            side:    'right',
            content: <SearchDrawerContent />,
          },
          {
            id:      'notifications',
            size:    'small',
            side:    'right',
            content: <NotificationsDrawerContent />,
          },
        ]}
      >
        <PageContent title={activeItem.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} />
      </MainNavigation>
    )
  },
}
