/* eslint-disable react/prop-types */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
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
import NoPage from '../views/404'
import NoLog from '../views/noLog'
import About from '../views/about'

const WRoute = props => {
  return props.path === '/' ? (
    <Route exact path={props.path} component={props.component} />
  ) : (
    <>
      <div className='container'>
        <Content>
          <PrivateRoute exact path={props.path} component={props.component} />
        </Content>
      </div>
    </>
  )
}
const Routes = () => {
  return (
    <Router>
      <Switch>
        <WRoute exact path='/' component={RegisterLogin} />
        <WRoute exact path='/home' component={Home} />
        <WRoute exact path='/chains' component={Chains} />
        <WRoute exact path='/rings' component={Rings} />
        <WRoute exact path='/account' component={Account} />
        <WRoute exact path='/necklaces' component={Necklaces} />
        <WRoute exact path='/bracelets' component={Bracelets} />
        <WRoute exact path='/watches' component={Watches} />
        <WRoute exact path='/detail/:name/:id' component={Detail} />
        <WRoute exact path='/looks-for-her' component={ProductHer} />
        <WRoute exact path='/looks-for-him' component={ProductHim} />
        <WRoute exact path='/contact' component={Contact} />
        <WRoute exact path='/about' component={About} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/payment' component={Payment} />
        <Route path='/noLog' component={NoLog} />
        <Route path='*' component={NoPage} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
