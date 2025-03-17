import React, { useContext } from 'react'
import './SearchFilter.css'
import { ThemeContext } from '../context/ThemeContext'

const SearchFilter = ({setQuery}) => {
    const [isDark] = useContext(ThemeContext)
  return (
      <div className={`search-container ${isDark ? 'dark' : ''}`}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className={isDark ? 'dark' : ''} type="text" placeholder="Search for a country..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      </div>
  )
}

export default SearchFilter
