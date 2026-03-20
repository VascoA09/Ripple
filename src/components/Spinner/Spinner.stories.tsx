import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import type { SpinnerProps } from './Spinner'

// ---------------------------------------------------------------------------

const meta: Meta<SpinnerProps> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  argTypes: {
    size:          { control: 'select', options: ['s', 'm', 'l', 'xl'] },
    variant:       { control: 'select', options: ['primary', 'neutral', 'inverse'] },
    labelPosition: { control: 'select', options: ['stacked', 'inline'] },
    label:         { control: 'text' },
  },
}

export default meta
type Story = StoryObj<SpinnerProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    size: 'm',
    variant: 'primary',
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

const sizes = ['s', 'm', 'l', 'xl'] as const

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '32px' }}>
        Sizes
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Spinner size={s} />
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>
              {s} · {s === 's' ? '16px' : s === 'm' ? '32px' : s === 'l' ? '64px' : '128px'}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '32px' }}>
        Variants
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
        {/* Primary — light background */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '24px', background: 'var(--bg-surface)', borderRadius: '8px' }}>
          <Spinner size="m" variant="primary" />
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>primary</span>
        </div>

        {/* Neutral — accent background */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '24px', background: 'var(--bg-app-accent)', borderRadius: '8px' }}>
          <Spinner size="m" variant="neutral" />
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>neutral</span>
        </div>

        {/* Inverse — dark background */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '24px', background: 'var(--bg-neutral)', borderRadius: '8px' }}>
          <Spinner size="m" variant="inverse" />
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-loud-inverse)' }}>inverse</span>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Label
// ---------------------------------------------------------------------------

export const WithLabel: Story = {
  name: 'With Label',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '32px' }}>
        With Label
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner size="m" label="Loading content..." labelPosition="stacked" />
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>stacked</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Spinner size="m" label="Loading content..." labelPosition="inline" />
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>inline</span>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Full Reference
// ---------------------------------------------------------------------------

export const FullReference: Story = {
  name: 'Full Reference',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '32px' }}>
        Full Reference — all sizes, all variants
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {(['primary', 'neutral', 'inverse'] as const).map(v => (
          <div key={v}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '16px' }}>{v}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                padding: '24px',
                borderRadius: '8px',
                background: v === 'inverse' ? 'var(--bg-neutral)' : v === 'neutral' ? 'var(--bg-app-accent)' : 'var(--bg-surface)',
              }}
            >
              {sizes.map(s => (
                <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <Spinner size={s} variant={v} />
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: v === 'inverse' ? 'var(--text-loud-inverse)' : 'var(--text-soft)' }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
