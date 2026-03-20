import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Copy,
  Download,
  Edit,
  FileText,
  Link2,
  Mail,
  MoreHorizontal,
  Share2,
  Trash2,
  Upload,
} from 'lucide-react'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuLabel,
  FlyoutMenuGroup,
  FlyoutMenuItem,
  FlyoutMenuCheckboxItem,
  FlyoutMenuRadioGroup,
  FlyoutMenuRadioItem,
  FlyoutMenuSeparator,
  FlyoutMenuSub,
  FlyoutMenuSubTrigger,
  FlyoutMenuSubContent,
  FlyoutMenuShortcut,
} from './FlyoutMenu'
import { Button } from '../Button'

// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'Components/FlyoutMenu',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// DEFAULT — context menu
// ---------------------------------------------------------------------------

export const Default: Story = {
  name: 'Default',
  render: () => (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <Button variant="outline" color="neutral">Options</Button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent>
        <FlyoutMenuItem>
          <Edit size={16} aria-hidden />
          Edit
        </FlyoutMenuItem>
        <FlyoutMenuItem>
          <Copy size={16} aria-hidden />
          Duplicate
        </FlyoutMenuItem>
        <FlyoutMenuSeparator />
        <FlyoutMenuItem>
          <Trash2 size={16} aria-hidden />
          Delete
        </FlyoutMenuItem>
      </FlyoutMenuContent>
    </FlyoutMenu>
  ),
}

// ---------------------------------------------------------------------------
// LABELS AND GROUPS
// ---------------------------------------------------------------------------

export const LabelsAndGroups: Story = {
  name: 'Labels and Groups',
  render: () => (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <Button variant="outline" color="neutral">File</Button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent>
        <FlyoutMenuGroup>
          <FlyoutMenuLabel>Create</FlyoutMenuLabel>
          <FlyoutMenuItem>
            <FileText size={16} aria-hidden />
            New file
          </FlyoutMenuItem>
          <FlyoutMenuItem>
            <Upload size={16} aria-hidden />
            Import
          </FlyoutMenuItem>
        </FlyoutMenuGroup>
        <FlyoutMenuSeparator />
        <FlyoutMenuGroup>
          <FlyoutMenuLabel>Export</FlyoutMenuLabel>
          <FlyoutMenuItem>
            <Download size={16} aria-hidden />
            Download
          </FlyoutMenuItem>
          <FlyoutMenuItem>
            <Mail size={16} aria-hidden />
            Send by email
          </FlyoutMenuItem>
        </FlyoutMenuGroup>
      </FlyoutMenuContent>
    </FlyoutMenu>
  ),
}

// ---------------------------------------------------------------------------
// WITH SUBMENUS
// ---------------------------------------------------------------------------

export const WithSubmenus: Story = {
  name: 'With Submenus',
  render: () => (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <Button variant="outline" color="neutral">Actions</Button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent>
        <FlyoutMenuItem>
          <Edit size={16} aria-hidden />
          Edit
        </FlyoutMenuItem>
        <FlyoutMenuSub>
          <FlyoutMenuSubTrigger>
            <Share2 size={16} aria-hidden />
            Share
          </FlyoutMenuSubTrigger>
          <FlyoutMenuSubContent>
            <FlyoutMenuItem>
              <Mail size={16} aria-hidden />
              Email
            </FlyoutMenuItem>
            <FlyoutMenuItem>
              <Link2 size={16} aria-hidden />
              Copy link
            </FlyoutMenuItem>
          </FlyoutMenuSubContent>
        </FlyoutMenuSub>
        <FlyoutMenuSeparator />
        <FlyoutMenuItem>
          <Trash2 size={16} aria-hidden />
          Delete
        </FlyoutMenuItem>
      </FlyoutMenuContent>
    </FlyoutMenu>
  ),
}

// ---------------------------------------------------------------------------
// WITH KEYBOARD SHORTCUTS
// ---------------------------------------------------------------------------

export const WithKeyboardShortcuts: Story = {
  name: 'With Keyboard Shortcuts',
  render: () => (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <Button variant="outline" color="neutral">Edit</Button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent>
        <FlyoutMenuItem>
          <FileText size={16} aria-hidden />
          New file
          <FlyoutMenuShortcut>⌘N</FlyoutMenuShortcut>
        </FlyoutMenuItem>
        <FlyoutMenuItem>
          <Copy size={16} aria-hidden />
          Copy
          <FlyoutMenuShortcut>⌘C</FlyoutMenuShortcut>
        </FlyoutMenuItem>
        <FlyoutMenuItem>
          <Edit size={16} aria-hidden />
          Paste
          <FlyoutMenuShortcut>⌘V</FlyoutMenuShortcut>
        </FlyoutMenuItem>
        <FlyoutMenuSeparator />
        <FlyoutMenuItem>
          <Download size={16} aria-hidden />
          Download
          <FlyoutMenuShortcut>⌘D</FlyoutMenuShortcut>
        </FlyoutMenuItem>
      </FlyoutMenuContent>
    </FlyoutMenu>
  ),
}

// ---------------------------------------------------------------------------
// WITH CHECKBOXES
// ---------------------------------------------------------------------------

