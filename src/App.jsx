import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div className={theme === 'dark' ? 'dark bg-black text-white' : 'bg-white text-black'}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
