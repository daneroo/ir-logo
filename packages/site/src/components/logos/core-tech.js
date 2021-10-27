import React from 'react'
import { styles as baseStyles, irdetoGreen, irdetoPurple } from './colors'

const lightPurple = '#791e8a'
// const lighterPurple = '#9d27b3'
const darkGreen = '#94a219'
const darkerGreen = '#7a8615'
const styles = {
  triangle: {
    fill: irdetoPurple,
    // stroke: 'none'
    stroke: irdetoPurple,
    strokeWidth: '4px',
    strokeLinejoin: 'round'
  }
}

function steps (start, end, step) {
  return Array.from(
    { length: (end - start) / step },
    (_ignore, i) => start + i * step
  )
}
export const CoreTech = ({ size = 256, variant = 'torus' }) => (
  <svg width={size} height={size} style={{ border: '0px solid red' }}>
    <g transform={`scale(${size / 512})`}>
      <g transform="translate(256, 256) scale (1,-1)">
        {/* angle=0 is top */}
        {steps(-45, 235, 8).map((angle) => (
          <TriangleTop
            key={angle}
            S={styles.triangle}
            T={`scale(${(angle + 360) % 30 < 15 ? 0.9 : 1})rotate(${angle})`}
            T={`rotate(${angle})`}
            variant={variant}
          />
        ))}
        <circle cx="0" cy="0" r="40" fill={irdetoGreen} />
      </g>
    </g>
  </svg>
)
export default CoreTech

// sepal original viewbox: 16,16 400,400
const TriangleTop = ({ S = {}, T = '', variant = 'torus' }) => (
  <g transform={`${T}`} style={S}>
    {/* scale 1.5 default - can be asymmetric, and controls sepal aspect ratio */}
    <g transform="scale (1)">
      {variant === 'simple' && <path d="M 0,100 L -8,250 L 8,250 Z" />}

      {variant === 'double' && (
        <>
          <path d="M 0,100 L 0,200 L 12,180 Z" />
          <path d="M 0,100 L 0,240 L 15,250 Z" />
        </>
      )}

      {variant === 'torus' && (
        <>
          <path d="M 0,150 L 0,100 L 8,100 Z" />
          <path d="M 0,150 L -16,250 L 0,250 Z" />
        </>
      )}
    </g>
  </g>
)
