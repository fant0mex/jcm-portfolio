import React, { Component } from 'react'

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    // this.props.getAllBlogPosts()
  }

  componentWillReceiveProps (newProps) {
    if (this.props.appState.posts !== newProps.appState.posts) {
      this.setState({
        posts: newProps.appState.posts
      })
    }
  }

  render () {
    return (
      <div>
        <h2>Blog</h2>
      </div>
    )
  }
}

export default Blog
