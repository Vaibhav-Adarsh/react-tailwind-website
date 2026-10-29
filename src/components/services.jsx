import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect and engage...',
      icon: assets.ads_icon,
    },
    {
      title: 'Content marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content writing',
      description: 'We help you create a marketing strategy that drives results.',
      icon: assets.content_icon,
    },
    {
      title: 'Social media',
      description: 'We help you build a strong social media presence and engage with your audience.',
      icon: assets.social_icon,
    },
  ]

  return (
    <div
      id='services'
      className='relative flex flex-col items-center gap-8 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'
    >
      <div className='absolute inset-x-0 top-0 -z-10 h-[420px] bg-[#f4edf5]' />
      <img src={assets.bgImage2} alt='' className='absolute -top-24 -left-24 -z-10 hidden dark:hidden' />

      <Title
        title='How can we help?'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <div className='grid w-full max-w-5xl gap-6 md:grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Services
