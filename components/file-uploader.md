---
name: File Uploader
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# File Uploader

The File Uploader component allows users to select and upload files through drag-and-drop or traditional file browsing. It provides visual feedback during the upload process, validates file types and sizes, and displays a list of selected files with their upload status.

---

## Usage

File Uploaders should be used when users need to submit files as part of a form or workflow. They provide a more intuitive and flexible interface than standard HTML file inputs.

Use File Uploaders when:
* Users need to upload documents, images, or other files
* Drag-and-drop functionality improves the user experience
* You need to show upload progress and validation feedback
* Users may upload multiple files at once
* File type or size restrictions need to be enforced
* Visual confirmation of uploaded files is beneficial

Do not use File Uploaders when:
* Users need to preview or edit file contents (use File Viewer instead)
* The upload is instantaneous and doesn't need progress tracking
* A simple file input is sufficient for the use case
* Screen real estate is extremely limited

---

## Anatomy

The File Uploader consists of the following elements:

* **Label** (optional) — Descriptive text identifying the purpose of the uploader
* **Description** (optional) — Additional context about file requirements
* **Drop Zone** — Interactive area for dragging and dropping files
  * Upload icon
  * Primary instruction text (e.g., "Drag & drop files here")
  * Browse link or button
  * Format and size hints
* **File List** — Shows selected/uploaded files with status
  * File icon
  * File name
  * File size
  * Status indicator (uploading, uploaded, error)
  * Remove button
* **Hint** (optional) — Helper text below the drop zone
* **Validation Message** (optional) — Error or success messages

---

## Layout Positions

The file list can be positioned relative to the drop zone:

* **Bottom (Default)**
  * **Purpose**: File list appears below the drop zone
  * **Usage**: Standard vertical layout, best for most use cases
  * **Width**: Full width of drop zone

* **Right**
  * **Purpose**: File list appears to the right of the drop zone
  * **Usage**: Horizontal layout for wider screens or when vertical space is limited
  * **Layout**: Drop zone and file list side-by-side

---

## Sizes

The File Uploader adapts to container width:

* **Drop Zone Height**: 
  * Default: 200px
  * Flexible based on content
  * Minimum recommended: 150px

* **File List Item Height**: 
  * var(--size-300) (48px) per file
  * Maintains 48px minimum touch target

* **Icon Sizes**:
  * Upload icon in drop zone: 32px
  * File icons in list: 16px
  * Status icons: 16px
  * Remove button icon: 16px

---

## States

### Drop Zone States

* **Default**
  * Border: 2px dashed var(--border-default)
  * Background: var(--bg-surface)
  * Text: var(--text)
  * The drop zone is idle and ready for interaction

* **Hover**
  * Border: 2px dashed var(--border-primary)
  * Background: var(--bg-primary-softest)
  * Cursor: pointer
  * Indicates interactivity

* **Dragging**
  * Border: 2px solid var(--border-primary)
  * Background: var(--bg-primary-softest)
  * Visual feedback during drag over

* **Disabled**
  * Border: 2px dashed var(--border-default)
  * Background: var(--bg-neutral-soft)
  * Opacity: 0.6
  * Cursor: not-allowed
  * Non-interactive state

* **Error**
  * Border: 2px dashed var(--border-negative)
  * Error message displayed below
  * Shows validation errors

### File Item States

* **Added**
  * Status: File added, ready to upload
  * Icon: File icon
  * Color: var(--text)

* **Uploading**
  * Status: Upload in progress
  * Icon: Spinner animation
  * Progress indicator may be shown

* **Uploaded**
  * Status: Successfully uploaded
  * Icon: Check (success icon)
  * Color: var(--text-positive)

* **Error**
  * Status: Upload failed or validation error
  * Icon: AlertCircle
  * Color: var(--text-negative)
  * Error message displayed with file

---

## Behavior

### File Selection

Users can add files in two ways:

1. **Drag and Drop**
   * Drag files from file system onto drop zone
   * Drop zone highlights when files are dragged over
   * Files are added to the list upon drop

2. **Browse Files**
   * Click the browse link or button
   * Native file picker opens
   * Selected files are added to the list

### File Validation

Files are validated immediately upon selection:

* **File Type Validation**
  * Checks against `accept` prop (e.g., ".pdf,.doc,.docx")
  * Shows error message for invalid types
  * File marked with error status

* **File Size Validation**
  * Checks against `maxSize` prop (in bytes)
  * Shows error message if file exceeds limit
  * File marked with error status

### Upload Process

When using the upload functionality:

