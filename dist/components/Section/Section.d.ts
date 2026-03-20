import { default as React } from 'react';

export type SectionVariant = 'flat' | 'elevated' | 'no-padding';
export type SectionHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    /** Visual style. Defaults to 'flat'. */
    variant?: SectionVariant;
    /**
     * Section heading text. Renders the header block when present.
     * Choose the level that fits the page's document outline.
     */
    heading?: React.ReactNode;
    /** Heading element level. Defaults to 'h2'. */
    headingLevel?: SectionHeadingLevel;
    /** Optional supporting text below the heading. Clamped to 2 lines. */
    description?: React.ReactNode;
    /**
     * Renders a horizontal rule as a sibling AFTER the section element.
     * Use to visually separate sequential sections.
     */
    divider?: boolean;
    children?: React.ReactNode;
}
export declare const Section: React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLElement>>;
