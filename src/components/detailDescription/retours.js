import React from 'react'
import DetailStyle from '../../styles/DetailStyle'

const Retours = () => {
  return (
    <DetailStyle>
      <div className='retours'>
        <p>
          Nous offrons un service de retour gratuit sur tous nos produits. Vous
          pouvez renvoyer les articles que vous avez achetés dans les 30 jours à
          compter de leur réception pour un remboursement intégral.{' '}
        </p>
        <p>
          Veuillez noter que les articles achetés en ligne ne peut pas être
          renvoyés à un revendeur local.
        </p>
        <p>
          Veuillez noter que les articles « gratuits » (et tout produit gratuit
          reçu dans le cadre d&apos;une offre promotionnelle) ne sont pas
          échangeables et doivent être retournés conjointement avec les autres
          articles de votre commande si vous retournez votre commande pour
          obtenir un remboursement.
        </p>
        <p>
          L&apos;offre de campagne est basée sur le montant de l&apos;achat
          initial. En cas de retour où vous ne remplissez plus les critères de
          l&apos;offre de campagne et de conservation du cadeau, le cadeau
          gratuit sera facturé.
        </p>
        <p> En savoir plus sur notre Politique de confidentialité</p>
      </div>
    </DetailStyle>
  )
}

export default Retours
