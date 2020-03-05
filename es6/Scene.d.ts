import * as React from 'react';
import { Color } from './@types';
export interface SceneParams {
    renderer?: {
        antialias?: boolean;
    };
    background?: {
        color?: Color;
    };
}
export declare const Scene: React.FC<SceneParams>;
