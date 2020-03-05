import * as React from 'react'
import { Rotation, Color, Radius } from './@types'

export interface SphereParams {
  position?: Position
  rotation?: Rotation
  color?: Color
  radius?: Radius
  shadow?: boolean
}

export const Sphere: React.FC<SphereParams> = ({ children, ...rest }) => {
  return <a-sphere {...rest}>{children}</a-sphere>
}
