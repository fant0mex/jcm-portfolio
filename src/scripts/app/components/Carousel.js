import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
// import styleVars from 'styles/variables'

const Carousel = props => (
  <div className={css(styles.wrapper)}>
    Carousel test
  </div>
)

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    color: 'blue'
  }
})
