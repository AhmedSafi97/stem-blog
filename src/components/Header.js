import React, { useEffect, useState } from "react"

import styles from "../styles/header.module.css"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Menu from "./Menu"
import Search from "./Search"

const Header = () => {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <header className={styles.wrapper}>
      <Logo />
      {windowWidth <= 1024 ? <Menu /> : <NavBar />}
      <div className={styles.search_component}>
        <Search />
      </div>
    </header>
  )
}

export default Header
