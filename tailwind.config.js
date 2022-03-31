module.exports = {
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      width: ['hover','group-hover'],
      borderRadius: ['hover','group-hover'],
      margin: ['hover','group-hover'],
    },
  },
  plugins: [],
}