1. User clicks "Upload" button (if `showUploadButton` is true)
2. `onUpload` callback is triggered with file list
3. Files show "uploading" status with spinner
4. On success: Files show "uploaded" status with checkmark
5. On error: Files show error status with error message

### File Removal

* Click remove button (X icon) on any file item
* File is removed from the list
* `onFileRemove` callback is triggered
* Can remove files at any stage (added, uploading, uploaded, error)

### Multiple vs Single File

* **Multiple files** (default): Users can add multiple files
* **Single file**: Only one file allowed, new selection replaces previous

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | — | Label text for the uploader |
| `description` | string | — | Description text for additional context |
| `required` | boolean | false | Whether the field is required |
| `hint` | string | — | Hint text below drop zone |
| `aria-label` | string | — | ARIA label when label is not visible |
| `position` | 'bottom' \| 'right' | 'bottom' | Position of file list |
| `showUploadButton` | boolean | false | Show upload button in drop zone |
| `accept` | string | — | Accepted file types (e.g., ".pdf,.doc") |
| `maxSize` | number | — | Maximum file size in bytes |
| `formatText` | string | — | Format display text (e.g., "PDF, DOC") |
| `disabled` | boolean | false | Disable the uploader |
| `onFilesAdded` | function | — | Callback when files are added |
| `onUpload` | function | — | Callback for upload process |
| `onFileRemove` | function | — | Callback when file is removed |
| `multiple` | boolean | true | Allow multiple files |
| `id` | string | — | Unique ID for the uploader |

---

## Spacing

Use Ripple spacing tokens for all spacing:

* **Drop zone padding**: var(--spacing-200) (32px)
* **Gap between drop zone and file list**: var(--spacing-100) (16px)
* **Gap between file items**: var(--spacing-50) (8px)
* **File item padding**: var(--spacing-75) (12px)
* **Gap between label and drop zone**: var(--spacing-25) (4px)
* **Gap between elements within drop zone**: var(--spacing-50) (8px)
* **Border radius**: var(--border-radius-200) (8px)

---

## Accessibility

* **ARIA Labels**: Provide `aria-label` when label is not visible
* **Keyboard Support**:
  * Tab to focus browse link/button
  * Enter/Space to open file picker
  * Tab through file list items
  * Enter/Space to remove files
* **Screen Reader Announcements**:
  * File added: "File [filename] added"
  * Upload progress: "Uploading [filename]"
  * Upload complete: "[filename] uploaded successfully"
  * Error: "Error: [error message]"
* **Focus Management**:
  * Clear focus indicators on interactive elements
  * Focus returns to browse button after file selection
* **File List**:
  * Each file item is keyboard accessible
  * Remove buttons are focusable and activated with Enter/Space
* **Required Fields**: 
  * Use `required` prop and asterisk (*) in label
  * Validate before form submission
* **Color Contrast**:
  * All text meets 4.5:1 contrast ratio
  * Interactive elements meet 3:1 contrast ratio
* **Touch Targets**:
  * All interactive elements meet 48×48px minimum on mobile
  * File list items: 48px height
  * Remove buttons: 48×48px touch target

---

## Colors

**Drop Zone Default State:**
* Background: var(--bg-surface)
* Border: 2px dashed var(--border-default)
* Text: var(--text)
* Icon: var(--text-soft)

**Drop Zone Hover/Dragging State:**
* Background: var(--bg-primary-softest)
* Border: 2px solid var(--border-primary)
* Text: var(--text)

**Drop Zone Disabled State:**
* Background: var(--bg-neutral-soft)
* Border: 2px dashed var(--border-default)
* Text: var(--text-soft)
* Opacity: 0.6

**Drop Zone Error State:**
* Border: 2px dashed var(--border-negative)
* Error text: var(--text-negative)

**File List Items:**
* Background: var(--bg-surface)
* Border: 1px solid var(--border-default)
* Text: var(--text)
* File size: var(--text-soft)

**File Status Colors:**
* Added: var(--text)
* Uploading: var(--text) with spinner
* Uploaded: var(--text-positive) with checkmark
* Error: var(--text-negative) with error icon

---

## Content Guidelines

### Label Text
* Use clear, descriptive labels: "Upload documents", "Add attachments"
* Keep concise (1-3 words)
* Use sentence case

### Description Text
* Provide context about requirements: "Accepted formats: PDF, DOC, DOCX"
* Clarify size limits: "Maximum file size: 10 MB"
* Explain usage: "Upload supporting documents for your application"

