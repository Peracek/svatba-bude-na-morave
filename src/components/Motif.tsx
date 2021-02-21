import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const query = graphql`
  query MotifQuery {
    imageSharp(id: { eq: "e9e3b616-9356-5cda-bd56-6e17aa21bbd3" }) {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const Motif = () => {
  const data = useStaticQuery(query)

  if (!data) {
    return null
  }

  return (
    <div>
      <Img {...data.imageSharp} />
    </div>
  )
}
