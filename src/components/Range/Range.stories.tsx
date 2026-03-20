import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Range } from './Range'
import type { RangeProps } from './Range'

// ---------------------------------------------------------------------------

const meta: Meta<RangeProps> = {
  title: 'Components/Range',
  component: Range,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<RangeProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(60)
    return (
      <div style={{ maxWidth: '480px' }}>
        <Range label="Volume level" value={value} onChange={setValue} />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => {
    const [sm, setSm] = useState(40)
    const [md, setMd] = useState(60)
    return (
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Range label="Small" size="small" value={sm} onChange={setSm} />
        <Range label="Medium (default)" size="medium" value={md} onChange={setMd} />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With min/max labels
// ---------------------------------------------------------------------------

export const WithMinMax: Story = {
  name: 'With Min / Max Labels',
  render: () => {
    const [value, setValue] = useState(500)
    return (
      <div style={{ maxWidth: '480px' }}>
        <Range
          label="Price"
          min={0}
          max={1000}
          step={10}
          value={value}
          onChange={setValue}
          showMinMax
          formatValue={v => `$${v}`}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With markers
// ---------------------------------------------------------------------------

export const WithMarkers: Story = {
  name: 'With Markers',
  render: () => {
    const [v1, setV1] = useState(3)
    const [v2, setV2] = useState(50)
    return (
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Stepped: 0–5 */}
        <Range
          label="Rating"
          min={0}
          max={5}
          step={1}
          value={v1}
          onChange={setV1}
          markers
          showMinMax
          formatValue={v => `${v} stars`}
          hint="Values snap to whole stars."
        />

        {/* Custom marker positions */}
        <Range
          label="Priority level"
          min={0}
          max={100}
          step={1}
          value={v2}
          onChange={setV2}
          markers={[0, 25, 50, 75, 100]}
          showMinMax
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With indicators
// ---------------------------------------------------------------------------

export const WithIndicators: Story = {
  name: 'With Indicators',
  render: () => {
    const [temp, setTemp]   = useState(2)
    const [vol, setVol]     = useState(2)
    return (
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <Range
          label="Temperature"
          min={0}
          max={4}
          step={1}
          value={temp}
          onChange={setTemp}
          markers
          indicators={[
            { value: 0, label: 'Cold' },
            { value: 1, label: 'Cool' },
            { value: 2, label: 'Moderate' },
            { value: 3, label: 'Warm' },
            { value: 4, label: 'Hot' },
          ]}
        />

        <Range
          label="Volume"
          min={0}
          max={4}
          step={1}
          value={vol}
          onChange={setVol}
          markers
          indicators={[
            { value: 0, label: 'Mute' },
            { value: 1, label: 'Low' },
            { value: 2, label: 'Medium' },
            { value: 3, label: 'High' },
            { value: 4, label: 'Max' },
          ]}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Dual range
// ---------------------------------------------------------------------------

export const DualRange: Story = {
  name: 'Dual Range',
  render: () => {
    const [price, setPrice]   = useState<[number, number]>([200, 800])
    const [nights, setNights] = useState<[number, number]>([3, 10])

    return (
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <Range
          dual
          label="Price range"
          min={0}
          max={1000}
          step={10}
          value={price}
          onChange={setPrice}
          showMinMax
          formatValue={v => `$${v}`}
          lowLabel="Minimum price"
          highLabel="Maximum price"
          hint={`$${price[0]} – $${price[1]}`}
        />

        <Range
          dual
          label="Stay duration"
          min={1}
          max={30}
          step={1}
          value={nights}
          onChange={setNights}
          showMinMax
          formatValue={v => `${v} nights`}
          lowLabel="Minimum nights"
          highLabel="Maximum nights"
          hint={`${nights[0]} – ${nights[1]} nights`}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Custom format value
// ---------------------------------------------------------------------------

export const FormatValue: Story = {
  name: 'Custom Format Value',
  render: () => {
    const [brightness, setBrightness] = useState(75)
    const [temp, setTemp]             = useState(22)
    const [speed, setSpeed]           = useState(1.5)

    return (
      <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Range
          label="Brightness"
          value={brightness}
          onChange={setBrightness}
          formatValue={v => `${v}%`}
          showMinMax
        />
        <Range
          label="Temperature"
          min={16}
          max={30}
          step={0.5}
          value={temp}
          onChange={setTemp}
          formatValue={v => `${v}°C`}
          showMinMax
        />
        <Range
          label="Playback speed"
          min={0.5}
          max={3}
          step={0.25}
          value={speed}
          onChange={setSpeed}
          formatValue={v => `${v}×`}
          showMinMax
          markers={[0.5, 1, 1.5, 2, 3]}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Hint text
// ---------------------------------------------------------------------------

export const WithHint: Story = {
  name: 'With Hint',
  render: () => {
    const [value, setValue] = useState(80)
    return (
      <div style={{ maxWidth: '480px' }}>
        <Range
          label="Maximum volume"
          value={value}
          onChange={setValue}
          formatValue={v => `${v}%`}
          hint="Maximum volume cannot exceed 80% in presentation mode."
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Left-label position
// ---------------------------------------------------------------------------

export const LabelLeft: Story = {
  name: 'Label Left',
  render: () => {
    const [opacity, setOpacity]   = useState(80)
    const [zoom, setZoom]         = useState(100)
    const [blur, setBlur]         = useState(0)

    return (
      <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Range
          label="Opacity"
          labelPosition="left"
          value={opacity}
          onChange={setOpacity}
          formatValue={v => `${v}%`}
        />
        <Range
          label="Zoom"
          labelPosition="left"
          min={50}
          max={200}
          step={10}
          value={zoom}
          onChange={setZoom}
          formatValue={v => `${v}%`}
        />
        <Range
          label="Blur"
          labelPosition="left"
          min={0}
          max={20}
          step={1}
          value={blur}
          onChange={setBlur}
          formatValue={v => `${v}px`}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Range
        label="Volume (disabled)"
        value={60}
        onChange={() => {}}
        disabled
      />
      <Range
        dual
        label="Price range (disabled)"
        min={0}
        max={1000}
        step={10}
        value={[200, 800]}
        onChange={() => {}}
        disabled
        formatValue={v => `$${v}`}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Validation (error)
// ---------------------------------------------------------------------------

export const Validation: Story = {
  name: 'Validation',
  render: () => {
    const [value, setValue] = useState(15)
    const isError = value < 20

    return (
      <div style={{ maxWidth: '480px' }}>
        <Range
          label="Temperature"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={setValue}
          formatValue={v => `${v}°C`}
          showMinMax
          validation={isError ? 'negative' : undefined}
          validationMessage={isError ? 'Value must be at least 20°C for optimal performance.' : undefined}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Combined with number input
// ---------------------------------------------------------------------------

export const CombinedWithInput: Story = {
  name: 'Combined with Number Input',
  render: () => {
    const [value, setValue] = useState(75)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const next = Math.min(100, Math.max(0, Number(e.target.value)))
      setValue(next)
    }

    return (
      <div
        style={{
          maxWidth:      '480px',
          display:       'flex',
          alignItems:    'center',
          gap:           '16px',
          fontFamily:    'var(--font-family-base)',
        }}
      >
        <div style={{ flex: 1 }}>
          <Range
            label="Opacity"
            hideLabel
            value={value}
            onChange={setValue}
            formatValue={v => `${v}%`}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <input
            type="number"
            value={value}
            min={0}
            max={100}
            onChange={handleInputChange}
            aria-label="Opacity value"
            style={{
              width:        '60px',
              height:       '36px',
              padding:      '0 8px',
              border:       '1px solid var(--border-default)',
              borderRadius: '8px',
              fontFamily:   'var(--font-family-base)',
              fontSize:     '14px',
              textAlign:    'right',
            }}
          />
          <span style={{ fontSize: '14px', color: 'var(--text-soft)' }}>%</span>
        </div>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Hidden label (accessible)
// ---------------------------------------------------------------------------

export const HiddenLabel: Story = {
  name: 'Hidden Label',
  render: () => {
    const [value, setValue] = useState(50)
    return (
      <div style={{ maxWidth: '480px' }}>
        <Range
          label="Volume (visually hidden)"
          hideLabel
          value={value}
          onChange={setValue}
          formatValue={v => `${v}%`}
        />
      </div>
    )
  },
}
