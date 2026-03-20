import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  LayoutDashboard, Users, FileText, Settings, Bell,
  BarChart2, Inbox, Star, CreditCard, HelpCircle,
  Filter, User,
} from 'lucide-react'
import {
  Drawer, DrawerHeader, DrawerTools, DrawerContent,
  DrawerSection, DrawerMenuItem, DrawerMultiLevelItem,
  DrawerListItem, DrawerNotificationItem, DrawerContextButton,
} from './Drawer'
import type { DrawerProps } from './Drawer'
import { Button } from '../Button'
import { Avatar } from '../Avatar'

// ---------------------------------------------------------------------------

const meta: Meta<DrawerProps> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<DrawerProps>

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Navigation Drawer (left)
// ---------------------------------------------------------------------------

export const Navigation: Story = {
  name: 'Navigation (left)',
  render: () => {
    const [open, setOpen]           = useState(false)
    const [active, setActive]       = useState('dashboard')
    const [financeOpen, setFinance] = useState(true)

    return (
      <>
        <div style={{ padding: '24px' }}>
          <Button onClick={() => setOpen(true)} iconStart={<LayoutDashboard size={16} />}>
            Open navigation
          </Button>
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} side="left" size="small">
          <DrawerHeader title="Navigation" />
          <DrawerContent>
            <DrawerSection>
              <DrawerMenuItem
                label="Dashboard" icon={<LayoutDashboard size={14} />}
                active={active === 'dashboard'} onClick={() => setActive('dashboard')}
              />
              <DrawerMenuItem
                label="Inbox" icon={<Inbox size={14} />}
                active={active === 'inbox'} onClick={() => setActive('inbox')}
              />
              <DrawerMenuItem
                label="Reports" icon={<BarChart2 size={14} />}
                active={active === 'reports'} onClick={() => setActive('reports')}
              />
            </DrawerSection>

            <DrawerSection title="Finance" divider
              link={{ label: 'View all', onClick: () => {} }}>
              <DrawerMultiLevelItem
                label="Accounts" icon={<CreditCard size={14} />}
                expanded={financeOpen} onExpandedChange={setFinance}
              >
                <DrawerMenuItem label="Chart of accounts" active={active === 'chart'} onClick={() => setActive('chart')} />
                <DrawerMenuItem label="Bank reconciliation" active={active === 'bank'} onClick={() => setActive('bank')} />
                <DrawerMenuItem label="Trial balance" active={active === 'trial'} onClick={() => setActive('trial')} code="TB" />
              </DrawerMultiLevelItem>
              <DrawerMenuItem label="Invoices" icon={<FileText size={14} />} active={active === 'invoices'} onClick={() => setActive('invoices')} />
            </DrawerSection>

            <DrawerSection title="Admin" divider>
              <DrawerMenuItem label="People" icon={<Users size={14} />} active={active === 'people'} onClick={() => setActive('people')} />
              <DrawerMenuItem label="Settings" icon={<Settings size={14} />} active={active === 'settings'} onClick={() => setActive('settings')}
                contextMenu={<DrawerContextButton onClick={e => { e.stopPropagation(); alert('Context') }} />}
              />
              <DrawerMenuItem label="Help" icon={<HelpCircle size={14} />} disabled />
            </DrawerSection>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

// ---------------------------------------------------------------------------
// Detail panel (right)
// ---------------------------------------------------------------------------

export const DetailPanel: Story = {
  name: 'Detail Panel (right)',
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div style={{ padding: '24px' }}>
          <Button onClick={() => setOpen(true)}>Open detail panel</Button>
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} side="right" size="medium">
          <DrawerHeader
            title="Sarah Johnson"
            description="Senior Product Designer · Design team"
            actions={
              <Button size="small" variant="outline" color="neutral">Edit</Button>
            }
          />
          <DrawerContent>
            <DrawerSection title="Activity" count={3}>
              <DrawerListItem
                header="Submitted Q1 performance review"
                secondary="HR · Performance"
                message="The review has been submitted and is awaiting manager approval before the deadline."
                timestamp="2h ago"
                unread
                before={<Avatar name="Sarah Johnson" size="s" />}
              />
              <DrawerListItem
                header="Joined Design team channel"
                secondary="Slack · #design-team"
                timestamp="Yesterday"
                before={<Avatar name="Sarah Johnson" size="s" />}
              />
              <DrawerListItem
                header="Updated profile photo"
                secondary="Profile"
                timestamp="3 days ago"
                before={<Avatar name="Sarah Johnson" size="s" />}
              />
            </DrawerSection>

            <DrawerSection title="Details" divider>
              <DrawerMenuItem label="Email"   icon={<Inbox size={14} />}   code="sarah@unit4.com" />
              <DrawerMenuItem label="Reports to" icon={<User size={14} />} code="Alex Chen" />
              <DrawerMenuItem label="Location" icon={<Star size={14} />}   code="Amsterdam" />
            </DrawerSection>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

// ---------------------------------------------------------------------------
// Notifications drawer
// ---------------------------------------------------------------------------

export const Notifications: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const notifications = [
      { id: '1', title: 'Leave request approved', message: 'Your 3-day leave request for 15–17 April has been approved by Alex Chen.', timestamp: '5m ago', unread: true },
      { id: '2', title: 'Performance review due', message: 'Your Q1 self-assessment is due in 2 days. Complete it to avoid delays.', timestamp: '1h ago', unread: true },
      { id: '3', title: 'New team member', message: 'Marcus Holt joined the Design team. Say hello!', timestamp: 'Yesterday', unread: false },
      { id: '4', title: 'Payslip available', message: 'Your March 2026 payslip is now available for download.', timestamp: '3 days ago', unread: false },
    ]

    return (
      <>
        <div style={{ padding: '24px' }}>
          <Button onClick={() => setOpen(true)} iconStart={<Bell size={16} />}>
            Notifications <span style={{ background: 'var(--bg-negative)', color: '#fff', borderRadius: '999px', padding: '1px 6px', fontSize: '11px', marginLeft: '4px' }}>2</span>
          </Button>
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} side="right" size="medium">
          <DrawerHeader
            title="Notifications"
            actions={
              <Button size="small" variant="ghost" color="neutral">Mark all read</Button>
            }
          />
          <DrawerTools>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['All', 'Unread', 'HR', 'Finance'].map(label => (
                <button key={label} style={{
                  all: 'unset', boxSizing: 'border-box', padding: '4px 12px',
                  borderRadius: '999px', border: '1px solid var(--border-default)',
                  fontSize: '14px', cursor: 'pointer', background: label === 'All' ? 'var(--bg-primary-softest)' : 'transparent',
                  color: label === 'All' ? 'var(--color-primary-loud)' : 'var(--text)',
                  fontFamily: 'var(--font-family-base)',
                }}>
                  {label}
                </button>
              ))}
            </div>
          </DrawerTools>
          <DrawerContent>
            <DrawerSection>
              {notifications.map((n, i) => (
                <DrawerNotificationItem
                  key={n.id}
                  title={n.title}
                  message={n.message}
                  timestamp={n.timestamp}
                  unread={n.unread}
                  last={i === notifications.length - 1}
                  avatar={<Avatar name={n.title} size="s" />}
                  action={n.unread ? (
                    <Button size="xsmall" variant="outline" color="neutral">View</Button>
                  ) : undefined}
                  onClick={() => alert(`Open: ${n.title}`)}
                />
              ))}
            </DrawerSection>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

// ---------------------------------------------------------------------------
// Filter panel
// ---------------------------------------------------------------------------

export const FilterPanel: Story = {
  name: 'Filter Panel',
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div style={{ padding: '24px' }}>
          <Button onClick={() => setOpen(true)} variant="outline" color="neutral" iconStart={<Filter size={16} />}>
            Filters
          </Button>
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} side="right" size="small">
          <DrawerHeader title="Filters" description="Narrow down your results" />
          <DrawerTools>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Active', 'Draft', 'Archived'].map(label => (
                <button key={label} style={{
                  all: 'unset', boxSizing: 'border-box', padding: '4px 10px',
                  borderRadius: '999px', border: '1px solid var(--border-default)',
                  fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--font-family-base)',
                  color: 'var(--text)',
                }}>{label}</button>
              ))}
            </div>
          </DrawerTools>
          <DrawerContent>
            <DrawerSection title="Department">
              {['Finance', 'Engineering', 'Design', 'Marketing', 'HR', 'Operations'].map(dept => (
                <DrawerMenuItem key={dept} label={dept} icon={<Users size={14} />} onClick={() => {}} />
              ))}
            </DrawerSection>
            <DrawerSection title="Status" divider>
              {['Full-time', 'Part-time', 'Contractor'].map(s => (
                <DrawerMenuItem key={s} label={s} onClick={() => {}} />
              ))}
            </DrawerSection>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

