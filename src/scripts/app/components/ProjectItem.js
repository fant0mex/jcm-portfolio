import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const ProjectItem = props => (
  <div>
    <div className={css(styles.imgWrapper)}>
      <img src={props.post.featuredImage.url} />
    </div>
    <div>
      <h2 className={css(styles.postTitle)} >{props.post.title}</h2>
    </div>
  </div>
)

export default ProjectItem

ProjectItem.propTypes = {
  post: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  imgWrapper: {
    padding: '1em'
  },

  postTitle: {
    margin: '1em 0',
    fontSize: '1.2em',
    textAlign: 'center'
  }
})
