// @ts-nocheck
import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
import banniereWatches from '../assets/img/watch.jpg'

const Watches = () => {
  const secondText = 'UNE MONTRE À LA FOIS CLASSIQUE'
  const thridText = 'ET MODERNE POUR TOUTES LES OCCASIONS'
  return (
    <div>
      <Row
        title='TOUTES LES MONTRES'
        fetchUrl={request.fetchWatches}
        banniereImage={banniereWatches}
        secondText={secondText}
        thridText={thridText}
      />
    </div>
  )
}

export default Watches
