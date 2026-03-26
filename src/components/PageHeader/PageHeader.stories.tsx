import type { Meta, StoryObj } from '@storybook/react'
import {
  Plus,
  Pencil,
  Download,
  Share2,
  Trash2,
  Eye,
  Settings,
  Sparkles,
} from 'lucide-react'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Tag } from '../Tag'
import { PageHeader } from './PageHeader'
import type { PageHeaderProps, ToolbarAction } from './PageHeader'

// ---------------------------------------------------------------------------

const meta: Meta<PageHeaderProps> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<PageHeaderProps>

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const singleAction: ToolbarAction[] = [
  { id: 'create', label: 'Create project', type: 'primary', icon: <Plus size={16} /> },
]

const twoActions: ToolbarAction[] = [
  { id: 'share', label: 'Share',          type: 'secondary', icon: <Share2 size={16} /> },
  { id: 'edit',  label: 'Edit project',   type: 'primary',   icon: <Pencil size={16} /> },
]

const threeActions: ToolbarAction[] = [
  { id: 'action',   label: 'Action',         type: 'tertiary' },
  { id: 'download', label: 'Download',        type: 'secondary', icon: <Download size={16} /> },
  { id: 'edit',     label: 'Edit document',   type: 'primary',   icon: <Pencil size={16} /> },
]

const fiveActions: ToolbarAction[] = [
  { id: 'preview',  label: 'Preview',        type: 'tertiary',  icon: <Eye size={16} /> },
  { id: 'export',   label: 'Export',         type: 'tertiary',  icon: <Download size={16} /> },
  { id: 'settings', label: 'Settings',       type: 'secondary', icon: <Settings size={16} /> },
  { id: 'share',    label: 'Share',          type: 'secondary', icon: <Share2 size={16} /> },
  { id: 'edit',     label: 'Edit project',   type: 'primary',   icon: <Pencil size={16} /> },
]

const sevenActions: ToolbarAction[] = [
  ...fiveActions,
  { id: 'delete', label: 'Delete',    type: 'tertiary',  icon: <Trash2 size={16} /> },
  { id: 'clone',  label: 'Duplicate', type: 'secondary', icon: <Plus size={16} /> },
]

function DiscussAva() {
  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-50)', alignItems: 'center' }}>
      <Button variant="outline" color="neutral" size="medium">
        Discuss
      </Button>
      <IconButton
        icon={<Sparkles size={16} />}
        aria-label="Open AVA"
        variant="outline"
        color="neutral"
        size="medium"
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    title:       'Projects',
    mainActions: singleAction,
  },
}

// ---------------------------------------------------------------------------
// With description
// ---------------------------------------------------------------------------

export const WithDescription: Story = {
  name: 'With Description',
  args: {
    title:       'Projects',
    description: 'Manage and track all active projects in your workspace.',
    mainActions: twoActions,
  },
}

// ---------------------------------------------------------------------------
// With breadcrumb
// ---------------------------------------------------------------------------

