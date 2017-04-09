import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'app/routes'
import Header from 'app/components/Header'
import { Page, Main } from 'app/widgets/layout'

const App = () => (
  <Router>
    <Page>
      <Main>
        <Header />
        <Routes />
      </Main>
    </Page>
  </Router>
)

export default App
