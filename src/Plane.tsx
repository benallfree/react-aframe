import * as React from 'react'
import { Position, Rotation, Width, Height, Color } from './typings'

export interface PlaneParams {
  position?: Position
  rotation?: Rotation
  width?: Width
  height?: Height
  color?: Color
  shadow?: boolean
}

export const Plane: React.FC<PlaneParams> = ({ children, ...rest }) => {
  return <a-cylinder {...rest}>{children}</a-cylinder>
}
