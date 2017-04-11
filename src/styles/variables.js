const Palanquin = {
  fontFamily: 'Palanquin',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `url('src/assets/fonts/palanquin-regular.woff') format('woff')`
}

const width = {
  sm: 544,
  md: 768,
  lg: 992,
  xl: 1200
}

export default {
  font: {
    Palanquin: Palanquin
  },
  width: width,

  media: {
    sm: `@media (min-width: ${width.sm}px)`,
    md: `@media (min-width: ${width.md}px)`,
    lg: `@media (min-width: ${width.lg}px)`,
    xl: `@media (min-width: ${width.xl}px)`
  }
}
