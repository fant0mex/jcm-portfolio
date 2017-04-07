import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export const Main = ({ children }) => (
  <div className={css(mainStyles.wrapper)}>
    {children}
  </div>
)

const mainStyles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    position: 'relative'
  }
})

export const Page = ({children}) => (
  <div className={css(pageStyles.wrapper)}>
    {children}
  </div>
)

const pageStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
})
