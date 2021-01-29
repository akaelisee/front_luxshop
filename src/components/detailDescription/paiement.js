import React from 'react'
import Cb from '../../assets/img/carte-bancaire-2x.png'
import Master from '../../assets/img/mastercard-2x.png'
import Maestro from '../../assets/img/maestro-2x.png'
import PayPal from '../../assets/img/paypal-2x.png'
import DetailStyle from '../../styles/DetailStyle'
const Paiement = () => {
  return (
    <DetailStyle>
      <div className='paiement'>
        <p>Nous proposons des moyens de paiements en ligne et sécurisés </p>
        <div className='block__img'>
          <img src={Cb} className='img-responsive' alt='Image' />
          <img src={Master} className='img-responsive' alt='Image' />
          <img src={Maestro} className='img-responsive' alt='Image' />
          <img src={PayPal} className='img-responsive' alt='Image' />
        </div>
      </div>
    </DetailStyle>
  )
}

export default Paiement
