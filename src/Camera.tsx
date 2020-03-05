import * as React from 'react'

export interface CameraParams {
  'gps-camera': boolean
  'rotation-reader': boolean
}

export const Camera: React.FC<CameraParams> = ({ children, ...rest }) => {
  //  <a-camera gps-camera rotation-reader></a-camera>
  return <a-camera {...rest}>{children}</a-camera>
}
