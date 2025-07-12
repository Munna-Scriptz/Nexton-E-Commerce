import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router';

export const AddToCart = () => {
  return (
    <>
        <section id='Add-To-Cart' className='h-full bg-[#f8f8f8] w-[500px] p-5 border-l-2'>
            {/* ------Add to Cart Header */}
            <div className='flex items-center justify-between mb-10'>
                <h2 className='font-medium text-[20px] text-second flex items-center gap-4'>Add To Cart <RiShoppingCart2Line className='text-[24px] text-Primary'/>
                </h2>
                <div className='cursor-pointer'><RxCross2 className='text-3xl'/></div>
            </div>
            {/* ------Add items */}
            <div className='h-120 overflow-y-scroll'>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[60px] h-[60px] bg-Primary rounded-[10px]'></div>
                        <div>
                            <h2 className='text-second font-medium text-[18px]'>Product Name</h2>
                            <p className='text-Primary font-normal text-base'>Product Details</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-second font-medium text-[18px]'>$50</h2>
                        <p className='text-Primary font-normal text-base line-through'>69$</p>
                    </div>
                </div>
            </div>

            {/* ------Buy items */}
            <div className='mt-7'>
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='text-second font-medium text-[18px]'>Total Money</h2>
                    <h2 className='text-second font-medium text-[18px]'>$424</h2>
                </div>
                <div>
                    <Link to={'/'} className='inline-block py-2 w-full bg-second text-white text-center rounded-[10px]'>Buy items</Link>
                </div>
            </div>
        </section>
    </>
  )
}
