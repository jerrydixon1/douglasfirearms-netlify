import fonts from '@base/fonts'
import colors from '@base/colors'
import sizings from '@base/sizings'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* universal box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Font styles */ 
  *, div {
    font-family: ${fonts.text};
  }

  .text-header,
  .btn,
  .text-caps {
    font-family: ${fonts.header};
    text-transform: uppercase;
  }

  .text-header {
    color: ${colors.accentDark};
    margin: 0;
    &--light {
      color: ${colors.accentLight};
      text-shadow: 3px 5px 5px rgba(0,0,0,.4);
    }
    &--lg {
      font-size: 48px;
      line-height: 56px;
    }
    &--md {
      font-size: 44px;
      line-height: 50px;
    }
    &--sm {
      font-size: 32px;
      line-height: 36px;
    }
  }

  .text {
    color: ${colors.accentDark};
    margin: 0;
    &--light {
      color: ${colors.accentLight};
      text-shadow: 3px 5px 5px rgba(0, 0, 0, 0.29);
    }
    &--lg {
      font-size: 27px;
      line-height: 33px;
    }
  }
`

export const Main = styled.main`
  padding-left: ${sizings.sidenavWidth}px;
`