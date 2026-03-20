import React, { useId, useRef, useState, useCallback } from 'react'
import {
  UploadCloud, File as FileIcon, FileText, Image as ImageIcon,
  Archive, X, Check, AlertCircle, Loader2, Upload,
} from 'lucide-react'
import './FileUploader.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FileItemStatus = 'added' | 'uploading' | 'uploaded' | 'error'
export type FileUploaderPosition = 'bottom' | 'right'

export interface FileItem {
  id:            string
  file:          File
  status:        FileItemStatus
  errorMessage?: string
}

export interface FileUploaderProps {
  label?:             string
  description?:       string
  required?:          boolean
  hint?:              string
  'aria-label'?:      string
  /** Position of the file list relative to the drop zone. Default: 'bottom'. */
  position?:          FileUploaderPosition
  /** Shows an Upload button; files are staged until clicked. */
  showUploadButton?:  boolean
  /** Accepted file types, e.g. ".pdf,.doc" or "image/*". Passed to input[accept]. */
  accept?:            string
  /** Max file size in bytes. */
  maxSize?:           number
  /** Human-readable format hint displayed in the drop zone, e.g. "PDF, DOC". */
  formatText?:        string
  disabled?:          boolean
  multiple?:          boolean
  /** Called when files pass validation and are added to the list. */
  onFilesAdded?:      (files: File[]) => void
  /** Async upload handler. Called when user clicks Upload. */
  onUpload?:          (files: File[]) => Promise<void>
  /** Called when a file is removed from the list. */
  onFileRemove?:      (fileId: string) => void
  id?:                string
  className?:         string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function uid(): string {
  return Math.random().toString(36).slice(2, 9)
}

function formatBytes(bytes: number): string {
  if (bytes < 1024)             return `${bytes} B`
  if (bytes < 1024 * 1024)      return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/** Validates a file against the accept string and maxSize. Returns error message or null. */
function validateFile(file: File, accept?: string, maxSize?: number): string | null {
  if (accept) {
    const patterns = accept.split(',').map(p => p.trim().toLowerCase())
    const ext      = '.' + file.name.split('.').pop()?.toLowerCase()
    const mime     = file.type.toLowerCase()
    const ok       = patterns.some(p => {
      if (p.endsWith('/*')) return mime.startsWith(p.slice(0, -1))
      if (p.startsWith('.')) return ext === p
      return mime === p
    })
    if (!ok) {
      const readable = patterns
        .filter(p => p.startsWith('.'))
        .map(p => p.slice(1).toUpperCase())
        .join(', ')
      return readable
        ? `Invalid file type. Accepted: ${readable}`
        : 'Invalid file type'
    }
  }
  if (maxSize && file.size > maxSize) {
    return `File exceeds ${formatBytes(maxSize)} limit`
  }
  return null
}

/** Returns a file-type icon based on the MIME type or extension. */
function FileTypeIcon({ file, size = 16 }: { file: File; size?: number }) {
  const mime = file.type.toLowerCase()
  const ext  = file.name.split('.').pop()?.toLowerCase() ?? ''

  if (mime.startsWith('image/'))                          return <ImageIcon size={size} />
  if (mime === 'application/pdf' || ext === 'pdf')        return <FileText size={size} />
  if (ext === 'doc'  || ext === 'docx'  ||
      ext === 'txt'  || ext === 'rtf')                    return <FileText size={size} />
  if (ext === 'zip'  || ext === 'rar'  ||
      ext === 'tar'  || ext === 'gz')                     return <Archive size={size} />
  return <FileIcon size={size} />
}

// ---------------------------------------------------------------------------
// FileUploader
// ---------------------------------------------------------------------------

export function FileUploader({
  label,
  description,
  required,
  hint,
  'aria-label': ariaLabel,
  position       = 'bottom',
  showUploadButton = false,
  accept,
  maxSize,
  formatText,
  disabled,
  multiple       = true,
  onFilesAdded,
  onUpload,
  onFileRemove,
  id:            idProp,
  className,
}: FileUploaderProps) {
  const baseId       = useId()
  const id           = idProp ?? baseId
  const inputId      = `${id}-input`
  const labelId      = label ? `${id}-label` : undefined
  const liveId       = `${id}-live`

  const inputRef   = useRef<HTMLInputElement>(null)
  const [files, setFiles]         = useState<FileItem[]>([])
  const [dragging, setDragging]   = useState(false)
  const [announcement, setAnnounce] = useState('')

  // ---------------------------------------------------------------------------
  // Add files
  // ---------------------------------------------------------------------------

  const addFiles = useCallback((incoming: FileList | File[]) => {
    if (disabled) return
    const list  = Array.from(incoming)
    const items: FileItem[] = list.map(file => {
      const error = validateFile(file, accept, maxSize)
      return { id: uid(), file, status: error ? 'error' : 'added', errorMessage: error ?? undefined }
    })

    setFiles(prev => {
      const next = multiple ? [...prev, ...items] : items
      return next
    })

    const valid = items.filter(i => i.status === 'added').map(i => i.file)
    if (valid.length > 0) onFilesAdded?.(valid)

    // Live region announcement
    const added   = items.filter(i => i.status === 'added').length
    const errored = items.filter(i => i.status === 'error').length
    const parts: string[] = []
    if (added)   parts.push(`${added} file${added > 1 ? 's' : ''} added`)
    if (errored) parts.push(`${errored} file${errored > 1 ? 's' : ''} failed validation`)
    setAnnounce(parts.join('. '))

    // Reset input so same file can be re-selected
    if (inputRef.current) inputRef.current.value = ''
  }, [disabled, accept, maxSize, multiple, onFilesAdded])

  // ---------------------------------------------------------------------------
  // Remove file
  // ---------------------------------------------------------------------------

  const removeFile = useCallback((fileId: string) => {
    setFiles(prev => {
      const item = prev.find(f => f.id === fileId)
      if (item) setAnnounce(`${item.file.name} removed`)
      return prev.filter(f => f.id !== fileId)
    })
    onFileRemove?.(fileId)
  }, [onFileRemove])

  // ---------------------------------------------------------------------------
  // Upload
  // ---------------------------------------------------------------------------

  const handleUpload = useCallback(async () => {
    if (!onUpload) return
    const toUpload = files.filter(f => f.status === 'added' || f.status === 'error')
    if (!toUpload.length) return

    // Transition to uploading
    setFiles(prev => prev.map(f =>
      toUpload.find(u => u.id === f.id) ? { ...f, status: 'uploading', errorMessage: undefined } : f
    ))
    setAnnounce('Uploading files…')

    try {
      await onUpload(toUpload.map(u => u.file))
      setFiles(prev => prev.map(f =>
        toUpload.find(u => u.id === f.id) ? { ...f, status: 'uploaded' } : f
      ))
      setAnnounce(`${toUpload.length} file${toUpload.length > 1 ? 's' : ''} uploaded successfully`)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Upload failed'
      setFiles(prev => prev.map(f =>
        toUpload.find(u => u.id === f.id) ? { ...f, status: 'error', errorMessage: msg } : f
      ))
      setAnnounce(`Upload failed: ${msg}`)
    }
  }, [files, onUpload])

  // ---------------------------------------------------------------------------
  // Drag handlers
  // ---------------------------------------------------------------------------

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    // Only reset when leaving the drop zone entirely (not entering a child)
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragging(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    if (disabled) return
    addFiles(e.dataTransfer.files)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) addFiles(e.target.files)
  }

  const openFilePicker = () => {
    if (!disabled) inputRef.current?.click()
  }

  // ---------------------------------------------------------------------------
  // Derived state
  // ---------------------------------------------------------------------------

  const hasFiles         = files.length > 0
  const hasUploadable    = files.some(f => f.status === 'added')
  const isUploading      = files.some(f => f.status === 'uploading')

  // Drop zone hint line: "PDF, DOC · Max 10 MB"
  const dropHint = [
    formatText,
    maxSize ? `Max ${formatBytes(maxSize)}` : null,
  ].filter(Boolean).join(' · ')

  return (
    <div
      className={['file-uploader', className].filter(Boolean).join(' ')}
      data-position={position !== 'bottom' ? position : undefined}
      data-disabled={disabled || undefined}
    >
      {/* Screen reader live region */}
      <span
        id={liveId}
        role="status"
        aria-live="polite"
        aria-atomic="false"
        className="file-uploader__sr-only"
      >
        {announcement}
      </span>

      {/* Label row */}
      {label && (
        <span id={labelId} className="file-uploader__label">
          {label}
          {required && <span className="file-uploader__required" aria-hidden="true"> *</span>}
        </span>
      )}
      {description && (
        <span className="file-uploader__description">{description}</span>
      )}

      {/* Main layout: drop zone + file list */}
      <div className="file-uploader__body">
        {/* Drop zone */}
        <div
          className="file-uploader__zone"
          data-dragging={dragging || undefined}
          aria-labelledby={labelId}
          aria-label={!label ? (ariaLabel ?? 'File upload area') : undefined}
          aria-disabled={disabled || undefined}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFilePicker}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFilePicker() } }}
        >
          <UploadCloud size={32} className="file-uploader__zone-icon" aria-hidden="true" />

          <span className="file-uploader__zone-text">
            Drag &amp; drop files here
          </span>

          <span className="file-uploader__zone-browse">
            or{' '}
            <span className="file-uploader__browse-link">
              browse files
            </span>
          </span>

          {dropHint && (
            <span className="file-uploader__zone-hint">{dropHint}</span>
          )}
        </div>

        {/* File list */}
        {hasFiles && (
          <ul className="file-uploader__list" aria-label="Selected files">
            {files.map(item => (
              <li
                key={item.id}
                className="file-uploader__item"
                data-status={item.status}
              >
                {/* File type icon */}
                <span className="file-uploader__item-icon" aria-hidden="true">
                  <FileTypeIcon file={item.file} size={16} />
                </span>

                {/* Name + size + error */}
                <span className="file-uploader__item-info">
                  <span className="file-uploader__item-name" title={item.file.name}>
                    {item.file.name}
                  </span>
                  <span className="file-uploader__item-meta">
                    {formatBytes(item.file.size)}
                    {item.errorMessage && (
                      <span className="file-uploader__item-error">
                        {' · '}{item.errorMessage}
                      </span>
                    )}
                  </span>
                </span>

                {/* Status icon */}
                <span className="file-uploader__item-status" aria-hidden="true">
                  {item.status === 'uploading' && (
                    <Loader2 size={16} className="file-uploader__spin" />
                  )}
                  {item.status === 'uploaded' && (
                    <Check size={16} />
                  )}
                  {item.status === 'error' && (
                    <AlertCircle size={16} />
                  )}
                </span>

                {/* Remove button */}
                <button
                  type="button"
                  className="file-uploader__item-remove"
                  aria-label={`Remove ${item.file.name}`}
                  disabled={item.status === 'uploading'}
                  onClick={() => removeFile(item.id)}
                >
                  <X size={14} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Upload button */}
      {showUploadButton && onUpload && hasFiles && (
        <div className="file-uploader__actions">
          <button
            type="button"
            className="file-uploader__upload-btn"
            disabled={!hasUploadable || isUploading || disabled}
            onClick={handleUpload}
          >
            <Upload size={14} aria-hidden="true" />
            {isUploading ? 'Uploading…' : 'Upload files'}
          </button>
        </div>
      )}

      {/* Hint */}
      {hint && (
        <span className="file-uploader__hint">{hint}</span>
      )}

      {/* Hidden file input */}
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        className="file-uploader__input"
        accept={accept}
        multiple={multiple}
        aria-hidden="true"
        tabIndex={-1}
        onChange={handleInputChange}
      />
    </div>
  )
}
