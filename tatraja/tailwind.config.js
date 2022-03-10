module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    screens: {
      sm: {'max': '639px'},
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {

      fredericka: ['Fredericka the Great', 'cursive'],
      nunito: ['Nunito Sans', 'sans-serif'],
      serif: ['Scope One', 'serif'],
      link: ['Alegreya Sans SC, cursive'],
      cinzel: ['Cinzel', 'display'],
      molengo: ['Molengo', 'sans-serif'],

    },
    extend: {
      backgroundImage: {
        'wave': "url('~/src/images/haikei/footerWave.svg')",
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        lightestGray: '#eeeeee',
        lighterGray: '#cccccc',
        lightGray: '#999999',
        gray: '#eeeeee',
        darkGray: '#444444',
        darkerGray: '#222222',
        darkestGray: '#111111',


        black: '#000000',
        mint: '#75dab4',
        darkBlue: '#13161d',
        darkGreen: '#3E4F4E',
        darkestPurple: '#1a1a40',
        darkPurple: '#270082',
        purplePink: '#7a0bc0',
        pink: '#da759b',
        yellow: '#f0c808ff',

        //washed
        pinkWashed: '#B46D82 ',
        darkPinkWashed: '#7D4E57 ',
        greenWashed: '#70B69C',
        greenDarkWashed: '#192019',
        orangeWashed: '#D66853',
        darkBlueWashed: '#212D40',

      },
    }
  },
  plugins:
  
    [require("daisyui")],
}
