import React, { useState } from 'react'
import { IoResize } from "react-icons/io5";
import ProductImg from '../../assets/Images/ProductImage.png'
const CheckoutSummery = () => {

  const [value , setValue] = useState(1)

  if(value < 1){
    setValue(value + 1)
  }
  return (
    <>
      <section id='Checkout-Summery' className='w-[618px]'>
          <div>
            <h2 className='text-2xl font-semibold text-second'>Order summary</h2>
          </div>
          {/* -------Product Details Show--------- */}
          <div className='flex items-center gap-8 py-[24px] border-t-2 border-BorderCol border-b-2 mt-[24px]'>
            <div className='w-[96px]'>
              <img src={ProductImg} alt="Product" />
            </div>

            <div className='flex items-center justify-between w-full'>
              <div>
                <h2 className='font-semibold text-base text-second'>Black Automatic Watch</h2>
                <p className='text-Primary text-sm font-normal flex items-center gap-1 mt-1'><IoResize /> One size</p>
                <div className='flex items-center gap-4 mt-[20px]'>
                  <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>setValue(value - 1)}>-</button>
                  <p className='text-base text-Primary font-medium'>{value}</p>
                  <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>setValue(value + 1)}>+</button>
                </div>
              </div>
              <div className=' text-end'>
                <h2 className='font-semibold text-base text-second'>$169.99</h2>
                <p className='text-Primary text-sm font-normal line-through'>$199.99</p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default CheckoutSummery