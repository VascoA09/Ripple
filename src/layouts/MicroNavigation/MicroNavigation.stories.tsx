import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart2,
  Bell,
  BookOpen,
  DollarSign,
  FileText,
  Grid,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'
import { MicroNavigation } from './MicroNavigation'
import type { MicroNavigationProps } from './MicroNavigation'
import type { FooterTab, FooterGroup } from '../../patterns/Footer'
import {
  DrawerHeader,
  DrawerContent,
  DrawerSection,
  DrawerMenuItem,
  DrawerMultiLevelItem,
  DrawerTools,
} from '../../components/Drawer'
import { PageHeader } from '../../components/PageHeader'
import { TextInput } from '../../components/TextInput'

// ---------------------------------------------------------------------------

const meta: Meta<MicroNavigationProps> = {
  title: 'Layouts/MicroNavigation',
  component: MicroNavigation,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<MicroNavigationProps>

// ---------------------------------------------------------------------------
// Shared fixtures
// ---------------------------------------------------------------------------

const USER_MENU = [
  { id: 'profile',  label: 'My profile',     icon: <Users size={14} /> },
  { id: 'settings', label: 'Settings',       icon: <Settings size={14} /> },
  { id: 'help',     label: 'Help & support', icon: <HelpCircle size={14} /> },
  { id: 'signout',  label: 'Sign out',       icon: <LogOut size={14} />, separator: true },
]

// ---------------------------------------------------------------------------
// Page content — renders inside the <main> depending on active tab
// ---------------------------------------------------------------------------

interface PageContentProps {
  title: string
  breadcrumb?: string[]
}

function PageContent({ title, breadcrumb = ['Home'] }: PageContentProps) {
  return (
    <>
      <PageHeader
        title={title}
        showBreadcrumb
        breadcrumbItems={[
          ...breadcrumb.slice(0, -1).map(label => ({ label, href: '#' })),
          { label: breadcrumb[breadcrumb.length - 1] },
        ]}
        mainActions={[
          {
            id: 'primary',
            label: 'Create new',
            icon: <Plus size={14} />,
            type: 'primary' as const,
            onClick: () => {},
          },
        ]}
      />
      <div style={{
        padding: '24px',
        fontFamily: 'var(--font-family-base)',
        fontSize: 'var(--font-size-80)',
        color: 'var(--text-soft)',
      }}>
        <p style={{ margin: 0 }}>
          Content area for <strong style={{ color: 'var(--text)' }}>{title}</strong>.
          The Main Navigation is fixed to the left and the Footer tab bar is fixed at the bottom.
        </p>
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Shared search drawer content
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
            <DrawerMenuItem label="Payroll Navigator"   icon={<DollarSign size={14} />} onClick={() => {}} />
            <DrawerMenuItem label="Q1 Budget Report"    icon={<BarChart2 size={14} />}  onClick={() => {}} />
            <DrawerMenuItem label="New Hire Checklist"  icon={<Users size={14} />}      onClick={() => {}} />
          </DrawerSection>
        )}
      </DrawerContent>
    </>
  )
}

// ---------------------------------------------------------------------------
// Navigation drawer content (persistent panel)
// ---------------------------------------------------------------------------

