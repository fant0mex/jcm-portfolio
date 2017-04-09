import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'

const Header = () => (
  <nav>
    <ul className={css(styles.list)}>
      <li><NavLink activeStyle={{color: 'green'}} to='/'>Home</NavLink></li>
      <li><NavLink activeStyle={{color: 'green'}} to='/reel'>Reel</NavLink></li>
      <li><NavLink activeStyle={{color: 'green'}} to='/projects'>Projects</NavLink></li>
      <li><NavLink activeStyle={{color: 'green'}} to='/photography'>Photography</NavLink></li>
      <li><NavLink activeStyle={{color: 'green'}} to='/blog'>Blog</NavLink></li>
      <li><NavLink activeStyle={{color: 'green'}} to='/contact'>Contact</NavLink></li>
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
