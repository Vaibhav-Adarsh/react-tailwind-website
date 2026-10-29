import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Trustedby from './components/Trustedby'
import Services from './components/services'
import Work from './components/work'
import Team from './components/Team'
import Contact from './components/Contact'

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trustedby />
      <Services />
      <Work theme={theme} />
      <Team theme={theme} />
      <Contact theme={theme} />
    </div>
  )
}

export default App
