import React, { Component } from 'react'
import BlogSnippet from 'app/components/BlogSnippet'

class Blog extends Component {
  componentDidMount () {
    this.props.getBlogPosts()
  }

  render () {
    const { posts } = this.props.appState
    if (posts.length === 0) return null
    return (
      <div>
        <h2>Blog</h2>
        {posts.map(blogSnippet => (
          <BlogSnippet key={blogSnippet.slug} post={blogSnippet} />
        ))}
      </div>
    )
  }
}

export default Blog
