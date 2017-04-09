import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/reel' component={Reel} />
    <Route path='/projects' component={Projects} />
    <Route path='/photography' component={Photography} />
    <Route path='/blog' component={Blog} />
    <Route path='/contact' component={Contact} />
  </Switch>
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

export default Routes
