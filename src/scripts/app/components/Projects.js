import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeProjects from 'data/fakeProjects'

class Projects extends Component {
  render () {
    return (
      <div className={css(styles.projectsWrapper)}>
        <h2>Projects Page Test</h2>
      </div>
    )
  }
}

export default Projects

const styles = StyleSheet.create({
  projectsWrapper: {
    padding: '1em'
  }
})
