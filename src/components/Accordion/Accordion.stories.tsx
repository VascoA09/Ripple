import type { Meta, StoryObj } from '@storybook/react'
import { Settings, Lock, User, CreditCard, Bell, HelpCircle } from 'lucide-react'
import { Accordion } from './Accordion'
import type { AccordionProps } from './Accordion'
import { Avatar } from '../Avatar'
import { Badge } from '../Badge'
import { Counter } from '../Counter'

// ---------------------------------------------------------------------------

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
}

export default meta
type Story = StoryObj<AccordionProps>

// ---------------------------------------------------------------------------
// Shared items
// ---------------------------------------------------------------------------

const basicItems = [
  {
    value: '1',
    header: 'What is Ripple?',
    content: (
      <p style={{ margin: 0 }}>
        Ripple is Unit4's design system. It provides the shared language of
        components, tokens, and patterns that product teams use to build
        consistent, accessible, and scalable user interfaces.
      </p>
    ),
  },
  {
    value: '2',
    header: 'When should I use an accordion?',
    content: (
      <p style={{ margin: 0 }}>
        Use accordions when you have content that can be organised into distinct
        sections, when screen space is limited, or when users benefit from
        seeing section headers at a glance. Avoid them when all content needs
        to be visible simultaneously.
      </p>
    ),
  },
  {
    value: '3',
    header: 'Can multiple sections be open at once?',
    content: (
      <p style={{ margin: 0 }}>
        Yes. All accordion items can be expanded simultaneously — opening one
        item does not close others. Use the <code>defaultValue</code> prop to
        set which items are open by default.
      </p>
    ),
  },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    items: basicItems,
    size: 'medium',
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

const sizes = ['small', 'medium', 'large'] as const

export const Sizes: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '600px' }}>
      {sizes.map(s => (
        <div key={s}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: 0 }}>{s}</p>
            {s === 'small' && (
              <span style={{ fontFamily: 'monospace', fontSize: '10px', background: 'var(--bg-notice-softest)', color: 'var(--text-notice)', padding: '2px 6px', borderRadius: '4px' }}>
                desktop only — 32px header is below the 44px touch target minimum
              </span>
            )}
          </div>
          <Accordion
            size={s}
            items={[
              { value: '1', header: 'Account settings', content: <p style={{ margin: 0 }}>Manage your account preferences and security.</p> },
              { value: '2', header: 'Notifications', content: <p style={{ margin: 0 }}>Configure how and when you receive notifications.</p> },
            ]}
          />
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Before Elements (icons)
// ---------------------------------------------------------------------------

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    items: [
      {
        value: 'profile',
        header: 'Profile',
        beforeElement: <User size={20} />,
        content: <p style={{ margin: 0 }}>Update your name, photo, and personal details.</p>,
      },
      {
        value: 'security',
        header: 'Security',
        beforeElement: <Lock size={20} />,
        content: <p style={{ margin: 0 }}>Manage your password and two-factor authentication settings.</p>,
      },
      {
        value: 'billing',
        header: 'Billing',
        beforeElement: <CreditCard size={20} />,
        content: <p style={{ margin: 0 }}>View invoices and manage your payment methods.</p>,
      },
      {
        value: 'notifications',
        header: 'Notifications',
        beforeElement: <Bell size={20} />,
        content: <p style={{ margin: 0 }}>Choose what updates you want to be notified about.</p>,
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// Default Open
// ---------------------------------------------------------------------------

export const DefaultOpen: Story = {
  name: 'Default Open',
  args: {
    defaultValue: ['1', '3'],
    items: basicItems,
  },
}

// ---------------------------------------------------------------------------
// With Disabled Items
// ---------------------------------------------------------------------------

export const WithDisabled: Story = {
  name: 'With Disabled Items',
  args: {
    items: [
      { value: '1', header: 'Available section', content: <p style={{ margin: 0 }}>This section can be expanded and collapsed.</p> },
      { value: '2', header: 'Disabled section', content: <p style={{ margin: 0 }}>This content is not accessible.</p>, disabled: true },
      { value: '3', header: 'Another available section', content: <p style={{ margin: 0 }}>This section is also available.</p> },
    ],
  },
}

// ---------------------------------------------------------------------------
// Settings panel pattern
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// With Avatar
// ---------------------------------------------------------------------------

export const WithAvatar: Story = {
  name: 'With Avatar',
  args: {
    items: [
      {
        value: 'alice',
        header: 'Alice Martin',
        beforeElement: <Avatar name="Alice Martin" size="m" />,
        content: <p style={{ margin: 0 }}>Senior Product Designer. Joined January 2023.</p>,
      },
      {
        value: 'ben',
        header: 'Ben Okafor',
        beforeElement: <Avatar name="Ben Okafor" size="m" />,
        content: <p style={{ margin: 0 }}>Frontend Engineer. Joined March 2022.</p>,
      },
      {
        value: 'cara',
        header: 'Cara Nunes',
        beforeElement: <Avatar name="Cara Nunes" size="m" />,
        content: <p style={{ margin: 0 }}>UX Researcher. Joined September 2024.</p>,
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// With Badge
// ---------------------------------------------------------------------------

export const WithBadge: Story = {
  name: 'With Badge',
  args: {
    items: [
      {
        value: 'annual-leave',
        header: 'Annual Leave Policy',
        afterElement: <Badge color="positive" size="small">Active</Badge>,
        content: <p style={{ margin: 0 }}>Employees are entitled to 25 days of annual leave per calendar year.</p>,
      },
      {
        value: 'expenses',
        header: 'Expense Reimbursement',
        afterElement: <Badge color="notice" size="small">Draft</Badge>,
        content: <p style={{ margin: 0 }}>Submit expenses within 30 days of the transaction date.</p>,
      },
      {
        value: 'remote',
        header: 'Remote Working',
        afterElement: <Badge color="neutral" size="small">Archived</Badge>,
        content: <p style={{ margin: 0 }}>Employees may work remotely up to 3 days per week subject to manager approval.</p>,
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// With Counter
// ---------------------------------------------------------------------------

export const WithCounter: Story = {
  name: 'With Counter',
  args: {
    items: [
      {
        value: 'tasks',
        header: 'Open Tasks',
        afterElement: <Counter count={12} size="small" color="primary" />,
        content: <p style={{ margin: 0 }}>Review and assign pending tasks from your team queue.</p>,
      },
      {
        value: 'notifications',
        header: 'Unread Notifications',
        afterElement: <Counter count={4} size="small" color="notice" />,
        content: <p style={{ margin: 0 }}>Messages and alerts that require your attention.</p>,
      },
      {
        value: 'messages',
        header: 'Draft Messages',
        afterElement: <Counter count={0} size="small" color="neutral" />,
        content: <p style={{ margin: 0 }}>Unsent messages saved to drafts.</p>,
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// Settings panel pattern
// ---------------------------------------------------------------------------

export const SettingsPanel: Story = {
  name: 'Settings Panel',
  render: () => (
    <div style={{ maxWidth: '520px' }}>
      <p style={{ fontFamily: 'var(--font-family-base)', fontSize: '18px', fontWeight: 600, color: 'var(--text-loud)', marginBottom: '24px' }}>
        Application Settings
      </p>
      <Accordion
        defaultValue={['general']}
        items={[
          {
            value: 'general',
            header: 'General',
            beforeElement: <Settings size={20} />,
            content: (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px' }}>Language, region, and display preferences.</p>
              </div>
            ),
          },
          {
            value: 'privacy',
            header: 'Privacy',
            beforeElement: <Lock size={20} />,
            content: (
              <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px' }}>Control what data is shared and how it is used.</p>
            ),
          },
          {
            value: 'help',
            header: 'Help & Support',
            beforeElement: <HelpCircle size={20} />,
            content: (
              <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '14px' }}>Access documentation, tutorials, and contact support.</p>
            ),
          },
        ]}
      />
    </div>
  ),
}
