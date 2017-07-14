import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

class Photography extends Component {
  componentDidMount () {
    this.props.getPhotographyPosts()
  }

  render () {
    return (
      <div className={css(styles.wrapper)}>
        <Masonry className={css(styles.grid)}>
          {this.props.appState.photographyPosts.map(item => (
            <div key={item.title} className={css(styles.gridItem)}>
              <img src={item.featuredImage.url} />
            </div>
          ))}
        </Masonry>
      </div>
    )
  }
}

export default Photography

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1200px',
    padding: '1em',
    margin: 'auto'
  },

  grid: {
    margin: 'auto'
  },

  gridItem: {
    padding: '0.175em',
    [styleVars.media.sm]: {
      maxWidth: '50%'
    },
    [styleVars.media.lg]: {
      maxWidth: '33.333%'
    }
  }
})
