import React from 'react'
import { Link } from 'react-router-dom'

const BlogSnippet = props => (
  <div>
    <Link to={`/blog/${props.post.slug}`}>
      <div style={{backgroundImage: `url(${props.post.featuredImage.url})`}}>
        <div>{props.post.category && props.post.category.title}</div>
      </div>
      <div>
        <h2>{props.post.title}</h2>
      </div>
    </Link>
  </div>
)

export default BlogSnippet
