import * as React from 'react';
import { Position, Rotation, Color, GpsLocation } from './@types';
export interface BoxParams {
    position?: Position;
    rotation?: Rotation;
    color?: Color;
    shadow?: boolean;
    'gps-entity-place'?: GpsLocation;
}
export declare const Box: React.FC<BoxParams>;
