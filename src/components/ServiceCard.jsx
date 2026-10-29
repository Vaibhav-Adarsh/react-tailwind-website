import React from 'react'

const ServiceCard = ({ service, index }) => {
  const isHighlighted = index === 1

  return (
    <div
      className={[
        'flex items-center gap-5 rounded-[26px] border bg-white/90 p-5 sm:p-6 transition-all',
        isHighlighted
          ? 'border-[#5f63f1] shadow-[0_0_0_2px_rgba(95,99,241,0.12)]'
          : 'border-[#dfe3eb] shadow-[0_0_0_1px_rgba(148,163,184,0.06)]'
      ].join(' ')}
    >
      <div
        className={[
          'flex h-16 w-16 items-center justify-center rounded-full border',
          isHighlighted
            ? 'border-[#5f63f1] bg-[#eef2ff]'
            : 'border-[#d9dfe9] bg-[#f3f4f6]'
        ].join(' ')}
      >
        <img src={service.icon} alt={service.title} className='h-7 w-7 object-contain' />
      </div>

      <div className='min-w-0 flex-1'>
        <h3 className='text-[1.7rem] sm:text-[2.1rem] font-medium leading-tight text-[#2f2f2f]'>{service.title}</h3>
        <p className='mt-2 text-sm sm:text-[1.05rem] leading-relaxed text-gray-500'>
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
