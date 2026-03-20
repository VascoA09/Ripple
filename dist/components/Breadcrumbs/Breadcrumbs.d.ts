
export interface BreadcrumbMenuItem {
    /** Display label */
    label: string;
    /** URL to navigate to */
    href: string;
}
export interface BreadcrumbItem {
    /** Page name to display */
    label: string;
    /** URL to navigate to (omit for current page) */
    href?: string;
    /** Whether this is the current page */
    current?: boolean;
    /** Optional sibling pages dropdown */
    menu?: BreadcrumbMenuItem[];
}
export interface BreadcrumbsProps {
    /** Ordered list of breadcrumb items, last item is the current page */
    items: BreadcrumbItem[];
    /** Separator style between items */
    separator?: 'chevron' | 'slash';
    /** Maximum number of items to show before collapsing intermediates */
    maxItems?: number;
    /** Custom navigation handler for SPA routing */
    onNavigate?: (href: string) => void;
    className?: string;
}
export declare function Breadcrumbs({ items, separator, maxItems, onNavigate, className, }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
