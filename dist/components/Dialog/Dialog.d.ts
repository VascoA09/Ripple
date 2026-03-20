import { default as React } from 'react';

export type DialogSize = 'small' | 'medium';
export interface DialogProps {
    /** Controls dialog visibility. */
    open: boolean;
    /** Called when the dialog should close (backdrop click, Escape, header X). */
    onClose: () => void;
    /**
     * Dialog width.
     * - 'small'  — max 400px. Confirmations, short prompts.
     * - 'medium' — max 640px. Forms, detail panels, longer content. Default.
     */
    size?: DialogSize;
    children: React.ReactNode;
    className?: string;
}
export declare function Dialog({ open, onClose, size, children, className }: DialogProps): React.ReactPortal | null;
export declare namespace Dialog {
    var displayName: string;
}
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon rendered to the left of the title.
     * Use a Lucide icon at 20px. Always decorative — meaning comes from the title text.
     */
    icon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const DialogBody: React.ForwardRefExoticComponent<DialogBodyProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const DialogFooter: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