function NavDrawerContent({
  activeItem,
  onNavigate,
}: {
  activeItem: string
  onNavigate: (id: string) => void
}) {
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
// PAGE META — tab ID → page title + breadcrumb
// ---------------------------------------------------------------------------

const PAGE_META: Record<string, { title: string; breadcrumb: string[] }> = {
  'dashboard':       { title: 'Dashboard',        breadcrumb: ['Finance', 'Dashboard'] },
  'ledger':          { title: 'General Ledger',   breadcrumb: ['Finance', 'General Ledger'] },
  'report-monthly':  { title: 'Monthly Summary',  breadcrumb: ['Finance', 'Reports', 'Monthly Summary'] },
  'report-quarterly':{ title: 'Quarterly Review', breadcrumb: ['Finance', 'Reports', 'Quarterly Review'] },
  'purchase-orders': { title: 'Purchase Orders',  breadcrumb: ['Finance', 'Payables', 'Purchase Orders'] },
  'invoices':        { title: 'Invoices',         breadcrumb: ['Finance', 'Payables', 'Invoices'] },
}

function getPageMeta(tabId: string) {
  return PAGE_META[tabId] ?? { title: tabId, breadcrumb: [tabId] }
}

// ---------------------------------------------------------------------------
// Story 1: Default — basic L-shell with tabs, no persistent panel
// ---------------------------------------------------------------------------

const DEFAULT_TABS: FooterTab[] = [
  { id: 'dashboard',      label: 'Dashboard',      icon: <LayoutDashboard size={14} /> },
  { id: 'ledger',         label: 'General Ledger',  icon: <BookOpen size={14} /> },
  { id: 'invoices',       label: 'Invoices',        icon: <FileText size={14} /> },
]

export const Default: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState('dashboard')
    const [tabs, setTabs]               = useState<FooterTab[]>(DEFAULT_TABS)

    function handleClose(tabId: string) {
      setTabs(prev => {
        const next = prev.filter(t => t.id !== tabId)
        if (activeTabId === tabId && next.length > 0) {
          setActiveTabId(next[next.length - 1].id)
        }
        return next
      })
    }

    const page = getPageMeta(activeTabId)

    return (
      <MicroNavigation
        nav={{
          productName: 'ERPx',
          globalNavItems: [
            { id: 'search', icon: <Search size={20} />, label: 'Search', drawerId: 'search' },
          ],
          contextualNavItems: [
            { id: 'finance',  icon: <DollarSign size={20} />, label: 'Finance',  selected: true  },
            { id: 'people',   icon: <Users size={20} />,      label: 'People'                    },
            { id: 'reports',  icon: <BarChart2 size={20} />,  label: 'Reports'                   },
            { id: 'settings', icon: <Settings size={20} />,   label: 'Settings'                  },
          ],
          showContextualDivider: true,
          userName: 'Vasco Antunes',
          userMenuItems: USER_MENU,
          drawers: [
            { id: 'search', size: 'small', side: 'right', content: <SearchDrawerContent /> },
          ],
        }}
        footer={{
          tabs,
          activeTabId,
          onTabActivate:   setActiveTabId,
          onTabClose:      handleClose,
          onCloseAllTabs:  () => setTabs([]),
          onCloseOtherTabs: id => setTabs(prev => prev.filter(t => t.id === id)),
          onTabLock:   id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' }   : t)),
          onTabUnlock: id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
          onTabPin:    id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'pinned' }   : t)),
          onTabUnpin:  id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
        }}
      >
        <PageContent title={page.title} breadcrumb={page.breadcrumb} />
      </MicroNavigation>
    )
  },
}

// ---------------------------------------------------------------------------
// Story 2: Persistent Navigation — nav panel + tab bar
// ---------------------------------------------------------------------------

const PERSISTENT_TABS: FooterTab[] = [
  { id: 'dashboard',      label: 'Dashboard',      icon: <LayoutDashboard size={14} /> },
  { id: 'report-monthly', label: 'Monthly Summary', icon: <BarChart2 size={14} /> },
  { id: 'invoices',       label: 'Invoices',        icon: <FileText size={14} />, type: 'locked' },
]

export const PersistentNavigation: Story = {
  name: 'Persistent Navigation',
  render: () => {
    const [activeTabId, setActiveTabId] = useState('dashboard')
    const [tabs, setTabs]               = useState<FooterTab[]>(PERSISTENT_TABS)
    const [navItem, setNavItem]         = useState('dashboard')

    // Keep the active nav item in sync with the active tab
    function activateTab(tabId: string) {
      setActiveTabId(tabId)
      if (PAGE_META[tabId]) setNavItem(tabId)
    }

    function handleClose(tabId: string) {
      setTabs(prev => {
        const next = prev.filter(t => t.id !== tabId)
        if (activeTabId === tabId && next.length > 0) {
          activateTab(next[next.length - 1].id)
        }
        return next
      })
    }

    const page = getPageMeta(activeTabId)

    return (
      <MicroNavigation
        nav={{
          productName: 'ERPx',
          globalNavItems: [
            { id: 'nav', icon: <Grid size={20} />, label: 'Finance navigation', drawerId: 'nav' },
          ],
          userName: 'Vasco Antunes',
          userMenuItems: USER_MENU,
          drawers: [
            {
              id:         'nav',
              size:       'small',
              persistent: true,
              content: (
                <NavDrawerContent
                  activeItem={navItem}
                  onNavigate={id => {
                    setNavItem(id)
                    // Open a new tab if not already open, otherwise switch to it
                    setTabs(prev => {
                      if (prev.find(t => t.id === id)) return prev
                      const meta = getPageMeta(id)
                      return [...prev, { id, label: meta.title }]
                    })
                    setActiveTabId(id)
                  }}
                />
              ),
            },
          ],
        }}
        footer={{
          tabs,
          activeTabId,
          onTabActivate:    activateTab,
          onTabClose:       handleClose,
          onCloseAllTabs:   () => setTabs([]),
          onCloseOtherTabs: id => setTabs(prev => prev.filter(t => t.id === id)),
          onTabLock:   id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' }   : t)),
          onTabUnlock: id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
          onTabPin:    id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'pinned' }   : t)),
          onTabUnpin:  id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
        }}
      >
        <PageContent title={page.title} breadcrumb={page.breadcrumb} />
      </MicroNavigation>
    )
  },
}

