import React, { useState } from 'react'
import ReviewProductSlider from '../components/ReviewProductSlider'
import ProductsSelection from '../components/ProductsSelection';
import Recommend from '../components/Recommend';
import { Link } from 'react-router';
import { BsStars } from "react-icons/bs";


const Details = () => {

  return (
    <>
        <section id='DetailsPage' className='mt-[40px]'>
            <div className="container">
              <div className="Details_Div flex items-start justify-between">
                {/* -------Left Side-------- */}
                <ReviewProductSlider/> 
                {/* -------Right Side-------- */}
                <ProductsSelection/>
              </div>
              {/* -----Product Infos-------- */}
              <div id='Product_Info' className='mt-[105px] flex flex-col gap-[60px] mb-[96px]'>
                <div>
                  <h2 className='text-[36px] text-second font-semibold'>Black Automatic Watch</h2>
                  <p className='w-[735px] text-base font-normal text-Primary mt-[16px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                </div>
                <div>
                  <h2 className='text-[36px] text-second font-semibold'>Fabric + Care</h2>
                  <p className='w-[735px] text-base font-normal text-Primary mt-1'>Material: Soft wool blend</p>
                  <p className='w-[735px] text-base font-normal text-Primary'>Color: Various</p>
                </div>
                <div>
                  <h2 className='text-[36px] text-second font-semibold'>Sale performance</h2>
                    <p className='w-[735px] text-base font-normal text-Primary mt-1'>Sales: 0</p>
                    <p className='w-[735px] text-base font-normal text-Primary'>Review Count: -</p>
                    <p className='w-[735px] text-base font-normal text-Primary'>Review Average: -</p>
                </div>
                <div>
                  <h2 className='text-[36px] text-second font-semibold mb-2'>Keywords</h2>
                  <div className='flex items-center gap-2'>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />men's fashion</Link>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />winter hat</Link>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />colorful accessory</Link>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />warm headwear</Link>
                  </div>
                </div>
              </div>
              {/* ----Recommended---- */}
              <div id="Recommended">
                <Recommend/>
              </div>
            </div>
        </section>
    </>
  )
}

export default Details