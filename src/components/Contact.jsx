import React from 'react'
import assets from '../assets/assets'

const socialLinks = [
  { name: 'Facebook', icon: assets.facebook_icon },
  { name: 'Twitter', icon: assets.twitter_icon },
  { name: 'Instagram', icon: assets.instagram_icon },
  { name: 'LinkedIn', icon: assets.linkedin_icon },
]

const Contact = ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <section
      id='contact-us'
      className={isDark ? 'bg-[#040404] px-4 pb-10 pt-14 text-white sm:px-10 lg:px-16' : 'bg-[#f3f3f5] px-4 pb-10 pt-14 text-slate-900 sm:px-10 lg:px-16'}
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-12 text-center'>
          <h2 className='text-[2.5rem] font-medium tracking-[-0.06em] sm:text-[4rem]'>
            Reach out to us
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-[1.25rem] ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to grow your brand? Let&apos;s connect and build something exceptional together.
          </p>
        </div>

        <div className='mx-auto max-w-3xl'>
          <div className='grid gap-6 md:grid-cols-2'>
            <div>
              <label className={`mb-2 block text-[1.15rem] font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Your name</label>
              <div className={`flex items-center gap-3 rounded-[1.2rem] border px-4 py-3 shadow-[0_0_0_1px_rgba(148,163,184,0.02)] ${isDark ? 'border-[#2c2c2c] bg-[#111111]' : 'border-[#dfe7f0] bg-white/80'}`}>
                <img src={assets.person_icon} alt='' className='h-5 w-5 opacity-70' />
                <input
                  type='text'
                  placeholder='Enter your name'
                  className={`w-full bg-transparent text-base outline-none ${isDark ? 'text-white placeholder:text-gray-400' : 'text-gray-700 placeholder:text-gray-400'}`}
                />
              </div>
            </div>

            <div>
              <label className={`mb-2 block text-[1.15rem] font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Email id</label>
              <div className={`flex items-center gap-3 rounded-[1.2rem] border px-4 py-3 shadow-[0_0_0_1px_rgba(148,163,184,0.02)] ${isDark ? 'border-[#2c2c2c] bg-[#111111]' : 'border-[#dfe7f0] bg-white/80'}`}>
                <img src={assets.email_icon} alt='' className='h-5 w-5 opacity-70' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className={`w-full bg-transparent text-base outline-none ${isDark ? 'text-white placeholder:text-gray-400' : 'text-gray-700 placeholder:text-gray-400'}`}
                />
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <label className={`mb-2 block text-[1.15rem] font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Message</label>
            <textarea
              rows='6'
              placeholder='Enter your message'
              className={`w-full rounded-[1.2rem] border px-4 py-4 text-base outline-none shadow-[0_0_0_1px_rgba(148,163,184,0.02)] ${isDark ? 'border-[#2c2c2c] bg-[#111111] text-white placeholder:text-gray-400' : 'border-[#dfe7f0] bg-white/80 text-gray-700 placeholder:text-gray-400'}`}
            />
          </div>

          <div className='mt-8 flex justify-center'>
            <button
              type='button'
              className='inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4e54d8] to-[#4d5fe8] px-10 py-4 text-[1.05rem] font-medium text-white shadow-[0_10px_20px_rgba(86,94,255,0.22)] transition-transform hover:scale-[1.02]'
            >
              Submit <span aria-hidden='true'>→</span>
            </button>
          </div>
        </div>
      </div>

      <footer className={`mx-auto mt-16 max-w-6xl border-t pt-8 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-xl'>
            <div className='flex items-center gap-3'>
              <img src={isDark ? assets.logo_dark : assets.logo} alt='agency.ai' className='h-10 w-auto' />
            </div>

            <p className={`mt-5 text-base leading-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>

            <nav className={`mt-6 flex flex-wrap gap-8 text-base ${isDark ? 'text-gray-200' : 'text-neutral-700'}`}>
              <a href='#' className={isDark ? 'hover:text-white' : 'hover:text-gray-900'}>Home</a>
              <a href='#services' className={isDark ? 'hover:text-white' : 'hover:text-gray-900'}>Services</a>
              <a href='#projects' className={isDark ? 'hover:text-white' : 'hover:text-gray-900'}>Our work</a>
              <a href='#testimonial' className={isDark ? 'hover:text-white' : 'hover:text-gray-900'}>Testimonial</a>
            </nav>
          </div>

          <div className='w-full max-w-xl'>
            <h3 className={`text-[2rem] font-medium tracking-[-0.04em] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Subscribe to our newsletter
            </h3>
            <p className={`mt-3 text-base leading-7 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className='mt-6 flex max-w-lg gap-3'>
              <input
                type='email'
                placeholder='Enter your email'
                className={`flex-1 rounded-[1rem] border px-4 py-3 text-base outline-none ${isDark ? 'border-[#2c2c2c] bg-[#111111] text-white placeholder:text-gray-400' : 'border-[#dfe7f0] bg-white text-gray-700 placeholder:text-gray-400'}`}
              />
              <button
                type='button'
                className='rounded-[1rem] bg-gradient-to-r from-[#4e54d8] to-[#4d5fe8] px-6 py-3 text-base font-medium text-white shadow-[0_10px_20px_rgba(86,94,255,0.2)]'
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className={`mt-10 flex flex-col gap-5 border-t pt-5 sm:flex-row sm:items-center sm:justify-between ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={isDark ? 'text-base text-gray-300' : 'text-base text-gray-500'}>Copyright 2025 © agency.ai - All Right Reserved.</p>

          <div className='flex items-center gap-3'>
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href='#'
                aria-label={item.name}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${isDark ? 'border-gray-700 bg-[#111111] text-gray-200 hover:border-indigo-400 hover:text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:text-indigo-600'}`}
              >
                <img src={item.icon} alt={item.name} className='h-4 w-4 object-contain' />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
