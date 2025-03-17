import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {

  const [isDark, setIsDark] = useContext(ThemeContext);


  return (
    <header className={isDark ? 'dark' : ''}>
        <div className="header-container">
            <h2 className="title"><Link to="/">Explore the world</Link></h2>
            <button className='dark-light-btn' onClick={() => {
                setIsDark(!isDark)
                localStorage.setItem('isDarkMode', !isDark)
              }}>
              <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i> {`${isDark ? 'Light Mode' : 'Dark Mode'}`}
            </button>
            {/* <div>
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="checkbox-label">
                  <i className="fas fa-moon"></i>
                  <i className="fas fa-sun"></i>
                  <span className="ball"></span>
                </label>
            </div> */}
        </div>
    </header>
  )
}

export default Header
