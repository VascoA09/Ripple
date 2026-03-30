import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import type { NavItem, UserMenuItem, BadgeColor } from '../../components/Navbar'
import { Drawer } from '../../components/Drawer'
import type { DrawerSize, DrawerSide } from '../../components/Drawer'
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
   * Side the modal drawer slides in from. Default: 'right'.
   * 'left' positions the drawer immediately to the right of the Navbar.
   * Has no effect on persistent drawers.
   */
  side?: DrawerSide
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
  onLogoClick?: () => void
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
  /** Application content rendered in the main area to the right of navigation. */
  children?: React.ReactNode
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
 *   [Navbar 64px] [Persistent panel (optional)] [Content area (flex: 1)]
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
  onLogoClick,
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
  className,
}: MainNavigationProps) {
  const isControlled = controlledId !== undefined
  const [internalId, setInternalId] = useState<string | null>(null)
  const openId = isControlled ? controlledId : internalId

  function setOpenId(id: string | null) {
    if (!isControlled) setInternalId(id)
    onDrawerChange?.(id)
  }

  function toggle(drawerId: string) {
    setOpenId(openId === drawerId ? null : drawerId)
  }

  // Wire onClick and selected onto items that reference a drawer.
  // Preserves any onClick the caller provided alongside the toggle.
  function wire(item: MainNavItem): NavItem {
    if (!item.drawerId) return item
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
        onLogoClick={onLogoClick}
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
        <div
          className="main-navigation__panel"
          data-size={persistentDrawer.size ?? 'medium'}
          role="complementary"
          aria-label="Navigation panel"
        >
          {persistentDrawer.content}
        </div>
      )}

      {/* ── Content area ────────────────────────────────────────────────── */}
      <div className="main-navigation__content">
        {children}
      </div>

      {/* ── Modal drawers — portal-rendered, always mounted for animations ─ */}
      {modalDrawers.map(d => (
        <Drawer
          key={d.id}
          open={openId === d.id}
          onClose={() => setOpenId(null)}
          size={d.size ?? 'medium'}
          side={d.side ?? 'right'}
          className={d.side === 'left' ? 'main-navigation__modal-drawer' : undefined}
        >
          {d.content}
        </Drawer>
      ))}

    </div>
  )
}
