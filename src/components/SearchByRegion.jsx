import React, { useContext } from 'react'
import './SearchByRegion.css'
import { ThemeContext } from '../context/ThemeContext'

const SearchByRegion = ({ setQuery }) => {
    const [isDark] = useContext(ThemeContext)
  return (
    <select className={`filter-region ${isDark ? 'dark' : ''}`} onChange={(e) => setQuery(e.target.value.toLowerCase())}>
        <option hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}

export default SearchByRegion
