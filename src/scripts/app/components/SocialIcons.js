import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const SocialIcons = props => {
  return (
    <div className={css(styles.wrapper)}>
      <ul className={css(styles.list)}>
        <li className={css(styles.listItem)}>
          <a href='https://www.instagram.com/Jamesm402/' target='_blank'>
            <img className={css(styles.icon)} src='src/assets/img/instagram.png' />
          </a>
        </li>
        <li className={css(styles.listItem)}>
          <a href='' target='_blank'>
            <img className={css(styles.icon)} src='src/assets/img/vimeo.png' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialIcons

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '1200px',
    margin: '0.5em auto'
  },

  list: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  },

  listItem: {
    margin: '0 0.5em'
  },

  icon: {
    width: '45px',
    height: '45px'
  }
})
