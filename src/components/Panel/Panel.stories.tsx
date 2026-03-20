import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Panel, PanelHeader, PanelBody, PanelFooter } from './Panel'
import type { PanelProps } from './Panel'
import { Tabs, TabList, Tab, TabPanel } from '../Tabs'
import { Button } from '../Button'
import { Badge } from '../Badge'
import { Counter } from '../Counter'
import { Tag } from '../Tag'
import { Card, CardContent } from '../Card'
import { Divider } from '../Divider'
import {
  Settings,
  Users,
  Bell,
  ShieldCheck,
  Activity,
  Cpu,
  Database,
  Globe,
} from 'lucide-react'

// ---------------------------------------------------------------------------

const meta: Meta<PanelProps> = {
  title:      'Components/Panel',
  component:  Panel,
  parameters: { layout: 'padded' },
  argTypes: {
    collapsible:    { control: 'boolean' },
    defaultExpanded: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<PanelProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    collapsible:     false,
    defaultExpanded: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <Panel {...args}>
        <PanelHeader>Account settings</PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Manage your account preferences and personal details.</p>
        </PanelBody>
      </Panel>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With subtitle and actions
// ---------------------------------------------------------------------------

export const WithSubtitleAndActions: Story = {
  name: 'With subtitle and actions',
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <Panel>
        <PanelHeader
          subtitle="Manage your personal details"
          actions={
            <>
              <Button size="small" variant="ghost" color="neutral">Cancel</Button>
              <Button size="small">Save changes</Button>
            </>
          }
        >
          Account settings
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Form fields go here.</p>
        </PanelBody>
      </Panel>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Collapsible — starts expanded
// ---------------------------------------------------------------------------

export const Collapsible: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Collapsible</p>

      <Panel collapsible defaultExpanded={true}>
        <PanelHeader subtitle="Click the chevron to collapse">
          Advanced options
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Advanced configuration options. This section can be collapsed to save space.</p>
        </PanelBody>
      </Panel>

      <Panel collapsible defaultExpanded={false}>
        <PanelHeader subtitle="Click the chevron to expand">
          Additional details
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>This panel starts collapsed. Expand it to see the content.</p>
        </PanelBody>
      </Panel>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Controlled — consumer manages expanded state
// ---------------------------------------------------------------------------

function ControlledExample() {
  const [expanded, setExpanded] = useState(true)
  return (
    <Panel collapsible onExpandedChange={setExpanded}>
      <PanelHeader>
        {expanded ? 'Hide details' : 'Show details'}
      </PanelHeader>
      <PanelBody>
        <p style={{ margin: 0 }}>
          The panel title updates based on the expansion state via <code>onExpandedChange</code>.
        </p>
      </PanelBody>
    </Panel>
  )
}

export const Controlled: Story = {
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <ControlledExample />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With footer
// ---------------------------------------------------------------------------

export const WithFooter: Story = {
  name: 'With footer',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>With footer</p>

      <Panel>
        <PanelHeader subtitle="Fill in the details below">
          Create project
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Project form fields go here.</p>
        </PanelBody>
        <PanelFooter>
          <Button variant="ghost" color="neutral">Cancel</Button>
          <Button>Create project</Button>
        </PanelFooter>
      </Panel>

      <Panel collapsible>
        <PanelHeader subtitle="Notification preferences">
          Notifications
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Configure when and how you receive notifications.</p>
        </PanelBody>
        <PanelFooter>
          <Button variant="outline" color="neutral">Reset to defaults</Button>
          <Button>Save preferences</Button>
        </PanelFooter>
      </Panel>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With tabs
// ---------------------------------------------------------------------------

function TabbedPanelExample() {
  const [activeTab, setActiveTab] = useState('overview')
  return (
    <Panel>
      <PanelHeader>Project details</PanelHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* 24px horizontal padding aligns tabs with panel header and footer */}
        <TabList variant="loud" padding="var(--spacing-150)">
          <Tab value="overview">Overview</Tab>
          <Tab value="members">Members</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        {/* 16px top/bottom, 24px left/right — matches panel body alignment */}
        <TabPanel value="overview" style={{ padding: 'var(--spacing-100) var(--spacing-150)' }}>
          <p style={{ margin: 0 }}>Project overview — timeline, status, recent activity.</p>
        </TabPanel>
        <TabPanel value="members" style={{ padding: 'var(--spacing-100) var(--spacing-150)' }}>
          <p style={{ margin: 0 }}>Team members — roles, permissions, invite management.</p>
        </TabPanel>
        <TabPanel value="settings" style={{ padding: 'var(--spacing-100) var(--spacing-150)' }}>
          <p style={{ margin: 0 }}>Project settings — name, visibility, integrations.</p>
        </TabPanel>
      </Tabs>
    </Panel>
  )
}

export const WithTabs: Story = {
  name: 'With tabs',
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <TabbedPanelExample />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — settings page with multiple panels
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  render: () => (
    <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Static panel with actions */}
      <Panel>
        <PanelHeader
          subtitle="Update your name, email, and profile photo"
          actions={
            <>
              <Button size="small" variant="ghost" color="neutral">Cancel</Button>
              <Button size="small">Save changes</Button>
            </>
          }
        >
          Personal information
        </PanelHeader>
        <PanelBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Full name', 'Email address', 'Job title', 'Location'].map(field => (
              <div key={field}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{field}</label>
                <div style={{ height: '36px', background: 'var(--bg-app)', border: '1px solid var(--border-neutral)', borderRadius: '6px' }} />
              </div>
            ))}
          </div>
        </PanelBody>
      </Panel>

      {/* Collapsible — starts expanded */}
      <Panel collapsible defaultExpanded={true}>
        <PanelHeader subtitle="Configure when and how you receive alerts">
          Notification preferences
        </PanelHeader>
        <PanelBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Email notifications', 'Push notifications', 'SMS alerts', 'Weekly digest'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
                <span style={{ fontSize: '14px', color: 'var(--text)' }}>{item}</span>
                <div style={{ width: '36px', height: '20px', background: 'var(--bg-primary)', borderRadius: '10px', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </PanelBody>
        <PanelFooter>
          <Button size="small" variant="ghost" color="neutral">Reset</Button>
          <Button size="small">Save</Button>
        </PanelFooter>
      </Panel>

      {/* Collapsible — starts collapsed */}
      <Panel collapsible defaultExpanded={false}>
        <PanelHeader subtitle="Danger zone — irreversible actions">
          Advanced settings
        </PanelHeader>
        <PanelBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Divider>Security</Divider>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600, color: 'var(--text-loud)' }}>Two-factor authentication</p>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-soft)' }}>Add an extra layer of security to your account.</p>
              </div>
              <Button size="small" variant="outline" color="neutral">Enable</Button>
            </div>
            <Divider>Account</Divider>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600, color: 'var(--text-loud)' }}>Delete account</p>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-soft)' }}>Permanently delete your account and all data.</p>
              </div>
              <Button size="small" variant="outline" color="negative">Delete</Button>
            </div>
          </div>
        </PanelBody>
      </Panel>

    </div>
  ),
}

