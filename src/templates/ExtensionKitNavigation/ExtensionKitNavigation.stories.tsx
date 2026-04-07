import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Activity,
  BarChart2,
  BookOpen,
  Filter,
  GitBranch,
  LayoutGrid,
  Mail,
  Search,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Table2,
  Users,
} from 'lucide-react'
import { IconButton } from '../../components/IconButton'
import { ExtensionKitNavigation } from './ExtensionKitNavigation'
import type { ExtensionKitNavigationProps } from './ExtensionKitNavigation'

// ---------------------------------------------------------------------------

const meta: Meta<ExtensionKitNavigationProps> = {
  title:      'Templates/ExtensionKitNavigation',
  component:  ExtensionKitNavigation,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<ExtensionKitNavigationProps>

// ---------------------------------------------------------------------------
// Nav items
// ---------------------------------------------------------------------------

const NAV_ITEMS = [
  { id: 'monitoring',       label: 'Monitoring',       icon: <Activity size={20} /> },
  { id: 'my-flows',         label: 'My Flows',         icon: <GitBranch size={20} /> },
  { id: 'my-apps',          label: 'My Apps',          icon: <LayoutGrid size={20} /> },
  { id: 'parameters',       label: 'Parameters',       icon: <SlidersHorizontal size={20} /> },
  { id: 'certificates',     label: 'Certificates',     icon: <ShieldCheck size={20} /> },
  { id: 'sftp-connections', label: 'SFTP Connections', icon: <Server size={20} /> },
  { id: 'mapping-tables',   label: 'Mapping Tables',   icon: <Table2 size={20} /> },
  { id: 'flows-catalogue',  label: 'Flows Catalogue',  icon: <BookOpen size={20} /> },
  { id: 'users',            label: 'Users',            icon: <Users size={20} /> },
  { id: 'invitations',      label: 'Invitations',      icon: <Mail size={20} /> },
  { id: 'metrics',          label: 'Metrics',          icon: <BarChart2 size={20} /> },
]

// ---------------------------------------------------------------------------
// Page content placeholder — sticky header + scrollable body
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
        background:   'var(--bg-app)',
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
              margin:       '0 0 16px',
              fontSize:     'var(--font-size-80)',
              color:        'var(--text-soft)',
              padding:      '12px 16px',
              background:   i % 2 === 0 ? 'var(--bg-surface)' : 'transparent',
              borderRadius: 'var(--border-radius-100)',
            }}
          >
            Row {i + 1} — content for {title}.
          </p>
        ))}
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Default
// Standard Extension Kit shell — sidebar expanded by default, no top bar actions.
// ---------------------------------------------------------------------------

export const Default: Story = {
  name: 'Default',
  render: () => {
    const [activeId, setActiveId] = useState('dashboard')

    const items = NAV_ITEMS.map(item => ({
      ...item,
      selected: item.id === activeId,
      onClick:  () => setActiveId(item.id),
    }))

    const activeLabel = NAV_ITEMS.find(i => i.id === activeId)?.label ?? ''

    return (
      <ExtensionKitNavigation
        userName="Vasco Antunes"
        tenantName="Acme Corporation"
        navItems={items}
        onLogout={() => {}}
        version="v1.2.0"
        copyright="© 2026 Unit4"
      >
        <PageContent title={activeLabel} />
      </ExtensionKitNavigation>
    )
  },
}

// ---------------------------------------------------------------------------
// With top bar actions
// Demonstrates the optional search and filter icon buttons in the top bar.
// ---------------------------------------------------------------------------

export const WithTopBarActions: Story = {
  name: 'With Top Bar Actions',
  render: () => {
    const [activeId, setActiveId] = useState('my-flows')

    const items = NAV_ITEMS.map(item => ({
      ...item,
      selected: item.id === activeId,
      onClick:  () => setActiveId(item.id),
    }))

    const activeLabel = NAV_ITEMS.find(i => i.id === activeId)?.label ?? ''

    return (
      <ExtensionKitNavigation
        userName="Vasco Antunes"
        tenantName="Acme Corporation"
        navItems={items}
        onLogout={() => {}}
        version="v1.2.0"
        copyright="© 2026 Unit4"
        topBarActions={
          <>
            <IconButton
              variant="ghost"
              color="neutral"
              size="small"
              icon={<Search size={16} />}
              aria-label="Search"
            />
            <IconButton
              variant="ghost"
              color="neutral"
              size="small"
              icon={<Filter size={16} />}
              aria-label="Filters"
            />
          </>
        }
      >
        <PageContent title={activeLabel} />
      </ExtensionKitNavigation>
    )
  },
}