export const WithCheckboxes: Story = {
  name: 'With Checkboxes',
  render: () => {
    const [bookmarks, setBookmarks] = useState(true)
    const [urls, setUrls] = useState(false)
    const [preview, setPreview] = useState(true)

    return (
      <FlyoutMenu>
        <FlyoutMenuTrigger asChild>
          <Button variant="outline" color="neutral">View</Button>
        </FlyoutMenuTrigger>
        <FlyoutMenuContent>
          <FlyoutMenuLabel>Display options</FlyoutMenuLabel>
          <FlyoutMenuSeparator />
          <FlyoutMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
            Show bookmarks
          </FlyoutMenuCheckboxItem>
          <FlyoutMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
            Show URLs
          </FlyoutMenuCheckboxItem>
          <FlyoutMenuCheckboxItem checked={preview} onCheckedChange={setPreview}>
            Preview pane
          </FlyoutMenuCheckboxItem>
        </FlyoutMenuContent>
      </FlyoutMenu>
    )
  },
}

// ---------------------------------------------------------------------------
// WITH RADIO GROUP
// ---------------------------------------------------------------------------

export const WithRadioGroup: Story = {
  name: 'With Radio Group',
  render: () => {
    const [sortBy, setSortBy] = useState('name')

    return (
      <FlyoutMenu>
        <FlyoutMenuTrigger asChild>
          <Button variant="outline" color="neutral">Sort by</Button>
        </FlyoutMenuTrigger>
        <FlyoutMenuContent>
          <FlyoutMenuLabel>Sort by</FlyoutMenuLabel>
          <FlyoutMenuSeparator />
          <FlyoutMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
            <FlyoutMenuRadioItem value="name">Name</FlyoutMenuRadioItem>
            <FlyoutMenuRadioItem value="date">Date modified</FlyoutMenuRadioItem>
            <FlyoutMenuRadioItem value="size">File size</FlyoutMenuRadioItem>
            <FlyoutMenuRadioItem value="type">File type</FlyoutMenuRadioItem>
          </FlyoutMenuRadioGroup>
        </FlyoutMenuContent>
      </FlyoutMenu>
    )
  },
}

// ---------------------------------------------------------------------------
// DISABLED ITEMS
// ---------------------------------------------------------------------------

export const DisabledItems: Story = {
  name: 'Disabled Items',
  render: () => (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <Button variant="outline" color="neutral">Options</Button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent>
        <FlyoutMenuItem>
          <Edit size={16} aria-hidden />
          Edit
        </FlyoutMenuItem>
        <FlyoutMenuItem disabled>
          <Share2 size={16} aria-hidden />
          Share
        </FlyoutMenuItem>
        <FlyoutMenuItem disabled>
          <Download size={16} aria-hidden />
          Export
        </FlyoutMenuItem>
        <FlyoutMenuSeparator />
        <FlyoutMenuItem>
          <Trash2 size={16} aria-hidden />
          Delete
        </FlyoutMenuItem>
      </FlyoutMenuContent>
    </FlyoutMenu>
  ),
}

// ---------------------------------------------------------------------------
// IN CONTEXT — table row actions
// ---------------------------------------------------------------------------

const tableRows = [
  { name: 'Q1 Report.pdf',    type: 'PDF',  size: '2.4 MB',  modified: 'Mar 1, 2026' },
  { name: 'Budget 2026.xlsx', type: 'Excel', size: '840 KB', modified: 'Feb 28, 2026' },
  { name: 'Roadmap.pptx',     type: 'PPT',  size: '5.1 MB',  modified: 'Feb 20, 2026' },
]

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
        In Context
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', color: 'var(--text)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
            {['Name', 'Type', 'Size', 'Modified', ''].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600, fontSize: '12px', color: 'var(--text-soft)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr key={row.name} style={{ borderBottom: '1px solid var(--border-default)' }}>
              <td style={{ padding: '10px 12px' }}>{row.name}</td>
              <td style={{ padding: '10px 12px', color: 'var(--text-soft)' }}>{row.type}</td>
              <td style={{ padding: '10px 12px', color: 'var(--text-soft)' }}>{row.size}</td>
              <td style={{ padding: '10px 12px', color: 'var(--text-soft)' }}>{row.modified}</td>
              <td style={{ padding: '10px 4px', textAlign: 'right' }}>
                <FlyoutMenu>
                  <FlyoutMenuTrigger asChild>
                    <Button variant="ghost" color="neutral" aria-label={`More options for ${row.name}`}>
                      <MoreHorizontal size={16} />
                    </Button>
                  </FlyoutMenuTrigger>
                  <FlyoutMenuContent align="end">
                    <FlyoutMenuItem>
                      <Edit size={16} aria-hidden />
                      Rename
                    </FlyoutMenuItem>
                    <FlyoutMenuItem>
                      <Copy size={16} aria-hidden />
                      Duplicate
                    </FlyoutMenuItem>
                    <FlyoutMenuSub>
                      <FlyoutMenuSubTrigger>
                        <Share2 size={16} aria-hidden />
                        Share
                      </FlyoutMenuSubTrigger>
                      <FlyoutMenuSubContent>
                        <FlyoutMenuItem>
                          <Mail size={16} aria-hidden />
                          Email
                        </FlyoutMenuItem>
                        <FlyoutMenuItem>
                          <Link2 size={16} aria-hidden />
                          Copy link
                        </FlyoutMenuItem>
                      </FlyoutMenuSubContent>
                    </FlyoutMenuSub>
                    <FlyoutMenuItem>
                      <Download size={16} aria-hidden />
                      Download
                    </FlyoutMenuItem>
                    <FlyoutMenuSeparator />
                    <FlyoutMenuItem>
                      <Trash2 size={16} aria-hidden />
                      Delete
                    </FlyoutMenuItem>
                  </FlyoutMenuContent>
                </FlyoutMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}
