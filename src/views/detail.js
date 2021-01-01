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
  const param = useParams()
  useEffect(() => {
    const token = localStorage.getItem('token')
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

  return (
    <div>
      <div> Titre : {product.title} </div>
      <br />
      <div> Prix : {product.price} $</div>
      <br />
      <div> Description : {product.overview} </div>
      <br />
      <div> mmtiére : {product.matter} </div>
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
        <Card productId={product.id || product._id} />
        <button> Ajouer au panier </button>
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
