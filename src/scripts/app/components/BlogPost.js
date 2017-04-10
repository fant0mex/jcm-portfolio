import React, { Component } from 'react'

class BlogPost extends Component {
  componentDidMount () {
    const { slug } = this.props.match.params
    this.props.getSinglePost(slug)
  }

  render () {
    const { post } = this.props.appState
    if (!post.title) return null
    return (
      <div>
        <h2>{post.title}</h2>
        <img src={post.featuredImage.url} width={350} />
        <p>{post.post}</p>
      </div>
    )
  }
}

export default BlogPost
