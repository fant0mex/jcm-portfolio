import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

const Reel = props => {
  const videoSrc = `https://player.vimeo.com/video/129602896?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1`

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.iframeWrapper)}>
        <iframe
          className={css(styles.iframe)}
          src={videoSrc}
          frameBorder='0' allowFullScreen='' />
      </div>
    </div>
  )
}

export default Reel

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em 0'
  },

  iframeWrapper: {
    textAlign: 'center'
  },

  iframe: {
    width: '420px',
    height: '236px',
    [styleVars.media.sm]: {
      width: '544px',
      height: '306px'
    },
    [styleVars.media.lg]: {
      width: '992px',
      height: '558px'
    }
  }
})
