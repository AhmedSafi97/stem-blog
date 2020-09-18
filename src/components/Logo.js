import React from "react"
import { Link } from "gatsby"

import styles from "../styles/logo.module.css"
import LogoIcon from "../assets/logo.inline.svg"

const Logo = () => (
  <h1 className={styles.wrapper}>
    <Link className={styles.link} to="/">
      <LogoIcon className={styles.icon} />
      <span>STEM</span>
    </Link>
  </h1>
)

export default Logo
