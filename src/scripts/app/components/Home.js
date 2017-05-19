import React, { Component } from 'react'
import Carousel from 'app/components/Carousel'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'

class Home extends Component {
  state = {
    currentImg: 0
  }

  componentDidMount () {
    setInterval(this.incrementSlider, 6000)
  }

  componentWillUnmount () {
    clearInterval(this.incrementSlider)
  }

  incrementSlider = () => {
    const { currentImg } = this.state
    currentImg < fakeProjects.length - 1 ? this.setState({ currentImg: currentImg + 1 }) : this.setState({ currentImg: 0 })
  }

  render () {
    const { currentImg } = this.state
    return (
      <div className={css(styles.wrapper)}>
        <Carousel featuredImage={fakeProjects[currentImg].featuredImage.url} />
      </div>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em'
  }
})
