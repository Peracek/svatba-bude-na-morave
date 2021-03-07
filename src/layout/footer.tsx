import React, { FC } from 'react'

import { makeStyles } from '@material-ui/styles'
import { Container, Typography, Theme, Link } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Footer: FC = () => {
  const classes = useStyles()
  return <footer className={classes.footer}></footer>
}

export default Footer
