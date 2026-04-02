import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart2,
  Bell,
  BookOpen,
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
import { Input } from '../../components/Input'
import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { Chip, ChipGroup } from '../../components/Chip'
import { Unit4Logo } from '../../assets/Unit4Logo'
import { Footer } from '../Footer'
import type { FooterTab } from '../Footer'

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
// Page content placeholder — sticky header + scrollable body
// Demonstrates how a Page Header stays pinned while content scrolls,
// with the Footer anchored at the bottom of the shell.
// ---------------------------------------------------------------------------

function PageContent({ title }: { title: string }) {
  return (
    <>
      {/* Page Header — sticky within the scroll container */}
      <div style={{
        position:     'sticky',
        top:          0,
        zIndex:       10,
        padding:      '16px 32px',
        background:   'var(--bg-canvas)',
        borderBottom: '1px solid var(--border-neutral)',
        fontFamily:   'var(--font-family-base)',
      }}>
        <h1 style={{
          margin:     0,
          fontSize:   'var(--font-size-160)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--text-loud)',
        }}>
          {title}
        </h1>
      </div>

      {/* Scrollable body */}
      <div style={{ padding: '32px', fontFamily: 'var(--font-family-base)' }}>
        {Array.from({ length: 20 }, (_, i) => (
          <p
            key={i}
            style={{
              margin:    '0 0 16px',
              fontSize:  'var(--font-size-80)',
              color:     'var(--text-soft)',
              padding:   '12px 16px',
              background: i % 2 === 0 ? 'var(--bg-surface)' : 'transparent',
              borderRadius: 'var(--border-radius-100)',
            }}
          >
            Row {i + 1} — application content for {title}.
          </p>
        ))}
      </div>
    </>
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
        <Input
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
  const [activeFilter, setActiveFilter] = useState('All')
  const [items, setItems] = useState([
    { id: '1', title: 'Leave request approved',  message: 'Your 3-day leave request for 15–17 April has been approved by Alex Chen.', timestamp: '5m ago',    unread: true  },
    { id: '2', title: 'Performance review due',  message: 'Your Q1 self-assessment is due in 2 days. Complete it to avoid delays.',    timestamp: '1h ago',    unread: true  },
    { id: '3', title: 'New team member',          message: 'Marcus Holt joined the Design team. Say hello!',                            timestamp: 'Yesterday', unread: false },
    { id: '4', title: 'Payslip available',        message: 'Your March 2026 payslip is now available for download.',                    timestamp: '3 days ago', unread: false },
  ])

  const filters = ['All', 'Unread', 'HR', 'Finance']

  return (
    <>
      <DrawerHeader
        title="Notifications"
        actions={<Button size="small" variant="ghost" color="neutral">Mark all read</Button>}
      />
      <DrawerTools>
        <ChipGroup aria-label="Filter notifications">
          {filters.map(label => (
            <Chip
              key={label}
              variant="selectable"
              label={label}
              size="small"
              selected={activeFilter === label}
              onChange={() => setActiveFilter(label)}
            />
          ))}
        </ChipGroup>
      </DrawerTools>
      <DrawerContent>
        <DrawerSection>
          {items.map((n, i) => (
            <DrawerNotificationItem
              key={n.id}
              title={n.title}
              message={n.message}
              timestamp={n.timestamp}
              unread={n.unread}
              last={i === items.length - 1}
              avatar={<Avatar name={n.title} size="s" />}
              action={n.unread ? (
                <Button size="xsmall" variant="outline" color="neutral">View</Button>
              ) : undefined}
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
// Pattern 1: Overlay
// Contextual nav items + overlay drawers for search and notifications.
// Drawers appear over the content area without pushing it.
// The Footer is anchored to the bottom of the content area (not the viewport).
// ---------------------------------------------------------------------------

const INITIAL_TABS: FooterTab[] = [
  { id: 'home',     label: 'Home' },
  { id: 'payroll',  label: 'Payroll Navigator' },
  { id: 'q1',       label: 'Q1 Reports' },
  { id: 'people',   label: 'People' },
]

export const Overlay: Story = {
  name: 'Overlay',
  render: () => {
    const [page, setPage]           = useState('dashboard')
    const [tabs, setTabs]           = useState<FooterTab[]>(INITIAL_TABS)
    const [activeTabId, setActiveTabId] = useState('payroll')

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
            content: <SearchDrawerContent />,
          },
          {
            id:      'notifications',
            size:    'small',
            content: <NotificationsDrawerContent />,
          },
        ]}
        footer={
          <Footer
            tabs={tabs}
            activeTabId={activeTabId}
            onTabActivate={setActiveTabId}
            onTabClose={handleTabClose}
            onCloseAllTabs={() => setTabs([])}
            onCloseOtherTabs={(id) => setTabs(prev => prev.filter(t => t.id === id))}
            onTabLock={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' } : t))}
            onTabUnlock={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t))}
            onTabPin={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'pinned' } : t))}
            onTabUnpin={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t))}
          />
        }
      >
        <PageContent title={page.charAt(0).toUpperCase() + page.slice(1)} />
      </MainNavigation>
    )
  },
}

// ---------------------------------------------------------------------------
// Pattern 2: Persistent
// A toggleable in-flow nav panel for a module with a deep hierarchy.
// The panel pushes the content area rather than covering it.
// ---------------------------------------------------------------------------

export const Persistent: Story = {
  name: 'Persistent',
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

