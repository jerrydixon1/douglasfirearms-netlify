// Raw colors
const raw = {
  white: 'white',
  red: '#831B21',
  black: '#222',
  darkGrey: '#1D1D1D'
}

// Semantic colors
const { black, white, red, darkGrey } = raw
const semanticColors = {
  primary: red,
  backgroundDark: darkGrey,
  backgroundLight: white,
  accentDark: black,
  accentLight: white
}

// Export only semantic colors to discourage using raw colors directly
export default semanticColors