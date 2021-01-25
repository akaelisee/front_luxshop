/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect, useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Icon } from '../logo'

import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
const BtnLibrary = ({ addLibrary, removeLibrary, product, library }) => {
  const dispatch = useDispatch()
  const handleOnClickDefault = () => {
    store.addNotification({
      title: 'Article savegardé',
      message: product.title,
      type: 'info',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],

      dismiss: {
        duration: 2000,
        showIcon: true
      },
      width: 300
    })
  }
  return (
    <div>
      {!library.find(item => item.id == product.id) ? (
        <BtnStyle className='btn__yes'>
          <p
            onClick={() => {
              dispatch(addLibrary)
              handleOnClickDefault()
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span> Ajouter à votre liste</span>
          </p>
        </BtnStyle>
      ) : (
        <BtnStyle delete className='btn__yes'>
          <p onClick={() => dispatch(removeLibrary)}>
            <Icon />
            <span> Supprimer de votre liste </span>
          </p>
        </BtnStyle>
      )}
    </div>
  )
}

BtnLibrary.propTypes = {
  removeLibrary: PropTypes.object,
  addLibrary: PropTypes.object,
  product: PropTypes.any
}

const mapStateToProps = state => ({
  library: state.library.productLibrary
})

export default connect(mapStateToProps)(BtnLibrary)

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
