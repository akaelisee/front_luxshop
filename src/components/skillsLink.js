import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faPinterestP,
  faTwitter,
  faSnapchatGhost
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
const SkillsLink = () => {
  return (
    <Skills>
      <div className='cards__skills'>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faSnapchatGhost} />
        </div>
        <div className='skills__item'>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </Skills>
  )
}

export default SkillsLink

const Skills = styled.div`
  padding: 9px 25px;
  width: 600px;
  margin: 20px auto 0 auto;
  background-color: #d6d8d9;
  text-align: center;
  justify-content: space-around;
  .cards__skills {
    width: 45%;
    margin: 0px auto;
    display: flex;
    justify-content: space-around;

    .skills__item {
      position: relative;
      padding: 16px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: #ffffff;
      cursor: pointer;
      top: 0px;
      transition: all 0.2s ease;
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:hover {
        transition: all 0.2s ease;
        /* transform: translateY(-20%); */
        top: -5px;
      }
    }
  }
`
