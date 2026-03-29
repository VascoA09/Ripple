import React, { useId, useRef, useState, useEffect, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { X, ChevronDown, MoreHorizontal } from 'lucide-react'
import { IconButton } from '../IconButton'
import './Drawer.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DrawerSide = 'left' | 'right'
export type DrawerSize = 'small' | 'medium' | 'large' | 'full'

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface DrawerContextValue {
  onClose: () => void
  titleId: string
}

const DrawerContext = createContext<DrawerContextValue>({ onClose: () => {}, titleId: '' })
const useDrawerContext = () => useContext(DrawerContext)

// ---------------------------------------------------------------------------
// Focus trap (same implementation as Dialog)
// ---------------------------------------------------------------------------

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

function useFocusTrap(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return
    const el = ref.current
    const firstFocusable = el.querySelector<HTMLElement>(FOCUSABLE)
    firstFocusable?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      const focusable = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (!focusable.length) return
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, ref])
}

// ---------------------------------------------------------------------------
// Drawer
// ---------------------------------------------------------------------------

export interface DrawerProps {
  open: boolean
  onClose: () => void
  side?: DrawerSide
  size?: DrawerSize
  /** Clicking the overlay closes the drawer. Defaults to true. */
  closeOnOverlayClick?: boolean
  /**
   * Persistent drawers have no overlay, no focus trap, and no scroll lock.
   * They sit alongside page content and remain visible until dismissed.
   * Use for navigation panels or detail panels in desktop split-pane layouts.
   */
  persistent?: boolean
  /** Overrides the aria-label derived from the title */
  'aria-label'?: string
  children: React.ReactNode
  className?: string
}

