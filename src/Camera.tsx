import React from 'react'
export const Camera: React.FC<{
  'gps-camera': boolean
  'rotation-reader': boolean
}> = ({ children, ...rest }) => {
  //  <a-camera gps-camera rotation-reader></a-camera>
  return <a-camera {...rest}>{children}</a-camera>
}
