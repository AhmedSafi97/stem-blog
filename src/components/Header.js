import React from "react"

import styles from "../styles/header.module.css"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Menu from "./Menu"
import Search from "./Search"

const Header = () => (
  <header className={styles.wrapper}>
    <Logo />
    <div className={styles.navigation}>
      <Menu />
      <NavBar />
    </div>
    <div className={styles.search_component}>
      <Search />
    </div>
  </header>
)

export default Header
