import type { Meta, StoryObj } from '@storybook/react'
import { useState, useRef } from 'react'
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
      triggerLabel="More save options"
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
      <SplitButton
        label="Save"
        size="xsmall"
        triggerLabel="More save options"
        onClick={() => {}}
        items={saveItems}
      />
      <SplitButton
        label="Save"
        size="small"
        triggerLabel="More save options"
        onClick={() => {}}
        items={saveItems}
      />
      <SplitButton
        label="Save"
        size="medium"
        triggerLabel="More save options"
        onClick={() => {}}
        items={saveItems}
      />
      <SplitButton
        label="Save"
        size="large"
        triggerLabel="More save options"
        onClick={() => {}}
        items={saveItems}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '**XSmall (24px)** does not meet the 44×44px touch target standard. Restrict to dense toolbar contexts and enforce a spacing buffer at the usage site.',
      },
    },
  },
}

// ---------------------------------------------------------------------------
// Variants
// Ghost is not supported — see components/split-button.md#variants.
// ---------------------------------------------------------------------------

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <SplitButton label="Save" variant="fill"    triggerLabel="More save options" onClick={() => {}} items={saveItems} />
      <SplitButton label="Save" variant="outline" triggerLabel="More save options" onClick={() => {}} items={saveItems} />
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
        <SplitButton label="Save"   variant="fill" color="primary"  triggerLabel="More save options"   onClick={() => {}} items={saveItems} />
        <SplitButton label="Save"   variant="fill" color="neutral"  triggerLabel="More save options"   onClick={() => {}} items={saveItems} />
        <SplitButton label="Delete" variant="fill" color="negative" triggerLabel="More delete options" onClick={() => {}} items={[
          { id: 'delete-all',      label: 'Delete all records', onSelect: () => {} },
          { id: 'delete-selected', label: 'Delete selected',    onSelect: () => {} },
        ]} />
      </div>

      {/* Outline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <SplitButton label="Save"   variant="outline" color="primary"  triggerLabel="More save options"   onClick={() => {}} items={saveItems} />
        <SplitButton label="Save"   variant="outline" color="neutral"  triggerLabel="More save options"   onClick={() => {}} items={saveItems} />
        <SplitButton label="Delete" variant="outline" color="negative" triggerLabel="More delete options" onClick={() => {}} items={[
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
        triggerLabel="More save options"
        onClick={() => {}}
        items={saveItems}
      />
      <SplitButton
        label="Export"
        iconStart={<Download size={16} />}
        triggerLabel="More export options"
        onClick={() => {}}
        items={exportItems}
      />
      <SplitButton
        label="Send"
        iconStart={<Send size={16} />}
        triggerLabel="More send options"
        onClick={() => {}}
        items={sendItems}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Loading
// The trigger is also suppressed while loading — opening the menu during an
// in-flight action is undefined behaviour.
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
          triggerLabel="More save options"
          onClick={handleSave}
          items={saveItems}
          loading={saving}
        />
        {/* Static snapshot of loading state for visual reference */}
        <SplitButton
          label="Saving…"
          triggerLabel="More save options"
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
      <SplitButton label="Save"   variant="fill"    triggerLabel="More save options"   onClick={() => {}} items={saveItems}   disabled />
      <SplitButton label="Save"   variant="outline" triggerLabel="More save options"   onClick={() => {}} items={saveItems}   disabled />
      <SplitButton label="Export" variant="fill"    triggerLabel="More export options" onClick={() => {}} items={exportItems} disabled />
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
      triggerLabel="More export options"
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
          triggerLabel="More save options"
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

// ---------------------------------------------------------------------------
// In Toolbar
// Demonstrates the roving tabIndex pattern required by role="toolbar".
// Arrow keys move focus between all focusable buttons within the toolbar.
// Tab moves focus out of the toolbar entirely.
// The SplitButton itself requires no changes — the toolbar owns this behaviour.
// ---------------------------------------------------------------------------

export const InToolbar: Story = {
  name: 'In Toolbar',
  render: () => {
    const toolbarRef = useRef<HTMLDivElement>(null)

    function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      if (!toolbarRef.current) return

      const focusable = Array.from(
        toolbarRef.current.querySelectorAll<HTMLElement>('button:not(:disabled)')
      )
      const current = document.activeElement as HTMLElement
      const index = focusable.indexOf(current)
      if (index === -1) return

      e.preventDefault()

      const next =
        e.key === 'ArrowRight'
          ? focusable[(index + 1) % focusable.length]
          : focusable[(index - 1 + focusable.length) % focusable.length]

      // Roving tabIndex: remove tabIndex from current, set on next
      focusable.forEach(el => el.setAttribute('tabindex', '-1'))
      next.setAttribute('tabindex', '0')
      next.focus()
    }

    return (
      <div
        ref={toolbarRef}
        role="toolbar"
        aria-label="Document actions"
        onKeyDown={handleKeyDown}
        style={{
          display:      'inline-flex',
          alignItems:   'center',
          gap:          '8px',
          padding:      '8px',
          border:       '1px solid var(--border-default)',
          borderRadius: '8px',
        }}
      >
        <SplitButton
          label="Save"
          iconStart={<Save size={16} />}
          triggerLabel="More save options"
          onClick={() => {}}
          items={saveItems}
        />
        <SplitButton
          label="Export"
          variant="outline"
          iconStart={<Download size={16} />}
          triggerLabel="More export options"
          onClick={() => {}}
          items={exportItems}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inside a `role="toolbar"`, Left and Right arrow keys move focus between all focusable buttons using the roving `tabIndex` pattern. Tab moves out of the toolbar entirely. The SplitButton requires no changes — the toolbar owns this behaviour.',
      },
    },
  },
}
