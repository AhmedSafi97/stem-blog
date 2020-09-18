import React from "react"
import { Link } from "gatsby"

import styles from "../styles/navbar.module.css"
import { navConfig } from "../utils"

const NavBar = ({ location }) => (
  <nav className={styles.wrapper}>
    {Object.entries(navConfig).map(([name, path]) => (
      <Link key={name} to={path} className={styles.link}>
        {name}
      </Link>
    ))}
  </nav>
)

export default NavBar
