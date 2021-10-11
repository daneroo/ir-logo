
export const irdetoPurple = '#5D176A'
export const irdetoGreen = '#AEBF1E'

// reused many places, starting with Losange
export const styles = {
  green: { fill: irdetoGreen },
  purple: {
    // fill: irdetoPurple,
    fill: 'none',
    stroke: irdetoPurple,
    strokeWidth: '40px',
    strokeLinejoin: 'round'
  },
  whitemask: {
    fill: '#fff',
    stroke: '#fff',
    strokeWidth: '50px',
    strokeLinejoin: 'round'
  },
  blackmask: {
    fill: '#000',
    stroke: '#000',
    strokeWidth: '50px',
    strokeLinejoin: 'round'
  }
}

export const reactBlue = '#61dafb'

export default {irdetoGreen, irdetoPurple, reactBlue, styles}