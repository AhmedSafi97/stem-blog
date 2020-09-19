import React from "react"

import styles from "../styles/layout.module.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.children_wrapper}>{children}</div>
    <Footer />
  </div>
)

export default Layout
