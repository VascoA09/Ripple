import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart2,
  DollarSign,
  FileText,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Plus,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import { ERPxMicroNavigation } from './ERPxMicroNavigation'
import type { ERPxMicroNavigationProps } from './ERPxMicroNavigation'
import type { FooterTab } from '../../patterns/Footer'
import {
  DrawerHeader,
  DrawerTools,
  DrawerContent,
  DrawerSection,
  DrawerMenuItem,
} from '../../components/Drawer'
import { PageHeader } from '../../components/PageHeader'
import { Input } from '../../components/Input'
import { Unit4Logo } from '../../assets/Unit4Logo'

// ---------------------------------------------------------------------------

const meta: Meta<ERPxMicroNavigationProps> = {
  title:      'Templates/ERPx MicroNavigation',
  component:  ERPxMicroNavigation,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<ERPxMicroNavigationProps>

// ---------------------------------------------------------------------------
// Shared fixtures
// ---------------------------------------------------------------------------

const USER_MENU = [
  { id: 'profile',  label: 'My profile',     icon: <Users size={14} /> },
  { id: 'settings', label: 'Settings',        icon: <Settings size={14} /> },
  { id: 'help',     label: 'Help & support',  icon: <HelpCircle size={14} /> },
  { id: 'signout',  label: 'Sign out',        icon: <LogOut size={14} />, separator: true },
]

// ---------------------------------------------------------------------------
// Page content helper
// ---------------------------------------------------------------------------

interface PageHeaderFixtureProps {
  title: string
  breadcrumb?: string[]
}

function PageHeaderFixture({ title, breadcrumb = ['Home'] }: PageHeaderFixtureProps) {
  return (
    <PageHeader
      title={title}
      showBreadcrumb
      breadcrumbItems={[
        ...breadcrumb.slice(0, -1).map(label => ({ label, href: '#' })),
        { label: breadcrumb[breadcrumb.length - 1] },
      ]}
      mainActions={[
        {
          id:      'primary',
          label:   'Create new',
          icon:    <Plus size={14} />,
          type:    'primary' as const,
          onClick: () => {},
        },
      ]}
    />
  )
}

function PageBody({ title }: { title: string }) {
  return (
    <p style={{
      margin:     0,
      fontFamily: 'var(--font-family-base)',
      fontSize:   'var(--font-size-80)',
      color:      'var(--text-soft)',
    }}>
      Page content for <strong style={{ color: 'var(--text)' }}>{title}</strong>.{' '}
      The four ERPx global nav actions — Search, Global Hub, Notifications, Client — are
      pre-configured by the template.
    </p>
  )
}

// ---------------------------------------------------------------------------
// Drawer content helpers
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
          placeholder="Search across ERPx…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          iconStart={<Search size={14} />}
          autoFocus
        />
      </DrawerTools>
      <DrawerContent>
        {!query && (
          <DrawerSection title="Recent">
            <DrawerMenuItem label="Payroll Navigator"    icon={<DollarSign size={14} />} onClick={() => {}} />
            <DrawerMenuItem label="Q1 Budget Report"     icon={<BarChart2 size={14} />}  onClick={() => {}} />
            <DrawerMenuItem label="New Hire Checklist"   icon={<Users size={14} />}      onClick={() => {}} />
          </DrawerSection>
        )}
      </DrawerContent>
    </>
  )
}

function HubDrawerContent() {
  return (
    <>
      <DrawerHeader title="Global Hub" />
      <DrawerContent>
        <DrawerSection title="Modules">
          <DrawerMenuItem label="Finance"    icon={<DollarSign size={14} />}  onClick={() => {}} />
          <DrawerMenuItem label="People"     icon={<Users size={14} />}       onClick={() => {}} />
          <DrawerMenuItem label="Projects"   icon={<FileText size={14} />}    onClick={() => {}} />
          <DrawerMenuItem label="Reports"    icon={<BarChart2 size={14} />}   onClick={() => {}} />
        </DrawerSection>
      </DrawerContent>
    </>
  )
}

