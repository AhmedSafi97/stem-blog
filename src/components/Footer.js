import React from "react"

import styles from "../styles/footer.module.css"
import Logo from "./Logo"
import NavBar from "./NavBar"

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <div className={styles.nav}>
      <NavBar />
    </div>
    <p className={styles.copy}>&copy; 2020 All Rights Reserved</p>
  </footer>
)

export default Footer
