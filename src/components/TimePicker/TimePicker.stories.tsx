import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker } from './TimePicker'
import type { TimePickerProps } from './TimePicker'

// ---------------------------------------------------------------------------

const meta: Meta<TimePickerProps> = {
  title:     'Components/TimePicker',
  component: TimePicker,
  parameters: { layout: 'padded' },
  argTypes: {
    size:       { control: 'radio', options: ['small', 'medium', 'large'] },
    hourCycle:  { control: 'radio', options: [12, 24] },
    validation: { control: 'radio', options: ['positive', 'notice', 'negative', undefined] },
  },
}

export default meta
type Story = StoryObj<TimePickerProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Meeting time',
    hint:  'Select the time in 24-hour format.',
  },
}

// ---------------------------------------------------------------------------
// Controlled
// ---------------------------------------------------------------------------

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('09:30')
    return (
      <TimePicker
        label="Start time"
        value={value}
        onChange={setValue}
        hint={`Current value: ${value}`}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <TimePicker label="Small"  size="small"  hint="32px height" />
      <TimePicker label="Medium" size="medium" hint="40px height — default" />
      <TimePicker label="Large"  size="large"  hint="48px height" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// 12-hour cycle
// ---------------------------------------------------------------------------

export const TwelveHour: Story = {
  render: () => {
    const [value, setValue] = useState('14:30')
    return (
      <TimePicker
        label="Appointment time"
        value={value}
        onChange={setValue}
        hourCycle={12}
        hint={`24h output: ${value}`}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// With seconds
// ---------------------------------------------------------------------------

export const WithSeconds: Story = {
  render: () => {
    const [value, setValue] = useState('08:00:00')
    return (
      <TimePicker
        label="Exact start time"
        value={value}
        onChange={setValue}
        showSeconds
        hint="Seconds are required for this field."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Clearable
// ---------------------------------------------------------------------------

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('10:00')
    return (
      <TimePicker
        label="Departure time"
        value={value}
        onChange={setValue}
        clearable
        hint="Select or clear the time."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Validation states
// ---------------------------------------------------------------------------

export const Validation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <TimePicker
        label="Shift start"
        value="08:00"
        validation="positive"
        validationMessage="Within the allowed shift window."
      />
      <TimePicker
        label="Shift start"
        value="06:00"
        validation="notice"
        validationMessage="Starts before 7:00 — confirm with your manager."
      />
      <TimePicker
        label="Shift start"
        value="03:00"
        validation="negative"
        validationMessage="Outside the allowed shift window (07:00–23:00)."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    label:    'Locked time',
    value:    '14:00',
    disabled: true,
    hint:     'This field is not editable.',
  },
}

// ---------------------------------------------------------------------------
// Read-only
// ---------------------------------------------------------------------------

export const ReadOnly: Story = {
  args: {
    label:    'Confirmed time',
    value:    '09:30',
    readOnly: true,
    hint:     'Time has been confirmed and cannot be changed.',
  },
}

// ---------------------------------------------------------------------------
// Hidden label (for use inside data grids / inline contexts)
// ---------------------------------------------------------------------------

export const HiddenLabel: Story = {
  args: {
    label:     'Start time',
    hideLabel: true,
    value:     '07:45',
  },
}

// ---------------------------------------------------------------------------
// 12h with seconds + clearable (full configuration)
// ---------------------------------------------------------------------------

export const FullConfig: Story = {
  name: 'Full configuration',
  render: () => {
    const [value, setValue] = useState<string>('14:30:00')
    return (
      <div style={{ maxWidth: 320 }}>
        <TimePicker
          label="Precise event time"
          value={value}
          onChange={setValue}
          hourCycle={12}
          showSeconds
          clearable
          hint={`24h output: ${value}`}
        />
      </div>
    )
  },
}
