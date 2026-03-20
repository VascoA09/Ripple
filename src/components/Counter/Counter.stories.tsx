import type { Meta, StoryObj } from '@storybook/react'
import { Bell, Inbox, MessageSquare } from 'lucide-react'
import { Counter } from './Counter'
import type { CounterProps } from './Counter'

// ---------------------------------------------------------------------------

const meta: Meta<CounterProps> = {
  title: 'Components/Counter',
  component: Counter,
  parameters: { layout: 'centered' },
  argTypes: {
    count:   { control: 'number' },
    variant: { control: 'select', options: ['fill', 'outline'] },
    size:    { control: 'select', options: ['small', 'medium', 'large'] },
    color:  { control: 'select', options: ['primary', 'notice', 'negative', 'positive', 'neutral'] },
  },
}

export default meta
type Story = StoryObj<CounterProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    count: 4,
    variant: 'fill',
    size: 'medium',
    color: 'primary',
  },
}

// ---------------------------------------------------------------------------
// Variants & Colors — 2 × 5 grid
// ---------------------------------------------------------------------------

const variants = ['fill', 'outline'] as const
const colors  = ['primary', 'notice', 'negative', 'positive', 'neutral'] as const

export const VariantsAndColors: Story = {
  name: 'Variants & Colors',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Variants & Colors
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 40px)', gap: '16px', alignItems: 'start', justifyContent: 'start' }}>
        {/* Column headers */}
        {colors.map(c => (
          <div key={c} style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)', textAlign: 'center', paddingBottom: '4px', lineHeight: 1.3 }}>
            {c}
          </div>
        ))}

        {/* Rows: fill then outline */}
        {variants.map(v =>
          colors.map(c => (
            <div key={`${v}-${c}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Counter count={4} variant={v} color={c} />
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{v}</span>
            </div>
          ))
        )}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

const sizes = ['small', 'medium', 'large'] as const
const sizeDiameters = { small: '16px', medium: '20px', large: '24px' }

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Sizes
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Counter count={4} size={s} />
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>
              {s} · {sizeDiameters[s]}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '32px 0 12px' }}>outline · same sizes</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {sizes.map(s => (
          <Counter key={s} count={4} size={s} variant="outline" />
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Count Display — 0 through 99+
// ---------------------------------------------------------------------------

export const CountDisplay: Story = {
  name: 'Count Display',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Count Display
      </p>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>1–99 shown as-is · any value above 99 displays "99+"</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {[1, 9, 10, 42, 99, 100, 999].map(n => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Counter count={n} />
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{n}</span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '24px 0 12px' }}>outline</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {[1, 9, 10, 42, 99, 100, 999].map(n => (
          <Counter key={n} count={n} variant="outline" />
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '320px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        In Context
      </p>

      {/* Navigation items */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>nav items</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px' }}>
        {[
          { label: 'Inbox', icon: <Inbox size={16} />, count: 12, color: 'primary' },
          { label: 'Messages', icon: <MessageSquare size={16} />, count: 3, color: 'notice' },
          { label: 'Notifications', icon: <Bell size={16} />, count: 99, color: 'negative' },
        ].map(({ label, icon, count, color }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'var(--bg-hover)',
              fontSize: '14px',
              color: 'var(--text)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {icon}
              {label}
            </div>
            <Counter count={count} color={color as CounterProps['color']} size="small" />
          </div>
        ))}
      </div>

      {/* Icon badge overlay */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>icon badge (absolute positioning by consumer)</p>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        {[5, 42, 100].map(n => (
          <div key={n} style={{ position: 'relative', display: 'inline-flex' }}>
            <Bell size={24} color="var(--text-soft)" />
            <span style={{ position: 'absolute', top: '-6px', right: '-8px' }}>
              <Counter count={n} size="small" color="negative" />
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}
