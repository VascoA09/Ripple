import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Color Tokens',
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj

// ---------------------------------------------------------------------------

interface SwatchProps {
  name: string
  value: string
}

function Swatch({ name, value }: SwatchProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          background: value,
          border: '1px solid rgba(128,128,128,0.2)',
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontFamily: 'monospace', fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>
          {name}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-soft)' }}>
          {value}
        </div>
      </div>
    </div>
  )
}

interface GroupProps {
  label: string
  swatches: SwatchProps[]
}

function SwatchGroup({ label, swatches }: GroupProps) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3
        style={{
          fontFamily: 'sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--text-soft)',
          marginBottom: '12px',
        }}
      >
        {label}
      </h3>
      {swatches.map((s) => (
        <Swatch key={s.name} {...s} />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Compact horizontal palette — all scales, all steps

const SCALES = [
  {
    label: 'Black & White',
    swatches: [
      { name: '--color-black', value: '#000000' },
      { name: '--color-white', value: '#FFFFFF' },
    ],
  },
  {
    label: 'Gray',
    swatches: [
      { name: '--color-gray-100', value: '#252828' },
      { name: '--color-gray-90',  value: '#373939' },
      { name: '--color-gray-80',  value: '#424747' },
      { name: '--color-gray-70',  value: '#737373' },
      { name: '--color-gray-60',  value: '#8D9090' },
      { name: '--color-gray-50',  value: '#989A9A' },
      { name: '--color-gray-40',  value: '#B7B9B9' },
      { name: '--color-gray-30',  value: '#D8D9D9' },
      { name: '--color-gray-20',  value: '#EAEAEA' },
      { name: '--color-gray-10',  value: '#F9F9F9' },
    ],
  },
  {
    label: 'Cool Gray',
    swatches: [
      { name: '--color-cool-gray-100', value: '#2F3B42' },
      { name: '--color-cool-gray-90',  value: '#394850' },
      { name: '--color-cool-gray-80',  value: '#4A5A64' },
      { name: '--color-cool-gray-70',  value: '#7C8D98' },
      { name: '--color-cool-gray-60',  value: '#909FA7' },
      { name: '--color-cool-gray-50',  value: '#A6B2B9' },
      { name: '--color-cool-gray-40',  value: '#BBC6CE' },
      { name: '--color-cool-gray-30',  value: '#DFE6EC' },
      { name: '--color-cool-gray-20',  value: '#EBF0F4' },
      { name: '--color-cool-gray-10',  value: '#F5F8FA' },
    ],
  },
  {
    label: 'Blue — Primary',
    swatches: [
      { name: '--color-blue-100', value: '#004C6F' },
      { name: '--color-blue-90',  value: '#005E8A' },
      { name: '--color-blue-80',  value: '#0076AD' },
      { name: '--color-blue-70',  value: '#0CA2E9' },
      { name: '--color-blue-60',  value: '#3DBAF5' },
      { name: '--color-blue-50',  value: '#64C8F7' },
      { name: '--color-blue-40',  value: '#9DDDFB' },
      { name: '--color-blue-30',  value: '#C5EAFC' },
      { name: '--color-blue-20',  value: '#E1F3FC' },
      { name: '--color-blue-10',  value: '#F1FAFF' },
    ],
  },
  {
    label: 'Red — Error',
    swatches: [
      { name: '--color-red-100', value: '#990606' },
      { name: '--color-red-90',  value: '#B70606' },
      { name: '--color-red-80',  value: '#D00B0B' },
      { name: '--color-red-70',  value: '#E5524D' },
      { name: '--color-red-60',  value: '#F16A65' },
      { name: '--color-red-50',  value: '#F48985' },
      { name: '--color-red-40',  value: '#F6A09D' },
      { name: '--color-red-30',  value: '#F8B7B4' },
      { name: '--color-red-20',  value: '#FBD2D0' },
      { name: '--color-red-10',  value: '#FDE8E6' },
    ],
  },
  {
    label: 'Orange — Warning',
    swatches: [
      { name: '--color-orange-100', value: '#993D00' },
      { name: '--color-orange-90',  value: '#B84C05' },
      { name: '--color-orange-80',  value: '#D25B0B' },
      { name: '--color-orange-70',  value: '#F08842' },
      { name: '--color-orange-60',  value: '#F29D64' },
      { name: '--color-orange-50',  value: '#F5B185' },
      { name: '--color-orange-40',  value: '#FAC099' },
      { name: '--color-orange-30',  value: '#FFCEAD' },
      { name: '--color-orange-20',  value: '#FFE0CC' },
      { name: '--color-orange-10',  value: '#FFEDE0' },
    ],
  },
  {
    label: 'Green — Success',
    swatches: [
      { name: '--color-green-100', value: '#2D6100' },
      { name: '--color-green-90',  value: '#3C8000' },
      { name: '--color-green-80',  value: '#64A329' },
      { name: '--color-green-70',  value: '#7EB843' },
      { name: '--color-green-60',  value: '#96C76B' },
      { name: '--color-green-50',  value: '#ABD388' },
      { name: '--color-green-40',  value: '#C0DEA5' },
      { name: '--color-green-30',  value: '#D0E6BC' },
      { name: '--color-green-20',  value: '#DFEFD2' },
      { name: '--color-green-10',  value: '#EFF7E9' },
    ],
  },
  {
    label: 'Emerald — Data viz',
    swatches: [
      { name: '--color-emerald-100', value: '#195C42' },
      { name: '--color-emerald-90',  value: '#217354' },
      { name: '--color-emerald-80',  value: '#247F5C' },
      { name: '--color-emerald-70',  value: '#39A078' },
      { name: '--color-emerald-60',  value: '#55AD8B' },
      { name: '--color-emerald-50',  value: '#7FC2A8' },
      { name: '--color-emerald-40',  value: '#95CCB7' },
      { name: '--color-emerald-30',  value: '#B2DACB' },
      { name: '--color-emerald-20',  value: '#D4EBE2' },
      { name: '--color-emerald-10',  value: '#EAF5F1' },
    ],
  },
  {
    label: 'Aqua — Data viz',
    swatches: [
      { name: '--color-aqua-100', value: '#01545B' },
      { name: '--color-aqua-90',  value: '#1A6166' },
      { name: '--color-aqua-80',  value: '#1F767C' },
      { name: '--color-aqua-70',  value: '#13A4B0' },
      { name: '--color-aqua-60',  value: '#4DBAC4' },
      { name: '--color-aqua-50',  value: '#67C4CC' },
      { name: '--color-aqua-40',  value: '#80CED5' },
      { name: '--color-aqua-30',  value: '#ADE0E4' },
      { name: '--color-aqua-20',  value: '#CCEBEE' },
      { name: '--color-aqua-10',  value: '#E5F6F8' },
    ],
  },
  {
    label: 'Purple — Data viz',
    swatches: [
      { name: '--color-purple-100', value: '#47428D' },
      { name: '--color-purple-90',  value: '#5B55B5' },
      { name: '--color-purple-80',  value: '#6A64C5' },
      { name: '--color-purple-70',  value: '#8983EE' },
      { name: '--color-purple-60',  value: '#9891FC' },
      { name: '--color-purple-50',  value: '#AEA9FC' },
      { name: '--color-purple-40',  value: '#BFBBFD' },
      { name: '--color-purple-30',  value: '#D8D6FE' },
      { name: '--color-purple-20',  value: '#E5E4FE' },
      { name: '--color-purple-10',  value: '#F2F1FF' },
    ],
  },
  {
    label: 'Violet — Data viz',
    swatches: [
      { name: '--color-violet-100', value: '#654578' },
      { name: '--color-violet-90',  value: '#82599A' },
      { name: '--color-violet-80',  value: '#885DA2' },
      { name: '--color-violet-70',  value: '#C18DDE' },
      { name: '--color-violet-60',  value: '#C99DE2' },
      { name: '--color-violet-50',  value: '#D7B5E9' },
      { name: '--color-violet-40',  value: '#DEC2ED' },
      { name: '--color-violet-30',  value: '#EBDAF4' },
      { name: '--color-violet-20',  value: '#F2E6F8' },
      { name: '--color-violet-10',  value: '#F8F3FB' },
    ],
  },
  {
    label: 'Pink — Data viz',
    swatches: [
      { name: '--color-pink-100', value: '#622D40' },
      { name: '--color-pink-90',  value: '#7E3A52' },
      { name: '--color-pink-80',  value: '#8C405B' },
      { name: '--color-pink-70',  value: '#E2769B' },
      { name: '--color-pink-60',  value: '#E891AF' },
      { name: '--color-pink-50',  value: '#EEADC3' },
      { name: '--color-pink-40',  value: '#F1BBCD' },
      { name: '--color-pink-30',  value: '#F6D6E1' },
      { name: '--color-pink-20',  value: '#F9E4EB' },
      { name: '--color-pink-10',  value: '#FCF1F5' },
    ],
  },
  {
    label: 'Ochre — Data viz',
    swatches: [
      { name: '--color-ochre-100', value: '#5A4F22' },
      { name: '--color-ochre-90',  value: '#74662C' },
      { name: '--color-ochre-80',  value: '#816F28' },
      { name: '--color-ochre-70',  value: '#D1BC69' },
      { name: '--color-ochre-60',  value: '#D9C782' },
      { name: '--color-ochre-50',  value: '#DECF94' },
      { name: '--color-ochre-40',  value: '#E4D7A6' },
      { name: '--color-ochre-30',  value: '#EFE7C9' },
      { name: '--color-ochre-20',  value: '#F4EFDB' },
      { name: '--color-ochre-10',  value: '#FAF7ED' },
    ],
  },
]

function PaletteRow({ label, swatches }: { label: string; swatches: SwatchProps[] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '11px',
          color: 'var(--text-soft)',
          width: '160px',
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', gap: '4px' }}>
        {swatches.map((s) => (
          <div
            key={s.name}
            title={`${s.name}\n${s.value}`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              background: s.value,
              border: '1px solid rgba(128,128,128,0.15)',
              flexShrink: 0,
              cursor: 'default',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export const Primitives: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-loud)' }}>Color Primitives</h1>
      <p style={{ color: 'var(--text-soft)', marginBottom: '4px', fontSize: '14px' }}>
        Tier 1 tokens. Never use these directly in components — always go through semantic tokens.
      </p>
      <p style={{ color: 'var(--text-soft)', marginBottom: '32px', fontSize: '12px' }}>
        Hover a swatch to see the token name and hex value.
      </p>
      {SCALES.map((scale) => (
        <PaletteRow key={scale.label} label={scale.label} swatches={scale.swatches} />
      ))}
    </div>
  ),
}

export const SemanticTheme: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-loud)' }}>Semantic Theme Tokens</h1>
      <p style={{ color: 'var(--text-soft)', marginBottom: '32px', fontSize: '14px' }}>
        Tier 2 tokens. These are what components use. Switch themes using the toolbar above.
      </p>

      <SwatchGroup label="Background — Layout" swatches={[
        { name: '--bg-app',        value: 'var(--bg-app)' },
        { name: '--bg-app-accent', value: 'var(--bg-app-accent)' },
        { name: '--bg-surface',    value: 'var(--bg-surface)' },
        { name: '--bg-nav',        value: 'var(--bg-nav)' },
        { name: '--bg-hover',      value: 'var(--bg-hover)' },
        { name: '--bg-pressed',    value: 'var(--bg-pressed)' },
        { name: '--bg-disabled',   value: 'var(--bg-disabled)' },
        { name: '--bg-overlay',    value: 'var(--bg-overlay)' },
      ]} />

      <SwatchGroup label="Background — Primary" swatches={[
        { name: '--bg-primary-loud',    value: 'var(--bg-primary-loud)' },
        { name: '--bg-primary',         value: 'var(--bg-primary)' },
        { name: '--bg-primary-soft',    value: 'var(--bg-primary-soft)' },
        { name: '--bg-primary-softest', value: 'var(--bg-primary-softest)' },
      ]} />

      <SwatchGroup label="Background — Negative" swatches={[
        { name: '--bg-negative-loud',    value: 'var(--bg-negative-loud)' },
        { name: '--bg-negative',         value: 'var(--bg-negative)' },
        { name: '--bg-negative-soft',    value: 'var(--bg-negative-soft)' },
        { name: '--bg-negative-softest', value: 'var(--bg-negative-softest)' },
      ]} />

      <SwatchGroup label="Background — Notice" swatches={[
        { name: '--bg-notice-loud',    value: 'var(--bg-notice-loud)' },
        { name: '--bg-notice',         value: 'var(--bg-notice)' },
        { name: '--bg-notice-soft',    value: 'var(--bg-notice-soft)' },
        { name: '--bg-notice-softest', value: 'var(--bg-notice-softest)' },
      ]} />

      <SwatchGroup label="Background — Positive" swatches={[
        { name: '--bg-positive-loud',    value: 'var(--bg-positive-loud)' },
        { name: '--bg-positive',         value: 'var(--bg-positive)' },
        { name: '--bg-positive-soft',    value: 'var(--bg-positive-soft)' },
        { name: '--bg-positive-softest', value: 'var(--bg-positive-softest)' },
      ]} />

      <SwatchGroup label="Background — Neutral" swatches={[
        { name: '--bg-neutral-loud',    value: 'var(--bg-neutral-loud)' },
        { name: '--bg-neutral',         value: 'var(--bg-neutral)' },
        { name: '--bg-neutral-soft',    value: 'var(--bg-neutral-soft)' },
        { name: '--bg-neutral-softest', value: 'var(--bg-neutral-softest)' },
      ]} />

      <SwatchGroup label="Border" swatches={[
        { name: '--border-primary-loud', value: 'var(--border-primary-loud)' },
        { name: '--border-primary',      value: 'var(--border-primary)' },
        { name: '--border-default',      value: 'var(--border-default)' },
        { name: '--border-focus',        value: 'var(--border-focus)' },
        { name: '--border-light',        value: 'var(--border-light)' },
        { name: '--border-disabled',     value: 'var(--border-disabled)' },
      ]} />

      <SwatchGroup label="Border — Status" swatches={[
        { name: '--border-negative-loud', value: 'var(--border-negative-loud)' },
        { name: '--border-negative',      value: 'var(--border-negative)' },
        { name: '--border-notice-loud',   value: 'var(--border-notice-loud)' },
        { name: '--border-notice',        value: 'var(--border-notice)' },
        { name: '--border-positive-loud', value: 'var(--border-positive-loud)' },
        { name: '--border-positive',      value: 'var(--border-positive)' },
        { name: '--border-neutral-loud',  value: 'var(--border-neutral-loud)' },
        { name: '--border-neutral',       value: 'var(--border-neutral)' },
      ]} />

      <SwatchGroup label="Text" swatches={[
        { name: '--text-loud',     value: 'var(--text-loud)' },
        { name: '--text',          value: 'var(--text)' },
        { name: '--text-soft',     value: 'var(--text-soft)' },
        { name: '--text-disabled', value: 'var(--text-disabled)' },
        { name: '--text-accent',   value: 'var(--text-accent)' },
        { name: '--text-negative', value: 'var(--text-negative)' },
        { name: '--text-notice',   value: 'var(--text-notice)' },
        { name: '--text-positive', value: 'var(--text-positive)' },
      ]} />

      <SwatchGroup label="Text — Inverse" swatches={[
        { name: '--text-loud-inverse', value: 'var(--text-loud-inverse)' },
        { name: '--text-inverse',      value: 'var(--text-inverse)' },
        { name: '--text-soft-inverse', value: 'var(--text-soft-inverse)' },
      ]} />

      <SwatchGroup label="Text — Links" swatches={[
        { name: '--text-link',         value: 'var(--text-link)' },
        { name: '--text-link-active',  value: 'var(--text-link-active)' },
        { name: '--text-link-visited', value: 'var(--text-link-visited)' },
      ]} />

      <SwatchGroup label="Icon" swatches={[
        { name: '--icon-default',      value: 'var(--icon-default)' },
        { name: '--icon-soft',         value: 'var(--icon-soft)' },
        { name: '--icon-disabled',     value: 'var(--icon-disabled)' },
        { name: '--icon-inverse',      value: 'var(--icon-inverse)' },
        { name: '--icon-loud-inverse', value: 'var(--icon-loud-inverse)' },
        { name: '--icon-soft-inverse', value: 'var(--icon-soft-inverse)' },
        { name: '--icon-accent',       value: 'var(--icon-accent)' },
        { name: '--icon-negative',     value: 'var(--icon-negative)' },
        { name: '--icon-notice',       value: 'var(--icon-notice)' },
        { name: '--icon-positive',     value: 'var(--icon-positive)' },
        { name: '--icon-neutral',      value: 'var(--icon-neutral)' },
      ]} />
    </div>
  ),
}
