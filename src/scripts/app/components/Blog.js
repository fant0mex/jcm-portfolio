import React, { Component } from 'react'
import BlogSnippet from 'app/components/BlogSnippet'

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    this.props.getBlogPosts()
  }

  componentWillReceiveProps (newProps) {
    if (this.props.appState.posts !== newProps.appState.posts) {
      this.setState({
        posts: newProps.appState.posts
      })
    }
  }

  render () {
    const { posts } = this.state
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
