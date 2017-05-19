import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import SocialIcons from 'app/components/SocialIcons'

const Footer = props => (
  <div className={css(styles.wrapper)}>
    <SocialIcons />
  </div>
)

export default Footer

const styles = StyleSheet.create({
  wrapper: {
  }
})
