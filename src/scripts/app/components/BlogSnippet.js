import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

class BlogSnippet extends Component {
  render () {
    const blogPost = this.props.post.post
    return (
      <div>
        <div className={css(styles.imgWrapper)}>
          {this.props.post.images && this.props.post.images.map(i => (
            <img key={i.url} src={i.url} />
          ))}
          <div>{this.props.post.category && this.props.post.category.title}</div>
        </div>
        <div>
          <h2 className={css(styles.postTitle)} >{this.props.post.title}</h2>
          <ReactMarkdown source={blogPost} />
        </div>
        <hr />
      </div>
    )
  }
}

export default BlogSnippet

BlogSnippet.propTypes = {
  post: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  imgWrapper: {
    padding: '1em',
    textAlign: 'center'
  },
  postTitle: {
    margin: '1em 0',
    fontWeight: 'bold',
    fontSize: '1.5em',
    textAlign: 'center'
  }
})
