// module.exports = {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  // content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [
  //   './components/**/*.{html,js,jsx,ts,tsx}',
  //   './pages/**/*.{html,js,jsx,ts,tsx}',
  //   './index.html',
  // ],
  theme: {
    colors: {
      'primary': '#FDF4F5',
      'secondary': '#000',
      'tertiary' : '#1D267D',
      'quaternary' : '#FFF8DE',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'red': '#D21312',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      backgroundColor: {
        'custom-red': '#4c0519',
      },
    },
  },
  plugins: [],
};
