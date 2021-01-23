// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LogoFooter } from '../components/logo'
// assets images
import Cb from '../assets/img/carte-bancaire-2x.png'
import Master from '../assets/img/mastercard-2x.png'
import Maestro from '../assets/img/maestro-2x.png'
import PayPal from '../assets/img/paypal-2x.png'
const Footer = () => {
  return (
    <Foot>
      <div className='footer-columns'>
        <ul className='footer__item'>
          <li>
            <span> Achat </span>
            <ul>
              <li>
                <Link to='/product'> Toutes les bijoux </Link>
              </li>
              <li>
                <Link to='/watches'> Toutes les montres </Link>
              </li>
              <li>
                <Link to='/bracelets'> Tous les bracelets </Link>
              </li>
              <li>
                <Link to='/rings'> Toutes les bagues </Link>
              </li>
              <li>
                <Link to='/chains'> Toutes les boucle d&lsquo;oreille </Link>
              </li>
            </ul>
          </li>

          <li>
            <span> Service client </span>
            <ul>
              <li>
                <Link to='/contact'> Contactez-nous </Link>
              </li>
            </ul>
          </li>

          <li>
            <span> Information </span>
            <ul>
              <li>
                <Link to='/product'> Politique de retour </Link>
              </li>
              <li>
                <Link to='/watches'> Mentions légales </Link>
              </li>
            </ul>
          </li>

          <li>
            <span> A propos de lux shop </span>
            <ul>
              <li>
                <Link to='/about'> Notre histoire </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className='footer__copy'>
          <div className='footer__img'>
            <img src={Cb} className='img-responsive' alt='Image' />
            <img src={Master} className='img-responsive' alt='Image' />
            <img src={Maestro} className='img-responsive' alt='Image' />
            <img src={PayPal} className='img-responsive' alt='Image' />
          </div>
          <div className='footer__logo'>
            <Link to='/home'>
              <LogoFooter />
            </Link>
          </div>
          <div className='footer__right'>© 2021 Lux Shop </div>
        </div>
      </div>
    </Foot>
  )
}

export default Footer

const Foot = styled.div`
  .footer-columns {
    width: 67%;
    margin: 25px auto;
    .footer__item {
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin: 0;
      padding: 0;
      li {
        span {
          font-size: 15px;
          text-transform: uppercase;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          li {
            padding: 5px 0;
            a {
              font-size: 12px;
              text-decoration: none;
              color: #000;
              letter-spacing: 0.2px;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
    .footer__copy {
      padding: 30px 0 10px 0;
      display: flex;
      justify-content: space-between;
      .footer__img {
        img {
          margin-right: 15px;
        }
      }
    }
  }
`
