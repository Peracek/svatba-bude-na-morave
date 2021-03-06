import { Container, Typography } from '@material-ui/core'
import { transparentize } from 'polished'
import React, { FC } from 'react'
import styled from 'styled-components'

interface SectionProps {
  title?: string
  tintBg?: boolean
  paddingTop?: number
  paddingBottom?: number
}

const StyledSection = styled.section<{
  tintBg?: boolean
  paddingTop?: number
  paddingBottom?: number
}>`
  ${p =>
    p.tintBg &&
    `background: ${transparentize(0.9, p.theme.palette.primary.main)}`};
  padding: 175px 0;
  ${p => p.paddingTop != null && `padding-top: ${p.paddingTop}px`};
  ${p => p.paddingBottom != null && `padding-bottom: ${p.paddingBottom}px`};
`

const Header = styled.div`
  padding-bottom: ${p => p.theme.spacing(6)}px;
`

export const Section: FC<SectionProps> = props => {
  return (
    <StyledSection {...props}>
      <Container maxWidth="md">
        {props.title && (
          <Header>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {props.title}
            </Typography>
          </Header>
        )}
        {props.children}
      </Container>
    </StyledSection>
  )
}
