
export type MobileStepperVariant = 'progress-bar' | 'active-only';
export type MobileStepperType = 'default' | 'checked' | 'notice' | 'error';
export interface MobileStepperProps {
    /** Visual layout to render. */
    variant?: MobileStepperVariant;
    /** 1-based index of the current step. */
    current: number;
    /** Total number of steps in the flow. */
    total: number;
    /** Name of the current step. */
    title: string;
    /** Supporting text for the current step. */
    description?: string;
    /**
     * Ordered list of all step names. Required for `active-only` — used to
     * render the step labels row. Must have the same length as `total`.
     */
    steps?: string[];
    /**
     * Status of the current step. Affects indicator colour in `active-only`.
     * - 'default'  — normal active step (primary fill)
     * - 'checked'  — step marked as complete (primary fill, Check icon)
     * - 'notice'   — step has a warning (notice fill, AlertCircle icon)
     * - 'error'    — step has errors to resolve (negative fill, XCircle icon)
     */
    type?: MobileStepperType;
    /** Applied to the root element. */
    className?: string;
}
export declare function MobileStepper({ variant, current, total, title, description, steps, type, className, }: MobileStepperProps): import("react/jsx-runtime").JSX.Element;
export declare namespace MobileStepper {
    var displayName: string;
}
