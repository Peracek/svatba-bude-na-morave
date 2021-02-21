import { Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import styled from 'styled-components'
import { HighligtedContent } from '../HightlighContent'
import { Motif } from '../Motif'
import { TinyMotif } from '../MotifTiny'
import { Section } from '../Section'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import { EventTimeline } from './EvenTimeline'
import { RVSP } from './RSVP'

const useStyles = makeStyles((theme: Theme) => ({
  noh1: {
    letterSpacing: 'initial',
    textTransform: 'initial',
  },
  padded: {},
}))

const Container = styled.div`
  margin-top: ${p => p.theme.spacing(8)};
  margin-bottom: ${p => p.theme.spacing(2)};

  > div:first-child {
    padding-bottom: 0;
  }

  > div:nth-child(3) {
    padding-top: 0;
  }
`

const Spaced = styled.div`
  & > * + * {
    margin-top: ${p => p.theme.spacing(3)}px;
  }
`

export const MainPage: FC = () => {
  const classes = useStyles()
  return (
    <Container>
      <Section paddingBottom={0}>
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
      <Motif />
      <Section title="Harmonogram" paddingTop={0}>
        <HighligtedContent>
          <Typography align="center">
            Oslava se koná na dvoře a zahradě u Olivů. Na dvoře jsou kočičí
            hlavy, zahrada je svažitá, zvažte dle toho svou obuv. Myšlenkově se
            také připravte na možnost deště.
          </Typography>
        </HighligtedContent>

        <EventTimeline />
      </Section>
      <TinyMotif img="blueberryIn" />
      <Section title="Dotaznik" tintBg>
        <HighligtedContent>
          <RVSP />
        </HighligtedContent>
      </Section>
      <TinyMotif img="bird" />
      <Section title="Ubytko"></Section>
      <TinyMotif img="blueberryOut" />
      <Section title="Dary" tintBg></Section>
    </Container>
  )
}
