import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiShoppingCart2Line } from "react-icons/ri";

export const AddToCart = () => {
  return (
    <>
        <section id='Add-To-Cart' className='h-full bg-[#f8f8f8] w-[500px] p-5 border-l-2'>
            {/* ------Add to Cart Header */}
            <div className='flex items-center justify-between'>
                <h2 className='font-medium text-[20px] text-second flex items-center gap-4'>Add To Cart <RiShoppingCart2Line className='text-[24px] text-Primary'/>
                </h2>
                <div className='cursor-pointer'><RxCross2 className='text-3xl'/></div>
            </div>
            {/* ------Add items */}

        </section>
    </>
  )
}
