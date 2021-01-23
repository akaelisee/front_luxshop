// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCard } from '../../actions/cardAction'
import { IncrementQty, DecrementQty } from '../../actions/qty'
import Checkout from '../checkout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faTimes,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const Card = ({ cardReducers, login, setIsCard }) => {
  const [visible, setVisible] = useState(false)
  const stripePromise = loadStripe(process.env.REACT_APP_KEY)
  const dispatch = useDispatch()
  const baseImage = process.env.REACT_APP_BASE_IMAGE

  useEffect(() => {}, [])
  const sum = () => {
    let total = 0
    cardReducers.forEach(element => {
      total += element.qty * element.price
    })
    return total
  }

  const handleVisible = () => {
    if (!visible) {
      return <></>
    } else {
      return (
        <>
          <Elements stripe={stripePromise}>
            <Checkout total={sum} verified={login} cards={cardReducers} />
          </Elements>
        </>
      )
    }
  }

  const handleCardExist = () => {
    document.querySelector('body').style.overflow = 'auto'
    setIsCard(false)
  }

  return (
    <SlideBar>
      <div className=''></div>
      <div className='slidebar__right'>
        <div className='slide__navbar'>
          <div className='close'>
            <span onClick={() => handleCardExist()} className='btn__close'>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div className='title'>
            <span> Votre Panier </span>
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
        <div className='grid'>
          {cardReducers.map(product => (
            <div className='product__item' key={product.id || product._id}>
              <div className='grid__product'>
                <div className='product__image'>
                  <img src={`${baseImage}${product.backdrop_path}`} />
                </div>
                <div className='product__detail'>
                  <p className='product__title'> {product.title}</p>
                  <p className='product__price'>
                    {product.qty} x {product.price}
                  </p>
                  <p className='product__color'>
                    {/* {product.color[0]} {product.dimension[0]} */}
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
                    <button onClick={() => dispatch(DecrementQty(product.id))}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className='qty'> {product.qty} </span>
                    <button onClick={() => dispatch(IncrementQty(product.id))}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='block'></div>
            </div>
          ))}
        </div>
        {/* <p> count : {cardReducers.length}</p> */}
        <button onClick={() => setVisible(true)}> Pay {sum()} </button>
      </div>
      {handleVisible()}
    </SlideBar>
  )
}

Card.propTypes = {
  cardReducers: PropTypes.array,
  login: PropTypes.object,
  setIsCard: PropTypes.any
}

const mapStateToProps = state => ({
  cardReducers: state.cardReducers.productCard,
  login: state.login.userLogin
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
const PageRight = keyframes`
  from {
    transform: translate(0%, 0%);
  }

  to {
    transform: translate(100%, 0%);
  }
`
const SlideBar = styled.div`
  position: fixed;
  background-color: rgba(187, 187, 187, 0.542);
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 71% 29%;
  z-index: 20;
  .slidebar__right {
    background-color: #fff;
    border-left: 1px solid #fff;
    animation: ${PageLeft} 0.4s linear;
    .slide__navbar {
      padding: 15px 0;
      /* background-color: #f00; */
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #aaa;
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
      margin-top: 10px;
      .product__item {
        .grid__product {
          display: flex;
          /* justify-content: space-between; */
          padding: 5px 0;
          .product__image {
            img {
              width: 110px;
              background-color: transparent;
            }
          }
          .product__detail {
            letter-spacing: 2px;
            padding: 8px 0;
            width: 225px;
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
  }
  /* .slide_hide {
    animation: ${PageRight} 0.4s linear;
  } */
`
