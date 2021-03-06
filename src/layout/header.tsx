import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core'

export interface HeaderProps {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => {
  console.log('mount header')

  return (
    <AppBar component="header" position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" component={GatsbyLink} color="inherit">
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
