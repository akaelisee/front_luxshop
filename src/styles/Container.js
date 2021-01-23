// @ts-nocheck
import styled from 'styled-components'

const Container = styled.div`
  ${props => {
    if (props.newLetter) {
      return `
      background: linear-gradient(to right, #2c5364, #203a43, #0f2027); 
      position: relative;
      
      .btn__top{
        position: relative;
        border-radius: 50%;
        background-color: #ffffff;
        padding: 18px;
        width: 10px;
        bottom: -16px;
        margin: 0 auto;
        box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.75);
        transition: all 0.1s;
        cursor: pointer;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

        &:hover {
          bottom: -9px;
          transition: all 0.1s;
          box-shadow: 0px 5px 7px 1px rgba(0,0,0,0.75);
        }
      }
      `
    } else if (props.detail) {
      return `
        padding-top: 115px;
      `
    }
  }}
`

export default Container
