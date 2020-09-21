import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/categoryPage.module.css"
import { Layout, Article } from "../components"
import { capitalizeFirstLetter } from "../utils"

const CategoryPage = ({ data, pageContext }) => {
  const title = capitalizeFirstLetter(pageContext.category)

  return (
    <Layout>
      <section>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.container}>
          {data.allMarkdownRemark.nodes.map(({ frontmatter, fields }) => (
            <Article
              key={fields.slug}
              article={frontmatter}
              slug={fields.slug}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default CategoryPage

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
