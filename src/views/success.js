import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Success = () => {
  return (
    <AlertSuccess>
      <div className='card'>
        <div className='icon__success'>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h1>Paiement réussi</h1>
        <p>
          We received your purchase request;
          <br /> we&lsquo;ll be in touch shortly!
        </p>
      </div>
    </AlertSuccess>
  )
}

export default Success

const AlertSuccess = styled.div`
  h1 {
    color: #88b04b;
    font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: #404f5e;
    font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 0;
  }
  i {
    color: #9abc66;
    font-size: 100px;
    line-height: 200px;
    margin-left: -15px;
  }
  .card {
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #c8d0d8;
    display: inline-block;
    margin: 0 auto;

    .icon__success {
      border-radius: 200px;
      height: 200px;
      width: 200px;
      background: #f8faf5;
      margin: 0 auto;
    }
  }
`
