import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const MenuButton = props => (
  <button onClick={props.toggleMenu} className={css(styles.btn)}>
    <div className={css(styles.bar)} />
    <div className={css(styles.bar)} />
    <div className={css(styles.bar)} />
  </button>
)

export default MenuButton

const styles = StyleSheet.create({
  btn: {
    width: '70px',
    height: '60px',
    background: '#fff',
    cursor: 'pointer',
    margin: 'auto',
    border: 'none',
    marginTop: '1em',
    marginRight: '0.5em'
  },

  bar: {
    width: '30px',
    height: '3px',
    backgroundColor: '#000',
    margin: '6px auto'
  }
})
