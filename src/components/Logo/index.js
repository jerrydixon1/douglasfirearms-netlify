import React from 'react'
import styled from 'styled-components'
import colors from '@base/colors'
import fonts from '@base/fonts'

export default props => {
  const LogoWrapper = styled.div`
    width: 100%;
    max-width: 248px;
    text-transform: uppercase;
    font-size: 32px;
    ${props.condensed && `
      max-width: 184px;
      font-size: 20px;
      width: 180px;
      font-size: 20px;
      letter-spacing: 3px;
      height: 50px;
      line-height: 50px;
      border: 2px solid ${colors.primary};
      flex-direction: row;
    `}
  `

  const Logo = styled.div`
    color: ${colors.accentLight};
    background: ${colors.backgroundDark};
    border: 2px solid ${colors.primary};
    font-family: ${fonts.header};
    box-shadow: 3px 5px 5px rgba(0,0,0,.38);
    padding-top: 14px;
    padding-bottom: 15px;
    line-height: 42px;
    letter-spacing: 5.1px;
    width: 100%;
    text-align: center;
    ${props.condensed && `
      color: ${colors.accentLight};
      background: ${colors.backgroundDark};
      border: 2px solid ${colors.primary};
      font-family: ${fonts.header};
      box-shadow: 3px 5px 5px rgba(0,0,0,.38);
      padding-top: 14px;
      padding-bottom: 15px;
      line-height: 42px;
      letter-spacing: 5.1px;
      width: 100%;
      text-align: center;
    `}
  `

  const LogoOutter = styled.div`
    color: ${colors.accentLight};
    font-size: 16px;
    text-align: center;
    width: 100%;
    line-height: 19px;
    margin-top: 8px;
    letter-spacing: 1.75px;
    padding-left: 2px;
    text-shadow: 3px 5px 6px rgba(0,0,0,.52);
    ${props.condensed && 'display: none;'}
  `

  return (
    <LogoWrapper>
      <Logo>Douglas</Logo>
      <LogoOutter>Firearms Training</LogoOutter>
    </LogoWrapper>
  )
}