import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'

class App extends Component {
  render () {
    return (
      <Router>
        <h1 className={css(styles.heading)}>Home Page</h1>
      </Router>
    )
  }
}

export default App

const styles = StyleSheet.create({
  heading: {
    color: 'green'
  }
})
