import type { Meta, StoryObj } from '@storybook/react'
import { FieldLabel } from './FieldLabel'
import type { FieldLabelProps } from './FieldLabel'

// ---------------------------------------------------------------------------

const meta: Meta<FieldLabelProps> = {
  title: 'Components/FieldLabel',
  component: FieldLabel,
  parameters: { layout: 'padded' },
  argTypes: {
    position: { control: 'select', options: ['stacked', 'inline'] },
    required: { control: 'boolean' },
    optional: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<FieldLabelProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label:   'Email address',
    htmlFor: 'email',
  },
  render: (args) => (
    <div style={{ maxWidth: '320px' }}>
      <FieldLabel {...args} />
      <input
        id="email"
        type="email"
        placeholder="name@company.com"
        style={{
          marginTop:    '4px',
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
        }}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Indicators — required, optional
// ---------------------------------------------------------------------------

export const Indicators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '320px' }}>
      <div>
        <FieldLabel label="Legal name" required htmlFor="legal-name" />
        <MockInput id="legal-name" placeholder="Enter your legal name" />
      </div>
      <div>
        <FieldLabel label="Middle name" optional htmlFor="middle-name" />
        <MockInput id="middle-name" placeholder="Enter middle name" />
      </div>
      <div>
        <FieldLabel label="Department" htmlFor="dept" />
        <MockInput id="dept" placeholder="No indicator" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With description
// ---------------------------------------------------------------------------

export const WithDescription: Story = {
  name: 'With Description',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '320px' }}>
      <div>
        <FieldLabel
          label="Password"
          description="Must be at least 8 characters"
          required
          htmlFor="password"
        />
        <MockInput id="password" type="password" placeholder="••••••••" />
      </div>
      <div>
        <FieldLabel
          label="Phone number"
          description="Include country code for international numbers"
          optional
          htmlFor="phone"
        />
        <MockInput id="phone" placeholder="+1 (555) 000-0000" />
      </div>
      <div>
        <FieldLabel
          label="Email address"
          description="We'll never share your email with anyone else"
          required
          htmlFor="email-desc"
        />
        <MockInput id="email-desc" type="email" placeholder="name@company.com" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With help icon
// ---------------------------------------------------------------------------

export const WithHelpIcon: Story = {
  name: 'With Help Icon',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '320px' }}>
      <div>
        <FieldLabel
          label="VAT number"
          required
          helpText="Your VAT registration number as issued by your tax authority. Format varies by country."
          htmlFor="vat"
        />
        <MockInput id="vat" placeholder="GB123456789" />
      </div>
      <div>
        <FieldLabel
          label="Cost centre"
          optional
          helpText="Used to allocate expenses to the correct business unit. Ask your finance manager if unsure."
          htmlFor="cost-centre"
        />
        <MockInput id="cost-centre" placeholder="CC-0042" />
      </div>
      <div>
        <FieldLabel
          label="Password"
          description="Must be at least 8 characters"
          required
          helpText="Use a mix of letters, numbers, and symbols for a stronger password."
          htmlFor="help-password"
        />
        <MockInput id="help-password" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Inline position
// ---------------------------------------------------------------------------

export const InlinePosition: Story = {
  name: 'Inline Position',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
      {[
        { label: 'First name',   id: 'first',  required: true  },
        { label: 'Last name',    id: 'last',   required: true  },
        { label: 'Job title',    id: 'title',  optional: true  },
        { label: 'Department',   id: 'dept'                    },
      ].map(row => (
        <div key={row.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-100)' }}>
          <FieldLabel
            label={row.label}
            htmlFor={row.id}
            position="inline"
            required={row.required}
            optional={row.optional}
          />
          <MockInput id={row.id} placeholder={row.label} style={{ flex: 1 }} />
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// All variants
// ---------------------------------------------------------------------------

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '640px' }}>
      <div>
        <p style={sectionLabel}>Label only</p>
        <FieldLabel label="Country" htmlFor="v1" />
        <MockInput id="v1" placeholder="Select..." />
      </div>
      <div>
        <p style={sectionLabel}>Required</p>
        <FieldLabel label="Company name" required htmlFor="v2" />
        <MockInput id="v2" placeholder="Acme Inc." />
      </div>
      <div>
        <p style={sectionLabel}>Optional</p>
        <FieldLabel label="Website" optional htmlFor="v3" />
        <MockInput id="v3" placeholder="https://" />
      </div>
      <div>
        <p style={sectionLabel}>With help icon</p>
        <FieldLabel label="IBAN" required helpText="International Bank Account Number, up to 34 characters." htmlFor="v4" />
        <MockInput id="v4" placeholder="GB29 NWBK 6016 1331 9268 19" />
      </div>
      <div>
        <p style={sectionLabel}>With description</p>
        <FieldLabel label="Recovery email" description="Used if you lose access to your account" optional htmlFor="v5" />
        <MockInput id="v5" placeholder="backup@email.com" />
      </div>
      <div>
        <p style={sectionLabel}>Description + help</p>
        <FieldLabel
          label="Payroll ID"
          description="Assigned by HR on joining"
          required
          helpText="Find this on your employment contract or latest payslip."
          htmlFor="v6"
        />
        <MockInput id="v6" placeholder="P-00421" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sectionLabel: React.CSSProperties = {
  margin:      '0 0 8px',
  fontFamily:  'var(--font-family-base)',
  fontSize:    '11px',
  fontWeight:  600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color:       'var(--text-soft)',
}

function MockInput({
  id,
  type = 'text',
  placeholder,
  style,
}: {
  id: string
  type?: string
  placeholder?: string
  style?: React.CSSProperties
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      style={{
        marginTop:    '4px',
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
        ...style,
      }}
    />
  )
}
