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
    <div style={{ height: 'calc(100wh-64px)' }}>
      <Img
        {...data.file.childImageSharp}
        imgStyle={{ objectPosition: '62% 85%' }}
      />
    </div>
  )
}
