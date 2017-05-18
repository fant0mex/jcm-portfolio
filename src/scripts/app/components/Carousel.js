import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'
import classNames from 'classnames'

class Carousel extends Component {
  state = {
    currentImg: 0,
    arrLength: fakeProjects.length,
    cssClasses: classNames(css(styles.slide), css(styles.show))
  }

  componentDidMount () {
    const slideTimer = setInterval(this.nextSlide, 3000)
    this.setState({ slideTimer })
  }

  componentWillUnmount () {
    clearInterval(this.state.slideTimer)
  }

  addTransition = () => {
    setTimeout(() => {
      this.setState({
        cssClasses: classNames(css(styles.slide), css(styles.show))
      })
    }, 20)
  }

  nextSlide = () => {
    this.setState({ cssClasses: classNames(css(styles.slide)) })
    this.state.currentImg < this.state.arrLength - 1
    ? (this.setState({ currentImg: this.state.currentImg + 1 }), this.addTransition())
    : (this.setState({ currentImg: 0 }), this.addTransition())
  }

  render () {
    return (
      <div className={css(styles.wrapper)}>
        {fakeProjects.map((item, i) => (
          <img
            key={item.slug}
            style={i === this.state.currentImg ? show : null}
            className={this.state.cssClasses}
            src={item.featuredImage.url}
          />
        ))}
      </div>
    )
  }
}

export default Carousel

const show = {
  display: 'block'
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1000px',
    margin: 'auto'
  },

  slide: {
    display: 'none',
    width: '100%',
    opacity: '0',
    transition: 'opacity 0.5s'
  },

  show: {
    opacity: '1'
  }
})
