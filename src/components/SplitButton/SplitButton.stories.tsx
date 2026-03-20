import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Save, Download, Send, FileText, Archive, Mail, Clock } from 'lucide-react'
import { SplitButton } from './SplitButton'
import type { SplitButtonProps, SplitButtonItem } from './SplitButton'

// ---------------------------------------------------------------------------

const meta: Meta<SplitButtonProps> = {
  title: 'Components/SplitButton',
  component: SplitButton,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<SplitButtonProps>

// ---------------------------------------------------------------------------
// Shared items
// ---------------------------------------------------------------------------

const saveItems: SplitButtonItem[] = [
  { id: 'save-close',    label: 'Save and close',    onSelect: () => {} },
  { id: 'save-draft',    label: 'Save as draft',      onSelect: () => {} },
  { id: 'save-template', label: 'Save as template',   onSelect: () => {} },
]

const exportItems: SplitButtonItem[] = [
  { id: 'pdf',   label: 'Export as PDF',   icon: <FileText size={14} />,  onSelect: () => {} },
  { id: 'csv',   label: 'Export as CSV',   icon: <Archive size={14} />,   onSelect: () => {} },
  { id: 'excel', label: 'Export as Excel', icon: <FileText size={14} />,  onSelect: () => {} },
]

const sendItems: SplitButtonItem[] = [
  { id: 'schedule', label: 'Schedule send',  icon: <Clock size={14} />,  onSelect: () => {} },
  { id: 'draft',    label: 'Send as draft',  icon: <Mail size={14} />,   onSelect: () => {} },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => (
    <SplitButton
      label="Save"
      onClick={() => {}}
      items={saveItems}
    />
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <SplitButton label="Save" size="small"  onClick={() => {}} items={saveItems} />
      <SplitButton label="Save" size="medium" onClick={() => {}} items={saveItems} />
      <SplitButton label="Save" size="large"  onClick={() => {}} items={saveItems} />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <SplitButton label="Save" variant="fill"    onClick={() => {}} items={saveItems} />
      <SplitButton label="Save" variant="outline" onClick={() => {}} items={saveItems} />
      <SplitButton label="Save" variant="ghost"   onClick={() => {}} items={saveItems} />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Fill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <SplitButton label="Save"   variant="fill" color="primary"  onClick={() => {}} items={saveItems} />
        <SplitButton label="Save"   variant="fill" color="neutral"  onClick={() => {}} items={saveItems} />
        <SplitButton label="Delete" variant="fill" color="negative" onClick={() => {}} items={[
          { id: 'delete-all',      label: 'Delete all records', onSelect: () => {} },
          { id: 'delete-selected', label: 'Delete selected',    onSelect: () => {} },
        ]} />
      </div>

      {/* Outline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <SplitButton label="Save"   variant="outline" color="primary"  onClick={() => {}} items={saveItems} />
        <SplitButton label="Save"   variant="outline" color="neutral"  onClick={() => {}} items={saveItems} />
        <SplitButton label="Delete" variant="outline" color="negative" onClick={() => {}} items={[
          { id: 'delete-all',      label: 'Delete all records', onSelect: () => {} },
          { id: 'delete-selected', label: 'Delete selected',    onSelect: () => {} },
        ]} />
      </div>

      {/* Ghost */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <SplitButton label="Save"   variant="ghost" color="primary"  onClick={() => {}} items={saveItems} />
        <SplitButton label="Save"   variant="ghost" color="neutral"  onClick={() => {}} items={saveItems} />
        <SplitButton label="Delete" variant="ghost" color="negative" onClick={() => {}} items={[
          { id: 'delete-all',      label: 'Delete all records', onSelect: () => {} },
          { id: 'delete-selected', label: 'Delete selected',    onSelect: () => {} },
        ]} />
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Icon
// ---------------------------------------------------------------------------

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <SplitButton
        label="Save"
        iconStart={<Save size={16} />}
        onClick={() => {}}
        items={saveItems}
      />
      <SplitButton
        label="Export"
        iconStart={<Download size={16} />}
        onClick={() => {}}
        items={exportItems}
      />
      <SplitButton
        label="Send"
        iconStart={<Send size={16} />}
        onClick={() => {}}
        items={sendItems}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

export const Loading: Story = {
  name: 'Loading',
  render: () => {
    const [saving, setSaving] = useState(false)

    function handleSave() {
      setSaving(true)
      setTimeout(() => setSaving(false), 2000)
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <SplitButton
          label={saving ? 'Saving…' : 'Save'}
          iconStart={<Save size={16} />}
          onClick={handleSave}
          items={saveItems}
          loading={saving}
        />
        {/* Static snapshot of loading state for visual reference */}
        <SplitButton
          label="Saving…"
          onClick={() => {}}
          items={saveItems}
          loading
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <SplitButton label="Save"   variant="fill"    onClick={() => {}} items={saveItems} disabled />
      <SplitButton label="Save"   variant="outline" onClick={() => {}} items={saveItems} disabled />
      <SplitButton label="Export" variant="ghost"   onClick={() => {}} items={exportItems} disabled />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With disabled items
// ---------------------------------------------------------------------------

export const DisabledItems: Story = {
  name: 'With Disabled Items',
  render: () => (
    <SplitButton
      label="Export"
      iconStart={<Download size={16} />}
      onClick={() => {}}
      items={[
        { id: 'pdf',   label: 'Export as PDF',   icon: <FileText size={14} />, onSelect: () => {} },
        { id: 'csv',   label: 'Export as CSV',   icon: <Archive size={14} />,  onSelect: () => {}, disabled: true },
        { id: 'excel', label: 'Export as Excel', icon: <FileText size={14} />, onSelect: () => {}, disabled: true },
      ]}
    />
  ),
}

// ---------------------------------------------------------------------------
// Form submission
// ---------------------------------------------------------------------------

export const FormSubmission: Story = {
  name: 'Form Submission',
  render: () => {
    const [status, setStatus] = useState<string | null>(null)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '320px' }}>
        <SplitButton
          label="Save"
          iconStart={<Save size={16} />}
          onClick={() => setStatus('Saved')}
          items={[
            { id: 'save-close', label: 'Save and close', onSelect: () => setStatus('Saved and closed') },
            { id: 'save-draft', label: 'Save as draft',  onSelect: () => setStatus('Saved as draft') },
          ]}
        />
        {status && (
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-soft)' }}>
            Action: {status}
          </p>
        )}
      </div>
    )
  },
}
