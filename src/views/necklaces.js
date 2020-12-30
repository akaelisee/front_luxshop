import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
const Necklaces = () => {
  return (
    <div>
      <Row title='Necklaces' fetchUrl={request.fetchNecklaces} />
    </div>
  )
}

export default Necklaces