// ---------------------------------------------------------------------------
// With cards inside
// ---------------------------------------------------------------------------

export const WithCards: Story = {
  name: 'With cards',
  render: () => (
    <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>With cards</p>

      {/* Grid of metric cards inside a panel */}
      <Panel>
        <PanelHeader
          subtitle="Last 30 days"
          actions={<Button size="small" variant="ghost" color="neutral">View report</Button>}
        >
          Performance overview
        </PanelHeader>
        <PanelBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {[
              { label: 'Total users',     value: '12,430', delta: '+8%'  },
              { label: 'Active sessions', value: '3,821',  delta: '+12%' },
              { label: 'Avg. latency',    value: '84ms',   delta: '-3%'  },
            ].map(({ label, value, delta }) => (
              <Card key={label}>
                <CardContent>
                  <p style={{ margin: '0 0 4px', fontSize: '12px', color: 'var(--text-soft)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                  <p style={{ margin: '0 0 4px', fontSize: '24px', fontWeight: 700, color: 'var(--text-loud)', lineHeight: 1.2 }}>{value}</p>
                  <p style={{ margin: 0, fontSize: '13px', color: delta.startsWith('+') ? 'var(--text-positive, #2D6100)' : 'var(--text-negative, #B70606)' }}>{delta} vs last period</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PanelBody>
      </Panel>

      {/* List of item cards inside a collapsible panel */}
      <Panel collapsible>
        <PanelHeader subtitle="Services running in this environment">
          Active services
        </PanelHeader>
        <PanelBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { name: 'API Gateway',    status: 'Healthy',  uptime: '99.98%', icon: Globe    },
              { name: 'Core Database',  status: 'Healthy',  uptime: '99.95%', icon: Database },
              { name: 'ML Pipeline',    status: 'Degraded', uptime: '98.20%', icon: Cpu      },
            ].map(({ name, status, uptime, icon: Icon }) => (
              <Card key={name}>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={16} style={{ color: 'var(--text-soft)', flexShrink: 0 }} />
                      <div>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-loud)' }}>{name}</p>
                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-soft)' }}>Uptime {uptime}</p>
                      </div>
                    </div>
                    <Badge color={status === 'Healthy' ? 'positive' : 'notice'} variant="fill">
                      {status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PanelBody>
      </Panel>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Icon before the title
// ---------------------------------------------------------------------------

export const WithIcon: Story = {
  name: 'With icon',
  render: () => (
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>With icon</p>

      <Panel>
        <PanelHeader
          icon={<Settings size={20} />}
          subtitle="Manage your account preferences"
        >
          Account settings
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Settings form content.</p>
        </PanelBody>
      </Panel>

      <Panel>
        <PanelHeader
          icon={<Users size={20} />}
          subtitle="Invite and manage team members"
          actions={<Button size="small">Invite member</Button>}
        >
          Team
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Team member list.</p>
        </PanelBody>
      </Panel>

      <Panel collapsible>
        <PanelHeader
          icon={<Bell size={20} />}
          subtitle="Configure when and how you receive alerts"
        >
          Notifications
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Notification preferences form.</p>
        </PanelBody>
      </Panel>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Header context elements — icons, badges, counters, tags
// ---------------------------------------------------------------------------

export const HeaderContextElements: Story = {
  name: 'Header context elements',
  render: () => (
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Header context elements</p>

      {/* Icon + Badge */}
      <Panel>
        <PanelHeader
          icon={<Bell size={20} />}
          actions={<Badge color="negative">3 new</Badge>}
        >
          Notifications
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>You have 3 unread notifications.</p>
        </PanelBody>
      </Panel>

      {/* Icon + Counter */}
      <Panel>
        <PanelHeader
          icon={<Users size={20} />}
          subtitle="Roles and permissions"
          actions={<Counter count={24} color="neutral" />}
        >
          Team members
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Manage who has access to this project.</p>
        </PanelBody>
      </Panel>

      {/* Icon + Tag */}
      <Panel>
        <PanelHeader
          icon={<ShieldCheck size={20} />}
          subtitle="Enable two-factor authentication and review access logs"
          actions={<Tag color="green">Recommended</Tag>}
        >
          Security
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>Security settings and audit log.</p>
        </PanelBody>
      </Panel>

      {/* Icon + multiple context elements */}
      <Panel>
        <PanelHeader
          icon={<Activity size={20} />}
          subtitle="Real-time system health"
          actions={
            <>
              <Badge color="positive">All systems operational</Badge>
              <Button size="small" variant="ghost" color="neutral">Details</Button>
            </>
          }
        >
          System status
        </PanelHeader>
        <PanelBody>
          <p style={{ margin: 0 }}>System health metrics and incident history.</p>
        </PanelBody>
      </Panel>
    </div>
  ),
}
