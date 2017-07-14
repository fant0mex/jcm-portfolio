import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'app/routes'
import Header from 'app/components/Header'
import Footer from 'app/components/Footer'
import { Page, Main } from 'app/widgets/layout'
import {
  getAllBlogPosts,
  getBlogPost,
  getAllProjects,
  getAllPhotography
} from 'lib/contentful'

class App extends Component {
  state = {
    posts: [],
    post: {},
    projectPosts: [],
    photographyPosts: []
  }

  getBlogPosts = page => {
    getAllBlogPosts(page).then(data => {
      this.setState({posts: data})
    })
  }

  getSinglePost = (...args) => {
    getBlogPost(...args).then(post => this.setState({post})).catch(() => {})
  }

  getProjectPosts = page => {
    getAllProjects(page).then(data => {
      this.setState({projectPosts: data})
    })
  }

  getPhotographyPosts = page => {
    getAllPhotography(page).then(data => {
      this.setState({photographyPosts: data})
    })
  }

  render () {
    const propsToPass = {
      appState: this.state,
      getBlogPosts: this.getBlogPosts,
      getSinglePost: this.getSinglePost,
      getProjectPosts: this.getProjectPosts,
      getPhotographyPosts: this.getPhotographyPosts
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
