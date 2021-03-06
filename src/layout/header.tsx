import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core'
import styled from 'styled-components'

const SAppBar = styled(AppBar)`
  background-color: white;
`

export interface HeaderProps {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => {
  return (
    <SAppBar component="header" position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" component={GatsbyLink}>
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </SAppBar>
  )
}

export default Header
