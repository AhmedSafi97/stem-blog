import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Index } from "elasticlunr"

import styles from "../styles/search.module.css"

const Search = () => {
  const [focused, setFocused] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const { siteSearchIndex } = useStaticQuery(graphql`
    query {
      siteSearchIndex {
        index
      }
    }
  `)

  const search = e => {
    const query = e.target.value
    const index = Index.load(siteSearchIndex.index)
    const result = index
      .search(query, {})
      .map(({ ref }) => index.documentStore.getDoc(ref))

    setInputValue(query)
    setSearchResult(result)
  }

  let Results = <></>

  if (inputValue) {
    Results =
      searchResult.length > 0 ? (
        searchResult.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))
      ) : (
        <p>No results</p>
      )
  }

  return (
    <div>
      <span className={styles.wrapper}>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search articles"
          autoComplete="off"
          className={`${styles.input} ${focused ? styles.input_focus : ""}`}
          value={inputValue}
          onChange={search}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </span>
      <div
        className={`${styles.search} ${
          focused && inputValue ? "" : styles.search_hide
        }`}
      >
        <div className={styles.arrow_up} />
        {Results}
      </div>
    </div>
  )
}

export default Search
