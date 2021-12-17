module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' :[
        '"Kanit"',
      ]
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
