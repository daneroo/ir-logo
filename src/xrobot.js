import PropTypes from 'prop-types'
import React from 'react'
import { styles as baseStyles, irdetoGreen, irdetoPurple } from './colors'
import Losange from './losange'

const styles = {
  ...baseStyles,
  fullPurple: {
    ...baseStyles.purple,
    fill: irdetoPurple
  },
  head: {
    fill: irdetoPurple,
    // fill: 'none',
    stroke: irdetoPurple,
    strokeWidth: '30px',
    strokeLinejoin: 'round'
  },
  antenna: { fill: irdetoGreen, stroke: irdetoPurple, strokeWidth: '20px' },
  eye: { fill: irdetoGreen },
  mouth: {
    fill: 'none',
    // <!-- stroke: #5D176A; -->
    stroke: irdetoGreen,
    strokeWidth: '20px',
    strokeLinejoin: 'round'
  }
}

const Antenna = ({ T }) => {
  return (
    <g style={styles.antenna} transform={`${T}`}>
      <path d='M0,56 0,0' />
      <circle r='20' />
    </g>
  )
}

const Eye = ({ T }) => {
  return (
    <circle style={styles.eye} cx={0} cy={0} r={20} transform={`${T}`} />
  )
}

const Head = () => {
  return (
    <polygon style={styles.head} points='-150,100, 150,100, 150,-100, -150,-100' />
  )
}

const WholeHead = ({ T }) => {
  return (
    <g transform={`${T}`}>
      <Head />
      <Mouth class='mouth' T='translate( 0,40)' />

      <Eye T='translate( 60,-30)' />
      <Eye T='translate(-60,-30)' />

      <Antenna T='translate(0,-170)' />
    </g>
  )
}

const Mouth = ({ T }) => {
  return (
    <path style={styles.mouth} d='M-60,0 Q0,30 60,0' transform={`${T}`} />
  )
}

