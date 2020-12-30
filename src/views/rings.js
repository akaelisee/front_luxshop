import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
const Rings = () => {
  return (
    <div>
      <Row title='Rings' fetchUrl={request.fetchRings} />
    </div>
  )
}

export default Rings
