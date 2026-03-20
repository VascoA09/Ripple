---
name: File Viewer
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display]
---

# File Viewer

The File Viewer component lets users preview files directly within the interface without leaving the current context. It supports multiple file types, including documents, images, and spreadsheets, rendering a read-only preview of the content within a structured container.

---

## Usage

File Viewers should be used for quick inline previews of file content, allowing users to view files without downloading or opening them in separate applications.

Use File Viewers when:
* Users need to quickly preview the content of a file
* Displaying attachments in message threads or activity feeds
* Building file management interfaces with inline preview capability
* Showing document or image previews in side panels or modals
* Users benefit from previewing before downloading or taking action

Do not use File Viewers when:
* Files need to be edited or modified (use dedicated editors)
* File types cannot be meaningfully previewed
* The viewer would be the main content area of a page
* Users need advanced file manipulation beyond viewing

---

## Anatomy

The File Viewer consists of three main areas:

* **Header**: Displays the file name and contextual actions (zoom, rotate, expand, download, etc.)
* **Preview Area**: The main content zone where file contents are rendered
* **Footer** (optional): Contains metadata (file size, upload date) and navigation controls

---

## File Types

The File Viewer adapts its rendering based on file type:

* **Images** (PNG, JPG, SVG, GIF, WEBP)
  * Displayed within preview area, scaled to fit
  * Zoom controls enabled (50% to 200%)
  * Rotate controls in 90-degree increments

* **Documents** (PDF, DOCX, TXT)
  * Rendered as scrollable text content
  * Pagination controls for multi-page documents

* **Spreadsheets** (XLSX, CSV)
  * Shown as read-only grid/table view
  * Scrollable for large datasets

* **Unsupported Types**
  * Display "No preview available" empty state
  * Provide download option via context menu

---

## Behavior

### Loading States

When a file is selected for preview, the File Viewer displays a loading indicator (spinner) until the file content has been fully retrieved and rendered.

### Error States

If a file fails to load, the File Viewer displays a "No data found" empty state with an appropriate icon and message.

### Zoom and Rotation (Images Only)

* **Zoom**: Range from 50% to 200% in 25% increments
* **Rotate**: 90-degree increments (0°, 90°, 180°, 270°)
* **Fit**: Reset zoom to 100% and rotation to 0°

### Pagination (Multi-Page Documents)

* Page navigation controls appear in the footer
* Current page and total pages displayed (e.g., "1 / 20")
* Previous/Next page buttons with disabled states at boundaries

### Multi-File Navigation

* When viewing multiple files, navigation controls appear in footer
* Shows current file position (e.g., "2 / 5 files")
* Previous/Next file buttons with disabled states at boundaries

### Responsive Behavior

* File Viewer adapts to container width
* Action buttons may collapse into overflow menu on smaller viewports
* Preview area adjusts proportionally
* Minimum recommended width: 300px

---

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `file` | FileViewerFile | — | File object containing URL, name, type, and metadata |
| `files` | FileViewerFile[] | [] | Array of files for multi-file navigation |
| `currentFileIndex` | number | 0 | Index of currently displayed file |
| `showHeader` | boolean | true | Controls visibility of header bar |
| `showFooter` | boolean | false | Controls visibility of footer with metadata |
| `allowDownload` | boolean | true | Enables download action in context menu |
| `allowExpand` | boolean | true | Enables expand/fullscreen action |
| `allowZoom` | boolean | true | Enables zoom controls for images |
| `allowRotate` | boolean | true | Enables rotate control for images |
| `maxHeight` | string | "500px" | Maximum height of preview area |
| `onDownload` | function | — | Callback when download action is triggered |
| `onExpand` | function | — | Callback when expand action is triggered |
| `onFileChange` | function | — | Callback when navigating between files |

---

## FileViewerFile Object

```typescript
{
  name: string;          // File name
  type: string;          // MIME type or file extension
  url: string;           // File source URL
  size?: number;         // File size in bytes
  uploadDate?: string;   // Upload date (formatted string)
  pageCount?: number;    // Number of pages (for documents)
}
```

---

## Sizing

* **Width**: File Viewer uses percentage-based or fluid widths to adapt to parent container
* **Height**: Default maximum height is 500px, adjustable via `maxHeight` prop
* **Minimum Width**: 300px recommended for meaningful content rendering
* **In Modals**: Should respect dialog's available space
* **In Side Panels**: Should fill panel height minus header and footer

---

## Spacing

Use Ripple spacing tokens for all spacing:

* **Header padding**: var(--spacing-100) (16px)
* **Preview area padding**: var(--spacing-100) (16px)
* **Footer padding**: var(--spacing-75) (12px)
* **Action button gap**: var(--spacing-50) (8px)
* **Section gap**: var(--spacing-75) (12px)

---

## Actions

### Primary Actions (Header)

* **Zoom In**: Increase image zoom by 25% (max 200%)
* **Zoom Out**: Decrease image zoom by 25% (min 50%)
* **Rotate**: Rotate image 90 degrees clockwise
* **Expand**: Open file in fullscreen or larger modal
* **More (Context Menu)**: Access additional actions