// react blue: fill: '#61dafb'
const ReactLogo = ({ S = { fill: irdetoGreen }, T }) => {
  return (
    // viewBox="0 0 23 20.46348
    <g style={S} transform={`${T}`}>
      <path d='M18.91 6.633q-.367-.126-.74-.234.062-.252.115-.506c.56-2.72.194-4.912-1.058-5.634-1.2-.692-3.162.03-5.144 1.755q-.293.255-.572.525-.187-.18-.38-.352C9.053.344 6.97-.432 5.72.29 4.523.984 4.168 3.045 4.67 5.623q.077.383.17.762c-.293.084-.578.173-.85.268-2.435.85-3.99 2.18-3.99 3.56 0 1.425 1.67 2.855 4.206 3.72q.308.106.622.196-.102.407-.18.82c-.482 2.533-.106 4.545 1.09 5.235 1.234.712 3.306-.02 5.325-1.784q.24-.208.48-.442.302.293.62.568c1.956 1.682 3.886 2.36 5.08 1.67 1.235-.715 1.636-2.876 1.115-5.505q-.06-.3-.138-.614.218-.064.428-.133C21.285 13.07 23 11.657 23 10.213c0-1.386-1.605-2.725-4.09-3.58zM12.73 2.756c1.698-1.478 3.285-2.06 4.01-1.644.77.444 1.068 2.235.584 4.584q-.047.23-.103.457a23.538 23.538 0 0 0-3.076-.486A23.08 23.08 0 0 0 12.2 3.24q.258-.248.528-.484zM6.79 11.39q.313.604.653 1.19.347.6.722 1.183a20.922 20.922 0 0 1-2.12-.34c.204-.657.454-1.34.746-2.032zm0-2.31c-.286-.678-.53-1.345-.73-1.99.655-.147 1.355-.267 2.084-.358q-.366.57-.705 1.16-.34.586-.65 1.188zm.522 1.156q.454-.945.98-1.854.522-.91 1.114-1.775c.684-.052 1.385-.08 2.094-.08.712 0 1.414.028 2.098.08q.585.865 1.108 1.77.526.906.992 1.845-.46.948-.988 1.862-.523.908-1.104 1.78c-.682.05-1.387.074-2.106.074-.716 0-1.412-.022-2.082-.066q-.596-.87-1.124-1.783-.526-.91-.982-1.854zm8.25 2.34q.346-.603.666-1.22A20.867 20.867 0 0 1 17 13.38a20.852 20.852 0 0 1-2.145.365q.364-.578.706-1.17zm.656-3.495q-.318-.604-.66-1.196-.338-.582-.7-1.15c.733.093 1.436.216 2.097.367a20.96 20.96 0 0 1-.737 1.98zM11.51 3.945a21.013 21.013 0 0 1 1.354 1.634q-1.358-.065-2.718 0c.447-.59.905-1.138 1.365-1.634zM6.214 1.14c.77-.445 2.47.19 4.264 1.783.115.102.23.208.345.318a23.545 23.545 0 0 0-1.96 2.426 24.008 24.008 0 0 0-3.068.477q-.088-.352-.158-.71v.002c-.433-2.21-.146-3.876.577-4.294zM5.09 13.183q-.285-.082-.566-.177A8.324 8.324 0 0 1 1.84 11.58a2.03 2.03 0 0 1-.857-1.368c0-.837 1.248-1.905 3.33-2.63q.393-.138.792-.25a23.565 23.565 0 0 0 1.12 2.904 23.922 23.922 0 0 0-1.134 2.946zm5.326 4.48a8.322 8.322 0 0 1-2.575 1.61 2.03 2.03 0 0 1-1.612.062c-.725-.42-1.027-2.034-.616-4.2q.074-.385.168-.764a23.104 23.104 0 0 0 3.1.448 23.91 23.91 0 0 0 1.974 2.44q-.214.207-.438.403zm1.122-1.112c-.466-.502-.93-1.058-1.384-1.656q.66.026 1.346.026.703 0 1.388-.03a20.894 20.894 0 0 1-1.35 1.66zm5.967 1.367a2.03 2.03 0 0 1-.753 1.428c-.725.42-2.275-.126-3.947-1.564q-.287-.246-.578-.526a23.09 23.09 0 0 0 1.928-2.448 22.936 22.936 0 0 0 3.115-.48q.07.284.124.556a8.32 8.32 0 0 1 .11 3.035zm.834-4.907c-.127.042-.256.082-.388.12a23.06 23.06 0 0 0-1.164-2.913 23.05 23.05 0 0 0 1.12-2.87c.234.067.463.14.683.215 2.13.732 3.428 1.816 3.428 2.65 0 .89-1.403 2.044-3.68 2.798z' />
      <path d='M11.5 8.159a2.054 2.054 0 1 1-2.054 2.052A2.054 2.054 0 0 1 11.5 8.16' />
    </g>
  )
}

// const Hex = () => (
//   <polygon points='0,100 86.6,50 86.6,-50 0,-100 -86.6,-50 -86.6,50' />
// )

const XRobot = ({ size = 256 }) => (
  <svg width={size} height={size}>

    <defs>
      <mask id='mask'>
        <Losange S={styles.whitemask} />
        <Losange S={styles.blackmask} T='translate(0,-40)' />
      </mask>
    </defs>

    {/* thistranslate is wrong, and 0 for size=512 */}
    <g transform={`scale(${size / 512},${size / 512})`} >
      <g transform='translate(256, 256)' >
        <g transform='scale(1.536) translate(0,70)' >
          <g transform='scale(.75) translate(0,50)' >
            <Losange S={styles.fullPurple} mask='url(#mask)' />
          </g>
          <g transform='scale(.85) translate(0,-3.5)'>
            <Losange S={styles.fullPurple} mask='url(#mask)' />
          </g>
          <g transform='scale(.95) translate(0, -50)' >
            <Losange S={styles.fullPurple} />
            {/* Heart is a losange or a react logo */}
            {/* <Losange S={styles.green} T='scale(.333) translate(100,0)' /> */}
            <ReactLogo T='scale(1) translate(25,-10)' />
          </g>

          <WholeHead T='translate(0, -140) scale(.40)' />
        </g>
      </g>

    </g>
  </svg>
)

XRobot.propTypes = {
  siteTitle: PropTypes.string
}

XRobot.defaultProps = {
  siteTitle: ''
}

export default XRobot
