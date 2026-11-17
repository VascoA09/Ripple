import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ToggleButton, ToggleButtonGroupContext } from './ToggleButton'
import type { ToggleButtonProps, ToggleButtonGroupContextValue } from './ToggleButton'
import { Filter, Eye, Bookmark } from '../../icons'

// ---------------------------------------------------------------------------
// Spec: components/toggle-button.md 0.1.0
// Button Group is not built yet. The group stories use a minimal stand-in that
// provides ToggleButtonGroupContext inside a <fieldset>, which is what Button
// Group will render.
// ---------------------------------------------------------------------------

const meta: Meta<ToggleButtonProps> = {
  title: 'Components/Toggle Button',
  component: ToggleButton,
  parameters: { layout: 'centered' },
  argTypes: {
    size:     { control: 'select', options: ['xsmall', 'small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<ToggleButtonProps>

const caption = { fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' } as const
const column  = { display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)' } as const
const row     = { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--spacing-100)' } as const

function GroupStandIn({
  legend,
  children,
  ...ctx
}: ToggleButtonGroupContextValue & { legend: string; children: React.ReactNode }) {
  return (
    <ToggleButtonGroupContext.Provider value={ctx}>
      <fieldset
        style={{
          display: 'inline-flex', gap: 'var(--spacing-25)', padding: 'var(--spacing-25)', margin: 0,
          border: 'var(--border-width-100) solid var(--border-neutral)',
          borderRadius: 'var(--border-radius-container-default)',
        }}
      >
        <legend style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)' }}>
          {legend}
        </legend>
        {children}
      </fieldset>
    </ToggleButtonGroupContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// Default: interactive via controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: { children: 'Archived', size: 'medium', disabled: false },
}

// ---------------------------------------------------------------------------
// Variant content: label, icon + label, icon only (with tooltip)
// ---------------------------------------------------------------------------

export const Content: Story = {
  render: () => (
    <div style={row}>
      <ToggleButton>Archived</ToggleButton>
      <ToggleButton icon={<Filter size={16} />} defaultSelected>Filters</ToggleButton>
      <ToggleButton icon={<Eye size={16} />} aria-label="Show hidden columns" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={row}>
      <ToggleButton size="xsmall" defaultSelected>XSmall</ToggleButton>
      <ToggleButton size="small" defaultSelected>Small</ToggleButton>
      <ToggleButton size="medium" defaultSelected>Medium</ToggleButton>
      <ToggleButton size="large" defaultSelected>Large</ToggleButton>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// States (hover, pressed and focus are live: use the pointer and Tab)
// ---------------------------------------------------------------------------

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={column}>
      <span style={caption}>unselected</span>
      <ToggleButton>Archived</ToggleButton>
      <span style={caption}>selected</span>
      <ToggleButton defaultSelected>Archived</ToggleButton>
      <span style={caption}>disabled unselected</span>
      <ToggleButton disabled>Archived</ToggleButton>
      <span style={caption}>disabled selected</span>
      <ToggleButton disabled defaultSelected>Archived</ToggleButton>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Controlled
// ---------------------------------------------------------------------------

function ControlledDemo() {
  const [on, setOn] = useState(false)
  return (
    <div style={column}>
      <ToggleButton selected={on} onChange={e => setOn(e.target.checked)}>Show archived</ToggleButton>
      <span style={caption} aria-live="polite">selected: {String(on)}</span>
    </div>
  )
}

export const Controlled: Story = { render: () => <ControlledDemo /> }

// ---------------------------------------------------------------------------
// Single selection: radios with a shared name. Tab once, then arrow keys.
// ---------------------------------------------------------------------------

function SingleDemo() {
  const [view, setView] = useState('list')
  return (
    <div style={column}>
      <GroupStandIn legend="Project view" selection="single" name="project-view" size="small">
        {['List', 'Grid', 'Gallery'].map(v => (
          <ToggleButton
            key={v}
            value={v.toLowerCase()}
            selected={view === v.toLowerCase()}
            onChange={e => setView(e.target.value)}
          >
            {v}
          </ToggleButton>
        ))}
      </GroupStandIn>
      <span style={caption} aria-live="polite">Showing projects as: {view}</span>
    </div>
  )
}

export const SingleSelection: Story = { name: 'Group: single selection', render: () => <SingleDemo /> }

// ---------------------------------------------------------------------------
// Multiple selection: independent checkboxes
// ---------------------------------------------------------------------------

export const MultipleSelection: Story = {
  name: 'Group: multiple selection',
  render: () => (
    <GroupStandIn legend="Timesheet status" selection="multiple" size="small">
      <ToggleButton value="draft" defaultSelected>Draft</ToggleButton>
      <ToggleButton value="submitted" defaultSelected>Submitted</ToggleButton>
      <ToggleButton value="approved">Approved</ToggleButton>
      <ToggleButton value="archived">Archived</ToggleButton>
    </GroupStandIn>
  ),
}

// ---------------------------------------------------------------------------
// Icon-only toolbar with tooltips
// ---------------------------------------------------------------------------

export const IconOnlyToolbar: Story = {
  name: 'Icon-only toolbar',
  render: () => (
    <GroupStandIn legend="Grid display options" selection="multiple" size="small">
      <ToggleButton icon={<Filter size={16} />} aria-label="Show filters" defaultSelected />
      <ToggleButton icon={<Eye size={16} />} aria-label="Show hidden columns" />
      <ToggleButton icon={<Bookmark size={16} />} aria-label="Bookmarked only" />
    </GroupStandIn>
  ),
}

// ---------------------------------------------------------------------------
// Deprecated: groupName (logs a console warning)
// ---------------------------------------------------------------------------

export const DeprecatedGroupName: Story = {
  name: 'Deprecated: groupName',
  render: () => (
    <div style={row}>
      <ToggleButton groupName="legacy-view" defaultSelected>List</ToggleButton>
      <ToggleButton groupName="legacy-view">Grid</ToggleButton>
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
      <div style={row}>
        <ToggleButton>Archived</ToggleButton>
        <ToggleButton defaultSelected>Archived</ToggleButton>
        <ToggleButton disabled defaultSelected>Archived</ToggleButton>
      </div>
      <GroupStandIn legend="Project view" selection="single" name="dark-view" size="small">
        <ToggleButton value="list" defaultSelected>List</ToggleButton>
        <ToggleButton value="grid">Grid</ToggleButton>
      </GroupStandIn>
    </div>
  ),
}
