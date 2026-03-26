import { useId, useState, useEffect, useCallback } from 'react'
import {
  ZoomIn, ZoomOut, RotateCw, Maximize2, MoreHorizontal,
  Download, ExternalLink, ScanSearch,
  FileX, EyeOff, FileText, FileSpreadsheet,
  ChevronLeft, ChevronRight,
} from 'lucide-react'
import { IconButton } from '../IconButton'
import { Spinner } from '../Spinner'
import {
  FlyoutMenu, FlyoutMenuTrigger, FlyoutMenuContent,
  FlyoutMenuItem,
} from '../FlyoutMenu'
import './FileViewer.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FileViewerFile {
  name:         string
  /** MIME type (e.g. "image/png") or extension (e.g. ".pdf"). */
  type:         string
  /** URL of the file to preview. */
  url:          string
  size?:        number
  uploadDate?:  string
  /** For paginated document display in the footer. */
  pageCount?:   number
}

export interface FileViewerProps {
  /** The file currently being previewed. */
  file:                FileViewerFile
  /** All files — enables multi-file navigation in the footer. */
  files?:              FileViewerFile[]
  /** Index of the current file within `files`. */
  currentFileIndex?:   number
  showHeader?:         boolean
  showFooter?:         boolean
  allowDownload?:      boolean
  allowExpand?:        boolean
  allowZoom?:          boolean
  allowRotate?:        boolean
  /** CSS max-height of the preview area. Default: "500px". */
  maxHeight?:          string
  onDownload?:         (file: FileViewerFile) => void
  onExpand?:           (file: FileViewerFile) => void
  /** Called with the new index when the user navigates between files. */
  onFileChange?:       (index: number) => void
  className?:          string
  'aria-label'?:       string
}

// ---------------------------------------------------------------------------
// Preview type detection
// ---------------------------------------------------------------------------

type PreviewType = 'image' | 'pdf' | 'text' | 'csv' | 'unsupported'

