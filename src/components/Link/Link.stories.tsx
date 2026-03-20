import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'
import type { LinkProps } from './Link'

// ---------------------------------------------------------------------------

const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  component: Link,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['loud', 'soft'] },
    size:    { control: 'select', options: ['100', '80'] },
  },
}

export default meta
type Story = StoryObj<LinkProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'Link text',
    href: '#',
    variant: 'loud',
    size: '100',
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Variants
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px' }}>loud — always underlined</p>
          <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.5 }}>
            Read the{' '}
            <Link href="#" variant="loud">getting started guide</Link>
            {' '}before continuing.
          </p>
        </div>

        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px' }}>soft — underline on hover/focus</p>
          <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.5 }}>
            Read the{' '}
            <Link href="#" variant="soft">getting started guide</Link>
            {' '}before continuing.
          </p>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Sizes
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px' }}>size-100 · 16px · body</p>
          <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.5 }}>
            View the <Link href="#" size="100">full documentation</Link> for details.
          </p>
        </div>

        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px' }}>size-80 · 14px · caption</p>
          <p style={{ fontSize: '14px', color: 'var(--text-soft)', lineHeight: 1.5 }}>
            Last updated 12 Jan 2026 · <Link href="#" size="80">View changelog</Link>
          </p>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        States
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', width: '64px', flexShrink: 0 }}>default</span>
          <Link href="#">Read the guide</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', width: '64px', flexShrink: 0 }}>active</span>
          <Link href="#" style={{ color: 'var(--text-link-active)' }}>Read the guide</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', width: '64px', flexShrink: 0 }}>visited</span>
          <Link href="#" style={{ color: 'var(--text-link-visited)' }}>Read the guide</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', width: '64px', flexShrink: 0 }}>focus</span>
          <Link href="#" style={{ outline: '2px solid var(--border-focus)', outlineOffset: '2px', borderRadius: '2px' }}>Read the guide</Link>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// External
// ---------------------------------------------------------------------------

export const External: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        External Links
      </p>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>
        Icon auto-rendered when target="_blank"
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.5 }}>
          <Link href="https://ripple.design" target="_blank">Ripple Design System</Link>
        </div>
        <div style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.5 }}>
          Visit our{' '}
          <Link href="https://ripple.design/docs" target="_blank" variant="soft">documentation site</Link>
          {' '}to get started.
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-soft)', lineHeight: 1.5 }}>
          <Link href="https://ripple.design/changelog" target="_blank" size="80">View full changelog</Link>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — links inside body copy
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '600px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        In Context
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>loud · body copy</p>
          <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.5 }}>
            Ripple is built on a three-tier token model. Read the{' '}
            <Link href="#" variant="loud">token architecture guide</Link>
            {' '}to understand how primitives, semantics, and component tokens relate. You can also{' '}
            <Link href="https://ripple.design" target="_blank" variant="loud">explore the full system</Link>
            {' '}online.
          </p>
        </div>

        <div>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>soft · dense UI (navigation, metadata)</p>
          <div style={{ fontSize: '14px', color: 'var(--text-soft)', lineHeight: 1.5, display: 'flex', gap: '16px' }}>
            <Link href="#" size="80" variant="soft">Privacy policy</Link>
            <Link href="#" size="80" variant="soft">Terms of use</Link>
            <Link href="#" size="80" variant="soft">Cookie settings</Link>
          </div>
        </div>
      </div>
    </div>
  ),
}
