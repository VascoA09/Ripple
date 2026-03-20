import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Shared

const sectionTitle: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '11px',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: 'var(--text-soft)',
  marginBottom: '16px',
}

const label: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--text-accent)',
}

const meta2: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--text-soft)',
}

// ---------------------------------------------------------------------------
// SPACING

export const Spacing: Story = {
  render: () => (
    <div style={{ padding: '24px', maxWidth: '640px' }}>
      <p style={sectionTitle}>Spacing primitives</p>
      <p style={{ ...meta2, marginBottom: '24px' }}>
        All whitespace properties — padding, margin, gap.
      </p>

      {[
        { token: '--spacing-none', value: '0',     px: 0   },
        { token: '--spacing-25',   value: '4px',   px: 4   },
        { token: '--spacing-50',   value: '8px',   px: 8   },
        { token: '--spacing-75',   value: '12px',  px: 12  },
        { token: '--spacing-100',  value: '16px',  px: 16  },
        { token: '--spacing-125',  value: '20px',  px: 20  },
        { token: '--spacing-150',  value: '24px',  px: 24  },
        { token: '--spacing-200',  value: '32px',  px: 32  },
        { token: '--spacing-250',  value: '40px',  px: 40  },
        { token: '--spacing-400',  value: '64px',  px: 64  },
        { token: '--spacing-600',  value: '96px',  px: 96  },
        { token: '--spacing-800',  value: '128px', px: 128 },
      ].map(({ token, value, px }) => (
        <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <span style={{ ...label, width: '148px', flexShrink: 0 }}>{token}</span>
          <div
            style={{
              height: '16px',
              width: px === 0 ? '2px' : px,
              background: px === 0 ? 'var(--border-default)' : 'var(--bg-primary-soft)',
              borderRadius: '2px',
              flexShrink: 0,
            }}
          />
          <span style={meta2}>{value}</span>
        </div>
      ))}

      <div style={{ marginTop: '32px', borderTop: '1px solid var(--border-neutral)', paddingTop: '24px' }}>
        <p style={sectionTitle}>Semantic spacing</p>

        <p style={{ ...meta2, marginBottom: '12px', color: 'var(--text-soft)' }}>Component padding</p>
        {[
          { token: '--spacing-component-padding-tight',   ref: 'spacing.50',  value: '8px'  },
          { token: '--spacing-component-padding-default', ref: 'spacing.100', value: '16px' },
          { token: '--spacing-component-padding-relaxed', ref: 'spacing.150', value: '24px' },
        ].map(({ token, ref, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ ...label, width: '300px', flexShrink: 0 }}>{token}</span>
            <span style={meta2}>→ {ref} ({value})</span>
          </div>
        ))}

        <p style={{ ...meta2, marginBottom: '12px', marginTop: '16px', color: 'var(--text-soft)' }}>Component gaps</p>
        {[
          { token: '--spacing-component-gap-inline',  ref: 'spacing.25',  value: '4px'  },
          { token: '--spacing-component-gap-tight',   ref: 'spacing.50',  value: '8px'  },
          { token: '--spacing-component-gap-default', ref: 'spacing.100', value: '16px' },
          { token: '--spacing-component-gap-relaxed', ref: 'spacing.150', value: '24px' },
        ].map(({ token, ref, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ ...label, width: '300px', flexShrink: 0 }}>{token}</span>
            <span style={meta2}>→ {ref} ({value})</span>
          </div>
        ))}

        <p style={{ ...meta2, marginBottom: '12px', marginTop: '16px', color: 'var(--text-soft)' }}>Layout</p>
        {[
          { token: '--spacing-layout-section-small',   ref: 'spacing.200', value: '32px'  },
          { token: '--spacing-layout-section-default', ref: 'spacing.250', value: '40px'  },
          { token: '--spacing-layout-section-large',   ref: 'spacing.400', value: '64px'  },
          { token: '--spacing-layout-page-padding',    ref: 'spacing.150', value: '24px'  },
          { token: '--spacing-layout-page-margin',     ref: 'spacing.600', value: '96px'  },
        ].map(({ token, ref, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ ...label, width: '300px', flexShrink: 0 }}>{token}</span>
            <span style={meta2}>→ {ref} ({value})</span>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// SIZE

export const Size: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <p style={sectionTitle}>Size primitives</p>
      <p style={{ ...meta2, marginBottom: '24px' }}>
        Physical dimensions — widths and heights.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end', marginBottom: '32px' }}>
        {[
          { token: '--size-100', value: '16px', px: 16 },
          { token: '--size-125', value: '20px', px: 20 },
          { token: '--size-150', value: '24px', px: 24 },
          { token: '--size-200', value: '32px', px: 32 },
          { token: '--size-250', value: '40px', px: 40 },
          { token: '--size-300', value: '48px', px: 48 },
          { token: '--size-350', value: '56px', px: 56 },
          { token: '--size-400', value: '64px', px: 64 },
          { token: '--size-450', value: '72px', px: 72 },
          { token: '--size-500', value: '80px', px: 80 },
          { token: '--size-525', value: '84px', px: 84 },
          { token: '--size-550', value: '88px', px: 88 },
        ].map(({ token, value, px }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '32px',
                height: px,
                background: 'var(--bg-primary-soft)',
                borderRadius: '3px',
                border: '1px solid var(--border-primary)',
              }}
            />
            <span style={{ ...meta2, fontSize: '10px', textAlign: 'center' }}>{value}</span>
            <span style={{ ...label, fontSize: '10px', textAlign: 'center' }}>{token.replace('--size-', '')}</span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border-neutral)', paddingTop: '24px' }}>
        <p style={sectionTitle}>Semantic size</p>

        <p style={{ ...meta2, marginBottom: '12px', color: 'var(--text-soft)' }}>Component heights</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', marginBottom: '24px' }}>
          {[
            { token: '--size-component-height-compact', label: 'compact', value: '16px', px: 16 },
            { token: '--size-component-height-small',   label: 'small',   value: '32px', px: 32 },
            { token: '--size-component-height-default', label: 'default', value: '40px', px: 40 },
            { token: '--size-component-height-large',   label: 'large',   value: '48px', px: 48 },
          ].map(({ token, label: l, value, px }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '80px',
                  height: px,
                  background: 'var(--bg-neutral-soft)',
                  borderRadius: '4px',
                  border: '1px solid var(--border-neutral)',
                }}
              />
              <span style={{ ...meta2, fontSize: '10px' }}>{value}</span>
              <span style={{ ...label2, fontSize: '10px' }}>{l}</span>
            </div>
          ))}
        </div>

        <p style={{ ...meta2, marginBottom: '12px', color: 'var(--text-soft)' }}>Icons</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
          {[
            { label: 'small',   value: '16px', px: 16 },
            { label: 'default', value: '24px', px: 24 },
            { label: 'large',   value: '32px', px: 32 },
          ].map(({ label: l, value, px }) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: px,
                  height: px,
                  background: 'var(--bg-primary-soft)',
                  borderRadius: '50%',
                  border: '1px solid var(--border-primary)',
                }}
              />
              <span style={{ ...meta2, fontSize: '10px' }}>{value}</span>
              <span style={{ ...label2, fontSize: '10px' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

// Needed for the Size story — avoids clash with `label` style object above
const label2: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--text-accent)',
}

