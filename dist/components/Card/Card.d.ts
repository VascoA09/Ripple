import { default as React } from 'react';

export type CardVariant = 'elevated' | 'flat';
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    /** Visual variant. 'flat' is for nesting inside elevated cards. Defaults to 'elevated'. */
    variant?: CardVariant;
    /**
     * Makes the entire card clickable. Only valid on elevated variant.
     * Renders as <a> when href is provided, <div role="button"> otherwise.
     */
    interactive?: boolean;
    /** Renders the interactive card as an <a> element for link navigation. */
    href?: string;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLElement>>;
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Override default 16px padding. Accepts any CSS padding value. */
    padding?: string;
}
export declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Heading element to use. Defaults to 'h3'. Adjust to maintain document outline. */
    as?: HeadingLevel;
}
export declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
export declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Override default 16px padding. Accepts any CSS padding value. */
    padding?: string;
}
export declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Override default 16px padding. Accepts any CSS padding value. */
    padding?: string;
}
export declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Override default 16px padding. Accepts any CSS padding value. */
    padding?: string;
}
export declare const CardSection: React.ForwardRefExoticComponent<CardSectionProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardDivider: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
export {};
