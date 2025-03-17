import React, { useContext } from 'react'
import { useState } from 'react'
import CountriesList from './CountriesList'
import SearchByRegion from './SearchByRegion'
import SearchFilter from './SearchFilter'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    
  const [query, setQuery] = useState('')

  const [isDark] = useContext(ThemeContext)

  return (
    <main className={isDark ? 'dark' : ''}>
      <div className="container">
        <div className='search-filter-container'>
          <SearchFilter setQuery={setQuery} />
          <SearchByRegion setQuery={setQuery} />
        </div>
        
        <CountriesList query={query} />
      </div>
      </main>
  )
}

export default Home