function NotificationsDrawerContent() {
  return (
    <>
      <DrawerHeader title="Notifications" />
      <DrawerContent>
        <DrawerSection title="Unread">
          <DrawerMenuItem label="Approval required: Invoice #4521" icon={<FileText size={14} />}  onClick={() => {}} />
          <DrawerMenuItem label="Budget variance alert — Finance"  icon={<BarChart2 size={14} />} onClick={() => {}} />
          <DrawerMenuItem label="New hire onboarding due"          icon={<Users size={14} />}     onClick={() => {}} />
        </DrawerSection>
      </DrawerContent>
    </>
  )
}

// ---------------------------------------------------------------------------
// Page meta
// ---------------------------------------------------------------------------

const PAGE_META: Record<string, { title: string; breadcrumb: string[] }> = {
  dashboard: { title: 'Dashboard',      breadcrumb: ['Finance', 'Dashboard'] },
  ledger:    { title: 'General Ledger', breadcrumb: ['Finance', 'General Ledger'] },
  invoices:  { title: 'Invoices',       breadcrumb: ['Finance', 'Payables', 'Invoices'] },
}

function getPageMeta(tabId: string) {
  return PAGE_META[tabId] ?? { title: tabId, breadcrumb: [tabId] }
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

const DEFAULT_TABS: FooterTab[] = [
  { id: 'dashboard', label: 'Dashboard',     icon: <LayoutDashboard size={14} /> },
  { id: 'ledger',    label: 'General Ledger', icon: <FileText size={14} /> },
  { id: 'invoices',  label: 'Invoices',       icon: <FileText size={14} /> },
]

export const Default: Story = {
  name: 'ERPx MicroNavigation',
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
      <ERPxMicroNavigation
        nav={{
          // ── Identity ──────────────────────────────────────────────────────
          logo:            <Unit4Logo />,
          productName:     'ERPx',
          userName:        'Vasco Antunes',
          userRole:        'Finance Manager',
          userProductArea: 'Finance',
          userMenuItems:   USER_MENU,

          // ── ERPx global actions ───────────────────────────────────────────
          searchDrawerId:        'search',
          hubDrawerId:           'hub',
          notificationsDrawerId: 'notifications',
          notificationCount:     3,
          clientDrawerId:        undefined,
          clientName:            'Acme Corporation',

          // ── Contextual nav ────────────────────────────────────────────────
          contextualNavItems: [
            { id: 'finance',  icon: <DollarSign size={20} />, label: 'Finance',  selected: true },
            { id: 'people',   icon: <Users size={20} />,      label: 'People' },
            { id: 'reports',  icon: <BarChart2 size={20} />,  label: 'Reports' },
            { id: 'settings', icon: <Settings size={20} />,   label: 'Settings' },
          ],
          showContextualDivider: true,

          // ── Drawers ───────────────────────────────────────────────────────
          drawers: [
            { id: 'search',        size: 'small',  content: <SearchDrawerContent /> },
            { id: 'hub',           size: 'small',  content: <HubDrawerContent /> },
            { id: 'notifications', size: 'medium', content: <NotificationsDrawerContent /> },
          ],
        }}
        footer={{
          tabs,
          activeTabId,
          onTabActivate:    setActiveTabId,
          onTabClose:       handleClose,
          onCloseAllTabs:   () => setTabs([]),
          onCloseOtherTabs: id => setTabs(prev => prev.filter(t => t.id === id)),
          onTabLock:   id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' }   : t)),
          onTabUnlock: id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
          onTabPin:    id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'pinned' }   : t)),
          onTabUnpin:  id => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t)),
        }}
        header={<PageHeaderFixture title={page.title} breadcrumb={page.breadcrumb} />}
      >
        <PageBody title={page.title} />
      </ERPxMicroNavigation>
    )
  },
}
