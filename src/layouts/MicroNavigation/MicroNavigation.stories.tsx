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
// Note: DollarSign, Users, BarChart2, Settings are imported for the commented
// contextualNavItems example — keep them so the example compiles when uncommented.
import { MicroNavigation } from './MicroNavigation'
import type { MicroNavigationProps } from './MicroNavigation'
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
// Page content
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
          Content area for <strong style={{ color: 'var(--text)' }}>{title}</strong>.{' '}
          The Main Navigation is fixed to the left and the Footer tab bar is anchored to the bottom.
        </p>
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Search drawer
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
            <DrawerMenuItem label="Payroll Navigator"  icon={<DollarSign size={14} />} onClick={() => {}} />
            <DrawerMenuItem label="Q1 Budget Report"   icon={<BarChart2 size={14} />}  onClick={() => {}} />
            <DrawerMenuItem label="New Hire Checklist" icon={<Users size={14} />}      onClick={() => {}} />
          </DrawerSection>
        )}
      </DrawerContent>
    </>
  )
}

// ---------------------------------------------------------------------------
// Page meta — tab ID → title + breadcrumb
// ---------------------------------------------------------------------------

const PAGE_META: Record<string, { title: string; breadcrumb: string[] }> = {
  'dashboard': { title: 'Dashboard',     breadcrumb: ['Finance', 'Dashboard'] },
  'ledger':    { title: 'General Ledger', breadcrumb: ['Finance', 'General Ledger'] },
  'invoices':  { title: 'Invoices',      breadcrumb: ['Finance', 'Payables', 'Invoices'] },
}

function getPageMeta(tabId: string) {
  return PAGE_META[tabId] ?? { title: tabId, breadcrumb: [tabId] }
}

// ---------------------------------------------------------------------------
// Default story — Overlay navigation with tab bar
// Overlay drawers open over the content area without pushing it.
// The Footer is anchored to the bottom of the content area.
// ---------------------------------------------------------------------------

const DEFAULT_TABS: FooterTab[] = [
  { id: 'dashboard', label: 'Dashboard',     icon: <LayoutDashboard size={14} /> },
  { id: 'ledger',    label: 'General Ledger', icon: <FileText size={14} /> },
  { id: 'invoices',  label: 'Invoices',       icon: <FileText size={14} /> },
]

export const Default: Story = {
  name: 'Overlay',
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
          logo:            <Unit4Logo />,
          productName:     'ERPx',
          globalNavItems: [
            { id: 'search', icon: <Search size={20} />, label: 'Search', drawerId: 'search' },
          ],
          // contextualNavItems: not shown by default in the ERPx template.
          // Consuming applications add module-specific items here.
          // Example:
          //   contextualNavItems: [
          //     { id: 'finance',  icon: <DollarSign size={20} />, label: 'Finance', selected: true },
          //     { id: 'people',   icon: <Users size={20} />,      label: 'People' },
          //   ],
          //   showContextualDivider: true,
          userName:        'Vasco Antunes',
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
