import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  query TinyMotifsQuery {
    blueberryOut: imageSharp(
      id: { eq: "14c8134d-71a6-56ec-b442-c81a58232aed" }
    ) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
    blueberryIn: imageSharp(
      id: { eq: "64dab1d0-2b6c-540b-932f-feef4151f839" }
    ) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
    bird: imageSharp(id: { eq: "dfb9c729-d36c-5e45-8bde-08560421f827" }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`

const Outer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const Float = styled.div`
  position: absolute;
  transform: translateY(-50%);
`

export const TinyMotif: React.FC<{
  img: 'blueberryIn' | 'blueberryOut' | 'bird'
}> = props => {
  const data = useStaticQuery(query)

  if (!data) {
    return null
  }
  return (
    <Outer>
      <Float>
        <Img {...data[props.img]} />
      </Float>
    </Outer>
  )
}
