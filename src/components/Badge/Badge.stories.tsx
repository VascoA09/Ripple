import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle, Archive, CheckCircle, Clock, Info, XCircle, Zap } from 'lucide-react'
import { Badge } from './Badge'
import type { BadgeProps } from './Badge'

// ---------------------------------------------------------------------------

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline'] },
    size:    { control: 'select', options: ['small', 'medium', 'large'] },
    color:  { control: 'select', options: ['primary', 'notice', 'negative', 'positive', 'neutral'] },
    icon:    { control: false },
  },
}

export default meta
type Story = StoryObj<BadgeProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'Pending',
    variant: 'fill',
    size: 'medium',
    color: 'primary',
  },
}

// ---------------------------------------------------------------------------
// Variants & Colors — 2 × 5 grid
// ---------------------------------------------------------------------------

const variants  = ['fill', 'outline'] as const
const colors   = ['primary', 'notice', 'negative', 'positive', 'neutral'] as const
const colorLabels: Record<typeof colors[number], string> = {
  primary:  'Pending',
  notice:   'Draft',
  negative: 'Rejected',
  positive: 'Approved',
  neutral:  'Archived',
}

export const VariantsAndColors: Story = {
  name: 'Variants & Colors',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Variants & Colors
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, auto)', gap: '12px', alignItems: 'start', justifyContent: 'start' }}>
        {/* Column headers */}
        {colors.map(c => (
          <div key={c} style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', textAlign: 'center', paddingBottom: '4px' }}>
            {c}
          </div>
        ))}

        {/* Rows: fill then outline */}
        {variants.map(v =>
          colors.map(c => (
            <div key={`${v}-${c}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Badge variant={v} color={c}>{colorLabels[c]}</Badge>
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
const sizeHeights = { small: '20px', medium: '24px', large: '32px' }

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Sizes — fill primary
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge size={s}>Pending</Badge>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>
              {s} · {sizeHeights[s]}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '32px 0 12px' }}>outline · same sizes</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <Badge key={s} size={s} variant="outline">Pending</Badge>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Icons
// ---------------------------------------------------------------------------

export const WithIcons: Story = {
  name: 'With Icons',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        With Icons
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '24px' }}>
        <Badge color="primary"  icon={<Info />}>Pending</Badge>
        <Badge color="notice"   icon={<Clock />}>Draft</Badge>
        <Badge color="negative" icon={<XCircle />}>Rejected</Badge>
        <Badge color="positive" icon={<CheckCircle />}>Approved</Badge>
        <Badge color="neutral"  icon={<Archive />}>Archived</Badge>
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>outline</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '24px' }}>
        <Badge variant="outline" color="primary"  icon={<Info />}>Pending</Badge>
        <Badge variant="outline" color="notice"   icon={<AlertCircle />}>Beta</Badge>
        <Badge variant="outline" color="negative" icon={<XCircle />}>Failed</Badge>
        <Badge variant="outline" color="positive" icon={<CheckCircle />}>Live</Badge>
        <Badge variant="outline" color="neutral"  icon={<Zap />}>Triggered</Badge>
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>sizes with icons</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
        <Badge size="small"  color="positive" icon={<CheckCircle />}>Approved</Badge>
        <Badge size="medium" color="positive" icon={<CheckCircle />}>Approved</Badge>
        <Badge size="large"  color="positive" icon={<CheckCircle />}>Approved</Badge>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Max Width
// ---------------------------------------------------------------------------

export const MaxWidth: Story = {
  name: 'Max Width',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Max Width — truncates at 200px
      </p>

      <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '16px' }}>
        Hover for full text via <code style={{ fontFamily: 'monospace', fontSize: '12px' }}>title</code> attribute.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
        <Badge>Short</Badge>
        <Badge>Payment processing failed</Badge>
        <Badge>This label is intentionally too long for a badge</Badge>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Full Reference
// ---------------------------------------------------------------------------

export const FullReference: Story = {
  name: 'Full Reference',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', overflowX: 'auto' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Full Reference — all sizes, all variants, all colors
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {sizes.map(s => (
          <div key={s}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '10px' }}>{s}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              {variants.map(v =>
                colors.map(c => (
                  <Badge key={`${v}-${c}`} variant={v} size={s} color={c}>{colorLabels[c]}</Badge>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
