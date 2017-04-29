import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import Logo from 'assets/img/jcm-logo.png'
import styleVars from 'styles/variables'
import MediaQuery from 'react-responsive'
import { slide as Menu } from 'react-burger-menu'

const Header = () => (
  <header className={css(styles.header)}>
    <div className={css(styles.logo)}>
      <NavLink to='/'>
        <img src={Logo} />
      </NavLink>
    </div>
    <MediaQuery maxWidth={styleVars.width.md - 1}>
      <Menu styles={burger} isOpen={false} right>
        <nav className={css(styles.nav)}>
          <ul className={css(styles.list)}>
            <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/reel'>Reel</NavLink></li>
            <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/projects'>Projects</NavLink></li>
            <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/photography'>Photography</NavLink></li>
            <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/blog'>Blog</NavLink></li>
            <li><NavLink activeClassName={css(styles.active)} className={css(styles.listItem)} to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </Menu>
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

export default Header

const burger = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '22px',
    right: '26px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '34px',
    width: '34px',
    top: '10px',
    right: '20px'
  },
  bmCross: {
    background: '#bdc3c7',
    height: '24px'
  },
  bmMenuWrap: {
    top: 0
  },
  bmMenu: {
    background: '#373a47',
    padding: '1em 1.5em 0',
    fontSize: '1.15em',
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    right: 0
  }
}

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
