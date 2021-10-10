import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout>
    <h1>hola tilin</h1>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
