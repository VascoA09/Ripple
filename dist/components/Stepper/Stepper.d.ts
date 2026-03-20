import { default as React } from 'react';

export type StepperVariant = 'ordered' | 'unordered' | 'icons';
export type StepType = 'default' | 'checked' | 'notice' | 'error';
export interface StepperProps extends React.OlHTMLAttributes<HTMLOListElement> {
    /**
     * Visual style of the step indicators.
     * - 'ordered'   — numbered circles (default)
     * - 'unordered' — filled dot circles
     * - 'icons'     — custom icon per step (pass `icon` on each StepperStep)
     */
    variant?: StepperVariant;
    /** When true, steps show a hover affordance and fire their onClick handler. */
    interactive?: boolean;
}
export declare function Stepper({ variant, interactive, children, className, ...rest }: StepperProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Stepper {
    var displayName: string;
}
export interface StepperStepProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /** Step label. Keep to one line where possible. */
    title: string;
    /** Supporting text rendered below the title. */
    description?: string;
    /**
     * Status of this step.
     * - 'default' — pending / not yet started
     * - 'checked' — completed
     * - 'notice'  — completed with warnings
     * - 'error'   — has errors that must be resolved
     */
    type?: StepType;
    /** Marks this as the step the user is currently working on. */
    active?: boolean;
    /** Prevents the step from being interacted with. */
    disabled?: boolean;
    /** Icon shown in the indicator circle. Only used when variant="icons". */
    icon?: React.ReactNode;
    /** Metadata or supplementary content rendered below the description. */
    extras?: React.ReactNode;
    /** Called when the step is clicked. Requires `interactive` on the parent Stepper. */
    onClick?: () => void;
    /** @internal Injected by the parent Stepper via cloneElement. */
    _stepNumber?: number;
}
export declare function StepperStep({ title, description, type, active, disabled, icon, extras, onClick, _stepNumber, children, className, ...rest }: StepperStepProps): import("react/jsx-runtime").JSX.Element;
export declare namespace StepperStep {
    var displayName: string;
}
