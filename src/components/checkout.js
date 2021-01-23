// @ts-nocheck
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
// import axios from '../services/axios'
import axios from 'axios'
import request from '../services/requests'
import { useHistory } from 'react-router-dom'
// import StripeCheckout from 'react-stripe-checkout'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const Checkout = ({ cards, total, verified }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutErrorMsg, setCheckoutErrorMsg] = useState('')
  const [buttonMsg, setButtonMsg] = useState('Pay')
  const [verifiedMsg, setVerifiedMsg] = useState('')
  const element = useElements()
  const token = localStorage.getItem('token')
  const stripe = useStripe()

  useEffect(() => {
    console.log(verified.email)
  }, [])

  const handleChange = e => {
    if (e.error) {
      return setCheckoutErrorMsg(e.error.message)
    }
    setCheckoutErrorMsg('')
  }

  const handlePayment = async e => {
    // Block native form submission.
    e.preventDefault()

    setIsProcessing(true)
    setButtonMsg('Processing...')

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
        setButtonMsg('Pay')
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
        setButtonMsg('Pay')
        return
      }

      setButtonMsg('Success! Payment is Complete')

      setTimeout(() => {
        setButtonMsg('Pay')
        setIsProcessing(false)
      }, 2000)

      console.log(confirmPayment.paymentIntent.status)
    } catch (error) {
      setCheckoutErrorMsg(error.message)
      setIsProcessing(false)
    }
  }

  return (
    <div>
      <div>checkouut</div>
      <p>{checkoutErrorMsg}</p>
      <form onSubmit={handlePayment}>
        <input type='text' placeholder='Full name' name='name' required />
        <input type='text' placeholder='Phone Number' name='phone' required />
        <input type='email' placeholder='Email' name='email' required />
        <input type='text' placeholder='Address' name='address' required />
        <input type='text' placeholder='city' name='city' required />
        <input type='text' placeholder='pays' name='state' required />

        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button type='submit' disabled={isProcessing}>
          {buttonMsg}
        </button>
      </form>
      <hr />
      {cards.map(item => (
        <div key={item.id}>
          <p> {item.title} </p>{' '}
        </div>
      ))}
    </div>
  )
}

export default Checkout
