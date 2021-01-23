// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import axios from '../services/axios'
// import request from '../services/requests'
import Her from '../assets/img/heere.jpg'
import Him from '../assets/img/himee.jpg'
import axios from 'axios'
import banniereImg from '../assets/img/home.jpg'
import { Banniere, Banner } from '../styles/Banniere'
import Col from '../styles/Col'
import Wrapper from '../styles/Wrapper'
import Rows from '../styles/Rows'
import { Card, Image, CardBody } from '../styles/Card'

const Home = props => {
  const [products, setProducts] = useState([])
  // const fetchUrl = `${request.fetchProducts}`
  const fetchUrl = `http://localhost:5000/api/products-eight`
  const baseImage = process.env.REACT_APP_BASE_IMAGE
  const regex = / /gi

  useEffect(() => {
    console.log(props)
    const token = localStorage.getItem('token')
    axios
      .get(fetchUrl, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        setProducts(res.data.result)
      })
      .catch(err => {
        console.log(err)
      })
  }, [fetchUrl])
  return (
    <Container>
      <Col>
        <Banniere url={`url(${banniereImg})`} alt='banierre' />
        <div className='col__text'>
          <div className='text'>
            <p>
              Apportez la touche <br /> finale à votre look
            </p>
          </div>
          <div className='sous__text'>
            <p>
              Découvrez nos <br /> montres et accessoires
            </p>
          </div>
          <div className='btn__explore'>
            <Link to='/product'> Explorez </Link>
          </div>
        </div>
      </Col>
      <Wrapper>
        <div className='wrapper__btn'>
          <Link to='/watches'> Montres </Link>
          <Link to='/bracelets'> Bracelets</Link>
          <Link to='/rings'> Bagues </Link>
          <Link to='/necklaces'> Colliers </Link>
        </div>

        <div className='wrapper__title'>
          <p> CELLE QUI VOUS CORRESPOND PARFAITEMENT </p>
        </div>

        <Card>
          {products.map(product => (
            <div className='card__product' key={product.id}>
              <Link
                to={`/detail/${product.title
                  .replace(regex, '-')
                  .toLowerCase()}}/${product.id}`}
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

        <Rows>
          <div className='col__her'>
            <Banner url={`url(${Her})`} />
            <div className='her__looks'>
              <span>
                Looks <br /> Pour elle
              </span>
              <div className='btn__her'>
                <Link to='/looks-for-her'> Découvrir </Link>
              </div>
            </div>
          </div>
          <div className='col__him'>
            <Banner url={`url(${Him})`} />
            <div className='him__looks'>
              <span>
                Looks <br /> Pour lui
              </span>
              <div className='btn__him'>
                <Link to='/looks-for-him'> Découvrir </Link>
              </div>
            </div>
          </div>
        </Rows>
      </Wrapper>
      <div></div>
    </Container>
  )
}

export default Home

const Container = styled.div``
