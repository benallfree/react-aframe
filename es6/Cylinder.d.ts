import * as React from 'react';
import { Position, Radius, Height, Color } from './@types';
export interface CylinderParams {
    position?: Position;
    radius?: Radius;
    height?: Height;
    color?: Color;
    shadow?: boolean;
}
export declare const Cylinder: React.FC<CylinderParams>;
