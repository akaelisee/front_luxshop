// @ts-nocheck
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { removeLibrary } from '../actions/library'
import Container from '../styles/Container'
import styled from 'styled-components'
import Wrapper from '../styles/Wrapper'
import { Card, Image } from '../styles/Card'
import { Icon } from '../components/logo'
const Account = ({ login, library }) => {
  const baseImage = process.env.REACT_APP_BASE_IMAGE
  const regex = / /gi
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log()
  }, [])
  return (
    <Container detail>
      <Wrapper>
        <Grid>
          <div className='grid__account'>
            <div className='logo__nane'>
              <span> {login.firstname[0].toUpperCase()} </span>
            </div>
            <div className='name'>
              <span className='first'>
                {login.firstname}&nbsp;{login.lastname}
              </span>
              <span>{login.email}</span>
            </div>
          </div>
          <div className='grid__favorite'>
            <div className='save'>
              {library.length > 1 ? (
                <p> {library.length} articles </p>
              ) : (
                <p> {library.length} article </p>
              )}
            </div>
            {library.length > 0 ? (
              <Card account>
                {library.map(product => (
                  <div
                    className='card__product'
                    key={product.id || product._id}
                  >
                    <Link
                      to={`/detail/${product.title
                        .replace(regex, '-')
                        .toLowerCase()}}/${product.id}`}
                    >
                      <div className='card__image'>
                        <Image
                          account
                          src={`${baseImage}${product.backdrop_path}`}
                        />
                      </div>

                      <div className='card__body'>
                        <div className='card__title'>
                          <span> {product.title}</span>
                        </div>
                      </div>
                    </Link>
                    <div className='btn__delete'>
                      <span onClick={() => dispatch(removeLibrary(product.id))}>
                        <Icon /> Supprimer
                      </span>
                    </div>
                  </div>
                ))}
              </Card>
            ) : (
              <div
                className=''
                style={{ textAlign: 'center', padding: '25px 0' }}
              >
                <span style={{ letterSpacing: '2px', fontSize: '25px' }}>
                  Pas d&lsquo;article savegardé
                </span>
              </div>
            )}
          </div>
        </Grid>
      </Wrapper>
    </Container>
  )
}

Account.propTypes = {
  login: PropTypes.object,
  library: PropTypes.array
}

const mapStateToProps = state => ({
  login: state.login.userLogin,
  library: state.library.productLibrary
})

export default connect(mapStateToProps)(Account)

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 3fr;
  .grid__account {
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
      rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
    align-self: flex-start;

    .logo__nane {
      width: 100px;
      margin: 30px auto 15px auto;
      padding: 60px;
      position: relative;
      border-radius: 50%;
      background-color: #071120;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 70px;
        color: #c8ba7a;
      }
    }
    .name {
      text-align: center;
      display: flex;
      flex-direction: column;
      line-height: 33px;
      font-size: 16px;
      letter-spacing: 1px;
      margin: 5px 0 50px 0;
      .first {
        text-transform: capitalize;
      }
    }
  }
  .grid__favorite {
    box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
      rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
    align-self: flex-start;
    padding: 15px;
    .save {
      padding: 2px 0 10px 0;
    }
  }
`
