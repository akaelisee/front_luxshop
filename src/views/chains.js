import React from 'react'
import Row from '../components/row'
import request from '../services/requests'

const Chains = () => {
  return (
    <div>
      <Row title='chains' fetchUrl={request.fetchChains} />
    </div>
  )
}

export default Chains
