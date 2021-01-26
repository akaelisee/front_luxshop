// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import logoLux from '../assets/img/logo.png'
import logoHead from '../assets/img/logo-header.png'
import logoRedu from '../assets/img/logos.png'
import logoFoot from '../assets/img/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Logo = () => {
  return (
    <LogoImg>
      <img src={logoLux} alt='logo' />
    </LogoImg>
  )
}

export const LogoHeader = () => {
  return (
    <LogoImg>
      <img src={logoHead} alt='logo' />
    </LogoImg>
  )
}

export const LogoReduire = () => {
  return (
    <LogoImg reduire>
      <img src={logoRedu} alt='logo' />
    </LogoImg>
  )
}

export const LogoFooter = () => {
  return (
    <LogoImg>
      <img src={logoFoot} alt='logo' />
    </LogoImg>
  )
}

export const Icon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faHeart} />
    </>
  )
}

const LogoImg = styled.div`
  font-family: 'Fraunces', serif;
  font-size: 25px;
  font-weight: 600;
  color: #44546d;
  z-index: -1;

  ${props => {
    if (props.reduire) {
      return `
      img {
        width: 27px;
      }
      `
    } else {
      return `
      img {
          width: 140px;
        }
      `
    }
  }}

  @media screen and (max-width: 850px) {
    font-size: 25px;
    font-weight: 600;
    color: #44546d;
    z-index: -1;

    ${props => {
      if (props.reduire) {
        return `
      img {
        width: 27px;
      }
      `
      } else {
        return `
      img {
          width: 110px;
        }
      `
      }
    }}
  }
`