### Context Menu Actions

* **Download**: Download the file to user's device
* **Fit**: Reset zoom to 100% and rotation to 0° (images only)
* **Open in new tab**: Open file in new browser tab

---

## Placement

File Viewer works well in these layout contexts:

* **Side Panels**: Preview attachments while viewing file lists or messages
* **Modal Dialogs**: Focused file preview triggered by clicking file name or thumbnail
* **Inline within Content**: Embedded preview in detail views or activity feeds
* **File Management**: Preview pane in file browsers or document libraries

**Avoid**:
* Narrow columns (below 300px)
* As the sole page content
* In cramped layouts where preview cannot render clearly

---

## States

The File Viewer has the following states:

* **Loading**: Shows spinner while file content loads
* **Loaded**: File content successfully rendered
* **Error**: "No data found" empty state when file fails to load
* **Unsupported**: "No preview available" empty state for unsupported file types

---

## Empty States

### No Data Found

* **Icon**: FileX icon at 48px, color: var(--text-soft), opacity: 0.5
* **Title**: "No data found"
* **Description**: "Unable to load file data"
* **Use when**: File URL is invalid or file fails to load

### No Preview Available

* **Icon**: EyeOff icon at 48px, color: var(--text-soft), opacity: 0.5
* **Title**: "No preview available"
* **Description**: "This file has no supported preview"
* **Use when**: File type is not supported for preview
* **Action**: Provide download option in context menu

---

## Accessibility

* **ARIA Roles**: File Viewer container uses role="region" with descriptive aria-label
* **Action Labels**: All icon buttons have descriptive aria-label attributes
* **Keyboard Navigation**: Users can tab to all actions and use Enter/Space to activate
* **Screen Readers**: Loading, error, and empty states are announced to assistive technologies
* **Image Alt Text**: Images include alt text derived from file name or metadata
* **Focus Management**: When opened in modal, focus moves to viewer and returns to trigger on close
* **Document Content**: Rendered text content is accessible to screen readers
* **State Announcements**: Use aria-live regions for state changes

**WCAG Compliance**:
* All text meets minimum 4.5:1 contrast ratio
* Interactive elements meet minimum 44×44px touch target on mobile
* Keyboard-only navigation fully supported
* Screen reader compatible

---

## Best Practices

### Do

* Use File Viewer for quick inline previews in contextual locations
* Enable footer to display metadata and pagination for multi-page documents
* Provide zoom and rotate controls for image files
* Display clear empty states with helpful messages when files cannot be previewed
* Size the viewer relative to parent container using percentage widths
* Maintain minimum 300px width for meaningful rendering
* Provide download options for all files
* Use appropriate maxHeight based on layout context
* Test with various file types to ensure proper handling
* Provide clear visual feedback during loading states

### Don't

* Don't use File Viewer as the main content area of a page
* Don't use for file editing or interactive content manipulation
* Don't place in narrow columns (below 300px width)
* Don't forget to provide download options for unsupported file types
* Don't hide important actions behind context menu without visual indication
* Don't use fixed pixel widths—use fluid or percentage-based widths
* Don't omit alt text for image previews
* Don't forget to handle loading and error states gracefully
* Don't block user workflow while preview loads
* Don't use for files that require specialized applications to view properly

---

## Context Menu

The File Viewer provides a contextual menu accessed via the More (three dots) button:

* **Download**: Download file to device
* **Fit**: Reset zoom and rotation (images only)
* **Open in new tab**: Open file in new browser tab

**Menu Styling**:
* Background: var(--bg-surface)
* Border: 1px solid var(--border-default)
* Border Radius: var(--border-radius-150)
* Box Shadow: var(--box-shadow-400)
* Padding: var(--spacing-50)
* Min Width: 180px

**Menu Items**:
* Hover: var(--bg-primary-softest)
* Padding: var(--spacing-50) var(--spacing-75)
* Gap: var(--spacing-50) (between icon and text)
* Font Size: var(--font-size-80)

---

## Integration Examples

### In Side Panel
```typescript
<FileViewer
  file={selectedFile}
  showHeader={true}
  showFooter={true}
  maxHeight="calc(100vh - 200px)"
  allowDownload={true}
  allowExpand={true}
/>
```

### In Modal Dialog
```typescript
<Dialog>
  <FileViewer
    file={attachmentFile}
    showHeader={true}
    showFooter={false}
    maxHeight="70vh"
    onClose={handleCloseModal}
  />
</Dialog>
```

### Multi-File Gallery
```typescript
<FileViewer
  file={files[currentIndex]}
  files={files}
  currentFileIndex={currentIndex}
  onFileChange={setCurrentIndex}
  showHeader={true}
  showFooter={true}
  maxHeight="600px"
/>
```

---

## Related Components

* **Dialog**: Use with File Viewer for focused full-screen previews
* **Panel**: Container for side-panel file previews
* **Card**: Container for embedded file previews in content
* **Icon Button**: Used for all action buttons in header
* **Spinner**: Loading indicator during file load
