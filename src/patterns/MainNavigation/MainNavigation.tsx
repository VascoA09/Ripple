import React, { useId, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import type { NavItem, UserMenuItem, BadgeColor } from '../../components/Navbar'
import { Drawer, DrawerContext } from '../../components/Drawer'
import type { DrawerSize } from '../../components/Drawer'
import './MainNavigation.css'

// =============================================================================
// TYPES
// =============================================================================

export interface MainNavDrawerDef {
  /** Must match the `drawerId` on the nav item that opens this drawer. */
  id: string
  /**
   * Full drawer content. Include DrawerHeader, DrawerContent,
   * DrawerSection, etc. as needed.
   */
  content: React.ReactNode
  /** Default: 'medium' */
  size?: DrawerSize
  /**
   * Persistent drawers render as in-flow panels to the right of the Navbar,
   * pushing the content area. No backdrop. No focus trap.
   * Modal drawers (default) are portal-rendered overlays with a backdrop
   * and focus trap.
   */
  persistent?: boolean
}

export interface MainNavItem extends NavItem {
  /**
   * When set, clicking this item opens/closes the matching drawer.
   * The item's `selected` state is managed automatically.
   * Omit for items that navigate without a drawer.
   */
  drawerId?: string
}

export interface MainNavigationProps {
  // ── Navbar ──────────────────────────────────────────────────────────────────
  logo?: React.ReactNode
  productName?: string
  tenantLabel?: string
  tenantColor?: BadgeColor
  /** Global nav items (max 5). Items with a `drawerId` are auto-wired. */
  globalNavItems?: MainNavItem[]
  /** Contextual nav items (5 visible + overflow). Items with a `drawerId` are auto-wired. */
  contextualNavItems?: MainNavItem[]
  showContextualDivider?: boolean
  userName?: string
  userRole?: string
  userProductArea?: string
  userAvatarSrc?: string
  userMenuItems?: UserMenuItem[]

  // ── Drawers ──────────────────────────────────────────────────────────────────
  /** Drawer panel definitions. Each must have an `id` matching a nav item's `drawerId`. */
  drawers?: MainNavDrawerDef[]

  // ── Controlled state ─────────────────────────────────────────────────────────
  /**
   * Controlled: ID of the currently open drawer, or null for none.
   * Omit to use uncontrolled mode.
   */
  openDrawerId?: string | null
  /** Called when the user opens or closes a drawer. */
  onDrawerChange?: (id: string | null) => void

  // ── Layout ───────────────────────────────────────────────────────────────────
  /** Application content rendered in the scrollable main area. */
  children?: React.ReactNode
  /**
   * Footer rendered at the bottom of the main area (below the scroll region).
   * Pass a <Footer /> component here. Its fixed positioning is cancelled by
   * the shell — it becomes a natural flex child anchored to the bottom.
   */
  footer?: React.ReactNode
  className?: string
}

// =============================================================================
// MAIN NAVIGATION
// =============================================================================

/**
 * MainNavigation composes a Navbar with contextual Drawer panels into a
 * complete enterprise application shell.
 *
 * State: Uncontrolled by default. Pass `openDrawerId` + `onDrawerChange`
 * for controlled mode (e.g., when the URL should reflect the open panel).
 *
 * Layout:
 *   [Navbar 72px] [Persistent panel (optional)] [Content area (flex: 1)]
 *                                                ├── scroll wrapper (flex: 1, overflow-y: auto)
 *                                                │   └── children
 *                                                └── footer (Footer component, optional)
 *
 * Modal drawers are portal-rendered and do not affect layout.
 * Persistent drawers are in-flow panels that push the content area.
 *
 * Drawer wiring: nav items with a `drawerId` automatically receive
 * `selected` state and `onClick` toggle behaviour.
 */
export function MainNavigation({
  logo,
  productName,
  tenantLabel,
  tenantColor,
  globalNavItems = [],
  contextualNavItems = [],
  showContextualDivider,
  userName,
  userRole,
  userProductArea,
  userAvatarSrc,
  userMenuItems,
  drawers = [],
  openDrawerId: controlledId,
  onDrawerChange,
  children,
  footer,
  className,
}: MainNavigationProps) {
  const isControlled      = controlledId !== undefined
  const [internalId, setInternalId] = useState<string | null>(null)
  const openId            = isControlled ? controlledId : internalId
  const persistentTitleId = useId()

  function setOpenId(id: string | null) {
    if (!isControlled) setInternalId(id)
    onDrawerChange?.(id)
  }

  function toggle(drawerId: string) {
    setOpenId(openId === drawerId ? null : drawerId)
  }

  // Wire onClick and selected onto all nav items.
  // Only one button may be selected at a time: drawer triggers are selected
  // when their drawer is open; non-drawer items are selected only when no
  // drawer is open (their caller-provided `selected` is suppressed otherwise).
  // Clicking a non-drawer item also closes any open drawer.
  function wire(item: MainNavItem): NavItem {
    if (!item.drawerId) {
      return {
        ...item,
        selected: openId ? false : item.selected,
        onClick: () => {
          setOpenId(null)
          item.onClick?.()
        },
      }
    }
    const { drawerId, ...rest } = item
    return {
      ...rest,
      selected: openId === drawerId,
      onClick: () => {
        item.onClick?.()
        toggle(drawerId)
      },
    }
  }

  const wiredGlobal     = globalNavItems.map(wire)
  const wiredContextual = contextualNavItems.map(wire)

  // Active drawer — drives both the persistent panel and modal visibility
  const activeDrawer     = drawers.find(d => d.id === openId) ?? null
  const persistentDrawer = activeDrawer?.persistent ? activeDrawer : null
  const modalDrawers     = drawers.filter(d => !d.persistent)

  return (
    <div className={['main-navigation', className].filter(Boolean).join(' ')}>

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <Navbar
        logo={logo}
        productName={productName}
        tenantLabel={tenantLabel}
        tenantColor={tenantColor}
        globalNavItems={wiredGlobal}
        contextualNavItems={wiredContextual}
        showContextualDivider={showContextualDivider}
        userName={userName}
        userRole={userRole}
        userProductArea={userProductArea}
        userAvatarSrc={userAvatarSrc}
        userMenuItems={userMenuItems}
      />

      {/* ── Persistent panel — in-flow, pushes content area ─────────────── */}
      {persistentDrawer && (
        <DrawerContext.Provider value={{ onClose: () => setOpenId(null), titleId: persistentTitleId }}>
          <div
            className="main-navigation__panel"
            data-size={persistentDrawer.size ?? 'medium'}
            role="complementary"
            aria-labelledby={persistentTitleId}
          >
            {persistentDrawer.content}
          </div>
        </DrawerContext.Provider>
      )}

      {/* ── Content area ────────────────────────────────────────────────── */}
      <div className="main-navigation__content">
        {/* Scroll wrapper — children can use position:sticky for page headers */}
        <div className="main-navigation__scroll">
          {children}
        </div>

        {/* Footer — anchored to the bottom of the content area, not the viewport */}
        {footer}
      </div>

      {/* ── Modal drawers — always left-side, flush with navbar right edge ── */}
      {modalDrawers.map(d => (
        <Drawer
          key={d.id}
          open={openId === d.id}
          onClose={() => setOpenId(null)}
          size={d.size ?? 'medium'}
          side="left"
          className="main-navigation__modal-drawer"
          overlayClassName="main-navigation__drawer-overlay"
        >
          {d.content}
        </Drawer>
      ))}

    </div>
  )
}
