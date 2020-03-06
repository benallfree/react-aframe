import * as React from 'react';
import { Rotation, Color, Radius, Position } from './typings';
export interface SphereParams {
    position?: Position;
    rotation?: Rotation;
    color?: Color;
    radius?: Radius;
    shadow?: boolean;
}
export declare const Sphere: React.FC<SphereParams>;
