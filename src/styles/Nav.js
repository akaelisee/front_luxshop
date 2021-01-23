import styled from 'styled-components'

const Nav = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  .nav_bar_scroll {
    .nav__bar {
      background-color: rgba(7, 17, 32, 0.893);
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .logo_reduire {
        margin-left: 25px;
        align-self: center;
        width: 85px;
      }
    }
  }

  .nav_bar_no_scroll {
    .nav__bar {
      background-color: rgba(7, 17, 32, 0.893);
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .globe {
        margin-left: 25px;
        color: #fff;
        align-self: center;
        width: 85px;
        svg {
          color: #fff;
          font-size: 18px;
        }
        span {
          margin-left: 7px;
        }
      }

      .logo {
        align-self: center;
      }
    }
  }
`

export default Nav
