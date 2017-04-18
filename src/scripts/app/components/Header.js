import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import styleVars from 'styles/variables'

const Header = () => (
  <header className={css(styles.header)}>
    <div className={css(styles.logo)}>
      <NavLink to='/'>
        <img src='src/assets/img/jcm-logo.png' />
      </NavLink>
    </div>
    <nav className={css(styles.nav)}>
      <ul className={css(styles.list)}>
        <li><NavLink className={css(styles.listItem)} to='/reel'>Reel</NavLink></li>
        <li><NavLink className={css(styles.listItem)} to='/projects'>Projects</NavLink></li>
        <li><NavLink className={css(styles.listItem)} to='/photography'>Photography</NavLink></li>
        <li><NavLink className={css(styles.listItem)} to='/blog'>Blog</NavLink></li>
        <li><NavLink className={css(styles.listItem)} to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 'auto',
    padding: '0 0.5em',
    [styleVars.media.lg]: {
      flexDirection: 'row',
      alignItems: 'flex-end'
    }
  },

  logo: {
    width: '16em',
    [styleVars.media.md]: {
      width: '25em'
    }
  },

  nav: {
    width: '90%',
    [styleVars.media.lg]: {
      width: '50%'
    }
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 1rem',
    fontFamily: styleVars.font.Palanquin,
    textTransform: 'lowercase',
    textAlign: 'center',
    fontSize: '1.2em',
    [styleVars.media.sm]: {
      flexDirection: 'row'
    }
  },

  listItem: {
    margin: '0 0.5em',
    padding: '0 0.5em',
    color: '#000'
  }
})
