import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Globe, User, Tag, MapPin } from 'lucide-react'
import { Combobox } from './Combobox'
import type { ComboboxProps, ComboboxOption } from './Combobox'

// ---------------------------------------------------------------------------

const meta: Meta<ComboboxProps> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: { layout: 'padded' },
  decorators: [Story => <div style={{ maxWidth: '400px', paddingBottom: '300px' }}><Story /></div>],
  argTypes: {
    size:          { control: 'radio',  options: ['small', 'medium', 'large'] },
    labelPosition: { control: 'radio',  options: ['stacked', 'inline'] },
    validation:    { control: 'select', options: [undefined, 'positive', 'notice', 'negative'] },
  },
}

export default meta
type Story = StoryObj<ComboboxProps>

// ---------------------------------------------------------------------------
// Shared data
// ---------------------------------------------------------------------------

const countries: ComboboxOption[] = [
  { value: 'nl', label: 'Netherlands', icon: <Globe size={16} />, description: 'Amsterdam' },
  { value: 'gb', label: 'United Kingdom', icon: <Globe size={16} />, description: 'London' },
  { value: 'de', label: 'Germany', icon: <Globe size={16} />, description: 'Berlin' },
  { value: 'fr', label: 'France', icon: <Globe size={16} />, description: 'Paris' },
  { value: 'us', label: 'United States', icon: <Globe size={16} />, description: 'New York' },
  { value: 'ca', label: 'Canada', icon: <Globe size={16} />, description: 'Toronto' },
  { value: 'au', label: 'Australia', icon: <Globe size={16} />, description: 'Sydney' },
  { value: 'jp', label: 'Japan', icon: <Globe size={16} />, description: 'Tokyo' },
  { value: 'br', label: 'Brazil', icon: <Globe size={16} />, description: 'São Paulo' },
  { value: 'in', label: 'India', icon: <Globe size={16} />, description: 'Mumbai' },
]

const teamMembers: ComboboxOption[] = [
  { value: 'alice',   label: 'Alice Johnson',   group: 'Engineering', icon: <User size={16} /> },
  { value: 'bob',     label: 'Bob Martinez',    group: 'Engineering', icon: <User size={16} /> },
  { value: 'carol',   label: 'Carol White',     group: 'Design',      icon: <User size={16} /> },
  { value: 'dan',     label: 'Dan Brown',       group: 'Design',      icon: <User size={16} /> },
  { value: 'eve',     label: 'Eve Davis',       group: 'Product',     icon: <User size={16} /> },
  { value: 'frank',   label: 'Frank Wilson',    group: 'Product',     icon: <User size={16} /> },
  { value: 'grace',   label: 'Grace Taylor',   group: 'Marketing',   icon: <User size={16} /> },
  { value: 'henry',   label: 'Henry Anderson', group: 'Marketing',   icon: <User size={16} />, disabled: true },
]