export const WithBreadcrumb: Story = {
  name: 'With Breadcrumb',
  args: {
    showBreadcrumb: true,
    breadcrumbItems: [
      { label: 'Home',     href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Website Redesign', current: true },
    ],
    title:       'Website Redesign',
    description: 'Design and development project for the new company website.',
    mainActions: twoActions,
  },
}

// ---------------------------------------------------------------------------
// With date + tags + last update
// ---------------------------------------------------------------------------

export const WithMetadata: Story = {
  name: 'With Date, Tags & Last Update',
  args: {
    date:           'Monday, March 02',
    title:          'Website Redesign',
    description:    'Design and development for the new company website.',
    lastUpdateInfo: 'Last update: 2 hours ago',
    tags: [
      <Badge key="1" variant="fill" color="positive" size="medium">Active</Badge>,
      <Tag   key="2" color="orange" size="medium">High Priority</Tag>,
    ],
    mainActions: twoActions,
  },
}

// ---------------------------------------------------------------------------
// With secondary toolbar (Discuss + AVA)
// ---------------------------------------------------------------------------

export const WithSecondaryToolbar: Story = {
  name: 'With Secondary Toolbar',
  args: {
    title:            'Product Design Specification',
    tags: [
      <Tag   key="1" color="blue" size="medium">v3.2.1</Tag>,
      <Badge key="2" variant="fill" color="positive" size="medium">Published</Badge>,
    ],
    secondaryToolbar: <DiscussAva />,
    mainActions:      threeActions,
  },
}

// ---------------------------------------------------------------------------
// Adaptive toolbar — interactive resize demo
// ---------------------------------------------------------------------------

export const AdaptiveToolbar: Story = {
  name: 'Adaptive Toolbar (resize window)',
  args: {
    title:       'Enterprise Resource Planning Dashboard',
    description: 'Resize the browser window to see the toolbar adapt.',
    mainActions: fiveActions,
  },
}

// ---------------------------------------------------------------------------
// Overflow — 7 actions (some move to ⋯)
// ---------------------------------------------------------------------------

export const WithOverflow: Story = {
  name: 'With Overflow (7 actions)',
  args: {
    title:       'Project Report Q4 2025',
    mainActions: sevenActions,
  },
}

// ---------------------------------------------------------------------------
// Compact variant
// ---------------------------------------------------------------------------

export const Compact: Story = {
  name: 'Compact',
  args: {
    title:       'Settings',
    description: 'Configure your account preferences.',
    compact:     true,
    mainActions: [
      { id: 'save', label: 'Save changes', type: 'primary', size: 'small' },
    ],
  },
}

// ---------------------------------------------------------------------------
// Sticky
// ---------------------------------------------------------------------------

export const Sticky: Story = {
  name: 'Sticky',
  decorators: [
    Story => (
      <div style={{ height: '200vh', background: 'var(--bg-canvas, #f5f5f5)', paddingTop: '0' }}>
        <Story />
        <div style={{ padding: '32px 48px', fontFamily: 'var(--font-family-base)', color: 'var(--text-soft)', fontSize: '14px' }}>
          Scroll down — header stays fixed at the top.
        </div>
      </div>
    ),
  ],
  args: {
    title:       'Projects',
    sticky:      true,
    mainActions: twoActions,
  },
}

// ---------------------------------------------------------------------------
// Truncate title (50/50 split)
// ---------------------------------------------------------------------------

export const TruncatedTitle: Story = {
  name: 'Truncated Title (50/50 split)',
  args: {
    title:         'Enterprise Digital Transformation Initiative for Global Operations Q4 2025–2026',
    description:   'A comprehensive multi-year programme to modernise technology infrastructure.',
    truncateTitle: true,
    lastUpdateInfo: 'Last update: 2 minutes ago',
    tags: [
      <Badge key="1" variant="fill" color="notice" size="medium">In Progress</Badge>,
      <Tag   key="2" color="blue" size="medium">Phase 2</Tag>,
    ],
    secondaryToolbar: <DiscussAva />,
    mainActions:      threeActions,
  },
}

// ---------------------------------------------------------------------------
// Kitchen sink — everything
// ---------------------------------------------------------------------------

export const KitchenSink: Story = {
  name: 'Kitchen Sink',
  render: () => (
      <PageHeader
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Home',     href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'Website Redesign', current: true },
        ]}
        date="Monday, March 02"
        title="Website Redesign"
        description="Design and development project for the new company website. This project spans three quarters."
        lastUpdateInfo="Last update: 2 hours ago"
        tags={[
          <Badge key="1" variant="fill" color="positive" size="medium">Active</Badge>,
          <Tag   key="2" color="orange"                  size="medium">High Priority</Tag>,
          <Tag   key="3" color="blue"                    size="medium">Q1 2026</Tag>,
        ]}
        secondaryToolbar={<DiscussAva />}
        mainActions={[
          { id: 'export',  label: 'Export',        type: 'tertiary',  icon: <Download size={16} /> },
          { id: 'share',   label: 'Share',         type: 'secondary', icon: <Share2 size={16} /> },
          { id: 'edit',    label: 'Edit project',  type: 'primary',   icon: <Pencil size={16} /> },
        ]}
      />
  ),
}

// ---------------------------------------------------------------------------
// Loading / disabled actions
// ---------------------------------------------------------------------------

export const ActionStates: Story = {
  name: 'Action States',
  args: {
    title: 'Document Processing',
    mainActions: [
      { id: 'cancel',  label: 'Cancel',  type: 'tertiary', disabled: true },
      { id: 'save',    label: 'Saving…', type: 'primary',  loading: true, icon: <Download size={16} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// Narrow container — simulates mobile layout
// ---------------------------------------------------------------------------

export const MobileLayout: Story = {
  name: 'Mobile Layout (narrow container)',
  decorators: [
    Story => (
      <div style={{ maxWidth: '375px', border: '1px solid var(--border-neutral)', borderRadius: '8px', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    showBreadcrumb: true,
    breadcrumbItems: [
      { label: 'Projects',         href: '/projects' },
      { label: 'Website Redesign', current: true },
    ],
    date:           'Monday, March 02',
    title:          'Website Redesign',
    description:    'Design and development project.',
    lastUpdateInfo: 'Last update: 2 hours ago',
    tags: [
      <Badge key="1" variant="fill" color="positive" size="small">Active</Badge>,
      <Tag   key="2" color="orange"                  size="small">Design</Tag>,
    ],
    mobileMenuActions: [
      { id: 'discuss', label: 'Discuss', type: 'secondary' },
      { id: 'ava',     label: 'Ask AVA', type: 'secondary', icon: <Sparkles size={16} /> },
    ],
    mainActions: [
      { id: 'share',  label: 'Share',        type: 'secondary', icon: <Share2 size={16} /> },
      { id: 'delete', label: 'Delete',       type: 'tertiary',  icon: <Trash2 size={16} /> },
      { id: 'edit',   label: 'Edit project', type: 'primary',   icon: <Pencil size={16} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// With icon buttons in secondary toolbar
// ---------------------------------------------------------------------------

export const MinimalHeader: Story = {
  name: 'Minimal (title only)',
  args: {
    title: 'Account Settings',
  },
}

export const WithConversation: Story = {
  name: 'With Full Discuss + AVA Toolbar',
  args: {
    title: 'People Management',
    description: 'Manage employee records, time off, and payroll.',
    secondaryToolbar: (
      <div style={{ display: 'flex', gap: 'var(--spacing-50)', alignItems: 'center' }}>
        <Button variant="outline" color="neutral" size="medium">
          Discuss
        </Button>
        <IconButton
          icon={<Sparkles size={16} />}
          aria-label="Open AVA"
          variant="outline"
          color="neutral"
          size="medium"
        />
      </div>
    ),
    mainActions: [
      { id: 'export', label: 'Export',         type: 'secondary', icon: <Download size={16} /> },
      { id: 'add',    label: 'Add employee',   type: 'primary',   icon: <Plus size={16} /> },
    ],
  },
}
