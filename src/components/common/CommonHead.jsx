import React from 'react'

export const CommonHead = ({StartText , EndText}) => {
  return (
    <div className="container">
        <div className='text-2xl lg:text-4xl font-semibold text-second'>{StartText} <span className=' text-[#4B5563] hidden lg:inline-block'>{EndText}</span></div>
    </div>
  )
}
