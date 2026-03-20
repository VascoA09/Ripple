import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from './Radio'
import type { RadioGroupProps } from './Radio'

// ---------------------------------------------------------------------------

const meta: Meta<RadioGroupProps> = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<RadioGroupProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('standard')
    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
        label="Shipping method"
      >
        <Radio value="standard"  label="Standard shipping (5–7 days)" />
        <Radio value="express"   label="Express shipping (2–3 days)" />
        <Radio value="overnight" label="Overnight shipping (1 day)" />
      </RadioGroup>
    )
  },
}

// ---------------------------------------------------------------------------
// With description
// ---------------------------------------------------------------------------

export const WithDescription: Story = {
  name: 'With Description',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
        label="Notification preferences"
        description="Choose how you'd like to receive updates about your account."
      >
        <Radio value="all"       label="All notifications" />
        <Radio value="important" label="Important only" />
        <Radio value="none"      label="None" />
      </RadioGroup>
    )
  },
}

// ---------------------------------------------------------------------------
// With hint
// ---------------------------------------------------------------------------

export const WithHint: Story = {
  name: 'With Hint',
  render: () => {
    const [value, setValue] = useState('weekly')
    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
        label="Email frequency"
        hint="You can change this preference at any time in your account settings."
      >
        <Radio value="daily"  label="Daily digest" />
        <Radio value="weekly" label="Weekly summary" />
        <Radio value="never"  label="Never" />
      </RadioGroup>
    )
  },
}

// ---------------------------------------------------------------------------
// Required
// ---------------------------------------------------------------------------

export const Required: Story = {
  name: 'Required',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <RadioGroup
        value={value}
        onValueChange={setValue}
        label="Payment method"
        required
      >
        <Radio value="credit" label="Credit card" />
        <Radio value="paypal" label="PayPal" />
        <Radio value="bank"   label="Bank transfer" />
      </RadioGroup>
    )
  },
}

// ---------------------------------------------------------------------------
// Inline layout
// ---------------------------------------------------------------------------

export const InlineLayout: Story = {
  name: 'Inline Layout',
  render: () => {
    const [value, setValue] = useState('yes')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <RadioGroup
          value={value}
          onValueChange={setValue}
          label="Are you sure?"
          layout="inline"
        >
          <Radio value="yes" label="Yes" />
          <Radio value="no"  label="No" />
        </RadioGroup>

        <RadioGroup
          value="grid"
          onValueChange={() => {}}
          label="View mode"
          layout="inline"
        >
          <Radio value="list"  label="List" />
          <Radio value="grid"  label="Grid" />
          <Radio value="table" label="Table" />
        </RadioGroup>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Validation states
// ---------------------------------------------------------------------------

export const ValidationStates: Story = {
  name: 'Validation States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '360px' }}>
      <RadioGroup
        value="credit"
        onValueChange={() => {}}
        label="Payment method"
        validation="positive"
        validationMessage="Great choice — payments are processed instantly."
      >
        <Radio value="credit" label="Credit card" />
        <Radio value="paypal" label="PayPal" />
      </RadioGroup>

      <RadioGroup
        value="basic"
        onValueChange={() => {}}
        label="Plan"
        validation="notice"
        validationMessage="The basic plan has limited features. Consider upgrading."
      >
        <Radio value="basic"      label="Basic" />
        <Radio value="pro"        label="Pro" />
        <Radio value="enterprise" label="Enterprise" />
      </RadioGroup>

      <RadioGroup
        value=""
        onValueChange={() => {}}
        label="Shipping method"
        required
        validation="negative"
        validationMessage="Please select a shipping method to continue."
      >
        <Radio value="standard"  label="Standard shipping" />
        <Radio value="express"   label="Express shipping" />
        <Radio value="overnight" label="Overnight shipping" />
      </RadioGroup>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled states
// ---------------------------------------------------------------------------

export const DisabledStates: Story = {
  name: 'Disabled States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '360px' }}>
      {/* Group-level disabled */}
      <RadioGroup
        value="express"
        onValueChange={() => {}}
        label="Shipping method (group disabled)"
        disabled
      >
        <Radio value="standard"  label="Standard shipping" />
        <Radio value="express"   label="Express shipping" />
        <Radio value="overnight" label="Overnight shipping" />
      </RadioGroup>

      {/* Individual items disabled */}
      <RadioGroup
        value="pro"
        onValueChange={() => {}}
        label="Select plan"
      >
        <Radio value="free"       label="Free" />
        <Radio value="pro"        label="Pro" />
        <Radio value="enterprise" label="Enterprise (contact sales)" disabled />
      </RadioGroup>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// No label (bare group — e.g. inside a form with surrounding context)
// ---------------------------------------------------------------------------

export const WithoutLabel: Story = {
  name: 'Without Group Label',
  render: () => {
    const [value, setValue] = useState('asc')
    return (
      <RadioGroup value={value} onValueChange={setValue} layout="inline">
        <Radio value="asc"  label="A → Z" />
        <Radio value="desc" label="Z → A" />
      </RadioGroup>
    )
  },
}

// ---------------------------------------------------------------------------
// Full form example
// ---------------------------------------------------------------------------

export const FormExample: Story = {
  name: 'Form Example',
  render: () => {
    const [shipping, setShipping]   = useState('express')
    const [payment, setPayment]     = useState('')
    const [submitted, setSubmitted] = useState(false)

    const paymentError = submitted && !payment
      ? 'Please select a payment method to continue.'
      : undefined

    return (
      <form
        onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
        style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           '32px',
          maxWidth:      '400px',
          fontFamily:    'var(--font-family-base)',
        }}
      >
        <RadioGroup
          value={shipping}
          onValueChange={setShipping}
          label="Shipping method"
          description="Estimated delivery times are based on business days."
          hint="Free shipping on orders over £50."
        >
          <Radio value="standard"  label="Standard shipping (5–7 days)" />
          <Radio value="express"   label="Express shipping (2–3 days)" />
          <Radio value="overnight" label="Overnight shipping (1 day)" />
        </RadioGroup>

        <RadioGroup
          value={payment}
          onValueChange={setPayment}
          label="Payment method"
          required
          validation={paymentError ? 'negative' : undefined}
          validationMessage={paymentError}
        >
          <Radio value="credit" label="Credit card" />
          <Radio value="paypal" label="PayPal" />
          <Radio value="bank"   label="Bank transfer" />
        </RadioGroup>

        <button
          type="submit"
          style={{
            alignSelf:    'flex-start',
            padding:      '10px 20px',
            background:   'var(--bg-primary)',
            color:        'var(--text-on-fill)',
            border:       'none',
            borderRadius: '8px',
            fontFamily:   'inherit',
            fontSize:     '14px',
            fontWeight:   600,
            cursor:       'pointer',
          }}
        >
          Continue
        </button>
      </form>
    )
  },
}

// ---------------------------------------------------------------------------
// All states at a glance
// ---------------------------------------------------------------------------

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
      {/* Labels showing each state */}
      {[
        { label: 'Unselected',         checked: false, disabled: false },
        { label: 'Selected',           checked: true,  disabled: false },
        { label: 'Disabled unselected',checked: false, disabled: true  },
        { label: 'Disabled selected',  checked: true,  disabled: true  },
      ].map(({ label, checked, disabled }) => (
        <RadioGroup
          key={label}
          value={checked ? 'opt' : ''}
          onValueChange={() => {}}
          disabled={disabled}
        >
          <Radio value="opt" label={label} />
        </RadioGroup>
      ))}
    </div>
  ),
}
