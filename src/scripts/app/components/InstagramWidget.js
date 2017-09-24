import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

const InstagramWidget = props => (
  <div className={css(styles.instaWidget)}>
    <div className={css(styles.instaWidgetTitle)}>
      <a href='https://www.instagram.com/Jamesm402/' target='_blank'>
        <img className={css(styles.instaProfilePic)} src={props.profilePic} />
        <h2>Instagram</h2>
      </a>
    </div>
    {props.feed.map((item, index) => (
      <div key={index} className={css(styles.instaImgWrapper)}>
        <a href={item.link} target='_blank'><img src={item.img.url} className={css(styles.instaImg)} /></a>
      </div>
    ))}
  </div>
)

export default InstagramWidget

InstagramWidget.propTypes = {
  feed: PropTypes.array.isRequired,
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
    fontFamily: [styleVars.font.Palanquin],
    textAlign: 'center',
    fontSize: '2.5em',
    textTransform: 'uppercase',
    ':not(false) > a': {
      display: 'flex',
      alignItems: 'center',
      color: '#000'
    }
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
    width: '100%',
    height: '116px',
    objectFit: 'cover'
  }
})
