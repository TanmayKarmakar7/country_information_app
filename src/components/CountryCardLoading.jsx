import React, { useContext } from 'react'
import './CountryCardLoading.css'
import { ThemeContext } from '../context/ThemeContext';

const CountryCardLoading = () => {

    const [isDark] = useContext(ThemeContext)

    const countryCard = Array.from({length: 12}).map((el, index) => {
        return <div key={index} className={`country---card ${isDark ? 'dark' : ''}`}>
            <div className={`country---flag ${isDark ? 'dark' : ''}`}>
            </div>
            <div className="country---name">
                <div className={isDark ? 'dark' : ''}></div>
            </div>
            <div className="country---details">
                <div className={isDark ? 'dark' : ''}></div>
                <div className={isDark ? 'dark' : ''}></div>
                <div className={isDark ? 'dark' : ''}></div>
            </div>
        </div>
    })

  return (
    <div className='main-container'>
        {countryCard}
    </div>
  )
}

export default CountryCardLoading
