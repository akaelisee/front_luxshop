// @ts-nocheck
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import { Image } from '../styles/Card'

Swiper.use([Navigation])
const Slide = ({ poster }) => {
  const baseImage = process.env.REACT_APP_BASE_IMAGE

  useEffect(() => {
    // initSwiper()
  }, [])

  return (
    <div>
      <div
        className='swiper-container'
        style={{ width: '580px', height: '400px' }}
      >
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
    </div>
  )
}

Slide.propTypes = {
  poster: PropTypes.any
}

export default Slide
