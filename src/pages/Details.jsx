import React from 'react'
import ReviewProductDetails from '../components/ReviewProductDetails'
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";


const Details = () => {
  return (
    <>
        <section id='DetailsPage' className='mt-[40px]'>
            <div className="container">
              <div className="Details_Div flex items-start justify-between">
                {/* -------Left Side-------- */}
                <ReviewProductDetails/> 
                {/* -------Right Side-------- */}
                <div className='w-[460px] h-[463px] p-[33px] border-2 border-[#0b54e6] mt-[16px] rounded-[16px]'>
                  <div id="Review-Price" className='flex items-start justify-between gap-[6px]'>
                    {/* -----Reviews----- */}
                    <div className='flex items-center gap-[6px]'>
                      <FaStar className='text-[#FBBF24] text-[17px]'/>
                      <p className='text-Primary font-semibold text-base flex items-center gap-[6px]'>4.9 • <span className='font-normal underline'>142 reviews</span></p>
                    </div>
                    {/* -----Price----- */}
                    <div className='flex flex-col items-end'>
                      <h2 className='text-[24px] font-semibold text-second'>$169.99</h2>
                      <p className='text-sm text-Primary font-medium line-through' >$199.99</p>
                    </div>
                  </div>
                  {/* --------Size--------- */}
                  <div id="Size" className='mt-[32px]'>
                    <div>
                      <h2 className='text-base font-semibold text-second mb-3'>Size : S</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                      <button className='w-[77px] h-[44px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">S</button>
                      <button className='w-[77px] h-[44px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">M</button>
                      <button className='w-[77px] h-[44px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">L</button>
                      <button className='w-[77px] h-[44px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">XL</button>
                      <button className='w-[77px] h-[44px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">2XL</button>
                    </div>
                  </div>
                  {/* --------Quantity Selector--------- */}
                  <div id='Quantity_Cart' className='mt-[32px] flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second'>-</button>
                      <p>1</p>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second'>+</button>
                    </div>

                    <button className='w-[178px]  h-[52px] bg-second text-white flex items-center  justify-center cursor-pointer gap-[8px] rounded-full'><IoBagHandleOutline />Add to cart</button>
                  </div>
                </div>

              </div>
            </div>
        </section>
    </>
  )
}

export default Details