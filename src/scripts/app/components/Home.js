import React, { Component } from 'react'
import Carousel from 'app/components/Carousel'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'
// import styleVars from 'styles/variables'

class Home extends Component {
  state = {
    imgShown: fakeProjects[0].featuredImage.url
  }

  componentDidMount () {
    this.carouselImgTimer()
  }

  changeCarouselImg = () => {
    this.setState({
      imgShown: fakeProjects[i].featuredImage.url
    })
    i += 1
    if (i === fakeProjects.length) { i = 0 }
  }

  carouselImgTimer = () => {
    setInterval(this.changeCarouselImg, 3000)
  }

  render () {
    return (
      <div className={css(styles.wrapper)}>
        <Carousel onload={this.carouselImgTimer} img={this.state.imgShown} />
      </div>
    )
  }
}

export default Home

let i = 1
const styles = StyleSheet.create({
  wrapper: {
    padding: '1em',
    color: 'red'
  }
})
