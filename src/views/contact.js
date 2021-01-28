// @ts-nocheck
import React from 'react'
import Banniere from '../styles/Banniere'
import BanniereContact from '../assets/img/conatct.jpg'
const Contact = () => {
  // const [status, setStatus] = useState({
  //   status: ''
  // })

  return (
    <div>
      <Banniere url={`url(${BanniereContact})`} alt='banniere' />
      <form action='https://formspree.io/f/moqpyndw' method='POST'>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            placeholder='Nom'
            className='form-control'
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            className='form-control'
          />
          <textarea
            name='message'
            rows='5'
            placeholder='message'
            className='form-control'
          ></textarea>

          <button type='submit' className='submit-btn btn'>
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
