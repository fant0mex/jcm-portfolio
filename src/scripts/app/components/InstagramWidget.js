import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const InstagramWidget = props => (
  <div className={css(styles.instaWidget)}>
    <div className={css(styles.instaWidgetTitle)}>
      <img className={css(styles.instaProfilePic)} src={props.profilePic} />
      <h2>Instagram</h2>
    </div>
    {props.images.map((image, index) => (
      <div key={index} className={css(styles.instaImgWrapper)}>
        <img src={image.url} className={css(styles.instaImg)} />
      </div>
    ))}
  </div>
)

export default InstagramWidget

InstagramWidget.propTypes = {
  images: PropTypes.array.isRequired,
  profilePic: PropTypes.string.isRequired
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
    display: 'flex',
    marginBottom: '0.25em',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Palanquin',
    textAlign: 'center',
    fontSize: '2.5em',
    textTransform: 'uppercase'
  },

  instaProfilePic: {
    width: '80px',
    height: '80px',
    marginRight: '0.5em',
    borderRadius: '50%'
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
