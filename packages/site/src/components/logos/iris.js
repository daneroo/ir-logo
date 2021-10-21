import React from 'react'
import { styles as baseStyles, irdetoGreen, irdetoPurple } from './colors'

const lightPurple = '#791e8a'
// const lighterPurple = '#9d27b3'
const darkGreen = '#94a219'
const darkerGreen = '#7a8615'
const styles = {
  ...baseStyles,
  fullPurple: {
    ...baseStyles.purple,
    fill: irdetoPurple
  },
  sepal: {
    fill: 'url(#sepal-gradient)',
    stroke: darkerGreen,
    strokeWidth: '2px',
    strokeLinejoin: 'round'
  },
  sepalHighlight: {
    fill: darkerGreen,
    stroke: 'none'
  },
  petal: {
    fill: 'url(#petal-gradient)',
    stroke: lightPurple,
    strokeWidth: '2px'
  },
  petalHighlight: {
    fill: darkerGreen,
    stroke: 'none'
  },
  stigmaTop: {
    fill: irdetoPurple
  }
}

export const Iris = ({ size = 256 }) => (
  <svg width={size} height={size} style={{ border: '0px solid red' }}>
    <defs>
      <linearGradient id='petal-gradient' x1='0' y1='0' x2='0' y2='.8'>
        <stop stopColor={irdetoGreen} offset='30%' />
        <stop stopColor={darkGreen} offset='90%' />
      </linearGradient>
      <linearGradient id='sepal-gradient' x1='0' y1='0' x2='0' y2='.8'>
        <stop stopColor={lightPurple} offset='0%' />
        <stop stopColor={irdetoPurple} offset='30%' />
      </linearGradient>
    </defs>

    <g transform={`scale(${size / 512})`}>
      {/* the last scale is overall zoon,
       default was 1 but adjusted after petal sepal scaling */}
      <g transform='translate(256, 256) scale (1,-1) scale (1.2)'>
        {/* top sepal - geometric */}

        {[0, 120, 240].map((angle) => (
          <SepalTop
            key={angle}
            S={styles.sepal}
            hS={styles.sepalHighlight}
            T={`rotate(${angle})`}
          />
        ))}

        {[0, 120, 240].map((angle) => (
          <PetalBottom
            key={angle}
            S={styles.petal}
            hS={styles.petalHighlight}
            T={`rotate(${angle})`}
          />
        ))}

        {[0, 120, 240].map((angle) => (
          <StigmaTop key={angle} S={styles.stigmaTop} T={`rotate(${angle})`} />
        ))}

        {/* plug up the hole */}
        <circle cx='0' cy='0' r='15' fill={irdetoPurple} />
      </g>
    </g>
  </svg>
)
export default Iris

// sepal original viewbox: 16,16 400,400
const SepalTop = ({ S = {}, hS = {}, T = '' }) => (
  <g transform={`${T}`} style={S}>
    {/* scale 1.5 default - can be asymmetric, and controls sepal aspect ratio */}
    <g transform='scale (1.7,-1.2) translate(-212 -232)'>
      {/* sepal top */}
      <path d='M 212,232 C200.879965,218.81778 200.442282,218.352956 200.114833,217.840259 C184.658119,193.639199 192.132204,136.769321 176.929762,103.169306 C167.229755,81.0910342 170.584055,76.5435489 178.716961,69.545951 C186.849867,62.5483531 199.128569,63.3292229 212.346579,66.6128284 C227.214956,62.9421108 238.68322,62.5135984 246.834036,69.4304789 C256.227713,77.4020667 256.227713,83.6270341 247.763396,103.169306 C234.714764,142.660216 240.102737,193.494166 224.78142,217.52201 C224.668006,217.699873 224.541782,217.872496 224.403537,218.039869 Z' />

      {/* sepal highlight top */}
      <g style={hS}>
        <path
          d='M262.447488,143.972517 C259.552598,142.155603 249.571388,136.786433 235.229763,131.783815 C231.614006,130.522574 219.488473,127.153751 220.326575,128.869063 C222.303256,132.914667 279.760748,146.175726 196.91508,129.771026 C191.290374,128.657248 195.48719,132.914667 228.741902,139.257997 C233.161408,140.101017 238.008062,140.497406 242.051166,141.477573 C246.172315,142.47666 262.882156,145.621569 258.213259,145.006559 C104.600324,124.771895 206.866035,140.912547 245.302476,145.601868 C260.302749,147.431931 195.518834,141.977601 179.787778,141.954272 C174.306706,141.946144 201.99675,145.096643 207.286654,145.601868 C215.386139,146.37543 251.693668,148.703403 261.362734,150.746847 C251.693668,150.746847 201.36954,147.116728 189.674534,147.045476 C179.868773,146.985734 151.588139,146.358187 160.696112,147.045476 C178.614174,148.397576 225.797952,152.432897 243.116734,152.911089 C246.81733,153.013267 200.299955,154.572134 178.063241,156.363069 C196.91508,157.301401 243.182117,156.087993 250.112289,156.363069 C254.024322,156.518348 194.721816,160.471016 188.111603,162.139577 C186.854457,162.456908 225.971722,163.388349 240.964937,160.368905 C247.681996,159.016174 259.244048,159.775338 262.984699,157.332575 C268.256257,153.890083 263.380229,149.512104 263.577993,145.601868 L262.447488,143.972517 Z'
          transform='translate(212.178759, 145.459439) scale(1, -1) rotate(-95.000000) translate(-212.178759, -145.459439)'
        />
      </g>
    </g>
  </g>
)

