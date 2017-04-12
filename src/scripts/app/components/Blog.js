import React, { Component } from 'react'
import BlogSnippet from 'app/components/BlogSnippet'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

class Blog extends Component {
  componentDidMount () {
    this.props.getBlogPosts()
  }

  render () {
    const { posts } = this.props.appState
    if (posts.length === 0) return null
    return (
      <div>
        <h2 className={css(styles.h2)}>Blog</h2>
        <div className={css(styles.blogList)}>
          {posts.map(blogSnippet => (
            <BlogSnippet key={blogSnippet.slug} post={blogSnippet} />
          ))}
        </div>
      </div>
    )
  }
}

export default Blog

const styles = StyleSheet.create({
  h2: {
    textAlign: 'center'
  },

  blogList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#e6e6e6',
    margin: '1rem',
    padding: '1rem 1rem 0',
    fontFamily: styleVars.font.Palanquin
  }
})
