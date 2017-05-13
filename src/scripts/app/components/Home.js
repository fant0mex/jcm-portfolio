import React from 'react'
import Carousel from 'app/components/Carousel'
import SocialIcons from 'app/components/SocialIcons'
import { StyleSheet, css } from 'aphrodite/no-important'

const Home = props => (
  <div className={css(styles.wrapper)}>
    <Carousel />
    <SocialIcons />
  </div>
)

export default Home

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em',
    color: 'red'
  }
})
