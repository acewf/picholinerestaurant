module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      robot: 'Roboto, sans-serif',
    },
    extend: {
      colors: {
        greener: '#4D7C44',
        'bondi-blue': {
          DEFAULT: '#0096A8',
          '50': '#61EEFF',
          '100': '#4CECFF',
          '200': '#23E7FF',
          '300': '#00DFFA',
          '400': '#00BAD1',
          '500': '#0096A8',
          '600': '#006470',
          '700': '#003238',
          '800': '#000000',
          '900': '#000000'
        },
        'chalet-green': {
          DEFAULT: '#607338',
          '50': '#BBCC96',
          '100': '#B2C589',
          '200': '#A0B86D',
          '300': '#8EAA53',
          '400': '#778E45',
          '500': '#607338',
          '600': '#414D26',
          '700': '#212813',
          '800': '#020201',
          '900': '#000000'
        },
      },
    },
  },
  plugins: [],
}
