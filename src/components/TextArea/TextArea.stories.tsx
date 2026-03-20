import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TextArea } from './TextArea'
import type { TextAreaProps } from './TextArea'

// ---------------------------------------------------------------------------

const meta: Meta<TextAreaProps> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<TextAreaProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '480px' }}>
        <TextArea
          label="Feedback"
          placeholder="Share your thoughts and feedback..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With hint
// ---------------------------------------------------------------------------

export const WithHint: Story = {
  name: 'With Hint',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '480px' }}>
        <TextArea
          label="Message"
          placeholder="Enter your message here..."
          hint="Your message will be shared with our support team."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
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
      <div style={{ maxWidth: '480px' }}>
        <TextArea
          label="Description"
          placeholder="Describe the issue in detail..."
          hint="Provide specific details to help us understand the issue."
          required
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Rows
// ---------------------------------------------------------------------------

export const Rows: Story = {
  name: 'Row Heights',
  render: () => (
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextArea
        label="Short (3 rows — default)"
        placeholder="Brief comment..."
        rows={3}
      />
      <TextArea
        label="Medium (5 rows)"
        placeholder="Moderate description..."
        rows={5}
      />
      <TextArea
        label="Large (8 rows)"
        placeholder="Detailed feedback or long-form content..."
        rows={8}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Resize modes
// ---------------------------------------------------------------------------

export const ResizeModes: Story = {
  name: 'Resize Modes',
  render: () => (
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextArea
        label="Vertical resize (default)"
        hint="Drag the bottom-right corner to resize."
        resize="vertical"
        rows={3}
      />
      <TextArea
        label="No resize"
        hint="Height is fixed."
        resize="none"
        rows={3}
      />
      <TextArea
        label="Auto resize"
        hint="Field grows as you type, up to 200px."
        resize="auto"
        minHeight={72}
        maxHeight={200}
        rows={3}
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
    const [bio, setBio]         = useState('')
    const [message, setMessage] = useState('This is an example message that is already partially filled in.')

    return (
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <TextArea
          label="Bio"
          placeholder="Tell us about yourself..."
          hint="Keep it short and memorable."
          maxLength={160}
          showCounter
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <TextArea
          label="Tweet"
          placeholder="What's happening?"
          maxLength={280}
          showCounter
          value={message}
          onChange={e => setMessage(e.target.value)}
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
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextArea
        label="Error state"
        value="Too short."
        onChange={() => {}}
        validation="negative"
        validationMessage="Feedback must be at least 20 characters."
      />
      <TextArea
        label="Notice state"
        value="This information will be publicly visible on your profile."
        onChange={() => {}}
        validation="notice"
        validationMessage="This information will be publicly visible."
      />
      <TextArea
        label="Success state"
        value="Great feedback that clearly describes the issue with specific details."
        onChange={() => {}}
        validation="positive"
        validationMessage="Thank you for your detailed feedback."
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
    const isError   = value.length > 0 && value.length < 20
    const isSuccess = value.length >= 20

    return (
      <div style={{ maxWidth: '480px' }}>
        <TextArea
          label="Feedback"
          placeholder="Describe the issue in detail..."
          hint="Minimum 20 characters required."
          maxLength={500}
          showCounter
          value={value}
          onChange={e => setValue(e.target.value)}
          validation={isError ? 'negative' : isSuccess ? 'positive' : undefined}
          validationMessage={
            isError   ? 'Message must be at least 20 characters.' :
            isSuccess ? 'Looks good!' :
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
    <div style={{ maxWidth: '480px' }}>
      <TextArea
        label="Description"
        value="This field is currently unavailable."
        onChange={() => {}}
        hint="Contact your administrator to enable this field."
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
    <div style={{ maxWidth: '480px' }}>
      <TextArea
        label="Submitted feedback"
        value="This is the feedback that was previously submitted. It can be read and copied but not modified."
        onChange={() => {}}
        hint="You can select and copy this text."
        readOnly
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Auto resize
// ---------------------------------------------------------------------------

export const AutoResize: Story = {
  name: 'Auto Resize',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '480px' }}>
        <TextArea
          label="Notes"
          placeholder="Start typing — the field will grow automatically..."
          hint="Expands up to 240px, then scrolls."
          resize="auto"
          minHeight={80}
          maxHeight={240}
          maxLength={1000}
          showCounter
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    )
  },
}
