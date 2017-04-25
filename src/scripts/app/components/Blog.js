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
    window.fetch('https://crossorigin.me/https://www.instagram.com/Jamesm402/media/', {
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
          <div>Loading...</div>
        ) : (
          <InstagramWidget profilePic={profilePicUrl} feed={instagramFeed} />
        )}
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
