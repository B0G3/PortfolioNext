/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#efefef',
        'muted': '#8b8b8b',
      },
      maxWidth: {
        'xxs': '5.5rem'
      }
    },
  },
  plugins: [],
}
