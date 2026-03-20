import type { Meta, StoryObj } from '@storybook/react'
import { Section } from './Section'
import type { SectionProps, SectionVariant, SectionHeadingLevel } from './Section'
import { Panel, PanelHeader, PanelBody } from '../Panel'
import { Card, CardContent } from '../Card'
import { Button } from '../Button'
import { BannerAlert } from '../BannerAlert'

// ---------------------------------------------------------------------------

const meta: Meta<SectionProps> = {
  title:      'Components/Section',
  component:  Section,
  parameters: { layout: 'padded' },
  argTypes: {
    variant:      { control: 'select', options: ['flat', 'elevated', 'no-padding'] },
    headingLevel: { control: 'select', options: ['h2', 'h3', 'h4', 'h5', 'h6'] },
    divider:      { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<SectionProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    variant:      'flat',
    heading:      'Account settings',
    description:  'Manage your personal information, security, and notification preferences.',
    headingLevel: 'h2',
    divider:      false,
  },
  render: (args) => (
    <div style={{ maxWidth: '720px' }}>
      <Section {...args}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Section body content goes here.</p>
      </Section>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// All variants
// ---------------------------------------------------------------------------

const variantExamples: { variant: SectionVariant; label: string; note: string }[] = [
  {
    variant: 'flat',
    label:   'Flat (default)',
    note:    'Border + surface background. Standard content grouping.',
  },
  {
    variant: 'elevated',
    label:   'Elevated',
    note:    'Box shadow + surface background. Use sparingly for key content blocks.',
  },
  {
    variant: 'no-padding',
    label:   'No padding',
    note:    'No visual treatment. Structural wrapper for full-bleed or self-spaced content.',
  },
]

export const Variants: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Variants</p>
      {variantExamples.map(({ variant, label, note }) => (
        <Section key={variant} variant={variant} heading={label} description={note}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Section body content.</p>
        </Section>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Heading levels
// ---------------------------------------------------------------------------

const headingLevels: SectionHeadingLevel[] = ['h2', 'h3', 'h4', 'h5', 'h6']

export const HeadingLevels: Story = {
  name: 'Heading levels',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Heading levels</p>
      {headingLevels.map(level => (
        <Section key={level} variant="flat" heading={`Section title — ${level}`} headingLevel={level}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Body content nested under an {level} heading.</p>
        </Section>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With divider — sequential sections separated by horizontal rules
// ---------------------------------------------------------------------------

export const WithDivider: Story = {
  name: 'With divider',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '720px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 16px' }}>With divider</p>

      <Section variant="flat" heading="Personal information" description="Your name, email, and profile photo." divider>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Form fields go here.</p>
      </Section>

      <Section variant="flat" heading="Security" description="Password, two-factor authentication, and active sessions." divider>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Security settings.</p>
      </Section>

      <Section variant="flat" heading="Notifications" description="When and how you receive alerts and updates.">
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Notification preferences.</p>
      </Section>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Heading only (no description)
// ---------------------------------------------------------------------------

export const HeadingOnly: Story = {
  name: 'Heading only',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Heading only</p>
      <Section variant="flat" heading="Team members">
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>Simple header with no description.</p>
      </Section>
      <Section variant="flat">
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>No header at all — body-only section.</p>
      </Section>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — settings page layout
// ---------------------------------------------------------------------------

export const InContext: Story = {
  name: 'In Context',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px' }}>

      {/* Page-level BannerAlert */}
      <BannerAlert variant="informative" style={{ marginBottom: '24px' }}>
        Your profile is 80% complete. Add a profile photo to help your teammates recognise you.
      </BannerAlert>

      {/* Section 1 — Personal information */}
      <Section
        variant="flat"
        heading="Personal information"
        description="Update your name, email address, and profile photo."
        divider
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['Full name', 'Email address', 'Job title', 'Location'].map(field => (
            <div key={field}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{field}</label>
              <div style={{ height: '36px', background: 'var(--bg-app)', border: '1px solid var(--border-neutral)', borderRadius: '6px' }} />
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', paddingTop: '4px' }}>
            <Button size="small" variant="ghost" color="neutral">Cancel</Button>
            <Button size="small">Save changes</Button>
          </div>
        </div>
      </Section>

      {/* Section 2 — Security — contains Panels */}
      <Section
        variant="flat"
        heading="Security"
        description="Manage your password, two-factor authentication, and active sessions."
        divider
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Panel collapsible defaultExpanded={true}>
            <PanelHeader subtitle="Change your account password">
              Password
            </PanelHeader>
            <PanelBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Current password', 'New password', 'Confirm new password'].map(f => (
                  <div key={f}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{f}</label>
                    <div style={{ height: '36px', background: 'var(--bg-app)', border: '1px solid var(--border-neutral)', borderRadius: '6px' }} />
                  </div>
                ))}
              </div>
            </PanelBody>
          </Panel>

          <Panel collapsible defaultExpanded={false}>
            <PanelHeader subtitle="Add an extra layer of security to your account">
              Two-factor authentication
            </PanelHeader>
            <PanelBody>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-soft)' }}>2FA is currently disabled. Enable it to protect your account with a second verification step.</p>
              <Button size="small" variant="outline" color="neutral">Enable 2FA</Button>
            </PanelBody>
          </Panel>
        </div>
      </Section>

      {/* Section 3 — Dashboard widgets — elevated, no-padding cards */}
      <Section
        variant="no-padding"
        heading="Usage overview"
        description="Last 30 days across all projects."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { label: 'API calls',     value: '1.2M',  sub: '+14% vs prev.' },
            { label: 'Active users',  value: '4,830', sub: '+6% vs prev.'  },
            { label: 'Avg. response', value: '92ms',  sub: '-5ms vs prev.' },
          ].map(({ label, value, sub }) => (
            <Card key={label} variant="elevated">
              <CardContent>
                <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>{label}</p>
                <p style={{ margin: '0 0 2px', fontSize: '28px', fontWeight: 700, color: 'var(--text-loud)', lineHeight: 1.1 }}>{value}</p>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-soft)' }}>{sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

    </div>
  ),
}
