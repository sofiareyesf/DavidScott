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
        'textcol': 'rgb(var(--color-text) / <alpha-value>)',
        'bgcol': 'rgb(var(--color-background) / <alpha-value>)',
        'accentcol': 'rgb(var(--color-accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
