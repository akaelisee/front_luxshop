import React from 'react'
import { useLocation } from 'react-router-dom'
const NoPage = () => {
  let location = useLocation()
  return (
    <div>
      <h2>Erreur : pas de page ici : {location.pathname} </h2>
    </div>
  )
}

export default NoPage
