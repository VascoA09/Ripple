import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BarChart2, FileText, Settings, Users } from 'lucide-react'
import { Footer } from './Footer'
import type { FooterProps, FooterTab, FooterGroup } from './Footer'

// ---------------------------------------------------------------------------

const meta: Meta<FooterProps> = {
  title: 'Patterns/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<FooterProps>

// ---------------------------------------------------------------------------
// Shared page shell — wraps stories that need a realistic context
// ---------------------------------------------------------------------------

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-canvas)', paddingBottom: '56px' }}>
      {/* Fake content area */}
      <div style={{
        padding: '32px',
        fontFamily: 'var(--font-family-base)',
        fontSize: 'var(--font-size-80)',
        color: 'var(--text-soft)',
      }}>
        <p>Application content area. The Footer is fixed at the bottom.</p>
      </div>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Default — standard tabs, interactive
// ---------------------------------------------------------------------------

const DEFAULT_TABS: FooterTab[] = [
  { id: 'home',     label: 'Home' },
  { id: 'payroll',  label: 'Payroll Navigator',     icon: <BarChart2 size={14} /> },
  { id: 'reports',  label: 'Q1 Reports',             icon: <FileText size={14} /> },
  { id: 'people',   label: 'People',                 icon: <Users size={14} /> },
  { id: 'settings', label: 'System Settings',        icon: <Settings size={14} /> },
]

export const Default: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState('payroll')
    const [tabs, setTabs] = useState<FooterTab[]>(DEFAULT_TABS)

    function handleClose(tabId: string) {
      setTabs(prev => {
        const next = prev.filter(t => t.id !== tabId)
        if (activeTabId === tabId && next.length > 0) {
          setActiveTabId(next[next.length - 1].id)
        }
        return next
      })
    }

    return (
      <AppShell>
        <Footer
          tabs={tabs}
          activeTabId={activeTabId}
          onTabActivate={setActiveTabId}
          onTabClose={handleClose}
          onCloseAllTabs={() => setTabs([])}
          onCloseOtherTabs={(id) => setTabs(prev => prev.filter(t => t.id === id))}
          onTabLock={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' } : t))}
          onTabUnlock={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t))}
          onTabPin={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'pinned' } : t))}
          onTabUnpin={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t))}
        />
      </AppShell>
    )
  },
}

// ---------------------------------------------------------------------------
// Tab Types — standard, locked, and pinned side by side
// ---------------------------------------------------------------------------

const TAB_TYPE_TABS: FooterTab[] = [
  { id: 'standard', label: 'Standard tab', type: 'standard' },
  { id: 'locked',   label: 'Locked tab',   type: 'locked' },
  { id: 'pinned',   label: 'Pinned tab',   type: 'pinned' },
]

export const TabTypes: Story = {
  name: 'Tab Types',
  render: () => {
    const [activeTabId, setActiveTabId] = useState('standard')

    return (
      <AppShell>
        <Footer
          tabs={TAB_TYPE_TABS}
          activeTabId={activeTabId}
          onTabActivate={setActiveTabId}
          onTabClose={(id) => console.log('close', id)}
          onTabUnlock={(id) => console.log('unlock', id)}
          onTabUnpin={(id) => console.log('unpin', id)}
        />
      </AppShell>
    )
  },
}

// ---------------------------------------------------------------------------
// With Groups — tabs inside collapsible colored groups
// ---------------------------------------------------------------------------

const GROUPED_TABS: FooterTab[] = [
  { id: 'dashboard',     label: 'Dashboard' },
  { id: 'revenue-1',     label: 'Revenue Ledger',    groupId: 'finance', icon: <BarChart2 size={14} /> },
  { id: 'revenue-2',     label: 'Expense Report',    groupId: 'finance', icon: <BarChart2 size={14} /> },
  { id: 'hr-onboarding', label: 'New Hire Checklist', groupId: 'hr' },
  { id: 'hr-payroll',    label: 'Payroll Review',     groupId: 'hr' },
  { id: 'compliance',    label: 'Compliance Docs',    type: 'locked' },
]

const GROUPS: FooterGroup[] = [
  { id: 'finance', label: 'Finance', color: 'blue' },
  { id: 'hr',      label: 'HR',      color: 'green' },
]

