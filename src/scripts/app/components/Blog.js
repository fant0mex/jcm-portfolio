import React, { Component } from 'react'
import BlogSnippet from 'app/components/BlogSnippet'
import fakeBlogPosts from 'data/fakeBlogPosts'

class Blog extends Component {
  componentDidMount () {
    console.log('fakePosts ', fakeBlogPosts)
  }

  render () {
    return (
      <div>
        <h2>Blog</h2>
        {fakeBlogPosts.map(blogSnippet => (
          <BlogSnippet key={blogSnippet.slug} post={blogSnippet} />
        ))}
      </div>
    )
  }
}

export default Blog