// ---------------------------------------------------------------------------
// Story 3: Full Enterprise Shell
// Persistent nav + search drawer + tab groups + tenant badge
// ---------------------------------------------------------------------------

const ENTERPRISE_TABS: FooterTab[] = [
  { id: 'dashboard',       label: 'Dashboard',       icon: <LayoutDashboard size={14} /> },
  { id: 'report-monthly',  label: 'Monthly Summary',  groupId: 'reports', icon: <BarChart2 size={14} /> },
  { id: 'report-quarterly',label: 'Quarterly Review', groupId: 'reports', icon: <BarChart2 size={14} /> },
  { id: 'invoices',        label: 'Invoices',         groupId: 'payables', type: 'locked' as const },
  { id: 'purchase-orders', label: 'Purchase Orders',  groupId: 'payables' },
]

const ENTERPRISE_GROUPS: FooterGroup[] = [
  { id: 'reports',  label: 'Reports',  color: 'blue' },
  { id: 'payables', label: 'Payables', color: 'ochre' },
]

export const FullEnterpriseShell: Story = {
  name: 'Full Enterprise Shell',
  render: () => {
    const [activeTabId, setActiveTabId] = useState('dashboard')
    const [tabs, setTabs]               = useState<FooterTab[]>(ENTERPRISE_TABS)
    const [groups, setGroups]           = useState<FooterGroup[]>(ENTERPRISE_GROUPS)
    const [navItem, setNavItem]         = useState('dashboard')

    function activateTab(tabId: string) {
      setActiveTabId(tabId)
      if (PAGE_META[tabId]) setNavItem(tabId)
    }

    function handleClose(tabId: string) {
      setTabs(prev => {
        const next = prev.filter(t => t.id !== tabId)
        if (activeTabId === tabId && next.length > 0) {
          activateTab(next[0].id)
        }
        return next
      })
    }

    function handleGroupClose(groupId: string) {
      const groupTabIds = tabs.filter(t => t.groupId === groupId).map(t => t.id)
      setTabs(prev => prev.filter(t => t.groupId !== groupId))
      setGroups(prev => prev.filter(g => g.id !== groupId))
      if (groupTabIds.includes(activeTabId)) {
        const remaining = tabs.filter(t => t.groupId !== groupId)
        if (remaining.length > 0) activateTab(remaining[0].id)
      }
    }

    const page = getPageMeta(activeTabId)

    return (
      <MicroNavigation
        nav={{
          productName: 'ERPx',
          tenantLabel: 'Demo',
          tenantColor: 'notice',
          globalNavItems: [
            { id: 'nav',    icon: <Grid size={20} />,   label: 'Finance navigation', drawerId: 'nav' },
            { id: 'search', icon: <Search size={20} />, label: 'Search',             drawerId: 'search' },
            { id: 'notif',  icon: <Bell size={20} />,   label: 'Notifications',      count: 3, countColor: 'negative' },
          ],
          contextualNavItems: [
            { id: 'finance',  icon: <DollarSign size={20} />,  label: 'Finance',  selected: true },
            { id: 'people',   icon: <Users size={20} />,        label: 'People'                  },
            { id: 'reports',  icon: <BarChart2 size={20} />,    label: 'Reports'                 },
            { id: 'settings', icon: <Settings size={20} />,     label: 'Settings'                },
          ],
          showContextualDivider: true,
          userName: 'Vasco Antunes',
          userMenuItems: USER_MENU,
          drawers: [
            {
              id:         'nav',
              size:       'small',
              persistent: true,
              content: (
                <NavDrawerContent
                  activeItem={navItem}
                  onNavigate={id => {
                    setNavItem(id)
                    setTabs(prev => {
                      if (prev.find(t => t.id === id)) return prev
                      const meta = getPageMeta(id)
                      return [...prev, { id, label: meta.title }]
                    })
                    setActiveTabId(id)
                  }}
                />
              ),
            },
            { id: 'search', size: 'small', side: 'right', content: <SearchDrawerContent /> },
          ],
        }}
        footer={{
          tabs,
          groups,
          activeTabId,
          onTabActivate:    activateTab,
          onTabClose:       handleClose,
          onCloseAllTabs:   () => { setTabs([]); setGroups([]) },
          onCloseOtherTabs: id => setTabs(prev => prev.filter(t => t.id === id)),
          onTabLock:   id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' }   : t)),
          onTabUnlock: id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
          onGroupClose: handleGroupClose,
          onGroupUngroup: groupId => {
            setTabs(prev => prev.map(t => t.groupId === groupId ? { ...t, groupId: undefined } : t))
            setGroups(prev => prev.filter(g => g.id !== groupId))
          },
          onGroupEdit: () => {},
        }}
      >
        <PageContent title={page.title} breadcrumb={page.breadcrumb} />
      </MicroNavigation>
    )
  },
}
