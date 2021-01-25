// @ts-nocheck
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
// import axios from '../services/axios'
import axios from 'axios'
import request from '../services/requests'
import { useHistory } from 'react-router-dom'
// import StripeCheckout from 'react-stripe-checkout'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import styled from 'styled-components'
import { allRemoveCard } from '../actions/cardAction'
import { connect, useDispatch } from 'react-redux'

const Checkout = ({ cards, total }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutErrorMsg, setCheckoutErrorMsg] = useState('')
  const [buttonMsg, setButtonMsg] = useState('Passer la commande')
  const [verifiedMsg, setVerifiedMsg] = useState('')
  const baseImage = process.env.REACT_APP_BASE_IMAGE
  const element = useElements()
  const token = localStorage.getItem('token')
  const stripe = useStripe()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(total())
  }, [])

  const handleChange = e => {
    if (e.error) {
      return setCheckoutErrorMsg(e.error.message)
    }
    setCheckoutErrorMsg('')
  }

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
        setButtonMsg('Passer la commande')
        return
      }

      setButtonMsg('Success! Payment is Complete')

      setTimeout(() => {
        setButtonMsg('Pay')
        setIsProcessing(false)
        dispatch(allRemoveCard(cards))
      }, 2000)

      console.log(confirmPayment.paymentIntent.status)
    } catch (error) {
      setCheckoutErrorMsg(error.message)
      setIsProcessing(false)
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
                  <input type='email' name='email' required />
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

      {/* <p>{checkoutErrorMsg}</p> */}
    </StyleChekout>
  )
}

export default Checkout

const StyleChekout = styled.div`
  .checkout__title {
    margin: 30px 0;
    text-align: center;
    span {
      font-size: 33px;
      letter-spacing: 2px;
    }
  }
  .grid__checkout {
    width: 65%;
    margin: 0 auto;
    display: grid;
    gap: 25px;
    grid-template-columns: 70% 30%;

    .detail__payment {
      border-top: 1px solid #aaa;
      .info {
        margin: 30px 0;
        font-size: 20px;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
      form {
        .form__card {
          box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
            rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
          padding: 25px 0;
          .form__title {
            text-align: center;
            padding: 15px 0;
            font-size: 20px;
          }
          .group {
            width: 90%;
            margin: 0 auto;
            .form__group {
              padding: 5px 0;
              display: flex;
              flex-direction: column;
              label {
                font-size: 15px;
                line-height: 30px;
                color: rgb(0, 8, 28);
                letter-spacing: 2px;
                text-transform: uppercase;
              }
              input {
                border-radius: 2px;
                background-color: rgb(255, 255, 255);
                border: 1px solid rgb(199, 199, 199);
                text-size-adjust: 100%;
                padding: 15px 8px;
                outline: none;
              }
              input[type='number'] {
                -moz-appearance: textfield;
                appearance: textfield;
                margin: 0;

                &::-webkit-inner-spin-button,
                &::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              }
              .element {
                border: 1px solid rgb(199, 199, 199);
                padding: 15px 5px;
                text-size-adjust: 100%;
                border-radius: 2px;
                background-color: rgb(255, 255, 255);
              }
            }
          }
        }
        .btn__checkout {
          padding: 50px 0;
          button {
            width: 100%;
            padding: 17px 0;
            background-color: #071120;
            border-radius: 2px;
            font-size: 15px;
            letter-spacing: 3px;
            text-transform: uppercase;
            border: none;
            color: #c8ba7a;
            cursor: pointer;
            outline: none;
          }
        }
      }
    }
    .visualisation__product {
      box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
        rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
      align-self: flex-start;

      .grid__product {
        display: flex;
        padding: 1px 0;
        border-bottom: 1px solid #aaa;
        .product__image {
          padding: 55px 50px;
          margin-right: 5px;
          .image {
            position: relative;
            img {
              width: 80px;
              background-color: transparent;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .product__detail {
          letter-spacing: 2px;
          padding: 8px 0;
          font-size: 14px;
          .product__title {
            padding: 3px 0;
          }
          .product__price {
            padding: 3px 0;
          }
          .product__color {
            text-transform: capitalize;
          }
        }
        .product__qty {
          width: 100px;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          align-items: flex-end;
          align-self: stretch;
          padding: 10px 0;
          .drop {
            left: 0;
            cursor: pointer;
            svg {
              font-size: 18px;
            }
          }
        }
      }
      .total {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 20px 18px;
        font-size: 15px;
        letter-spacing: 2px;
        border-bottom: 1px solid #aaa;
      }
    }
  }
`
