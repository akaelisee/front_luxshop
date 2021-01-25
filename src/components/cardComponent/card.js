// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { removeCard } from '../../actions/cardAction'
import { IncrementQty, DecrementQty } from '../../actions/qty'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faTimes,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Card = ({ cardReducers, setIsCard }) => {
  const [isDelete, setIsDelete] = useState(false)
  const dispatch = useDispatch()
  const baseImage = process.env.REACT_APP_BASE_IMAGE

  useEffect(() => {
    console.log(cardReducers)
  }, [])
  const sum = () => {
    let total = 0
    cardReducers.forEach(element => {
      total += element.qty * element.price
    })
    return total
  }

  const handleCardExist = () => {
    document.querySelector('body').style.overflow = 'auto'
    document.querySelector('body').style.backgroundColor = 'transparent'
    setIsCard(false)
  }

  return (
    <SlideBar>
      <div className='slide__navbar'>
        <div className='close'>
          <span onClick={() => handleCardExist()} className='btn__close'>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div className='title'>
          <span>Votre Panier</span>
        </div>
        <div className='cart'>
          <p>
            <FontAwesomeIcon icon={faShoppingCart} />
            {!cardReducers.length == 0 ? (
              <span> {cardReducers.length} </span>
            ) : (
              <></>
            )}
          </p>
        </div>
      </div>
      {cardReducers.length > 0 ? (
        <>
          <div className='grid'>
            {cardReducers.map(product => (
              <div className='product__item' key={product.id || product._id}>
                <div className='grid__product'>
                  <div className='product__image'>
                    <div className='image'>
                      <img src={`${baseImage}${product.backdrop_path}`} />
                    </div>
                  </div>
                  <div className='product__detail'>
                    <p className='product__title'> {product.title}</p>
                    <p className='product__price'>
                      {product.qty} x {product.price}
                    </p>
                    <p className='product__color'>
                      {product.choosenColor}&nbsp;{product.choosenDimension}
                    </p>
                  </div>
                  <div className='product__qty'>
                    <div
                      className='drop'
                      onClick={() => dispatch(removeCard(product))}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                    <div className='btn__qty'>
                      <button
                        onClick={() => dispatch(DecrementQty(product.id))}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className='qty'> {product.qty} </span>
                      <button
                        onClick={() => dispatch(IncrementQty(product.id))}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='block'></div>
              </div>
            ))}
          </div>
          <div className='total'>
            <div className='group__sum'>
              <div className='montant'>
                <span className='title__montatnt'>Montant global</span>
                <span className='price'> {sum()} € </span>
              </div>
              <div className='btn__total'>
                <Link to='/payment' onClick={() => handleCardExist()}>
                  Passer la commande
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='retour'>
            <p> Votre panier est vide </p>
            <div className='btn__retour'>
              <button onClick={() => handleCardExist()}>
                Continuer mon shopping
              </button>
            </div>
          </div>
        </>
      )}
    </SlideBar>
  )
}

Card.propTypes = {
  cardReducers: PropTypes.array,
  setIsCard: PropTypes.any
}

const mapStateToProps = state => ({
  cardReducers: state.cardReducers.productCard
})

export default connect(mapStateToProps)(Card)

const PageLeft = keyframes`
  from {
    transform: translate(100%, 0%);
  }

  to {
    transform: translate(0%, 0%);
  }
`
const SlideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: #fff;
  animation: ${PageLeft} 0.2s linear;
  width: 420px;
  overflow: auto;
  box-shadow: -1px 0px 1px -1px rgba(0, 0, 0, 0.75);
  .slide__navbar {
    position: fixed;
    top: 0;
    right: 0;
    padding: 16px 0;
    width: 420px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
    background-color: #fff;

    z-index: 5;
    .close {
      align-self: center;
      margin-left: 15px;
      cursor: pointer;
      .btn__close {
      }
    }
    .title {
      font-size: 20px;
      letter-spacing: 2px;
      align-self: center;
    }
    .cart {
      position: relative;
      padding: 10px;
      align-self: center;
      margin-right: 15px;
      cursor: pointer;
      span {
        text-align: center;
        position: absolute;
        background-color: green;
        top: 0%;
        right: 0%;
        transform: translate(0%, -20%);
        width: 46%;
        padding: 2px;
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  svg {
    color: #000;
    font-size: 25px;
  }
  .grid {
    margin-top: 80px;
    .product__item {
      .grid__product {
        display: flex;
        /* justify-content: space-between; */
        padding: 5px 0;
        .product__image {
          padding: 55px 50px;
          margin-right: 10px;
          .image {
            position: relative;
            img {
              width: 100px;
              background-color: transparent;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .product__detail {
          letter-spacing: 2px;
          padding: 8px 0;
          width: 185px;
          .product__title {
            padding: 3px 0;
          }
          .product__price {
            padding: 3px 0;
          }
          .product__color {
            text-transform: capitalize;
          }
        }
        .product__qty {
          width: 100px;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          align-items: flex-end;
          align-self: stretch;
          padding: 10px 0;
          .drop {
            left: 0;
            cursor: pointer;
            svg {
              font-size: 18px;
            }
          }
          .btn__qty {
            button {
              width: 10px;
              padding: 8px;
              position: relative;
              align-self: flex-end;
              top: -5px;
              border: 1px solid #000;
              background-color: transparent;
              border-radius: 2px;
              cursor: pointer;
              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 11px;
                color: #aaa;
              }
            }
            .qty {
              margin: 0 6px;
              align-self: flex-end;
              font-size: 13px;
            }
          }
        }
      }
      .block {
        height: 50px;
        background-color: #f4f4f4;
        position: relative;
        &::before {
          content: '';
          border-bottom: 8px solid #f4f4f4;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 0px solid transparent;
          position: absolute;
          top: -8px;
          left: 12%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .total {
    position: relative;
    height: 130px;
    .group__sum {
      position: fixed;
      background-color: #fff;
      right: 0;
      bottom: 0;
      width: 420px;
      .montant {
        margin: 0 18px;
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        letter-spacing: 2px;
        border-bottom: 1px solid #aaa;
      }
      .btn__total {
        text-align: center;
        margin: 25px 0;
        a {
          margin: 0 18px;
          text-decoration: none;
          padding: 10px 106px;
          background-color: #071120;
          color: #c8ba7a;
          transition: all 0.2s;
          &:hover {
            background-color: rgba(7, 17, 32, 0.733);
          }
        }
      }
    }
  }
  .retour {
    padding: 80px 0;
    font-size: 16px;
    color: #000;
    text-align: center;
    letter-spacing: 2px;

    p {
      margin: 50px 0 15px 0;
      /* line-height: 50px; */
    }
    .btn__retour {
      button {
        text-decoration: none;
        padding: 20px 0px;
        width: 70%;
        background-color: #071120;
        color: #c8ba7a;
        transition: all 0.2s;
        border: none;
        border-radius: 2px;
        font-size: 15px;
        letter-spacing: 3px;
        cursor: pointer;
      }
    }
  }
`
