import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeProjects from 'data/fakeProjects'

class Projects extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className={css(styles.projectsWrapper)}>
        <div className={css(styles.projectsList)}>
          {fakeProjects.map(project => (
            <ProjectItem key={project.slug} post={project} />
          ))}
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
