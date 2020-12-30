import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Login = ({ submitLogin, errorMessageChamps }) => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  return (
    <div>
      <form onSubmit={e => submitLogin(e, formLogin)}>
        <p>
          email :{' '}
          <input
            type='email'
            name='email'
            onChange={e =>
              setFormLogin({ ...formLogin, email: e.target.value })
            }
          />
        </p>
        <p>
          mdp :{' '}
          <input
            type='password'
            name='password'
            onChange={e =>
              setFormLogin({ ...formLogin, password: e.target.value })
            }
          />
        </p>
        <button> valider </button>
      </form>{' '}
      <p> {errorMessageChamps} </p>
    </div>
  )
}

Login.propTypes = {
  submitLogin: PropTypes.func,
  errorMessageChamps: PropTypes.string
}

export default Login
