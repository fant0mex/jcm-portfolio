import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Carousel = props => {
  return (
    <div className={css(styles.wrapper)}>
      <img src={props.img} />
    </div>
  )
}

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1200px',
    margin: 'auto'
  }
})
