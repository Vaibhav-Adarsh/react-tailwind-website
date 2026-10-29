import React from 'react'
import { teamData } from '../assets/assets'

const Team = ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <section id='team' className={isDark ? 'bg-[#000000] px-4 py-20 sm:px-10 lg:px-16' : 'bg-[#f3f3f5] px-4 py-20 sm:px-10 lg:px-16'}>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-12 text-center'>
          <h2 className={`text-[2.8rem] font-medium tracking-[-0.06em] sm:text-[6rem] ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Meet the team
          </h2>
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-[1.35rem] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A passionate team of digital experts dedicated to your brand&apos;s success.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {teamData.map((member) => (
            <div
              key={member.name}
              className={`flex items-center gap-4 rounded-[1.4rem] border p-4 shadow-[0_0_0_1px_rgba(148,163,184,0.03)] ${isDark ? 'border-[#1b2a3d] bg-[#0a1627]' : 'border-[#e5e7eb] bg-white'}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className='h-16 w-16 rounded-full object-cover ring-2 ring-white'
              />

              <div className='min-w-0'>
                <h3 className={`text-[1.1rem] font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
