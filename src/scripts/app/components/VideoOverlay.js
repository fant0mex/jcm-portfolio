import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
// import fakeProjects from 'data/fakeProjects'

const VideoOverlay = props => (
  <div className={css(styles.overlay)}>
    <iframe
      src=''
      width='1280' height='720' frameBorder='0' allowFullScreen='' />
  </div>
)

export default VideoOverlay

// const videoSrc = `https://player.vimeo.com/video/${props.vimeoId}?title=0&amp;byline=0&amp;portrait=0`

const styles = StyleSheet.create({
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
