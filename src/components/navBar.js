import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <div>
        <Link to='/home'> Accueil </Link> | <Link to='/watches'> Montres </Link>{' '}
        |<Link to='/bracelets'> Bracelets </Link> |
        <Link to='/rings'> Bagues </Link> |
        <Link to='/chains'> Boucle d&lsquo;oreilles </Link> |
        <Link to='/necklaces'> Collier </Link> |
        <Link to='/library'> mes produits </Link> |
        <Link to='/card'> Card </Link>
      </div>
    </div>
  )
}

export default NavBar
