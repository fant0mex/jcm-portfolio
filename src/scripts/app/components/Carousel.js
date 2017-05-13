import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'

class Carousel extends Component {
  state = {
    currentImg: 0,
    arrLength: fakeProjects.length,
    imgContainerHeight: 0
  }

  componentDidMount () {
    const slideTimer = setInterval(this.nextSlide, 3000)
    this.setState({ slideTimer })
    setTimeout(this.setImgContainerHeight, 50)
  }

  componentWillUnmount () {
    clearInterval(this.state.slideTimer)
  }

  setImgContainerHeight = () => {
    this.setState({ imgContainerHeight: this.refs.img.height })
  }

  nextSlide = () => {
    this.state.currentImg < this.state.arrLength - 1
    ? this.setState({ currentImg: this.state.currentImg + 1 })
    : this.setState({ currentImg: 0 })
  }

  render () {
    return (
      <div style={{height: this.state.imgContainerHeight}} className={css(styles.wrapper)}>
        {fakeProjects.map((item, i) => (
          <img
            ref='img'
            key={item.slug}
            style={i === this.state.currentImg ? show : null}
            className={css(styles.slide)}
            src={item.featuredImage.url}
          />
        ))}
      </div>
    )
  }
}

export default Carousel

const show = {
  opacity: '1',
  zIndex: '2'
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1200px',
    height: '22em',
    margin: 'auto',
    position: 'relative'
  },

  slide: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    opacity: '0',
    zIndex: '1',
    transition: 'opacity 0.5s'
  }
})
