// @ts-nocheck
import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
import banniereRings from '../assets/img/wedding.jpg'

const Rings = () => {
  return (
    <div>
      <Row
        title='Bagues'
        fetchUrl={request.fetchRings}
        banniereImage={banniereRings}
      />
    </div>
  )
}

export default Rings
