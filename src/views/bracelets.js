import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
const Bracelets = () => {
  return (
    <div>
      <Row title='Bracelets' fetchUrl={request.fetchBracelets} />
    </div>
  )
}

export default Bracelets
