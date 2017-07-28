import React, { Component } from 'react'
import Carousel from 'app/components/Carousel'
import { StyleSheet, css } from 'aphrodite/no-important'

class Home extends Component {
  state = {
    currentImg: 0
  }

  componentDidMount () {
    this.props.getCarouselImages()
    const slider = setInterval(this.incrementSlider, 6000)
    this.setState({ slider })
  }

  componentWillUnmount () {
    clearInterval(this.state.slider)
  }

  incrementSlider = () => {
    const imagesArr = this.props.appState.carouselImages[0].images
    const { currentImg } = this.state
    currentImg < imagesArr.length - 1 ? this.setState({ currentImg: currentImg + 1 }) : this.setState({ currentImg: 0 })
  }

  render () {
    const { currentImg } = this.state
    return (
      <div className={css(styles.wrapper)}>
        {this.props.appState.carouselImages.length > 0 && (
          <Carousel featuredImage={this.props.appState.carouselImages[0].images[currentImg]} />
          )
        }
      </div>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em 0'
  }
})
