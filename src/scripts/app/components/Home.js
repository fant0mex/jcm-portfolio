import React, { Component } from 'react'
import Carousel from 'app/components/Carousel'
import { StyleSheet, css } from 'aphrodite/no-important'
// import styleVars from 'styles/variables'

class Home extends Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        Homepage Test
        <Carousel />
      </div>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em',
    color: 'red'
  }
})
