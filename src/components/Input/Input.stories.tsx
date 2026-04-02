import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Mail, User, Lock, DollarSign, Globe } from 'lucide-react'
import { Input } from './Input'
import type { InputProps } from './Input'

// ---------------------------------------------------------------------------

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<InputProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '400px' }}>
        <Input
          label="Full name"
          placeholder="e.g., Jane Smith"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="Small"           size="small"  placeholder="Small input"  />
      <Input label="Medium (default)" size="medium" placeholder="Medium input" />
      <Input label="Large"           size="large"  placeholder="Large input"  />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With hint
// ---------------------------------------------------------------------------

export const WithHint: Story = {
  name: 'With Hint',
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Input
        label="Email address"
        type="email"
        placeholder="e.g., jane@example.com"
        hint="We'll only use this to send account notifications."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Required
// ---------------------------------------------------------------------------

export const Required: Story = {
  name: 'Required',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Email address"
        type="email"
        placeholder="e.g., jane@example.com"
        hint="Required to create your account."
        required
      />
      <Input
        label="Username"
        placeholder="3–20 characters"
        hint="Letters, numbers, and underscores only."
        required
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export const InputTypes: Story = {
  name: 'Input Types',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="Text"      type="text"     placeholder="General text"          />
      <Input label="Email"     type="email"    placeholder="e.g., jane@example.com" />
      <Input label="URL"       type="url"      placeholder="https://example.com"   />
      <Input label="Telephone" type="tel"      placeholder="+1 (555) 123-4567"     />
      <Input label="Number"    type="number"   placeholder="0"                     />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Password
// ---------------------------------------------------------------------------

export const Password: Story = {
  name: 'Password',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '400px' }}>
        <Input
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          hint="Must include at least one number and one special character."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export const Search: Story = {
  name: 'Search',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '400px' }}>
        <Input
          label="Search"
          hideLabel
          type="search"
          placeholder="Search employees..."
          value={value}
          onChange={e => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Email"
        type="email"
        placeholder="e.g., jane@example.com"
        iconStart={<Mail size={16} />}
      />
      <Input
        label="Username"
        placeholder="your_username"
        iconStart={<User size={16} />}
      />
      <Input
        label="Website"
        type="url"
        placeholder="https://example.com"
        iconStart={<Globe size={16} />}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Prefix and suffix
// ---------------------------------------------------------------------------

export const PrefixSuffix: Story = {
  name: 'Prefix / Suffix',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Price"
        type="number"
        placeholder="0.00"
        prefix={<DollarSign size={14} />}
        hint="Enter the price in USD."
      />
      <Input
        label="Domain"
        placeholder="yoursite"
        suffix=".com"
      />
      <Input
        label="Twitter handle"
        placeholder="username"
        prefix="@"
      />
      <Input
        label="Weight"
        type="number"
        placeholder="0"
        suffix="kg"
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Prefix + suffix with validation
// ---------------------------------------------------------------------------

export const PrefixValidation: Story = {
  name: 'Prefix / Suffix + Validation',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Price"
        type="number"
        value=""
        onChange={() => {}}
        prefix="$"
        validation="negative"
        validationMessage="Price is required."
      />
      <Input
        label="Price"
        type="number"
        value="299"
        onChange={() => {}}
        prefix="$"
        validation="positive"
        validationMessage="Price looks good."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Character counter
// ---------------------------------------------------------------------------

export const CharacterCounter: Story = {
  name: 'Character Counter',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '400px' }}>
        <Input
          label="Username"
          placeholder="3–20 characters"
          hint="Letters, numbers, and underscores only."
          maxLength={20}
          showCounter
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Validation states
// ---------------------------------------------------------------------------

export const Validation: Story = {
  name: 'Validation States',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Email address"
        value="not-an-email"
        onChange={() => {}}
        validation="negative"
        validationMessage="Please enter a valid email address."
      />
      <Input
        label="Website"
        value="https://example"
        onChange={() => {}}
        validation="notice"
        validationMessage="The URL appears incomplete. Did you mean https://example.com?"
      />
      <Input
        label="Email address"
        value="jane@example.com"
        onChange={() => {}}
        validation="positive"
        validationMessage="Email address is valid."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Live validation
// ---------------------------------------------------------------------------

export const LiveValidation: Story = {
  name: 'Live Validation',
  render: () => {
    const [value, setValue] = useState('')

    const isTooShort = value.length > 0 && value.length < 8
    const isValid   = value.length >= 8

    return (
      <div style={{ maxWidth: '400px' }}>
        <Input
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          hint="Must be at least 8 characters."
          value={value}
          onChange={e => setValue(e.target.value)}
          validation={isTooShort ? 'negative' : isValid ? 'positive' : undefined}
          validationMessage={
            isTooShort ? `Password must be at least 8 characters (${value.length}/8).` :
            isValid    ? 'Password meets the requirements.' :
            undefined
          }
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Email address"
        value="jane@example.com"
        onChange={() => {}}
        hint="Contact your admin to change this."
        disabled
      />
      <Input
        label="Price"
        value="299"
        onChange={() => {}}
        prefix="$"
        suffix=".00"
        disabled
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Read-only
// ---------------------------------------------------------------------------

export const ReadOnly: Story = {
  name: 'Read Only',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Account ID"
        value="ACC-2024-00847"
        onChange={() => {}}
        hint="This identifier is assigned automatically and cannot be changed."
        readOnly
      />
      <Input
        label="API endpoint"
        value="https://api.unit4.com/v2"
        onChange={() => {}}
        prefix={<Lock size={14} />}
        readOnly
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Hidden label
// ---------------------------------------------------------------------------

export const HiddenLabel: Story = {
  name: 'Hidden Label',
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Input
        label="Search"
        hideLabel
        type="search"
        placeholder="Search..."
      />
    </div>
  ),
}
