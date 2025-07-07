import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const SingleBrand = ({BrandHead , BrandP}) => {
  return (
    <section>
        <div className=' lg:border-[1px] border-[#E5E7EB] p-[40px] rounded-[16px] flex justify-between items-center w-[419px]'>
            <div>
                <h2 className='text-second text-2xl font-semibold mb-[3px]'>{BrandHead}</h2>
                <p className='text-Primary text-sm'>{BrandP}</p>
            </div>
            <div className='flex items-center gap-[12px]'>
                <span className='border-[#E5E7EB] lg:border-[1px] lg:h-[50px] w-[1px]'></span>
                <p className='flex items-center gap-[8px] text-Primary font-medium'>Shop Now <IoIosArrowRoundForward className='text-[26px]'/></p>
            </div>
        </div>
    </section>
  )
}

export default SingleBrand