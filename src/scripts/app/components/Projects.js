import React, { Component } from 'react'
import ProjectItem from 'app/components/ProjectItem'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

class Projects extends Component {
  componentDidMount () {
    this.props.getProjectPosts()
  }

  render () {
    return (
      <div className={css(styles.projectsWrapper)}>
        <div className={css(styles.projectList)}>
          {this.props.appState.projectPosts.map(item => (
            <ProjectItem key={item.title} post={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default Projects

const styles = StyleSheet.create({
  projectsWrapper: {
    padding: '1em',
    maxWidth: '1700px',
    margin: 'auto'
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
