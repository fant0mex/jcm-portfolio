import React, { Component } from 'react'
import ProjectItem from 'app/components/ProjectItem'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeProjects from 'data/fakeProjects'

class Projects extends Component {
  render () {
    return (
      <div className={css(styles.projectsWrapper)}>
        <div className={css(styles.projectList)}>
          {fakeProjects.map(item => (
            <ProjectItem key={item.slug} post={item} />
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
  },

  projectList: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [styleVars.media.lg]: {
      flexDirection: 'row'
    }
  }
})
