import React, { useState, useEffect } from 'react'
import axios from '../services/axios'
import request from '../services/requests'

const Home = () => {
  const [products, setProducts] = useState([])
  const fetchUrl = request.fetchProducts
  const baseImage =
    'https://www.danielwellington.com/media/staticbucket/media/catalog/product'
  useEffect(() => {
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
      // @ts-ignore
      .catch(err => {
        console.log(err)
      })
  }, [fetchUrl])
  return (
    <div>
      <p> product </p>
      <br />
      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.title}, {product.price}$
          </p>
          <p> couleur: {product.color[0]} </p>
          <p> {product.backdrop_path} </p>
          <img src={`${baseImage}${product.backdrop_path}`} />
        </div>
      ))}
    </div>
  )
}

export default Home
