import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Link,
  Container,
  Theme,
  Paper,
  Grid,
} from '@material-ui/core'

import SEO from '../components/seo'
import { Section } from '../components/Section'
import { HighligtedContent } from '../components/HightlighContent'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  noh1: {
    letterSpacing: 'initial',
    textTransform: 'initial',
  },
  padded: {},
}))

const Spaced = styled.div`
  & > * + * {
    margin-top: ${p => p.theme.spacing(3)}px;
  }
`

const SecondPage: FC = () => {
  const classes = useStyles()
  return (
    <Container maxWidth={false} disableGutters className={classes.root}>
      <SEO title="Page two" />

      <Section>
        <HighligtedContent>
          <Spaced>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.noh1}
            >
              12. 6. 2021 v 11.00
            </Typography>
            <Typography align="center">
              Bazilika Nanebevzetí Panny Marie a svatých Cyrila a Metoděje na
              Velehradě (mapa)
            </Typography>
            <Typography align="center">
              Hodláte-li se zúčastnit našeho svatebního dne, prosíme o vyplnění
              dotazníku níže.
            </Typography>
          </Spaced>
        </HighligtedContent>
      </Section>

      <Section title="Harmonogram">
        <HighligtedContent>hello there</HighligtedContent>
      </Section>

      <Section title="Dotaznik" tintBg>
        <HighligtedContent>formular</HighligtedContent>
      </Section>

      <Typography variant="h2" gutterBottom component="h1">
        Hi from the second page
      </Typography>

      <Typography variant="body1">Welcome to page 2.</Typography>

      <Typography variant="body1">
        <Link component={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Typography>
    </Container>
  )
}

export default SecondPage
