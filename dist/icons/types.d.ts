import { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
    /** Icon size in px (width and height). @default 24 */
    size?: number | string;
    /** Icon fill color. @default 'currentColor' */
    color?: string;
}
