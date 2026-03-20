import type { Meta, StoryObj } from '@storybook/react'
import { Copy, Download, Edit, Eye, Info, Settings, Trash2 } from 'lucide-react'
import { Tooltip } from './Tooltip'
import type { TooltipProps } from './Tooltip'
import { IconButton } from '../IconButton'
import { Button } from '../Button'
import { Badge } from '../Badge'

// ---------------------------------------------------------------------------

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end',
      ],
    },
    delay:     { control: 'number' },
    maxWidth:  { control: 'text' },
  },
}

export default meta
type Story = StoryObj<TooltipProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    content:   'Download report as PDF',
    placement: 'top',
    showArrow: true,
    delay:     300,
    disabled:  false,
    maxWidth:  '200px',
  },
  render: (args) => (
    <Tooltip {...args}>
      <IconButton icon={<Download size={16} />} aria-label="Download" />
    </Tooltip>
  ),
}

// ---------------------------------------------------------------------------
// Placements — all 4 sides + start/end alignments
// ---------------------------------------------------------------------------

export const Placements: Story = {
  name: 'Placements',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '80px 40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '48px' }}>
        Placements
      </p>

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '80px' }}>
        {(['top-start', 'top', 'top-end'] as const).map(p => (
          <Tooltip key={p} content={`placement="${p}"`} placement={p}>
            <Button variant="outline" size="small">{p}</Button>
          </Tooltip>
        ))}
      </div>

      {/* Middle row: left + right */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {(['left-start', 'left', 'left-end'] as const).map(p => (
            <Tooltip key={p} content={`placement="${p}"`} placement={p}>
              <Button variant="outline" size="small">{p}</Button>
            </Tooltip>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
          {(['right-start', 'right', 'right-end'] as const).map(p => (
            <Tooltip key={p} content={`placement="${p}"`} placement={p}>
              <Button variant="outline" size="small">{p}</Button>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {(['bottom-start', 'bottom', 'bottom-end'] as const).map(p => (
          <Tooltip key={p} content={`placement="${p}"`} placement={p}>
            <Button variant="outline" size="small">{p}</Button>
          </Tooltip>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Icon Button Toolbar — primary use case
// ---------------------------------------------------------------------------

export const IconButtonToolbar: Story = {
  name: 'Icon Button Toolbar',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Icon Button Toolbar
      </p>

      <div style={{ display: 'inline-flex', gap: '4px', padding: '4px', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '8px' }}>
        <Tooltip content="Edit"><IconButton icon={<Edit size={16} />} aria-label="Edit" variant="ghost" /></Tooltip>
        <Tooltip content="Copy"><IconButton icon={<Copy size={16} />} aria-label="Copy" variant="ghost" /></Tooltip>
        <Tooltip content="Preview"><IconButton icon={<Eye size={16} />} aria-label="Preview" variant="ghost" /></Tooltip>
        <Tooltip content="Settings"><IconButton icon={<Settings size={16} />} aria-label="Settings" variant="ghost" /></Tooltip>
        <Tooltip content="Delete item"><IconButton icon={<Trash2 size={16} />} aria-label="Delete" variant="ghost" /></Tooltip>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Badges — explaining status indicators
// ---------------------------------------------------------------------------

export const WithBadges: Story = {
  name: 'With Badges',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Status Badges
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Tooltip content="Awaiting manager approval">
          <Badge color="notice">Pending</Badge>
        </Tooltip>
        <Tooltip content="Request approved and processed">
          <Badge color="positive">Approved</Badge>
        </Tooltip>
        <Tooltip content="Submission failed — resubmit required">
          <Badge color="negative">Error</Badge>
        </Tooltip>
        <Tooltip content="Moved to archive. Read-only.">
          <Badge color="neutral">Archived</Badge>
        </Tooltip>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// No Arrow
// ---------------------------------------------------------------------------

export const NoArrow: Story = {
  name: 'No Arrow',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        showArrow=false
      </p>

      <Tooltip content="No directional arrow" showArrow={false}>
        <Button variant="outline">Hover me</Button>
      </Tooltip>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Long Content — wrapping at maxWidth
// ---------------------------------------------------------------------------

export const LongContent: Story = {
  name: 'Long Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Text wrap at maxWidth
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Tooltip content="Short label" placement="bottom">
          <Button variant="outline" size="small">Short</Button>
        </Tooltip>
        <Tooltip content="This tooltip has more content and will wrap at the default 200px max width." placement="bottom">
          <Button variant="outline" size="small">Wrapping</Button>
        </Tooltip>
        <Tooltip content="Custom max width of 120px forces earlier wrapping." placement="bottom" maxWidth="120px">
          <Button variant="outline" size="small">Narrow</Button>
        </Tooltip>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Disabled tooltip
      </p>

      <div style={{ display: 'flex', gap: '16px' }}>
        <Tooltip content="This tooltip is active">
          <Button variant="outline" size="small">Active</Button>
        </Tooltip>
        <Tooltip content="This tooltip is disabled" disabled>
          <Button variant="outline" size="small">No tooltip</Button>
        </Tooltip>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Keyboard Shortcut — common enterprise pattern
// ---------------------------------------------------------------------------

export const KeyboardShortcut: Story = {
  name: 'Keyboard Shortcut',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '40px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Keyboard shortcut hints
      </p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <Tooltip content="Save (Ctrl+S)">
          <IconButton icon={<Download size={16} />} aria-label="Save" />
        </Tooltip>
        <Tooltip content="More information">
          <IconButton icon={<Info size={16} />} aria-label="More information" />
        </Tooltip>
      </div>
    </div>
  ),
}
