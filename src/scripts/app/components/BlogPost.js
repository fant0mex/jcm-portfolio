import React, { Component } from 'react'

class BlogPost extends Component {
  render () {
    const { post } = this.props
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
