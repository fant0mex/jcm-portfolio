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

  getAllBlogPosts = (page) => {
    getAllBlogPosts(page).then(({posts, ...data}) => {
      this.setState((prevState) => ({posts: prevState.posts.concat(posts), ...data}))
    }, () => {
      console.log('got posts')
    })
  }

  render () {
    const propsToPass = {
      appState: this.state,
      getAllBlogPosts
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
