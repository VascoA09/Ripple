import { useEffect, useId, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react'
import { MoreHorizontal } from '../../icons'
import { Unit4Logo } from '../../assets/Unit4Logo'
import { Avatar } from '../../components/Avatar'
import { Badge } from '../../components/Badge'
import { Counter } from '../../components/Counter'
import { IconButton } from '../../components/IconButton'
import { Tooltip } from '../../components/Tooltip'
import { Drawer, DrawerContext } from '../../components/Drawer'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuItem,
  FlyoutMenuSeparator,
} from '../../components/FlyoutMenu'
import './Navbar.css'

// =============================================================================
// Navbar pattern. Spec: patterns/navbar.md (0.3.0)
//
// Renders, as siblings inside the layout's flex row:
//   [nav.navbar 72px] [persistent drawer panel, when open]
// plus overlay drawers, which Drawer portals to <body>.
// The layout (MicroNavigation, StandardNavigation) owns the content area.
// =============================================================================

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type BadgeColor = 'primary' | 'notice' | 'negative' | 'positive' | 'neutral'

export interface NavItem {
  /** Unique key */
  id: string
  /** Icon element (rendered at 20 × 20 px) */
  icon: ReactNode
  /** Tooltip text and aria-label */
  label: string
  /** Counter value. Shown when > 0, always negative, appended to the aria-label */
  count?: number
  /** Opens the drawer with this id. Pressed state is managed by the pattern. */
  drawerId?: string
  /** Marks the current page (edge indicator, aria-current="page"). Page items only; ignored when `drawerId` is set. */
  current?: boolean
  /**
   * @deprecated 0.3.0. Use `current` for page items. Drawer state is managed by the pattern.
   * Still honoured on page items as `current` for one release.
   */
  selected?: boolean
  /** Click handler. On drawer items it runs before the drawer toggles. */
  onClick?: () => void
  /** Prevents interaction */
  disabled?: boolean
}

export interface UserMenuItem {
  id: string
  label: string
  /** Optional leading icon */
  icon?: ReactNode
  /** Renders a separator line before this item */
  separator?: boolean
  onClick?: () => void
}

export type NavbarDrawerSize = 'small' | 'medium' | 'large'

export interface NavbarDrawer {
  /** Matches `NavItem.drawerId` */
  id: string
  /** Drawer content: DrawerHeader, DrawerContent, DrawerSection… */
  content: ReactNode
  /** Default 'medium' (320 / 480 / 640 px) */
  size?: NavbarDrawerSize
  /** In-flow panel that pushes the content area. Standard Navigation only. */
  persistent?: boolean
}

export interface NavbarProps {
  /** Label under the Unit4 symbol (e.g. "ERPx", "CM"). Max width 100% of the column; truncates beyond. */
  productName?: string
  /** Visually hidden full product name. Required when `productName` is abbreviated or truncates. */
  productFullName?: string
  /** Environment / tenant badge label */
  tenantLabel?: string
  /** Badge color variant. Default 'notice' */
  tenantColor?: BadgeColor
  /** Top-level navigation (max 5; extra items are dropped with a development warning) */
  globalNavItems?: NavItem[]
  /** Module navigation (5 visible + overflow menu) */
  contextualNavItems?: NavItem[]
  /** Show a 1 px divider between global and contextual nav. Default true */
  showContextualDivider?: boolean
  /** Drawer definitions. Omit for the plain Navbar. */
  drawers?: NavbarDrawer[]
  /** Controlled: id of the open drawer, or null. Omit for uncontrolled mode. */
  openDrawerId?: string | null
  /** Called when a drawer opens or closes */
  onDrawerChange?: (id: string | null) => void
  /** User's full name, used for avatar initials and the user menu header */
  userName?: string
  /** User's role title (e.g. "Finance Manager") */
  userRole?: string
  /** User's product area (e.g. "Finance") */
  userProductArea?: string
  /** Image URL for the user avatar */
  userAvatarSrc?: string
  /** User menu items. Must include Log out. */
  userMenuItems?: UserMenuItem[]
  className?: string
  style?: CSSProperties
}

