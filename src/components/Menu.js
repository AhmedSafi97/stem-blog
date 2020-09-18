import React, { useState } from "react"

import styles from "../styles/menu.module.css"
import NavBar from "./NavBar"

const Menu = () => {
  const [toggled, setToggled] = useState(false)

  return (
    <div
      className={`${styles.wrapper} ${
        toggled ? styles.wrapper_open : styles.wrapper_closed
      }`}
    >
      <button
        className={`${styles.btn} ${toggled ? styles.toggle : ""}`}
        onClick={() => setToggled(t => !t)}
        aria-label={toggled ? "close menu" : "open menu"}
      >
        <div className={styles.bar} />
      </button>
      {toggled && (
        <div className={styles.nav}>
          <NavBar />
        </div>
      )}
    </div>
  )
}

export default Menu
