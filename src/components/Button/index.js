import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import colors from '@base/colors'
import transitions from '@base/transitions'
import React from 'react'

const ButtonElement = styled.button`
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.border};
  color: ${props => props.theme.textColor};
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 244px;
  font-size: 15px;
  text-shadow: 3px 5px 6px rgba(0, 0, 0, 0.52);
  letter-spacing: 1.65px;
  text-decoration: none;
  text-transform: uppercase;
  transition: ${transitions.default};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.hoverTextColor};
    background: ${props => props.theme.hoverBackground};
    border-color: ${props => props.theme.hoverBorderColor};
    text-shadow: none;
  }
`

export default function(props) {

  // Base theme
  const theme = {
    background: colors.primary,
    border: colors.primary,
    textColor: colors.accentLight,
    hoverTextColor: colors.primary,
    hoverBackground: 'transparent',
    hoverBorderColor: colors.primary
  }

  // Inverted theme
  if(props.inverted) {
    theme.background = 'transparent'
    theme.textColor = colors.accentLight
    theme.hoverBackground = colors.primary
    theme.hoverTextColor = colors.accentLight
  }

  // Manually set props
  Object.keys(props).forEach(key => {
    if(theme[key]) {
      theme[key] = props[key]
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <ButtonElement {...props}>
        {props.children}
      </ButtonElement>
    </ThemeProvider>
  )
}
