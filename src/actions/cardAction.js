import { useDispatch } from 'react-redux'

export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

export const addCard = product => ({
  type: ADD_CARD,
  payload: {
    product: product
  }
})

export const removeCard = product => ({
  type: REMOVE_CARD,
  payload: {
    product: product.id || product._id
  }
})
