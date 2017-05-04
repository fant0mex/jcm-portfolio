import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import fakeProjects from 'data/fakeProjects'
// import styleVars from 'styles/variables'

const Carousel = props => {
  return (
    <div className={css(styles.wrapper)}>
      {fakeProjects.map((item, index) => (
        <div key={index}>
          <img src={item.featuredImage.url} />
        </div>
      ))}
    </div>
  )
}

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1400px'
  }
})
