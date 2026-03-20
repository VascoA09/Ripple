import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Grid',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------

const breakpoints = [
  { name: 'xs',  token: '--breakpoint-xs',  minWidth: '0px',    maxWidth: '100%',    gutter: '16px', gutterToken: '--spacing-100' },
  { name: 's',   token: '--breakpoint-s',   minWidth: '576px',  maxWidth: '560px',   gutter: '16px', gutterToken: '--spacing-100' },
  { name: 'm',   token: '--breakpoint-m',   minWidth: '768px',  maxWidth: '744px',   gutter: '16px', gutterToken: '--spacing-100' },
  { name: 'l',   token: '--breakpoint-l',   minWidth: '1024px', maxWidth: '984px',   gutter: '24px', gutterToken: '--spacing-150' },
  { name: 'xl',  token: '--breakpoint-xl',  minWidth: '1400px', maxWidth: '1320px',  gutter: '24px', gutterToken: '--spacing-150' },
  { name: 'xxl', token: '--breakpoint-xxl', minWidth: '1920px', maxWidth: '1792px',  gutter: '32px', gutterToken: '--spacing-200' },
]

// ---------------------------------------------------------------------------

export const BreakpointScale: Story = {
  name: 'Breakpoint Scale',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '900px' }}>
      <h1 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '4px' }}>
        Foundations
      </h1>
      <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-loud)', marginBottom: '4px' }}>
        Grid
      </p>
      <p style={{ fontSize: '14px', color: 'var(--text-soft)', marginBottom: '32px' }}>
        12 columns · 6 breakpoints · mobile-first. Switch themes using the toolbar above.
      </p>

      {/* Breakpoint table */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
          Breakpoints
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '60px 180px 1fr 1fr 1fr 1fr', gap: '0', fontSize: '12px' }}>
          {/* Header */}
          {['Name', 'Token', 'Min width', 'Max width', 'Gutter', 'Gutter token'].map(h => (
            <div key={h} style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--text-soft)', borderBottom: '2px solid var(--border-neutral)', fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {h}
            </div>
          ))}

          {breakpoints.map((bp, i) => {
            const isLast = i === breakpoints.length - 1
            const row: React.CSSProperties = {
              padding: '10px 12px',
              borderBottom: isLast ? 'none' : '1px solid var(--border-neutral)',
              display: 'flex',
              alignItems: 'center',
            }
            return (
              <>
                <div key={`${bp.name}-name`} style={row}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, color: 'var(--text-loud)' }}>{bp.name}</span>
                </div>
                <div key={`${bp.name}-token`} style={row}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-accent)' }}>{bp.token}</span>
                </div>
                <div key={`${bp.name}-min`} style={row}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text)' }}>{bp.minWidth}</span>
                </div>
                <div key={`${bp.name}-max`} style={row}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text)' }}>{bp.maxWidth}</span>
                </div>
                <div key={`${bp.name}-gutter`} style={row}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text)' }}>{bp.gutter}</span>
                </div>
                <div key={`${bp.name}-gtoken`} style={row}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)' }}>{bp.gutterToken}</span>
                </div>
              </>
            )
          })}
        </div>
      </div>

      {/* Visual breakpoint bar */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
          Scale
        </p>
        <div style={{ position: 'relative', height: '48px', background: 'var(--bg-neutral-soft)', borderRadius: '4px', overflow: 'hidden' }}>
          {[
            { label: 'xs', left: '0%',   width: '5%',  bg: 'var(--bg-accent-soft)' },
            { label: 's',  left: '5%',   width: '10%', bg: 'var(--bg-accent-subtle)' },
            { label: 'm',  left: '15%',  width: '10%', bg: 'var(--bg-accent-soft)' },
            { label: 'l',  left: '25%',  width: '20%', bg: 'var(--bg-accent-subtle)' },
            { label: 'xl', left: '45%',  width: '27%', bg: 'var(--bg-accent-soft)' },
            { label: 'xxl',left: '72%',  width: '28%', bg: 'var(--bg-accent-subtle)' },
          ].map(seg => (
            <div
              key={seg.label}
              style={{
                position: 'absolute',
                left: seg.left,
                width: seg.width,
                height: '100%',
                background: seg.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid var(--border-accent)',
              }}
            >
              <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, color: 'var(--text-accent)' }}>{seg.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', paddingInline: '0' }}>
          {['0', '576px', '768px', '1024px', '1400px', '1920px'].map(v => (
            <span key={v} style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{v}</span>
          ))}
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------

const columnSpans = [
  { label: 'Full',    cols: 12, use: 'Full-bleed content, page headers' },
  { label: 'Wide',    cols: 10, use: 'Primary content with side margin' },
  { label: 'Main',    cols: 8,  use: 'Content area in two-column layout' },
  { label: 'Half',    cols: 6,  use: 'Two equal columns' },
  { label: 'Sidebar', cols: 4,  use: 'Sidebar or supporting panel' },
  { label: 'Third',   cols: 4,  use: 'Three equal columns' },
  { label: 'Quarter', cols: 3,  use: 'Four equal columns' },
]

export const ColumnSpans: Story = {
  name: 'Column Spans',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '900px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Named span patterns — 12 columns
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {columnSpans.map(({ label, cols, use }) => (
          <div key={label} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 200px', gap: '12px', alignItems: 'center' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', textAlign: 'right' }}>
              <span style={{ fontWeight: 700, color: 'var(--text-loud)' }}>{cols}</span>/12
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3px', height: '28px' }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '2px',
                    background: i < cols ? 'var(--bg-accent-soft)' : 'var(--bg-neutral-subtle)',
                    border: `1px solid ${i < cols ? 'var(--border-accent)' : 'var(--border-neutral)'}`,
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-soft)' }}>
              <span style={{ fontWeight: 600, color: 'var(--text)', marginRight: '6px' }}>{label}</span>{use}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------

export const Container: Story = {
  name: 'Container',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', background: 'var(--bg-neutral-subtle)', minHeight: '100vh', padding: '24px 0' }}>
      <div style={{ fontFamily: 'sans-serif', padding: '0 24px', marginBottom: '24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '8px' }}>
          Container utility — resize the window to see max-width adapt
        </p>
      </div>

      <div
        className="container"
        style={{
          background: 'var(--bg-default)',
          border: '1px dashed var(--border-accent)',
          borderRadius: '6px',
          padding: '24px',
        }}
      >
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-accent)', marginBottom: '8px' }}>
          .container
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-soft)', margin: 0 }}>
          width: 100% · margin-inline: auto · padding-inline: <strong>var(--grid-gutter)</strong> · max-width: <strong>var(--grid-max-width)</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gutter)', marginTop: '20px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-accent-soft)',
                border: '1px solid var(--border-accent)',
                borderRadius: '4px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--text-accent)',
                fontWeight: 700,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
