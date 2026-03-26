import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { ChevronLeft, MoreVertical } from 'lucide-react'
import { Breadcrumbs } from '../Breadcrumbs'
import type { BreadcrumbItem } from '../Breadcrumbs'
import { ButtonsToolbar } from '../ButtonsToolbar'
import type { ToolbarAction } from '../ButtonsToolbar'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuItem,
  FlyoutMenuSeparator,
} from '../FlyoutMenu'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import './PageHeader.css'

// ---------------------------------------------------------------------------
// Re-exports so consumers don't need two import paths
// ---------------------------------------------------------------------------

export type { BreadcrumbItem, ToolbarAction }

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PageHeaderProps {
  /** Page title rendered as `<h1>`. Required. */
  title: string
  /** Supporting text below the title */
  description?: string
  /** Date label above the title (e.g. "Monday, March 02") */
  date?: string
  /** Shows the breadcrumb trail */
  showBreadcrumb?: boolean
  /** Breadcrumb navigation items */
  breadcrumbItems?: BreadcrumbItem[]
  /** Callback for SPA breadcrumb navigation */
  onBreadcrumbNavigate?: (href: string) => void
  /** Badge/chip nodes rendered inline with the title heading */
  tags?: ReactNode[]
  /**
   * Adaptive actions toolbar. Enables automatic variant switching via
   * ResizeObserver. Ordering: tertiary → secondary → primary (left to right).
   */
  mainActions?: ToolbarAction[]
  /**
   * Discuss + AVA toolbar. Always visible on desktop, separated from main
   * actions by a 1 px divider. Not rendered on mobile — use mobileMenuActions
   * to surface these items in the mobile overflow menu instead.
   */
  secondaryToolbar?: ReactNode
  /**
   * Actions folded into the mobile ⋯ overflow menu at the top of the list
   * (e.g. Discuss, AVA). Desktop ignores this prop — use secondaryToolbar there.
   */
  mobileMenuActions?: ToolbarAction[]
  /** Right-aligned last-update text above the main row */
  lastUpdateInfo?: string
  /** Fixes the header at the top of the viewport on scroll */
  sticky?: boolean
  /** Reduces title from heading.l (28px) to heading.m (24px) */
  compact?: boolean
  /**
   * 50/50 split layout. Title truncates with ellipsis; full title shown via
   * native `title` attribute (Tooltip component pending).
   */
  truncateTitle?: boolean
  className?: string
  style?: CSSProperties
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Resolve toolbar variant from available pixel width and action count. */
function resolveVariant(
  available: number,
  count: number,
): 'full' | 'compact' | 'minimal' {
  if (count <= 1) return 'full'
  const nFull    = Math.min(count, 5)
  const nCompact = Math.min(count, 3)
  // threshold = N × button_width + (N-1) × gap
  const fullThresh    = nFull    * 120 + Math.max(nFull    - 1, 0) * 8
  const compactThresh = nCompact * 105 + Math.max(nCompact - 1, 0) * 8
  if (available >= fullThresh)    return 'full'
  if (available >= compactThresh) return 'compact'
  return 'minimal'
}

/** Extract the primary action (last one marked type='primary', else last action). */
function getPrimaryAction(actions: ToolbarAction[]): ToolbarAction | undefined {
  const idx = [...actions].reverse().findIndex(a => a.type === 'primary')
  return idx === -1 ? actions[actions.length - 1] : actions[actions.length - 1 - idx]
}

/** Non-primary actions for mobile overflow menu. */
function getNonPrimaryActions(actions: ToolbarAction[]): ToolbarAction[] {
  const primary = getPrimaryAction(actions)
  return actions.filter(a => a.id !== primary?.id)
}

// ---------------------------------------------------------------------------
// PageHeader
// ---------------------------------------------------------------------------

export function PageHeader({
  title,
  description,
  date,
  showBreadcrumb = false,
  breadcrumbItems = [],
  onBreadcrumbNavigate,
  tags = [],
  mainActions,
  secondaryToolbar,
  mobileMenuActions,
  lastUpdateInfo,
  sticky = false,
  compact = false,
  truncateTitle = false,
  className,
  style,
}: PageHeaderProps) {
  const [toolbarVariant, setToolbarVariant] = useState<'full' | 'compact' | 'minimal'>('minimal')

  const mainRowRef          = useRef<HTMLDivElement>(null)
  const titleAreaRef        = useRef<HTMLDivElement>(null)
  const actionsContainerRef = useRef<HTMLDivElement>(null)
  const secondaryToolbarRef = useRef<HTMLDivElement>(null)

  const computeVariant = useCallback(() => {
    if (!mainActions?.length) return

    let available: number

    if (truncateTitle) {
      // Split layout: actions column is CSS 50% — measure directly
      available = actionsContainerRef.current?.offsetWidth ?? 0
    } else {
      // Standard layout: derive from remaining space in the main row
      const rowW   = mainRowRef.current?.offsetWidth ?? 0
      const titleW = titleAreaRef.current?.scrollWidth ?? 0
      const rowGap = 24 // var(--spacing-150)
      available = rowW - titleW - rowGap
    }

    // Subtract secondary toolbar overhead (width + 8px gap + 1px divider + 8px gap)
    if (secondaryToolbar && secondaryToolbarRef.current) {
      available -= secondaryToolbarRef.current.offsetWidth + 17
    }

    setToolbarVariant(resolveVariant(available, mainActions.length))
  }, [mainActions, secondaryToolbar, truncateTitle])

  useLayoutEffect(() => {
    computeVariant()

    const el = truncateTitle ? actionsContainerRef.current : mainRowRef.current
    if (!el) return

    const observer = new ResizeObserver(computeVariant)
    observer.observe(el)
    return () => observer.disconnect()
  }, [computeVariant, truncateTitle])

  const hasActions      = !!mainActions?.length
  const hasRightColumn  = hasActions || !!secondaryToolbar || !!lastUpdateInfo
  const showDivider     = !!secondaryToolbar && hasActions

  // Mobile back link — parent of the current breadcrumb page
  const mobileParent = showBreadcrumb && breadcrumbItems.length >= 2
    ? breadcrumbItems[breadcrumbItems.length - 2]
    : null

  // Non-primary actions for mobile ⋯ overflow
  const mobileOverflow    = mainActions ? getNonPrimaryActions(mainActions) : []
  const mobilePrimary     = mainActions ? getPrimaryAction(mainActions) : undefined
  const hasMobileOverflow = mobileOverflow.length > 0 || (mobileMenuActions?.length ?? 0) > 0
  const hasMobileActionsBar = hasActions || (mobileMenuActions?.length ?? 0) > 0

  // ---------------------------------------------------------------------------
  // Shared content blocks
  // ---------------------------------------------------------------------------

  const breadcrumbBlock = showBreadcrumb && breadcrumbItems.length > 0 ? (
    <Breadcrumbs
      items={breadcrumbItems}
      onNavigate={onBreadcrumbNavigate}
      className="rpl-page-header__breadcrumbs"
    />
  ) : null

  const dateBlock = date ? (
    <p className="rpl-page-header__date">{date}</p>
  ) : null

  const titleEl = (
    <h1
      className={[
        'rpl-page-header__title',
        compact       ? 'rpl-page-header__title--compact'  : '',
        truncateTitle ? 'rpl-page-header__title--truncate' : '',
      ].filter(Boolean).join(' ')}
      title={truncateTitle ? title : undefined}
    >
      {title}
    </h1>
  )

  // Desktop heading row — title + inline tags
  const headingBlock = (
    <div className="rpl-page-header__heading-row">
      {titleEl}
      {tags.length > 0 && (
        <div className="rpl-page-header__tags" aria-label="Tags">
          {tags.map((tag, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i} className="rpl-page-header__tag-item">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  // Mobile heading row — title only (tags rendered separately below description)
  const mobileHeadingBlock = (
    <div className="rpl-page-header__heading-row">
      {titleEl}
    </div>
  )

  const descriptionBlock = description ? (
    <p className="rpl-page-header__description">{description}</p>
  ) : null

  // ---------------------------------------------------------------------------
  // Desktop layout
  // ---------------------------------------------------------------------------

  const desktopLayout = (
    <div className="rpl-page-header__desktop-layout" aria-hidden="false">
      {/* Breadcrumbs — full-width row above the title/actions split */}
      {breadcrumbBlock}

      <div
        ref={mainRowRef}
        className={[
          'rpl-page-header__main-row',
          truncateTitle ? 'rpl-page-header__main-row--split' : '',
        ].filter(Boolean).join(' ')}
      >
        {/* Title area — date, heading, description */}
        <div ref={titleAreaRef} className="rpl-page-header__title-area">
          {dateBlock}
          {headingBlock}
          {descriptionBlock}
        </div>

        {/* Right column — last update stacked above action buttons */}
        {hasRightColumn && (
          <div
            ref={actionsContainerRef}
            className="rpl-page-header__actions"
          >
            {lastUpdateInfo && (
              <span className="rpl-page-header__last-update">{lastUpdateInfo}</span>
            )}

            {(hasActions || !!secondaryToolbar) && (
              <div className="rpl-page-header__actions-row">
                {secondaryToolbar && (
                  <div
                    ref={secondaryToolbarRef}
                    className="rpl-page-header__secondary-toolbar"
                  >
                    {secondaryToolbar}
                  </div>
                )}

                {showDivider && (
                  <div
                    className="rpl-page-header__toolbar-divider"
                    role="separator"
                    aria-hidden="true"
                  />
                )}

                {hasActions && (
                  <ButtonsToolbar
                    actions={mainActions!}
                    variant={toolbarVariant}
                    className="rpl-page-header__main-actions"
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )

  // ---------------------------------------------------------------------------
  // Mobile layout
  // ---------------------------------------------------------------------------

  const mobileLayout = (
    <div className="rpl-page-header__mobile-layout" aria-hidden="true">
      {/* Back link */}
      {mobileParent && (
        <div className="rpl-page-header__mobile-back">
          {mobileParent.href ? (
            <a
              href={mobileParent.href}
              className="rpl-page-header__mobile-back-link"
              onClick={onBreadcrumbNavigate ? (e) => {
                e.preventDefault()
                onBreadcrumbNavigate(mobileParent.href!)
              } : undefined}
            >
              <ChevronLeft size={16} aria-hidden="true" />
              {mobileParent.label}
            </a>
          ) : (
            <span className="rpl-page-header__mobile-back-link">
              <ChevronLeft size={16} aria-hidden="true" />
              {mobileParent.label}
            </span>
          )}
        </div>
      )}

      {dateBlock}
      {mobileHeadingBlock}
      {descriptionBlock}

      {tags.length > 0 && (
        <div className="rpl-page-header__mobile-tags">
          {tags.map((tag, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i} className="rpl-page-header__tag-item">{tag}</span>
          ))}
        </div>
      )}

      {lastUpdateInfo && (
        <p className="rpl-page-header__last-update">{lastUpdateInfo}</p>
      )}

      {/* Mobile actions bar — ⋯ overflow menu + primary action */}
      {hasMobileActionsBar && (
        <div className="rpl-page-header__mobile-actions">
          {hasMobileOverflow && (
            <FlyoutMenu>
              <FlyoutMenuTrigger asChild>
                <IconButton
                  icon={<MoreVertical size={16} />}
                  aria-label="More actions"
                  variant="outline"
                  color="neutral"
                  size="medium"
                />
              </FlyoutMenuTrigger>
              <FlyoutMenuContent align="start" sideOffset={4}>
                {/* Secondary actions (Discuss, AVA) at top of menu */}
                {mobileMenuActions && mobileMenuActions.length > 0 && (
                  <>
                    {mobileMenuActions.map((action) => (
                      <FlyoutMenuItem
                        key={action.id}
                        disabled={action.disabled}
                        onSelect={action.onClick}
                      >
                        {action.icon && <span className="flyout-menu-item-icon" aria-hidden="true">{action.icon}</span>}
                        {action.label}
                      </FlyoutMenuItem>
                    ))}
                    {mobileOverflow.length > 0 && <FlyoutMenuSeparator />}
                  </>
                )}
                {mobileOverflow.map((action, i) => (
                  <span key={action.id}>
                    {i > 0 && action.type !== mobileOverflow[i - 1]?.type && (
                      <FlyoutMenuSeparator />
                    )}
                    <FlyoutMenuItem
                      disabled={action.disabled}
                      onSelect={action.onClick}
                    >
                      {action.icon && (
                        <span className="flyout-menu-item-icon" aria-hidden="true">{action.icon}</span>
                      )}
                      {action.label}
                    </FlyoutMenuItem>
                  </span>
                ))}
              </FlyoutMenuContent>
            </FlyoutMenu>
          )}

          {mobilePrimary && (
            <Button
              variant="fill"
              color="primary"
              size="medium"
              disabled={mobilePrimary.disabled}
              loading={mobilePrimary.loading}
              iconStart={mobilePrimary.icon}
              onClick={mobilePrimary.onClick}
              className="rpl-page-header__mobile-primary"
            >
              {mobilePrimary.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )

  // ---------------------------------------------------------------------------
  // Root
  // ---------------------------------------------------------------------------

  return (
    <header
      className={[
        'rpl-page-header',
        sticky  ? 'rpl-page-header--sticky'  : '',
        compact ? 'rpl-page-header--compact' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={style}
    >
      {desktopLayout}
      {mobileLayout}
    </header>
  )
}
