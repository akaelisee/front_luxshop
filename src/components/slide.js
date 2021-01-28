// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import { Image } from '../styles/Card'
import styled from 'styled-components'

Swiper.use([Navigation])
const Slide = ({ poster }) => {
  const baseImage = process.env.REACT_APP_BASE_IMAGE

  return (
    <SlideSwiper>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {poster.map(item => (
            <div key={item.id} className='swiper-slide'>
              <Image
                slide
                src={`${baseImage}${item.poster_path}`}
                className='img-responsive'
                alt='Image'
              />
            </div>
          ))}
        </div>

        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </div>
    </SlideSwiper>
  )
}

Slide.propTypes = {
  poster: PropTypes.any
}

export default Slide

const SlideSwiper = styled.div`
  .swiper-container {
    width: 580px;
    height: 400px;
  }
  .swiper-button-next {
    right: 20px !important;
    &::after {
      font-size: 25px !important;
      color: #000;
    }
  }
  .swiper-button-prev {
    left: 20px !important;
    &::after {
      font-size: 25px !important;
      color: #000;
    }
  }

  @media screen and (max-width: 1170px) {
    .swiper-container {
      width: 500px;
      height: 400px;
    }
  }

  @media screen and (max-width: 960px) {
    .swiper-container {
      width: 500px;
      height: 400px;
    }
    .swiper-button-next {
      right: 0px !important;
      &::after {
        font-size: 35px !important;
      }
    }
    .swiper-button-prev {
      left: 0px !important;
      &::after {
        font-size: 35px !important;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .swiper-container {
      width: 400px;
      height: 400px;
    }
    .swiper-slide {
      width: 400px;
    }
    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      display: none;
    }
  }

  @media screen and (max-width: 455px) {
    .swiper-container {
      width: 320px;
      height: 320px;
    }
    .swiper-slide {
      width: 350px;
    }
  }
`
