// @ts-nocheck
import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 13px;
  row-gap: 30px;
  .card__product {
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0px 3px 6px 2px #aaa;
    }

    a {
      color: #000;
      text-decoration: none;
    }
    .card__image {
      height: 255px;
      background-color: #f5f5f5;
      position: relative;
    }
  }
`

export const Image = styled.img`
  width: 100%;
  background-color: #f5f5f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${props => {
    if (props.post) {
      return `
        width: 100%;
      `
    } else if (props.slide) {
      return `
        width: 65%;
        background-color: transparent;
      `
    }
  }}
`
export const CardBody = styled.div`
  padding-top: 5px;
  padding-left: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  padding-bottom: 20px;
`

export default Card
