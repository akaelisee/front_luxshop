// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { LogoHeader, LogoReduire } from './logo'
import ShoppingStyles from '../styles/ShoppingStyles'
import Nav from '../styles/Nav'
import NavLink from '../styles/NavLink'
import { connect } from 'react-redux'
import Card from './cardComponent/card'
const NavBar = ({ isNav, cardReducers }) => {
  const [isCard, setIsCard] = useState(false)
  const history = useHistory()

  const deconnexion = () => {
    const token = localStorage.removeItem('token')
    if (!token) history.push('/')
  }

  const cardExist = () => {
    if (isCard) {
      document.querySelector('body').style.overflow = 'hidden'
      return <Card isCard={isCard} setIsCard={setIsCard} />
    } else {
      return <></>
    }
  }

  return (
    <>
      <div>
        {!isNav ? (
          <Nav>
            <div className='nav_bar_no_scroll'>
              <div className='nav__bar'>
                <div className='globe'>
                  <FontAwesomeIcon icon={faGlobe} />
                  <span> France </span>
                </div>
                <div className='logo'>
                  <Link to='/'>
                    <LogoHeader />
                  </Link>
                </div>
                <ShoppingStyles>
                  <div className='compte__user'>
                    <ul className='user'>
                      <li>
                        <FontAwesomeIcon icon={faUser} />
                        <ul className='popover'>
                          <li>
                            <Link to='/account'>Mon Compte</Link>
                          </li>
                          <li onClick={() => deconnexion()}> Déconnexion </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className='cart'>
                    <p onClick={() => setIsCard(true)}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      {!cardReducers.length == 0 ? (
                        <span> {cardReducers.length} </span>
                      ) : (
                        <></>
                      )}
                    </p>
                  </div>
                </ShoppingStyles>
              </div>
              <NavLink expand>
                <Link to='/home'> Accueil </Link>
                <Link to='/watches'> Montres </Link>
                <Link to='/bracelets'> Bracelets </Link>
                <Link to='/rings'> Bagues </Link>
                <Link to='/chains'> Boucle d&lsquo;oreilles </Link>
                <Link to='/necklaces'> Collier </Link>
              </NavLink>
            </div>
          </Nav>
        ) : (
          <Nav>
            <div className='nav_bar_scroll'>
              <div className='nav__bar'>
                <div className='logo_reduire'>
                  <LogoReduire />
                </div>
                <NavLink>
                  <Link to='/home'> Accueil </Link>
                  <Link to='/watches'> Montres </Link>
                  <Link to='/bracelets'> Bracelets </Link>
                  <Link to='/rings'> Bagues </Link>
                  <Link to='/chains'> Boucle d&lsquo;oreilles </Link>
                  <Link to='/necklaces'> Collier </Link>
                </NavLink>
                <ShoppingStyles>
                  <div className='compte__user'>
                    <ul className='user'>
                      <li>
                        <FontAwesomeIcon icon={faUser} />
                        <ul className='popover'>
                          <li>
                            <Link to='/account'>Mon Compte</Link>
                          </li>
                          <li> </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className='cart'>
                    <p onClick={() => setIsCard(true)}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      {!cardReducers.length == 0 ? (
                        <span> {cardReducers.length} </span>
                      ) : (
                        <></>
                      )}
                    </p>
                  </div>
                </ShoppingStyles>
              </div>
            </div>
          </Nav>
        )}
        {cardExist()}
      </div>
    </>
  )
}

NavBar.propTypes = {
  cardReducers: PropTypes.array,
  login: PropTypes.object,
  isNav: PropTypes.bool
}

const mapStateToProps = state => ({
  cardReducers: state.cardReducers.productCard
})

export default connect(mapStateToProps)(NavBar)
