import * as React from 'react'
import { Color } from './@types'

export interface SceneParams {
  renderer?: { antialias?: boolean }
  background?: { color?: Color }
}

export const Scene: React.FC<SceneParams> = ({ children, ...rest }) => {
  return (
    <div className="cordova-aframe-root">
      <a-scene {...rest}>{children}</a-scene>
    </div>
  )
}
