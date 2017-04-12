import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'

const BlogSnippet = props => (
  <div>
    <div style={{backgroundImage: `url(${props.post.featuredImage.url})`}}>
      <div>{props.post.category && props.post.category.title}</div>
    </div>
    <div>
      <h2 className={css(styles.postTitle)} >{props.post.title}</h2>
    </div>
    <hr />
  </div>
)

export default BlogSnippet

const styles = StyleSheet.create({
  postTitle: {
    fontSize: '1.2em',
    textAlign: 'center'
  }
})
