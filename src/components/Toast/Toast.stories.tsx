import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Mail, Download, RefreshCw } from 'lucide-react'
import { ToastProvider, useToast } from './Toast'
import type { ToastPosition } from './Toast'

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'Components/Toast',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function TriggerButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid var(--border-default)',
        background: 'var(--bg-surface)',
        color: 'var(--text-default)',
        fontSize: '14px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}

// ---------------------------------------------------------------------------
// All Variants
// ---------------------------------------------------------------------------

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <TriggerButton
            label="Neutral"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'Download complete',
                showCloseButton: true,
              })
            }
          />
          <TriggerButton
            label="Positive"
            onClick={() =>
              addToast({
                variant: 'positive',
                title: 'Settings saved',
              })
            }
          />
          <TriggerButton
            label="Notice"
            onClick={() =>
              addToast({
                variant: 'notice',
                title: 'Storage almost full',
              })
            }
          />
          <TriggerButton
            label="Negative"
            onClick={() =>
              addToast({
                variant: 'negative',
                title: 'Connection failed',
              })
            }
          />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// With Description
// ---------------------------------------------------------------------------

export const WithDescription: Story = {
  name: 'With Description',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <TriggerButton
            label="Positive with description"
            onClick={() =>
              addToast({
                variant: 'positive',
                title: 'File uploaded',
                description: 'Report-2024.pdf has been uploaded to Documents.',
              })
            }
          />
          <TriggerButton
            label="Negative with description"
            onClick={() =>
              addToast({
                variant: 'negative',
                title: 'Unable to save changes',
                description:
                  'Your session may have expired. Please refresh the page and try again.',
              })
            }
          />
          <TriggerButton
            label="Notice with description"
            onClick={() =>
              addToast({
                variant: 'notice',
                title: 'Password expires soon',
                description: 'Your password will expire in 3 days. Update it now to avoid losing access.',
              })
            }
          />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// With Action Button
// ---------------------------------------------------------------------------

export const WithAction: Story = {
  name: 'With Action',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <TriggerButton
            label="With undo action"
            onClick={() =>
              addToast({
                variant: 'positive',
                title: 'Message deleted',
                description: 'The message was moved to the bin.',
                action: { label: 'Undo', onClick: () => console.log('Undo') },
                showCloseButton: true,
              })
            }
          />
          <TriggerButton
            label="With retry action"
            onClick={() =>
              addToast({
                variant: 'negative',
                title: 'Upload failed',
                description: 'An error occurred while uploading your file.',
                action: { label: 'Retry', onClick: () => console.log('Retry') },
              })
            }
          />
          <TriggerButton
            label="With view action"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'Export ready',
                description: 'Your export has been prepared and is ready to download.',
                action: { label: 'Download', onClick: () => console.log('Download') },
                showCloseButton: true,
              })
            }
          />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// With Timestamp
// ---------------------------------------------------------------------------

export const WithTimestamp: Story = {
  name: 'With Timestamp',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <TriggerButton
          label="Show with timestamp"
          onClick={() =>
            addToast({
              variant: 'neutral',
              title: 'Invoice updated',
              description: 'Invoice #1234 has been modified.',
              timestamp: '19 Mar at 14:30',
              showCloseButton: true,
            })
          }
        />
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// Custom Icon (Neutral only)
// ---------------------------------------------------------------------------

export const CustomIcon: Story = {
  name: 'Custom Icon',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <TriggerButton
            label="With Mail icon"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'New message received',
                description: 'John Doe has sent you a message.',
                icon: Mail,
                showCloseButton: true,
              })
            }
          />
          <TriggerButton
            label="With Download icon"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'Download complete',
                description: 'quarterly-report.xlsx is ready.',
                icon: Download,
              })
            }
          />
          <TriggerButton
            label="With Refresh icon"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'Sync complete',
                description: 'All records are up to date.',
                icon: RefreshCw,
              })
            }
          />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// With Progress Bar
// ---------------------------------------------------------------------------

