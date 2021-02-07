import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Container,
  Theme,
  Paper,
  Box,
  Grid,
} from '@material-ui/core'

interface HighligtedContent {}

const useStyles = makeStyles<Theme, HighligtedContent, string>(
  (theme: Theme) => ({
    box: {
      'box-shadow': `0 0 10px 0 ${theme.palette.primary.light}`,
      'border-radius': '5px',
    },
    inner: {
      padding: theme.spacing(4, 6),
      background: theme.palette.background.default,
    },
  }),
)

export const HighligtedContent: FC<HighligtedContent> = props => {
  const classes = useStyles(props)
  return (
    <Box className={classes.box}>
      <Grid container justify="center" className={classes.inner}>
        <Box maxWidth="600" style={{ width: '500px' }}>
          {props.children}
        </Box>
      </Grid>
    </Box>
  )
}
