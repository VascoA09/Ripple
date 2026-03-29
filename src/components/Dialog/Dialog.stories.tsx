import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from './Dialog'
import type { DialogProps, DialogSize } from './Dialog'
import { Button } from '../Button'
import { TextInput } from '../TextInput'
import { TextArea } from '../TextArea'
import { Combobox } from '../Combobox'
import { BannerAlert } from '../BannerAlert'
import { AlertTriangle, Trash2, Info } from 'lucide-react'

// ---------------------------------------------------------------------------

const meta: Meta<DialogProps> = {
  title:      'Components/Dialog',
  component:  Dialog,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    open: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<DialogProps>

// ---------------------------------------------------------------------------
// Trigger wrapper
// ---------------------------------------------------------------------------

function DialogDemo({
  size = 'medium',
  label = 'Open dialog',
  children,
}: {
  size?: DialogSize
  label?: string
  children: (onClose: () => void) => React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>{label}</Button>
      <Dialog open={open} onClose={() => setOpen(false)} size={size}>
        {children(() => setOpen(false))}
      </Dialog>
    </>
  )
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const roleOptions = [
  { value: 'admin',    label: 'Administrator' },
  { value: 'manager',  label: 'Manager' },
  { value: 'member',   label: 'Team member' },
  { value: 'viewer',   label: 'Viewer' },
]

const departmentOptions = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design',      label: 'Design' },
  { value: 'product',     label: 'Product' },
  { value: 'finance',     label: 'Finance' },
  { value: 'hr',          label: 'Human Resources' },
  { value: 'legal',       label: 'Legal' },
]

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'nl', label: 'Dutch' },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
]

