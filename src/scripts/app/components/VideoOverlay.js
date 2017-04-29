import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

const VideoOverlay = props => {
  const videoSrc = `https://player.vimeo.com/video/${props.vimeoId}?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1`

  return (
    <div className={css(styles.overlay)}>
      <iframe
        className={css(styles.iframe)}
        src={videoSrc}
        frameBorder='0' allowFullScreen='' />
    </div>
  )
}

export default VideoOverlay

const styles = StyleSheet.create({
  overlay: {
    background: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iframe: {
    width: '544px',
    height: '306px',
    [styleVars.media.lg]: {
      width: '992px',
      height: '558px'
    }
  }
})
