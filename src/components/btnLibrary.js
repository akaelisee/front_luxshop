// @ts-nocheck
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Icon } from './logo'
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
      {!exist ? (
        <BtnStyle className='btn__yes'>
          <p onClick={() => dispatch(handleAdd)}>
            <FontAwesomeIcon icon={faHeart} />
            <span> Ajouter à votre liste</span>
          </p>
        </BtnStyle>
      ) : (
        <BtnStyle delete className='btn__yes'>
          <p onClick={() => dispatch(handleRemove)}>
            <Icon />
            <span> Supprimer de votre liste </span>
          </p>
        </BtnStyle>
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

const BtnStyle = styled.div`
  cursor: pointer;
  p {
    svg {
      font-size: 25px;
    }
    span {
      font-size: 20px;
    }
  }
  ${props => {
    if (props.delete) {
      return `
      p {
        svg {
          color: red;
        }
      }
      `
    }
  }}
`
