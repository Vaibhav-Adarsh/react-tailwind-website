import React from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({ theme, setTheme }) => {
  return (
    <button
      type='button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        className='size-8.5 rounded-full border border-gray-500 p-1.5 cursor-pointer'
        alt=''
      />
    </button>
  )
}

export default ThemeTogglebtn