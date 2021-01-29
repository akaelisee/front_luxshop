import React from 'react'
import PropTypes from 'prop-types'
import DetailStyle from '../../styles/DetailStyle'

const DetailComponent = ({ product, color, girth }) => {
  return (
    <DetailStyle>
      <div className='detail__group'>
        <div className='detail__overview'>
          <p>UN SOURIRE AU POIGNET</p>
          <span> {product.overview} </span>
        </div>
        <div className='detail__table'>
          <div className='detail__item'>
            <span className='title'> Réf. </span>
            <span> {product.reference} </span>
          </div>

          {/* circonférence */}
          {girth.length > 0 ? (
            <div className='detail__item'>
              <span className='title'> circonférence</span>
              <span>
                {girth[0]}mm / {girth[1]}inch
              </span>
            </div>
          ) : (
            <></>
          )}
          {/* end circonférence */}

          {/* matter */}
          {product.matter == '' ? (
            <></>
          ) : (
            <div className='detail__item'>
              <span className='title'> Matière</span>
              <span> {product.matter} </span>
            </div>
          )}
          {/* end matter */}

          {/* Largeur */}
          {product.atrap_width == 0 ? (
            <></>
          ) : (
            <div className='detail__item'>
              <span className='title'> Largeur du bracelet</span>
              <span> {product.atrap_width} </span>
            </div>
          )}
          {/* End Largeur */}

          {/* adjustable_length */}
          {product.adjustable_length == '' ? (
            <></>
          ) : (
            <div className='detail__item'>
              <span className='title'> Longueur réglable</span>
              <span> {product.adjustable_length}mm </span>
            </div>
          )}
          {/* adjustable_length */}

          <div className='detail__item'>
            <span className='title'> Couleur du Bracelet</span>
            <span> {color[0]}</span>
          </div>
        </div>
      </div>
    </DetailStyle>
  )
}

DetailComponent.propTypes = {
  product: PropTypes.any,
  color: PropTypes.array,
  girth: PropTypes.array
}

export default DetailComponent
