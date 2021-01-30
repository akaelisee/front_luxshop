// @ts-nocheck
import styled from 'styled-components'

export const ContainerSignOut = styled.div`
  display: flex;
  width: 100%;

  .content_img {
    width: 70%;
  }
  .content_signOut {
    width: 500px;
    .component_formulaire {
      position: relative;
      top: 80px;
      width: 320px;
      margin: 0 auto;
      .logo {
        text-align: center;
      }
      .group__btn {
        padding: 40px 0 6px 0;
        display: flex;
        justify-content: space-around;
        border-bottom: 2px solid #f0f5f7;
        cursor: pointer;
        font-size: 17px;

        .underline {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            width: 140px;
            left: -36px;
            bottom: -8px;
            height: 2px;
            background-color: #44546d;
          }
        }
        .under {
          &::after {
            content: '';
            position: absolute;
            width: 180px;
          }
        }
        .not_underline {
          text-decoration: none;
        }
      }
      .politique {
        margin: 25px 0;
        text-align: center;
        font-size: 12px;
        span {
          color: #44546d;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    display: block;

    .content_signOut {
      width: 100%;
      .component_formulaire {
        top: 30px;
        width: 300px;
        .group__btn {
          padding: 25px 0 6px 0;
          font-size: 16px;
        }
        .politique {
          margin: 15px 0;
          font-size: 11px;
        }
      }
    }
  }
`

export const ContentImage = styled.div`
  background-image: ${props => props.url};
  background-size: cover;
  background-position: center center;
  height: 100vh;
  @media screen and (max-width: 700px) {
    display: none;
  }
`
