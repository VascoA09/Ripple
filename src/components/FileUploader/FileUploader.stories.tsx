import type { Meta, StoryObj } from '@storybook/react'
import { FileUploader } from './FileUploader'
import type { FileUploaderProps } from './FileUploader'

// ---------------------------------------------------------------------------

const meta: Meta<FileUploaderProps> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: { layout: 'padded' },
  argTypes: {
    position:         { control: 'select', options: ['bottom', 'right'] },
    showUploadButton: { control: 'boolean' },
    disabled:         { control: 'boolean' },
    multiple:         { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<FileUploaderProps>

// ---------------------------------------------------------------------------
// Default — file selection only, no upload
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label:      'Attachments',
    hint:       'Accepted formats: PDF, DOC, DOCX. Max 10 MB per file.',
    accept:     '.pdf,.doc,.docx',
    maxSize:    10 * 1024 * 1024,
    formatText: 'PDF, DOC, DOCX',
    multiple:   true,
  },
  render: (args) => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        {...args}
        onFilesAdded={files => console.log('Files added:', files.map(f => f.name))}
        onFileRemove={id => console.log('Removed:', id)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With upload button — simulated async upload
// ---------------------------------------------------------------------------

export const WithUploadButton: Story = {
  name: 'With Upload Button',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        label="Supporting documents"
        description="Upload documents required for your application"
        required
        hint="You can upload up to 5 files"
        accept=".pdf,.doc,.docx"
        maxSize={10 * 1024 * 1024}
        formatText="PDF, DOC, DOCX"
        showUploadButton
        onFilesAdded={files => console.log('Staged:', files.map(f => f.name))}
        onUpload={files =>
          new Promise(resolve => {
            console.log('Uploading:', files.map(f => f.name))
            setTimeout(resolve, 2000)
          })
        }
        onFileRemove={id => console.log('Removed:', id)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Upload error — simulates a failed upload
// ---------------------------------------------------------------------------

export const UploadError: Story = {
  name: 'Upload Error',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        label="Documents"
        accept=".pdf,.doc,.docx"
        formatText="PDF, DOC, DOCX"
        showUploadButton
        onUpload={() =>
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Server error: upload quota exceeded')), 1500)
          )
        }
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Image upload — single file
// ---------------------------------------------------------------------------

export const SingleImageUpload: Story = {
  name: 'Single Image Upload',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        label="Profile photo"
        description="Upload a clear photo of yourself"
        accept="image/*"
        maxSize={5 * 1024 * 1024}
        formatText="JPG, PNG, WEBP"
        multiple={false}
        hint="Max 5 MB. Recommended: 400 × 400 px or larger."
        onFilesAdded={files => console.log('Image selected:', files[0]?.name)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Right layout
// ---------------------------------------------------------------------------

export const RightLayout: Story = {
  name: 'Right Layout',
  render: () => (
    <div style={{ maxWidth: '720px' }}>
      <FileUploader
        label="Invoice attachments"
        accept=".pdf,.xls,.xlsx,.csv"
        maxSize={20 * 1024 * 1024}
        formatText="PDF, XLS, XLSX, CSV"
        position="right"
        hint="Attach all relevant financial documents"
        onFilesAdded={files => console.log('Added:', files.map(f => f.name))}
        onFileRemove={id => console.log('Removed:', id)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Validation — type + size errors
// ---------------------------------------------------------------------------

export const WithValidation: Story = {
  name: 'With Validation',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        label="PDF documents only"
        description="Only PDF files up to 1 MB are accepted — try dropping another file type to see validation"
        accept=".pdf"
        maxSize={1 * 1024 * 1024}
        formatText="PDF"
        hint="Max 1 MB. Invalid files will be flagged but not blocked from the list."
        onFilesAdded={files => console.log('Valid files:', files.map(f => f.name))}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        label="Attachments"
        description="File upload is disabled during processing"
        accept=".pdf,.doc,.docx"
        formatText="PDF, DOC, DOCX"
        disabled
        hint="Upload will be re-enabled once processing is complete."
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// No label (aria-label only)
// ---------------------------------------------------------------------------

export const NoLabel: Story = {
  name: 'No Label (aria-label)',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileUploader
        aria-label="Upload files"
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        maxSize={10 * 1024 * 1024}
        formatText="PDF, DOC, DOCX, XLS, XLSX"
      />
    </div>
  ),
}
