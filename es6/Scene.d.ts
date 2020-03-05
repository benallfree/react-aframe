import * as React from 'react';
import { Color } from './typings';
export interface SceneParams {
    renderer?: {
        antialias?: boolean;
    };
    background?: {
        color?: Color;
    };
}
export declare const Scene: React.FC<SceneParams>;
