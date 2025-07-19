import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
const ProductsSelection = () => {

  const [Value, SetValue] = useState(1)

  if(Value < 1){
    SetValue(Value + 1)
  }else{

  }

  return (
    <>
        <div className='w-[460px] h-[463px] p-[33px] border-2 border-[#E5E7EB] mt-[16px] rounded-[16px]'>
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
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>SetValue(Value - 1)}>-</button>
                      <p className='text-base text-Primary font-medium'>{Value}</p>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>SetValue(Value + 1)}>+</button>
                    </div>
                    <button className='w-[178px]  h-[52px] bg-second text-white flex items-center  justify-center cursor-pointer gap-[8px] rounded-full' ><IoBagHandleOutline />Add to cart</button>
                  </div>
                  {/* --------Total Amount--------- */}
                  <div id='Total_Amount' className='mt-[32px]'>
                    <div>
                        <div className='flex items-center justify-between'>
                          <p className='text-Primary font-normal text-base'>$169.99 x 1</p>
                          <p className='text-Primary font-normal text-base'>$169.99</p>
                        </div>
                        <div className='flex items-center justify-between mt-[10px]'>
                          <p className='text-Primary font-normal text-base'>$Tax estimate</p>
                          <p className='text-Primary font-normal text-base'>$0</p>
                        </div>
                    </div>
                    {/* --------Border------ */}
                    <div className='h-[1px] w-full bg-[#E5E7EB] my-[16px]'></div>
                    {/* -----Total---- */}
                    <div className='flex items-center justify-between'>
                        <p className='text-second font-semibold text-base'>Total</p>
                        <p className='text-second font-semibold text-base'>$169.99</p>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default ProductsSelection