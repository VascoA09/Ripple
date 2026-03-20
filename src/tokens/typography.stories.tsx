import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------

interface StyleRowProps {
  className: string
  label: string
  spec: string
  sample?: string
}

function StyleRow({ className, label, spec, sample }: StyleRowProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '16px',
        alignItems: 'baseline',
        borderBottom: '1px solid var(--border-neutral)',
        padding: '16px 0',
      }}
    >
      <div>
        <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-accent)', marginBottom: '4px' }}>
          {label}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>
          {spec}
        </div>
      </div>
      <div className={className}>{sample ?? 'The quick brown fox jumps over the lazy dog'}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------

export const Styles: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '900px' }}>
      <h1 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '4px' }}>
        Foundations
      </h1>
      <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-loud)', marginBottom: '4px' }}>
        Typography
      </p>
      <p style={{ fontSize: '14px', color: 'var(--text-soft)', marginBottom: '32px' }}>
        Open Sans. Major second scale (×1.125). Switch themes using the toolbar above.
      </p>

      <StyleRow
        className="typography-heading-xl"
        label=".typography-heading-xl"
        spec="32px · Bold · 130%"
        sample="Heading XL"
      />
      <StyleRow
        className="typography-heading-l"
        label=".typography-heading-l"
        spec="28px · Bold · 130%"
        sample="Heading L"
      />
      <StyleRow
        className="typography-heading-m"
        label=".typography-heading-m"
        spec="24px · Bold · 130%"
        sample="Heading M"
      />
      <StyleRow
        className="typography-heading-s"
        label=".typography-heading-s"
        spec="18px · Semibold · 130%"
        sample="Heading S"
      />
      <StyleRow
        className="typography-body"
        label=".typography-body"
        spec="16px · Regular · 150%"
      />
      <StyleRow
        className="typography-body-semibold"
        label=".typography-body-semibold"
        spec="16px · Semibold · 150%"
      />
      <StyleRow
        className="typography-caption"
        label=".typography-caption"
        spec="14px · Regular · 150%"
      />
      <StyleRow
        className="typography-caption-semibold"
        label=".typography-caption-semibold"
        spec="14px · Semibold · 150%"
      />
      <StyleRow
        className="typography-label"
        label=".typography-label"
        spec="14px · Semibold · 130%"
        sample="Form label"
      />
      <StyleRow
        className="typography-detail"
        label=".typography-detail"
        spec="12px · Regular · 150%"
        sample="Detail text — timestamps, fine print, version numbers"
      />
    </div>
  ),
}

export const ColorVariants: Story = {
  name: 'Color Variants',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '600px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Text color tokens
      </p>

      {[
        { token: '--text-loud',          label: 'text.loud',          sample: 'Highest emphasis — headings, key labels' },
        { token: '--text',               label: 'text',               sample: 'Default body text' },
        { token: '--text-soft',          label: 'text.soft',          sample: 'Secondary text, captions, help text' },
        { token: '--text-disabled',      label: 'text.disabled',      sample: 'Disabled labels and placeholders' },
        { token: '--text-accent',        label: 'text.accent',        sample: 'Links and interactive labels' },
        { token: '--text-negative',      label: 'text.negative',      sample: 'Error messages' },
        { token: '--text-notice',        label: 'text.notice',        sample: 'Warning messages' },
        { token: '--text-positive',      label: 'text.positive',      sample: 'Success confirmations' },
      ].map(({ token, label, sample }) => (
        <div key={token} style={{ marginBottom: '12px', borderBottom: '1px solid var(--border-neutral)', paddingBottom: '12px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>{label}</span>
          <p style={{ margin: '4px 0 0', fontFamily: "'Open Sans', sans-serif", fontSize: '16px', color: `var(${token})` }}>
            {sample}
          </p>
        </div>
      ))}
    </div>
  ),
}

export const ScaleReference: Story = {
  name: 'Scale Reference',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Font size primitives — major second scale ×1.125
      </p>
      {[
        { token: '--font-size-220', value: '32px' },
        { token: '--font-size-200', value: '28px' },
        { token: '--font-size-180', value: '24px' },
        { token: '--font-size-120', value: '18px' },
        { token: '--font-size-100', value: '16px' },
        { token: '--font-size-80',  value: '14px' },
        { token: '--font-size-60',  value: '12px' },
      ].map(({ token, value }) => (
        <div key={token} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-accent)', width: '160px', flexShrink: 0 }}>
            {token}
          </span>
          <span style={{ fontFamily: "'Open Sans Variable', 'Open Sans', sans-serif", fontSize: value, lineHeight: 1.3, color: 'var(--text-loud)' }}>
            Aa
          </span>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>
            {value}
          </span>
        </div>
      ))}
    </div>
  ),
}
