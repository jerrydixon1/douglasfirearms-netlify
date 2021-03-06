import React from 'react'
import styled from 'styled-components'
import fonts from '@base/fonts'
import colors from '@base/colors'
import sizings from '@base/sizings'
import Button from '@components/Button'

/* Sidebar containers */
export const SidebarWrapper = styled.aside`
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${sizings.sidenavWidth}px;
  background: #1d1d1d;

  overflow: scroll;
  transition: transform 0.4s;
`

export const Sidebar = styled.nav `
  height: 100%;
  max-width: 248px;
  margin: 0 auto;
  padding: 87px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

/* Sidebar list */
export const SidebarList = styled.ul`
  margin: 0;
  padding: 25px 0;
  margin: 16px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`

export const SidebarListItem = styled.li`
  list-style: none;
  + li {
    margin-top: 25px;
  }
  > a {
    color: ${colors.accentLight};
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    text-decoration: none;
    text-shadow: 3px 5px 6px rgba(${colors.accentDark}, 0.5);
    text-transform: uppercase;
    font-family: ${fonts.header};
    &:hover {
      cursor: pointer;
    }
  }
`

/* Sidebar CTA button */
const ButtonComponent = props => <Button hoverTextColor={colors.accentLight}>{props.children}</Button>
export const SidebarButton = styled(ButtonComponent)`
  width: 100%;
  display: block;
  margin-top: 16px;
`

/* Sidebar social footer */
