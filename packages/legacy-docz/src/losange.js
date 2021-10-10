import React from 'react'
import Square from './square'

import { styles } from './colors'

export const Losange = ({ S = styles.purple, T = '', mask = '' }) => {
  return (
    <g style={S} transform={`${T}`} mask={mask}>
      <Square T='scale(.707) scale(.866,.5) rotate(45)' />
    </g>
  )
}

export default Losange
