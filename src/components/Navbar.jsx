import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeTogglebtn from './ThemeTogglebtn'

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex items-center justify-between px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 sm:px-12 lg:px-24 xl:px-40'>
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='Company logo'
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          sidebarOpen
            ? 'max-sm:w-60 max-sm:pl-10'
            : 'max-sm:w-0 max-sm:overflow-hidden'
        } max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <button
          type='button'
          className='absolute right-4 top-4 sm:hidden'
          onClick={() => setSidebarOpen(false)}
          aria-label='Close navigation menu'
        >
          <img src={assets.close_icon} alt='' className='w-5' />
        </button>

        <a href='#' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Home</a>
        <a href='#services' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Service</a>
        <a href='#our-work' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Our Work</a>
        <a href='#contact-us' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Testimonial</a>
      </div>

      <div className='flex items-center gap-4'>

        <ThemeTogglebtn theme={theme} setTheme={setTheme} />

        <a href='#contact-us' className='text-sm hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'>
        Connect <img src={assets.arrow_icon} width={14} alt='Arrow' />
        </a>
        <button
          type='button'
          className='sm:hidden'
          onClick={() => setSidebarOpen(true)}
          aria-label='Open navigation menu'
        >
          <img src={assets.menu_icon} alt='' className='w-6' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
