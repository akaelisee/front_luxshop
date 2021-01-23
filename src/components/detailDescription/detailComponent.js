import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailComponent = ({ product, color, girth }) => {
  useEffect(() => {
    console.log(product)
  }, [])
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

const DetailStyle = styled.div`
  margin: 15px 0;
  .detail__group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    .detail__overview {
      padding-right: 20px;
      font-size: 15px;
      p {
        font-size: 15px;
        letter-spacing: 3px;
        margin-bottom: 10px;
      }
    }
    .detail__table {
      font-size: 14px;
      .detail__item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 5px 0;
        span {
          margin: 0px 0.25rem;
          /* text-transform: capitalize; */
        }
        .title {
          margin: 0px 0.25rem;
          color: rgb(110, 110, 110);
          line-height: 22.4px;
          letter-spacing: 0.15px;
        }
      }
    }
  }
`
