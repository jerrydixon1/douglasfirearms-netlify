import React from 'react'
import {
  SidebarWrapper,
  Sidebar,
  SidebarList,
  SidebarListItem
} from './styles'
import Link from 'gatsby-link'
import Logo from '@components/Logo'

export default () => (
  <SidebarWrapper>
    <Sidebar>
      <Logo />
      <SidebarList>
        <SidebarListItem>
          <Link to="/#about">
            About our classes
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/#upcoming-classes">
            Upcoming classes
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/#testimonies">
            Testimonies
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/#our-history">
            Our history
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/#contact-us">
            Contact us
          </Link>
        </SidebarListItem>
      </SidebarList>
    </Sidebar>
  </SidebarWrapper>
)