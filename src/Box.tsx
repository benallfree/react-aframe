import React from 'react'
import { GpsLocation } from './GpsLocation'
import { Color } from './Color'
export const Box: React.FC<{
  color: Color
  'gps-entity-place': GpsLocation
}> = ({ children, ...rest }) => {
  //     <a-box
  //     color="yellow"
  //     gps-entity-place="latitude: 40.469836; longitude: -3.446026"
  //   />
  return <a-box {...rest}>{children}</a-box>
}
