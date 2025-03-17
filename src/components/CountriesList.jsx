import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import './CountriesList.css'
import CountryCardLoading from './CountryCardLoading';

const CountriesList = ({query}) => {

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then((data) => {
      setCountriesData(data);
    })  
  }, [])

  
  return (
    <> 
      {!countriesData.length ?  <CountryCardLoading /> : <div className="countries-container">
        {countriesData.filter((country) => 
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
          ).map((country, index) => {
          return <CountryCard
              key={index} 
              image={country.flags.png}
              name={country.name.common} 
              population={country.population.toLocaleString('en-IN')}
              region={country.region}
              capital={country.capital}
          /> })}
      </div>}
    </>
  )
}

export default CountriesList