export const WithProgress: Story = {
  name: 'With Progress Bar',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <TriggerButton
            label="Neutral (6s)"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'Wi-Fi connected',
                description: 'You are now connected to Office-Net.',
                showProgress: true,
              })
            }
          />
          <TriggerButton
            label="Positive (6s)"
            onClick={() =>
              addToast({
                variant: 'positive',
                title: 'Profile updated',
                description: 'Your changes have been saved.',
                showProgress: true,
              })
            }
          />
          <TriggerButton
            label="Quick (3s)"
            onClick={() =>
              addToast({
                variant: 'neutral',
                title: 'Quick message',
                description: 'This will disappear in 3 seconds.',
                duration: 3000,
                showProgress: true,
              })
            }
          />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// Persistent (Notice + Negative — no auto-dismiss)
// ---------------------------------------------------------------------------

export const Persistent: Story = {
  name: 'Persistent (Notice + Negative)',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <TriggerButton
            label="Notice (no auto-dismiss)"
            onClick={() =>
              addToast({
                variant: 'notice',
                title: 'You have unsaved changes',
                description: 'Leave this page and your changes will be lost.',
                action: { label: 'Save now', onClick: () => console.log('Save') },
              })
            }
          />
          <TriggerButton
            label="Negative (no auto-dismiss)"
            onClick={() =>
              addToast({
                variant: 'negative',
                title: 'Payment declined',
                description: 'Please check your card details and try again.',
                action: { label: 'Update card', onClick: () => console.log('Update') },
              })
            }
          />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// Stacked
// ---------------------------------------------------------------------------

export const Stacked: Story = {
  name: 'Stacked',
  render: () => {
    function Demo() {
      const { addToast, removeAllToasts } = useToast()

      function addMultiple() {
        addToast({ variant: 'positive', title: 'Settings saved' })
        addToast({
          variant: 'neutral',
          title: 'New message',
          description: 'Sarah has replied to your message.',
          showCloseButton: true,
        })
        addToast({
          variant: 'notice',
          title: 'Storage almost full',
          description: 'You have used 90% of your storage.',
        })
      }

      return (
        <div style={{ display: 'flex', gap: '8px' }}>
          <TriggerButton label="Stack 3 toasts" onClick={addMultiple} />
          <TriggerButton label="Clear all" onClick={removeAllToasts} />
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// Positions
// ---------------------------------------------------------------------------

export const Positions: Story = {
  name: 'Positions',
  render: () => {
    const positions: ToastPosition[] = [
      'top-left', 'top-center', 'top-right',
      'bottom-left', 'bottom-center', 'bottom-right',
    ]

    function Demo() {
      const { addToast, setPosition } = useToast()
      const [active, setActive] = useState<ToastPosition>('top-right')

      function trigger(pos: ToastPosition) {
        setActive(pos)
        setPosition(pos)
        addToast({
          variant: 'neutral',
          title: `Position: ${pos}`,
          showCloseButton: true,
        })
      }

      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {positions.map(pos => (
            <TriggerButton
              key={pos}
              label={pos}
              onClick={() => trigger(pos)}
            />
          ))}
          <span style={{ alignSelf: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
            Active: {active}
          </span>
        </div>
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}

// ---------------------------------------------------------------------------
// Full example — kitchen sink
// ---------------------------------------------------------------------------

export const FullExample: Story = {
  name: 'Full Example',
  render: () => {
    function Demo() {
      const { addToast } = useToast()
      return (
        <TriggerButton
          label="Show full-featured toast"
          onClick={() =>
            addToast({
              variant: 'positive',
              title: 'File uploaded',
              description: 'Report-2024.pdf has been uploaded to Documents.',
              timestamp: '19 Mar at 14:30',
              action: { label: 'View file', onClick: () => console.log('View') },
              showCloseButton: true,
              showProgress: true,
            })
          }
        />
      )
    }

    return (
      <ToastProvider position="top-right">
        <Demo />
      </ToastProvider>
    )
  },
}
