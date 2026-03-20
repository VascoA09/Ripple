import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox, CheckboxGroup } from './Checkbox'
import type { CheckboxProps } from './Checkbox'

// ---------------------------------------------------------------------------

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
  argTypes: {
    validation: { control: 'select', options: [undefined, 'positive', 'notice', 'negative'] },
  },
}

export default meta
type Story = StoryObj<CheckboxProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Send me product updates',
  },
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Unselected (default)"                        defaultChecked={false} />
      <Checkbox label="Selected"                                    defaultChecked />
      <Checkbox label="Indeterminate"         indeterminate         defaultChecked={false} />
      <Checkbox label="Disabled unselected"   disabled              defaultChecked={false} />
      <Checkbox label="Disabled selected"     disabled              defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate defaultChecked={false} />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

export const Validation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['positive', 'notice', 'negative'] as const).map(v => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: 0 }}>
            validation=&quot;{v}&quot;
          </p>
          <Checkbox label="Unselected with validation"  validation={v}                   />
          <Checkbox label="Selected with validation"    validation={v} defaultChecked    />
          <Checkbox label="Indeterminate with validation" validation={v} indeterminate   />
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Without label
// ---------------------------------------------------------------------------

export const NoLabel: Story = {
  name: 'Without Label',
  args: {
    'aria-label': 'Select row',
    defaultChecked: false,
  },
}

// ---------------------------------------------------------------------------
// Checkbox Group
// ---------------------------------------------------------------------------

export const Group: Story = {
  name: 'Checkbox Group',
  render: () => (
    <CheckboxGroup legend="Notification preferences" required hint="Select all that apply.">
      <Checkbox label="Email notifications"  defaultChecked />
      <Checkbox label="Push notifications"   defaultChecked />
      <Checkbox label="SMS notifications"                   />
      <Checkbox label="Weekly digest email"                 />
    </CheckboxGroup>
  ),
}

// ---------------------------------------------------------------------------
// Group with validation
// ---------------------------------------------------------------------------

export const GroupWithValidation: Story = {
  name: 'Group — Validation Error',
  render: () => (
    <CheckboxGroup
      legend="Terms and conditions"
      required
      validation="negative"
      validationMessage="You must accept all terms to continue."
    >
      <Checkbox label="I agree to the Terms of Service" validation="negative" />
      <Checkbox label="I agree to the Privacy Policy"   validation="negative" />
    </CheckboxGroup>
  ),
}

// ---------------------------------------------------------------------------
// Indeterminate — "select all" pattern
// ---------------------------------------------------------------------------

export const SelectAll: Story = {
  name: 'Select All (Indeterminate)',
  render: () => {
    const options = ['Analytics', 'Marketing', 'Support', 'Product']
    const [selected, setSelected] = useState<Set<string>>(new Set(['Analytics']))

    const allSelected  = selected.size === options.length
    const someSelected = selected.size > 0 && selected.size < options.length

    const toggleAll = () => {
      setSelected(allSelected ? new Set() : new Set(options))
    }

    const toggle = (option: string) => {
      setSelected(prev => {
        const next = new Set(prev)
        next.has(option) ? next.delete(option) : next.add(option)
        return next
      })
    }

    return (
      <CheckboxGroup legend="Data sharing" hint="Choose which teams can access your data.">
        <Checkbox
          label="All teams"
          checked={allSelected}
          indeterminate={someSelected}
          onChange={toggleAll}
        />
        <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {options.map(opt => (
            <Checkbox
              key={opt}
              label={opt}
              checked={selected.has(opt)}
              onChange={() => toggle(opt)}
            />
          ))}
        </div>
      </CheckboxGroup>
    )
  },
}
