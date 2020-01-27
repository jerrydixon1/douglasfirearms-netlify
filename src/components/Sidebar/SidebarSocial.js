import React from 'react'
import colors from '@base/colors'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 0;
  font-size: 30px;
  text-align: center;
  list-style: none;
  padding: 0;
`

const SidebarListItem = styled.li`
  + li {
    margin-left: 40px;
  }
`

const SidebarAnchor = styled.a`
  color: ${colors.accentLight};
  text-decoration: none;
`
let SocialLink = props => (
  <SidebarListItem>
    <SidebarAnchor href={props.href} target="_blank">
      <FontAwesomeIcon icon={props.icon} />
    </SidebarAnchor>
  </SidebarListItem>
)
SocialLink = styled(SocialLink)`
      color: ${colors.accentLight};
      text-decoration: none;
  `

export default () => (
  <SocialList>
    <SocialLink href="https://www.facebook.com/douglasfirearmstraining" icon={faFacebookSquare} />
    <SocialLink href="https://www.instagram.com/douglasfirearmstraining" icon={faInstagram} />
    <SocialLink href="https://www.youtube.com/channel/UCW1xUuKRPD84e4HJTi3X4Mg" icon={faYoutubeSquare} />
  </SocialList>
)