const tags: ComboboxOption[] = [
  { value: 'bug',      label: 'Bug',        icon: <Tag size={16} /> },
  { value: 'feature',  label: 'Feature',    icon: <Tag size={16} /> },
  { value: 'docs',     label: 'Docs',       icon: <Tag size={16} /> },
  { value: 'design',   label: 'Design',     icon: <Tag size={16} /> },
  { value: 'perf',     label: 'Performance',icon: <Tag size={16} /> },
  { value: 'a11y',     label: 'Accessibility', icon: <Tag size={16} /> },
  { value: 'test',     label: 'Testing',    icon: <Tag size={16} /> },
  { value: 'infra',    label: 'Infrastructure', icon: <Tag size={16} /> },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <Combobox
        label="Country"
        placeholder="Search countries…"
        options={countries}
        value={value}
        onChange={setValue}
        hint="Select the country for this record."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['small', 'medium', 'large'] as const).map(size => (
        <Combobox
          key={size}
          label={`Size: ${size}`}
          placeholder="Select…"
          options={countries}
          size={size}
        />
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With descriptions
// ---------------------------------------------------------------------------

export const WithDescriptions: Story = {
  name: 'With Descriptions',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <Combobox
        label="Country"
        placeholder="Search countries…"
        options={countries}
        value={value}
        onChange={setValue}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// With groups
// ---------------------------------------------------------------------------

export const WithGroups: Story = {
  name: 'With Groups',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <Combobox
        label="Assign to"
        placeholder="Search team members…"
        options={teamMembers}
        value={value}
        onChange={setValue}
        hint="Select one team member to assign this task to."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Multi-select
// ---------------------------------------------------------------------------

export const MultiSelect: Story = {
  name: 'Multi-Select',
  render: () => {
    const [values, setValues] = useState<string[]>(['bug', 'design'])
    return (
      <Combobox
        label="Labels"
        placeholder="Add labels…"
        selection="multi"
        options={tags}
        value={values}
        onChange={setValues}
        hint="Select all labels that apply."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Multi-select with groups
// ---------------------------------------------------------------------------

export const MultiSelectGrouped: Story = {
  name: 'Multi-Select with Groups',
  render: () => {
    const [values, setValues] = useState<string[]>([])
    return (
      <Combobox
        label="Team members"
        placeholder="Search team members…"
        selection="multi"
        options={teamMembers}
        value={values}
        onChange={setValues}
        hint="Select reviewers for this request."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Validation states
// ---------------------------------------------------------------------------

export const ValidationStates: Story = {
  name: 'Validation States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Combobox
        label="Country"
        options={countries}
        value="nl"
        validation="positive"
        validationMessage="Great, this region is supported."
      />
      <Combobox
        label="Department"
        options={teamMembers}
        validation="notice"
        validationMessage="This department has limited capacity this quarter."
      />
      <Combobox
        label="Assign to"
        options={teamMembers}
        required
        validation="negative"
        validationMessage="Please select a team member to assign this task."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    label:    'Country',
    options:  countries,
    value:    'nl',
    disabled: true,
    hint:     'This field is not editable.',
  },
}

// ---------------------------------------------------------------------------
// Inline label
// ---------------------------------------------------------------------------

export const InlineLabel: Story = {
  name: 'Inline Label',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '560px' }}>
        <Combobox
          label="Country"
          labelPosition="inline"
          options={countries}
          value={value}
          onChange={setValue}
          placeholder="Select a country…"
        />
        <Combobox
          label="Assign to"
          labelPosition="inline"
          options={teamMembers}
          placeholder="Search team members…"
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// No results
// ---------------------------------------------------------------------------

export const NoResults: Story = {
  name: 'No Results State',
  render: () => (
    <Combobox
      label="Category"
      options={[
        { value: 'a', label: 'Alpha' },
        { value: 'b', label: 'Beta' },
      ]}
      noResultsText="No categories match your search."
    />
  ),
}

// ---------------------------------------------------------------------------
// Location pattern — groups without icons
// ---------------------------------------------------------------------------

export const LocationGroups: Story = {
  name: 'Grouped Options (Locations)',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    const locations: ComboboxOption[] = [
      { value: 'ams', label: 'Amsterdam',  group: 'Netherlands', icon: <MapPin size={16} /> },
      { value: 'rtd', label: 'Rotterdam',  group: 'Netherlands', icon: <MapPin size={16} /> },
      { value: 'lon', label: 'London',     group: 'United Kingdom', icon: <MapPin size={16} /> },
      { value: 'mnc', label: 'Manchester', group: 'United Kingdom', icon: <MapPin size={16} /> },
      { value: 'ber', label: 'Berlin',     group: 'Germany', icon: <MapPin size={16} /> },
      { value: 'muc', label: 'Munich',     group: 'Germany', icon: <MapPin size={16} /> },
    ]
    return (
      <Combobox
        label="Office location"
        placeholder="Search locations…"
        options={locations}
        value={value}
        onChange={setValue}
      />
    )
  },
}