const PetalBottom = ({ S = {}, hS = {}, T = '' }) => (
  <g transform={`${T}`} style={S}>
    {/* scale 1.5 default - can be asymmetric, and controls petal aspect ratio */}
    <g transform='scale (1.6,-1.7) translate(-212 -232)'>
      {/* petal bottom */}
      <path d='M218.765087,225.951849 C221.327885,231.095798 223.633352,235.225073 225.681489,238.339674 C242.405786,263.772304 254,269.075716 254,287.421935 C254,308.702058 241.568003,329.22808 216.704008,349 C207.688651,343.891736 201.798296,340.303278 199.032942,338.234626 C179.188852,323.390046 171,306.487176 171,288.886202 C171,270.522614 178.990502,266.924902 203.401428,238.296077 C205.662929,235.643817 208.041303,231.659125 210.536549,226.342001 Z' />

      {/* petal highlight bottom */}
      <g style={hS}>
        <path
          d='M242.806132,265.369469 C241.423891,262.905182 227.257662,252.068844 220.409878,245.283777 C218.683441,243.573151 212.893788,239.004006 213.293962,241.33049 C214.23778,246.817556 241.672361,264.803572 202.115532,242.553824 C199.429869,241.043205 201.433748,246.817556 217.31208,255.421034 C219.422288,256.564424 221.73645,257.102048 223.666936,258.431451 C225.634686,259.786516 233.613236,264.051967 231.383949,263.217826 C158.037438,235.773488 206.866875,257.665106 225.219358,264.025247 C232.381631,266.507367 201.448857,259.109642 193.937654,259.078 C191.320573,259.066976 204.541908,263.340008 207.067711,264.025247 C210.935022,265.074431 228.271,268.231868 232.887749,271.003397 C228.271,271.003397 204.24243,266.079856 198.658343,265.983216 C193.976327,265.902188 180.472999,265.051043 184.821839,265.983216 C193.377285,267.817074 215.906414,273.290193 224.175719,273.938766 C225.942665,274.07735 203.731728,276.191646 193.114228,278.620698 C202.115532,279.89336 224.206938,278.24761 227.515929,278.620698 C229.383832,278.831303 201.0683,284.192319 197.912081,286.455394 C197.311824,286.885791 215.989385,288.149106 223.148287,284.053825 C226.355523,282.219112 229.512882,281.500495 233.662198,279.935642 C240.751458,277.262032 243.251493,272.882828 243.345921,267.579363 L242.806132,265.369469 Z'
          transform='translate(213.658454, 263.832069) scale(1, -1) rotate(-285.000000) translate(-213.658454, -263.832069) '
        />
      </g>
    </g>
  </g>
)

const StigmaTop = ({ S = {}, hS = {}, T = '' }) => (
  <g transform={`${T}`} style={S}>
    <g transform='scale (1.5,-1.5) translate(-212 -232)'>
      {/* stigma top */}
      <path
        d='M220.111522,224.501801 L219.498799,224.211669 L222.309905,179.632103 L222.341191,179.439244 L222.602539,178.451518 C222.830751,177.589023 222.939668,176.700464 222.926394,175.809648 C222.844545,170.316429 218.230774,165.920517 212.612144,166.001092 C211.737523,166.013634 210.868079,166.134685 210.024593,166.361331 C204.511547,167.842695 201.27315,173.416505 202.778696,178.809191 L202.899188,179.24078 L202.934051,179.446963 L205.808996,225.196822 Z'
        transform='translate(212.039121, 221.504710) rotate(-360.000000) translate(-212.039121, -221.504710) '
      />
    </g>
  </g>
)

// Working Copies from original SVG

