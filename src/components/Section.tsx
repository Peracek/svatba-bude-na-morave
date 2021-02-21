import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme } from '@material-ui/core'
import { transparentize } from 'polished'
import styled from 'styled-components'

interface SectionProps {
  title?: string
  tintBg?: boolean
  paddingTop?: number
  paddingBottom?: number
}

const useStyles = makeStyles<Theme, SectionProps, string>((theme: Theme) => ({
  section: {
    backgroundColor: props =>
      props.tintBg
        ? transparentize(0.9, theme.palette.primary.main)
        : 'inherit',
  },
}))

const SSection = styled.section<{
  tintBg?: boolean
  paddingTop?: number
  paddingBottom?: number
}>`
  ${p =>
    p.tintBg &&
    `background: ${transparentize(0.9, p.theme.palette.primary.main)}`};
  padding: 175px 0;
  ${p => p.paddingTop != null && `padding-top: ${p.paddingTop}px`}
  ${p => p.paddingBottom != null && `padding-bottom: ${p.paddingBottom}px`}
`

export const Section: FC<SectionProps> = props => {
  return (
    <SSection {...props}>
      <Container maxWidth="md">
        {props.title && (
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {props.title}
          </Typography>
        )}
        {props.children}
      </Container>
    </SSection>
  )
}
