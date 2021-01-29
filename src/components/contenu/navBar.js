// @ts-nocheck
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faGlobe,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { LogoHeader, LogoReduire } from '../logo'
import ShoppingStyles from '../../styles/ShoppingStyles'
import Nav from '../../styles/Nav'
import NavLink from '../../styles/NavLink'
import { connect } from 'react-redux'
import Card from '../cardComponent/card'
const NavBar = ({ isNav, cardReducers }) => {
  const [isCard, setIsCard] = useState(false)
  const [isResponsive, setIsResponsive] = useState(false)
  const history = useHistory()

  const deconnexion = () => {
    const token = localStorage.removeItem('token')
    if (!token) history.push('/')
  }

  const cardExist = () => {
    if (isCard) {
      document.querySelector('body').style.overflow = 'hidden'
      // document.querySelector('body').style.backgroundColor =
      //   'rgba(187, 187, 187, 0.542)'
      return <Card isCard={isCard} setIsCard={setIsCard} />
    } else {
      document.querySelector('body').style.overflow = 'auto'
      // document.querySelector('body').style.backgroundColor = 'transparent'
      return <></>
    }
  }

  return (
    <>
      <div className='screen'>
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
            </div>
          </Nav>
        )}
      </div>
      {/* Responsive */}
      <div className='responsive'>
        <Nav>
          <div className='nav_bar_no_scroll'>
            <div className='nav__bar'>
              <div className='globe'>
                <span onClick={() => setIsResponsive(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </span>
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

            {isResponsive ? (
              <NavLink expand>
                <div className='nav__responsive'>
                  <span
                    onClick={() => setIsResponsive(false)}
                    className='close__responsive'
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </div>
                <div className='nav__link'>
                  <Link to='/home' onClick={() => setIsResponsive(false)}>
                    Accueil
                  </Link>
                  <Link to='/watches' onClick={() => setIsResponsive(false)}>
                    Montres
                  </Link>
                  <Link to='/bracelets' onClick={() => setIsResponsive(false)}>
                    Bracelets
                  </Link>
                  <Link to='/rings' onClick={() => setIsResponsive(false)}>
                    Bagues
                  </Link>
                  <Link to='/chains' onClick={() => setIsResponsive(false)}>
                    Boucle d&lsquo;oreilles
                  </Link>
                  <Link to='/necklaces' onClick={() => setIsResponsive(false)}>
                    Collier
                  </Link>
                </div>
              </NavLink>
            ) : (
              <></>
            )}
          </div>
        </Nav>
      </div>
      {cardExist()}
      {/* Responsive */}
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
