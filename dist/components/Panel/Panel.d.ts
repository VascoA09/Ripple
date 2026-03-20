import { default as React } from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Enable collapse/expand behaviour. */
    collapsible?: boolean;
    /** Initial expanded state. Uncontrolled — Panel manages its own state. */
    defaultExpanded?: boolean;
    /**
     * Notification callback fired whenever expansion state changes.
     * Panel manages its own state; this is for external sync only.
     */
    onExpandedChange?: (expanded: boolean) => void;
    children: React.ReactNode;
}
export declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon rendered to the left of the title.
     * Use a Lucide icon at 20px. Always decorative — do not put meaning here
     * that isn't also communicated by the title text.
     */
    icon?: React.ReactNode;
    /** Supporting text below the title. */
    subtitle?: React.ReactNode;
    /**
     * Right-side slot for action buttons, badges, counters, or tags.
     * Hidden when the panel is collapsible — replaced by the chevron button.
     */
    actions?: React.ReactNode;
    /** Title text. */
    children: React.ReactNode;
}
export declare const PanelHeader: React.ForwardRefExoticComponent<PanelHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface PanelBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Override default padding (var(--spacing-150) = 24px). */
    padding?: string;
    children: React.ReactNode;
}
export declare const PanelBody: React.ForwardRefExoticComponent<PanelBodyProps & React.RefAttributes<HTMLDivElement>>;
export interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Override default padding (var(--spacing-150) = 24px). */
    padding?: string;
    children: React.ReactNode;
}
export declare const PanelFooter: React.ForwardRefExoticComponent<PanelFooterProps & React.RefAttributes<HTMLDivElement>>;