// ---------------------------------------------------------------------------
// Persistent Drawer
// ---------------------------------------------------------------------------

export const Persistent: Story = {
  name: 'Persistent (split-pane)',
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [open, setOpen]     = useState(true)
    const [active, setActive] = useState('dashboard')

    const navItems = [
      { id: 'dashboard', label: 'Dashboard',  icon: <LayoutDashboard size={14} /> },
      { id: 'inbox',     label: 'Inbox',      icon: <Inbox size={14} /> },
      { id: 'reports',   label: 'Reports',    icon: <BarChart2 size={14} /> },
      { id: 'people',    label: 'People',     icon: <Users size={14} /> },
      { id: 'documents', label: 'Documents',  icon: <FileText size={14} /> },
    ]

    return (
      <div style={{
        display:  'flex',
        height:   '100vh',
        overflow: 'hidden',
        background: 'var(--bg-neutral-softest)',
      }}>
        {/* Persistent nav drawer */}
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          side="left"
          size="small"
          persistent
        >
          <DrawerHeader
            title="Ripple"
            description="Unit4 Design System"
          />
          <DrawerContent>
            <DrawerSection>
              {navItems.map(item => (
                <DrawerMenuItem
                  key={item.id}
                  label={item.label}
                  icon={item.icon}
                  active={active === item.id}
                  onClick={() => setActive(item.id)}
                />
              ))}
            </DrawerSection>

            <DrawerSection title="Settings" divider>
              <DrawerMenuItem label="Preferences" icon={<Settings size={14} />} />
              <DrawerMenuItem label="Help"         icon={<HelpCircle size={14} />} />
            </DrawerSection>
          </DrawerContent>
        </Drawer>

        {/* Main content */}
        <div style={{
          flex:           1,
          display:        'flex',
          flexDirection:  'column',
          overflow:       'hidden',
          minWidth:       0,
        }}>
          {/* Top bar */}
          <div style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '12px',
            padding:      '0 24px',
            height:       '56px',
            background:   'var(--bg-surface)',
            borderBottom: '1px solid var(--border-neutral)',
            flexShrink:   0,
          }}>
            <Button
              variant="ghost"
              color="neutral"
              size="small"
              iconStart={<LayoutDashboard size={16} />}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close navigation' : 'Open navigation'}
            >
              {open ? 'Close nav' : 'Open nav'}
            </Button>
            <span style={{
              fontFamily: 'var(--font-family-base)',
              fontSize:   'var(--font-size-80)',
              color:      'var(--text-soft)',
            }}>
              {navItems.find(i => i.id === active)?.label}
            </span>
          </div>

          {/* Page body */}
          <div style={{
            flex:       1,
            padding:    '32px',
            overflow:   'auto',
          }}>
            <p style={{
              fontFamily: 'var(--font-family-base)',
              fontSize:   'var(--font-size-120)',
              fontWeight: 600,
              color:      'var(--text-loud)',
              margin:     '0 0 8px',
            }}>
              {navItems.find(i => i.id === active)?.label}
            </p>
            <p style={{
              fontFamily: 'var(--font-family-base)',
              fontSize:   'var(--font-size-100)',
              color:      'var(--text-soft)',
              margin:     0,
            }}>
              The navigation drawer is persistent — it stays open alongside the
              content, has no overlay, and does not trap focus. Toggle it with
              the button above.
            </p>
          </div>
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
    const [openSize, setOpenSize] = useState<string | null>(null)

    return (
      <>
        <div style={{ padding: '24px', display: 'flex', gap: '12px' }}>
          {(['small', 'medium', 'large'] as const).map(size => (
            <Button key={size} variant="outline" color="neutral" onClick={() => setOpenSize(size)}>
              {size} ({size === 'small' ? '320px' : size === 'medium' ? '480px' : '640px'})
            </Button>
          ))}
        </div>

        {(['small', 'medium', 'large'] as const).map(size => (
          <Drawer key={size} open={openSize === size} onClose={() => setOpenSize(null)} size={size}>
            <DrawerHeader title={`${size.charAt(0).toUpperCase() + size.slice(1)} drawer`} description={`${size === 'small' ? '320px' : size === 'medium' ? '480px' : '640px'} wide`} />
            <DrawerContent>
              <DrawerSection>
                <DrawerMenuItem label="Item one"   icon={<LayoutDashboard size={14} />} />
                <DrawerMenuItem label="Item two"   icon={<FileText size={14} />} active />
                <DrawerMenuItem label="Item three" icon={<Settings size={14} />} />
              </DrawerSection>
            </DrawerContent>
          </Drawer>
        ))}
      </>
    )
  },
}
