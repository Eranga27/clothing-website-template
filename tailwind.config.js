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
        cream: {
          50: '#FDFBF7',
          100: '#F5F3EF',
          200: '#EBE7DF',
          300: '#DDD7CC',
          400: '#C8BEAD',
        },
        'near-black': '#111110',
        'editorial-charcoal': '#1A1A18',
        'editorial-muted': '#706F65',
        'accent-olive': '#5A5E4B',
        'accent-earth': '#8C7A6B',
        'accent-clay': '#A36A4F',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      letterSpacing: {
        'editorial': '0.15em',
        'widest-editorial': '0.25em',
      }
    },
  },
  plugins: [],
}
