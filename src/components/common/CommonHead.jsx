import React from 'react'
import { Link } from 'react-router'
import { MdReadMore } from "react-icons/md";

export const CommonHead = ({StartText , EndText , HideShow}) => {
  return (
    <div className="container">
      <div className='flex lg:items-center justify-between flex-col gap-2 lg:gap-0 lg:flex-row'>
        <div className='text-2xl lg:text-4xl font-semibold text-second'>{StartText} <span className=' text-[#4B5563] hidden lg:inline-block'>{EndText}</span></div>
          <div className={`${HideShow}`}>
            <Link className='text-white text-sm py-[12px] px-[24px] lg:py-[10px] lg:px-[22px] bg-second rounded-full flex items-center w-fit gap-1.5 duration-[.3s] hover:scale-[1.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' to={'/Products'}>Explore now <MdReadMore className=' text-2xl'/></Link>
          </div>
      </div>
    </div>
  )
}
