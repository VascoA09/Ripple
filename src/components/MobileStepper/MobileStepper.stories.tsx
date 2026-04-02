import type { Meta, StoryObj } from '@storybook/react'
import { MobileStepper } from './MobileStepper'
import type { MobileStepperProps } from './MobileStepper'

// ---------------------------------------------------------------------------

const meta: Meta<MobileStepperProps> = {
  title:      'Components/MobileStepper',
  component:  MobileStepper,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<MobileStepperProps>

const STEPS = ['Cart', 'Shipping', 'Payment', 'Done']

// ---------------------------------------------------------------------------
// Progress Bar
// ---------------------------------------------------------------------------

export const ProgressBar: Story = {
  name: 'Progress Bar',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <MobileStepper
        variant="progress-bar"
        current={1}
        total={4}
        title="Cart"
        description="Review your items"
      />
      <MobileStepper
        variant="progress-bar"
        current={2}
        total={4}
        title="Shipping Information"
        description="Enter your delivery address"
      />
      <MobileStepper
        variant="progress-bar"
        current={3}
        total={4}
        title="Payment"
        description="Add your payment details"
      />
      <MobileStepper
        variant="progress-bar"
        current={4}
        total={4}
        title="Done"
        description="Your order is confirmed"
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Active Only
// ---------------------------------------------------------------------------

export const ActiveOnly: Story = {
  name: 'Active Only',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <MobileStepper
        variant="active-only"
        current={1}
        total={4}
        title="Cart"
        description="Review your items"
        steps={STEPS}
      />
      <MobileStepper
        variant="active-only"
        current={2}
        total={4}
        title="Shipping Information"
        description="Enter delivery address"
        steps={STEPS}
      />
      <MobileStepper
        variant="active-only"
        current={3}
        total={4}
        title="Payment"
        description="Add payment details"
        steps={STEPS}
      />
      <MobileStepper
        variant="active-only"
        current={4}
        total={4}
        title="Done"
        steps={STEPS}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Types (active-only)
// ---------------------------------------------------------------------------

export const Types: Story = {
  name: 'Types — Active Only',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <MobileStepper
        variant="active-only"
        current={2}
        total={4}
        title="Shipping Information"
        description="Enter delivery address"
        type="default"
        steps={STEPS}
      />
      <MobileStepper
        variant="active-only"
        current={2}
        total={4}
        title="Shipping Information"
        description="Enter delivery address"
        type="checked"
        steps={STEPS}
      />
      <MobileStepper
        variant="active-only"
        current={2}
        total={4}
        title="Shipping Information"
        description="Some fields need attention"
        type="notice"
        steps={STEPS}
      />
      <MobileStepper
        variant="active-only"
        current={2}
        total={4}
        title="Shipping Information"
        description="Address could not be verified"
        type="error"
        steps={STEPS}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Without description
// ---------------------------------------------------------------------------

export const WithoutDescription: Story = {
  name: 'Without Description',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <MobileStepper
        variant="progress-bar"
        current={2}
        total={5}
        title="Personal Details"
      />
      <MobileStepper
        variant="active-only"
        current={2}
        total={5}
        title="Personal Details"
        steps={['Account', 'Personal', 'Address', 'Review', 'Submit']}
      />
    </div>
  ),
}
