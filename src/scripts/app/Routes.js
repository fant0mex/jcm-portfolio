import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Blog from 'app/components/Blog'
import BlogPost from 'app/components/BlogPost'
import Projects from 'app/components/Projects'
import NotFound from 'app/components/NotFound'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }} />
  )
}

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/reel' component={Reel} />
      <Route path='/projects' component={Projects} />
      <Route path='/photography' component={Photography} />
      <PropsRoute exact path='/blog' component={Blog} {...props} />
      <PropsRoute path='/blog/:slug' component={BlogPost} {...props} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

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

const Photography = () => (
  <div>
    <h2>Photography</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

export default Routes
