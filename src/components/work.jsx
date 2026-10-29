import React from 'react'
import assets from '../assets/assets'

const projects = [
  {
    title: 'Mobile app marketing',
    description: 'We turn bold ideas into powerful digital solutions that connect...',
    image: assets.work_mobile_app,
    alt: 'Mobile shopping application design',
    cardClass: 'bg-[#dfeaf6]',
  },
  {
    title: 'Dashboard management',
    description: 'We build intuitive dashboards that transform complex data into clear insights and actionable results.',
    image: assets.work_dashboard_management,
    alt: 'Analytics dashboard interface',
    cardClass: 'bg-[#dfeaf6]',
  },
  {
    title: 'Fitness app promotion',
    description: 'We create engaging fitness experiences that help users track their progress and achieve their goals.',
    image: assets.work_fitness_app,
    alt: 'Fitness tracking mobile application',
    cardClass: 'bg-[#dfeaf6]',
  },
]

const Work = ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <section id='projects' className={isDark ? 'bg-[#000000] px-4 py-20 sm:px-10 lg:px-16' : 'bg-[#f3f3f5] px-4 py-20 sm:px-10 lg:px-16'}>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-14 text-center'>
          <h2 className={`text-[2.6rem] font-medium tracking-[-0.06em] sm:text-[5rem] ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Our latest work
          </h2>

          <p className={`mx-auto mt-4 max-w-3xl text-base leading-8 sm:text-[1.15rem] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3'>
          {projects.map((project) => (
            <article key={project.title} className='group'>
              <div className={`overflow-hidden rounded-[1.75rem] ${project.cardClass} ${isDark ? '' : 'shadow-[0_8px_24px_rgba(15,23,42,0.08)]'}`}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className='aspect-[1.25/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                  loading='lazy'
                />
              </div>

              <h3 className={`mt-5 text-[1.9rem] font-medium leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>

              <p className={`mt-2 text-base leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
