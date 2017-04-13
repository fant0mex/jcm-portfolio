import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const InstagramWidget = props => (
  <div className={css(styles.instaWidget)}>
    <h2>Instagram Widget</h2>
  </div>
)

export default InstagramWidget

const styles = StyleSheet.create({
  instaWidget: {
    width: '300px',
    height: '200px',
    backgroundColor: '#e6e6e6',
    margin: '1rem',
    padding: '1rem 1rem 0'
  }
})
