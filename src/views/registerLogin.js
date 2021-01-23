/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { postLogin } from '../actions/login'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// service
import axios from '../services/axios'
import request from '../services/requests'
// components
import Login from '../components/signinOut/login'
import Register from '../components/signinOut/register'
// image
import imageLogin from '../assets/img/rigisterLogin.jpg'
import { Logo, LogoHeader } from '../components/logo'

const RegisterLogin = ({ headers }) => {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [isExist, setIsExist] = useState(false)
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [errorMessageLogin, setErrorMessageLogin] = useState('')
  const [errorMessageChamps, setErrorMessageChamps] = useState('')
  // const errorPost = displayError(err)
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
        .post(request.fetchRegister, data)
        .then(res => {
          alert('compte crée')
          setIsExist(false)
        })
        .catch(err => {
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
          localStorage.setItem('token', res.headers['auth-token'])
          history.push({
            pathname: '/home'
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

  const componentExist = () => {
    if (!isExist) {
      return (
        <Login
          submitLogin={submitLogin}
          errorMessageChamps={errorMessageChamps}
          errorMessageLogin={errorMessageLogin}
        />
      )
    } else {
      return (
        <Register
          submitRegister={submitRegister}
          errorMessage={errorMessage}
          errorMessageEmail={errorMessageEmail}
        />
      )
    }
  }

  return (
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
            En cliquant sur "Connexion" vous acceptez nos Conditions
            d'utilisation. Veuillez consulter notre
            <span> Politique de confidentialité </span>. Ce site est protégé par
            reCAPTCHA et la <span>Politique de confidentialité </span> et les
            <span> Conditions d'utilisation</span>
            Google s'appliquent.
          </div>
        </div>
      </div>
    </ContainerSignOut>
  )
}

export default RegisterLogin

const ContainerSignOut = styled.div`
  display: flex;
  width: 100%;

  .content_img {
    width: 70%;
  }
  .content_signOut {
    width: 500px;
    .component_formulaire {
      position: relative;
      top: 80px;
      width: 320px;
      margin: 0 auto;
      .logo {
        text-align: center;
      }
      .group__btn {
        padding: 40px 0 6px 0;
        display: flex;
        justify-content: space-around;
        border-bottom: 2px solid #f0f5f7;
        cursor: pointer;
        font-size: 17px;

        .underline {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            width: 140px;
            left: -36px;
            bottom: -8px;
            height: 2px;
            background-color: #44546d;
          }
        }
        .under {
          &::after {
            content: '';
            position: absolute;
            width: 180px;
          }
        }
        .not_underline {
          text-decoration: none;
        }
      }
      .politique {
        margin: 25px 0;
        text-align: center;
        font-size: 12px;
        span {
          color: #44546d;
        }
      }
    }
  }
`

const ContentImage = styled.div`
  background-image: ${props => props.url};
  background-size: cover;
  background-position: center center;
  height: 100vh;
`
