import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
const Content = ({ children }) => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) history.push('/')
  }, [])
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any
}

export default Content
