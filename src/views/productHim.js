import React from 'react'
import Row from '../components/row'
// import request from '../services/requests'
import BannerHim from '../assets/img/businessman-checking-time.jpg'

const ProductHim = () => {
  const request = 'http://localhost:5000/api/product/genre/him'
  return (
    <div>
      <Row
        title='LOOKS POUR LUI'
        fetchUrl={request}
        banniereImage={BannerHim}
      />
    </div>
  )
}

export default ProductHim
