import { default as React } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
export interface FlyoutMenuProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
    modal?: boolean;
}
export declare const FlyoutMenu: React.FC<FlyoutMenuProps>;
export interface FlyoutMenuTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Trigger> {
}
export declare const FlyoutMenuTrigger: React.ForwardRefExoticComponent<FlyoutMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface FlyoutMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Content> {
    container?: HTMLElement | null;
}
export declare const FlyoutMenuContent: React.ForwardRefExoticComponent<FlyoutMenuContentProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuLabelProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Label> {
}
export declare const FlyoutMenuLabel: React.ForwardRefExoticComponent<FlyoutMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuGroupProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Group> {
}
export declare const FlyoutMenuGroup: React.ForwardRefExoticComponent<FlyoutMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> {
}
export declare const FlyoutMenuItem: React.ForwardRefExoticComponent<FlyoutMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.CheckboxItem> {
}
export declare const FlyoutMenuCheckboxItem: React.ForwardRefExoticComponent<FlyoutMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuRadioGroupProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioGroup> {
}
export declare const FlyoutMenuRadioGroup: React.ForwardRefExoticComponent<FlyoutMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioItem> {
}
export declare const FlyoutMenuRadioItem: React.ForwardRefExoticComponent<FlyoutMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Separator> {
}
export declare const FlyoutMenuSeparator: React.ForwardRefExoticComponent<FlyoutMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuSubProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
}
export declare const FlyoutMenuSub: React.FC<FlyoutMenuSubProps>;
export interface FlyoutMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.SubTrigger> {
}
export declare const FlyoutMenuSubTrigger: React.ForwardRefExoticComponent<FlyoutMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.SubContent> {
    container?: HTMLElement | null;
}
export declare const FlyoutMenuSubContent: React.ForwardRefExoticComponent<FlyoutMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
export interface FlyoutMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
}
export declare const FlyoutMenuShortcut: React.ForwardRefExoticComponent<FlyoutMenuShortcutProps & React.RefAttributes<HTMLSpanElement>>;
