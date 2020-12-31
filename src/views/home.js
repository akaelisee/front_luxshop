import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../services/axios'
import request from '../services/requests'

const Home = () => {
  const [products, setProducts] = useState([])
  const fetchUrl = `${request.fetchProducts}/`
  const baseImage =
    'https://www.danielwellington.com/media/staticbucket/media/catalog/product'
  const regex = / /gi
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
            <Link
              to={`/detail/${product.title
                .replace(regex, '-')
                .toLowerCase()}}/${product.id}`}
            >
              {product.title}
            </Link>
            , {product.price}$ | <button> Ajout </button>
          </p>
          {/* <p> couleur: {product.color[0]}</p> */}
          {/* <img src={`${baseImage}${product.backdrop_path}`} /> */}
        </div>
      ))}
    </div>
  )
}

export default Home
