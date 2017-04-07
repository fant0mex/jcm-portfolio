import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

class App extends Component {
  render () {
    return (
      <h1 className={css(styles.heading)}>James' Site</h1>
    )
  }
}

export default App

const styles = StyleSheet.create({
  heading: {
    color: 'green'
  }
})
