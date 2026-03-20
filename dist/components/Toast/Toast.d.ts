import { default as React } from 'react';

export type ToastVariant = 'neutral' | 'positive' | 'notice' | 'negative';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export interface ToastConfig {
    variant?: ToastVariant;
    title: string;
    description?: string;
    timestamp?: string;
    /** Custom icon component (Neutral variant only — ignored for other variants). */
    icon?: React.ElementType;
    action?: {
        label: string;
        onClick: () => void;
    };
    showCloseButton?: boolean;
    /**
     * Auto-dismiss delay in ms. 0 disables auto-dismiss.
     * Defaults: neutral/positive → 6000, notice/negative → 0.
     */
    duration?: number;
    /** Show a progress bar indicating time remaining before auto-dismiss. */
    showProgress?: boolean;
}
export interface ToastContextValue {
    /** Add a toast. Returns the generated id. */
    addToast: (config: ToastConfig) => string;
    /** Trigger the exit animation and remove a toast by id. */
    removeToast: (id: string) => void;
    /** Trigger exit animation on all visible toasts. */
    removeAllToasts: () => void;
    /** Update the container position at runtime. */
    setPosition: React.Dispatch<React.SetStateAction<ToastPosition>>;
}
export interface ToastProviderProps {
    children: React.ReactNode;
    /** Where toasts appear on screen. Default: 'top-right'. */
    position?: ToastPosition;
    /** Maximum toasts shown simultaneously. Oldest removed when exceeded. Default: 5. */
    maxToasts?: number;
}
export declare function ToastProvider({ children, position: initialPosition, maxToasts, }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useToast(): ToastContextValue;
