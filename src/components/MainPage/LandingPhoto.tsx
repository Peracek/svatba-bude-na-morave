import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const query = graphql`
  query LandingPhotoQuery {
    file(relativePath: { eq: "fotoMPuvodni.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const LandingPhoto = () => {
  const data = useStaticQuery(query)

  return (
    <div>
      <Img {...data.file.childImageSharp} />
    </div>
  )
}
