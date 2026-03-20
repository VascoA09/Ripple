import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '../Button'
import './Panel.css'

// =============================================================================
//   CONTEXT
// =============================================================================

interface PanelContextValue {
  collapsible: boolean
  expanded:    boolean
  toggle:      () => void
}

const PanelContext = React.createContext<PanelContextValue>({
  collapsible: false,
  expanded:    true,
  toggle:      () => {},
})

function usePanelContext() {
  return React.useContext(PanelContext)
}

// =============================================================================
//   PANEL
// =============================================================================

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable collapse/expand behaviour. */
  collapsible?: boolean
  /** Initial expanded state. Uncontrolled — Panel manages its own state. */
  defaultExpanded?: boolean
  /**
   * Notification callback fired whenever expansion state changes.
   * Panel manages its own state; this is for external sync only.
   */
  onExpandedChange?: (expanded: boolean) => void
  children: React.ReactNode
}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  function Panel(
    {
      collapsible      = false,
      defaultExpanded  = true,
      onExpandedChange,
      children,
      className,
      ...rest
    },
    ref,
  ) {
    const [expanded, setExpanded] = React.useState(defaultExpanded)

    const onExpandedChangeRef = React.useRef(onExpandedChange)
    onExpandedChangeRef.current = onExpandedChange

    const toggle = React.useCallback(() => {
      setExpanded(prev => {
        const next = !prev
        onExpandedChangeRef.current?.(next)
        return next
      })
    }, [])

    const childArray = React.Children.toArray(children)
    const headerChild = childArray.find(
      c => React.isValidElement(c) && (c.type as React.FC).displayName === 'PanelHeader',
    )
    const bodyChildren = childArray.filter(
      c => !React.isValidElement(c) || (c.type as React.FC).displayName !== 'PanelHeader',
    )

    return (
      <PanelContext.Provider value={{ collapsible, expanded, toggle }}>
        <div
          ref={ref}
          className={['panel', className].filter(Boolean).join(' ')}
          data-expanded={collapsible ? String(expanded) : undefined}
          {...rest}
        >
          {headerChild}

          {collapsible ? (
            <div
              className="panel__collapsible"
              data-collapsed={!expanded ? '' : undefined}
              aria-hidden={!expanded ? true : undefined}
            >
              <div className="panel__collapsible-inner">
                {bodyChildren}
              </div>
            </div>
          ) : (
            bodyChildren
          )}
        </div>
      </PanelContext.Provider>
    )
  },
)
Panel.displayName = 'Panel'

// =============================================================================
//   PANEL HEADER
// =============================================================================

export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon rendered to the left of the title.
   * Use a Lucide icon at 20px. Always decorative — do not put meaning here
   * that isn't also communicated by the title text.
   */
  icon?: React.ReactNode
  /** Supporting text below the title. */
  subtitle?: React.ReactNode
  /**
   * Right-side slot for action buttons, badges, counters, or tags.
   * Hidden when the panel is collapsible — replaced by the chevron button.
   */
  actions?: React.ReactNode
  /** Title text. */
  children: React.ReactNode
}

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  function PanelHeader({ icon, subtitle, actions, children, className, ...rest }, ref) {
    const { collapsible, expanded, toggle } = usePanelContext()

    return (
      <div
        ref={ref}
        className={['panel__header', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <div className="panel__header-title">
          <div className="panel__header-title-row">
            {icon && (
              <span className="panel__header-icon" aria-hidden="true">{icon}</span>
            )}
            <strong className="panel__title typography-heading-m">{children}</strong>
          </div>
          {subtitle && <p className="panel__subtitle">{subtitle}</p>}
        </div>

        {collapsible ? (
          <Button
            variant="ghost"
            size="small"
            color="neutral"
            iconStart={
              <ChevronDown
                className="panel__collapse-icon"
                data-expanded={expanded ? 'true' : 'false'}
                aria-hidden="true"
              />
            }
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse panel' : 'Expand panel'}
            onClick={toggle}
            className="panel__collapse-btn"
          />
        ) : (
          actions && (
            <div className="panel__header-end">{actions}</div>
          )
        )}
      </div>
    )
  },
)
PanelHeader.displayName = 'PanelHeader'

// =============================================================================
//   PANEL BODY
// =============================================================================

export interface PanelBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override default padding (var(--spacing-150) = 24px). */
  padding?: string
  children: React.ReactNode
}

export const PanelBody = React.forwardRef<HTMLDivElement, PanelBodyProps>(
  function PanelBody({ padding, children, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['panel__body', className].filter(Boolean).join(' ')}
        style={padding ? { ...style, padding } : style}
        {...rest}
      >
        {children}
      </div>
    )
  },
)
PanelBody.displayName = 'PanelBody'

// =============================================================================
//   PANEL FOOTER
// =============================================================================

export interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override default padding (var(--spacing-150) = 24px). */
  padding?: string
  children: React.ReactNode
}

export const PanelFooter = React.forwardRef<HTMLDivElement, PanelFooterProps>(
  function PanelFooter({ padding, children, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['panel__footer', className].filter(Boolean).join(' ')}
        style={padding ? { ...style, padding } : style}
        {...rest}
      >
        {children}
      </div>
    )
  },
)
PanelFooter.displayName = 'PanelFooter'
