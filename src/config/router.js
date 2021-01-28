import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Home from '../views/home'
import RegisterLogin from '../views/registerLogin'
import Content from '../components/contenu/content'
import Chains from '../views/chains'
import Rings from '../views/rings'
import Necklaces from '../views/necklaces'
import Bracelets from '../views/bracelets'
import Watches from '../views/watches'
import Detail from '../views/detail'
import Account from '../views/account'
import ProductHer from '../views/productHer'
import ProductHim from '../views/productHim'
import Contact from '../views/contact'
import Payment from '../views/payment'
import Success from '../views/success'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={RegisterLogin}></PrivateRoute>
        <PrivateRoute exact path='/payment' component={Payment}></PrivateRoute>
        <PrivateRoute exact path='/success' component={Success}></PrivateRoute>
        {/* <Route path='*' component={NoPage} /> */}
        {/* <Redirect to='/'></Redirect> */}
        <Content>
          <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
          <PrivateRoute exact path='/chains' component={Chains}></PrivateRoute>
          <PrivateRoute exact path='/rings' component={Rings}></PrivateRoute>
          <PrivateRoute
            exact
            path='/account'
            component={Account}
          ></PrivateRoute>
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
          <PrivateRoute
            exact
            path='/detail/:name/:id'
            component={Detail}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/looks-for-her'
            component={ProductHer}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/looks-for-him'
            component={ProductHim}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/contact'
            component={Contact}
          ></PrivateRoute>
        </Content>
      </Switch>
    </Router>
  )
}

export default Routes
