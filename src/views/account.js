/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Account = ({ login, props }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <div>
      <p> Nom : {login.lastname} </p>
      <p> prenom : {login.firstname} </p>
      <p> email : {login.email} </p>
    </div>
  )
}

Account.propTypes = {
  login: PropTypes.object
}

const mapStateToProps = state => ({
  login: state.login.userLogin
})

export default connect(mapStateToProps)(Account)
