/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        naxis: {
          gold: {
            DEFAULT: '#B8912F',
            light: '#D4AF37',
            dark: '#947220',
            subtle: '#E8D9B5',
            muted: 'rgba(184, 145, 47, 0.15)',
          },
          brown: {
            DEFAULT: '#3E2A1E',
            deep: '#241810',
            espresso: '#1A120B',
            light: '#5B4030',
            muted: '#7A6253',
          },
          emerald: {
            DEFAULT: '#0B4A3B',
            dark: '#073228',
            light: '#136753',
            muted: 'rgba(11, 74, 59, 0.15)',
          },
          sand: '#FAF8F5',
          cream: '#F5F2EB',
          taupe: '#EBE7DF',
          charcoal: '#141414',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#EBE7DF',
          400: '#C8BEAD',
        },
        'near-black': '#120F0D',
        'editorial-charcoal': '#1A1412',
        'editorial-muted': '#7D756F',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'var(--font-fraunces)', 'Cormorant Garamond', 'Fraunces', 'Didot', 'Bodoni MT', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
      },
      letterSpacing: {
        'editorial': '0.15em',
        'widest-editorial': '0.25em',
        'super-wide': '0.35em',
      }
    },
  },
  plugins: [],
}

