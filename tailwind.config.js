/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'shamrock': {
        '50': '#eefbf4',
        '100': '#d5f6e2',
        '200': '#afebc9',
        '300': '#7bdaaa',
        '400': '#4ac48b',
        '500': '#22a76d',
        '600': '#148757',
        '700': '#106c49',
        '800': '#0f563b',
        '900': '#0e4631',
        '950': '#06281d',
      },
      'hot-cinnamon': {
        '50': '#fef8ee',
        '100': '#fdf0d7',
        '200': '#fbdead',
        '300': '#f7c57a',
        '400': '#f3a244',
        '500': '#f0871f',
        '600': '#d76814',
        '700': '#bb5313',
        '800': '#954217',
        '900': '#783816',
        '950': '#411a09',
      },
      'white': '#ffffff'
    }
  },
  plugins: [],
}