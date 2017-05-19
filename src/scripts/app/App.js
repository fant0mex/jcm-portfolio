import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'app/routes'
import Header from 'app/components/Header'
import Footer from 'app/components/Footer'
import { Page, Main } from 'app/widgets/layout'
import { getAllBlogPosts, getBlogPost } from 'lib/contentful'

class App extends Component {
  state = {
    posts: [],
    post: {}
  }

  getBlogPosts = page => {
    getAllBlogPosts(page).then(data => {
      this.setState({posts: data})
    })
  }

  getSinglePost = (...args) => {
    getBlogPost(...args).then(post => this.setState({post})).catch(() => {})
  }

  render () {
    const propsToPass = {
      appState: this.state,
      getBlogPosts: this.getBlogPosts,
      getSinglePost: this.getSinglePost
    }
    return (
      <Router>
        <Page>
          <Main>
            <Header />
            <Routes {...propsToPass} />
            <Footer />
          </Main>
        </Page>
      </Router>
    )
  }
}

export default App
