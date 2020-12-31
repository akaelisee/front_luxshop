import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeLibrary } from '../actions/library'

const Library = ({ library }) => {
  const dispatch = useDispatch()
  return (
    <div>
      {library.map(product => (
        <p key={product.id || product._id}>
          {product.title} ||
          <button onClick={() => dispatch(removeLibrary(product))}>
            Supprimer
          </button>
        </p>
      ))}
    </div>
  )
}

Library.propTypes = {
  library: PropTypes.array
}

const mapStateToProps = state => ({
  library: state.library.productLibrary
})

export default connect(mapStateToProps)(Library)
