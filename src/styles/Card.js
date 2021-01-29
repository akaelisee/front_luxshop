// @ts-nocheck
import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 13px;
  row-gap: 30px;
  .card__product {
    transition: all 0.2s ease-in-out;
    ${props => {
      if (props.account) {
        return `
      `
      }
    }}

    &:hover {
      box-shadow: 0px 3px 6px 2px #aaa;
    }

    a {
      color: #000;
      text-decoration: none;
    }
    .card__image {
      background-color: #f5f5f5;
      position: relative;
      padding: 130px;
      ${props => {
        if (props.account) {
          return `
          padding: 115px;
      `
        }
      }}
    }
    .card__body {
      padding: 5px 0px 5px 10px;
    }
    .btn__delete {
      padding: 0px 0px 5px 10px;
      span {
        cursor: pointer;
        svg {
          color: red;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 10px;
    .card__product {
      .card__image {
        padding: 100px;
      }
    }
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    column-gap: 15px;
    .card__product {
      .card__image {
        padding: 80px 0;
      }
    }
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`

export const Image = styled.img`
  width: 260px;
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
      `
    } else if (props.account) {
      return `
        width: 190px;
      `
    }
  }}

  @media screen and (max-width: 1170px) {
    width: 200px;
    ${props => {
      if (props.post) {
        return `
        width: 100%;
      `
      } else if (props.slide) {
        return `
        width: 65%;
      `
      } else if (props.account) {
        return `
        width: 190px;
      `
      }
    }}
  }

  @media screen and (max-width: 960px) {
    ${props => {
      if (props.slide) {
        return `
        width: 100%;
        `
      }
    }}
  }

  @media screen and (max-width: 760px) {
    width: 140px;
    ${props => {
      if (props.post) {
        return `
        width: 100%;
      `
      } else if (props.slide) {
        return `
        width: 100%;
      `
      } else if (props.account) {
        return `
        width: 190px;
      `
      }
    }}
  }

  @media screen and (max-width: 600px) {
    ${props => {
      if (props.slide) {
        return `
        width: 100%;
        `
      } else if (props.account) {
        return `
        width: 100%;
      `
      }
    }}
  }
`
export const CardBody = styled.div`
  /* height: 100px; */
  padding-top: 5px;
  padding-left: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  padding-bottom: 20px;
`

export default Card
