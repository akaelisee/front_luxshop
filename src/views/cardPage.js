import React, { useState, useEffect } from 'react'
import axios from '../services/axios'
import request from '../services/requests'
import { useHistory, Redirect } from 'react-router-dom'

const CardPage = () => {
  const fetchUrl = request.fetchOrder
  const [cards, setCards] = useState([])
  const [cardOrder, setCardOrder] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [qty, setQty] = useState('')
  const token = localStorage.getItem('token')
  const history = useHistory()

  useEffect(() => {
    axios
      // @ts-ignore
      .get(fetchUrl, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        setCards(res.data)
        setCardOrder(res.data.Order)
        const response = {
          t: res.data.Order.map(item => {
            return item.quantity
          })
        }

        const groupPrice = {
          t: res.data.Order.map(item => {
            return item.product.price
          })
        }
        // @ts-ignore
        setQty(response)
        setTotalPrice(groupPrice.t)
      })
      // @ts-ignore
      .catch(err => {
        console.log(err)
      })
  }, [fetchUrl])

  // delete
  const handleDelete = id => {
    axios
      // @ts-ignore
      .delete(`${fetchUrl}${id}`, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        console.log(res)
      })
      // @ts-ignore
      .catch(err => {
        console.log(err)
      })
  }

  const qtyFunc = price => {}

  const next = () => {
    const ab = qty + 1
    return ab
  }

  const funcPrice = () => {
    // const total = totalPrice.reduce((total, item) => total + item)
    // return total
  }

  return (
    <div>
      <p> Count : {cards.count} product</p>
      <div>
        {cardOrder.map(card => (
          <div key={card.id || card._id}>
            <p>
              titte: {card.product.title} | quantity : <button> - </button>
              {card.quantity} <button onClick={() => next()}> + </button> ||
              <button onClick={() => handleDelete(card.id || card._id)}>
                supprimer
              </button>
            </p>
            <p> price: {card.product.price}</p>
          </div>
        ))}
      </div>
      <p> total prix : {funcPrice()} </p>
    </div>
  )
}

export default CardPage
