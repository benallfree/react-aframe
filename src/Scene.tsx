import React from 'react'
export const Scene: React.FC = ({ children, ...rest }) => {
  return <a-scene {...rest}>{children}</a-scene>
}
