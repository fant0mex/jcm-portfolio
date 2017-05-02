import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Logo from 'assets/img/jcm-logo.png'
import MenuButton from 'app/components/MenuButton'
import styleVars from 'styles/variables'
import MediaQuery from 'react-responsive'

class Header extends Component {
  state = {
    isMenuOpen: false
  }

  toggleMenu () {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }

  render () {
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.logo)}>
          <NavLink to='/'>
            <img src={Logo} />
          </NavLink>
        </div>
        <MediaQuery maxWidth={styleVars.width.md - 1}>
          <MenuButton toggleMenu={this.toggleMenu} />
          {this.state.isMenuOpen && (
            <nav className={css(styles.sideNav)}>
              <ul className={css(styles.list)}>
                <li><span className={css(styles.listItem)}>&times;</span></li>
                <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/reel'>Reel</NavLink></li>
                <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/projects'>Projects</NavLink></li>
                <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/photography'>Photography</NavLink></li>
                <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/blog'>Blog</NavLink></li>
                <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/contact'>Contact</NavLink></li>
              </ul>
            </nav>
          )}
        </MediaQuery>
        <MediaQuery minWidth={styleVars.width.md}>
          <nav className={css(styles.nav)}>
            <ul className={css(styles.list)}>
              <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/reel'>Reel</NavLink></li>
              <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/projects'>Projects</NavLink></li>
              <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/photography'>Photography</NavLink></li>
              <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/blog'>Blog</NavLink></li>
              <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/contact'>Contact</NavLink></li>
            </ul>
          </nav>
        </MediaQuery>
      </header>
    )
  }
}

export default Header

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 'auto',
    padding: '0 0.5em',
    [styleVars.media.lg]: {
      alignItems: 'flex-end'
    }
  },

  logo: {
    width: '16em',
    [styleVars.media.md]: {
      width: '25em'
    }
  },

  sideNav: {
    width: '300px',
    height: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    right: '0',
    background: '#111',
    overflowX: 'hidden',
    paddingTop: '1em',
    transition: 'width 0.5s'
  },

  nav: {
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
    [styleVars.media.md]: {
      flexDirection: 'row',
      paddingBottom: '1em'
    }
  },

  listItem: {
    margin: '0 0.5em',
    padding: '0 0.5em',
    color: '#ddd',
    [styleVars.media.md]: {
      color: '#000'
    }
  },

  active: {
    textDecoration: 'underline !important'
  }
})
