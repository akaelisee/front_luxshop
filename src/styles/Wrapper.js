// @ts-nocheck
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 1100px;
  margin: 60px auto;
  .wrapper__btn {
    margin: 60px 0;
    text-align: center;
    a {
      padding: 10px 30px;
      border: 1px solid #071120;
      color: #c8ba7a; // color or
      text-decoration: none;
      background-color: #071120;
      margin: 0 25px;
      text-transform: uppercase;
      &:hover {
        background: rgba(7, 17, 32, 0.833);
        border: 1px solid rgba(68, 84, 109, 0.844);
      }
    }
  }

  .wrapper__title {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 25px;
  }

  .wrapper__description {
    padding: 0px 0 6px 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #f0f5f7;
    cursor: pointer;
    font-size: 17px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 16px;

    .underline {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 200px;
        left: -70px;
        bottom: -8px;
        height: 2px;
        background-color: #44546d;
      }
    }
    .under {
      &::after {
        content: '';
        position: absolute;
        width: 230px;
      }
    }
    .not_underline {
      text-decoration: none;
    }
  }

  .wrapper__description__responsive {
    display: none;
  }

  @media screen and (max-width: 1170px) {
    width: 900px;
  }

  @media screen and (max-width: 950px) {
    width: 700px;
    .wrapper__btn {
      a {
        padding: 10px 25px;
        margin: 0 10px;
      }
    }
    .wrapper__hide {
      display: none;
    }

    .wrapper__description__responsive {
      margin: 50px 0;
      transition: all 0.2s ease;
      display: block;

      .chevron {
        padding: 10px 0;
        border-bottom: 1px solid #f0f5f7;
      }
      .chevron__hide {
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        padding: 5px 0;
        cursor: pointer;

        .rotate__true {
          transition: all 0.2s ease;
          transform: rotate(0deg);
        }
        .rotate__false {
          transition: all 0.2s ease;
          transform: rotate(-180deg);
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    ${props => {
      if (props.detail) {
        return `
       margin: 10px auto;
      `
      }
    }}
  }

  @media screen and (max-width: 600px) {
    ${props => {
      if (props.detail) {
        return `
       margin: 0px auto;
      `
      }
    }}
  }

  @media screen and (max-width: 760px) {
    width: 600px;
    .wrapper__btn {
      a {
        padding: 10px 20px;
        margin: 0 5px;
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 90%;
    .wrapper__btn {
      a {
        padding: 10px;
        margin: 0 2px;
        font-size: 14px;
      }
    }
    .wrapper__title {
      font-size: 17px;
    }
  }

  @media screen and (max-width: 435px) {
    margin: 30px auto;

    .wrapper__btn {
      margin: 30px 0;
      a {
        padding: 8px;
        margin: 0 2px;
        font-size: 12px;
      }
    }
    .wrapper__title {
      font-size: 14px;
    }
  }
`

export default Wrapper
