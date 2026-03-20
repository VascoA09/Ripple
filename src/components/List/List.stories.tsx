import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { List, ListItem } from './List'
import type { ListProps } from './List'
import { Avatar } from '../Avatar'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { Panel, PanelHeader, PanelBody } from '../Panel'
import {
  Bell,
  CreditCard,
  Globe,
  Lock,
  Mail,
  Moon,
  Palette,
  Shield,
  User,
  ChevronRight,
} from 'lucide-react'

// ---------------------------------------------------------------------------

const meta: Meta<ListProps> = {
  title:      'Components/List',
  component:  List,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<ListProps>

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const label = (text: string) => (
  <p style={{
    margin: '0 0 8px',
    fontSize: 'var(--font-size-80)',
    fontWeight: 'var(--font-weight-semibold)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--text-soft)',
  }}>
    {text}
  </p>
)

// ---------------------------------------------------------------------------
// Default — medium, header only
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <List>
        <ListItem header="Overview" />
        <ListItem header="Activity" />
        <ListItem header="Members" />
        <ListItem header="Settings" />
      </List>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '480px' }}>
      <div>
        {label('Medium (48px) — default')}
        <List size="medium">
          <ListItem header="Dashboard"    description="View your performance metrics" />
          <ListItem header="Team members" description="Manage roles and permissions" />
          <ListItem header="Billing"      description="Invoices and payment methods" />
        </List>
      </div>
      <div>
        {label('Small (40px) — compact')}
        <List size="small">
          <ListItem header="Dashboard"    description="View your performance metrics" />
          <ListItem header="Team members" description="Manage roles and permissions" />
          <ListItem header="Billing"      description="Invoices and payment methods" />
        </List>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Interactive — onClick
// ---------------------------------------------------------------------------

