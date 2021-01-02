// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// @ts-ignore
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BtnLibrary from '../components/btnLibrary'
import axios from '../services/axios'
import request from '../services/requests'
import { addLibrary, removeLibrary } from '../actions/library'
import Card from '../components/card'
const Detail = ({ library }) => {
  // @ts-ignore
  const [product, setProduct] = useState([])
  const [poster, setPoster] = useState([])
  const fetchUrl = `${request.fetchProducts}/`
  const fetchUrlOrder = request.fetchAddOrder
  const token = localStorage.getItem('token')
  const param = useParams()
  const [order, setOrder] = useState({ productId: param?.id || param?._id })
  useEffect(() => {
    axios
      // @ts-ignore
      .get(`${fetchUrl}${param?.id || param?._id}`, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        setProduct(res.data)
        setPoster(res.data.group_poster_path)
      })
      // @ts-ignore
      .catch(err => {
        console.log(err)
      })
  }, [fetchUrl])

  const existsInLibrary = product => {
    return library.find(
      item => item.id || item._id === product.id || product._id
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      productId: order.productId
    }

    axios
      .post(fetchUrlOrder, data, {
        headers: {
          'auth-token': token
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <div> Titre : {product.title} </div>
      <br />
      <div> Prix : {product.price} $</div>
      <br />
      <div> Description : {product.overview} </div>
      <br />
      <div> matiére : {product.matter} </div>
      <br />
      <div> Ref : {product.reference} </div>
      <div> longueur_ajustable : {product?.adjustable_length} </div>
      <div> dimension : {product?.dimension} </div>
      <div> girth : {product?.girth} </div>
      <div> color : {product?.color} </div>
      <div> atrap_width : {product?.atrap_width} </div>
      <div> backdrop_path : {product?.backdrop_path} </div>
      <div>
        {poster.map(item => (
          <p key={item.id}>{item.poster_path}</p>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='productId'
            value={order.productId}
            // @ts-ignore
            onChange={e => setOrder(e.target.value)}
            hidden
          />
          <button> Ajouter au panier </button>
        </form>
      </div>
      <br />
      <br />
      <div>
        <BtnLibrary
          addLibrary={addLibrary(product)}
          removeLibrary={removeLibrary(product)}
          existsInLibrary={existsInLibrary}
        />
      </div>
    </div>
  )
}

Detail.propTypes = {
  library: PropTypes.any
}

const mapStateToProps = state => ({
  library: state.library.productLibrary
})

export default connect(mapStateToProps)(Detail)
