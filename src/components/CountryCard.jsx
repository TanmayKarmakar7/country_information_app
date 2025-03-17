import { useContext } from 'react'
import './CountryCard.css'
import { Link } from "react-router-dom"
import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

const CountryCard = ({image, name, population, region, capital, }) => {

    const [isDark] = useContext(ThemeContext)

  return (
      <Link to={`/${name}`} className={`country-card ${isDark ? 'dark' : ''}`}>
        <div className="country-flag">
            <img src={image} alt="flag" loading="lazy" />
        </div>
        <div className="country-details">
            <h3>{name}</h3>
            <p><b>Population: </b>{population}</p>
            <p><b>Region: </b>{region}</p>
            <p><b>Capital: </b>{capital}</p>
        </div>
      </Link>
  )
}

export default CountryCard
