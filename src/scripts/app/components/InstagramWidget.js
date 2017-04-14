import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const InstagramWidget = props => (
  <div className={css(styles.instaWidget)}>
    <h2>Instagram Widget</h2>
    {props.images.map((image, index) => (
      <img key={index} src={image.url} />
    ))}
  </div>
)

export default InstagramWidget

InstagramWidget.propTypes = {
  images: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  instaWidget: {
    width: '300px',
    height: '200px',
    backgroundColor: '#e6e6e6',
    margin: '1rem',
    padding: '1rem 1rem 0'
  }
})
