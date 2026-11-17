import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ButtonGroup } from './ButtonGroup'
import type { ButtonGroupProps } from './ButtonGroup'
import { ToggleButton } from '../ToggleButton'
import { Button } from '../Button'
import { ZoomIn, ZoomOut, Table2, LayoutGrid, Image } from '../../icons'

// ---------------------------------------------------------------------------
// Spec: components/button-group.md 0.1.0. All data fictional.
// ---------------------------------------------------------------------------

const meta: Meta<ButtonGroupProps> = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  parameters: { layout: 'centered' },
  argTypes: {
    selection:   { control: 'select', options: ['action', 'single', 'multiple'] },
    size:        { control: 'select', options: ['xsmall', 'small', 'medium', 'large'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    padded:      { control: 'boolean' },
    disabled:    { control: 'boolean' },
    legendVisible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<ButtonGroupProps>

const caption = { fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' } as const
const column  = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-100)' } as const
const row     = { display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-200)' } as const

// ---------------------------------------------------------------------------
// Default: single selection, interactive via controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: { selection: 'single', legend: 'Timesheet view', defaultValue: 'list', size: 'small', padded: true },
  render: args => (
    <ButtonGroup {...args}>
      <ToggleButton value="list">List</ToggleButton>
      <ToggleButton value="grid">Grid</ToggleButton>
      <ToggleButton value="calendar">Calendar</ToggleButton>
    </ButtonGroup>
  ),
}

// ---------------------------------------------------------------------------
// Modes
// ---------------------------------------------------------------------------

function SingleDemo() {
  const [view, setView] = useState<string>('list')
  return (
    <div style={column}>
      <ButtonGroup selection="single" legend="Timesheet view" value={view} onChange={v => setView(v as string)} size="small" padded>
        <ToggleButton value="list">List</ToggleButton>
        <ToggleButton value="grid">Grid</ToggleButton>
        <ToggleButton value="calendar">Calendar</ToggleButton>
      </ButtonGroup>
      <span style={caption} aria-live="polite">value = "{view}"</span>
    </div>
  )
}

export const Single: Story = { name: 'Mode: single (controlled)', render: () => <SingleDemo /> }

function MultipleDemo() {
  const [status, setStatus] = useState<string[]>(['draft', 'approved'])
  return (
    <div style={column}>
      <ButtonGroup selection="multiple" legend="Expense status" value={status} onChange={v => setStatus(v as string[])} size="small" padded>
        <ToggleButton value="draft">Draft</ToggleButton>
        <ToggleButton value="submitted">Submitted</ToggleButton>
        <ToggleButton value="approved">Approved</ToggleButton>
        <ToggleButton value="rejected">Rejected</ToggleButton>
      </ButtonGroup>
      <span style={caption} aria-live="polite">value = [{status.join(', ')}]</span>
    </div>
  )
}

export const Multiple: Story = { name: 'Mode: multiple (controlled)', render: () => <MultipleDemo /> }

function ActionDemo() {
  const [zoom, setZoom] = useState(100)
  return (
    <div style={column}>
      <ButtonGroup selection="action" legend="Document zoom">
        <Button variant="ghost" color="neutral" size="small" aria-label="Zoom out" iconStart={<ZoomOut size={16} />} onClick={() => setZoom(z => Math.max(50, z - 10))} />
        <Button variant="ghost" color="neutral" size="small" aria-label="Zoom in" iconStart={<ZoomIn size={16} />} onClick={() => setZoom(z => Math.min(200, z + 10))} />
      </ButtonGroup>
      <span style={caption} aria-live="polite">Zoom: {zoom}%</span>
    </div>
  )
}

export const Action: Story = { name: 'Mode: action', render: () => <ActionDemo /> }

// ---------------------------------------------------------------------------
// Variants: padded / unpadded on white and tinted surfaces
// ---------------------------------------------------------------------------

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={row}>
      {[
        { label: 'padded, white surface', padded: true, bg: 'var(--background-surface)' },
        { label: 'padded, tinted surface', padded: true, bg: 'var(--background-app)' },
        { label: 'unpadded, tinted surface', padded: false, bg: 'var(--background-app)' },
      ].map((v, i) => (
        <div key={v.label} style={{ ...column, padding: 'var(--spacing-150)', background: v.bg, borderRadius: 'var(--border-radius-container-default)' }}>
          <span style={caption}>{v.label}</span>
          <ButtonGroup selection="single" legend={`View ${i + 1}`} defaultValue="list" padded={v.padded}>
            <ToggleButton value="list">List</ToggleButton>
            <ToggleButton value="grid">Grid</ToggleButton>
          </ButtonGroup>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={column}>
      {(['xsmall', 'small', 'medium', 'large'] as const).map(size => (
        <ButtonGroup key={size} selection="single" legend={`View, ${size}`} defaultValue="list" size={size} padded>
          <ToggleButton value="list">List</ToggleButton>
          <ToggleButton value="grid">Grid</ToggleButton>
        </ButtonGroup>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Orientation and visible legend
// ---------------------------------------------------------------------------

export const Vertical: Story = {
  name: 'Orientation: vertical, visible legend',
  render: () => (
    <ButtonGroup selection="single" legend="Period" legendVisible orientation="vertical" defaultValue="week" size="small" padded>
      <ToggleButton value="day">Day</ToggleButton>
      <ToggleButton value="week">Week</ToggleButton>
      <ToggleButton value="month">Month</ToggleButton>
    </ButtonGroup>
  ),
}

// ---------------------------------------------------------------------------
// Icon-only children
// ---------------------------------------------------------------------------

export const IconOnly: Story = {
  name: 'Icon-only children',
  render: () => (
    <ButtonGroup selection="single" legend="Layout" defaultValue="table" size="small" padded>
      <ToggleButton value="table" icon={<Table2 size={16} />} aria-label="Table" />
      <ToggleButton value="cards" icon={<LayoutGrid size={16} />} aria-label="Cards" />
      <ToggleButton value="gallery" icon={<Image size={16} />} aria-label="Gallery" />
    </ButtonGroup>
  ),
}

// ---------------------------------------------------------------------------
// States: group disabled, one child disabled
// ---------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <div style={column}>
      <span style={caption}>group disabled (fieldset disabled)</span>
      <ButtonGroup selection="single" legend="View, locked" defaultValue="list" padded disabled>
        <ToggleButton value="list">List</ToggleButton>
        <ToggleButton value="grid">Grid</ToggleButton>
      </ButtonGroup>
      <span style={caption}>one child disabled</span>
      <ButtonGroup selection="multiple" legend="Status" defaultValue={['draft']} padded>
        <ToggleButton value="draft">Draft</ToggleButton>
        <ToggleButton value="approved" disabled>Approved</ToggleButton>
        <ToggleButton value="rejected">Rejected</ToggleButton>
      </ButtonGroup>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Dark theme
// ---------------------------------------------------------------------------

export const DarkTheme: Story = {
  name: 'Dark theme',
  globals: { theme: 'dark' },
  render: () => (
    <div style={column}>
      <ButtonGroup selection="single" legend="View, dark" defaultValue="list" size="small" padded>
        <ToggleButton value="list">List</ToggleButton>
        <ToggleButton value="grid">Grid</ToggleButton>
      </ButtonGroup>
      <ButtonGroup selection="multiple" legend="Status, dark" defaultValue={['draft']} size="small">
        <ToggleButton value="draft">Draft</ToggleButton>
        <ToggleButton value="approved">Approved</ToggleButton>
      </ButtonGroup>
    </div>
  ),
}
