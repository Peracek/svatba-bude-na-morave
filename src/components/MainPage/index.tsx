import { Box, Grid, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import styled from 'styled-components'
import { HighligtedContent } from '../HightlighContent'
import { Motif } from '../Motif'
import { TinyMotif } from '../MotifTiny'
import { Section } from '../Section'
import { EventTimeline } from './EvenTimeline'
import { LandingPhoto } from './LandingPhoto'
import { RVSP } from './RSVP'

const useStyles = makeStyles((theme: Theme) => ({
  noh1: {
    letterSpacing: 'initial',
    textTransform: 'initial',
  },
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
      <LandingPhoto />
      <Section paddingTop={80} paddingBottom={30}>
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
      <Section title="Dotazník" tintBg>
        <HighligtedContent>
          <RVSP />
        </HighligtedContent>
      </Section>
      <TinyMotif img="bird" />
      <Section title="Ubytování">
        <HighligtedContent>
          <Typography align="center">
            Jsou 2 možnosti ubytování, které jsme pro vás zarezervovali: v
            pokojích nebo ve spacáku. Další možnost je zařídit si ubytování sám,
            či domluvit se s někým z vašich známých místních.
            <br />
            Nebo tady:
            <br />
            <a href="https://www.hotelmlyn.cz/">hotelmlyn.cz</a>
            <br />
            <a href="http://www.hotelskanzen.cz/">hotelskanzen.cz</a>
          </Typography>
        </HighligtedContent>
        <Box pt={6} textAlign="center">
          <Grid container spacing={2} justify="center">
            <Grid item md={6}>
              <Typography variant="h3">Konírna</Typography>
              <Typography>
                Trochu punkovější varianta spaní v podkroví Velehradského
                infocentra, je třeba si vzít spacák a karimatku.
                <br />
                50 Kč/noc
                <br />
                https://mapy.cz/s/lavojopotu
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h3">Stojanovo gymnázium</Typography>
              <Typography>
                Stojanovo gymnázium: 3–4lůžkové pokoje
                <br />
                230 Kč/noc
                <br />
                https://mapy.cz/s/kubokunede
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Section>
      <TinyMotif img="blueberryOut" />
      <Section title="Dary" tintBg>
        <HighligtedContent>
          <Typography align="center">
            Dary jestě nemáme rozmyšlené. Přijdte se podívat později.
          </Typography>
        </HighligtedContent>
      </Section>
    </Container>
  )
}
