import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const InstagramWidget = props => (
  <div className={css(styles.instaWidget)}>
    <h2 className={css(styles.instaWidgetTitle)}>Instagram</h2>
    {props.images.map((image, index) => (
      <div key={index} className={css(styles.instaImgWrapper)}>
        <img src={image.url} className={css(styles.instaImg)} />
      </div>
    )).slice(0, 6)}
  </div>
)

export default InstagramWidget

InstagramWidget.propTypes = {
  images: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  instaWidget: {
    maxWidth: '26em',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    margin: '1rem'
  },

  instaWidgetTitle: {
    width: '100%',
    fontFamily: 'Palanquin',
    textAlign: 'center',
    fontSize: '2em',
    textTransform: 'uppercase'
  },

  instaImgWrapper: {
    width: '120px',
    height: '120px',
    padding: '4px'
  },

  instaImg: {
    width: '100%'
  }
})
