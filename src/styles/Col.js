import styled from 'styled-components'

const Col = styled.div`
  position: relative;
  z-index: 2;
  .col__text {
    position: absolute;
    top: 35%;
    left: 13%;
    .text {
      font-size: 45px;
      color: #fff;
      text-transform: uppercase;
      line-height: 56px;
      letter-spacing: 5px;
      margin-bottom: 15px;
    }
    .sous__text {
      font-size: 25px;
      color: rgba(255, 255, 255, 0.904);
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 35px;
      line-height: 30px;
      letter-spacing: 1.8px;
    }
    .btn__explore {
      text-align: center;
      a {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
        padding: 6px 55px;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.4s ease;
        letter-spacing: 2px;

        &:hover {
          background-color: rgba(68, 84, 109, 0.844);
          border: 1px solid rgba(68, 84, 109, 0.844);
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .col__text {
      left: 6%;
      .text {
        font-size: 35px;
      }
      .sous__text {
        font-size: 20px;
      }
      .btn__explore {
        a {
          padding: 6px 40px;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .col__text {
      position: absolute;
      top: 35%;
      left: 5%;
      .text {
        font-size: 25px;
        line-height: 40px;
      }
      .sous__text {
        font-size: 18px;
        margin-bottom: 20px;
        line-height: 30px;
      }
      .btn__explore {
        text-align: center;
        a {
          padding: 6px 30px;
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    .col__text {
      .text {
        font-size: 18px;
        letter-spacing: 1px;
      }
      .sous__text {
        font-size: 14px;
        margin-bottom: 20px;
        line-height: 30px;
      }
      .btn__explore {
        a {
          padding: 6px 25px;
          font-size: 15px;
          background-color: rgba(68, 84, 109, 0.844);
          border: 1px solid rgba(68, 84, 109, 0.844);
        }
      }
    }
  }
`

export default Col
