module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {

      fredericka: ['Fredericka the Great', 'cursive'],
      sans: ['Nunito', 'sans-serif'],
      serif: ['Scope One', 'serif'],
      
      cinzel: ['Cinzel', 'display'],
      molengo: ['Molengo', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('../src/images/ABOUT.png')",
        'footer-texture': "url('/img/footer-texture.png')",
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
  plugins: [
  ],
}
