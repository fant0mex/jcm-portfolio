import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'app/routes'
import Header from 'app/components/Header'
import { Page, Main } from 'app/widgets/layout'
import { getAllBlogPosts } from 'lib/contentful'

class App extends Component {
  state = {
    posts: []
  }

  getBlogPosts = (page) => {
    getAllBlogPosts(page).then(data => {
      this.setState({posts: data})
    })
  }

  render () {
    const propsToPass = {
      appState: this.state,
      getBlogPosts: this.getBlogPosts
    }
    return (
      <Router>
        <Page>
          <Main>
            <Header />
            <Routes {...propsToPass} />
          </Main>
        </Page>
      </Router>
    )
  }
}

export default App
