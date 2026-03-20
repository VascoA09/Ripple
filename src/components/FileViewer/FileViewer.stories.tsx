import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FileViewer } from './FileViewer'
import type { FileViewerProps, FileViewerFile } from './FileViewer'

// ---------------------------------------------------------------------------

const meta: Meta<FileViewerProps> = {
  title: 'Components/FileViewer',
  component: FileViewer,
  parameters: { layout: 'padded' },
  argTypes: {
    showHeader:    { control: 'boolean' },
    showFooter:    { control: 'boolean' },
    allowDownload: { control: 'boolean' },
    allowExpand:   { control: 'boolean' },
    allowZoom:     { control: 'boolean' },
    allowRotate:   { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<FileViewerProps>

// ---------------------------------------------------------------------------
// Sample files
// ---------------------------------------------------------------------------

// Public-domain image via Wikimedia
const imageFile: FileViewerFile = {
  name:       'landscape.jpg',
  type:       'image/jpeg',
  url:        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg',
  size:       284672,
  uploadDate: '15 Mar 2026',
}

// Mozilla's sample PDF
const pdfFile: FileViewerFile = {
  name:       'sample-document.pdf',
  type:       'application/pdf',
  url:        'https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf',
  size:       153600,
  uploadDate: '12 Mar 2026',
  pageCount:  4,
}

// Inline CSV data URL
const csvContent = `Name,Department,Role,Start date
Alice Chen,Engineering,Senior Engineer,2021-03-01
Bob Martin,Design,UX Designer,2022-07-15
Carol White,Finance,Financial Analyst,2020-11-08
David Park,HR,HR Manager,2019-05-20
Eva Torres,Marketing,Marketing Lead,2023-01-10
Frank Liu,Engineering,Staff Engineer,2018-09-12
Grace Kim,Product,Product Manager,2021-12-03
Henry Adams,Operations,Operations Director,2017-04-25`

const csvFile: FileViewerFile = {
  name:       'employees.csv',
  type:       'text/csv',
  url:        `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`,
  size:       412,
  uploadDate: '19 Mar 2026',
}

// Inline TXT data URL
const txtContent = `Q1 2026 Financial Summary
==========================

Revenue
-------
Total revenue: €4,280,000
YoY growth: +18.4%

Top performing regions:
  1. Northern Europe  — €1,640,000
  2. Central Europe   — €1,180,000
  3. Southern Europe  —   €960,000
  4. Eastern Europe   —   €500,000

Cost of Goods Sold (COGS)
--------------------------
Total COGS: €2,136,000
Gross margin: 50.1%

Operating Expenses
------------------
Headcount (FTE): 312
Total OpEx: €1,024,000
EBITDA: €1,120,000 (26.2% margin)

Notes
-----
- Q1 results exclude one-time integration costs of €80,000
- FX impact estimated at +€140,000 due to GBP/EUR movement
- Full audit scheduled for April 30
`

const txtFile: FileViewerFile = {
  name:       'q1-summary.txt',
  type:       'text/plain',
  url:        `data:text/plain;charset=utf-8,${encodeURIComponent(txtContent)}`,
  size:       612,
  uploadDate: '19 Mar 2026',
}

const unsupportedFile: FileViewerFile = {
  name: 'presentation.pptx',
  type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  url:  '#',
  size: 2097152,
}

// ---------------------------------------------------------------------------
// Image preview
// ---------------------------------------------------------------------------

export const ImagePreview: Story = {
  name: 'Image',
  args: {
    file:          imageFile,
    showHeader:    true,
    showFooter:    true,
    allowDownload: true,
    allowExpand:   true,
    allowZoom:     true,
    allowRotate:   true,
    maxHeight:     '440px',
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <FileViewer
        {...args}
        onDownload={f => alert(`Download: ${f.name}`)}
        onExpand={f => alert(`Expand: ${f.name}`)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// PDF preview
// ---------------------------------------------------------------------------

export const PDFPreview: Story = {
  name: 'PDF',
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <FileViewer
        file={pdfFile}
        showHeader
        showFooter
        maxHeight="560px"
        allowDownload
        onDownload={f => alert(`Download: ${f.name}`)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// CSV preview
// ---------------------------------------------------------------------------

export const CSVPreview: Story = {
  name: 'CSV',
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <FileViewer
        file={csvFile}
        showHeader
        showFooter
        maxHeight="320px"
        allowZoom={false}
        allowRotate={false}
        onDownload={f => alert(`Download: ${f.name}`)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// TXT preview
// ---------------------------------------------------------------------------

export const TextPreview: Story = {
  name: 'Text',
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <FileViewer
        file={txtFile}
        showHeader
        showFooter
        maxHeight="320px"
        allowZoom={false}
        allowRotate={false}
        onDownload={f => alert(`Download: ${f.name}`)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Unsupported file type
// ---------------------------------------------------------------------------

export const UnsupportedType: Story = {
  name: 'Unsupported',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileViewer
        file={unsupportedFile}
        showHeader
        maxHeight="300px"
        allowDownload
        onDownload={f => alert(`Download: ${f.name}`)}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Multi-file navigation
// ---------------------------------------------------------------------------

const galleryFiles: FileViewerFile[] = [
  imageFile,
  {
    name: 'diagram.png',
    type: 'image/png',
    url:  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/560px-PNG_transparency_demonstration_1.png',
    size: 45056,
    uploadDate: '16 Mar 2026',
  },
  csvFile,
  pdfFile,
  unsupportedFile,
]

export const MultiFile: Story = {
  name: 'Multi-file Navigation',
  render: () => {
    const [index, setIndex] = useState(0)
    return (
      <div style={{ maxWidth: '640px' }}>
        <FileViewer
          file={galleryFiles[index]}
          files={galleryFiles}
          currentFileIndex={index}
          onFileChange={setIndex}
          showHeader
          showFooter
          maxHeight="440px"
          allowDownload
          onDownload={f => alert(`Download: ${f.name}`)}
          onExpand={f => alert(`Expand: ${f.name}`)}
        />
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// No header (embed mode)
// ---------------------------------------------------------------------------

export const NoHeader: Story = {
  name: 'No Header (embed)',
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <FileViewer
        file={imageFile}
        showHeader={false}
        showFooter={false}
        maxHeight="300px"
        allowZoom={false}
        allowRotate={false}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In a card / side panel context
// ---------------------------------------------------------------------------

export const InSidePanel: Story = {
  name: 'In Side Panel',
  render: () => (
    <div style={{
      display: 'flex',
      gap: '16px',
      height: '520px',
      border: '1px solid var(--border-neutral)',
      borderRadius: '8px',
      overflow: 'hidden',
      background: 'var(--bg-surface)',
    }}>
      {/* Fake file list pane */}
      <div style={{
        width: '200px',
        borderRight: '1px solid var(--border-neutral)',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        flexShrink: 0,
      }}>
        {[imageFile, csvFile, txtFile, unsupportedFile].map((f, i) => (
          <div key={i} style={{
            padding: '8px 10px',
            borderRadius: '6px',
            fontFamily: 'var(--font-family-base)',
            fontSize: '13px',
            color: i === 0 ? 'var(--color-primary)' : 'var(--text)',
            background: i === 0 ? 'var(--bg-primary-softest)' : 'transparent',
            cursor: 'pointer',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {f.name}
          </div>
        ))}
      </div>

      {/* Viewer pane */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '12px' }}>
        <FileViewer
          file={imageFile}
          showHeader
          showFooter
          maxHeight="calc(520px - 24px)"
          allowDownload
          allowExpand
          allowZoom
          allowRotate
          onDownload={f => alert(`Download: ${f.name}`)}
          onExpand={f => alert(`Expand: ${f.name}`)}
        />
      </div>
    </div>
  ),
}
