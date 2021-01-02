import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../services/axios'
import request from '../services/requests'
const Card = ({ productId }) => {
  const [order, setOrder] = useState(productId)
  const fetchUrl = request.fetchAddOrder
  useEffect(() => {
    // console.log(productId)
    // const token = localStorage.getItem('token')
    // axios
    //   // @ts-ignore
    //   .get(`${fetchUrl}`, {
    //     headers: {
    //       'auth-token': token
    //     }
    //   })
    //   .then(res => {
    //     // setProduct(res.data)
    //     // setPoster(res.data.group_poster_path)
    //   })
    //   // @ts-ignore
    //   .catch(err => {
    //     console.log(err)
    //   })
  }, [fetchUrl])

  const handleSubmit = e => {
    e.preventDefault()

    console.log(order)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={order}
          // @ts-ignore
          onChange={e => setOrder(e.target.value)}
        />
        <button> valider </button>
      </form>
    </div>
  )
}

Card.propTypes = {
  productId: PropTypes.any
}

export default Card
