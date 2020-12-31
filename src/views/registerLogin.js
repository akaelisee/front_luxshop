import React, { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
// service
import axios from '../services/axios'
import request from '../services/requests'
// components
import Login from '../components/signinOut/login'
import Register from '../components/signinOut/register'

const RegisterLogin = () => {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [errorMessageLogin, setErrorMessageLogin] = useState('')
  const [errorMessageChamps, setErrorMessageChamps] = useState('')

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) history.push('/home')
    console.log(token)
  }, [])

  // Register
  const submitRegister = (e, formRegister) => {
    e.preventDefault()
    try {
      if (
        !formRegister.firstName ||
        !formRegister.lastName ||
        !formRegister.password ||
        !formRegister.email
      ) {
        setErrorMessage('Veuillez remplir les champs')
        return
      } else if (formRegister.firstName.length < 1) {
        setErrorMessage(' Veuillez entrer un prenom correct')
        return
      } else if (formRegister.lastName.length < 1) {
        setErrorMessage(' Veuillez entrer un mon correct')
        return
      } else if (formRegister.password.length < 6) {
        setErrorMessage(' Veuillez entrer un mot de pass correct correct')
        return
      }

      // Create user
      const data = {
        firstname: formRegister.firstName,
        lastname: formRegister.lastName,
        email: formRegister.email,
        password: formRegister.password
      }
      axios
        .post(request.fetchRegister, data)
        .then(res => {
          alert('compte crée')
        })
        .catch(err => {
          setErrorMessageEmail('email existant')
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  // login
  const submitLogin = (e, formLogin) => {
    e.preventDefault()
    try {
      if (!formLogin.email || !formLogin.password) {
        setErrorMessageChamps('Veuillez remplir les champs')
        return
      } else if (formLogin.email.length < 3) {
        setErrorMessageChamps(' Veuillez entrer un mot de pass correct correct')
        return
      } else if (formLogin.password.length < 6) {
        setErrorMessageChamps(' Veuillez entrer un mot de pass correct correct')
        return
      }

      // CONNECTION USER
      const data = {
        email: formLogin.email,
        password: formLogin.password
      }
      axios
        .post(request.fetchLogin, data)
        .then(res => {
          localStorage.setItem('token', res.headers['auth-token'])
          history.push({
            pathname: '/chains',
            state: {
              firstname: res.data.firstname,
              lastname: res.data.lastname
            }
          })
        })
        .catch(err => {
          setErrorMessageLogin('email ou mot de passe incorrect')
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p> Formulaire d&lsquo;enregistrment</p>
      {errorMessageEmail}
      <Register submitRegister={submitRegister} errorMessage={errorMessage} />
      <hr />
      <p> Formulaire de connexion</p>
      {errorMessageLogin}
      <Login
        submitLogin={submitLogin}
        errorMessageChamps={errorMessageChamps}
      />
    </div>
  )
}

export default RegisterLogin
