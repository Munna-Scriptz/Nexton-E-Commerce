import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router';
import { MdDeleteOutline } from "react-icons/md";

export const AddToCart = ({Cross, AllProduct , TotalCredit , DeleteCart}) => {

  return (
    <>
        <section id='Add-To-Cart' className='h-full bg-[#f8f8f8] w-[550px] p-5 border-l-2 z-10'>
            {/* ------Add to Cart Header */}
            <div className='flex items-center justify-between mb-10'>
                <h2 className='font-medium text-[20px] text-second flex items-center gap-4'>Add To Cart <RiShoppingCart2Line className='text-[24px] text-Primary'/>
                </h2>
                <div className='cursor-pointer'>{Cross}</div>
            </div>
            {/* ------Add items */}
            <div className='h-[72%] overflow-y-scroll'>
                {
                    AllProduct?.map((items)=>(
                        <div key={items.id} className='flex items-center gap-5'>
                            <div onClick={()=>{DeleteCart(items.id)}} className='w-[30px]'>
                                <MdDeleteOutline className='text-3xl cursor-pointer'/>
                            </div>
                            <div className='flex items-center justify-between w-full mb-5'>
                                <div className='flex items-center gap-5'>
                                    <div className='w-[50px] h-[50px] rounded-[10px]'><img src={items?.thumbnail} alt="Product Image" /></div>
                                    <div>
                                        <h2 className='text-second font-medium text-[16px] w-45 truncate'>{items?.title}</h2>
                                        <p className='text-Primary font-normal text-sm'>{items?.category}</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-second font-medium text-base'>${items?.price}</h2>
                                    <p className='text-Primary font-normal text-sm line-through text-end'>${items?.discountPercentage}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* ------Buy items */}
            <div className='mt-7'>
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='text-second font-medium text-[18px]'>Total Money</h2>
                    <h2 className='text-second font-medium text-[18px]'>${TotalCredit}</h2>
                </div>
                <div>
                    <Link to={'/'} className='inline-block py-2 w-full bg-second text-white text-center rounded-[10px]'>Buy items</Link>
                </div>
            </div>
        </section>

    </>
  )
}
