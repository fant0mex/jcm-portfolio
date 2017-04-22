import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

const VideoOverlay = props => (
  <div className={css(styles.overlay)}>
    {video}
  </div>
)

export default VideoOverlay

const video = '<iframe id="vimeo-player" src="https://player.vimeo.com/video/210658426?title=0&byline=0&portrait=0&autoplay=1" width="1280" height="720" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

const styles = StyleSheet.create({
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)'
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
