import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { StyleSheet, css } from 'aphrodite/no-important'

class Photography extends Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <Masonry>
          <div className={css(styles.red)} />
          <div className={css(styles.blue)} />
          <div className={css(styles.yellow)} />
          <div className={css(styles.green)} />
        </Masonry>
      </div>
    )
  }
}

export default Photography

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1200px',
    padding: '1em'
  },

  red: {
    backgroundColor: 'red',
    width: '300px',
    height: '300px'
  },

  blue: {
    backgroundColor: 'blue',
    width: '300px',
    height: '500px'
  },

  yellow: {
    backgroundColor: 'yellow',
    width: '450px',
    height: '200px'
  },

  green: {
    backgroundColor: 'green',
    width: '300px',
    height: '300px'
  }
})
