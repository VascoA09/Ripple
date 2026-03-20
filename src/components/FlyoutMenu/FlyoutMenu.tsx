import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight } from 'lucide-react'
import './FlyoutMenu.css'

// =============================================================================
// ROOT
// =============================================================================

export interface FlyoutMenuProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  modal?: boolean
}

export const FlyoutMenu = DropdownMenu.Root as React.FC<FlyoutMenuProps>

// =============================================================================
// TRIGGER
// =============================================================================

export interface FlyoutMenuTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Trigger> {}

export const FlyoutMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Trigger>,
  FlyoutMenuTriggerProps
>(function FlyoutMenuTrigger({ className, ...rest }, ref) {
  return (
    <DropdownMenu.Trigger
      ref={ref}
      className={['flyout-menu-trigger', className].filter(Boolean).join(' ')}
      {...rest}
    />
  )
})

// =============================================================================
// CONTENT
// =============================================================================

export interface FlyoutMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Content> {
  container?: HTMLElement | null
}

export const FlyoutMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  FlyoutMenuContentProps
>(function FlyoutMenuContent(
  { className, sideOffset = 4, align = 'start', container, ...rest },
  ref,
) {
  return (
    <DropdownMenu.Portal container={container}>
      <DropdownMenu.Content
        ref={ref}
        className={['flyout-menu-content', className].filter(Boolean).join(' ')}
        sideOffset={sideOffset}
        align={align}
        {...rest}
      />
    </DropdownMenu.Portal>
  )
})

// =============================================================================
// LABEL
// =============================================================================

export interface FlyoutMenuLabelProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Label> {}

export const FlyoutMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Label>,
  FlyoutMenuLabelProps
>(function FlyoutMenuLabel({ className, ...rest }, ref) {
  return (
    <DropdownMenu.Label
      ref={ref}
      className={['flyout-menu-label', className].filter(Boolean).join(' ')}
      {...rest}
    />
  )
})

// =============================================================================
// GROUP
// =============================================================================

export interface FlyoutMenuGroupProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Group> {}

export const FlyoutMenuGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Group>,
  FlyoutMenuGroupProps
>(function FlyoutMenuGroup({ ...rest }, ref) {
  return <DropdownMenu.Group ref={ref} {...rest} />
})

// =============================================================================
// ITEM
// =============================================================================

export interface FlyoutMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> {}

export const FlyoutMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  FlyoutMenuItemProps
>(function FlyoutMenuItem({ className, ...rest }, ref) {
  return (
    <DropdownMenu.Item
      ref={ref}
      className={['flyout-menu-item', className].filter(Boolean).join(' ')}
      {...rest}
    />
  )
})

// =============================================================================
// CHECKBOX ITEM
// =============================================================================

export interface FlyoutMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.CheckboxItem> {}

export const FlyoutMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.CheckboxItem>,
  FlyoutMenuCheckboxItemProps
>(function FlyoutMenuCheckboxItem({ className, children, ...rest }, ref) {
  return (
    <DropdownMenu.CheckboxItem
      ref={ref}
      className={['flyout-menu-item', 'flyout-menu-item--has-indicator', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="flyout-menu-item-indicator">
        <DropdownMenu.ItemIndicator>
          <Check size={14} aria-hidden />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.CheckboxItem>
  )
})

// =============================================================================
// RADIO GROUP
// =============================================================================

export interface FlyoutMenuRadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioGroup> {}

export const FlyoutMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.RadioGroup>,
  FlyoutMenuRadioGroupProps
>(function FlyoutMenuRadioGroup({ ...rest }, ref) {
  return <DropdownMenu.RadioGroup ref={ref} {...rest} />
})

// =============================================================================
// RADIO ITEM
// =============================================================================

export interface FlyoutMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioItem> {}

export const FlyoutMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.RadioItem>,
  FlyoutMenuRadioItemProps
>(function FlyoutMenuRadioItem({ className, children, ...rest }, ref) {
  return (
    <DropdownMenu.RadioItem
      ref={ref}
      className={['flyout-menu-item', 'flyout-menu-item--has-indicator', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="flyout-menu-item-indicator">
        <DropdownMenu.ItemIndicator>
          <Check size={14} aria-hidden />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.RadioItem>
  )
})

// =============================================================================
// SEPARATOR
// =============================================================================

export interface FlyoutMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Separator> {}

export const FlyoutMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Separator>,
  FlyoutMenuSeparatorProps
>(function FlyoutMenuSeparator({ className, ...rest }, ref) {
  return (
    <DropdownMenu.Separator
      ref={ref}
      className={['flyout-menu-separator', className].filter(Boolean).join(' ')}
      {...rest}
    />
  )
})

// =============================================================================
// SUBMENU
// =============================================================================

export interface FlyoutMenuSubProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

export const FlyoutMenuSub = DropdownMenu.Sub as React.FC<FlyoutMenuSubProps>

// =============================================================================
// SUBMENU TRIGGER
// =============================================================================

export interface FlyoutMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.SubTrigger> {}

export const FlyoutMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.SubTrigger>,
  FlyoutMenuSubTriggerProps
>(function FlyoutMenuSubTrigger({ className, children, ...rest }, ref) {
  return (
    <DropdownMenu.SubTrigger
      ref={ref}
      className={['flyout-menu-item', 'flyout-menu-sub-trigger', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
      <ChevronRight size={16} className="flyout-menu-sub-trigger__chevron" aria-hidden />
    </DropdownMenu.SubTrigger>
  )
})

// =============================================================================
// SUBMENU CONTENT
// =============================================================================

export interface FlyoutMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.SubContent> {
  container?: HTMLElement | null
}

export const FlyoutMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.SubContent>,
  FlyoutMenuSubContentProps
>(function FlyoutMenuSubContent({ className, sideOffset = 4, container, ...rest }, ref) {
  return (
    <DropdownMenu.Portal container={container}>
      <DropdownMenu.SubContent
        ref={ref}
        className={['flyout-menu-content', className].filter(Boolean).join(' ')}
        sideOffset={sideOffset}
        {...rest}
      />
    </DropdownMenu.Portal>
  )
})

// =============================================================================
// SHORTCUT
// =============================================================================

export interface FlyoutMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const FlyoutMenuShortcut = React.forwardRef<HTMLSpanElement, FlyoutMenuShortcutProps>(
  function FlyoutMenuShortcut({ className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={['flyout-menu-shortcut', className].filter(Boolean).join(' ')}
        aria-hidden
        {...rest}
      />
    )
  },
)
