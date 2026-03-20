import { default as React } from 'react';

export type BannerAlertVariant = 'informative' | 'positive' | 'notice' | 'negative';
export interface BannerAlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Semantic variant. Controls visual style, icon, and ARIA role. Defaults to 'informative'. */
    variant?: BannerAlertVariant;
    /** Optional heading above the message. Keep under 50 characters. */
    title?: string;
    /**
     * Message content. May include links. Required.
     * Passed as children to remain composable with inline elements.
     */
    children: React.ReactNode;
    /**
     * Up to two action buttons, right-aligned below the message.
     * Use Button variant="outline" color="neutral" for primary action,
     * variant="ghost" color="neutral" for secondary.
     */
    actions?: React.ReactNode;
    /**
     * Callback fired when the close button is clicked.
     * Presence of this prop renders the close button — consumer is responsible
     * for unmounting or hiding the banner in response.
     */
    onClose?: () => void;
}
export declare const BannerAlert: React.ForwardRefExoticComponent<BannerAlertProps & React.RefAttributes<HTMLDivElement>>;
