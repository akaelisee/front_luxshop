// @ts-nocheck
import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// component
import SkillsLink from './skillsLink'
// style
import Jumbotron from '../styles/Jumbotron'
import Container from '../styles/Container'
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
