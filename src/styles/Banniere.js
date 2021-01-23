// @ts-nocheck
import styled from 'styled-components'

export const Banniere = styled.div`
  background-image: ${props => props.url};
  background-size: cover;
  background-position: center center;
  height: 80vh;
`

export const Banner = styled.div`
  background-image: ${props => props.url};
  background-position: center center;
  background-size: cover;
  height: 60vh;
`
export default Banniere
