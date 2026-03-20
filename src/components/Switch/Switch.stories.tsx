import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './Switch'
import type { SwitchProps } from './Switch'

// ---------------------------------------------------------------------------

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  argTypes: {
    labelPosition: { control: 'select', options: ['before', 'after'] },
    disabled:      { control: 'boolean' },
    label:         { control: 'text' },
  },
}

export default meta
type Story = StoryObj<SwitchProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label:         'Enable notifications',
    labelPosition: 'after',
    disabled:      false,
  },
}

// ---------------------------------------------------------------------------
// States — uncontrolled with defaultChecked
// ---------------------------------------------------------------------------

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: 0 }}>
        States
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>unselected</span>
          <Switch label="Dark mode" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>selected</span>
          <Switch label="Dark mode" defaultChecked />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>disabled unselected</span>
          <Switch label="Dark mode" disabled />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>disabled selected</span>
          <Switch label="Dark mode" disabled defaultChecked />
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Label positions
// ---------------------------------------------------------------------------

export const LabelPositions: Story = {
  name: 'Label Positions',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: 0 }}>
        Label Positions
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>after (default)</span>
          <Switch label="Auto-save" labelPosition="after" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>before</span>
          <Switch label="Auto-save" labelPosition="before" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>stand-alone (no label)</span>
          <Switch aria-label="Toggle auto-save" />
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Controlled — demonstrates state lifting
// ---------------------------------------------------------------------------

function ControlledExample() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch
        label="Enable notifications"
        checked={enabled}
        onChange={e => setEnabled(e.target.checked)}
      />
      <p style={{ fontSize: '13px', color: 'var(--text-soft)', margin: 0 }}>
        State: <strong style={{ color: 'var(--text)' }}>{enabled ? 'on' : 'off'}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>
        Controlled
      </p>
      <ControlledExample />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — settings list
// ---------------------------------------------------------------------------

const settings = [
  { id: 'notifications', label: 'Enable notifications', defaultChecked: true },
  { id: 'dark-mode',     label: 'Dark mode',            defaultChecked: false },
  { id: 'auto-save',     label: 'Auto-save',            defaultChecked: true },
  { id: 'analytics',     label: 'Share usage analytics', defaultChecked: false },
]

export const InContext: Story = {
  name: 'In Context — Settings List',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px', maxWidth: '360px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px', marginTop: 0 }}>
        In Context — Settings List
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {settings.map((s, i) => (
          <div
            key={s.id}
            style={{
              display:        'flex',
              justifyContent: 'space-between',
              alignItems:     'center',
              padding:        'var(--spacing-100) 0',
              borderBottom:   i < settings.length - 1 ? `var(--border-width-100) solid var(--border-neutral)` : 'none',
            }}
          >
            <span style={{ fontSize: 'var(--font-size-80)', color: 'var(--text)' }}>
              {s.label}
            </span>
            <Switch
              id={s.id}
              aria-label={s.label}
              defaultChecked={s.defaultChecked}
            />
          </div>
        ))}
      </div>
    </div>
  ),
}
