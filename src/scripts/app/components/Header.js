import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'

const Header = () => (
  <nav>
    <ul className={css(styles.list)}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/reel'>Reel</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/photography'>Photography</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
    <hr />
  </nav>
)

export default Header

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 1rem 0'
  }
})
