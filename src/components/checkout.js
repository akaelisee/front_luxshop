// @ts-nocheck
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import axios from '../services/axios'
import axios from 'axios'
// import request from '../services/requests'
import { useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { allRemoveCard } from '../actions/cardAction'
import { useDispatch } from 'react-redux'
import { LoaderPayement } from './loader'
import StyleChekout from '../styles/StyleChekout'

const Checkout = ({ cards, total }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutErrorMsg, setCheckoutErrorMsg] = useState('')
  const [buttonMsg, setButtonMsg] = useState('Passer la commande')
  const baseImage = process.env.REACT_APP_BASE_IMAGE
  const element = useElements()
  const token = localStorage.getItem('token')
  const stripe = useStripe()
  const dispatch = useDispatch()
  const history = useHistory()

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }

  const handlePayment = async e => {
    // Block native form submission.
    e.preventDefault()

    setIsProcessing(true)
    if (isProcessing) {
      setButtonMsg(<LoaderPayement />)
    }
    // manuella@gmail.com
    const cardElement = element.getElement('card')

    const billingInfo = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: {
        line1: e.target.address.value,
        city: e.target.city.value,
        state: e.target.state.value
      }
    }

    try {
      // Got our client secret
      const paymentIntent = await axios.post(
        'http://localhost:5000/api/payment',
        {
          // @ts-ignore
          amount: total() * 100,
          receipt_email: e.target.email.value
        },
        {
          headers: {
            'auth-token': token
          }
        }
      )

      // Create PaymentMethod Object
      const paymentMethodObj = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingInfo
      })

      if (paymentMethodObj.error) {
        setCheckoutErrorMsg(paymentMethodObj.error.message)
        setIsProcessing(false)
        return
      }

      // Confirm Payment Method
      const confirmPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id
        }
      )

      if (confirmPayment.error) {
        setCheckoutErrorMsg(confirmPayment.error.message)
        setIsProcessing(false)
        setButtonMsg('Passer la commande')
        return
      }

      setButtonMsg('Success! Payment is Complete')

      setTimeout(() => {
        // setButtonMsg('Pay')
        setIsProcessing(false)
      }, 2000)

      if (confirmPayment.paymentIntent.status == 'succeeded') {
        dispatch(allRemoveCard(cards))

        history.push({
          pathname: '/success'
        })
      }
    } catch (error) {
      setCheckoutErrorMsg(`l'email n'est pas correct`)
      setIsProcessing(false)
      if (!isProcessing) {
        setButtonMsg('Passer la commande')
      }
    }
  }

  return (
    <StyleChekout>
      <div className='checkout__title'>
        <span> CONCLUSION DE LA TRANSACTION </span>
      </div>
      <div className='grid__checkout'>
        <div className='detail__payment'>
          <div className='info'>
            <span> 1. Information de base </span>
          </div>
          <form onSubmit={handlePayment}>
            <div className='form__card'>
              <div className='form__title'> VOTRE ADRESSE </div>
              <div className='group'>
                <div className='form__group'>
                  <label> Nom et prénom * </label>
                  <input type='text' name='name' required />
                </div>
                <div className='form__group'>
                  <label> email *</label>
                  <input
                    type='email'
                    name='email'
                    required
                    className={checkoutErrorMsg ? 'input__red' : ''}
                  />
                </div>
                <div
                  style={{
                    color: '#ec2f4d',
                    fontSize: '13px',
                    marginBottom: '0px'
                  }}
                >
                  {checkoutErrorMsg}
                </div>
                <div className='form__group'>
                  <label> NUMÉRO DE TÉLÉPHONE * </label>
                  <input type='number' name='phone' required />
                </div>
                <div className='form__group'>
                  <label> Addresse *</label>
                  <input type='text' name='address' required />
                </div>
                <div className='form__group'>
                  <label> Ville * </label>
                  <input type='text' name='city' required />
                </div>
                <div className='form__group'>
                  <label> Pays *</label>
                  <input type='text' name='state' required />
                </div>
              </div>
            </div>
            <div className='info'>
              <span> 2. Payement </span>
            </div>
            <div className='form__card'>
              <div className='group'>
                <div className='form__group'>
                  <label> Carte </label>
                  <div className='element'>
                    <CardElement
                      options={{
                        CARD_ELEMENT_OPTIONS
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='btn__checkout'>
              <button type='submit' disabled={isProcessing}>
                {buttonMsg}
              </button>
            </div>
          </form>
        </div>
        <div className='visualisation__product'>
          <div>
            {cards.map(item => (
              <div className='grid__product' key={item.id}>
                <div className='product__image'>
                  <div className='image'>
                    <img src={`${baseImage}${item.backdrop_path}`} />
                  </div>
                </div>
                <div className='product__detail'>
                  <p className='product__title'> {item.title}</p>
                  <p className='product__price'>
                    {item.qty} x {item.price} €
                  </p>
                  <p className='product__color'>
                    {item.choosenColor} {item.choosenDimension}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='total'>
            <span className='title__montatnt'>Montant global</span>
            <span className='price'> {total()} € </span>
          </div>
        </div>
      </div>
    </StyleChekout>
  )
}

export default Checkout
