import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core'
import styled from 'styled-components'

const SAppBar = styled(AppBar)`
  background-color: white !important;
`

export interface HeaderProps {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => {
  return (
    <SAppBar component="header" position="static">
      <Toolbar>
        <Typography variant="h6" style={{ fontWeight: 200 }}>
          <Link to="/" component={GatsbyLink}>
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </SAppBar>
  )
}

export default Header
