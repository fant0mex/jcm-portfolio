import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import 'styles/carousel.css'

const Carousel = props => (
  <div className={css(styles.wrapper)}>
    <CSSTransitionGroup
      transitionName='carousel'
      transitionEnterTimeout={2900}
      transitionLeaveTimeout={2900}>
      <img
        className={css(styles.img)}
        style={{}}
        src={props.featuredImage}
        key={props.featuredImage}
      />
    </CSSTransitionGroup>
  </div>
)

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative'
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 'calc(50% - 400px)',
    width: 800,
    height: 600
  }
})
