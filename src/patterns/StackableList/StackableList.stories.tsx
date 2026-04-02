import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MoreHorizontal } from 'lucide-react'
import {
  StackableList,
  StackableListHeader,
  StackableListHeaderCell,
  StackableListBody,
  StackableListItem,
  StackableListCell,
} from './StackableList'
import { Avatar } from '../../components/Avatar'
import { Tag } from '../../components/Tag'
import type { TagColor } from '../../components/Tag'
import { IconButton } from '../../components/IconButton'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuItem,
  FlyoutMenuSeparator,
} from '../../components/FlyoutMenu'

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'Patterns/StackableList',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

interface Employee {
  id:         string
  name:       string
  role:       string
  department: string
  location:   string
  status:     'Active' | 'On leave' | 'Inactive'
  fte:        number
}

const employees: Employee[] = [
  { id: 'EMP-001', name: 'Jane Cooper',    role: 'UX Designer',        department: 'Product',    location: 'Amsterdam',  status: 'Active',   fte: 1.0 },
  { id: 'EMP-002', name: 'Wade Warren',    role: 'Frontend Engineer',  department: 'Engineering', location: 'London',     status: 'Active',   fte: 1.0 },
  { id: 'EMP-003', name: 'Esther Howard',  role: 'Product Manager',    department: 'Product',    location: 'Utrecht',    status: 'On leave', fte: 0.8 },
  { id: 'EMP-004', name: 'Cameron Williamson', role: 'Data Analyst',   department: 'Finance',    location: 'Berlin',     status: 'Active',   fte: 1.0 },
  { id: 'EMP-005', name: 'Brooklyn Simmons', role: 'HR Business Partner', department: 'HR',    location: 'Amsterdam',  status: 'Inactive', fte: 0.6 },
  { id: 'EMP-006', name: 'Leslie Alexander', role: 'Backend Engineer', department: 'Engineering', location: 'London',   status: 'Active',   fte: 1.0 },
]

const STATUS_COLOR: Record<Employee['status'], TagColor> = {
  Active:   'green',
  'On leave': 'orange',
  Inactive: 'gray',
}

// ---------------------------------------------------------------------------
// Shared row actions
// ---------------------------------------------------------------------------

function RowActions({ name }: { name: string }) {
  return (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <IconButton
          icon={<MoreHorizontal size={16} />}
          aria-label={`Actions for ${name}`}
          variant="ghost"
          color="neutral"
          size="small"
        />
      </FlyoutMenuTrigger>
      <FlyoutMenuContent align="end">
        <FlyoutMenuItem>View profile</FlyoutMenuItem>
        <FlyoutMenuItem>Edit</FlyoutMenuItem>
        <FlyoutMenuSeparator />
        <FlyoutMenuItem>Deactivate</FlyoutMenuItem>
      </FlyoutMenuContent>
    </FlyoutMenu>
  )
}

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  name: 'Default',
  render: () => (
    <StackableList columns="2fr 1fr 1fr 1fr 80px" hasActions>
      <StackableListHeader>
        <StackableListHeaderCell>Name</StackableListHeaderCell>
        <StackableListHeaderCell>Department</StackableListHeaderCell>
        <StackableListHeaderCell>Location</StackableListHeaderCell>
        <StackableListHeaderCell>Status</StackableListHeaderCell>
        <StackableListHeaderCell align="end">FTE</StackableListHeaderCell>
      </StackableListHeader>

      <StackableListBody>
        {employees.map((emp) => (
          <StackableListItem
            key={emp.id}
            actions={<RowActions name={emp.name} />}
          >
            <StackableListCell>
              <Avatar name={emp.name} size="s" />
              <div>
                <div style={{ fontWeight: 'var(--font-weight-medium)' } as React.CSSProperties}>{emp.name}</div>
                <div style={{ fontSize: 'var(--font-size-60)', color: 'var(--text-soft)' } as React.CSSProperties}>{emp.id}</div>
              </div>
            </StackableListCell>
            <StackableListCell>{emp.department}</StackableListCell>
            <StackableListCell>{emp.location}</StackableListCell>
            <StackableListCell>
              <Tag color={STATUS_COLOR[emp.status]} size="small">{emp.status}</Tag>
            </StackableListCell>
            <StackableListCell align="end">{emp.fte.toFixed(1)}</StackableListCell>
          </StackableListItem>
        ))}
      </StackableListBody>
    </StackableList>
  ),
}

// ---------------------------------------------------------------------------
// Unread items
// ---------------------------------------------------------------------------

export const WithUnread: Story = {
  name: 'With unread items',
  render: () => (
    <StackableList columns="2fr 1fr 1fr 1fr" hasActions>
      <StackableListHeader>
        <StackableListHeaderCell>Name</StackableListHeaderCell>
        <StackableListHeaderCell>Role</StackableListHeaderCell>
        <StackableListHeaderCell>Location</StackableListHeaderCell>
        <StackableListHeaderCell>Status</StackableListHeaderCell>
      </StackableListHeader>

      <StackableListBody>
        {employees.map((emp, i) => (
          <StackableListItem
            key={emp.id}
            unread={i < 2}
            actions={<RowActions name={emp.name} />}
          >
            <StackableListCell>
              <Avatar name={emp.name} size="s" />
              <div>
                <div style={{ fontWeight: i < 2 ? 'var(--font-weight-semibold)' : undefined } as React.CSSProperties}>
                  {emp.name}
                </div>
                <div style={{ fontSize: 'var(--font-size-60)', color: 'var(--text-soft)' } as React.CSSProperties}>{emp.id}</div>
              </div>
            </StackableListCell>
            <StackableListCell>{emp.role}</StackableListCell>
            <StackableListCell>{emp.location}</StackableListCell>
            <StackableListCell>
              <Tag color={STATUS_COLOR[emp.status]} size="small">{emp.status}</Tag>
            </StackableListCell>
          </StackableListItem>
        ))}
      </StackableListBody>
    </StackableList>
  ),
}

