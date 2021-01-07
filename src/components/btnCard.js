import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

const BtnCard = ({ addCard }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(addCard)}> Panier </button>
    </div>
  )
}

BtnCard.propTypes = {
  addCard: PropTypes.object
}

export default BtnCard