// ---------------------------------------------------------------------------
// BORDER

export const Border: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <p style={sectionTitle}>Border radius</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
        {[
          { token: '--border-radius-none',   value: '0',     radius: '0'     },
          { token: '--border-radius-100',    value: '4px',   radius: '4px'   },
          { token: '--border-radius-150',    value: '6px',   radius: '6px'   },
          { token: '--border-radius-200',    value: '8px',   radius: '8px'   },
          { token: '--border-radius-300',    value: '12px',  radius: '12px'  },
          { token: '--border-radius-400',    value: '16px',  radius: '16px'  },
          { token: '--border-radius-pill',   value: '999px', radius: '999px' },
          { token: '--border-radius-circle', value: '999px', radius: '50%'   },
        ].map(({ token, value, radius }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'var(--bg-primary-softest)',
                border: '2px solid var(--border-primary)',
                borderRadius: radius,
              }}
            />
            <span style={{ ...label, fontSize: '10px', textAlign: 'center' }}>{token.replace('--border-radius-', '')}</span>
            <span style={{ ...meta2, fontSize: '10px' }}>{value}</span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border-neutral)', paddingTop: '24px', marginBottom: '40px' }}>
        <p style={sectionTitle}>Border width</p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {[
            { token: '--border-width-none', value: '0',   width: '0'   },
            { token: '--border-width-100',  value: '1px', width: '1px' },
            { token: '--border-width-200',  value: '2px', width: '2px' },
            { token: '--border-width-400',  value: '4px', width: '4px' },
          ].map(({ token, value, width }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '56px',
                  height: '40px',
                  background: 'var(--bg-surface)',
                  border: `${width} solid var(--border-primary)`,
                  borderRadius: '4px',
                }}
              />
              <span style={{ ...label, fontSize: '10px', textAlign: 'center' }}>{token.replace('--border-width-', '')}</span>
              <span style={{ ...meta2, fontSize: '10px' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-neutral)', paddingTop: '24px' }}>
        <p style={sectionTitle}>Semantic radius</p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {[
            { token: 'component.default', radius: '4px',  label3: 'Buttons, inputs' },
            { token: 'container.default', radius: '8px',  label3: 'Cards, panels'   },
            { token: 'overlay.default',   radius: '12px', label3: 'Modals, popovers' },
          ].map(({ token, radius, label3 }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '80px',
                  height: '48px',
                  background: 'var(--bg-neutral-softest)',
                  border: '1px solid var(--border-neutral)',
                  borderRadius: radius,
                }}
              />
              <span style={{ ...label, fontSize: '10px', textAlign: 'center' }}>radius.{token}</span>
              <span style={{ ...meta2, fontSize: '10px', textAlign: 'center' }}>{label3}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// ELEVATION

export const Elevation: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <p style={sectionTitle}>Elevation — semantic tokens</p>
      <p style={{ ...meta2, marginBottom: '32px' }}>
        Switch to dark theme to see how shadows adapt. Surface color hierarchy handles ambient separation; shadows assert floating layers.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-end' }}>
        {[
          { token: '--elevation-card',     label3: 'card',     use: 'Cards, panels'            },
          { token: '--elevation-raised',   label3: 'raised',   use: 'Raised cards, popovers'   },
          { token: '--elevation-dropdown', label3: 'dropdown', use: 'Dropdowns, menus'         },
          { token: '--elevation-modal',    label3: 'modal',    use: 'Dialogs, drawers'         },
          { token: '--elevation-overlay',  label3: 'overlay',  use: 'App-level overlays'       },
        ].map(({ token, label3, use }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '100px',
                height: '80px',
                background: 'var(--bg-surface)',
                borderRadius: '8px',
                boxShadow: `var(${token})`,
              }}
            />
            <span style={{ ...label, fontSize: '11px', textAlign: 'center' }}>elevation.{label3}</span>
            <span style={{ ...meta2, fontSize: '10px', textAlign: 'center', maxWidth: '100px' }}>{use}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '48px', borderTop: '1px solid var(--border-neutral)', paddingTop: '24px' }}>
        <p style={sectionTitle}>Elevation — box-shadow primitives</p>
        <p style={{ ...meta2, marginBottom: '24px' }}>
          Shadow color: color.gray.80 (#424747) · Light mode opacity: 16% (24% at 800)
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-end' }}>
          {[
            { token: '--box-shadow-100', label3: '100', value: '0 2px 4px'   },
            { token: '--box-shadow-200', label3: '200', value: '0 4px 8px'   },
            { token: '--box-shadow-300', label3: '300', value: '0 8px 16px'  },
            { token: '--box-shadow-400', label3: '400', value: '0 16px 32px' },
            { token: '--box-shadow-800', label3: '800', value: '0 32px 64px' },
          ].map(({ token, label3, value }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '72px',
                  height: '56px',
                  background: 'var(--bg-surface)',
                  borderRadius: '4px',
                  boxShadow: `var(${token})`,
                }}
              />
              <span style={{ ...label, fontSize: '11px' }}>box-shadow-{label3}</span>
              <span style={{ ...meta2, fontSize: '10px' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
