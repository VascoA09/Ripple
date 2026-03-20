import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Globe, Tag, Users, BarChart2, Clock, Star,
  CheckCircle, AlertCircle, Pause,
} from 'lucide-react'
import { Dropdown } from './Dropdown'
import type { DropdownProps, DropdownOption } from './Dropdown'

// ---------------------------------------------------------------------------

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'padded' },
  argTypes: {
    size:       { control: 'select', options: ['small', 'medium', 'large'] },
    validation: { control: 'select', options: [undefined, 'negative', 'notice', 'positive'] },
    disabled:   { control: 'boolean' },
    required:   { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<DropdownProps>

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

const statusOptions: DropdownOption[] = [
  { value: 'active',   label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending',  label: 'Pending' },
  { value: 'archived', label: 'Archived' },
]

export const Default: Story = {
  args: {
    label:       'Status',
    placeholder: 'Select status...',
    options:     statusOptions,
    size:        'medium',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '280px' }}>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => {
    const [values, setValues] = useState({ small: '', medium: '', large: '' })
    const opts: DropdownOption[] = [
      { value: 'last7',  label: 'Last 7 days' },
      { value: 'last30', label: 'Last 30 days' },
      { value: 'last90', label: 'Last 90 days' },
      { value: 'custom', label: 'Custom range' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '280px' }}>
        {(['small', 'medium', 'large'] as const).map(size => (
          <Dropdown
            key={size}
            label={`${size.charAt(0).toUpperCase() + size.slice(1)} (${size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'})`}
            placeholder="Select range..."
            options={opts}
            size={size}
            value={values[size]}
            onChange={v => setValues(prev => ({ ...prev, [size]: v }))}
          />
        ))}
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With icons and descriptions
// ---------------------------------------------------------------------------

const statusWithMeta: DropdownOption[] = [
  {
    value:       'active',
    label:       'Active',
    description: 'Currently active and available',
    icon:        <CheckCircle size={14} />,
  },
  {
    value:       'pending',
    label:       'Pending',
    description: 'Awaiting approval or action',
    icon:        <Clock size={14} />,
  },
  {
    value:       'paused',
    label:       'Paused',
    description: 'Temporarily suspended',
    icon:        <Pause size={14} />,
  },
  {
    value:       'inactive',
    label:       'Inactive',
    description: 'No longer active',
    icon:        <AlertCircle size={14} />,
  },
]

export const WithIconsAndDescriptions: Story = {
  name: 'With Icons & Descriptions',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '320px' }}>
        <Dropdown
          label="Project status"
          placeholder="Choose status..."
          options={statusWithMeta}
          value={value}
          onChange={setValue}
          helperText="Controls visibility across all modules"
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Grouped options
// ---------------------------------------------------------------------------

const regionOptions: DropdownOption[] = [
  { value: 'us',  label: 'United States',  group: 'North America' },
  { value: 'ca',  label: 'Canada',         group: 'North America' },
  { value: 'mx',  label: 'Mexico',         group: 'North America' },
  { value: 'gb',  label: 'United Kingdom', group: 'Europe' },
  { value: 'de',  label: 'Germany',        group: 'Europe' },
  { value: 'nl',  label: 'Netherlands',    group: 'Europe' },
  { value: 'au',  label: 'Australia',      group: 'Asia Pacific' },
  { value: 'sg',  label: 'Singapore',      group: 'Asia Pacific' },
]

export const GroupedOptions: Story = {
  name: 'Grouped Options',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ maxWidth: '280px' }}>
        <Dropdown
          label="Country"
          placeholder="Select a country..."
          options={regionOptions}
          value={value}
          onChange={setValue}
          helperText="Choose your country of residence"
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Validation states
// ---------------------------------------------------------------------------

export const Validation: Story = {
  render: () => {
    const [values, setValues] = useState({ error: '', notice: '', success: 'active' })
    const opts: DropdownOption[] = [
      { value: 'active',  label: 'Active' },
      { value: 'pending', label: 'Pending' },
      { value: 'closed',  label: 'Closed' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '280px' }}>
        <Dropdown
          label="Status (error)"
          placeholder="Select status..."
          options={opts}
          value={values.error}
          onChange={v => setValues(p => ({ ...p, error: v }))}
          validation="negative"
          validationMessage="Please select a status to continue"
          required
        />
        <Dropdown
          label="Status (notice)"
          placeholder="Select status..."
          options={opts}
          value={values.notice}
          onChange={v => setValues(p => ({ ...p, notice: v }))}
          validation="notice"
          validationMessage="This status affects downstream workflows"
        />
        <Dropdown
          label="Status (success)"
          placeholder="Select status..."
          options={opts}
          value={values.success}
          onChange={v => setValues(p => ({ ...p, success: v }))}
          validation="positive"
          validationMessage="Status saved successfully"
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const States: Story = {
  render: () => {
    const opts: DropdownOption[] = [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C', disabled: true },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '280px' }}>
        <Dropdown
          label="Default (no selection)"
          placeholder="Select..."
          options={opts}
        />
        <Dropdown
          label="With selection"
          placeholder="Select..."
          options={opts}
          value="a"
        />
        <Dropdown
          label="Disabled"
          placeholder="Select..."
          options={opts}
          disabled
        />
        <Dropdown
          label="Disabled with selection"
          placeholder="Select..."
          options={opts}
          value="a"
          disabled
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With disabled options
// ---------------------------------------------------------------------------

export const WithDisabledOptions: Story = {
  name: 'With Disabled Options',
  render: () => {
    const [value, setValue] = useState('')
    const opts: DropdownOption[] = [
      { value: 'viewer',    label: 'Viewer',       description: 'Read-only access' },
      { value: 'member',    label: 'Member',       description: 'Can edit content' },
      { value: 'admin',     label: 'Admin',        description: 'Full access' },
      { value: 'superuser', label: 'Super user',   description: 'Restricted to IT', disabled: true },
    ]

    return (
      <div style={{ maxWidth: '280px' }}>
        <Dropdown
          label="Role"
          placeholder="Assign a role..."
          options={opts}
          value={value}
          onChange={setValue}
          helperText="Super user role requires IT approval"
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Toolbar filter (small, no label)
// ---------------------------------------------------------------------------

export const ToolbarFilter: Story = {
  name: 'Toolbar Filter (small)',
  render: () => {
    const [sortBy, setSortBy]   = useState('name')
    const [period, setPeriod]   = useState('30d')
    const [dept, setDept]       = useState('')

    const sortOpts: DropdownOption[] = [
      { value: 'name',    label: 'Name',         icon: <Tag size={12} /> },
      { value: 'date',    label: 'Date',          icon: <Clock size={12} /> },
      { value: 'rating',  label: 'Rating',        icon: <Star size={12} /> },
      { value: 'revenue', label: 'Revenue',       icon: <BarChart2 size={12} /> },
    ]

    const periodOpts: DropdownOption[] = [
      { value: '7d',  label: 'Last 7 days' },
      { value: '30d', label: 'Last 30 days' },
      { value: '90d', label: 'Last 90 days' },
      { value: '1y',  label: 'Last year' },
    ]

    const deptOpts: DropdownOption[] = [
      { value: 'all',         label: 'All departments', icon: <Globe size={12} /> },
      { value: 'engineering', label: 'Engineering',     icon: <Users size={12} /> },
      { value: 'design',      label: 'Design',          icon: <Users size={12} /> },
      { value: 'finance',     label: 'Finance',         icon: <Users size={12} /> },
    ]

    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', flexWrap: 'wrap' }}>
        <div style={{ width: '140px' }}>
          <Dropdown
            label="Sort by"
            options={sortOpts}
            value={sortBy}
            onChange={setSortBy}
            size="small"
          />
        </div>
        <div style={{ width: '140px' }}>
          <Dropdown
            label="Period"
            options={periodOpts}
            value={period}
            onChange={setPeriod}
            size="small"
          />
        </div>
        <div style={{ width: '160px' }}>
          <Dropdown
            label="Department"
            placeholder="All..."
            options={deptOpts}
            value={dept}
            onChange={setDept}
            size="small"
          />
        </div>
      </div>
    )
  },
}
