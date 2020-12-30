import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
const Watches = () => {
  return (
    <div>
      <Row title='Watches' fetchUrl={request.fetchWatches} />
    </div>
  )
}

export default Watches
