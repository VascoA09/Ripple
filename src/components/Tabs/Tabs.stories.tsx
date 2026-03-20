import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabList, Tab, TabPanel } from './Tabs'
import type { TabsProps } from './Tabs'
import { Counter } from '../Counter'
import { Panel, PanelHeader, PanelBody } from '../Panel'
import { Card, CardContent } from '../Card'
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Bell,
  CreditCard,
} from 'lucide-react'

// ---------------------------------------------------------------------------

const meta: Meta<TabsProps> = {
  title:      'Components/Tabs',
  component:  Tabs,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<TabsProps>

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function body(text: string) {
  return (
    <p style={{ margin: 0, fontSize: 'var(--font-size-100)', color: 'var(--text-soft)', lineHeight: 'var(--font-line-height-body)' }}>
      {text}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Default — loud variant, medium size
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [tab, setTab] = React.useState('overview')
    return (
      <div style={{ maxWidth: '720px' }}>
        <Tabs value={tab} onValueChange={setTab}>
          <TabList>
            <Tab value="overview">Overview</Tab>
            <Tab value="activity">Activity</Tab>
            <Tab value="settings">Settings</Tab>
          </TabList>
          <TabPanel value="overview">{body('Overview panel content.')}</TabPanel>
          <TabPanel value="activity">{body('Activity panel content.')}</TabPanel>
          <TabPanel value="settings">{body('Settings panel content.')}</TabPanel>
        </Tabs>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Variants — loud vs soft
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => {
    const [loudTab, setLoudTab] = React.useState('overview')
    const [softTab, setSoftTab] = React.useState('overview')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '720px' }}>
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 'var(--font-size-80)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>
            Loud (default) — use for page-level tabs
          </p>
          <Tabs value={loudTab} onValueChange={setLoudTab}>
            <TabList variant="loud">
              <Tab value="overview">Overview</Tab>
              <Tab value="activity">Activity</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <TabPanel value="overview">{body('Full-width divider spans all tabs. 2px primary border on selected.')}</TabPanel>
            <TabPanel value="activity">{body('Activity content.')}</TabPanel>
            <TabPanel value="settings">{body('Settings content.')}</TabPanel>
          </Tabs>
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontSize: 'var(--font-size-80)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>
            Soft — use inside containers (panels, cards)
          </p>
          <Tabs value={softTab} onValueChange={setSoftTab}>
            <TabList variant="soft">
              <Tab value="overview">Overview</Tab>
              <Tab value="activity">Activity</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <TabPanel value="overview">{body('No divider line. Only the 2px selected tab indicator.')}</TabPanel>
            <TabPanel value="activity">{body('Activity content.')}</TabPanel>
            <TabPanel value="settings">{body('Settings content.')}</TabPanel>
          </Tabs>
        </div>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => {
    const [medTab, setMedTab] = React.useState('overview')
    const [mobTab, setMobTab] = React.useState('overview')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '720px' }}>
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 'var(--font-size-80)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>
            Medium (40px) — default
          </p>
          <Tabs value={medTab} onValueChange={setMedTab} size="medium">
            <TabList>
              <Tab value="overview">Overview</Tab>
              <Tab value="activity">Activity</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <TabPanel value="overview">{body('Standard size for desktop and most layouts.')}</TabPanel>
            <TabPanel value="activity">{body('Activity content.')}</TabPanel>
            <TabPanel value="settings">{body('Settings content.')}</TabPanel>
          </Tabs>
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontSize: 'var(--font-size-80)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>
            Mobile (48px) — touch-first
          </p>
          <Tabs value={mobTab} onValueChange={setMobTab} size="mobile">
            <TabList>
              <Tab value="overview">Overview</Tab>
              <Tab value="activity">Activity</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <TabPanel value="overview">{body('Larger touch target for mobile and touch devices.')}</TabPanel>
            <TabPanel value="activity">{body('Activity content.')}</TabPanel>
            <TabPanel value="settings">{body('Settings content.')}</TabPanel>
          </Tabs>
        </div>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With icons
// ---------------------------------------------------------------------------

export const WithIcons: Story = {
  name: 'With icons',
  render: () => {
    const [tab, setTab] = React.useState('dashboard')
    return (
      <div style={{ maxWidth: '720px' }}>
        <Tabs value={tab} onValueChange={setTab}>
          <TabList>
            <Tab value="dashboard" icon={<LayoutDashboard />}>Dashboard</Tab>
            <Tab value="members"   icon={<Users />}>Members</Tab>
            <Tab value="billing"   icon={<CreditCard />}>Billing</Tab>
            <Tab value="settings"  icon={<Settings />}>Settings</Tab>
          </TabList>
          <TabPanel value="dashboard">{body('Dashboard content.')}</TabPanel>
          <TabPanel value="members">{body('Members content.')}</TabPanel>
          <TabPanel value="billing">{body('Billing content.')}</TabPanel>
          <TabPanel value="settings">{body('Settings content.')}</TabPanel>
        </Tabs>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With counters
// ---------------------------------------------------------------------------

export const WithCounters: Story = {
  name: 'With counters',
  render: () => {
    const [tab, setTab] = React.useState('inbox')
    return (
      <div style={{ maxWidth: '720px' }}>
        <Tabs value={tab} onValueChange={setTab}>
          <TabList>
            <Tab
              value="inbox"
              counter={<Counter count={12} variant="outline" color="neutral" />}
            >
              Inbox
            </Tab>
            <Tab
              value="sent"
              counter={<Counter count={0} variant="outline" color="neutral" />}
            >
              Sent
            </Tab>
            <Tab
              value="notifications"
              counter={<Counter count={3} variant="outline" color="neutral" />}
              icon={<Bell />}
            >
              Notifications
            </Tab>
            <Tab value="drafts">Drafts</Tab>
          </TabList>
          <TabPanel value="inbox">{body('12 unread messages.')}</TabPanel>
          <TabPanel value="sent">{body('No sent messages.')}</TabPanel>
          <TabPanel value="notifications">{body('3 new notifications.')}</TabPanel>
          <TabPanel value="drafts">{body('No drafts.')}</TabPanel>
        </Tabs>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Closable tabs
// ---------------------------------------------------------------------------

export const Closable: Story = {
  render: () => {
    const allTabs = [
      { value: 'dashboard', label: 'Dashboard' },
      { value: 'reports',   label: 'Reports' },
      { value: 'analytics', label: 'Analytics' },
      { value: 'exports',   label: 'Exports' },
    ]
    const [tabs, setTabs]     = React.useState(allTabs)
    const [active, setActive] = React.useState('dashboard')

    const handleClose = (value: string) => {
      const remaining = tabs.filter(t => t.value !== value)
      setTabs(remaining)
      if (active === value && remaining.length > 0) {
        setActive(remaining[0].value)
      }
    }

    return (
      <div style={{ maxWidth: '720px' }}>
        <Tabs value={active} onValueChange={setActive}>
          <TabList>
            {tabs.map(t => (
              <Tab
                key={t.value}
                value={t.value}
                closable
                onClose={() => handleClose(t.value)}
              >
                {t.label}
              </Tab>
            ))}
          </TabList>
          {tabs.map(t => (
            <TabPanel key={t.value} value={t.value}>
              {body(`${t.label} content. Close button appears on hover or when selected.`)}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With menu
// ---------------------------------------------------------------------------

export const WithMenu: Story = {
  name: 'With menu',
  render: () => {
    const [tab, setTab]       = React.useState('document-1')
    const [lastMenu, setMenu] = React.useState<string | null>(null)
    return (
      <div style={{ maxWidth: '720px' }}>
        {lastMenu && (
          <p style={{ marginBottom: '12px', fontSize: 'var(--font-size-80)', color: 'var(--text-soft)' }}>
            Menu clicked on: <strong>{lastMenu}</strong>
          </p>
        )}
        <Tabs value={tab} onValueChange={setTab}>
          <TabList>
            {['document-1', 'document-2', 'document-3'].map(v => (
              <Tab
                key={v}
                value={v}
                icon={<FileText />}
                closable
                onMenuClick={() => setMenu(v)}
              >
                {v.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Tab>
            ))}
          </TabList>
          {['document-1', 'document-2', 'document-3'].map(v => (
            <TabPanel key={v} value={v}>
              {body(`Content for ${v}. Hover to reveal menu (⋮) and close (×) buttons.`)}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Disabled tab
// ---------------------------------------------------------------------------

export const WithDisabled: Story = {
  name: 'With disabled',
  render: () => {
    const [tab, setTab] = React.useState('overview')
    return (
      <div style={{ maxWidth: '720px' }}>
        <Tabs value={tab} onValueChange={setTab}>
          <TabList>
            <Tab value="overview">Overview</Tab>
            <Tab value="analytics" disabled>Analytics</Tab>
            <Tab value="reports">Reports</Tab>
            <Tab value="billing" disabled>Billing</Tab>
          </TabList>
          <TabPanel value="overview">{body('Overview content. Some tabs above are disabled.')}</TabPanel>
          <TabPanel value="analytics">{body('Analytics content.')}</TabPanel>
          <TabPanel value="reports">{body('Reports content.')}</TabPanel>
          <TabPanel value="billing">{body('Billing content.')}</TabPanel>
        </Tabs>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// In context — soft tabs inside a Panel
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  render: () => {
    const [tab, setTab] = React.useState('overview')
    return (
      <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* Page-level loud tabs */}
        <Tabs value={tab} onValueChange={setTab}>
          <TabList variant="loud">
            <Tab value="overview" icon={<LayoutDashboard />}>Overview</Tab>
            <Tab value="members"  icon={<Users />} counter={<Counter count={24} variant="outline" color="neutral" />}>Members</Tab>
            <Tab value="settings" icon={<Settings />}>Settings</Tab>
          </TabList>

          <TabPanel value="overview">
            {/* Loud tabs inside a Panel — PanelBody padding="0" lets the TabList
                span full width; the TabList and TabPanel handle their own 24px insets */}
            <Panel>
              <PanelHeader>Performance</PanelHeader>
              <PanelBody padding="0">
                <SoftTabsDemo />
              </PanelBody>
            </Panel>
          </TabPanel>

          <TabPanel value="members">
            {body('Members content.')}
          </TabPanel>

          <TabPanel value="settings">
            {body('Settings content.')}
          </TabPanel>
        </Tabs>

      </div>
    )
  },
}

function SoftTabsDemo() {
  const [innerTab, setInnerTab] = React.useState('week')
  return (
    <Tabs value={innerTab} onValueChange={setInnerTab}>
      <TabList variant="loud" padding="var(--spacing-150)">
        <Tab value="week">This week</Tab>
        <Tab value="month">This month</Tab>
        <Tab value="quarter">This quarter</Tab>
      </TabList>
      <TabPanel value="week" style={{ padding: 'var(--spacing-100) var(--spacing-150)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { label: 'API calls',    value: '284K' },
            { label: 'Active users', value: '1,102' },
            { label: 'Avg response', value: '88ms' },
          ].map(({ label, value }) => (
            <Card key={label} variant="elevated">
              <CardContent>
                <p style={{ margin: '0 0 4px', fontSize: 'var(--font-size-60)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>{label}</p>
                <p style={{ margin: 0, fontSize: 'var(--font-size-200)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-loud)', lineHeight: 1.1 }}>{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabPanel>
      <TabPanel value="month" style={{ padding: 'var(--spacing-100) var(--spacing-150)' }}>
        {body('Monthly performance data.')}
      </TabPanel>
      <TabPanel value="quarter" style={{ padding: 'var(--spacing-100) var(--spacing-150)' }}>
        {body('Quarterly performance data.')}
      </TabPanel>
    </Tabs>
  )
}
