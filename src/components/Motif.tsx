import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const query = graphql`
  query MotifQuery {
    file(relativePath: { eq: "motif_full.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
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
      <Img {...data.file.childImageSharp} />
    </div>
  )
}
