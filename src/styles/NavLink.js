// @ts-nocheck
import styled from 'styled-components'

const NavLink = styled.div`
  text-align: center;
  padding: 10px;
  align-self: center;
  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.904);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 0%;
      bottom: -4px;
      background-color: rgba(255, 255, 255, 0.904);
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      content: '';
      position: absolute;
      right: 50%;
      width: 0%;
      bottom: -4px;
      background-color: rgba(255, 255, 255, 0.904);
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      left: 5%;
      width: 50%;
      transition: all 0.3s ease-in-out;
    }
    &:hover::before {
      right: 5%;
      width: 50%;
      transition: all 0.3s ease-in-out;
    }
  }

  ${props => {
    if (props.expand) {
      return `
      background-color: rgba(25, 38, 56, 0.334);
      `
    }
  }}
`

export default NavLink
