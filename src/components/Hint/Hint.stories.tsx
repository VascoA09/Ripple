import type { Meta, StoryObj } from '@storybook/react'
import { Hint } from './Hint'
import type { HintProps } from './Hint'
import { FieldLabel } from '../FieldLabel'

// ---------------------------------------------------------------------------

const meta: Meta<HintProps> = {
  title: 'Components/Hint',
  component: Hint,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<HintProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    id:   'example-hint',
    text: 'e.g. +44 7123 456789',
  },
}

// ---------------------------------------------------------------------------
// Common patterns
// ---------------------------------------------------------------------------

export const CommonPatterns: Story = {
  name: 'Common Patterns',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
      <Hint id="h1" text="DD/MM/YYYY" />
      <Hint id="h2" text="e.g. +44 7123 456789" />
      <Hint id="h3" text="Must be at least 8 characters with 1 uppercase and 1 number" />
      <Hint id="h4" text="3–20 characters, letters and numbers only" />
      <Hint id="h5" text="UK format: AB12 3CD" />
      <Hint id="h6" text="Maximum file size: 10 MB" />
      <Hint id="h7" text="No spaces or special characters" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With a form field — shows the aria-describedby pattern
// ---------------------------------------------------------------------------

export const WithFormField: Story = {
  name: 'With Form Field',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>

      {/* Phone */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <FieldLabel label="Phone number" htmlFor="phone" optional />
        <MockInput id="phone" type="tel" placeholder="+44 7123 456789" aria-describedby="phone-hint" />
        <Hint id="phone-hint" text="Include country code for international numbers" />
      </div>

      {/* Date of birth */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <FieldLabel label="Date of birth" htmlFor="dob" required />
        <MockInput id="dob" type="text" placeholder="01/01/1990" aria-describedby="dob-hint" />
        <Hint id="dob-hint" text="DD/MM/YYYY" />
      </div>

      {/* Password */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <FieldLabel label="Password" htmlFor="pw" required />
        <MockInput id="pw" type="password" placeholder="••••••••" aria-describedby="pw-hint" />
        <Hint id="pw-hint" text="Min. 8 characters — include at least 1 uppercase letter and 1 number" />
      </div>

    </div>
  ),
}

// ---------------------------------------------------------------------------
// Multiple hints — space-separated aria-describedby
// ---------------------------------------------------------------------------

export const MultipleHints: Story = {
  name: 'Multiple Hints (aria-describedby)',
  render: () => (
    <div style={{ maxWidth: '360px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <FieldLabel label="Username" htmlFor="username" required />
        <MockInput
          id="username"
          type="text"
          placeholder="john_doe"
          aria-describedby="username-hint-1 username-hint-2"
        />
        <Hint id="username-hint-1" text="3–20 characters" />
        <Hint id="username-hint-2" text="Letters, numbers, and underscores only" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With rich children — link inside hint
// ---------------------------------------------------------------------------

export const WithRichContent: Story = {
  name: 'With Rich Content',
  render: () => (
    <div style={{ maxWidth: '360px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <FieldLabel label="VAT number" htmlFor="vat" required />
        <MockInput id="vat" type="text" placeholder="GB123456789" aria-describedby="vat-hint" />
        <Hint id="vat-hint">
          Find your VAT number on your{' '}
          <a
            href="#"
            style={{
              color:          'var(--color-primary)',
              textDecoration: 'underline',
              fontFamily:     'var(--font-family-base)',
              fontSize:       'var(--font-size-80)',
            }}
          >
            HMRC correspondence
          </a>
        </Hint>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Full form field anatomy — FieldLabel + input + Hint + validation
// ---------------------------------------------------------------------------

export const FormFieldAnatomy: Story = {
  name: 'Form Field Anatomy',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>

      <section>
        <p style={sectionLabel}>Label → input → hint</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <FieldLabel label="Postcode" htmlFor="postcode" required />
          <MockInput id="postcode" placeholder="SW1A 1AA" aria-describedby="postcode-hint" />
          <Hint id="postcode-hint" text="UK format: AB12 3CD" />
        </div>
      </section>

      <section>
        <p style={sectionLabel}>Label + description → input → hint</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <FieldLabel
            label="IBAN"
            description="International Bank Account Number"
            required
            htmlFor="iban"
          />
          <MockInput id="iban" placeholder="GB29 NWBK 6016 1331 9268 19" aria-describedby="iban-hint" />
          <Hint id="iban-hint" text="Up to 34 alphanumeric characters, no spaces" />
        </div>
      </section>

    </div>
  ),
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sectionLabel: React.CSSProperties = {
  margin:        '0 0 8px',
  fontFamily:    'var(--font-family-base)',
  fontSize:      '11px',
  fontWeight:    600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color:         'var(--text-soft)',
}

function MockInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        display:      'block',
        width:        '100%',
        boxSizing:    'border-box',
        height:       '40px',
        padding:      '0 16px',
        border:       '1px solid var(--border-default)',
        borderRadius: '8px',
        fontFamily:   'var(--font-family-base)',
        fontSize:     'var(--font-size-100)',
        color:        'var(--text)',
        background:   'var(--bg-surface)',
        outline:      'none',
        ...props.style,
      }}
    />
  )
}
