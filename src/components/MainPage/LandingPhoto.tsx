import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'

const query = graphql`
  query LandingPhotoQuery {
    photo: file(relativePath: { eq: "fotoMPuvodni.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    tada: file(relativePath: { eq: "tada.png" }) {
      childImageSharp {
        fixed(width: 40) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

const Container = styled.div`
  height: calc(100vh-64px);
  position: relative;
`

const Overlay = styled.div`
  background: ${p => transparentize(0.6, p.theme.palette.primary.main)};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Heading = styled.div`
  position: absolute;
  top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${props => props.theme.breakpoints.up('md')} {
    top: 30%;
    font-size: 30px;
  }
`

const H1 = styled.h1`
  padding: 12px 18px;
  border-top: 4px white solid;
  border-bottom: 4px white solid;
  margin: 0;
  margin-top: 15px;
  text-align: center;
  color: white;
  font-weight: 400;
  font-style: italic;
`

export const LandingPhoto = () => {
  const data = useStaticQuery(query)

  return (
    <Container>
      <Img
        {...data.photo.childImageSharp}
        imgStyle={{ objectPosition: '62% 85%' }}
      />
      <Overlay />
      <Heading>
        <Img {...data.tada.childImageSharp} />
        <H1>Marie a Prokop</H1>
      </Heading>
    </Container>
  )
}
