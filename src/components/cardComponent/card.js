// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { removeCard } from '../../actions/cardAction'
import { IncrementQty, DecrementQty } from '../../actions/qty'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faTimes,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import SlideBar from '../../styles/SlideBar'

const Card = ({ cardReducers, setIsCard }) => {
  // const [isDelete, setIsDelete] = useState(false)
  const dispatch = useDispatch()
  const baseImage = process.env.REACT_APP_BASE_IMAGE

  const sum = () => {
    let total = 0
    cardReducers.forEach(element => {
      total += element.qty * element.price
    })
    return total
  }

  const handleCardExist = () => {
    document.querySelector('body').style.overflow = 'auto'
    // document.querySelector('body').style.backgroundColor = 'transparent'
    setIsCard(false)
  }

  return (
    <SlideBar>
      <div className='flex__first'></div>
      <div className='flex__last'>
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
      </div>
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
