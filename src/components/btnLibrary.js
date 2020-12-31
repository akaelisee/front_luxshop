import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

const BtnLibrary = ({ addLibrary, removeLibrary, existsInLibrary }) => {
  const [exist, setExist] = useState(existsInLibrary)
  const dispatch = useDispatch()
  const handleRemove = () => {
    setExist(false)
    dispatch(removeLibrary)
    // disabled()
  }

  const handleAdd = () => {
    setExist(true)
    dispatch(addLibrary)
    // disabled()
  }
  return (
    <div>
      {exist ? (
        <button onClick={() => dispatch(handleRemove)}> Supprimer </button>
      ) : (
        <button onClick={() => dispatch(handleAdd)}> Ajouter </button>
      )}
    </div>
  )
}

BtnLibrary.propTypes = {
  existsInLibrary: PropTypes.func,
  removeLibrary: PropTypes.object,
  addLibrary: PropTypes.object
}

export default BtnLibrary
