import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'
import type { BreadcrumbsProps } from './Breadcrumbs'

// ---------------------------------------------------------------------------

const meta: Meta<BreadcrumbsProps> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { layout: 'padded' },
  argTypes: {
    separator: { control: 'radio', options: ['chevron', 'slash'] },
    maxItems:  { control: 'number' },
  },
}

export default meta
type Story = StoryObj<BreadcrumbsProps>

// ---------------------------------------------------------------------------
// Shared items
// ---------------------------------------------------------------------------

const basicItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', current: true },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    items: basicItems,
  },
}

// ---------------------------------------------------------------------------
// Slash separator
// ---------------------------------------------------------------------------

export const SlashSeparator: Story = {
  name: 'Slash Separator',
  args: {
    items: basicItems,
    separator: 'slash',
  },
}

// ---------------------------------------------------------------------------
// Two levels
// ---------------------------------------------------------------------------

export const TwoLevels: Story = {
  name: 'Two Levels',
  args: {
    items: [
      { label: 'Settings', href: '/settings' },
      { label: 'Security', current: true },
    ],
  },
}

// ---------------------------------------------------------------------------
// With overflow (maxItems)
// ---------------------------------------------------------------------------

export const WithOverflow: Story = {
  name: 'With Overflow',
  args: {
    maxItems: 4,
    items: [
      { label: 'Home', href: '/' },
      { label: 'Organisation', href: '/org' },
      { label: 'Unit4 ERP', href: '/org/unit4' },
      { label: 'Finance', href: '/org/unit4/finance' },
      { label: 'Accounts Payable', href: '/org/unit4/finance/ap' },
      { label: 'Invoices', href: '/org/unit4/finance/ap/invoices' },
      { label: 'INV-2024-0091', current: true },
    ],
  },
}

// ---------------------------------------------------------------------------
// With per-item menu (sibling pages)
// ---------------------------------------------------------------------------

export const WithMenu: Story = {
  name: 'With Sibling Menu',
  args: {
    items: [
      { label: 'Home', href: '/' },
      {
        label: 'Projects',
        href: '/projects',
        menu: [
          { label: 'Website Redesign', href: '/projects/website' },
          { label: 'Mobile App', href: '/projects/mobile' },
          { label: 'Design System', href: '/projects/ds' },
        ],
      },
      { label: 'Design System', current: true },
    ],
  },
}

// ---------------------------------------------------------------------------
// Long labels (truncation)
// ---------------------------------------------------------------------------

export const LongLabels: Story = {
  name: 'Long Labels (Truncation)',
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Human Resources Management', href: '/hr' },
      { label: 'Employee Onboarding & Offboarding', href: '/hr/onboarding' },
      { label: 'Q1 2025 New Hire Batch — EMEA Region', current: true },
    ],
  },
}

// ---------------------------------------------------------------------------
// Separator comparison
// ---------------------------------------------------------------------------

export const Separators: Story = {
  name: 'Separator Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['chevron', 'slash'] as const).map(sep => (
        <div key={sep}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '0 0 8px' }}>
            separator=&quot;{sep}&quot;
          </p>
          <Breadcrumbs items={basicItems} separator={sep} />
        </div>
      ))}
    </div>
  ),
}
