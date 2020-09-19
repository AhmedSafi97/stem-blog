import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/home.module.css"
import { Layout, LatestArticle } from "../components"

const Home = ({ data }) => {
  console.log(data)

  return <h1>STEM</h1>
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "dd mm yyyy")
          title
          category
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
