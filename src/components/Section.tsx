import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme } from '@material-ui/core'
import { transparentize } from 'polished'

interface SectionProps {
  title: string
  tintBg?: boolean
}

const useStyles = makeStyles<Theme, SectionProps, string>((theme: Theme) => ({
  section: {
    backgroundColor: props =>
      props.tintBg ? theme.palette.primary.main : 'inherit',
    padding: theme.spacing(8, 0, 6),
  },
}))

export const Section: FC<SectionProps> = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.section}>
      <Container maxWidth="md">
        <Typography
          // component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {props.title}
        </Typography>
        {props.children}
      </Container>
    </div>
  )
}
