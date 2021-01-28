import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const BtnCard = ({ addCard, setIsCard }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(addCard), setIsCard(true)
        }}
      >
        Acheter maintenant
      </Button>
    </div>
  )
}

BtnCard.propTypes = {
  addCard: PropTypes.object,
  setIsCard: PropTypes.any
}

export default BtnCard

const Button = styled.button`
  padding: 15px 0px;
  width: 100%;
  border: none;
  color: #c8ba7a; // color or
  background-color: #071120;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(7, 17, 32, 0.833);
  }
`
