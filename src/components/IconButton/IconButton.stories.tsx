import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Trash2, Settings, Search, X, Download, Edit3 } from 'lucide-react'
import { IconButton } from './IconButton'
import type { IconButtonProps } from './IconButton'

// ---------------------------------------------------------------------------

const meta: Meta<IconButtonProps> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  argTypes: {
    variant:  { control: 'select', options: ['fill', 'outline', 'ghost'] },
    size:     { control: 'select', options: ['xsmall', 'small', 'medium', 'large'] },
    color:   { control: 'select', options: ['primary', 'neutral', 'negative'] },
    loading:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon:     { control: false },
  },
}

export default meta
type Story = StoryObj<IconButtonProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    icon: <Plus />,
    'aria-label': 'Add item',
    variant: 'fill',
    size: 'medium',
    color: 'primary',
  },
}

// ---------------------------------------------------------------------------
// Variants × Colors
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '16px', alignItems: 'center', justifyContent: 'start' }}>
        {colors.map(c => (
          <div key={c} style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', textAlign: 'center' }}>{c}</div>
        ))}
        {variants.map(v =>
          colors.map(c => (
            <div key={`${v}-${c}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IconButton icon={<Settings />} variant={v} color={c} aria-label={`Settings (${v} ${c})`} />
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
            <IconButton icon={<Plus />} size={s} aria-label={`Add item (${s})`} />
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
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
        <IconButton icon={<Plus />} aria-label="Add item" />
        <IconButton icon={<Plus />} aria-label="Adding item" loading />
        <IconButton icon={<Plus />} aria-label="Add item" disabled />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
        <IconButton icon={<Trash2 />} variant="ghost" color="negative" aria-label="Delete item" />
        <IconButton icon={<Trash2 />} variant="ghost" color="negative" aria-label="Deleting item" loading />
        <IconButton icon={<Trash2 />} variant="ghost" color="negative" aria-label="Delete item" disabled />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Common Icons
// ---------------------------------------------------------------------------

export const CommonIcons: Story = {
  name: 'Common Icons',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Common patterns
      </p>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <IconButton icon={<Plus />}     variant="fill"    color="primary"  aria-label="Add" />
        <IconButton icon={<Search />}   variant="ghost"   color="neutral"  aria-label="Search" />
        <IconButton icon={<Edit3 />}    variant="outline" color="neutral"  aria-label="Edit" />
        <IconButton icon={<Download />} variant="ghost"   color="neutral"  aria-label="Download" />
        <IconButton icon={<Settings />} variant="ghost"   color="neutral"  aria-label="Settings" />
        <IconButton icon={<X />}        variant="ghost"   color="neutral"  aria-label="Close" />
        <IconButton icon={<Trash2 />}   variant="ghost"   color="negative" aria-label="Delete" />
      </div>
    </div>
  ),
}
