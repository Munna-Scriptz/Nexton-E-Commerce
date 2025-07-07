import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router';

const SingleBrand = ({BrandHead , BrandP}) => {
  return (
    <section>
        <div className='border-[1px] border-[#E5E7EB] px-[24px] py-[40px] lg:p-[40px] rounded-[16px] flex justify-between items-center w-full lg:w-[419px]'>
            <div>
                <h2 className='text-second text-[20px] lg:text-2xl font-semibold mb-[3px]'>{BrandHead}</h2>
                <p className='text-Primary text-sm'>{BrandP}</p>
            </div>
            <div className='flex items-center gap-[6px] lg:gap-[12px]'>
                <span className='border-[#E5E7EB] border-[1px] h-[32px] w-[2px]'></span>
                <Link to={'/'} className='flex items-center gap-[8px] text-Primary font-medium'>Shop Now <IoIosArrowRoundForward className='text-[26px]'/></Link>
            </div>
        </div>
    </section>
  )
}

export default SingleBrand