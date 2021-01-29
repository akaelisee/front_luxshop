import React from 'react'
import Row from '../components/row'
// import request from '../services/requests'
import BannerHer from '../assets/img/young-beautiful-girl-sitting-floor-black-white-wall.jpg'
const ProductHer = () => {
  // const request = re
  return (
    <div>
      <Row
        title='LOOKS POUR ELLE'
        fetchUrl='http://localhost:5000/api/product/genre/her'
        banniereImage={BannerHer}
      />
    </div>
  )
}

export default ProductHer
