import styled from 'styled-components'

const StyleChekout = styled.div`
  .checkout__title {
    margin: 30px 0;
    text-align: center;
    span {
      font-size: 33px;
      letter-spacing: 2px;
    }
  }
  .grid__checkout {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .detail__payment {
      width: 62%;
      border-top: 1px solid #aaa;
      .info {
        margin: 30px 0;
        font-size: 20px;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
      form {
        .form__card {
          box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
            rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
          padding: 25px 0;
          .form__title {
            text-align: center;
            padding: 15px 0;
            font-size: 20px;
          }
          .group {
            width: 90%;
            margin: 0 auto;
            .form__group {
              padding: 5px 0;
              display: flex;
              flex-direction: column;
              label {
                font-size: 15px;
                line-height: 30px;
                color: rgb(0, 8, 28);
                letter-spacing: 2px;
                text-transform: uppercase;
              }
              input {
                border-radius: 2px;
                background-color: rgb(255, 255, 255);
                border: 1px solid rgb(199, 199, 199);
                text-size-adjust: 100%;
                padding: 15px 8px;
                outline: none;
              }
              .input__red {
                border-radius: 2px;
                background-color: rgb(255, 255, 255);
                border: 1px solid #ec2f4d;
                text-size-adjust: 100%;
                padding: 15px 8px;
                outline: none;
              }
              input[type='number'] {
                -moz-appearance: textfield;
                appearance: textfield;
                margin: 0;

                &::-webkit-inner-spin-button,
                &::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              }
              .element {
                border: 1px solid rgb(199, 199, 199);
                padding: 15px 5px;
                text-size-adjust: 100%;
                border-radius: 2px;
                background-color: rgb(255, 255, 255);
              }
            }
          }
        }
        .btn__checkout {
          padding: 50px 0;
          align-self: center;

          button {
            width: 100%;
            padding: 17px 0;
            height: 55px;
            background-color: #071120;
            border-radius: 2px;
            font-size: 15px;
            letter-spacing: 3px;
            text-transform: uppercase;
            border: none;
            color: #c8ba7a;
            cursor: pointer;
            outline: none;
            align-self: center;
            position: relative;
          }
        }
      }
    }
    .visualisation__product {
      width: 35%;
      box-shadow: rgba(0, 0, 0, 0.13) 0px 0.3rem 0.3rem 0px,
        rgba(0, 0, 0, 0.19) 0px 0.1rem 0.7rem 0px;
      align-self: flex-start;

      .grid__product {
        display: flex;
        padding: 1px 0;
        border-bottom: 1px solid #aaa;
        .product__image {
          padding: 55px 50px;
          margin-right: 5px;
          .image {
            position: relative;
            img {
              width: 80px;
              background-color: transparent;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .product__detail {
          letter-spacing: 2px;
          padding: 8px 0;
          font-size: 14px;
          .product__title {
            padding: 3px 0;
          }
          .product__price {
            padding: 3px 0;
          }
          .product__color {
            text-transform: capitalize;
          }
        }
        .product__qty {
          width: 100px;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          align-items: flex-end;
          align-self: stretch;
          padding: 10px 0;
          .drop {
            left: 0;
            cursor: pointer;
            svg {
              font-size: 18px;
            }
          }
        }
      }
      .total {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 20px 18px;
        font-size: 15px;
        letter-spacing: 2px;
        border-bottom: 0px solid #aaa;
      }
    }
  }

  @media screen and (max-width: 1070px) {
    .checkout__title {
      margin: 30px 0;
      text-align: center;
      span {
        font-size: 33px;
        letter-spacing: 2px;
      }
    }
    .grid__checkout {
      width: 93%;
    }
  }

  @media screen and (max-width: 850px) {
    .checkout__title {
      span {
        font-size: 18px;
      }
    }
    .grid__checkout {
      flex-direction: column-reverse;

      .detail__payment {
        width: 100%;
        border-top: none;
        .info {
          font-size: 16px;
        }
        form {
          .form__card {
            .form__title {
              padding: 10px 0;
              font-size: 18px;
            }
            .group {
              .form__group {
                label {
                  font-size: 14px;
                }
                input {
                  padding: 12px 8px;
                }
                .input__red {
                  padding: 12px 8px;
                }
              }
            }
          }
        }
      }
      .visualisation__product {
        width: 100%;
        .total {
          border-bottom: none;
        }
      }
    }
  }
`

export default StyleChekout
