/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      'sm': '400px',
      'md': '630px',
      'lg': '1024px',
      'xl': '1300px',
    },
    extend: {
      colors: {
        'textcol': 'rgb(var(--color-text) / <alpha-value>)',
        'texttint': 'rgb(var(--color-text-tint) / <alpha-value>)',
        'bgcol': 'rgb(var(--color-background) / <alpha-value>)',
        'bglightcol': 'rgb(var(--color-background-light) / <alpha-value>)',
        'accentcol': 'rgb(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        changa: ['var(--font-changa)'],
        dancing: ['var(--font-dancing)'],
      },
    },
  },
  plugins: [],
  safelist: [
    "object-left-top", "object-top", "object-right-top", "object-left", "object-center", "object-right", "object-left-bottom", "object-bottom", "object-right-bottom"
  ]
}
