// @ts-nocheck
// @ts-ignore
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BtnLibrary from '../components/btnLibrary'
import axios from '../services/axios'
import request from '../services/requests'
import { addLibrary, removeLibrary } from '../actions/library'
import { addCard } from '../actions/cardAction'
import BtnCard from '../components/btnCard'
import Container from '../styles/Container'
import Wrapper from '../styles/Wrapper'
import Rows from '../styles/Rows'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Slide from '../components/slide'
import DetailComponent from '../components/detailDescription/detailComponent'
import Card from '../components/cardComponent/card'
const Detail = ({ library }) => {
  const [product, setProduct] = useState([])
  const [poster, setPoster] = useState([])
  const [dimension, setDimension] = useState([])
  const [color, setcolor] = useState([])
  const [girth, setgirth] = useState([])
  const fetchUrl = `${request.fetchProducts}/`
  const token = localStorage.getItem('token')
  const param = useParams()
  const [isExist, setIsExist] = useState(1)
  const [isCard, setIsCard] = useState(false)

  useEffect(() => {
    axios
      .get(`${fetchUrl}${param?.id || param?._id}`, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        setProduct(res.data)
        setPoster(res.data.group_poster_path)
        setDimension(res.data.dimension)
        setcolor(res.data.color)
        setgirth(res.data.girth)
        initSwiper()
      })
      .catch(err => {
        console.log(err)
      })
  }, [fetchUrl])

  const initSwiper = () => {
    let mySwiper = new Swiper('.swiper-container', {
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }

  const cardExist = () => {
    if (isCard) {
      document.querySelector('body').style.overflow = 'hidden'
      return <Card isCard={isCard} setIsCard={setIsCard} />
    } else {
      return <> </>
    }
  }

  const existsInLibrary = product => {
    return library.find(
      item => item.id || item._id === product.id || product._id
    )
  }

  const handleExist = () => {
    if (isExist === 1) {
      return <DetailComponent product={product} color={color} girth={girth} />
    } else if (isExist === 2) {
      console.log(isExist)
    } else if (isExist === 3) {
      console.log(isExist)
    } else if (isExist === 4) {
      console.log(isExist)
    }
  }

  return (
    <Container detail>
      <Wrapper detail>
        <Rows>
          <div className='rows__swiper'>
            <Slide poster={poster} />
          </div>

          <div className='row__description'>
            <div className='row__title'>
              <span> {product.title} </span>
              <span> {product.price} € </span>
            </div>
            <hr />
            <div className='row__select'>
              <div className='select'>
                <label> Couleur : </label>
                <select name='' id='input' className='form-control'>
                  {color.map((item, index) => (
                    <option key={index} value=''>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className='select'>
                <label> Dimension : </label>
                {dimension.length == 0 ? (
                  <div className='no__size'>NoSize</div>
                ) : (
                  <select name='' id='input' className='form-control'>
                    {dimension.map((item, index) => (
                      <option key={index} value=''>
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <BtnGroup>
              <div className='btn__panier'>
                <BtnCard
                  addCard={addCard(product)}
                  isCard={isCard}
                  setIsCard={setIsCard}
                />
              </div>
              <div className='btn__library'>
                <BtnLibrary
                  addLibrary={addLibrary(product)}
                  removeLibrary={removeLibrary(product)}
                  existsInLibrary={existsInLibrary}
                />
              </div>
            </BtnGroup>
            <div>
              <ul type='square' style={{ fontSize: '13px' }}>
                <li> Retours gratuits pendant 30 jours </li>
                <li> Garantie De Deux Ans </li>
              </ul>
            </div>
          </div>
        </Rows>
        <div className='wrapper__description'>
          <div
            onClick={() => setIsExist(1)}
            className={isExist !== 1 ? 'not_underline' : ' underline'}
          >
            détail
          </div>
          <div
            onClick={() => setIsExist(2)}
            className={isExist !== 2 ? 'not_underline' : 'under underline'}
          >
            livraison
          </div>
          <div
            onClick={() => setIsExist(3)}
            className={isExist !== 3 ? 'not_underline' : 'under underline'}
          >
            paiement
          </div>
          <div
            onClick={() => setIsExist(4)}
            className={isExist !== 4 ? 'not_underline' : 'under underline'}
          >
            retours
          </div>
        </div>
        <div>{handleExist()}</div>
      </Wrapper>
      <div>{cardExist()}</div>
    </Container>
  )
}

Detail.propTypes = {
  library: PropTypes.any,
  cardReducers: PropTypes.any
}

const mapStateToProps = state => ({
  library: state.library.productLibrary,
  cardReducers: state.cardReducers.productCard
})

export default connect(mapStateToProps)(Detail)

const BtnGroup = styled.div`
  margin: 25px 0;
  text-align: center;

  .btn__library {
    width: 60%;
    margin: 20px auto;
  }
`
