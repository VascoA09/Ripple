import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tag, MapPin, Briefcase, Clock } from 'lucide-react'
import { Combobox } from './Combobox'
import type { ComboboxProps, ComboboxOption } from './Combobox'
import { Avatar } from '../Avatar'

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
// Helpers
// ---------------------------------------------------------------------------

/** Renders a Unicode flag emoji at a consistent size */
function Flag({ emoji }: { emoji: string }) {
  return (
    <span style={{ fontSize: '16px', lineHeight: 1, display: 'inline-flex', alignItems: 'center' }}>
      {emoji}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Shared data
// ---------------------------------------------------------------------------

const countriesWithFlags: ComboboxOption[] = [
  { value: 'nl', label: 'Netherlands',   icon: <Flag emoji="🇳🇱" />, description: 'Amsterdam' },
  { value: 'gb', label: 'United Kingdom',icon: <Flag emoji="🇬🇧" />, description: 'London' },
  { value: 'de', label: 'Germany',       icon: <Flag emoji="🇩🇪" />, description: 'Berlin' },
  { value: 'fr', label: 'France',        icon: <Flag emoji="🇫🇷" />, description: 'Paris' },
  { value: 'us', label: 'United States', icon: <Flag emoji="🇺🇸" />, description: 'New York' },
  { value: 'ca', label: 'Canada',        icon: <Flag emoji="🇨🇦" />, description: 'Toronto' },
  { value: 'au', label: 'Australia',     icon: <Flag emoji="🇦🇺" />, description: 'Sydney' },
  { value: 'jp', label: 'Japan',         icon: <Flag emoji="🇯🇵" />, description: 'Tokyo' },
  { value: 'br', label: 'Brazil',        icon: <Flag emoji="🇧🇷" />, description: 'São Paulo' },
  { value: 'in', label: 'India',         icon: <Flag emoji="🇮🇳" />, description: 'Mumbai' },
]

const teamMembersWithAvatars: ComboboxOption[] = [
  { value: 'alice', label: 'Alice Johnson',   group: 'Engineering', icon: <Avatar name="Alice Johnson"   size="s" /> },
  { value: 'bob',   label: 'Bob Martinez',    group: 'Engineering', icon: <Avatar name="Bob Martinez"    size="s" /> },
  { value: 'carol', label: 'Carol White',     group: 'Design',      icon: <Avatar name="Carol White"     size="s" /> },
  { value: 'dan',   label: 'Dan Brown',       group: 'Design',      icon: <Avatar name="Dan Brown"       size="s" /> },
  { value: 'eve',   label: 'Eve Davis',       group: 'Product',     icon: <Avatar name="Eve Davis"       size="s" /> },
  { value: 'frank', label: 'Frank Wilson',    group: 'Product',     icon: <Avatar name="Frank Wilson"    size="s" /> },
  { value: 'grace', label: 'Grace Taylor',   group: 'Marketing',   icon: <Avatar name="Grace Taylor"    size="s" /> },
  { value: 'henry', label: 'Henry Anderson', group: 'Marketing',   icon: <Avatar name="Henry Anderson"  size="s" />, disabled: true },
]

const labels: ComboboxOption[] = [
  { value: 'bug',      label: 'Bug',            icon: <Tag size={16} /> },
  { value: 'feature',  label: 'Feature',        icon: <Tag size={16} /> },
  { value: 'docs',     label: 'Docs',           icon: <Tag size={16} /> },
  { value: 'design',   label: 'Design',         icon: <Tag size={16} /> },
  { value: 'perf',     label: 'Performance',    icon: <Tag size={16} /> },
  { value: 'a11y',     label: 'Accessibility',  icon: <Tag size={16} /> },
  { value: 'test',     label: 'Testing',        icon: <Tag size={16} /> },
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
        options={countriesWithFlags}
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
          options={countriesWithFlags}
          size={size}
        />
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Icons
// ---------------------------------------------------------------------------

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    const projectTypes: ComboboxOption[] = [
      { value: 'service',  label: 'Service project',  description: 'Track and resolve customer requests', icon: <Briefcase size={16} /> },
      { value: 'time',     label: 'Time tracking',    description: 'Log hours and manage timesheets',     icon: <Clock size={16} /> },
      { value: 'location', label: 'Office locations', description: 'Manage physical work locations',      icon: <MapPin size={16} /> },
    ]
    return (
      <Combobox
        label="Project type"
        placeholder="Choose a project type…"
        options={projectTypes}
        value={value}
        onChange={setValue}
        hint="The icon appears in the field once an option is selected."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// With Avatars
// ---------------------------------------------------------------------------

export const WithAvatars: Story = {
  name: 'With Avatars',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <Combobox
        label="Assign to"
        placeholder="Search team members…"
        options={teamMembersWithAvatars}
        value={value}
        onChange={setValue}
        hint="The avatar appears in the field once a person is selected."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// With Flags
// ---------------------------------------------------------------------------

export const WithFlags: Story = {
  name: 'With Flags',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    return (
      <Combobox
        label="Country"
        placeholder="Search countries…"
        options={countriesWithFlags}
        value={value}
        onChange={setValue}
        hint="The flag appears in the field once a country is selected."
      />
    )
  },
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
        options={countriesWithFlags}
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
        options={teamMembersWithAvatars}
        value={value}
        onChange={setValue}
        hint="Select one team member to assign this task to."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Multi-select — chips below (default)
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
        options={labels}
        value={values}
        onChange={setValues}
        hint="Chips appear below the field. Use the footer to select all or clear."
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Multi-select — chips inline
// ---------------------------------------------------------------------------

export const MultiSelectInline: Story = {
  name: 'Multi-Select (Chips Inline)',
  decorators: [Story => <div style={{ maxWidth: '800px', paddingBottom: '300px' }}><Story /></div>],
  render: () => {
    const [values, setValues] = useState<string[]>(['bug', 'design'])
    return (
      <Combobox
        label="Labels"
        placeholder="Add labels…"
        selection="multi"
        chipPlacement="inline"
        options={labels}
        value={values}
        onChange={setValues}
        hint="Chips appear inside the field alongside the input."
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
        options={teamMembersWithAvatars}
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
        options={countriesWithFlags}
        value="nl"
        validation="positive"
        validationMessage="Great, this region is supported."
      />
      <Combobox
        label="Department"
        options={teamMembersWithAvatars}
        validation="notice"
        validationMessage="This department has limited capacity this quarter."
      />
      <Combobox
        label="Assign to"
        options={teamMembersWithAvatars}
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
    options:  countriesWithFlags,
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
          options={countriesWithFlags}
          value={value}
          onChange={setValue}
          placeholder="Select a country…"
        />
        <Combobox
          label="Assign to"
          labelPosition="inline"
          options={teamMembersWithAvatars}
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
// Location groups
// ---------------------------------------------------------------------------

export const LocationGroups: Story = {
  name: 'Grouped Options (Locations)',
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    const locations: ComboboxOption[] = [
      { value: 'ams', label: 'Amsterdam',  group: 'Netherlands',   icon: <MapPin size={16} /> },
      { value: 'rtd', label: 'Rotterdam',  group: 'Netherlands',   icon: <MapPin size={16} /> },
      { value: 'lon', label: 'London',     group: 'United Kingdom', icon: <MapPin size={16} /> },
      { value: 'mnc', label: 'Manchester', group: 'United Kingdom', icon: <MapPin size={16} /> },
      { value: 'ber', label: 'Berlin',     group: 'Germany',       icon: <MapPin size={16} /> },
      { value: 'muc', label: 'Munich',     group: 'Germany',       icon: <MapPin size={16} /> },
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
