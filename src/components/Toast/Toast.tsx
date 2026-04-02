import React, {
  createContext, useContext, useState, useEffect, useRef, useCallback,
} from 'react'
import { createPortal } from 'react-dom'
import { Info, CheckCircle, CircleAlert, XCircle, X } from 'lucide-react'
import './Toast.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ToastVariant  = 'neutral' | 'positive' | 'notice' | 'negative'
export type ToastPosition =
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'

export interface ToastConfig {
  variant?:         ToastVariant
  title:            string
  description?:     string
  timestamp?:       string
  /** Custom icon component (Neutral variant only — ignored for other variants). */
  icon?:            React.ElementType
  action?:          { label: string; onClick: () => void }
  showCloseButton?: boolean
  /**
   * Auto-dismiss delay in ms. 0 disables auto-dismiss.
   * Defaults: neutral/positive → 6000, notice/negative → 0.
   */
  duration?:        number
  /** Show a progress bar indicating time remaining before auto-dismiss. */
  showProgress?:    boolean
}

interface InternalToast {
  id:              string
  variant:         ToastVariant
  title:           string
  description?:    string
  timestamp?:      string
  icon?:           React.ElementType
  action?:         { label: string; onClick: () => void }
  showCloseButton: boolean
  duration:        number
  showProgress:    boolean
  exiting:         boolean
}

export interface ToastContextValue {
  /** Add a toast. Returns the generated id. */
  addToast:        (config: ToastConfig) => string
  /** Trigger the exit animation and remove a toast by id. */
  removeToast:     (id: string) => void
  /** Trigger exit animation on all visible toasts. */
  removeAllToasts: () => void
  /** Update the container position at runtime. */
  setPosition:     React.Dispatch<React.SetStateAction<ToastPosition>>
}

export interface ToastProviderProps {
  children:   React.ReactNode
  /** Where toasts appear on screen. Default: 'top-right'. */
  position?:  ToastPosition
  /** Maximum toasts shown simultaneously. Oldest removed when exceeded. Default: 5. */
  maxToasts?: number
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const DEFAULT_DURATION: Record<ToastVariant, number> = {
  neutral:  6000,
  positive: 6000,
  notice:   0,
  negative: 0,
}

const VARIANT_ICON: Record<ToastVariant, React.ElementType> = {
  neutral:  Info,
  positive: CheckCircle,
  notice:   CircleAlert,
  negative: XCircle,
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ToastContext = createContext<ToastContextValue | null>(null)

// ---------------------------------------------------------------------------
// ToastItem
// ---------------------------------------------------------------------------

interface ToastItemProps {
  toast:          InternalToast
  onExitStart:    (id: string) => void
  onExitComplete: (id: string) => void
}

function ToastItem({ toast, onExitStart, onExitComplete }: ToastItemProps) {
  const exitedRef = useRef(false)

  // Auto-dismiss timer
  useEffect(() => {
    if (!toast.duration || toast.exiting) return
    const timer = setTimeout(() => onExitStart(toast.id), toast.duration)
    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, toast.exiting, onExitStart])

  // Exit completion — timeout fallback covers reduced-motion (no animationend)
  useEffect(() => {
    if (!toast.exiting) return
    const timer = setTimeout(() => {
      if (!exitedRef.current) {
        exitedRef.current = true
        onExitComplete(toast.id)
      }
    }, 320)
    return () => clearTimeout(timer)
  }, [toast.exiting, toast.id, onExitComplete])

  function handleAnimationEnd(e: React.AnimationEvent<HTMLDivElement>) {
    if (e.animationName === 'toast-exit' && !exitedRef.current) {
      exitedRef.current = true
      onExitComplete(toast.id)
    }
  }

  const isAlert       = toast.variant === 'notice' || toast.variant === 'negative'
  const IconComponent = toast.variant === 'neutral' && toast.icon
    ? toast.icon
    : VARIANT_ICON[toast.variant]

  const hasFooter = !!(toast.timestamp || toast.action)

  return (
    <div
      className="toast"
      data-variant={toast.variant}
      data-exiting={toast.exiting || undefined}
      role={isAlert ? 'alert' : 'status'}
      aria-live={isAlert ? 'assertive' : 'polite'}
      aria-atomic="true"
      style={
        toast.showProgress && toast.duration > 0
          ? ({ '--_duration': `${toast.duration}ms` } as React.CSSProperties)
          : undefined
      }
      onAnimationEnd={handleAnimationEnd}
    >
      {/* Top row: icon + content + close button */}
      <div className="toast__row">
        <span className="toast__icon" aria-hidden="true">
          <IconComponent size={24} />
        </span>

        <div className="toast__body">
          <p className="toast__title">{toast.title}</p>

          {toast.description && (
            <p className="toast__description">{toast.description}</p>
          )}
        </div>

        {toast.showCloseButton && (
          <button
            type="button"
            className="toast__close"
            aria-label="Dismiss notification"
            onClick={() => onExitStart(toast.id)}
          >
            <X size={14} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Footer: timestamp + action — offset to align with body text, past icon */}
      {hasFooter && (
        <div className="toast__footer">
          {toast.timestamp && (
            <p className="toast__timestamp">{toast.timestamp}</p>
          )}

          {toast.action && (
            <button
              type="button"
              className="toast__action"
              onClick={() => {
                toast.action!.onClick()
                onExitStart(toast.id)
              }}
            >
              {toast.action.label}
            </button>
          )}
        </div>
      )}

      {/* Progress bar — only while not exiting (timer still running) */}
      {toast.showProgress && toast.duration > 0 && !toast.exiting && (
        <div className="toast__progress" aria-hidden="true">
          <div className="toast__progress-bar" />
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ToastProvider
// ---------------------------------------------------------------------------

export function ToastProvider({
  children,
  position: initialPosition = 'top-right',
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts]     = useState<InternalToast[]>([])
  const [position, setPosition] = useState<ToastPosition>(initialPosition)

  const addToast = useCallback((config: ToastConfig): string => {
    const variant         = config.variant ?? 'neutral'
    const duration        = config.duration !== undefined ? config.duration : DEFAULT_DURATION[variant]
    const showCloseButton = config.showCloseButton !== undefined
      ? config.showCloseButton
      : variant === 'notice' || variant === 'negative'

    const toast: InternalToast = {
      id:              crypto.randomUUID(),
      variant,
      title:           config.title,
      description:     config.description,
      timestamp:       config.timestamp,
      icon:            config.icon,
      action:          config.action,
      showCloseButton,
      duration,
      showProgress:    config.showProgress ?? false,
      exiting:         false,
    }

    setToasts(prev => {
      const next = [toast, ...prev]
      return next.length > maxToasts ? next.slice(0, maxToasts) : next
    })

    return toast.id
  }, [maxToasts])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t))
  }, [])

  const removeAllToasts = useCallback(() => {
    setToasts(prev => prev.map(t => ({ ...t, exiting: true })))
  }, [])

  const handleExitComplete = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast, removeAllToasts, setPosition }}>
      {children}
      {createPortal(
        <div className="toast-container" data-position={position} aria-label="Notifications">
          {toasts.map(toast => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onExitStart={removeToast}
              onExitComplete={handleExitComplete}
            />
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// useToast
// ---------------------------------------------------------------------------

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}
