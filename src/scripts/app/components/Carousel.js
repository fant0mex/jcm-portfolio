import React from 'react'
import Slider from 'react-slick'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'

const Carousel = props => {
  return (
    <div className={css(styles.wrapper)}>
      <Slider {...settings}>
        {fakeProjects.map(item => (
          <img key={item.slug} src={item.featuredImage.url} />
        ))}
      </Slider>
    </div>
  )
}

export default Carousel

const settings = {
  arrows: false,
  autoplay: true,
  dots: false,
  fade: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1200px',
    margin: 'auto',
    overflow: 'hidden'
  }
})
