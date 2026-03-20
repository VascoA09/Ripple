import type { Meta, StoryObj } from '@storybook/react'
import { Calendar, CreditCard, Package, User } from 'lucide-react'
import { Stepper, StepperStep } from './Stepper'
import type { StepperProps } from './Stepper'

// ---------------------------------------------------------------------------

const meta: Meta<StepperProps> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  argTypes: {
    variant:     { control: 'select', options: ['ordered', 'unordered', 'icons'] },
    interactive: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<StepperProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: { variant: 'ordered', interactive: false },
  render: (args) => (
    <div style={{ maxWidth: '360px' }}>
      <Stepper {...args}>
        <StepperStep title="Account" type="checked" description="Personal details saved" />
        <StepperStep title="Address"  active description="Enter your delivery address" />
        <StepperStep title="Payment" description="Credit or debit card" />
        <StepperStep title="Review"  disabled />
      </Stepper>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
      {/* Ordered */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>ordered (default)</p>
        <Stepper variant="ordered" style={{ width: '240px' }}>
          <StepperStep title="Account"  type="checked" />
          <StepperStep title="Address"  active />
          <StepperStep title="Payment" />
        </Stepper>
      </div>

      {/* Unordered */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>unordered</p>
        <Stepper variant="unordered" style={{ width: '240px' }}>
          <StepperStep title="Clone repository" type="checked" />
          <StepperStep title="Install dependencies" active />
          <StepperStep title="Run dev server" />
        </Stepper>
      </div>

      {/* Icons */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>icons</p>
        <Stepper variant="icons" style={{ width: '240px' }}>
          <StepperStep title="Profile"  type="checked" icon={<User size={16} />} />
          <StepperStep title="Shipping" active       icon={<Package size={16} />} />
          <StepperStep title="Payment"               icon={<CreditCard size={16} />} />
        </Stepper>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Step Types
// ---------------------------------------------------------------------------

export const StepTypes: Story = {
  name: 'Step Types',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
      {/* Non-active */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>non-active</p>
        <Stepper style={{ width: '260px' }}>
          <StepperStep title="Default"  description="Not yet started"    type="default"  />
          <StepperStep title="Checked"  description="Completed"          type="checked"  />
          <StepperStep title="Notice"   description="Has warnings"       type="notice"   />
          <StepperStep title="Error"    description="Must be resolved"   type="error"    />
        </Stepper>
      </div>

      {/* Active */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>active</p>
        <Stepper style={{ width: '260px' }}>
          <StepperStep title="Default"  description="Current step"     type="default" active />
          <StepperStep title="Checked"  description="Active + checked" type="checked" active />
          <StepperStep title="Notice"   description="Active + warning" type="notice"  active />
          <StepperStep title="Error"    description="Active + error"   type="error"   active />
        </Stepper>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Interactive
// ---------------------------------------------------------------------------

export const Interactive: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [current, setCurrent] = React.useState(1)

    const steps = [
      { id: 0, title: 'Account',  description: 'Personal details' },
      { id: 1, title: 'Address',  description: 'Delivery address' },
      { id: 2, title: 'Payment',  description: 'Card information' },
      { id: 3, title: 'Review',   description: 'Confirm your order' },
    ]

    return (
      <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', maxWidth: '320px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>
          interactive — click to navigate
        </p>
        <Stepper interactive>
          {steps.map((step) => (
            <StepperStep
              key={step.id}
              title={step.title}
              description={step.description}
              type={step.id < current ? 'checked' : 'default'}
              active={step.id === current}
              onClick={() => setCurrent(step.id)}
            />
          ))}
        </Stepper>
      </div>
    )
  },
}

// Need React for useState
import React from 'react'

// ---------------------------------------------------------------------------
// With Extras and Sub-steps
// ---------------------------------------------------------------------------

export const WithExtrasAndSubsteps: Story = {
  name: 'Extras & Sub-steps',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', maxWidth: '360px' }}>
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>
        extras + nested sub-steps
      </p>
      <Stepper>
        <StepperStep
          title="Requirements"
          type="checked"
          description="Gather project requirements"
          extras={
            <>
              <span>Completed by Jane Smith</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={12} aria-hidden="true" />
                14 Jan 2026
              </span>
            </>
          }
        />

        <StepperStep
          title="Design"
          active
          description="Create wireframes and prototypes"
        >
          <Stepper variant="unordered">
            <StepperStep title="Wireframes"   type="checked" />
            <StepperStep title="Prototypes"   active />
            <StepperStep title="Design review" />
          </Stepper>
        </StepperStep>

        <StepperStep title="Development" description="Build and test" />
        <StepperStep title="Launch"      description="Deploy to production" disabled />
      </Stepper>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const DisabledSteps: Story = {
  name: 'Disabled Steps',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', maxWidth: '320px' }}>
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>
        disabled — prerequisites not met
      </p>
      <Stepper interactive>
        <StepperStep title="Basic info"    type="checked" description="Complete" onClick={() => {}} />
        <StepperStep title="Verification" active         description="In progress" onClick={() => {}} />
        <StepperStep title="Review"        disabled description="Complete verification first" onClick={() => {}} />
        <StepperStep title="Submit"        disabled description="Complete verification first" onClick={() => {}} />
      </Stepper>
    </div>
  ),
}