// ---------------------------------------------------------------------------
// Selectable rows
// ---------------------------------------------------------------------------

export const Selectable: Story = {
  name: 'Selectable rows',
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
      <StackableList columns="2fr 1fr 1fr 1fr" hasActions>
        <StackableListHeader>
          <StackableListHeaderCell>Name</StackableListHeaderCell>
          <StackableListHeaderCell>Department</StackableListHeaderCell>
          <StackableListHeaderCell>Location</StackableListHeaderCell>
          <StackableListHeaderCell>Status</StackableListHeaderCell>
        </StackableListHeader>

        <StackableListBody>
          {employees.map((emp) => (
            <StackableListItem
              key={emp.id}
              selected={selectedId === emp.id}
              onClick={() => setSelectedId(selectedId === emp.id ? null : emp.id)}
              actions={<RowActions name={emp.name} />}
            >
              <StackableListCell>
                <Avatar name={emp.name} size="s" />
                <div>
                  <div>{emp.name}</div>
                  <div style={{ fontSize: 'var(--font-size-60)', color: 'var(--text-soft)' } as React.CSSProperties}>{emp.id}</div>
                </div>
              </StackableListCell>
              <StackableListCell>{emp.department}</StackableListCell>
              <StackableListCell>{emp.location}</StackableListCell>
              <StackableListCell>
                <Tag color={STATUS_COLOR[emp.status]} size="small">{emp.status}</Tag>
              </StackableListCell>
            </StackableListItem>
          ))}
        </StackableListBody>
      </StackableList>
    )
  },
}

// ---------------------------------------------------------------------------
// Item footer — tags as supplementary attributes per row
// ---------------------------------------------------------------------------

const SKILLS: Record<string, string[]> = {
  'EMP-001': ['Figma', 'UX Research', 'Design Systems'],
  'EMP-002': ['React', 'TypeScript', 'CSS'],
  'EMP-003': ['Roadmapping', 'Stakeholder mgmt', 'Agile'],
  'EMP-004': ['SQL', 'Power BI', 'Python'],
  'EMP-005': ['HRIS', 'Recruitment', 'L&D'],
  'EMP-006': ['Java', 'Kubernetes', 'PostgreSQL'],
}

const TAG_COLORS: TagColor[] = ['blue', 'purple', 'aqua', 'emerald', 'orange', 'ochre']

export const WithItemFooter: Story = {
  name: 'With item footer',
  render: () => (
    <StackableList columns="2fr 1fr 1fr" hasActions>
      <StackableListHeader>
        <StackableListHeaderCell>Name</StackableListHeaderCell>
        <StackableListHeaderCell>Department</StackableListHeaderCell>
        <StackableListHeaderCell>Status</StackableListHeaderCell>
      </StackableListHeader>

      <StackableListBody>
        {employees.map((emp) => (
          <StackableListItem
            key={emp.id}
            actions={<RowActions name={emp.name} />}
            footer={
              <>
                {SKILLS[emp.id]?.map((skill, i) => (
                  <Tag key={skill} color={TAG_COLORS[i % TAG_COLORS.length]} size="small">
                    {skill}
                  </Tag>
                ))}
              </>
            }
          >
            <StackableListCell>
              <Avatar name={emp.name} size="s" />
              <div>
                <div>{emp.name}</div>
                <div style={{ fontSize: 'var(--font-size-60)', color: 'var(--text-soft)' } as React.CSSProperties}>{emp.role}</div>
              </div>
            </StackableListCell>
            <StackableListCell>{emp.department}</StackableListCell>
            <StackableListCell>
              <Tag color={STATUS_COLOR[emp.status]} size="small">{emp.status}</Tag>
            </StackableListCell>
          </StackableListItem>
        ))}
      </StackableListBody>
    </StackableList>
  ),
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

export const Empty: Story = {
  name: 'Empty state',
  render: () => (
    <StackableList columns="2fr 1fr 1fr 1fr">
      <StackableListHeader>
        <StackableListHeaderCell>Name</StackableListHeaderCell>
        <StackableListHeaderCell>Department</StackableListHeaderCell>
        <StackableListHeaderCell>Location</StackableListHeaderCell>
        <StackableListHeaderCell>Status</StackableListHeaderCell>
      </StackableListHeader>

      <StackableListBody>
        <div style={{
          padding:    'var(--spacing-400)',
          textAlign:  'center',
          color:      'var(--text-soft)',
          fontFamily: 'var(--font-family-base)',
          fontSize:   'var(--font-size-80)',
        }}>
          No employees found.
        </div>
      </StackableListBody>
    </StackableList>
  ),
}
