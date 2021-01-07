import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeLibrary } from '../actions/library'
import { IncrementQty, DecrementQty } from '../actions/qty'

const Library = ({ library }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <p> count : {library.length}</p>
      {library.map(product => (
        <div key={product.id || product._id}>
          <p>
            {product.title}
            <button onClick={() => dispatch(removeLibrary(product))}>
              Supprimer
            </button>
          </p>
        </div>
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
