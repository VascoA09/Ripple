import { Meta, StoryObj } from '@storybook/react';
import { NavbarProps } from './Navbar';

declare const meta: Meta<NavbarProps>;
export default meta;
type Story = StoryObj<NavbarProps>;
/** Plain: no drawers, every button navigates. */
export declare const Plain: Story;
/** Overlay drawers: one at a time; the current page keeps its edge indicator. */
export declare const WithOverlayDrawers: Story;
/** Persistent drawer: in-flow panel that pushes content, no focus trap. Standard Navigation only. */
export declare const WithPersistentDrawer: Story;
/** Drawer open and current page at the same time: two distinct states. */
export declare const DrawerOpenAndCurrentPage: Story;
/** Tenant badge, counters and a disabled item. */
export declare const TenantCountersDisabled: Story;
/** More than 5 contextual items: the 5th slot becomes the overflow menu. */
export declare const ContextualOverflow: Story;
/** Abbreviated name with an accessible full name, and a name that truncates. */
export declare const ProductNames: Story;
/** Development warning: more than 5 global items (check the console). */
export declare const GlobalOverflowWarning: Story;
/** Dark theme. */
export declare const DarkTheme: Story;