function getPreviewType(file: FileViewerFile): PreviewType {
  const mime = file.type.toLowerCase()
  const ext  = file.name.split('.').pop()?.toLowerCase() ?? ''

  if (mime.startsWith('image/') || ['png','jpg','jpeg','gif','webp','svg','avif','bmp'].includes(ext))
    return 'image'
  if (mime === 'application/pdf' || ext === 'pdf')
    return 'pdf'
  if (mime === 'text/plain' || ext === 'txt')
    return 'text'
  if (mime === 'text/csv' || ext === 'csv')
    return 'csv'
  return 'unsupported'
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatBytes(bytes: number): string {
  if (bytes < 1024)           return `${bytes} B`
  if (bytes < 1024 * 1024)    return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/** Naive CSV parser — sufficient for preview. */
function parseCSV(text: string): string[][] {
  return text
    .trim()
    .split('\n')
    .map(row =>
      row.split(',').map(cell => cell.trim().replace(/^"(.*)"$/, '$1'))
    )
}

const ZOOM_MIN  = 50
const ZOOM_MAX  = 200
const ZOOM_STEP = 25

// ---------------------------------------------------------------------------
// FileViewer
// ---------------------------------------------------------------------------

export function FileViewer({
  file,
  files,
  currentFileIndex  = 0,
  showHeader        = true,
  showFooter        = false,
  allowDownload     = true,
  allowExpand       = true,
  allowZoom         = true,
  allowRotate       = true,
  maxHeight         = '500px',
  onDownload,
  onExpand,
  onFileChange,
  className,
  'aria-label': ariaLabel,
}: FileViewerProps) {
  const regionId = useId()

  const previewType = getPreviewType(file)

  type Status = 'loading' | 'loaded' | 'error' | 'unsupported'
  const [status,      setStatus]      = useState<Status>(
    previewType === 'unsupported' ? 'unsupported' : 'loading'
  )
  const [zoom,        setZoom]        = useState(100)
  const [rotation,    setRotation]    = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [textContent, setTextContent] = useState<string | null>(null)
  const [csvRows,     setCsvRows]     = useState<string[][] | null>(null)
  const [announcement, setAnnounce]  = useState('')

  // Reset state when file changes
  useEffect(() => {
    setZoom(100)
    setRotation(0)
    setCurrentPage(1)
    setTextContent(null)
    setCsvRows(null)
    setStatus(previewType === 'unsupported' ? 'unsupported' : 'loading')
  }, [file.url, previewType])

  // Fetch TXT / CSV content
  useEffect(() => {
    if (previewType !== 'text' && previewType !== 'csv') return
    let cancelled = false

    fetch(file.url)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then(text => {
        if (cancelled) return
        if (previewType === 'text') {
          setTextContent(text)
        } else {
          setCsvRows(parseCSV(text))
        }
        setStatus('loaded')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => { cancelled = true }
  }, [file.url, previewType])

  // ---------------------------------------------------------------------------
  // Image handlers
  // ---------------------------------------------------------------------------

  const handleImageLoad  = () => { setStatus('loaded'); setAnnounce('File loaded') }
  const handleImageError = () => { setStatus('error');  setAnnounce('File failed to load') }

  // ---------------------------------------------------------------------------
  // PDF handlers
  // ---------------------------------------------------------------------------

  const handleIframeLoad = () => setStatus('loaded')

  // ---------------------------------------------------------------------------
  // Zoom / rotate
  // ---------------------------------------------------------------------------

  const zoomIn  = useCallback(() => setZoom(z => Math.min(z + ZOOM_STEP, ZOOM_MAX)), [])
  const zoomOut = useCallback(() => setZoom(z => Math.max(z - ZOOM_STEP, ZOOM_MIN)), [])
  const rotate  = useCallback(() => setRotation(r => (r + 90) % 360), [])
  const fitReset = useCallback(() => { setZoom(100); setRotation(0) }, [])

  // ---------------------------------------------------------------------------
  // Multi-file navigation
  // ---------------------------------------------------------------------------

  const fileCount  = files?.length ?? 0
  const hasPrevFile = fileCount > 1 && currentFileIndex > 0
  const hasNextFile = fileCount > 1 && currentFileIndex < fileCount - 1

  const prevFile = () => onFileChange?.(currentFileIndex - 1)
  const nextFile = () => onFileChange?.(currentFileIndex + 1)

  // ---------------------------------------------------------------------------
  // Page navigation
  // ---------------------------------------------------------------------------

  const pageCount   = file.pageCount ?? 0
  const hasPrevPage = pageCount > 1 && currentPage > 1
  const hasNextPage = pageCount > 1 && currentPage < pageCount

  // ---------------------------------------------------------------------------
  // Download
  // ---------------------------------------------------------------------------

  const handleDownload = () => {
    if (onDownload) {
      onDownload(file)
    } else {
      const a = document.createElement('a')
      a.href     = file.url
      a.download = file.name
      a.click()
    }
  }

  // ---------------------------------------------------------------------------
  // Render content
  // ---------------------------------------------------------------------------

  const imgTransform = `scale(${zoom / 100}) rotate(${rotation}deg)`

  const renderPreview = () => {
    if (status === 'error') {
      return (
        <div className="file-viewer__empty">
          <FileX size={48} className="file-viewer__empty-icon" aria-hidden="true" />
          <span className="file-viewer__empty-title">No data found</span>
          <span className="file-viewer__empty-desc">Unable to load file data</span>
        </div>
      )
    }

    if (status === 'unsupported') {
      return (
        <div className="file-viewer__empty">
          <EyeOff size={48} className="file-viewer__empty-icon" aria-hidden="true" />
          <span className="file-viewer__empty-title">No preview available</span>
          <span className="file-viewer__empty-desc">This file has no supported preview</span>
          {allowDownload && (
            <button type="button" className="file-viewer__empty-action" onClick={handleDownload}>
              <Download size={14} aria-hidden="true" />
              Download file
            </button>
          )}
        </div>
      )
    }

    if (previewType === 'image') {
      return (
        <div className="file-viewer__img-wrap">
          {status === 'loading' && (
            <div className="file-viewer__spinner">
              <Spinner size="m" />
            </div>
          )}
          <img
            src={file.url}
            alt={file.name}
            className="file-viewer__img"
            data-loaded={status === 'loaded' || undefined}
            style={{ transform: imgTransform }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      )
    }

    if (previewType === 'pdf') {
      return (
        <div className="file-viewer__pdf-wrap">
          {status === 'loading' && (
            <div className="file-viewer__spinner">
              <Spinner size="m" />
            </div>
          )}
          <iframe
            src={file.url}
            title={file.name}
            className="file-viewer__iframe"
            data-loaded={status === 'loaded' || undefined}
            onLoad={handleIframeLoad}
          />
        </div>
      )
    }

    if (previewType === 'text') {
      if (status === 'loading') {
        return (
          <div className="file-viewer__spinner">
            <Spinner size="m" />
          </div>
        )
      }
      return (
        <div className="file-viewer__text-wrap">
          <div className="file-viewer__text-meta" aria-hidden="true">
            <FileText size={14} />
            {file.name}
          </div>
          <pre className="file-viewer__text">{textContent}</pre>
        </div>
      )
    }

    if (previewType === 'csv') {
      if (status === 'loading') {
        return (
          <div className="file-viewer__spinner">
            <Spinner size="m" />
          </div>
        )
      }
      if (!csvRows?.length) {
        return (
          <div className="file-viewer__empty">
            <FileSpreadsheet size={48} className="file-viewer__empty-icon" aria-hidden="true" />
            <span className="file-viewer__empty-title">No data found</span>
            <span className="file-viewer__empty-desc">The file appears to be empty</span>
          </div>
        )
      }

      const [headers, ...rows] = csvRows

      return (
        <div className="file-viewer__table-wrap">
          <table className="file-viewer__table">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="file-viewer__th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="file-viewer__tr">
                  {row.map((cell, ci) => (
                    <td key={ci} className="file-viewer__td">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return null
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  const isImage         = previewType === 'image'
  const showZoomControls   = isImage && allowZoom
  const showRotateControl  = isImage && allowRotate

  return (
    <div
      className={['file-viewer', className].filter(Boolean).join(' ')}
      role="region"
      aria-label={ariaLabel ?? `File preview: ${file.name}`}
      aria-labelledby={ariaLabel ? undefined : regionId}
    >
      {/* Live region */}
      <span
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="file-viewer__sr-only"
      >
        {announcement}
      </span>

      {/* ------------------------------------------------------------------ */}
      {/* Header                                                              */}
      {/* ------------------------------------------------------------------ */}
      {showHeader && (
        <div className="file-viewer__header">
          <span id={regionId} className="file-viewer__filename" title={file.name}>
            {file.name}
          </span>

          <div className="file-viewer__header-actions">
            {/* Zoom controls */}
            {showZoomControls && (
              <div className="file-viewer__zoom-controls">
                <IconButton
                  icon={<ZoomOut size={16} />}
                  aria-label="Zoom out"
                  variant="ghost"
                  color="neutral"
                  size="small"
                  disabled={zoom <= ZOOM_MIN}
                  onClick={zoomOut}
                />
                <span className="file-viewer__zoom-level" aria-live="polite" aria-atomic="true">
                  {zoom}%
                </span>
                <IconButton
                  icon={<ZoomIn size={16} />}
                  aria-label="Zoom in"
                  variant="ghost"
                  color="neutral"
                  size="small"
                  disabled={zoom >= ZOOM_MAX}
                  onClick={zoomIn}
                />
              </div>
            )}

            {/* Rotate */}
            {showRotateControl && (
              <IconButton
                icon={<RotateCw size={16} />}
                aria-label="Rotate 90°"
                variant="ghost"
                color="neutral"
                size="small"
                onClick={rotate}
              />
            )}

            {/* Expand */}
            {allowExpand && onExpand && (
              <IconButton
                icon={<Maximize2 size={16} />}
                aria-label="Expand"
                variant="ghost"
                color="neutral"
                size="small"
                onClick={() => onExpand(file)}
              />
            )}

            {/* Context menu */}
            <FlyoutMenu>
              <FlyoutMenuTrigger asChild>
                <IconButton
                  icon={<MoreHorizontal size={16} />}
                  aria-label="More options"
                  variant="ghost"
                  color="neutral"
                  size="small"
                />
              </FlyoutMenuTrigger>
              <FlyoutMenuContent align="end">
                {allowDownload && (
                  <FlyoutMenuItem onSelect={handleDownload}>
                    <span className="flyout-menu-item-icon" aria-hidden="true"><Download size={14} /></span>
                    Download
                  </FlyoutMenuItem>
                )}
                {isImage && (
                  <FlyoutMenuItem onSelect={fitReset}>
                    <span className="flyout-menu-item-icon" aria-hidden="true"><ScanSearch size={14} /></span>
                    Fit (reset zoom &amp; rotation)
                  </FlyoutMenuItem>
                )}
                <FlyoutMenuItem onSelect={() => { window.open(file.url, '_blank', 'noopener,noreferrer') }}>
                  <span className="flyout-menu-item-icon" aria-hidden="true"><ExternalLink size={14} /></span>
                  Open in new tab
                </FlyoutMenuItem>
              </FlyoutMenuContent>
            </FlyoutMenu>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Preview area                                                        */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="file-viewer__preview"
        style={{ maxHeight }}
      >
        {renderPreview()}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                              */}
      {/* ------------------------------------------------------------------ */}
      {showFooter && (
        <div className="file-viewer__footer">
          {/* File metadata */}
          <div className="file-viewer__meta">
            {file.size && (
              <span className="file-viewer__meta-item">{formatBytes(file.size)}</span>
            )}
            {file.uploadDate && (
              <span className="file-viewer__meta-item">{file.uploadDate}</span>
            )}
          </div>

          <div className="file-viewer__footer-nav">
            {/* Page navigation */}
            {pageCount > 1 && (
              <div className="file-viewer__page-nav" aria-label="Page navigation">
                <IconButton
                  icon={<ChevronLeft size={14} />}
                  aria-label="Previous page"
                  variant="ghost"
                  color="neutral"
                  size="small"
                  disabled={!hasPrevPage}
                  onClick={() => setCurrentPage(p => p - 1)}
                />
                <span className="file-viewer__nav-label" aria-live="polite">
                  {currentPage} / {pageCount}
                </span>
                <IconButton
                  icon={<ChevronRight size={14} />}
                  aria-label="Next page"
                  variant="ghost"
                  color="neutral"
                  size="small"
                  disabled={!hasNextPage}
                  onClick={() => setCurrentPage(p => p + 1)}
                />
              </div>
            )}

            {/* Multi-file navigation */}
            {fileCount > 1 && (
              <div className="file-viewer__file-nav" aria-label="File navigation">
                <IconButton
                  icon={<ChevronLeft size={14} />}
                  aria-label="Previous file"
                  variant="ghost"
                  color="neutral"
                  size="small"
                  disabled={!hasPrevFile}
                  onClick={prevFile}
                />
                <span className="file-viewer__nav-label" aria-live="polite">
                  {currentFileIndex + 1} / {fileCount} files
                </span>
                <IconButton
                  icon={<ChevronRight size={14} />}
                  aria-label="Next file"
                  variant="ghost"
                  color="neutral"
                  size="small"
                  disabled={!hasNextFile}
                  onClick={nextFile}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
