import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Page, Main } from 'app/widgets/layout'
import { StyleSheet, css } from 'aphrodite/no-important'

class App extends Component {
  render () {
    return (
      <Router>
        <Page>
          <Main>
            <h1 className={css(styles.heading)}>Home Page</h1>
          </Main>
        </Page>
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
