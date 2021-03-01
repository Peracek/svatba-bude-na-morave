import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  query TinyMotifsQuery {
    blueberryOut: file(relativePath: { eq: "motif_2.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    blueberryIn: file(relativePath: { eq: "motif_1.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    bird: file(relativePath: { eq: "motif_3.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
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
        <Img {...data[props.img]?.childImageSharp} />
      </Float>
    </Outer>
  )
}
