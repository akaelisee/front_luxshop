// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postLogin } from '../actions/login'
// service
// import axios from '../services/axios'
// import request from '../services/requests'
// components
import Login from '../components/signinOut/login'
import Register from '../components/signinOut/register'
// image
import imageLogin from '../assets/img/rigisterLogin.jpg'
import { Logo } from '../components/logo'
// style
import { ContainerSignOut, ContentImage } from '../styles/ContainerSignOut'
import Loader from '../components/loader'
import axios from 'axios'

const RegisterLogin = () => {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [isExist, setIsExist] = useState(false)
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [errorMessageLogin, setErrorMessageLogin] = useState('')
  const [errorMessageChamps, setErrorMessageChamps] = useState('')
  const [messageValidate, setMessageValidate] = useState('')
  const [isLoader, setIsLoader] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) history.push('/home')
  }, [])

  // Register
  const submitRegister = (e, formRegister, setIsError) => {
    e.preventDefault()
    try {
      if (
        !formRegister.firstName ||
        !formRegister.lastName ||
        !formRegister.password ||
        !formRegister.email
      ) {
        setIsError(true)
        return
      } else if (formRegister.firstName.length < 1) {
        setIsError(true)
        return
      } else if (formRegister.lastName.length < 1) {
        setIsError(true)
        return
      } else if (formRegister.email.length < 1) {
        setIsError(true)
        return
      } else if (formRegister.password.length < 6) {
        setIsError(true)
        setErrorMessage('Veuillez entrer un mot de pass correct')
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
        .post('http://localhost:5000/api/register', data)
        .then(res => {
          console.log(res)
          setMessageValidate('Votre compte a été bien crée')
          setIsExist(false)
        })
        .catch(err => {
          console.log(err)
          setErrorMessageEmail(
            'Veuillez vous connecter avec le compte que vous avez déjà créé.'
          )
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
      } else if (formLogin.password.length < 6) {
        setErrorMessageChamps(' Veuillez entrer un mot de pass correct correct')
        return
      }

      // CONNECTION USER
      const data = {
        email: formLogin.email,
        password: formLogin.password
      }
      // Logger User Redux
      dispatch(postLogin(data))
        .then(res => {
          setIsLoader(true)
          localStorage.setItem('token', res.headers['auth-token'])
          history.push({
            pathname: '/home'
          })
        })
        .catch(err => {
          setErrorMessageLogin('Email ou mot de passe incorrect')
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const componentExist = () => {
    if (!isExist) {
      return (
        <Login
          submitLogin={submitLogin}
          errorMessageChamps={errorMessageChamps}
          errorMessageLogin={errorMessageLogin}
          isLoader={isLoader}
        />
      )
    } else {
      return (
        <Register
          submitRegister={submitRegister}
          errorMessage={errorMessage}
          errorMessageEmail={errorMessageEmail}
          messageValidate={messageValidate}
        />
      )
    }
  }

  // if (isLoader) {
  //   return
  // }

  return !isLoader ? (
    <ContainerSignOut>
      <ContentImage url={`url(${imageLogin})`} className='content_img' />
      <div className='content_signOut'>
        <div className='component_formulaire'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='group__btn'>
            <div
              onClick={() => setIsExist(false)}
              className={isExist ? 'not_underline' : 'under underline'}
            >
              Se connecter
            </div>
            <div
              onClick={() => setIsExist(true)}
              className={isExist ? 'underline' : 'not_underline'}
            >
              S&lsquo;inscrire
            </div>
          </div>

          {componentExist()}
          <div className='politique'>
            En cliquant sur &quot;Connexion&quot; vous acceptez nos Conditions
            d&lsquo;utilisation. Veuillez consulter notre
            <span> Politique de confidentialité </span>. Ce site est protégé par
            reCAPTCHA et la <span>Politique de confidentialité </span> et les
            <span> Conditions d&lsquo;utilisation</span>
            Google s&lsquo;appliquent.
          </div>
        </div>
      </div>
    </ContainerSignOut>
  ) : (
    <Loader />
  )
}

export default RegisterLogin
