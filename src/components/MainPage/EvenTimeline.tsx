import { Typography } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import React from 'react'

const map = (item: string | string[], iteratee: (v: string) => any) =>
  Array.isArray(item) ? item.map(iteratee) : iteratee(item)
const items = [
  ['11.00', 'Mše s obřadem'],
  ['12.30', 'Slivovica, koláčky a klobásky'],
  ['13.00', 'Skupinové foto, průvod na Náměstí Olivové (Buchlovská 9)'],
  [
    '14.00',
    [
      'Neuspořádané hodování/oběd',
      'Košt vína, cimbálka Hlaholica, street food, kytica, Břímě, pivo, tanec, doutník, pohodys, oheň, békání',
    ],
  ],
  ['3.00', 'Přeživší přespávají v domečku na zahradě'],
]

export const EventTimeline = () => (
  <Timeline>
    {items.map(([time, desc], idx) => (
      <TimelineItem>
        <TimelineOppositeContent
          style={{ flex: 0.5, transform: 'translateY(-4%)' }}
        >
          {time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={'primary'} />
          {idx < items.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent style={{ transform: 'translateY(-10%)' }}>
          {map(desc, d => (
            <Typography>{d}</Typography>
          ))}
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
)
