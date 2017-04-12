import React from 'react'

const BlogSnippet = props => (
  <div>
    <div style={{backgroundImage: `url(${props.post.featuredImage.url})`}}>
      <div>{props.post.category && props.post.category.title}</div>
    </div>
    <div>
      <h2>{props.post.title}</h2>
    </div>
  </div>
)

export default BlogSnippet
