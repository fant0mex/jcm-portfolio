import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Page, Main } from 'app/widgets/layout'

const App = () => (
  <Router>
    <Page>
      <Main>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/reel'>Reel</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/photography'>Photography</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/reel' component={Reel} />
          <Route path='/projects' component={Projects} />
          <Route path='/photography' component={Photography} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
        </div>
      </Main>
    </Page>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Reel = () => (
  <div>
    <h2>Reel</h2>
  </div>
)

const Projects = () => (
  <div>
    <h2>Projects</h2>
  </div>
)

const Photography = () => (
  <div>
    <h2>Photography</h2>
  </div>
)

const Blog = () => (
  <div>
    <h2>Blog</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

export default App