### Drop Zone Instructions
* Primary text: "Drag & drop files here"
* Secondary text: "or browse files"
* Keep instructions brief and actionable

### Hint Text
* Provide additional guidance: "You can upload up to 5 files"
* Clarify formats: "Supported formats: PDF, DOC, DOCX, XLS, XLSX"
* Explain size limits: "Max 10 MB per file"

### Error Messages
* Be specific: "File size exceeds 10 MB" not "File too large"
* Be actionable: "Please select a PDF, DOC, or DOCX file"
* Use plain language: Avoid technical jargon

---

## Best Practices

### Do

* Clearly indicate accepted file types and size limits
* Provide immediate validation feedback
* Show upload progress for larger files
* Allow users to remove files before uploading
* Use appropriate file type restrictions
* Provide helpful error messages
* Support both drag-drop and browse methods
* Maintain clear visual states (hover, dragging, disabled)
* Use icons to reinforce file status
* Position file list where it's easily visible

### Don't

* Don't use vague file type restrictions
* Don't hide size or format requirements
* Don't make the drop zone too small (minimum 150px height)
* Don't disable drag-and-drop functionality
* Don't forget to handle upload errors gracefully
* Don't allow files to be uploaded without validation
* Don't use confusing status indicators
* Don't make remove buttons too small or hard to find
* Don't forget keyboard accessibility
* Don't rely solely on color to indicate status

---

## Validation

### File Type Validation

**Specify accepted types using `accept` prop:**
```typescript
accept=".pdf,.doc,.docx"
// or
accept="application/pdf,application/msword"
```

**Display format hint:**
```typescript
formatText="PDF, DOC, DOCX"
```

### File Size Validation

**Specify maximum size in bytes:**
```typescript
maxSize={10485760} // 10 MB
```

**Provide clear feedback:**
* Show size limit in hint or description
* Display specific error when limit exceeded
* Mark file with error status

---

## Integration Examples

### Basic File Uploader
```typescript
<FileUploader
  label="Upload documents"
  hint="Accepted formats: PDF, DOC, DOCX"
  accept=".pdf,.doc,.docx"
  maxSize={10485760}
  formatText="PDF, DOC, DOCX"
  onFilesAdded={(files) => console.log('Files added:', files)}
/>
```

### With Upload Button
```typescript
<FileUploader
  label="Upload documents"
  description="Upload supporting documents for your application"
  hint="Max 10 MB per file"
  accept=".pdf,.doc,.docx"
  maxSize={10485760}
  formatText="PDF, DOC, DOCX"
  showUploadButton={true}
  onUpload={async (files) => {
    // Handle upload logic
  }}
  onFileRemove={(fileId) => console.log('File removed:', fileId)}
/>
```

### Single File Upload
```typescript
<FileUploader
  label="Upload profile picture"
  accept="image/*"
  maxSize={5242880} // 5 MB
  multiple={false}
  onFilesAdded={(files) => console.log('File added:', files[0])}
/>
```

### Side-by-Side Layout
```typescript
<FileUploader
  label="Upload files"
  position="right"
  accept=".pdf,.doc,.docx,.xls,.xlsx"
  maxSize={10485760}
  formatText="PDF, DOC, DOCX, XLS, XLSX"
/>
```

---

## Related Components

* **File Viewer**: Use to preview uploaded files
* **Field Label**: Used for labeling the uploader
* **Hint**: Provides helper text
* **Validation Message**: Displays error or success messages
* **Button**: Used for browse and upload actions
* **Icon Button**: Used for remove actions
* **Link**: Used for browse file links
* **Spinner**: Shows upload progress

---

## Common Use Cases

* **Form file attachments**: Job applications, support tickets
* **Document submission**: Invoices, contracts, reports
* **Image uploads**: Profile pictures, product images, gallery photos
* **Bulk file uploads**: Multiple documents or images at once
* **Restricted file types**: Only accept specific formats (PDF, images, etc.)
* **Size-limited uploads**: Enforce maximum file sizes

---

## Typography

All text uses Ripple typography tokens:

* **Label**: var(--font-size-80) (14px), var(--font-weight-semibold)
* **Description**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Drop zone text**: var(--font-size-100) (16px), var(--font-weight-regular)
* **Browse link**: var(--font-size-100) (16px), var(--font-weight-semibold)
* **File name**: var(--font-size-80) (14px), var(--font-weight-regular)
* **File size**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Hint**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Error message**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Font family**: var(--font-family) (Open Sans)
* **Line height**: var(--line-height-body) (150%)
