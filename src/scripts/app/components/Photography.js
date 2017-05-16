import React from 'react'
import Masonry from 'react-masonry-component'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'
import fakeProjects from 'data/fakeProjects'

const Photography = props => (
  <div className={css(styles.wrapper)}>
    <Masonry className={css(styles.grid)}>
      {fakeProjects.map(item => (
        <div key={item.slug} className={css(styles.gridItem)}>
          <img src={item.featuredImage.url} />
        </div>
      ))}
    </Masonry>
  </div>
)

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
