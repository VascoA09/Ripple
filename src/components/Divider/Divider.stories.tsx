import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'
import type { DividerProps } from './Divider'

// ---------------------------------------------------------------------------

const meta: Meta<DividerProps> = {
  title:      'Components/Divider',
  component:  Divider,
  parameters: { layout: 'padded' },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant:     { control: 'select', options: ['full', 'inset', 'inset-text'] },
    children:    { control: 'text' },
  },
}

export default meta
type Story = StoryObj<DividerProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant:     'full',
  },
  render: (args) => (
    <div style={{ width: '480px', padding: '24px', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', color: 'var(--text)', marginBottom: '16px' }}>
        Content above the divider
      </div>
      <Divider {...args} />
      <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', color: 'var(--text)', marginTop: '16px' }}>
        Content below the divider
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Variants — all three, horizontal
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', width: '480px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Variants
      </p>

      {/* Full */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>full (default)</p>
      <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
        <div style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '12px' }}>Section A</div>
        <Divider />
        <div style={{ fontSize: '14px', color: 'var(--text)', marginTop: '12px' }}>Section B</div>
      </div>

      {/* Inset */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>inset</p>
      <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
        <div style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '12px' }}>Related item A</div>
        <Divider variant="inset" />
        <div style={{ fontSize: '14px', color: 'var(--text)', marginTop: '12px' }}>Related item B</div>
      </div>

      {/* Inset with text */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>inset-text</p>
      <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '16px' }}>
        <div style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '12px' }}>Yesterday</div>
        <Divider variant="inset-text">Today</Divider>
        <div style={{ fontSize: '14px', color: 'var(--text)', marginTop: '12px' }}>New messages</div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Vertical
// ---------------------------------------------------------------------------

export const Vertical: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Vertical
      </p>

      {/* Full */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>full</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', height: '32px', background: 'var(--bg-hover)', borderRadius: '8px', padding: '0 12px', marginBottom: '24px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Edit</span>
        <Divider orientation="vertical" />
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Copy</span>
        <Divider orientation="vertical" />
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Delete</span>
      </div>

      {/* Inset */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>inset</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', height: '48px', background: 'var(--bg-hover)', borderRadius: '8px', padding: '0 12px', marginBottom: '24px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Files</span>
        <Divider orientation="vertical" variant="inset" />
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Settings</span>
        <Divider orientation="vertical" variant="inset" />
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Help</span>
      </div>

      {/* Inset with text */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>inset-text</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', height: '80px', background: 'var(--bg-hover)', borderRadius: '8px', padding: '0 16px', marginBottom: '24px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Q1</span>
        <Divider orientation="vertical" variant="inset-text">vs</Divider>
        <span style={{ fontSize: '14px', color: 'var(--text)', padding: '0 8px' }}>Q2</span>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context
// ---------------------------------------------------------------------------

const notifications = [
  { id: 1, text: 'Mia approved the Q2 proposal',    time: '2m ago',  read: false },
  { id: 2, text: 'Pipeline completed successfully',  time: '18m ago', read: false },
  { id: 3, text: 'New comment on "Token naming"',    time: '1h ago',  read: true  },
  { id: 4, text: 'Sprint review rescheduled to 3pm', time: 'Yesterday', read: true },
  { id: 5, text: 'Lena merged branch feature/nav',   time: 'Yesterday', read: true },
]

const formSections = [
  {
    label:  'Personal information',
    fields: ['Full name', 'Email address'],
  },
  {
    label:  'Account settings',
    fields: ['Username', 'Password'],
  },
  {
    label:  'Preferences',
    fields: ['Language', 'Timezone'],
  },
]

export const InContext: Story = {
  name: 'In Context',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

      {/* Notification feed — date dividers */}
      <div style={{ width: '320px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>notification feed</p>
        <div style={{ background: 'var(--bg-hover)', borderRadius: '10px', overflow: 'hidden' }}>
          {notifications.map((n, i) => {
            const isYesterdayBoundary = n.time === 'Yesterday' && notifications[i - 1]?.time !== 'Yesterday'
            return (
              <div key={n.id}>
                {isYesterdayBoundary && (
                  <Divider variant="inset-text" style={{ marginBlock: '4px' }}>Yesterday</Divider>
                )}
                <div style={{
                  display:    'flex',
                  alignItems: 'flex-start',
                  gap:        '10px',
                  padding:    '12px 16px',
                  opacity:    n.read ? 0.6 : 1,
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: n.read ? 'transparent' : 'var(--bg-primary)', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text)', lineHeight: '1.4', marginBottom: '2px' }}>{n.text}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-soft)' }}>{n.time}</div>
                  </div>
                </div>
                {i < notifications.length - 1 && !isYesterdayBoundary && !(notifications[i + 1]?.time === 'Yesterday') && (
                  <Divider variant="inset" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Form sections — inset dividers */}
      <div style={{ width: '300px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>form sections</p>
        <div style={{ background: 'var(--bg-hover)', borderRadius: '10px', padding: '0' }}>
          {formSections.map((section, si) => (
            <div key={section.label}>
              {si > 0 && <Divider variant="inset-text">{section.label}</Divider>}
              {si === 0 && (
                <div style={{ padding: '12px 16px 4px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-soft)' }}>
                  {section.label}
                </div>
              )}
              {section.fields.map((field, fi) => (
                <div key={field}>
                  <div style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--text)' }}>{field}</div>
                  {fi < section.fields.length - 1 && <Divider variant="inset" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Toolbar — vertical dividers */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>toolbar</p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', height: '40px', background: 'var(--bg-hover)', borderRadius: '8px', padding: '0 8px' }}>
          {['Bold', 'Italic', 'Underline'].map((t, i) => (
            <span key={t} style={{ display: 'contents' }}>
              {i > 0 && <Divider orientation="vertical" variant="inset" />}
              <button style={{ padding: '4px 8px', background: 'none', border: 'none', fontSize: '13px', color: 'var(--text)', cursor: 'pointer', borderRadius: '4px' }}>
                {t}
              </button>
            </span>
          ))}
          <Divider orientation="vertical" />
          {['Left', 'Centre', 'Right'].map((t) => (
            <button key={t} style={{ padding: '4px 8px', background: 'none', border: 'none', fontSize: '13px', color: 'var(--text)', cursor: 'pointer', borderRadius: '4px' }}>
              {t}
            </button>
          ))}
        </div>
      </div>

    </div>
  ),
}
