// @ts-nocheck
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCard } from '../actions/cardAction'
import { IncrementQty, DecrementQty } from '../actions/qty'
import Checkout from '../components/checkout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const CardPage = ({ cardReducers, login }) => {
  const [visible, setVisible] = useState(false)
  const stripePromise = loadStripe(
    'pk_test_51GqOG8FA3iluNmXdqfzRsQvPFoFwIndJ0X36FnbE4FP4UrIEb5kU73CqgkavOj796IvGD7pi3n7QOFbLehyo6o5b009INJQZWD'
  )
  const dispatch = useDispatch()

  const sum = () => {
    let total = 0
    cardReducers.forEach(element => {
      total += element.qty * element.price
    })
    return total
  }

  const handleVisible = () => {
    if (!visible) {
      return <></>
    } else {
      return (
        <>
          <Elements stripe={stripePromise}>
            <Checkout total={sum} verified={login} cards={cardReducers} />
          </Elements>
        </>
      )
    }
  }

  return (
    <div>
      <p> count : {cardReducers.length}</p>
      {cardReducers.map(product => (
        <div key={product.id || product._id}>
          <p>
            {product.title} || {product.price} euro ||
            <button onClick={() => dispatch(DecrementQty(product.id))}>
              -
            </button>{' '}
            {product.qty}{' '}
            <button onClick={() => dispatch(IncrementQty(product.id))}>
              +
            </button>{' '}
            ||
            <button onClick={() => dispatch(removeCard(product))}>
              Supprimer
            </button>
          </p>
        </div>
      ))}
      <button onClick={() => setVisible(true)}> Pay {sum()} </button>
      {handleVisible()}
    </div>
  )
}

CardPage.propTypes = {
  cardReducers: PropTypes.array,
  login: PropTypes.object
}

const mapStateToProps = state => ({
  cardReducers: state.cardReducers.productCard,
  login: state.login.userLogin
})

export default connect(mapStateToProps)(CardPage)
