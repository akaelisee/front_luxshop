import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
import banniereNecklace from '../assets/img/collier.jpg'

const Necklaces = () => {
  return (
    <div>
      <Row
        title='Colliers'
        fetchUrl={request.fetchNecklaces}
        banniereImage={banniereNecklace}
      />
    </div>
  )
}

export default Necklaces
