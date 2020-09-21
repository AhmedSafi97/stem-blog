import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/home.module.css"
import { Layout, LatestArticle, Article } from "../components"

const Home = ({ data }) => {
  const articles = data.allMarkdownRemark.nodes
  const firstArticle = articles[0]

  return (
    <Layout>
      <div className={styles.container}>
        <LatestArticle
          article={firstArticle.frontmatter}
          slug={firstArticle.fields.slug}
        />
        {articles.slice(1).map(({ frontmatter, fields }) => (
          <Article key={fields.slug} article={frontmatter} slug={fields.slug} />
        ))}
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "DD/MM/YYYY")
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
