import React from 'react'
import { CommonHead } from './common/CommonHead'
import { SingleServiceItem } from './common/SingleServiceItem'
import SingleBrand from './common/SingleBrand'

export const Brands = () => {
  return (
    <>

    <section id='Brands_Slider' className='mt-[52px] mb-6 lg:mt-[88px] lg:mb-[40px]'>
      <div className="container">
        {/* --------Common Head-------- */}
        <div className='mb-[40px]'><CommonHead StartText={'Start exploring.'} EndText={'Good things are waiting for you'}/></div>
        {/* --------Slider-------- */}
          <div className='flex'>

          </div>
          <SingleBrand/>
      </div>
        
    </section>

    </>
  )
}