export const Interactive: Story = {
  render: () => {
    const [last, setLast] = React.useState<string | null>(null)
    return (
      <div style={{ maxWidth: '480px' }}>
        {last && (
          <p style={{ marginBottom: '12px', fontSize: 'var(--font-size-80)', color: 'var(--text-soft)' }}>
            Clicked: <strong>{last}</strong>
          </p>
        )}
        <List>
          <ListItem
            header="Dashboard"
            description="View your metrics and reports"
            onClick={() => setLast('Dashboard')}
          />
          <ListItem
            header="Team members"
            description="Manage roles and permissions"
            onClick={() => setLast('Team members')}
          />
          <ListItem
            header="Billing"
            description="Invoices and payment methods"
            onClick={() => setLast('Billing')}
            disabled
          />
          <ListItem
            header="Settings"
            description="Configure your workspace"
            onClick={() => setLast('Settings')}
          />
        </List>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// User preset — avatar + name + email
// ---------------------------------------------------------------------------

export const UserPreset: Story = {
  name: 'User preset',
  render: () => {
    const users = [
      { name: 'Alice Johnson',  email: 'alice@acme.com',  size: 'm' as const },
      { name: 'Bob Smith',      email: 'bob@acme.com',    size: 'm' as const },
      { name: 'Carmen Ruiz',    email: 'carmen@acme.com', size: 'm' as const },
      { name: 'David Park',     email: 'david@acme.com',  size: 'm' as const },
    ]
    const [last, setLast] = React.useState<string | null>(null)
    return (
      <div style={{ maxWidth: '480px' }}>
        {last && (
          <p style={{ marginBottom: '12px', fontSize: 'var(--font-size-80)', color: 'var(--text-soft)' }}>
            Clicked: <strong>{last}</strong>
          </p>
        )}
        <List>
          {users.map(u => (
            <ListItem
              key={u.email}
              header={u.name}
              description={u.email}
              contentBefore={<Avatar name={u.name} size={u.size} />}
              contentAfter={
                <Button
                  variant="ghost"
                  size="small"
                  color="neutral"
                  iconStart={<ChevronRight size={16} />}
                  aria-label={`View ${u.name}`}
                  onClick={() => setLast(u.name)}
                />
              }
              onClick={() => setLast(u.name)}
            />
          ))}
        </List>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Setting preset — icon + label + description
// ---------------------------------------------------------------------------

export const SettingPreset: Story = {
  name: 'Setting preset',
  render: () => {
    const settings = [
      { icon: <User size={20} />,    label: 'Profile',        desc: 'Name, photo, and personal details' },
      { icon: <Bell size={20} />,    label: 'Notifications',  desc: 'Alerts, emails, and push settings' },
      { icon: <Lock size={20} />,    label: 'Security',       desc: 'Password and two-factor auth' },
      { icon: <Globe size={20} />,   label: 'Language',       desc: 'Interface language and region' },
      { icon: <Palette size={20} />, label: 'Appearance',     desc: 'Theme and display preferences' },
      { icon: <Moon size={20} />,    label: 'Do not disturb', desc: 'Pause all notifications' },
    ]
    return (
      <div style={{ maxWidth: '480px' }}>
        <List>
          {settings.map(s => (
            <ListItem
              key={s.label}
              header={s.label}
              description={s.desc}
              contentBefore={
                <span style={{ color: 'var(--text-soft)', display: 'flex' }}>
                  {s.icon}
                </span>
              }
              contentAfter={
                <ChevronRight size={16} style={{ color: 'var(--text-softest)' }} />
              }
              onClick={() => {}}
            />
          ))}
        </List>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Bulk selection
// ---------------------------------------------------------------------------

export const BulkSelection: Story = {
  name: 'Bulk selection',
  render: () => {
    const items = [
      { id: '1', header: 'Q4 financial report',   description: 'Updated 2 hours ago' },
      { id: '2', header: 'Product roadmap 2026',  description: 'Updated yesterday' },
      { id: '3', header: 'Brand guidelines v3',   description: 'Updated last week' },
      { id: '4', header: 'Engineering handbook',  description: 'Updated last month' },
    ]
    const [selected, setSelected] = React.useState<Set<string>>(new Set(['1']))

    const toggle = (id: string, checked: boolean) => {
      setSelected(prev => {
        const next = new Set(prev)
        checked ? next.add(id) : next.delete(id)
        return next
      })
    }

    return (
      <div style={{ maxWidth: '480px' }}>
        <p style={{ marginBottom: '8px', fontSize: 'var(--font-size-80)', color: 'var(--text-soft)' }}>
          {selected.size} of {items.length} selected
        </p>
        <List>
          {items.map(item => (
            <ListItem
              key={item.id}
              header={item.header}
              description={item.description}
              bulkSelect
              bulkSelectChecked={selected.has(item.id)}
              onBulkSelectChange={checked => toggle(item.id, checked)}
              contentAfter={
                <Badge label="PDF" variant="outline" color="neutral" />
              }
            />
          ))}
        </List>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Unread indicator
// ---------------------------------------------------------------------------

export const UnreadIndicator: Story = {
  name: 'Unread indicator',
  render: () => {
    const messages = [
      { id: '1', from: 'Alice Johnson',  subject: 'Q4 budget approval needed', time: '2m ago',  unread: true  },
      { id: '2', from: 'Bob Smith',      subject: 'Design review scheduled',   time: '1h ago',  unread: true  },
      { id: '3', from: 'Carmen Ruiz',    subject: 'Re: Onboarding checklist',  time: '3h ago',  unread: false },
      { id: '4', from: 'David Park',     subject: 'Welcome to the team',       time: 'Yesterday',unread: true  },
      { id: '5', from: 'Ellen Torres',   subject: 'Monthly all-hands notes',   time: '2 days ago',unread: false },
    ]
    return (
      <div style={{ maxWidth: '480px' }}>
        <List>
          {messages.map(m => (
            <ListItem
              key={m.id}
              header={m.from}
              description={m.subject}
              contentBefore={<Avatar name={m.from} size="m" />}
              contentAfter={
                <span style={{ fontSize: 'var(--font-size-60)', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>
                  {m.time}
                </span>
              }
              unreadIndicator={m.unread}
              onClick={() => {}}
            />
          ))}
        </List>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With links
// ---------------------------------------------------------------------------

export const WithLinks: Story = {
  name: 'With links',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <List>
        <ListItem
          header="Documentation"
          description="Guides, references, and API docs"
          contentBefore={<span style={{ color: 'var(--text-soft)', display: 'flex' }}><Globe size={20} /></span>}
          contentAfter={<ChevronRight size={16} style={{ color: 'var(--text-softest)' }} />}
          href="#"
        />
        <ListItem
          header="Security overview"
          description="SOC 2, GDPR, and encryption details"
          contentBefore={<span style={{ color: 'var(--text-soft)', display: 'flex' }}><Shield size={20} /></span>}
          contentAfter={<ChevronRight size={16} style={{ color: 'var(--text-softest)' }} />}
          href="#"
        />
        <ListItem
          header="Billing portal"
          description="Invoices, plans, and payment methods"
          contentBefore={<span style={{ color: 'var(--text-soft)', display: 'flex' }}><CreditCard size={20} /></span>}
          contentAfter={<ChevronRight size={16} style={{ color: 'var(--text-softest)' }} />}
          href="#"
        />
        <ListItem
          header="Contact support"
          description="Get help from our team"
          contentBefore={<span style={{ color: 'var(--text-soft)', display: 'flex' }}><Mail size={20} /></span>}
          contentAfter={<ChevronRight size={16} style={{ color: 'var(--text-softest)' }} />}
          href="#"
        />
      </List>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In context — small list inside a Panel
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In context',
  render: () => {
    const [selected, setSelected] = React.useState<string | null>(null)
    const members = [
      { name: 'Alice Johnson', role: 'Admin',  id: '1' },
      { name: 'Bob Smith',     role: 'Editor', id: '2' },
      { name: 'Carmen Ruiz',   role: 'Viewer', id: '3' },
    ]
    return (
      <div style={{ maxWidth: '420px' }}>
        <Panel>
          <PanelHeader>Team members</PanelHeader>
          <PanelBody>
            <List size="small" style={{ padding: 0 }}>
              {members.map(m => (
                <ListItem
                  key={m.id}
                  header={m.name}
                  description={m.role}
                  contentBefore={<Avatar name={m.name} size="s" />}
                  contentAfter={
                    <Badge
                      label={m.role}
                      variant="outline"
                      color={m.role === 'Admin' ? 'primary' : 'neutral'}
                    />
                  }
                  onClick={() => setSelected(m.name)}
                />
              ))}
            </List>
          </PanelBody>
        </Panel>
        {selected && (
          <p style={{ marginTop: '12px', fontSize: 'var(--font-size-80)', color: 'var(--text-soft)' }}>
            Selected: <strong>{selected}</strong>
          </p>
        )}
      </div>
    )
  },
}
