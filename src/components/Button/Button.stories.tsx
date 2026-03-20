import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight, Plus, Trash2 } from 'lucide-react'
import { Button } from './Button'
import type { ButtonProps } from './Button'

// ---------------------------------------------------------------------------

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline', 'ghost'] },
    size:    { control: 'select', options: ['xsmall', 'small', 'medium', 'large'] },
    color:  { control: 'select', options: ['primary', 'neutral', 'negative'] },
    loading:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconStart: { control: false },
    iconEnd:   { control: false },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'fill',
    size: 'medium',
    color: 'primary',
  },
}

// ---------------------------------------------------------------------------
// Variants × Colors — 3 × 3 grid
// ---------------------------------------------------------------------------

const variants = ['fill', 'outline', 'ghost'] as const
const colors  = ['primary', 'neutral', 'negative'] as const

export const VariantsAndColors: Story = {
  name: 'Variants & Colors',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Variants & Colors
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '16px', alignItems: 'start', justifyContent: 'start' }}>
        {/* Column headers */}
        {colors.map(c => (
          <div key={c} style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', textAlign: 'center', paddingBottom: '8px' }}>
            {c}
          </div>
        ))}

        {/* Row: each variant */}
        {variants.map(v =>
          colors.map(c => (
            <div key={`${v}-${c}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button variant={v} color={c}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>
                {v}
              </span>
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

const sizes = ['xsmall', 'small', 'medium', 'large'] as const

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
            <Button size={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</Button>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>
              {s} · {s === 'xsmall' ? '24px' : s === 'small' ? '32px' : s === 'medium' ? '40px' : '48px'}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        States
      </p>

      {/* Fill primary states */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>fill · primary</p>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        <Button>Default</Button>
        <Button className="button--pseudo-hover" style={{ background: 'var(--bg-primary-loud)' }}>Hover</Button>
        <Button loading>Saving</Button>
        <Button disabled>Disabled</Button>
      </div>

      {/* Outline neutral states */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>outline · neutral</p>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        <Button variant="outline" color="neutral">Default</Button>
        <Button variant="outline" color="neutral" style={{ background: 'var(--bg-hover)' }}>Hover</Button>
        <Button variant="outline" color="neutral" loading>Saving</Button>
        <Button variant="outline" color="neutral" disabled>Disabled</Button>
      </div>

      {/* Ghost negative states */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>ghost · negative</p>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="ghost" color="negative">Delete</Button>
        <Button variant="ghost" color="negative" loading>Deleting</Button>
        <Button variant="ghost" color="negative" disabled>Delete</Button>
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

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
        <Button iconStart={<Plus />}>Add member</Button>
        <Button iconEnd={<ArrowRight />}>Continue</Button>
        <Button iconStart={<Plus />} iconEnd={<ArrowRight />}>New and forward</Button>
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
        <Button variant="outline" color="neutral" iconStart={<Plus />}>Add item</Button>
        <Button variant="ghost" color="negative" iconStart={<Trash2 />}>Remove</Button>
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button iconStart={<Plus />} loading>Adding</Button>
        <Button variant="outline" color="neutral" iconStart={<Plus />} loading>Adding</Button>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Icon Only
// ---------------------------------------------------------------------------

export const IconOnly: Story = {
  name: 'Icon Only',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '8px' }}>
        Icon Only
      </p>
      <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Always provide <code style={{ fontFamily: 'monospace', fontSize: '12px' }}>aria-label</code>.
      </p>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
        {sizes.map(s => (
          <Button key={s} size={s} iconStart={<Plus />} aria-label={`Add item (${s})`} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button iconStart={<Plus />} aria-label="Add item" />
        <Button variant="outline" color="neutral" iconStart={<Plus />} aria-label="Add item" />
        <Button variant="ghost" color="neutral" iconStart={<Plus />} aria-label="Add item" />
        <Button variant="ghost" color="negative" iconStart={<Trash2 />} aria-label="Delete item" />
        <Button iconStart={<Plus />} loading aria-label="Adding item" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// All Sizes × All Variants — full reference
// ---------------------------------------------------------------------------

export const FullReference: Story = {
  name: 'Full Reference',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', overflowX: 'auto' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Full Reference — all sizes, all variants, primary color
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', width: '60px', flexShrink: 0 }}>{s}</span>
            {variants.map(v => (
              <Button key={v} variant={v} size={s}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
}
