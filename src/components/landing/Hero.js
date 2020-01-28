import React from 'react'
import Container from './Container'
import backgroundImage from '@img/Hero-Image.jpg'
import backgroundGrit from '@img/Hero-Texture.png'
import styled from 'styled-components'
import { css } from 'styled-components'
import { Canon, GreatPrimer } from '@components/Typography'

const Hero = styled.header`
  position: relative;
  height: calc(100vh + 10%);
  z-index: 3;
`

const HeroContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  top: -50px;
  h1 {
    margin-bottom: 6px;
  }
`

const backgroundImageStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`
const HeroBackgroundImage = styled.div`
  background-position-x: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  bottom: 0;
  opacity: 0.89;
  background: url(${backgroundImage}) no-repeat 0 0 fixed;
  ${backgroundImageStyles}
`

const HeroBackgroundGrit = styled.div`
  z-index: 2;
  background-image: url(${backgroundGrit});
  bottom: -52px;
  height: auto;
  padding-top: 22%;
  margin: 0;
  ${backgroundImageStyles}
`

export default props => (
  <Hero>
    <HeroContainer>
      <div>
        <Canon type="light">Personal, certified, safe.</Canon>
        <GreatPrimer>Douglas Firearms Training is dedicated to the safe instruction of basic firearms ownership, marksmanship and Ohio’s concealed handgun certification.</GreatPrimer>
      </div>  
    </HeroContainer>
    <HeroBackgroundImage />
    <HeroBackgroundGrit />
  </Hero>
)