import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../services/axios'
import PropTypes from 'prop-types'

const Row = ({ title, fetchUrl }) => {
  const baseImage =
    'https://www.danielwellington.com/media/staticbucket/media/catalog/product'
  const history = useHistory()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    async function fetchData() {
      const request = await axios
        .get(fetchUrl, {
          headers: {
            'auth-token': token
          }
        })
        .then(res => {
          setProducts(res.data.results)
        })
        // @ts-ignore
        .catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [fetchUrl])
  return (
    <div>
      <p> {title} </p>
      <br />
      {products.map(product => (
        <div key={product._id}>
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

Row.propTypes = {
  fetchUrl: PropTypes.any,
  title: PropTypes.string
}

export default Row
