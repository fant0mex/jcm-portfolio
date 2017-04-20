import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeBlogPosts from 'data/fakeBlogPosts'

class Projects extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className={css(styles.projectsWrapper)}>
        <div className={css(styles.projectsList)}>

        </div>
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
