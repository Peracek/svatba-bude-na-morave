import { Box, Grid, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'
import styled from 'styled-components'
import { HighligtedContent } from '../HightlighContent'
import { Motif } from '../Motif'
import { TinyMotif } from '../MotifTiny'
import { Section } from '../Section'
import { Analytics } from './Analytics'
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

const Bold = styled.span`
  font-weight: 600;
`

const Phone = styled.a`
  color: inherit;
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
              Velehradě (<a href="https://mapy.cz/s/jofovebuku">mapa</a>).
            </Typography>
            <Typography align="center">
              <Bold>
                Hodláte-li se zúčastnit našeho svatebního dne, prosíme o
                vyplnění dotazníku níže.
              </Bold>
            </Typography>
          </Spaced>
        </HighligtedContent>
      </Section>
      <Motif />
      <Section title="Harmonogram" paddingTop={0}>
        <HighligtedContent>
          <Typography align="center">
            Oslava se koná na dvoře a zahradě u Olivů. Na dvoře jsou kočičí
            hlavy, zahrada je svažitá, <Bold>zvažte dle toho svou obuv</Bold>.
            Myšlenkově se také připravte na <Bold>možnost deště</Bold>.
          </Typography>
          <Box mt={2}>
            <Typography align="center">
              Všechny uvedené časy jsou orientační.
            </Typography>
          </Box>
        </HighligtedContent>
        <Box mt={8}>
          <EventTimeline />
        </Box>
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
                <a href="https://mapy.cz/s/lavojopotu">mapy.cz/s/lavojopotu</a>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h3">Stojanovo gymnázium</Typography>
              <Typography>
                Stojanovo gymnázium: 3–4lůžkové pokoje
                <br />
                230 Kč/noc
                <br />
                <a href="https://mapy.cz/s/kubokunede">mapy.cz/s/kubokunede</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Section>
      <TinyMotif img="blueberryOut" />
      <Section title="Dary" tintBg>
        <HighligtedContent>
          <Typography align="center">
            Chcete-li nám dávat dary, nejšířeji využitelné pro nás budou peníze.
            Nelíbí-li se vám tento planý kapitalismus, pak pro vás{' '}
            <a href="https://docs.google.com/spreadsheets/d/10h_dmpW3q1Fu-efcT22co0UUfhPGui9kO1_h3dcttQI/edit?usp=sharing">
              zde máme několik jiných návrhů
            </a>
            .
          </Typography>
        </HighligtedContent>
      </Section>
      <TinyMotif img="bird" />
      <Section title="Kontakty">
        <HighligtedContent>
          <Typography align="center">
            Informace ohledně ubytování, parkování atd. vám podá Kristýna
            Malíková <Phone href="tel:605490669">605 490 669</Phone>. V případě,
            že budete ubytováni na internátu Stojanova Gymnázia volejte před
            svým příjezdem vždy na tato čísla –{' '}
            <Phone href="tel:605490669">605 490 669</Phone> (Kristýna Malíková)
            nebo <Phone href="tel:732759985">732 759 985</Phone> (Tomáš Malík).
          </Typography>
        </HighligtedContent>
        <Box pt={6} textAlign="center">
          <Grid container spacing={2} justify="center">
            <Grid item md={6}>
              <Typography variant="h3">Svědkyně nevěsty</Typography>
              <Typography>
                Kristýna Trňáková <br />
                <Phone href="tel:776448739">776 448 739</Phone>
                <br />
                rodačka z Velehradu, podá jakékoliv praktické informace týkající
                se Velehradu, svatebního dne, snoubenců atd.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h3">Svědek ženicha</Typography>
              <Typography>
                Vašek Šeferna
                <br />
                <Phone href="tel:778772335">778 772 335</Phone>
                <br />
                podá jakékoliv praktické informace ohledně svatebního dne,
                snoubenců, atd. :)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Section>
      <Analytics />
    </Container>
  )
}