const teamMemberOptions = [
  { value: 'alice',   label: 'Alice Johnson' },
  { value: 'bob',     label: 'Bob Martens' },
  { value: 'claire',  label: 'Claire Dupont' },
  { value: 'daniel',  label: 'Daniel Osei' },
  { value: 'eva',     label: 'Eva Lindqvist' },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [name, setName]     = React.useState('')
    const [email, setEmail]   = React.useState('')
    const [lang, setLang]     = React.useState<string | null>(null)

    return (
      <DialogDemo label="Open medium dialog">
        {(onClose) => (
          <>
            <DialogHeader>Account settings</DialogHeader>
            <DialogBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TextInput
                  label="Display name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <TextInput
                  label="Email address"
                  type="email"
                  placeholder="name@organisation.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Combobox
                  label="Language"
                  options={languageOptions}
                  value={lang}
                  onChange={setLang}
                />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button variant="outline" color="neutral" onClick={onClose}>Cancel</Button>
              <Button onClick={onClose}>Save changes</Button>
            </DialogFooter>
          </>
        )}
      </DialogDemo>
    )
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => {
    const [name, setName]         = React.useState('')
    const [email, setEmail]       = React.useState('')
    const [role, setRole]         = React.useState<string | null>(null)
    const [department, setDept]   = React.useState<string | null>(null)

    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        <DialogDemo size="small" label="Small (400px)">
          {(onClose) => (
            <>
              <DialogHeader>Delete item</DialogHeader>
              <DialogBody>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
                  This action cannot be undone. The item will be permanently removed.
                </p>
              </DialogBody>
              <DialogFooter>
                <Button variant="outline" color="neutral" onClick={onClose}>Cancel</Button>
                <Button color="negative" onClick={onClose}>Delete</Button>
              </DialogFooter>
            </>
          )}
        </DialogDemo>

        <DialogDemo size="medium" label="Medium (640px)">
          {(onClose) => (
            <>
              <DialogHeader>Edit team member</DialogHeader>
              <DialogBody>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <TextInput
                    label="Full name"
                    placeholder="Enter full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <TextInput
                    label="Email address"
                    type="email"
                    placeholder="name@organisation.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Combobox
                    label="Role"
                    options={roleOptions}
                    value={role}
                    onChange={setRole}
                  />
                  <Combobox
                    label="Department"
                    options={departmentOptions}
                    value={department}
                    onChange={setDept}
                  />
                </div>
              </DialogBody>
              <DialogFooter>
                <Button variant="outline" color="neutral" onClick={onClose}>Cancel</Button>
                <Button onClick={onClose}>Save changes</Button>
              </DialogFooter>
            </>
          )}
        </DialogDemo>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// With icon in header
// ---------------------------------------------------------------------------

export const WithIcon: Story = {
  name: 'With icon',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <DialogDemo size="small" label="Warning dialog">
        {(onClose) => (
          <>
            <DialogHeader icon={<AlertTriangle size={20} />}>
              Unsaved changes
            </DialogHeader>
            <DialogBody>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
                You have unsaved changes. If you leave now, your changes will be lost.
              </p>
            </DialogBody>
            <DialogFooter>
              <Button variant="outline" color="neutral" onClick={onClose}>Discard changes</Button>
              <Button onClick={onClose}>Keep editing</Button>
            </DialogFooter>
          </>
        )}
      </DialogDemo>

      <DialogDemo size="small" label="Destructive dialog">
        {(onClose) => (
          <>
            <DialogHeader icon={<Trash2 size={20} />}>
              Delete project
            </DialogHeader>
            <DialogBody>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
                This will permanently delete <strong>Q4 Planning</strong> and all its data. This action cannot be undone.
              </p>
            </DialogBody>
            <DialogFooter>
              <Button variant="outline" color="neutral" onClick={onClose}>Cancel</Button>
              <Button color="negative" onClick={onClose}>Delete project</Button>
            </DialogFooter>
          </>
        )}
      </DialogDemo>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Scrolling body
// ---------------------------------------------------------------------------

export const ScrollingBody: Story = {
  name: 'Scrolling body',
  render: () => (
    <DialogDemo label="Open scrolling dialog">
      {(onClose) => (
        <>
          <DialogHeader>Terms and conditions</DialogHeader>
          <DialogBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-soft)' }}>
              {Array.from({ length: 12 }, (_, i) => (
                <p key={i} style={{ margin: 0 }}>
                  Section {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              ))}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" color="neutral" onClick={onClose}>Decline</Button>
            <Button onClick={onClose}>Accept and continue</Button>
          </DialogFooter>
        </>
      )}
    </DialogDemo>
  ),
}

// ---------------------------------------------------------------------------
// Three footer actions
// ---------------------------------------------------------------------------

export const ThreeActions: Story = {
  name: 'Three footer actions',
  render: () => (
    <DialogDemo label="Open dialog">
      {(onClose) => (
        <>
          <DialogHeader>Save changes</DialogHeader>
          <DialogBody>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
              You can save as a draft to continue editing later, or publish immediately to make it visible to your team.
            </p>
          </DialogBody>
          <DialogFooter>
            <Button variant="ghost" color="neutral" onClick={onClose}>Discard</Button>
            <Button variant="outline" color="neutral" onClick={onClose}>Save draft</Button>
            <Button onClick={onClose}>Publish</Button>
          </DialogFooter>
        </>
      )}
    </DialogDemo>
  ),
}

// ---------------------------------------------------------------------------
// With BannerAlert
// ---------------------------------------------------------------------------

export const WithBannerAlert: Story = {
  name: 'With BannerAlert',
  render: () => {
    const [owner, setOwner] = React.useState<string | null>(null)
    const [note, setNote]   = React.useState('')

    return (
      <DialogDemo label="Open dialog">
        {(onClose) => (
          <>
            <DialogHeader icon={<Info size={20} />}>Transfer ownership</DialogHeader>
            <DialogBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <BannerAlert variant="notice">
                  Transferring ownership will remove your admin access to this workspace.
                </BannerAlert>
                <Combobox
                  label="New owner"
                  options={teamMemberOptions}
                  value={owner}
                  onChange={setOwner}
                  placeholder="Select a team member…"
                />
                <TextArea
                  label="Reason (optional)"
                  placeholder="Why are you transferring ownership?"
                  resize="none"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button variant="outline" color="neutral" onClick={onClose}>Cancel</Button>
              <Button onClick={onClose}>Transfer ownership</Button>
            </DialogFooter>
          </>
        )}
      </DialogDemo>
    )
  },
}

// ---------------------------------------------------------------------------
// No header
// ---------------------------------------------------------------------------

export const NoHeader: Story = {
  name: 'No header',
  render: () => (
    <DialogDemo size="small" label="Open dialog">
      {(onClose) => (
        <>
          <DialogBody>
            <p style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 600, color: 'var(--text-loud)' }}>
              Session about to expire
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
              You will be signed out in 5 minutes due to inactivity. Do you want to stay signed in?
            </p>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" color="neutral" onClick={onClose}>Sign out</Button>
            <Button onClick={onClose}>Stay signed in</Button>
          </DialogFooter>
        </>
      )}
    </DialogDemo>
  ),
}