export function Drawer({
  open,
  onClose,
  side = 'right',
  size = 'medium',
  closeOnOverlayClick = true,
  persistent = false,
  'aria-label': ariaLabel,
  children,
  className,
}: DrawerProps) {
  const titleId    = useId()
  const panelRef   = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<Element | null>(null)

  // Two-phase: mounted keeps DOM alive during exit animation
  const [mounted, setMounted] = useState(open)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement
      setMounted(true)
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      )
      return () => cancelAnimationFrame(id)
    } else {
      setVisible(false)
      const id = window.setTimeout(() => setMounted(false), 260)
      return () => window.clearTimeout(id)
    }
  }, [open])

  // Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        ;(triggerRef.current as HTMLElement | null)?.focus()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Scroll lock — only for modal (non-persistent) drawers
  useEffect(() => {
    if (!open || persistent) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open, persistent])

  // Focus trap — only for modal drawers
  useFocusTrap(panelRef, open && !persistent)

  if (!mounted) return null

  const panel = (
    <DrawerContext.Provider value={{ onClose, titleId }}>
      {/* Overlay — modal only */}
      {!persistent && (
        <div
          className="drawer-overlay"
          data-open={String(visible)}
          aria-hidden="true"
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal={!persistent}
        aria-labelledby={ariaLabel ? undefined : titleId}
        aria-label={ariaLabel}
        className={['drawer', className].filter(Boolean).join(' ')}
        data-side={side}
        data-size={size}
        data-open={String(visible)}
        data-persistent={persistent || undefined}
      >
        {children}
      </div>
    </DrawerContext.Provider>
  )

  // Persistent drawers render inline (no portal) so they participate in
  // normal document flow and don't sit above page content.
  if (persistent) return panel

  return ReactDOM.createPortal(panel, document.body)
}

// ---------------------------------------------------------------------------
// DrawerHeader
// ---------------------------------------------------------------------------

export interface DrawerHeaderProps {
  title: string
  description?: string
  /** Up to two action buttons rendered before the close button */
  actions?: React.ReactNode
  className?: string
}

export function DrawerHeader({ title, description, actions, className }: DrawerHeaderProps) {
  const { onClose, titleId } = useDrawerContext()

  return (
    <div className={['drawer__header', className].filter(Boolean).join(' ')}>
      <div className="drawer__header-main">
        <h2 id={titleId} className="drawer__title">{title}</h2>
        {description && (
          <p className="drawer__description">{description}</p>
        )}
      </div>

      <div className="drawer__header-actions">
        {actions}
        <IconButton
          icon={<X size={18} aria-hidden="true" />}
          aria-label="Close drawer"
          variant="ghost"
          color="neutral"
          size="small"
          onClick={onClose}
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerTools
// ---------------------------------------------------------------------------

export interface DrawerToolsProps {
  children: React.ReactNode
  className?: string
}

export function DrawerTools({ children, className }: DrawerToolsProps) {
  return (
    <div className={['drawer__tools', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerContent
// ---------------------------------------------------------------------------

export interface DrawerContentProps {
  children: React.ReactNode
  className?: string
}

export function DrawerContent({ children, className }: DrawerContentProps) {
  return (
    <div className={['drawer__content', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerSection
// ---------------------------------------------------------------------------

export interface DrawerSectionProps {
  /** Uppercase section label */
  title?: string
  /** Numeric count shown in a Counter badge beside the title */
  count?: number
  /** Link rendered at the trailing end of the section title row */
  link?: { label: string; onClick: () => void }
  /** Renders a 1px separator above the section */
  divider?: boolean
  children: React.ReactNode
  className?: string
}

export function DrawerSection({ title, count, link, divider, children, className }: DrawerSectionProps) {
  const hasHeader = title || count !== undefined || link

  return (
    <div
      className={['drawer__section', className].filter(Boolean).join(' ')}
      data-divider={divider || undefined}
    >
      {hasHeader && (
        <div className="drawer__section-header">
          <div className="drawer__section-header-start">
            {title && <span className="drawer__section-title">{title}</span>}
            {count !== undefined && (
              <span className="drawer__section-count">{count}</span>
            )}
          </div>
          {link && (
            <button
              type="button"
              className="drawer__section-link"
              onClick={link.onClick}
            >
              {link.label}
            </button>
          )}
        </div>
      )}
      <div className="drawer__section-body">{children}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerMenuItem — flat single-level navigation item
// ---------------------------------------------------------------------------

export interface DrawerMenuItemProps {
  label: string
  icon?: React.ReactNode
  /** Short identifier code, right-aligned */
  code?: string
  /** Marks this item as the current page/view */
  active?: boolean
  disabled?: boolean
  href?: string
  onClick?: () => void
  /** Content rendered in the trailing context button (visible on hover) */
  contextMenu?: React.ReactNode
  className?: string
}

export function DrawerMenuItem({
  label,
  icon,
  code,
  active,
  disabled,
  href,
  onClick,
  contextMenu,
  className,
}: DrawerMenuItemProps) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      {...(href ? { href } : { type: 'button' as const })}
      className={['drawer__menu-item', className].filter(Boolean).join(' ')}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      data-active={active || undefined}
      data-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
    >
      {icon && (
        <span className="drawer__menu-item-icon" aria-hidden="true">{icon}</span>
      )}
      <span className="drawer__menu-item-label">{label}</span>
      {code && <span className="drawer__menu-item-code">{code}</span>}

      {contextMenu && (
        <span
          className="drawer__menu-item-context"
          onClick={e => e.stopPropagation()}
        >
          {contextMenu}
        </span>
      )}
    </Tag>
  )
}

// ---------------------------------------------------------------------------
// DrawerMultiLevelItem — expandable nav item with nested children
// ---------------------------------------------------------------------------

export interface DrawerMultiLevelItemProps {
  label: string
  icon?: React.ReactNode
  /** Marks this item (not its children) as active */
  active?: boolean
  disabled?: boolean
  href?: string
  onClick?: () => void
  /** Controlled expanded state */
  expanded?: boolean
  defaultExpanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  children: React.ReactNode
  className?: string
}

export function DrawerMultiLevelItem({
  label,
  icon,
  active,
  disabled,
  href,
  onClick,
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
  children,
  className,
}: DrawerMultiLevelItemProps) {
  const isControlled = expandedProp !== undefined
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const expanded = isControlled ? expandedProp : internalExpanded

  const handleToggle = () => {
    if (disabled) return
    const next = !expanded
    if (!isControlled) setInternalExpanded(next)
    onExpandedChange?.(next)
    onClick?.()
  }

  const Tag = href ? 'a' : 'button'

  return (
    <div
      className={['drawer__multi-item', className].filter(Boolean).join(' ')}
      data-expanded={expanded || undefined}
    >
      <Tag
        {...(href ? { href } : { type: 'button' as const })}
        className="drawer__multi-item-trigger"
        aria-expanded={expanded}
        aria-haspopup="true"
        aria-current={active ? 'page' : undefined}
        data-active={active || undefined}
        data-disabled={disabled || undefined}
        aria-disabled={disabled || undefined}
        onClick={handleToggle}
      >
        {icon && (
          <span className="drawer__menu-item-icon" aria-hidden="true">{icon}</span>
        )}
        <span className="drawer__menu-item-label">{label}</span>
        <ChevronDown
          size={14}
          className="drawer__multi-item-chevron"
          aria-hidden="true"
        />
      </Tag>

      {expanded && (
        <div className="drawer__multi-item-children">
          {children}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerListItem — list-style row for messages, contacts, search results
// ---------------------------------------------------------------------------

export interface DrawerListItemProps {
  header: string
  secondary?: string
  message?: string
  timestamp?: string
  unread?: boolean
  /** Avatar, icon, or any element before the content */
  before?: React.ReactNode
  /** Badge, counter, or any element after the content */
  after?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export function DrawerListItem({
  header,
  secondary,
  message,
  timestamp,
  unread,
  before,
  after,
  onClick,
  disabled,
  className,
}: DrawerListItemProps) {
  return (
    <button
      type="button"
      className={['drawer__list-item', className].filter(Boolean).join(' ')}
      data-unread={unread || undefined}
      data-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
    >
      {unread && (
        <span className="drawer__unread-dot" aria-label="Unread" />
      )}

      {before && (
        <span className="drawer__list-item-before" aria-hidden="true">{before}</span>
      )}

      <span className="drawer__list-item-main">
        <span className="drawer__list-item-top">
          <span className="drawer__list-item-header">{header}</span>
          {timestamp && (
            <span className="drawer__list-item-timestamp">{timestamp}</span>
          )}
        </span>
        {secondary && (
          <span className="drawer__list-item-secondary">{secondary}</span>
        )}
        {message && (
          <span className="drawer__list-item-message">{message}</span>
        )}
      </span>

      {after && (
        <span className="drawer__list-item-after">{after}</span>
      )}
    </button>
  )
}

// ---------------------------------------------------------------------------
// DrawerNotificationItem — notification row with avatar, title, message, action
// ---------------------------------------------------------------------------

export interface DrawerNotificationItemProps {
  title: string
  message?: string
  timestamp?: string
  unread?: boolean
  avatar?: React.ReactNode
  action?: React.ReactNode
  /** Hides the bottom divider on the last item */
  last?: boolean
  onClick?: () => void
  className?: string
}

export function DrawerNotificationItem({
  title,
  message,
  timestamp,
  unread,
  avatar,
  action,
  last,
  onClick,
  className,
}: DrawerNotificationItemProps) {
  return (
    <div
      className={['drawer__notification-item', className].filter(Boolean).join(' ')}
      data-unread={unread || undefined}
      data-last={last || undefined}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } } : undefined}
    >
      {unread && <span className="drawer__unread-dot" aria-label="Unread" />}

      {avatar && (
        <span className="drawer__notification-avatar" aria-hidden="true">{avatar}</span>
      )}

      <span className="drawer__notification-body">
        <span className="drawer__notification-top">
          <span className="drawer__notification-title">{title}</span>
          {timestamp && (
            <span className="drawer__list-item-timestamp">{timestamp}</span>
          )}
        </span>
        {message && (
          <span className="drawer__list-item-message">{message}</span>
        )}
        {action && (
          <span className="drawer__notification-action">{action}</span>
        )}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerFooter
// ---------------------------------------------------------------------------

export interface DrawerFooterProps {
  children: React.ReactNode
  className?: string
}

export function DrawerFooter({ children, className }: DrawerFooterProps) {
  return (
    <div className={['drawer__footer', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// DrawerContextButton — convenience wrapper for the MoreHorizontal context button
// ---------------------------------------------------------------------------

export interface DrawerContextButtonProps {
  onClick: (e: React.MouseEvent) => void
  'aria-label'?: string
}

export function DrawerContextButton({
  onClick,
  'aria-label': ariaLabel = 'More options',
}: DrawerContextButtonProps) {
  return (
    <button
      type="button"
      className="drawer__context-btn"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <MoreHorizontal size={14} aria-hidden="true" />
    </button>
  )
}
