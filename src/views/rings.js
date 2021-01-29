// @ts-nocheck
import React from 'react'
import Row from '../components/row'
// import request from '../services/requests'
import banniereRings from '../assets/img/wedding.jpg'

const Rings = () => {
  return (
    <div>
      <Row
        title='Bagues'
        fetchUrl='http://localhost:5000/api/rings'
        banniereImage={banniereRings}
      />
    </div>
  )
}

export default Rings
