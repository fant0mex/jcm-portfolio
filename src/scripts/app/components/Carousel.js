import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import 'styles/carousel.css'
import styleVars from 'styles/variables.js'

const Carousel = props => (
  <div className={css(styles.wrapper)}>
    <CSSTransitionGroup
      transitionName='carousel'
      transitionEnterTimeout={2900}
      transitionLeaveTimeout={2900}>
      <img
        className={css(styles.img)}
        src={props.featuredImage.url}
        key={props.featuredImage.url}
      />
    </CSSTransitionGroup>
  </div>
)

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    margin: 'auto',
    height: 260,
    [styleVars.media.sm]: {
      height: 340
    },
    [styleVars.media.md]: {
      height: 380
    },
    [styleVars.media.lg]: {
      height: 420
    },
    [styleVars.media.xl]: {
      height: 720
    }
  },

  img: {
    position: 'absolute',
    width: '100%',
    objectFit: 'cover',
    height: 260,
    [styleVars.media.sm]: {
      height: 340
    },
    [styleVars.media.md]: {
      height: 380
    },
    [styleVars.media.lg]: {
      height: 420
    },
    [styleVars.media.xl]: {
      height: 720
    }
  }
})
