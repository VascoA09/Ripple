import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BannerAlert } from './BannerAlert'
import { Button } from '../Button'
import type { BannerAlertProps, BannerAlertVariant } from './BannerAlert'

// ---------------------------------------------------------------------------

const meta: Meta<BannerAlertProps> = {
  title:      'Components/BannerAlert',
  component:  BannerAlert,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['informative', 'positive', 'notice', 'negative'] },
    title:   { control: 'text' },
  },
}

export default meta
type Story = StoryObj<BannerAlertProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    variant:  'informative',
    title:    'Scheduled maintenance',
    children: 'The platform will be unavailable on Sunday 2 March from 02:00–04:00 UTC for infrastructure upgrades.',
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <BannerAlert {...args} />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// All variants
// ---------------------------------------------------------------------------

const variantExamples: { variant: BannerAlertVariant; title: string; message: string }[] = [
  {
    variant: 'informative',
    title:   'New feature available',
    message: 'Design token exports are now available in the settings panel. Export to CSS, JSON, or Figma variables.',
  },
  {
    variant: 'positive',
    title:   'Changes published',
    message: 'Your component updates have been published to the staging environment and are ready for review.',
  },
  {
    variant: 'notice',
    title:   'Subscription expiring soon',
    message: "Your Pro plan expires in 3 days. Renew now to avoid interruption to your team's access.",
  },
  {
    variant: 'negative',
    title:   'Deployment failed',
    message: 'The build pipeline failed at the test step. 3 tests did not pass. Review the logs and resolve the issues before retrying.',
  },
]

export const Variants: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Variants</p>
      {variantExamples.map(({ variant, title, message }) => (
        <BannerAlert key={variant} variant={variant} title={title}>
          {message}
        </BannerAlert>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Message only (no title)
// ---------------------------------------------------------------------------

export const WithoutTitle: Story = {
  name: 'Without title',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Without title</p>
      {variantExamples.map(({ variant, message }) => (
        <BannerAlert key={variant} variant={variant}>
          {message}
        </BannerAlert>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Dismissible
// ---------------------------------------------------------------------------

function DismissibleExample({ variant, title, message }: { variant: BannerAlertVariant; title: string; message: string }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <BannerAlert variant={variant} title={title} onClose={() => setVisible(false)}>
      {message}
    </BannerAlert>
  )
}

export const Dismissible: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Dismissible</p>
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 12px' }}>click × to dismiss</p>
      <DismissibleExample
        variant="informative"
        title="Cookie preferences"
        message="We use cookies to improve your experience. You can review and update your settings at any time."
      />
      <DismissibleExample
        variant="positive"
        title="Profile updated"
        message="Your changes have been saved successfully."
      />
      <DismissibleExample
        variant="notice"
        title="Action required"
        message="Your payment method is expiring soon. Update your billing details to avoid service interruption."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With actions
// ---------------------------------------------------------------------------

export const WithActions: Story = {
  name: 'With actions',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>With actions</p>

      <BannerAlert
        variant="informative"
        title="New API version available"
        actions={
          <>
            <Button size="small" variant="ghost" color="neutral">View changelog</Button>
            <Button size="small" variant="outline" color="neutral">Migrate now</Button>
          </>
        }
      >
        API v3.0 introduces breaking changes to the authentication flow. Migration is recommended before v2.0 reaches end-of-life on 1 June.
      </BannerAlert>

      <BannerAlert
        variant="notice"
        title="Subscription expiring in 3 days"
        actions={
          <>
            <Button size="small" variant="ghost" color="neutral">Remind me later</Button>
            <Button size="small" variant="outline" color="neutral">Renew plan</Button>
          </>
        }
      >
        Your Pro plan ends on 27 February. Renew to keep access to unlimited projects and team features.
      </BannerAlert>

      <BannerAlert
        variant="negative"
        title="Payment failed"
        actions={
          <Button size="small" variant="outline" color="neutral">Update payment method</Button>
        }
      >
        We were unable to process your payment for March. Update your billing details to restore access.
      </BannerAlert>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With actions and close button
// ---------------------------------------------------------------------------

function FullExample() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <BannerAlert
      variant="notice"
      title="Scheduled maintenance window"
      onClose={() => setVisible(false)}
      actions={
        <>
          <Button size="small" variant="ghost" color="neutral">Learn more</Button>
          <Button size="small" variant="outline" color="neutral">Add to calendar</Button>
        </>
      }
    >
      The platform will be unavailable on Sunday 2 March from 02:00–04:00 UTC. Please save any open work before then.
    </BannerAlert>
  )
}

export const WithActionsAndClose: Story = {
  name: 'With actions + close',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '640px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 16px' }}>Actions + close button</p>
      <FullExample />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — page-level and section-level placements
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '720px' }}>

      {/* Page-level banner */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', padding: '0 24px 12px' }}>page-level</p>
      <div style={{ borderBottom: '1px solid var(--color-gray-30)', marginBottom: '0' }}>
        <BannerAlert
          variant="notice"
          title="Scheduled maintenance"
          style={{ borderRadius: 0, border: 'none', borderBottom: '1px solid var(--border-notice)' }}
        >
          The platform will be in read-only mode on Sunday 2 March from 02:00–04:00 UTC.
        </BannerAlert>
        <div style={{ padding: '16px 24px', background: 'var(--bg-nav)', borderBottom: '1px solid var(--color-gray-30)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-loud)' }}>Ripple</span>
          {['Components', 'Tokens', 'Guidelines', 'Releases'].map(n => (
            <span key={n} style={{ fontSize: '14px', color: 'var(--text-soft)' }}>{n}</span>
          ))}
        </div>
      </div>

      {/* Section-level banner */}
      <div style={{ padding: '24px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px', marginTop: '24px' }}>section-level</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <BannerAlert variant="negative" title="Failed to save changes">
            Your last save attempt failed due to a network error. Check your connection and try again. If the issue persists, contact support.
          </BannerAlert>

          <div style={{ background: 'var(--bg-hover)', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Display name', 'Email address', 'Job title'].map((field) => (
              <div key={field}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{field}</label>
                <div style={{ height: '36px', background: 'var(--bg-surface)', border: '1px solid var(--color-gray-30)', borderRadius: '6px' }} />
              </div>
            ))}
          </div>

          <BannerAlert
            variant="informative"
            title="Two-factor authentication recommended"
            actions={<Button size="small" variant="outline" color="neutral">Set up 2FA</Button>}
          >
            Protect your account by enabling two-factor authentication in your security settings.
          </BannerAlert>
        </div>
      </div>

    </div>
  ),
}
