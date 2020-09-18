import React from "react"

import styles from "../styles/search.module.css"

const Search = ({onChange}) => (
  <div>
    <span className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search articles"
        autocomplete="off"
        className={styles.input}
        onChange={onChange}
      />
    </span>
  </div>
)

export default Search
