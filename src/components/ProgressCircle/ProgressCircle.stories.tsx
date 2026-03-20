import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { ProgressCircle } from './ProgressCircle'
import type { ProgressCircleProps, ProgressCircleVariant } from './ProgressCircle'

// ---------------------------------------------------------------------------

const meta: Meta<ProgressCircleProps> = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  parameters: { layout: 'padded' },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: 'select',
      options: ['primary', 'positive', 'notice', 'negative'],
    },
    size: {
      control: { type: 'range', min: 80, max: 200, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<ProgressCircleProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    value: 75,
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LabelledCircle variant="primary"  value={72} caption="Primary" />
      <LabelledCircle variant="positive" value={100} caption="Positive" />
      <LabelledCircle variant="notice"   value={45}  caption="Notice" />
      <LabelledCircle variant="negative" value={18}  caption="Negative" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LabelledCircle size={80}  value={60} caption="Small (80px)"  />
      <LabelledCircle size={120} value={60} caption="Default (120px)" />
      <LabelledCircle size={160} value={60} caption="Large (160px)" />
      <LabelledCircle size={200} value={60} caption="XL (200px)"   />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Label formats
// ---------------------------------------------------------------------------

export const LabelFormats: Story = {
  name: 'Label Formats',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LabelledCircle value={75}  caption="Percentage (default)" />
      <LabelledCircle value={30}  label="3"      caption="Integer" />
      <LabelledCircle value={72}  label="72/100" labelFontSize={20} caption="Fraction" />
      <LabelledCircle value={100} label="99+"    caption="Overflow" />
      <LabelledCircle value={0}   caption="Zero" />
      <LabelledCircle value={100} variant="positive" caption="Complete" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Value range
// ---------------------------------------------------------------------------

export const ValueRange: Story = {
  name: 'Value Range',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      {[0, 10, 25, 50, 75, 90, 100].map(v => (
        <ProgressCircle key={v} value={v} size={80} />
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Animated — interactive simulation
// ---------------------------------------------------------------------------

export const Animated: Story = {
  name: 'Animated (live)',
  render: () => {
    const [value, setValue] = useState(0)
    const [running, setRunning] = useState(true)

    useEffect(() => {
      if (!running) return
      if (value >= 100) {
        setRunning(false)
        return
      }
      const t = setTimeout(
        () => setValue(v => Math.min(v + Math.floor(Math.random() * 4) + 1, 100)),
        120,
      )
      return () => clearTimeout(t)
    }, [value, running])

    function reset() {
      setValue(0)
      setRunning(true)
    }

    const variant: ProgressCircleVariant =
      value === 100 ? 'positive' : value > 75 ? 'notice' : 'primary'

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
        <ProgressCircle value={value} variant={variant} size={140} />
        <button
          type="button"
          onClick={reset}
          style={{
            padding:   '6px 14px',
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
// Holiday balance — Timesheets pattern (from spec)
// ---------------------------------------------------------------------------

export const HolidayBalance: Story = {
  name: 'Holiday Balance (Timesheets Pattern)',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <MetricCard
        value={10}
        maxValue={20}
        label="10"
        variant="primary"
        title="Holiday"
        subtext="days available"
        detail="5 days taken"
      />
      <MetricCard
        value={3}
        maxValue={5}
        label="3"
        variant="notice"
        title="Holiday from last year"
        subtext="days available"
        detail="Use by 31 Dec 2025"
      />
      <MetricCard
        value={0}
        maxValue={10}
        label="0"
        variant="negative"
        title="Overtime"
        subtext="days remaining"
        detail="Balance reset 1 Jan"
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Dashboard widgets
// ---------------------------------------------------------------------------

export const DashboardWidgets: Story = {
  name: 'Dashboard Widgets',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <MetricCard value={72}  maxValue={100} label="72%"  variant="primary"  title="Profile complete"     subtext="of all sections" detail="3 sections remaining" />
      <MetricCard value={85}  maxValue={100} label="85%"  variant="positive" title="Tasks this week"      subtext="completion rate"  detail="17 of 20 done" />
      <MetricCard value={40}  maxValue={100} label="40%"  variant="notice"   title="Storage used"         subtext="of 100 GB"       detail="60 GB remaining" />
      <MetricCard value={92}  maxValue={100} label="92%"  variant="negative" title="Capacity"             subtext="seats occupied"   detail="8 seats left" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Custom font sizes
// ---------------------------------------------------------------------------

export const CustomFontSizes: Story = {
  name: 'Custom Font Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LabelledCircle size={80}  value={70} labelFontSize={14} caption="80px, 14px font" />
      <LabelledCircle size={120} value={70} labelFontSize={24} caption="120px, 24px font" />
      <LabelledCircle size={160} value={70} labelFontSize={48} caption="160px, 48px font" />
      <LabelledCircle size={200} value={70} labelFontSize={64} caption="200px, 64px font" />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function LabelledCircle({
  caption,
  ...props
}: ProgressCircleProps & { caption: string }) {
  return (
    <div
      style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '8px',
        fontFamily:     'var(--font-family-base)',
        fontSize:       '12px',
        color:          'var(--text-soft)',
      }}
    >
      <ProgressCircle {...props} />
      <span>{caption}</span>
    </div>
  )
}

function MetricCard({
  value,
  maxValue,
  label,
  variant,
  title,
  subtext,
  detail,
}: {
  value:    number
  maxValue: number
  label:    string
  variant:  ProgressCircleVariant
  title:    string
  subtext:  string
  detail:   string
}) {
  const pct = Math.round((value / maxValue) * 100)

  return (
    <div
      style={{
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           '12px',
        padding:       '24px 20px',
        border:        '1px solid var(--border-neutral)',
        borderRadius:  '12px',
        background:    'var(--bg-surface)',
        width:         '160px',
        fontFamily:    'var(--font-family-base)',
        textAlign:     'center',
      }}
    >
      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-loud)' }}>
        {title}
      </span>
      <ProgressCircle
        value={pct}
        label={label}
        variant={variant}
        size={100}
        labelFontSize={32}
        ariaLabel={`${label} ${subtext}`}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text)' }}>{subtext}</span>
        <span style={{ fontSize: '11px', color: 'var(--text-soft)' }}>{detail}</span>
      </div>
    </div>
  )
}
