import React from 'react'

export const Square = ({ S = {}, T = '' }) => {
  return (
    <polygon
      points='-100,100, 100,100, 100,-100, -100,-100'
      transform={`${T}`}
      style={S}
    />
  )
}

export default Square
