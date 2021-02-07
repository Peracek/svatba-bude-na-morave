import { graphql, useStaticQuery } from 'gatsby'

export interface SiteMetadata {
  title: string
  description: string
  author: {
    name: string
  }
}

export default (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
