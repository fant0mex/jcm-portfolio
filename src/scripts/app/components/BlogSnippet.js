import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const BlogSnippet = props => (
  <div>
    <div className={css(styles.imgWrapper)}>
      <img src={props.post.featuredImage.url} />
      <div>{props.post.category && props.post.category.title}</div>
    </div>
    <div>
      <h2 className={css(styles.postTitle)} >{props.post.title}</h2>
      <p>{props.post.post}</p>
    </div>
    <hr />
  </div>
)

export default BlogSnippet

BlogSnippet.propTypes = {
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
