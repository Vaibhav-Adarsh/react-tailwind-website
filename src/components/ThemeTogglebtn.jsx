import React from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({ theme, setTheme }) => {
  return (
    <button
      type='button'
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className='flex items-center justify-center rounded-full border border-gray-300 bg-white p-1 shadow-sm transition hover:scale-105 dark:border-gray-700 dark:bg-slate-900'
    >
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        className='h-8 w-8 rounded-full p-1.5'
        alt=''
      />
    </button>
  )
}

export default ThemeTogglebtn