// const Sepal3 = ({ S = {}, T = '' }) => (
//   <g transform={`${T}`} style={S}>
//     <g transform='scale (1.5,-1.5) translate(-212 -232)'>
//       {/* sepal all 3 */}
//       <path d='M214.238497,221.916688 C212.681089,222.036186 211.089046,222.027323 209.553792,221.888871 C210.393682,222.488636 211.22103,223.164052 212.015029,223.893399 C212.722113,223.195652 213.46895,222.531494 214.238497,221.916688 Z M224.403537,218.039869 C224.478476,218.056735 224.552661,218.075288 224.626065,218.095555 C252.306312,225.737887 284.80536,273.001581 318.585774,287.798839 C340.567532,297.715621 341.117663,303.339526 339.756043,313.981731 C338.394423,324.623936 328.747065,332.259692 316.727009,338.664072 C308.133841,351.340833 299.89799,359.333047 289.212457,359.646763 C276.897561,360.008316 272.732245,355.382264 265.946126,335.195791 C252.337299,304.216574 224.636445,275.82329 212.25385,251.177224 C197.031847,275.815511 162.495514,303.747871 150.628519,332.178893 C141.096882,354.330374 135.483434,354.978572 124.819087,353.802892 C114.154739,352.627211 106.351776,343.114585 99.7385923,331.208131 C86.9137909,322.837512 78.7790591,314.742399 78.2789023,304.063969 C77.7024801,291.757258 82.255133,287.511841 102.320097,280.374453 C140.003179,263.029937 173.430439,224.57562 201.408123,219.234997 C200.879965,218.81778 200.442282,218.352956 200.114833,217.840259 C184.658119,193.639199 192.132204,136.769321 176.929762,103.169306 C167.229755,81.0910342 170.584055,76.5435489 178.716961,69.545951 C186.849867,62.5483531 199.128569,63.3292229 212.346579,66.6128284 C227.214956,62.9421108 238.68322,62.5135984 246.834036,69.4304789 C256.227713,77.4020667 256.227713,83.6270341 247.763396,103.169306 C234.714764,142.660216 240.102737,193.494166 224.78142,217.52201 C224.668006,217.699873 224.541782,217.872496 224.403537,218.039869 Z' />
//     </g>
//   </g>
// )

// const Petal3 = ({ S = {}, T = '' }) => (
//   <g transform={`${T}`} style={S}>
//     <g transform="scale (1.5,-1.5) translate(-212 -232)">
//       {/* petal all 3 */}
//       <path d="M218.765087,225.951849 C221.327885,231.095798 223.633352,235.225073 225.681489,238.339674 C242.405786,263.772304 254,269.075716 254,287.421935 C254,308.702058 241.568003,329.22808 216.704008,349 C207.688651,343.891736 201.798296,340.303278 199.032942,338.234626 C179.188852,323.390046 171,306.487176 171,288.886202 C171,270.522614 178.990502,266.924902 203.401428,238.296077 C205.662929,235.643817 208.041303,231.659125 210.536549,226.342001 C208.616917,226.773002 206.889729,227.213315 205.354987,227.662936 C176.143931,236.220679 167.682433,245.757714 150.137857,240.393799 C129.787574,234.172093 113.793206,216.282087 102.154753,186.72378 C109.675646,179.595863 114.829479,175.012052 117.616251,172.972347 C137.614044,158.335484 156.172528,155.446367 173.004423,160.592394 C190.565609,165.961387 191.669921,174.654612 211.910739,206.369154 C212.161107,206.761446 212.433582,207.162675 212.728162,207.572842 C213.188798,206.991924 213.620973,206.430371 214.024687,205.888183 C232.203495,181.474013 233.221617,168.765142 250.461424,162.490365 C270.458198,155.212135 293.998343,159.874078 321.081858,176.476196 C319.365093,186.694989 318.007666,193.457438 317.009576,196.76354 C309.847312,220.488031 296.764562,233.964157 280.225056,239.984044 C262.968928,246.264761 256.855272,239.986635 221.603948,226.839503 C220.746689,226.519785 219.800402,226.2239 218.765087,225.951849 Z" />
//     </g>
//   </g>
// )

// const Stigma3 = ({ S = {}, hS = {}, T = '' }) => (
//   <g transform={`${T}`} style={S}>
//     <g transform="scale (1.5,-1.5) translate(-212 -232)">
//       {/* stigma top */}
//       <path
//         d="M220.111522,224.501801 L219.498799,224.211669 L222.309905,179.632103 L222.341191,179.439244 L222.602539,178.451518 C222.830751,177.589023 222.939668,176.700464 222.926394,175.809648 C222.844545,170.316429 218.230774,165.920517 212.612144,166.001092 C211.737523,166.013634 210.868079,166.134685 210.024593,166.361331 C204.511547,167.842695 201.27315,173.416505 202.778696,178.809191 L202.899188,179.24078 L202.934051,179.446963 L205.808996,225.196822 L169.471627,253.98901 L169.30737,254.094808 L168.398471,254.561507 C167.604808,254.969035 166.871601,255.482656 166.218477,256.088592 C162.190988,259.825099 162.011404,266.195238 165.83088,270.316778 C166.425437,270.958356 167.097167,271.52348 167.83,271.998656 C172.619815,275.104422 178.928874,273.781413 181.929014,269.054163 L182.169121,268.675831 L182.299017,268.511959 L213.42376,236.733114 L241.380894,270.778607 L241.489543,270.940992 L241.972033,271.841608 C242.39335,272.628038 242.919689,273.35217 243.536931,273.994619 C247.343158,277.956284 253.715462,278.024666 257.769715,274.133841 C258.400819,273.528177 258.954133,272.846687 259.416448,272.105673 C262.438146,267.262384 261.005231,260.977375 256.226341,258.060194 L255.843876,257.826726 L255.677762,257.69971 L221.79841,225.656859 C221.29496,225.180699 220.727125,224.793297 220.111522,224.501801 Z"
//         transform="translate(212.039121, 221.504710) rotate(-360.000000) translate(-212.039121, -221.504710) "
//       />
//     </g>
//   </g>
// )
