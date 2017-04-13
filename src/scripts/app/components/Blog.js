import React, { Component } from 'react'
import BlogSnippet from 'app/components/BlogSnippet'
import InstagramWidget from 'app/components/InstagramWidget'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeBlogPosts from 'data/fakeBlogPosts'

class Blog extends Component {
  componentDidMount () {
    console.log('fakePosts ', fakeBlogPosts)
  }

  render () {
    return (
      <div className={css(styles.blogWrapper)}>
        <div className={css(styles.blogList)}>
          {fakeBlogPosts.map(blogSnippet => (
            <BlogSnippet key={blogSnippet.slug} post={blogSnippet} />
          ))}
        </div>
        <InstagramWidget />
      </div>
    )
  }
}

export default Blog

const styles = StyleSheet.create({
  blogWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [styleVars.media.lg]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },

  blogList: {
    maxWidth: '48em',
    backgroundColor: '#e6e6e6',
    margin: '1rem',
    padding: '1rem 1rem 0',
    fontFamily: styleVars.font.Palanquin
  }
})
