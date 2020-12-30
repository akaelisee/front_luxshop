import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Home from '../views/home'
import RegisterLogin from '../views/registerLogin'
import Content from '../components/content'
import Chains from '../views/chains'
import Rings from '../views/rings'
import Necklaces from '../views/necklaces'
import Bracelets from '../views/bracelets'
import Watches from '../views/watches'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={RegisterLogin}></PrivateRoute>
        <Content>
          <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
          <PrivateRoute exact path='/chains' component={Chains}></PrivateRoute>
          <PrivateRoute exact path='/rings' component={Rings}></PrivateRoute>
          <PrivateRoute
            exact
            path='/necklaces'
            component={Necklaces}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/bracelets'
            component={Bracelets}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/watches'
            component={Watches}
          ></PrivateRoute>
        </Content>
      </Switch>
    </Router>
  )
}

export default Routes