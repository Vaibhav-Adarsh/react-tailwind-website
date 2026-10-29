import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <h2 className='text-[2.3rem] sm:text-[4rem] font-medium tracking-[-0.05em] text-[#2d2d2d]'>{title}</h2>
      <p className='mt-3 max-w-3xl text-base sm:text-[1.2rem] leading-relaxed text-gray-500 dark:text-white/75'>
        {desc}
      </p>
    </div>
  )
}

export default Title
