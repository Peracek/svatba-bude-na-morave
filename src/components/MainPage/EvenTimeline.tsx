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

const map = (item: string | string[], iteratee: (v: string) => any) =>
  Array.isArray(item) ? item.map(iteratee) : iteratee(item)
const items = [
  ['11.00', 'Mše s obřadem'],
  ['12.30', 'Slivovica, koláčky a klobásky'],
  ['13.00', 'Skupinové foto, průvod na Náměstí Olivové'],
  [
    '14.00',
    [
      'Neuspořádané hodování/oběd',
      'Košt vína, cimbálka, street food, kytica, Břímě, pivo, tanec, doutník, pohodys, oheň, békání',
    ],
  ],
  ['3.00', 'Přeživší přespávají v domečku na zahradě'],
]

export const EventTimeline = () => (
  <Timeline>
    {items.map(([time, desc], idx) => (
      <TimelineItem>
        <TimelineOppositeContent>{time}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={'primary'} />
          {idx < items.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          {map(desc, d => (
            <Typography>{d}</Typography>
          ))}
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
)
