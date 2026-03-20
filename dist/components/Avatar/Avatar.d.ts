import { default as React } from 'react';

export type AvatarSize = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
export type StatusType = 'active' | 'away' | 'busy' | 'offline';
export interface AvatarProps {
    /** Full name — used to derive initials and as the default accessible label. */
    name: string;
    /** Image URL. Falls back to initials if omitted or the image fails to load. */
    src?: string;
    /** Avatar diameter. Defaults to 'l' (40px). */
    size?: AvatarSize;
    /** Renders the avatar as an <a>. Takes precedence over onClick. */
    href?: string;
    /** Renders the avatar as a <button>. */
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
    /** Overrides the default accessible label (name). */
    'aria-label'?: string;
    tabIndex?: number;
    id?: string;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>>;
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** Max avatars shown before a "+N" overflow counter appears. */
    max?: number;
    /** true = overlapping (default); false = evenly spaced. */
    overlap?: boolean;
    /** Size of the overflow counter. Match to the Avatar size used in the group. */
    size?: AvatarSize;
}
export declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface AvatarWithStatusProps {
    /** A single Avatar element. */
    children: React.ReactNode;
    /** User presence state. */
    status: StatusType;
    /** Must match the wrapped Avatar's size to scale the dot correctly. */
    size?: AvatarSize;
    className?: string;
    style?: React.CSSProperties;
}
export declare const AvatarWithStatus: React.ForwardRefExoticComponent<AvatarWithStatusProps & React.RefAttributes<HTMLDivElement>>;
