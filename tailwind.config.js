module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      // sans: ['Source Sans Pro', 'sans-serif'],
      // serif: ['Source Sans Pro', 'serif'],
      // mono: ['Courier', 'monospace'],
      // cursive: "'Playball', cursive",
    },
    extend: {
      colors: {
        // primary: 'rgb(197 157 95)',
      },
      backgroundImage: {},
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