export const WithGroups: Story = {
  name: 'With Groups',
  render: () => {
    const [activeTabId, setActiveTabId] = useState('dashboard')
    const [tabs, setTabs] = useState<FooterTab[]>(GROUPED_TABS)
    const [groups, setGroups] = useState<FooterGroup[]>(GROUPS)

    function handleClose(tabId: string) {
      setTabs(prev => {
        const next = prev.filter(t => t.id !== tabId)
        if (activeTabId === tabId && next.length > 0) setActiveTabId(next[0].id)
        return next
      })
    }

    function handleGroupUngroup(groupId: string) {
      setTabs(prev => prev.map(t => t.groupId === groupId ? { ...t, groupId: undefined } : t))
      setGroups(prev => prev.filter(g => g.id !== groupId))
    }

    function handleGroupClose(groupId: string) {
      const removed = tabs.filter(t => t.groupId === groupId).map(t => t.id)
      setTabs(prev => prev.filter(t => t.groupId !== groupId))
      setGroups(prev => prev.filter(g => g.id !== groupId))
      if (removed.includes(activeTabId)) setActiveTabId('dashboard')
    }

    return (
      <AppShell>
        <Footer
          tabs={tabs}
          groups={groups}
          activeTabId={activeTabId}
          onTabActivate={setActiveTabId}
          onTabClose={handleClose}
          onCloseAllTabs={() => { setTabs([]); setGroups([]) }}
          onCloseOtherTabs={(id) => setTabs(prev => prev.filter(t => t.id === id))}
          onTabLock={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'locked' } : t))}
          onTabUnlock={(id) => setTabs(prev => prev.map(t => t.id === id ? { ...t, type: 'standard' } : t))}
          onGroupUngroup={handleGroupUngroup}
          onGroupClose={handleGroupClose}
          onGroupEdit={(id) => console.log('edit group', id)}
        />
      </AppShell>
    )
  },
}

// ---------------------------------------------------------------------------
// Overflow Scroll — enough tabs to trigger scroll buttons
// ---------------------------------------------------------------------------

export const OverflowScroll: Story = {
  name: 'Overflow Scroll',
  render: () => {
    const manyTabs: FooterTab[] = Array.from({ length: 14 }, (_, i) => ({
      id: `tab-${i}`,
      label: `Page ${i + 1} — ${['Dashboard', 'Report', 'Invoice', 'Employee', 'Project'][i % 5]}`,
    }))

    const [activeTabId, setActiveTabId] = useState('tab-0')
    const [tabs, setTabs] = useState<FooterTab[]>(manyTabs)

    return (
      <AppShell>
        <Footer
          tabs={tabs}
          activeTabId={activeTabId}
          onTabActivate={setActiveTabId}
          onTabClose={(id) => setTabs(prev => prev.filter(t => t.id !== id))}
          onCloseAllTabs={() => setTabs([])}
          onCloseOtherTabs={(id) => setTabs(prev => prev.filter(t => t.id === id))}
        />
      </AppShell>
    )
  },
}

// ---------------------------------------------------------------------------
// All Group Colors
// ---------------------------------------------------------------------------

const ALL_COLOR_TABS: FooterTab[] = [
  { id: 'gray-1',    label: 'Tab A', groupId: 'gray' },
  { id: 'blue-1',    label: 'Tab B', groupId: 'blue' },
  { id: 'green-1',   label: 'Tab C', groupId: 'green' },
  { id: 'emerald-1', label: 'Tab D', groupId: 'emerald' },
  { id: 'aqua-1',    label: 'Tab E', groupId: 'aqua' },
  { id: 'purple-1',  label: 'Tab F', groupId: 'purple' },
  { id: 'violet-1',  label: 'Tab G', groupId: 'violet' },
  { id: 'pink-1',    label: 'Tab H', groupId: 'pink' },
  { id: 'red-1',     label: 'Tab I', groupId: 'red' },
  { id: 'orange-1',  label: 'Tab J', groupId: 'orange' },
  { id: 'ochre-1',   label: 'Tab K', groupId: 'ochre' },
]

const ALL_COLOR_GROUPS: FooterGroup[] = [
  { id: 'gray',    label: 'Gray',    color: 'gray' },
  { id: 'blue',    label: 'Blue',    color: 'blue' },
  { id: 'green',   label: 'Green',   color: 'green' },
  { id: 'emerald', label: 'Emerald', color: 'emerald' },
  { id: 'aqua',    label: 'Aqua',    color: 'aqua' },
  { id: 'purple',  label: 'Purple',  color: 'purple' },
  { id: 'violet',  label: 'Violet',  color: 'violet' },
  { id: 'pink',    label: 'Pink',    color: 'pink' },
  { id: 'red',     label: 'Red',     color: 'red' },
  { id: 'orange',  label: 'Orange',  color: 'orange' },
  { id: 'ochre',   label: 'Ochre',   color: 'ochre' },
]

export const AllGroupColors: Story = {
  name: 'All Group Colors',
  render: () => {
    const [activeTabId, setActiveTabId] = useState('gray-1')

    return (
      <AppShell>
        <Footer
          tabs={ALL_COLOR_TABS}
          groups={ALL_COLOR_GROUPS}
          activeTabId={activeTabId}
          onTabActivate={setActiveTabId}
        />
      </AppShell>
    )
  },
}

// ---------------------------------------------------------------------------
// Empty
// ---------------------------------------------------------------------------

export const Empty: Story = {
  render: () => (
    <AppShell>
      <Footer
        tabs={[]}
        activeTabId=""
        onTabActivate={() => {}}
        onCloseAllTabs={() => {}}
      />
    </AppShell>
  ),
}
