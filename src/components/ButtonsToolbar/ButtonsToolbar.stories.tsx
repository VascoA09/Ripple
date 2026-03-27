import type { Meta, StoryObj } from '@storybook/react'
import {
  Plus,
  Download,
  Pencil,
  Trash2,
  Share2,
  RefreshCw,
  Settings,
  Upload,
  Filter,
  Eye,
} from 'lucide-react'
import { ButtonsToolbar } from './ButtonsToolbar'
import type { ButtonsToolbarProps, ToolbarAction } from './ButtonsToolbar'

// ---------------------------------------------------------------------------

const meta: Meta<ButtonsToolbarProps> = {
  title: 'Components/ButtonsToolbar',
  component: ButtonsToolbar,
  parameters: { layout: 'padded' },
  argTypes: {
    variant:   { control: 'radio', options: ['full', 'compact', 'minimal'] },
    alignment: { control: 'radio', options: ['left', 'right'] },
    iconOnly:  { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<ButtonsToolbarProps>

// ---------------------------------------------------------------------------
// Shared action sets
// ---------------------------------------------------------------------------

const pageActions: ToolbarAction[] = [
  { id: 'refresh', label: 'Refresh',   icon: <RefreshCw size={16} />,  type: 'tertiary'  },
  { id: 'share',   label: 'Share',     icon: <Share2 size={16} />,     type: 'tertiary'  },
  { id: 'export',  label: 'Export',    icon: <Download size={16} />,   type: 'secondary' },
  { id: 'create',  label: 'New record',icon: <Plus size={16} />,       type: 'primary'   },
]

const richActions: ToolbarAction[] = [
  { id: 'filter',   label: 'Filter',    icon: <Filter size={16} />,    type: 'tertiary'  },
  { id: 'refresh',  label: 'Refresh',   icon: <RefreshCw size={16} />, type: 'tertiary'  },
  { id: 'settings', label: 'Settings',  icon: <Settings size={16} />,  type: 'tertiary'  },
  { id: 'share',    label: 'Share',     icon: <Share2 size={16} />,    type: 'tertiary'  },
  { id: 'preview',  label: 'Preview',   icon: <Eye size={16} />,       type: 'secondary' },
  { id: 'save',     label: 'Save',      icon: <Upload size={16} />,    type: 'primary'   },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    actions: pageActions,
    variant: 'full',
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      {(['full', 'compact', 'minimal'] as const).map(variant => (
        <div key={variant}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
            variant=&quot;{variant}&quot;
          </p>
          <ButtonsToolbar actions={richActions} variant={variant} />
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Overflow (6+ actions trigger overflow in full variant)
// ---------------------------------------------------------------------------

export const WithOverflow: Story = {
  name: 'With Overflow',
  args: {
    actions: richActions,
    variant: 'full',
  },
}

// ---------------------------------------------------------------------------
// Icon only
// ---------------------------------------------------------------------------

export const IconOnly: Story = {
  name: 'Icon Only',
  args: {
    actions: pageActions,
    iconOnly: true,
  },
}

// ---------------------------------------------------------------------------
// Right alignment
// ---------------------------------------------------------------------------

export const RightAlignment: Story = {
  name: 'Right Alignment',
  args: {
    actions: pageActions,
    alignment: 'right',
  },
}

// ---------------------------------------------------------------------------
// With disabled and loading
// ---------------------------------------------------------------------------

export const States: Story = {
  name: 'Disabled & Loading',
  args: {
    actions: [
      { id: 'edit',   label: 'Edit',   icon: <Pencil size={16} />,   type: 'tertiary',  disabled: true },
      { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />,   type: 'secondary', disabled: true },
      { id: 'save',   label: 'Saving…',icon: <Upload size={16} />,   type: 'primary',   loading: true  },
    ],
  },
}

// ---------------------------------------------------------------------------
// Responsive simulation
// ---------------------------------------------------------------------------

export const Responsive: Story = {
  name: 'Responsive (resize to see)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
          ≥ 1024px — full (simulate with argTypes)
        </p>
        <ButtonsToolbar actions={richActions} variant="full" />
      </div>
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
          768–1023px — compact
        </p>
        <ButtonsToolbar actions={richActions} variant="compact" />
      </div>
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
          &lt; 768px — minimal
        </p>
        <ButtonsToolbar actions={richActions} variant="minimal" />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Combined toolbars (left + right pattern)
// ---------------------------------------------------------------------------

export const CombinedToolbars: Story = {
  name: 'Combined Toolbars',
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Left toolbar uses alignment="right" so emphasis reads fill → outline → ghost
          left to right, with the primary action at the leading edge */}
      <ButtonsToolbar
        alignment="right"
        actions={[
          { id: 'filter',  label: 'Filter',    icon: <Filter size={16} />,   type: 'tertiary'  },
          { id: 'export',  label: 'Export',    icon: <Download size={16} />, type: 'secondary' },
          { id: 'create',  label: 'New record',icon: <Plus size={16} />,     type: 'primary'   },
        ]}
      />
      <ButtonsToolbar
        alignment="right"
        iconOnly
        actions={[
          { id: 'refresh',  label: 'Refresh',  icon: <RefreshCw size={16} />, type: 'tertiary' },
          { id: 'settings', label: 'Settings', icon: <Settings size={16} />,  type: 'tertiary' },
        ]}
      />
    </div>
  ),
}
