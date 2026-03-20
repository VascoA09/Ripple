import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tag, Globe, Star, Zap, Filter, User } from 'lucide-react'
import { Chip, ChipGroup } from './Chip'
import type { ChipProps } from './Chip'

// ---------------------------------------------------------------------------

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'radio',  options: ['selectable', 'removable'] },
    size:    { control: 'radio',  options: ['small', 'medium'] },
  },
}

export default meta
type Story = StoryObj<ChipProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label:   'Design system',
    variant: 'selectable',
    size:    'medium',
  },
}

// ---------------------------------------------------------------------------
// Selectable
// ---------------------------------------------------------------------------

export const Selectable: Story = {
  name: 'Selectable — states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip label="Unselected"          variant="selectable"                   />
        <Chip label="Selected"            variant="selectable" defaultSelected   />
        <Chip label="Disabled"            variant="selectable" disabled          />
        <Chip label="Disabled selected"   variant="selectable" disabled defaultSelected />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Selectable — sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['small', 'medium'] as const).map(size => (
        <div key={size}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
            size=&quot;{size}&quot;{size === 'small' ? ' — desktop only' : ''}
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Chip label="Unselected"  variant="selectable" size={size} />
            <Chip label="Selected"    variant="selectable" size={size} defaultSelected />
          </div>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Selectable — with icons and counter
// ---------------------------------------------------------------------------

export const SelectableWithExtras: Story = {
  name: 'Selectable — with Icon & Counter',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Filters" variant="selectable" icon={<Filter size={16} />} />
      <Chip label="Users"   variant="selectable" icon={<User size={16} />}   count={24} defaultSelected />
      <Chip label="Tags"    variant="selectable" icon={<Tag size={16} />}    count={7}  />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Removable
// ---------------------------------------------------------------------------

export const Removable: Story = {
  name: 'Removable — states',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Design"       variant="removable" onRemove={() => alert('Remove: Design')}     />
      <Chip label="Engineering"  variant="removable" onRemove={() => alert('Remove: Engineering')} />
      <Chip label="Disabled"     variant="removable" disabled                                      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Removable — with icons
// ---------------------------------------------------------------------------

export const RemovableWithIcon: Story = {
  name: 'Removable — with Icon',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Amsterdam"  variant="removable" icon={<Globe size={16} />} onRemove={() => {}} />
      <Chip label="Priority"   variant="removable" icon={<Star  size={16} />} onRemove={() => {}} />
      <Chip label="Fast track" variant="removable" icon={<Zap   size={16} />} onRemove={() => {}} />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Removable — live remove pattern
// ---------------------------------------------------------------------------

export const LiveRemove: Story = {
  name: 'Removable — Live Remove',
  render: () => {
    const initial = ['Design', 'Engineering', 'Research', 'Marketing', 'Finance']
    const [chips, setChips] = useState(initial)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ChipGroup aria-label="Active filters">
          {chips.map(chip => (
            <Chip
              key={chip}
              label={chip}
              variant="removable"
              onRemove={() => setChips(prev => prev.filter(c => c !== chip))}
            />
          ))}
        </ChipGroup>
        {chips.length === 0 && (
          <p style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', color: 'var(--text-soft)', margin: 0 }}>
            All filters cleared.{' '}
            <button
              style={{ all: 'unset', color: 'var(--color-primary-loud)', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => setChips(initial)}
            >
              Reset
            </button>
          </p>
        )}
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Multi-select filter group
// ---------------------------------------------------------------------------

export const FilterGroup: Story = {
  name: 'Multi-Select Filter Group',
  render: () => {
    const options = ['All', 'Active', 'Draft', 'Archived', 'Pending review']
    const [selected, setSelected] = useState<Set<string>>(new Set(['Active']))

    const toggle = (opt: string) => {
      setSelected(prev => {
        const next = new Set(prev)
        next.has(opt) ? next.delete(opt) : next.add(opt)
        return next
      })
    }

    return (
      <ChipGroup aria-label="Filter by status" gap="loose">
        {options.map(opt => (
          <Chip
            key={opt}
            label={opt}
            variant="selectable"
            selected={selected.has(opt)}
            onChange={() => toggle(opt)}
          />
        ))}
      </ChipGroup>
    )
  },
}
