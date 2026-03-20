import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import type { ProgressBarProps, ProgressBarState } from './ProgressBar'

// ---------------------------------------------------------------------------

const meta: Meta<ProgressBarProps> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'padded' },
  argTypes: {
    state: {
      control: 'select',
      options: ['active', 'success', 'error'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
}

export default meta
type Story = StoryObj<ProgressBarProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Uploading file',
    value: 70,
  },
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '480px' }}>
      <ProgressBar
        label="Uploading file"
        value={70}
        hint="33.6 MB of 48 MB"
        state="active"
      />
      <ProgressBar
        label="Upload complete"
        value={100}
        valueLabel="48 MB of 48 MB"
        hint="48 MB of 48 MB"
        state="success"
      />
      <ProgressBar
        label="Upload failed"
        value={51}
        valueLabel="24.3 MB of 48 MB"
        hint="24.3 MB of 48 MB"
        state="error"
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Indeterminate
// ---------------------------------------------------------------------------

export const Indeterminate: Story = {
  name: 'Indeterminate',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '480px' }}>
      <ProgressBar
        label="Loading content"
        indeterminate
        hint="Fetching data from server…"
      />
      <ProgressBar
        label="Processing"
        indeterminate
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With hint
// ---------------------------------------------------------------------------

export const WithHint: Story = {
  name: 'With Hint',
  args: {
    label:      'Uploading file',
    value:      70,
    hint:       '33.6 MB of 48 MB',
  },
}

// ---------------------------------------------------------------------------
// Custom value label
// ---------------------------------------------------------------------------

export const CustomValueLabel: Story = {
  name: 'Custom Value Label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '480px' }}>
      <ProgressBar
        label="File upload"
        value={70}
        valueLabel="33.6 MB of 48 MB"
      />
      <ProgressBar
        label="Steps completed"
        value={40}
        valueLabel="2 of 5 steps"
      />
      <ProgressBar
        label="Time remaining"
        value={65}
        valueLabel="35 seconds left"
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Hidden label
// ---------------------------------------------------------------------------

export const HiddenLabel: Story = {
  name: 'Hidden Label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '480px' }}>
      <ProgressBar
        label="Loading (visually hidden)"
        value={55}
        hideLabel
      />
      <ProgressBar
        label="Processing (visually hidden)"
        value={30}
        hint="Analysing data…"
        hideLabel
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Hidden value
// ---------------------------------------------------------------------------

export const HiddenValue: Story = {
  name: 'Hidden Value',
  args: {
    label:     'Uploading file',
    value:     45,
    hideValue: true,
    hint:      'Please wait…',
  },
}

// ---------------------------------------------------------------------------
// Interactive — animated progress simulation
// ---------------------------------------------------------------------------

export const AnimatedDeterminate: Story = {
  name: 'Animated (Determinate)',
  render: () => {
    const [progress, setProgress] = useState(0)
    const [state, setState]       = useState<ProgressBarState>('active')

    useEffect(() => {
      if (state !== 'active') return

      if (progress >= 100) {
        setState('success')
        return
      }

      const timer = setTimeout(
        () => setProgress(p => Math.min(p + Math.floor(Math.random() * 8) + 2, 100)),
        180,
      )
      return () => clearTimeout(timer)
    }, [progress, state])

    function reset() {
      setProgress(0)
      setState('active')
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
        <ProgressBar
          label="Uploading document.pdf"
          value={progress}
          hint={
            state === 'success'
              ? '48 MB of 48 MB'
              : `${(progress / 100 * 48).toFixed(1)} MB of 48 MB`
          }
          state={state}
        />
        <button
          type="button"
          onClick={reset}
          style={{
            alignSelf: 'flex-start',
            padding:   '6px 12px',
            fontSize:  '13px',
            cursor:    'pointer',
            fontFamily:'var(--font-family-base)',
          }}
        >
          Restart
        </button>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Multiple progress bars — data grid use case
// ---------------------------------------------------------------------------

export const MultipleRows: Story = {
  name: 'Multiple Rows (Data Grid Pattern)',
  render: () => {
    const rows = [
      { label: 'Annual Report 2025',       value: 100, state: 'success' as const, hint: '12 MB of 12 MB' },
      { label: 'Q4 Presentation',          value: 70,  state: 'active'  as const, hint: '3.5 MB of 5 MB' },
      { label: 'Product Roadmap',          value: 45,  state: 'active'  as const, hint: '900 KB of 2 MB' },
      { label: 'Budget Forecast 2026.xlsx',value: 24,  state: 'error'   as const, hint: '1.2 MB of 5 MB' },
      { label: 'Employee Handbook',        value: 0,   state: 'active'  as const, hint: 'Queued' },
    ]

    return (
      <div
        style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           '20px',
          maxWidth:      '480px',
          fontFamily:    'var(--font-family-base)',
        }}
      >
        {rows.map(row => (
          <ProgressBar
            key={row.label}
            label={row.label}
            value={row.value}
            hint={row.hint}
            state={row.state}
          />
        ))}
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Session timeout (modal placement pattern)
// ---------------------------------------------------------------------------

export const SessionTimeout: Story = {
  name: 'Session Timeout Pattern',
  render: () => {
    const [seconds, setSeconds] = useState(30)

    useEffect(() => {
      if (seconds <= 0) return
      const t = setTimeout(() => setSeconds(s => s - 1), 1000)
      return () => clearTimeout(t)
    }, [seconds])

    const value = Math.round((seconds / 30) * 100)

    return (
      <div
        style={{
          border:       '1px solid var(--border-neutral)',
          borderRadius: '12px',
          padding:      '24px',
          maxWidth:     '400px',
          fontFamily:   'var(--font-family-base)',
          display:      'flex',
          flexDirection:'column',
          gap:          '16px',
        }}
      >
        <div>
          <h2 style={{ margin: '0 0 4px', fontSize: '18px', color: 'var(--text-loud)' }}>
            You're about to be signed out
          </h2>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
            This will happen in {seconds} second{seconds !== 1 ? 's' : ''}
          </p>
        </div>
        <ProgressBar
          label="Session timeout"
          value={value}
          hideLabel
          state={seconds <= 0 ? 'error' : 'active'}
        />
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => setSeconds(30)}
            style={{
              padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-default)',
              background: 'transparent', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit',
            }}
          >
            Continue session
          </button>
          <button
            type="button"
            style={{
              padding: '8px 16px', borderRadius: '8px', border: 'none',
              background: 'var(--bg-primary)', color: 'var(--text-on-fill)',
              cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit',
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Value range
// ---------------------------------------------------------------------------

export const ValueRange: Story = {
  name: 'Value Range',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
      {[0, 25, 50, 75, 100].map(v => (
        <ProgressBar key={v} label={`Progress ${v}%`} value={v} hideLabel />
      ))}
    </div>
  ),
}
