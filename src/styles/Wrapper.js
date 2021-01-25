import styled from 'styled-components'

const Wrapper = styled.div`
  /* width: 67%; */
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
`

export default Wrapper
