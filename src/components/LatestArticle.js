import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/latestArticle.module.css"

const LatestArticle = ({ article, slug }) => {
  const { title, image, date, category } = article

  return (
    <div className={`${styles[category]} ${styles.container}`}>
      <Link to={slug}>
        <section>
          <Img fluid={image.childImageSharp.fluid} alt={title} />
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.date}>{date}</span>
          </div>
        </section>
      </Link>
    </div>
  )
}

export default LatestArticle
