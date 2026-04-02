import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColDef } from 'ag-grid-community'
import { DataGrid, RippleDateFloatingFilter } from './DataGrid'
import type { DataGridProps } from './DataGrid'
import { Tag } from '../Tag'
import type { TagColor } from '../Tag'
import { Link } from '../Link'
import { Drawer, DrawerHeader, DrawerContent } from '../Drawer'

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<DataGridProps> = {
  title:      'Components/DataGrid',
  component:  DataGrid,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<DataGridProps>

// ---------------------------------------------------------------------------
// Sample data — employee list (ERPx-style)
// ---------------------------------------------------------------------------

type Employee = {
  id:         number
  name:       string
  department: string
  location:   string
  role:       string
  status:     'Active' | 'On leave' | 'Inactive'
  fte:        number
  startDate:  string
}

const employees: Employee[] = [
  { id: 1,  name: 'Alex Morgan',     department: 'Finance',    location: 'Amsterdam',  role: 'Financial Analyst',    status: 'Active',   fte: 1.0,  startDate: '2019-03-15' },
  { id: 2,  name: 'Sara Lindqvist',  department: 'HR',         location: 'Stockholm',  role: 'HR Business Partner',  status: 'Active',   fte: 0.8,  startDate: '2020-07-01' },
  { id: 3,  name: 'Pieter de Vries', department: 'IT',         location: 'Utrecht',    role: 'Cloud Engineer',       status: 'Active',   fte: 1.0,  startDate: '2018-11-20' },
  { id: 4,  name: 'Emma Thompson',   department: 'Finance',    location: 'London',     role: 'Controller',           status: 'On leave', fte: 1.0,  startDate: '2017-05-10' },
  { id: 5,  name: 'Marco Rossi',     department: 'Operations', location: 'Milan',      role: 'Operations Manager',   status: 'Active',   fte: 1.0,  startDate: '2021-01-12' },
  { id: 6,  name: 'Lena Fischer',    department: 'IT',         location: 'Berlin',     role: 'UX Designer',          status: 'Active',   fte: 0.9,  startDate: '2022-03-07' },
  { id: 7,  name: 'James O\'Brien',  department: 'Sales',      location: 'Dublin',     role: 'Account Executive',    status: 'Active',   fte: 1.0,  startDate: '2020-10-19' },
  { id: 8,  name: 'Yuki Tanaka',     department: 'Finance',    location: 'Amsterdam',  role: 'Senior Auditor',       status: 'Inactive', fte: 0.0,  startDate: '2016-08-30' },
  { id: 9,  name: 'Clara Dubois',    department: 'HR',         location: 'Paris',      role: 'Recruiter',            status: 'Active',   fte: 1.0,  startDate: '2023-02-14' },
  { id: 10, name: 'Tom van der Berg', department: 'IT',        location: 'Utrecht',    role: 'Backend Developer',    status: 'Active',   fte: 1.0,  startDate: '2019-09-02' },
  { id: 11, name: 'Priya Nair',      department: 'Operations', location: 'London',     role: 'Supply Chain Analyst', status: 'Active',   fte: 1.0,  startDate: '2021-06-28' },
  { id: 12, name: 'David Kowalski',  department: 'Sales',      location: 'Warsaw',     role: 'Sales Manager',        status: 'On leave', fte: 1.0,  startDate: '2018-04-15' },
]

// ---------------------------------------------------------------------------
// Shared column definitions
// ---------------------------------------------------------------------------

const STATUS_COLOR: Record<Employee['status'], TagColor> = {
  'Active':   'green',
  'On leave': 'orange',
  'Inactive': 'gray',
}

const employeeColumns: ColDef<Employee>[] = [
  {
    field:      'name',
    headerName: 'Name',
    minWidth:   160,
  },
  {
    field:       'department',
    headerName:  'Department',
    minWidth:    130,
  },
  {
    field:       'role',
    headerName:  'Role',
    minWidth:    180,
    flex:        1,
  },
  {
    field:       'location',
    headerName:  'Location',
    minWidth:    120,
  },
  {
    field:       'status',
    headerName:  'Status',
    minWidth:    120,
    cellRenderer: (params: { value: Employee['status'] }) => (
      <Tag color={STATUS_COLOR[params.value]}>{params.value}</Tag>
    ),
  },
  {
    field:       'fte',
    headerName:  'FTE',
    minWidth:    80,
    type:        'numericColumn',
    valueFormatter: (p) => p.value.toFixed(1),
  },
  {
    field:                   'startDate',
    headerName:              'Start date',
    minWidth:                120,
    filter:                  'agDateColumnFilter',
    floatingFilterComponent: RippleDateFloatingFilter,
    valueFormatter: (p) => new Date(p.value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
  },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => (
    <DataGrid<Employee>
      columns={employeeColumns}
      rows={employees}
    />
  ),
}

// ---------------------------------------------------------------------------
// Compact
// ---------------------------------------------------------------------------

export const Compact: Story = {
  name: 'Compact',
  render: () => (
    <DataGrid<Employee>
      columns={employeeColumns}
      rows={employees}
      size="compact"
    />
  ),
}

// ---------------------------------------------------------------------------
// Single row selection
// ---------------------------------------------------------------------------

export const SingleSelection: Story = {
  name: 'Single selection',
  render: () => {
    const [selected, setSelected] = useState<Employee[]>([])
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <DataGrid<Employee>
          columns={employeeColumns}
          rows={employees}
          selectable="single"
          onRowSelect={setSelected}
        />
        <p className="typography-caption" style={{ margin: 0 }}>
          {selected.length ? `Selected: ${selected[0].name}` : 'No row selected.'}
        </p>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Multi-row selection
// ---------------------------------------------------------------------------

export const MultiSelection: Story = {
  name: 'Multi selection',
  render: () => {
    const [selected, setSelected] = useState<Employee[]>([])
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <DataGrid<Employee>
          columns={employeeColumns}
          rows={employees}
          selectable="multi"
          onRowSelect={setSelected}
        />
        <p className="typography-caption" style={{ margin: 0 }}>
          {selected.length
            ? `${selected.length} row(s) selected: ${selected.map(e => e.name).join(', ')}`
            : 'No rows selected.'}
        </p>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

export const Pagination: Story = {
  name: 'Pagination',
  render: () => (
    <DataGrid<Employee>
      columns={employeeColumns}
      rows={employees}
      pagination
      pageSize={10}
    />
  ),
}

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

export const Loading: Story = {
  name: 'Loading',
  render: () => (
    <DataGrid<Employee>
      columns={employeeColumns}
      rows={employees}
      loading
    />
  ),
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

export const Empty: Story = {
  name: 'Empty',
  render: () => (
    <DataGrid<Employee>
      columns={employeeColumns}
      rows={[]}
    />
  ),
}

// ---------------------------------------------------------------------------
// Cell with link — Name column renders a Ripple Link
// ---------------------------------------------------------------------------

const employeeColumnsWithLink: ColDef<Employee>[] = [
  {
    field:      'name',
    headerName: 'Name',
    minWidth:   160,
    cellRenderer: (params: { value: string; data: Employee }) => (
      <Link href={`#employee-${params.data.id}`} variant="soft" size="80">
        {params.value}
      </Link>
    ),
  },
  ...employeeColumns.slice(1),
]

export const CellWithLink: Story = {
  name: 'Cell with link',
  render: () => (
    <DataGrid<Employee>
      columns={employeeColumnsWithLink}
      rows={employees}
    />
  ),
}

// ---------------------------------------------------------------------------
// Row detail drawer — selecting a row opens a persistent drawer on the right
// ---------------------------------------------------------------------------

export const RowDetailDrawer: Story = {
  name: 'Row detail drawer',
  render: () => {
    const [selected, setSelected] = useState<Employee | null>(null)

    return (
      <>
        <DataGrid<Employee>
          columns={employeeColumns}
          rows={employees}
          selectable="single"
          onRowSelect={(rows) => setSelected(rows[0] ?? null)}
        />

        <Drawer
          open={!!selected}
          onClose={() => setSelected(null)}
          side="right"
          size="medium"
        >
          <DrawerHeader
            title={selected?.name ?? ''}
            description={selected?.role ?? ''}
          />
          <DrawerContent>
            {selected && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)' }}>
                <div>
                  <p className="typography-label" style={{ margin: '0 0 2px' }}>Department</p>
                  <p className="typography-body" style={{ margin: 0 }}>{selected.department}</p>
                </div>
                <div>
                  <p className="typography-label" style={{ margin: '0 0 2px' }}>Location</p>
                  <p className="typography-body" style={{ margin: 0 }}>{selected.location}</p>
                </div>
                <div>
                  <p className="typography-label" style={{ margin: '0 0 2px' }}>Status</p>
                  <Tag color={STATUS_COLOR[selected.status]}>{selected.status}</Tag>
                </div>
                <div>
                  <p className="typography-label" style={{ margin: '0 0 2px' }}>FTE</p>
                  <p className="typography-body" style={{ margin: 0 }}>{selected.fte.toFixed(1)}</p>
                </div>
                <div>
                  <p className="typography-label" style={{ margin: '0 0 2px' }}>Start date</p>
                  <p className="typography-body" style={{ margin: 0 }}>
                    {new Date(selected.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}
