import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ productId }) => {
  return <div> {console.log(productId)} </div>
}

Card.propTypes = {
  productId: PropTypes.any
}

export default Card
