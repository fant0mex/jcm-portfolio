import React, { Component } from 'react'
import Carousel from 'app/components/Carousel'
import SocialIcons from 'app/components/SocialIcons'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'
// import styleVars from 'styles/variables'

class Home extends Component {
  state = {
    imgShown: fakeProjects[0].featuredImage.url
  }

  componentDidMount () {
    const carouselImgTimer = setInterval(this.changeCarouselImg, 3000)
    this.setState({ carouselImgTimer })
  }

  componentWillUnmount () {
    clearInterval(this.state.carouselImgTimer)
  }

  changeCarouselImg = () => {
    this.setState({
      imgShown: fakeProjects[i].featuredImage.url
    })
    i += 1
    if (i === fakeProjects.length) { i = 0 }
  }

  render () {
    return (
      <div className={css(styles.wrapper)}>
        <Carousel onload={this.carouselImgTimer} img={this.state.imgShown} />
        <SocialIcons />
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
