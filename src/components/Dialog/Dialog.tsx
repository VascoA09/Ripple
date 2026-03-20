import React from 'react'
import ReactDOM from 'react-dom'
import { X } from 'lucide-react'
import { Button } from '../Button'
import './Dialog.css'

// =============================================================================
//   TYPES
// =============================================================================

export type DialogSize = 'small' | 'medium'

// =============================================================================
//   CONTEXT
// =============================================================================

interface DialogContextValue {
  onClose: () => void
  titleId: string
}

const DialogContext = React.createContext<DialogContextValue>({
  onClose: () => {},
  titleId: '',
})

function useDialogContext() {
  return React.useContext(DialogContext)
}

// =============================================================================
//   FOCUS TRAP
// =============================================================================

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

function useFocusTrap(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  React.useEffect(() => {
    if (!active || !ref.current) return
    const el = ref.current

    // Move focus into the dialog
    const firstFocusable = el.querySelector<HTMLElement>(FOCUSABLE_SELECTORS)
    firstFocusable?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      const focusable = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))
      if (!focusable.length) return
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, ref])
}

// =============================================================================
//   DIALOG
// =============================================================================

let _idCounter = 0

export interface DialogProps {
  /** Controls dialog visibility. */
  open: boolean
  /** Called when the dialog should close (backdrop click, Escape, header X). */
  onClose: () => void
  /**
   * Dialog width.
   * - 'small'  — max 400px. Confirmations, short prompts.
   * - 'medium' — max 640px. Forms, detail panels, longer content. Default.
   */
  size?: DialogSize
  children: React.ReactNode
  className?: string
}

export function Dialog({ open, onClose, size = 'medium', children, className }: DialogProps) {
  const [titleId]    = React.useState(() => `dialog-title-${++_idCounter}`)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Two-phase visibility: `mounted` keeps DOM alive during exit animation.
  // `visible` drives the CSS open/closed state (triggers transitions).
  const [mounted, setMounted] = React.useState(open)
  const [visible, setVisible] = React.useState(open)

  React.useEffect(() => {
    if (open) {
      setMounted(true)
      // Double rAF ensures the element is painted in closed state first,
      // so the transition from closed → open actually plays.
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
      return () => cancelAnimationFrame(id)
    } else {
      setVisible(false)
      const id = window.setTimeout(() => setMounted(false), 200)
      return () => window.clearTimeout(id)
    }
  }, [open])

  // Escape key
  React.useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  // Scroll lock
  React.useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  useFocusTrap(containerRef, open)

  if (!mounted) return null

  return ReactDOM.createPortal(
    <DialogContext.Provider value={{ onClose, titleId }}>
      {/* Backdrop — decorative semi-transparent overlay */}
      <div
        className="dialog-backdrop"
        data-open={String(visible)}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Positioner — click-to-close, centres the dialog */}
      <div
        className="dialog-positioner"
        onClick={onClose}
      >
        <div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          data-size={size}
          data-open={String(visible)}
          className={['dialog', className].filter(Boolean).join(' ')}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>,
    document.body,
  )
}
Dialog.displayName = 'Dialog'

// =============================================================================
//   DIALOG HEADER
// =============================================================================

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon rendered to the left of the title.
   * Use a Lucide icon at 20px. Always decorative — meaning comes from the title text.
   */
  icon?: React.ReactNode
  children: React.ReactNode
}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  function DialogHeader({ icon, children, className, ...rest }, ref) {
    const { onClose, titleId } = useDialogContext()

    return (
      <div
        ref={ref}
        className={['dialog__header', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <div className="dialog__header-start">
          {icon && (
            <span className="dialog__header-icon" aria-hidden="true">{icon}</span>
          )}
          <h2 id={titleId} className="dialog__title">
            {children}
          </h2>
        </div>

        <Button
          variant="ghost"
          size="small"
          color="neutral"
          iconStart={<X aria-hidden="true" />}
          aria-label="Close dialog"
          onClick={onClose}
          className="dialog__close"
        />
      </div>
    )
  },
)
DialogHeader.displayName = 'DialogHeader'

// =============================================================================
//   DIALOG BODY
// =============================================================================

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  function DialogBody({ children, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['dialog__body', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    )
  },
)
DialogBody.displayName = 'DialogBody'

// =============================================================================
//   DIALOG FOOTER
// =============================================================================

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  function DialogFooter({ children, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['dialog__footer', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    )
  },
)
DialogFooter.displayName = 'DialogFooter'
