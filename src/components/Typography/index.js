import React from 'react'
import styled from 'styled-components'
import fonts from '@base/fonts'
import colors from '@base/colors'
import { css } from 'styled-components'

// Helpers
const fontSize = defaults => props => `font-size: ${props.fontSize || defaults};`
const lineHeight = defaults => props => `line-height: ${props.lineHeight || defaults};`
const color = defaults => props => `color: ${props.color || defaults};`

// Reusable styles
const headerStyles = css`
  font-family: ${fonts.header};
  text-transform: uppercase;
  ${color(colors.accentDark)}
  font-weight: bold;

  ${props => props.type === 'light' && `
    color: ${props.color || colors.accentLight};
    text-shadow: 3px 5px 5px rgba(0,0,0,.4);
  `}
`

// Hero of blog post title
export const Canon = styled.h1`
  ${headerStyles}
  ${fontSize('48px')}
  ${lineHeight('56px')}
`

// Canon subheader
export const GreatPrimer = styled.p`
  ${fontSize('27px')}
  ${lineHeight('33px')}
  text-shadow: 3px 5px 5px rgba(0,0,0,.29);
  ${color(colors.accentLight)}
`

// Article title or section header
export const Trafalgar = styled.h2`
  ${headerStyles}
  ${fontSize('44px')}
  ${lineHeight('50px')}
`

// Body copy
export const BodyCopy = styled.p`
  font-family: ${fonts.text};
  ${color(colors.accentDark)}
  ${fontSize('20px')}
  ${lineHeight('24px')}

  ${props => props.type === 'light' && `
    color: ${props.color || colors.accentLight};
    text-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  `}
`