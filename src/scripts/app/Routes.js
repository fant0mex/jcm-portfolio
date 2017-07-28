import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from 'app/components/Home'
import Reel from 'app/components/Reel'
import Blog from 'app/components/Blog'
import BlogPost from 'app/components/BlogPost'
import Photography from 'app/components/Photography'
import Projects from 'app/components/Projects'
import Contact from 'app/components/Contact'
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
      <PropsRoute exact path='/' component={Home} {...props} />
      <Route path='/reel' component={Reel} />
      <PropsRoute path='/projects' component={Projects} {...props} />
      <PropsRoute path='/photography' component={Photography} {...props} />
      <PropsRoute exact path='/blog' component={Blog} {...props} />
      <PropsRoute path='/blog/:slug' component={BlogPost} {...props} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
