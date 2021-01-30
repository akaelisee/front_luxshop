import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
import BannerHer from '../assets/img/young-beautiful-girl-sitting-floor-black-white-wall.jpg'
const ProductHer = () => {
  return (
    <div>
      <Row
        title='LOOKS POUR ELLE'
        fetchUrl={request.fetchHer}
        banniereImage={BannerHer}
      />
    </div>
  )
}

export default ProductHer
