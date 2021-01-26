// @ts-nocheck
import styled from 'styled-components'

export const Banniere = styled.div`
  background-image: ${props => props.url};
  background-size: cover;
  background-position: center center;
  height: 80vh;

  @media screen and (max-width: 850px) {
    background-position: 65%;
  }
`

export const Banner = styled.div`
  background-image: ${props => props.url};
  background-position: center center;
  background-size: cover;
  height: 60vh;
`
export default Banniere
