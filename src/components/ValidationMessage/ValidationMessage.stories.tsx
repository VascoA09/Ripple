import type { Meta, StoryObj } from '@storybook/react'
import { ValidationMessage } from './ValidationMessage'
import type { ValidationMessageProps } from './ValidationMessage'

// ---------------------------------------------------------------------------

const meta: Meta<ValidationMessageProps> = {
  title: 'Components/ValidationMessage',
  component: ValidationMessage,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['negative', 'notice', 'positive'] },
  },
}

export default meta
type Story = StoryObj<ValidationMessageProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    variant: 'negative',
    message: 'Enter a valid email address',
    id:      'field-validation',
  },
}

// ---------------------------------------------------------------------------
// All Variants
// ---------------------------------------------------------------------------

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '8px' }}>
        All Variants
      </p>

      <ValidationMessage
        variant="negative"
        message="Enter a valid email address"
        id="ex-negative"
      />
      <ValidationMessage
        variant="notice"
        message="Password strength: weak — consider adding numbers or symbols"
        id="ex-notice"
      />
      <ValidationMessage
        variant="positive"
        message="Username is available"
        id="ex-positive"
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Common Patterns
// ---------------------------------------------------------------------------

export const CommonPatterns: Story = {
  name: 'Common Patterns',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px', minWidth: '360px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '0' }}>
        Common Patterns
      </p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: 0 }}>Required field errors</p>
        <ValidationMessage variant="negative" message="Full name is required" id="ex-req-1" />
        <ValidationMessage variant="negative" message="Email address is required" id="ex-req-2" />
        <ValidationMessage variant="negative" message="Please select an option" id="ex-req-3" />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: 0 }}>Format errors</p>
        <ValidationMessage variant="negative" message="Enter a valid email address" id="ex-fmt-1" />
        <ValidationMessage variant="negative" message="Date must be in DD/MM/YYYY format" id="ex-fmt-2" />
        <ValidationMessage variant="negative" message="Passwords do not match" id="ex-fmt-3" />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: 0 }}>Warnings</p>
        <ValidationMessage variant="notice" message="You're approaching the character limit (95/100)" id="ex-warn-1" />
        <ValidationMessage variant="notice" message="Username is short — consider using at least 5 characters" id="ex-warn-2" />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: 0 }}>Success confirmations</p>
        <ValidationMessage variant="positive" message="Password meets requirements" id="ex-pos-1" />
        <ValidationMessage variant="positive" message="Username is available" id="ex-pos-2" />
        <ValidationMessage variant="positive" message="Email address verified" id="ex-pos-3" />
      </section>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — simulated form field
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => {
    const fieldStyle: React.CSSProperties = {
      display:       'flex',
      flexDirection: 'column',
      gap:           '4px',
      minWidth:      '320px',
    }
    const labelStyle: React.CSSProperties = {
      fontFamily:  'var(--font-family-base)',
      fontSize:    'var(--font-size-80)',
      fontWeight:  600,
      color:       'var(--text)',
    }
    const inputBase: React.CSSProperties = {
      fontFamily:    'var(--font-family-base)',
      fontSize:      'var(--font-size-80)',
      padding:       '8px 12px',
      borderRadius:  '6px',
      borderWidth:   '1px',
      borderStyle:   'solid',
      outline:       'none',
      width:         '100%',
      boxSizing:     'border-box',
    }

    return (
      <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '0' }}>
          In Context
        </p>

        {/* Error state */}
        <div style={fieldStyle}>
          <label htmlFor="email-err" style={labelStyle}>Email address</label>
          <input
            id="email-err"
            type="email"
            defaultValue="not-an-email"
            aria-invalid="true"
            aria-errormessage="email-err-msg"
            style={{ ...inputBase, borderColor: 'var(--border-negative)', color: 'var(--text)' }}
            readOnly
          />
          <ValidationMessage variant="negative" message="Enter a valid email address" id="email-err-msg" />
        </div>

        {/* Warning state */}
        <div style={fieldStyle}>
          <label htmlFor="bio-warn" style={labelStyle}>Bio</label>
          <textarea
            id="bio-warn"
            defaultValue={"A".repeat(95)}
            aria-describedby="bio-warn-msg"
            style={{ ...inputBase, borderColor: 'var(--border-notice)', color: 'var(--text)', resize: 'none', height: '72px' }}
            readOnly
          />
          <ValidationMessage variant="notice" message="You're approaching the character limit (95/100)" id="bio-warn-msg" />
        </div>

        {/* Success state */}
        <div style={fieldStyle}>
          <label htmlFor="username-ok" style={labelStyle}>Username</label>
          <input
            id="username-ok"
            type="text"
            defaultValue="vascoantunes"
            aria-describedby="username-ok-msg"
            style={{ ...inputBase, borderColor: 'var(--border-positive)', color: 'var(--text)' }}
            readOnly
          />
          <ValidationMessage variant="positive" message="Username is available" id="username-ok-msg" />
        </div>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Long Message — wrapping behaviour
// ---------------------------------------------------------------------------

export const LongMessage: Story = {
  name: 'Long Message',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', maxWidth: '280px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
        Multi-line wrap — 280px container
      </p>

      <ValidationMessage
        variant="negative"
        message="Your password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character."
        id="ex-long"
      />
    </div>
  ),
}
