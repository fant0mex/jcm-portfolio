import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

const ProjectItem = props => (
  <div>
    <div className={css(styles.itemWrapper)}>
      <img src={props.post.featuredImage.url} />
      <div className={css(styles.overlay)}>
        <h2>{props.post.title}</h2>
      </div>
    </div>
  </div>
)

export default ProjectItem

ProjectItem.propTypes = {
  post: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  itemWrapper: {
    position: 'relative',
    maxWidth: '95%',
    margin: '1em auto',
    [styleVars.media.sm]: {
      maxWidth: '85%'
    },
    [styleVars.media.lg]: {
      maxWidth: '30em',
      margin: '1em'
    },
    ':hover div': {
      visibility: 'visible',
      opacity: '1',
      transitionDelay: '0s'
    }
  },

  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
    visibility: 'hidden',
    opacity: '0',
    transition: 'visibility 0s linear 0.5s, opacity 0.3s linear',
    top: '0',
    left: '0',
    width: '100%',
    height: '98.5%',
    position: 'absolute',
    zIndex: '99',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    color: '#fff'
  }
})
