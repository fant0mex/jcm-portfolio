import React, { Component } from 'react'
import BlogSnippet from 'app/components/BlogSnippet'
import InstagramWidget from 'app/components/InstagramWidget'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeBlogPosts from 'data/fakeBlogPosts'

class Blog extends Component {
  state = {
    loading: true,
    instagramFeed: [],
    profilePicUrl: ''
  }

  componentDidMount () {
    this.getInstagram()
  }

  getInstagram = () => {
    window.fetch('https://crossorigin.me/https://www.instagram.com/jamesmdop/media/', {
      method: 'get'
    }).then(response => {
      response.json().then(data => {
        const profilePicUrl = data.items[0].user.profile_picture.replace('s150x150/', '')
        const instagramFeed = data.items.map(item => ({
          img: item.images.standard_resolution,
          link: item.link
        })).filter((item, index) => index < 6)
        this.setState({
          instagramFeed,
          profilePicUrl,
          loading: false
        })
      })
    })
  }

  render () {
    const { instagramFeed, profilePicUrl, loading } = this.state
    return (
      <div className={css(styles.blogWrapper)}>
        <div className={css(styles.blogList)}>
          {fakeBlogPosts.map(blogSnippet => (
            <BlogSnippet key={blogSnippet.slug} post={blogSnippet} />
          ))}
        </div>
        {loading ? (
          <div className={css(styles.loaderWrapper)}>
            <div className={css(styles.loader)} />
          </div>
        ) : (
          <InstagramWidget profilePic={profilePicUrl} feed={instagramFeed} />
        )}
      </div>
    )
  }
}

export default Blog

const spin = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}

const styles = StyleSheet.create({
  blogWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em',
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
  },

  loaderWrapper: {
    width: '26em',
    display: 'flex',
    justifyContent: 'center',
    padding: '2em'
  },

  loader: {
    border: '10px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '10px solid #000',
    width: '80px',
    height: '80px',
    animationName: spin,
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  }
})
