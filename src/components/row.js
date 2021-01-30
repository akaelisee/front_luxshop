// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../services/axios'
import PropTypes from 'prop-types'
// component
import { Loader } from '../components/loader'
// style
import Banniere from '../styles/Banniere'
import Container from '../styles/Container'
import Col from '../styles/Col'
import Wrapper from '../styles/Wrapper'
import { Card, Image, CardBody } from '../styles/Card'

const Row = ({ title, fetchUrl, banniereImage, secondText, thridText }) => {
  const baseImage = process.env.REACT_APP_BASE_IMAGE
  const [products, setProducts] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const regex = / /gi

  useEffect(() => {
    const token = localStorage.getItem('token')
    async function fetchData() {
      await axios
        .get(fetchUrl, {
          headers: {
            'auth-token': token
          }
        })
        .then(res => {
          setProducts(res.data.results)
          setIsLoader(true)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [fetchUrl])

  if (!isLoader) {
    return <Loader />
  }
  return (
    <Container>
      <Col>
        <Banniere url={`url(${banniereImage})`} alt='banniere' />
        <div className='col__text'>
          <div className='text'>
            <p style={{ textAlign: 'center' }}>{title}</p>
          </div>
          <div className='sous__text'>
            {secondText && thridText ? (
              <p>
                {secondText} <br /> {thridText}
              </p>
            ) : (
              <p> TOUTES LES COLLECTIONS</p>
            )}
          </div>
        </div>
      </Col>
      <Wrapper>
        <Card>
          {products.map(product => (
            <div className='card__product' key={product._id}>
              <Link
                to={`/detail/${product.title
                  .replace(regex, '-')
                  .toLowerCase()}}/${product._id}`}
              >
                <div className='card__image'>
                  <Image src={`${baseImage}${product.backdrop_path}`} />
                </div>

                <CardBody>
                  <div className='card__title'>
                    <span> {product.title}</span>
                  </div>
                  <div className='cord__text'>
                    <p>{product.color[0]}</p>
                    <span> {product.price} € </span>
                  </div>
                </CardBody>
              </Link>
            </div>
          ))}
        </Card>
      </Wrapper>
    </Container>
  )
}

Row.propTypes = {
  fetchUrl: PropTypes.any,
  title: PropTypes.string,
  banniereImage: PropTypes.string,
  secondText: PropTypes.string,
  thridText: PropTypes.string
}

export default Row
