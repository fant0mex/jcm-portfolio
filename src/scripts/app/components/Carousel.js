import React from 'react'
import Slider from 'react-slick'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'
// import styleVars from 'styles/variables'

const Carousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className={css(styles.wrapper)}>
      <Slider {...settings}>
        {fakeProjects.map((item, index) => (
          <div key={index}>
            <img src={item.featuredImage.url} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1400px'
  }
})
