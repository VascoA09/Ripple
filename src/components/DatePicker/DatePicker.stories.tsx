import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Plane, Hotel } from 'lucide-react'
import { DatePicker } from './DatePicker'
import type { DatePickerProps } from './DatePicker'

// ---------------------------------------------------------------------------

const meta: Meta<DatePickerProps> = {
  title:     'Components/DatePicker',
  component: DatePicker,
  parameters: { layout: 'padded' },
  argTypes: {
    size:       { control: 'radio', options: ['small', 'medium', 'large'] },
    validation: { control: 'radio', options: ['positive', 'notice', 'negative', undefined] },
  },
}

export default meta
type Story = StoryObj<DatePickerProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Date',
    hint:  'Select or type a date in DD/MM/YYYY format.',
  },
}

// ---------------------------------------------------------------------------
// Controlled
// ---------------------------------------------------------------------------

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('2026-03-15')
    return (
      <DatePicker
        label="Start date"
        value={value}
        onChange={setValue}
        hint={`ISO value: ${value}`}
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
      <DatePicker label="Small"  size="small"  hint="32px" />
      <DatePicker label="Medium" size="medium" hint="40px — default" />
      <DatePicker label="Large"  size="large"  hint="48px" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Clearable
// ---------------------------------------------------------------------------

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('2026-04-01')
    return (
      <DatePicker
        label="Absence start"
        value={value}
        onChange={setValue}
        clearable
        hint="Click the × to clear."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Custom icon — travel context
// ---------------------------------------------------------------------------

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <DatePicker
        label="Outbound date"
        value="2026-05-12"
        iconStart={<Plane size={16} />}
      />
      <DatePicker
        label="Check-in date"
        value="2026-05-12"
        iconStart={<Hotel size={16} />}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With week numbers
// ---------------------------------------------------------------------------

export const WeekNumbers: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <DatePicker
        label="Pay period start"
        value={value || undefined}
        onChange={setValue}
        showWeekNumbers
        hint="Week numbers shown for reference."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Disable past
// ---------------------------------------------------------------------------

export const DisablePast: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <DatePicker
        label="Appointment date"
        value={value || undefined}
        onChange={setValue}
        disablePast
        hint="Only future dates are selectable."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Disable future
// ---------------------------------------------------------------------------

export const DisableFuture: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <DatePicker
        label="Date of birth"
        value={value || undefined}
        onChange={setValue}
        disableFuture
        hint="Only past dates are selectable."
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
      <DatePicker
        label="Invoice date"
        value="2026-03-15"
        validation="positive"
        validationMessage="Date is within the current financial period."
      />
      <DatePicker
        label="Invoice date"
        value="2026-03-28"
        validation="notice"
        validationMessage="Close to the period close date (31 March)."
      />
      <DatePicker
        label="Invoice date"
        value="2025-12-01"
        validation="negative"
        validationMessage="Date falls outside the current financial year."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    label:    'Contract end date',
    value:    '2026-12-31',
    disabled: true,
    hint:     'Date is locked by the contract.',
  },
}

// ---------------------------------------------------------------------------
// Read-only
// ---------------------------------------------------------------------------

export const ReadOnly: Story = {
  args: {
    label:    'System date',
    value:    '2026-03-31',
    readOnly: true,
    hint:     'Automatically set by the system.',
  },
}

// ---------------------------------------------------------------------------
// Date range — two DatePickers assembled
// ---------------------------------------------------------------------------

export const DateRange: Story = {
  name: 'Date Range (assembled)',
  render: () => {
    const [start, setStart] = useState('2026-04-07')
    const [end,   setEnd]   = useState('2026-04-11')
    return (
      <div style={{ display: 'flex', gap: 16, maxWidth: 640, alignItems: 'flex-start' }}>
        <DatePicker
          label="From"
          value={start}
          onChange={val => { setStart(val); if (end && val > end) setEnd('') }}
          clearable
        />
        <DatePicker
          label="To"
          value={end}
          onChange={setEnd}
          minDate={start || undefined}
          clearable
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Without footer
// ---------------------------------------------------------------------------

export const NoFooter: Story = {
  args: {
    label:      'Date',
    showFooter: false,
    hint:       'Calendar has no Today / Clear footer.',
  },
}

// ---------------------------------------------------------------------------
// Hidden label
// ---------------------------------------------------------------------------

export const HiddenLabel: Story = {
  args: {
    label:     'Start date',
    hideLabel: true,
    value:     '2026-03-31',
  },
}
