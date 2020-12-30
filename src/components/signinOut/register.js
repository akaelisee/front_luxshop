import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
const Register = ({ submitRegister, errorMessage }) => {
  const [formRegister, setFormRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const history = useHistory()

  return (
    <div>
      <form onSubmit={e => submitRegister(e, formRegister)}>
        <p>
          Prenom :{' '}
          <input
            type='text'
            name='firstname'
            onChange={e =>
              setFormRegister({ ...formRegister, firstName: e.target.value })
            }
          />
        </p>
        <p>
          Nom :{' '}
          <input
            type='text'
            name='lastname'
            onChange={e =>
              setFormRegister({
                ...formRegister,
                lastName: e.target.value
              })
            }
          />
        </p>
        <p>
          email :{' '}
          <input
            type='email'
            name='email'
            onChange={e =>
              setFormRegister({
                ...formRegister,
                email: e.target.value
              })
            }
          />
        </p>
        <p>
          mdp :{' '}
          <input
            type='password'
            name='password'
            onChange={e =>
              setFormRegister({
                ...formRegister,
                password: e.target.value
              })
            }
          />
        </p>
        <button> valider </button>
      </form>{' '}
      <p> {errorMessage} </p>
    </div>
  )
}

Register.propTypes = {
  submitRegister: PropTypes.func,
  errorMessage: PropTypes.string
}

export default Register
