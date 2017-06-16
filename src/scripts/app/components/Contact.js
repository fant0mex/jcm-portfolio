import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Contact = props => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.info)}>
      <h3 className={css(styles.title)}>Contact Me</h3>
      <ul>
        <li className={css(styles.item)}><a href='tel:+447842795523'>+44 (0)7842 795523</a></li>
        <li className={css(styles.item)}><a href='mailto:info@jamescmorgan.com'>info@jamescmorgan.com</a></li>
      </ul>
    </div>
  </div>
)

export default Contact

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em'
  },

  info: {
    textAlign: 'center',
    padding: '2em'
  },

  title: {
    fontSize: '2em'
  },

  item: {
    fontSize: '1.3em',
    margin: '0.25em 0'
  }
})
