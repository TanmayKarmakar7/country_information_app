import './App.css'
import Header from './components/Header'
import {Outlet} from "react-router-dom"
import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext';


function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <div className={isDark ? 'dark' : ''}>
        <Header/>
        <Outlet/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
