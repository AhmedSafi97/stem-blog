import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/articlePage.module.css"
import { Layout } from "../components"

const ArticlePage = ({ data }) => {
  const article = data.markdownRemark
  const { title, date, image, category } = article.frontmatter
  return (
    <Layout>
      <div className={styles.container}>
        <Img fluid={image.childImageSharp.fluid} alt={title} />
        <article className={`${styles[category]} ${styles.article}`}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.date}>{date}</span>
          <div
            dangerouslySetInnerHTML={{ __html: article.html }}
            className={styles.body}
          />
        </article>
      </div>
    </Layout>
  )
}

export default ArticlePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`