const MAX_GLOBAL = 5
const MAX_CONTEXTUAL_VISIBLE = 5

// Development-only warnings. Bundlers replace process.env.NODE_ENV; the try/catch
// keeps unbundled ESM in a browser (no `process`) from throwing.
let isDev = false
try { isDev = process.env.NODE_ENV !== 'production' } catch { isDev = false }
const warned = new Set<string>()
function devWarnOnce(key: string, message: string) {
  if (!isDev || warned.has(key)) return
  warned.add(key)
  console.warn(`[Ripple Navbar] ${message}`)
}

// -----------------------------------------------------------------------------
// NavButton
// -----------------------------------------------------------------------------

interface NavButtonProps {
  item: NavItem
  /** true / false for drawer items, undefined for page items */
  pressed?: boolean
  current: boolean
  onActivate: () => void
  buttonRef: (el: HTMLButtonElement | null) => void
}

function NavButton({ item, pressed, current, onActivate, buttonRef }: NavButtonProps) {
  const ariaLabel = item.count && item.count > 0
    ? `${item.label} (${item.count > 99 ? '99+' : item.count})`
    : item.label

  return (
    <div className="navbar__nav-item" data-current={current ? '' : undefined}>
      <Tooltip content={ariaLabel} placement="right">
        <IconButton
          ref={buttonRef}
          variant="ghost"
          color="neutral"
          size="large"
          icon={item.icon}
          aria-label={ariaLabel}
          aria-pressed={pressed}
          aria-current={current ? 'page' : undefined}
          disabled={item.disabled}
          onClick={onActivate}
          data-selected={pressed ? '' : undefined}
          className="navbar__nav-btn"
        />
      </Tooltip>

      {item.count !== undefined && item.count > 0 && (
        <Counter
          count={item.count}
          size="small"
          variant="fill"
          color="negative"
          aria-hidden={true}
          className="navbar__counter"
        />
      )}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Navbar
// -----------------------------------------------------------------------------

export function Navbar({
  productName,
  productFullName,
  tenantLabel,
  tenantColor = 'notice',
  globalNavItems = [],
  contextualNavItems = [],
  showContextualDivider = true,
  drawers = [],
  openDrawerId: controlledId,
  onDrawerChange,
  userName = 'User',
  userRole,
  userProductArea,
  userAvatarSrc,
  userMenuItems = [],
  className,
  style,
}: NavbarProps) {
  const isControlled = controlledId !== undefined
  const [internalId, setInternalId] = useState<string | null>(null)
  const openId = isControlled ? controlledId : internalId

  const buttonRefs = useRef(new Map<string, HTMLButtonElement>())
  const lastTrigger = useRef<string | null>(null)
  const restoreFocus = useRef(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelTitleId = useId()

  // ── Development warnings ───────────────────────────────────────────────────
  if (globalNavItems.length > MAX_GLOBAL) {
    const dropped = globalNavItems.slice(MAX_GLOBAL).map(i => i.label).join(', ')
    devWarnOnce(`overflow:${dropped}`, `More than ${MAX_GLOBAL} global items. Not rendered: ${dropped}.`)
  }
  for (const item of [...globalNavItems, ...contextualNavItems]) {
    if (item.selected !== undefined) {
      devWarnOnce(`selected:${item.id}`, `NavItem "${item.id}" uses deprecated \`selected\`. Use \`current\` for page items; drawer state is managed.`)
    }
    if (item.drawerId && !drawers.some(d => d.id === item.drawerId)) {
      devWarnOnce(`drawer:${item.drawerId}`, `NavItem "${item.id}" points to drawer "${item.drawerId}", which is not in \`drawers\`.`)
    }
  }

  // ── State ──────────────────────────────────────────────────────────────────
  function setOpenId(id: string | null, focusTrigger = false) {
    if (id) lastTrigger.current = id
    restoreFocus.current = id === null && focusTrigger
    if (!isControlled) setInternalId(id)
    onDrawerChange?.(id)
  }

  // Return focus to the button that opened the drawer when it closes
  // (close button, backdrop). Escape on overlay drawers is handled by Drawer.
  useEffect(() => {
    if (openId !== null || !restoreFocus.current || !lastTrigger.current) return
    restoreFocus.current = false
    const trigger = items().find(i => i.drawerId === lastTrigger.current)
    if (trigger) buttonRefs.current.get(trigger.id)?.focus()
  })

  const activeDrawer     = drawers.find(d => d.id === openId) ?? null
  const persistentDrawer = activeDrawer?.persistent ? activeDrawer : null
  const modalDrawers     = drawers.filter(d => !d.persistent)

  // Persistent panel: move focus into it on open (no trap)
  useEffect(() => {
    if (!persistentDrawer || !panelRef.current) return
    const first = panelRef.current.querySelector<HTMLElement>(
      'input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"])',
    )
    first?.focus()
  }, [persistentDrawer?.id])

  function items() {
    return [...globalNavItems, ...contextualNavItems]
  }

  function activate(item: NavItem) {
    item.onClick?.()
    if (item.drawerId) {
      setOpenId(openId === item.drawerId ? null : item.drawerId)
    } else if (openId !== null) {
      setOpenId(null) // a page button closes any open drawer
    }
  }

  function isCurrent(item: NavItem) {
    return !item.drawerId && Boolean(item.current ?? item.selected)
  }

  function register(id: string) {
    return (el: HTMLButtonElement | null) => {
      if (el) buttonRefs.current.set(id, el)
      else buttonRefs.current.delete(id)
    }
  }

  function renderButton(item: NavItem) {
    return (
      <NavButton
        item={item}
        pressed={item.drawerId ? openId === item.drawerId : undefined}
        current={isCurrent(item)}
        onActivate={() => activate(item)}
        buttonRef={register(item.id)}
      />
    )
  }

  function onPanelKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') {
      e.stopPropagation()
      setOpenId(null, true)
    }
  }

  const visibleGlobal      = globalNavItems.slice(0, MAX_GLOBAL)
  const hasOverflow        = contextualNavItems.length > MAX_CONTEXTUAL_VISIBLE
  const visibleContextual  = hasOverflow ? contextualNavItems.slice(0, MAX_CONTEXTUAL_VISIBLE - 1) : contextualNavItems
  const overflowContextual = hasOverflow ? contextualNavItems.slice(MAX_CONTEXTUAL_VISIBLE - 1) : []
  const hasContextual      = contextualNavItems.length > 0
  const overflowHasCurrent = overflowContextual.some(isCurrent)

  return (
    <>
      <nav
        className={['navbar', className].filter(Boolean).join(' ')}
        aria-label="Application navigation"
        style={style}
      >
        {/* ── Logo: Unit4 symbol for every product, not interactive ──────── */}
        <div className="navbar__logo">
          <span className="navbar__logo-icon" aria-hidden="true">
            <Unit4Logo height={21} width={37} />
          </span>
          {productName && (
            productFullName ? (
              <>
                <span className="navbar__product-name" aria-hidden="true">{productName}</span>
                <span className="navbar__sr-only">{productFullName}</span>
              </>
            ) : (
              <span className="navbar__product-name">{productName}</span>
            )
          )}
        </div>

        {/* ── Tenant badge ─────────────────────────────────────────────── */}
        {tenantLabel && (
          <div className="navbar__tenant">
            <Badge
              variant="outline"
              size="small"
              color={tenantColor}
              className="navbar__tenant-badge"
              title={tenantLabel}
            >
              {tenantLabel}
            </Badge>
          </div>
        )}

        {/* ── Global navigation ────────────────────────────────────────── */}
        {visibleGlobal.length > 0 && (
          <ul className="navbar__nav-list" role="list" aria-label="Global navigation">
            {visibleGlobal.map(item => <li key={item.id}>{renderButton(item)}</li>)}
          </ul>
        )}

        {/* ── Contextual navigation ────────────────────────────────────── */}
        {hasContextual && (
          <>
            {showContextualDivider && (
              <div className="navbar__divider" role="separator" aria-hidden="true" />
            )}
            <ul className="navbar__nav-list" role="list" aria-label="Contextual navigation">
              {visibleContextual.map(item => <li key={item.id}>{renderButton(item)}</li>)}

              {hasOverflow && (
                <li>
                  <FlyoutMenu>
                    <div className="navbar__nav-item" data-current={overflowHasCurrent ? '' : undefined}>
                      <Tooltip content="More" placement="right">
                        <FlyoutMenuTrigger asChild>
                          <IconButton
                            variant="ghost"
                            color="neutral"
                            size="large"
                            icon={<MoreHorizontal size={20} />}
                            aria-label="More navigation items"
                            className="navbar__nav-btn"
                          />
                        </FlyoutMenuTrigger>
                      </Tooltip>
                    </div>
                    <FlyoutMenuContent side="right" align="start" sideOffset={12}>
                      {overflowContextual.map(item => (
                        <FlyoutMenuItem
                          key={item.id}
                          disabled={item.disabled}
                          onSelect={() => activate(item)}
                          aria-current={isCurrent(item) ? 'page' : undefined}
                        >
                          {item.icon && (
                            <span className="navbar__overflow-icon" aria-hidden="true">{item.icon}</span>
                          )}
                          {item.label}
                          {item.count !== undefined && item.count > 0 && (
                            <Counter
                              count={item.count}
                              size="small"
                              variant="fill"
                              color="negative"
                              aria-hidden="true"
                              className="navbar__overflow-counter"
                            />
                          )}
                        </FlyoutMenuItem>
                      ))}
                    </FlyoutMenuContent>
                  </FlyoutMenu>
                </li>
              )}
            </ul>
          </>
        )}

        <div className="navbar__spacer" aria-hidden="true" />

        {/* ── User menu ────────────────────────────────────────────────── */}
        <div className="navbar__user">
          <FlyoutMenu>
            <FlyoutMenuTrigger asChild>
              <button
                type="button"
                className="navbar__avatar-trigger"
                aria-label={`${userName}, open user menu`}
              >
                <Avatar name={userName} src={userAvatarSrc} size="l" aria-hidden={true} />
              </button>
            </FlyoutMenuTrigger>
            <FlyoutMenuContent side="right" align="end" sideOffset={12}>
              <div className="navbar__user-header" role="presentation">
                <span className="navbar__user-name">{userName}</span>
                {(userRole || userProductArea) && (
                  <span className="navbar__user-subtitle">
                    {[userRole, userProductArea].filter(Boolean).join(' · ')}
                  </span>
                )}
              </div>
              <FlyoutMenuSeparator />
              {userMenuItems.map(item => (
                <span key={item.id}>
                  {item.separator && <FlyoutMenuSeparator />}
                  <FlyoutMenuItem onSelect={item.onClick}>
                    {item.icon && (
                      <span className="flyout-menu-item-icon" aria-hidden="true">{item.icon}</span>
                    )}
                    {item.label}
                  </FlyoutMenuItem>
                </span>
              ))}
            </FlyoutMenuContent>
          </FlyoutMenu>
        </div>
      </nav>

      {/* ── Persistent drawer: in-flow, pushes the content area, no trap ── */}
      {persistentDrawer && (
        <DrawerContext.Provider value={{ onClose: () => setOpenId(null, true), titleId: panelTitleId }}>
          <div
            ref={panelRef}
            className="navbar__panel"
            data-size={persistentDrawer.size ?? 'medium'}
            role="complementary"
            aria-labelledby={panelTitleId}
            onKeyDown={onPanelKeyDown}
          >
            {persistentDrawer.content}
          </div>
        </DrawerContext.Provider>
      )}

      {/* ── Overlay drawers: portalled, flush with the Navbar's right edge ── */}
      {modalDrawers.map(d => (
        <Drawer
          key={d.id}
          open={openId === d.id}
          onClose={() => setOpenId(null, true)}
          size={d.size ?? 'medium'}
          side="left"
          className="navbar__modal-drawer"
          overlayClassName="navbar__drawer-overlay"
        >
          {d.content}
        </Drawer>
      ))}
    </>
  )
}
