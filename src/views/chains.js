import React from 'react'
import Row from '../components/row'
// import request from '../services/requests'
import banniereChains from '../assets/img/chains-image.jpg'

const Chains = () => {
  return (
    <div>
      <Row
        title='Boucle d&lsquo;oreille'
        fetchUrl='http://localhost:5000/api/chains'
        banniereImage={banniereChains}
      />
    </div>
  )
}

export default Chains
