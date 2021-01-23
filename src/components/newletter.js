// @ts-nocheck
import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Container from '../styles/Container'
import SkillsLink from './skillsLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Newletter = () => {
  const [formLetter, setFormLetter] = useState({
    email: ''
  })
  // const [isLenghtEmailExist, setIsLenghtEmailExist] = useState(true)
  const apiLetter = 'http://localhost:5000/api/subscribe'

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      email: formLetter.email
    }

    try {
      axios
        .post(apiLetter, data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container newLetter>
      <Jumbotron>
        <div className='cards'>
          <p className='title'> SOYEZ INFORMÉ EN PREMIER! </p>
          <span className='text'>
            Recevez les toutes dernières actualités et offres spéciales
            directement dans votre messagerie.
          </span>
          <form onSubmit={e => handleSubmit(e)}>
            <p className='col'>Adresse e-mail</p>
            <div className='form_email'>
              <input
                type='email'
                name='email'
                onChange={e =>
                  setFormLetter({ ...formLetter, email: e.target.value })
                }
              />
              {formLetter.email.length > 0 ? (
                <button className='btn__letter'>Abonnez-vous</button>
              ) : (
                <button disabled={true} className='btn__disabled'>
                  Abonnez-vous
                </button>
              )}
            </div>
          </form>
          <div className='charte'>
            <span>
              En m’abonnant, je confirme (i) être âgé(e) de 16 ans ou plus, (ii)
              vouloir recevoir des communications marketing personnalisées par
              e-mail et (iii) avoir lu la Charte de confidentialité de Lux shop
            </span>
          </div>
        </div>
        <SkillsLink />
      </Jumbotron>
      <div className='btn__top' onClick={() => handleScroll()}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </Container>
  )
}

export default Newletter

const Jumbotron = styled.div`
  padding: 30px 0 0 0;
  .cards {
    padding: 28px 25px;
    width: 600px;
    margin: 0 auto;
    background-color: #d6d8d9;
    .title {
      font-size: 26px;
      letter-spacing: 4px;
    }
    .text {
      font-size: 11px;
      font-weight: 300;
    }
    form {
      .col {
        font-size: 12px;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-family: sans-serif;
        margin-bottom: 5px;
      }
      margin: 15px 0;
      .form_email {
        display: flex;
        input {
          width: 70%;
          border: none;
          padding: 15px 10px;
          margin-right: 15px;
        }

        .btn__letter {
          padding: 0 15px;
          letter-spacing: 2px;
          background-color: #071120;
          color: #c8ba7a;
          outline: none;
          border: none;
          cursor: pointer;
          border-radius: 2px;
        }
        .btn__disabled {
          padding: 0 15px;
          letter-spacing: 2px;
          background-color: #aaaaaa;
          color: #fff;
          outline: none;
          border: none;
          cursor: not-allowed;
          border-radius: 2px;
        }
      }
    }
    .charte {
      width: 70%;
      font-size: 11px;
      color: #6e6e6e;
      line-height: 20px;
    }
  }
`
