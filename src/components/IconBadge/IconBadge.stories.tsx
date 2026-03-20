import type { Meta, StoryObj } from '@storybook/react'
import { Bell, Inbox, MessageSquare, Settings, User } from 'lucide-react'
import { IconBadge } from './IconBadge'
import type { IconBadgeProps } from './IconBadge'
import { Button } from '../Button'

// ---------------------------------------------------------------------------

const meta: Meta<IconBadgeProps> = {
  title: 'Components/IconBadge',
  component: IconBadge,
  parameters: { layout: 'centered' },
  argTypes: {
    count:   { control: 'number' },
    color:  { control: 'select', options: ['primary', 'notice', 'negative', 'positive', 'neutral'] },
    variant: { control: 'select', options: ['fill', 'outline'] },
  },
}

export default meta
type Story = StoryObj<IconBadgeProps>

// ---------------------------------------------------------------------------
// DEFAULT
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    count: 12,
    color: 'negative',
    variant: 'fill',
    children: <Bell size={24} color="var(--text-soft)" />,
  },
}

// ---------------------------------------------------------------------------
// COLORS
// ---------------------------------------------------------------------------

export const Colors: Story = {
  name: 'Colors',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '16px' }}>
      {(
        [
          { color: 'negative', icon: <Bell size={24} /> },
          { color: 'primary',  icon: <Inbox size={24} /> },
          { color: 'notice',   icon: <MessageSquare size={24} /> },
          { color: 'positive', icon: <Settings size={24} /> },
          { color: 'neutral',  icon: <User size={24} /> },
        ] as const
      ).map(({ color, icon }) => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <IconBadge count={9} color={color}>
            <span style={{ color: 'var(--text-soft)' }}>{icon}</span>
          </IconBadge>
          <span style={{ fontFamily: 'var(--font-family-base)', fontSize: '11px', color: 'var(--text-soft)' }}>
            {color}
          </span>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// VARIANTS
// ---------------------------------------------------------------------------

export const Variants: Story = {
  name: 'Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '16px' }}>
      {(['fill', 'outline'] as const).map(variant => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <IconBadge count={5} variant={variant} color="negative">
            <span style={{ color: 'var(--text-soft)' }}><Bell size={24} /></span>
          </IconBadge>
          <span style={{ fontFamily: 'var(--font-family-base)', fontSize: '11px', color: 'var(--text-soft)' }}>
            {variant}
          </span>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// COUNTS
// ---------------------------------------------------------------------------

export const Counts: Story = {
  name: 'Counts',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '16px' }}>
      {[1, 9, 42, 99, 100].map(n => (
        <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <IconBadge count={n} color="negative">
            <span style={{ color: 'var(--text-soft)' }}><Bell size={24} /></span>
          </IconBadge>
          <span style={{ fontFamily: 'var(--font-family-base)', fontSize: '11px', color: 'var(--text-soft)' }}>
            {n}
          </span>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// IN CONTEXT
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', maxWidth: '480px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        In Context
      </p>

      {/* Inside icon buttons */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '16px' }}>
        icon buttons
      </p>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        <Button variant="ghost" color="neutral" aria-label="Notifications, 12 unread">
          <IconBadge count={12} color="negative">
            <Bell size={20} />
          </IconBadge>
        </Button>
        <Button variant="ghost" color="neutral" aria-label="Messages, 3 unread">
          <IconBadge count={3} color="notice">
            <MessageSquare size={20} />
          </IconBadge>
        </Button>
        <Button variant="ghost" color="neutral" aria-label="Inbox, 99 items">
          <IconBadge count={99} color="primary">
            <Inbox size={20} />
          </IconBadge>
        </Button>
      </div>

      {/* Outline variant */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '16px' }}>
        outline variant
      </p>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        <Button variant="ghost" color="neutral" aria-label="Notifications, 5 unread">
          <IconBadge count={5} color="negative" variant="outline">
            <Bell size={20} />
          </IconBadge>
        </Button>
        <Button variant="ghost" color="neutral" aria-label="Messages, 42 unread">
          <IconBadge count={42} color="primary" variant="outline">
            <MessageSquare size={20} />
          </IconBadge>
        </Button>
      </div>

      {/* Zero — consumer controls rendering */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '16px' }}>
        zero count (consumer decides whether to render)
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="ghost" color="neutral" aria-label="Settings">
          <Settings size={20} />
        </Button>
        <Button variant="ghost" color="neutral" aria-label="Notifications, 0 unread">
          <IconBadge count={0} color="negative">
            <Bell size={20} />
          </IconBadge>
        </Button>
      </div>
    </div>
  ),
}
