import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router';
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";

const ProductsSelection = ({ProductPrice ,ProductRating , ProductStocks , ProductDis}) => {

  const [Value, SetValue] = useState(1)

  if(Value < 1){
    SetValue(Value + 1)
  }else{

  }
  // ---------Show The params in Checkout
  const MyParams = useParams()
  const MyNavigate = useNavigate()
  
  const HandleBuyClick = ()=>{
    MyNavigate(`/Checkout/${MyParams.ProductIdNo}`)
    console.log(MyParams)
  }
  
  return (
    <>
        <div className='lg:w-[460px] w-full h-[463px] lg:p-[33px] p-[0px] lg:border-2 border-[#E5E7EB] mt-[16px] rounded-[16px]'>
                  <div id="Review-Price" className='flex lg:flex-row flex-col-reverse items-start justify-between gap-[24px]'>
                    {/* -----Reviews----- */}
                    <div className='flex items-center gap-[6px]'>
                      <FaStar className='text-[#FBBF24] text-[17px]'/>
                      <p className='text-Primary lg:font-semibold lg:text-base text-[14px] flex items-center gap-[6px]'>{ProductRating} • <Link to={'/'} className='font-normal underline lg:flex hidden'>{ProductStocks} reviews</Link> <span>(98)</span></p>
                    </div>
                    {/* -----Price----- */}
                    <div className='flex flex-col lg:items-end'>
                      <h2 className='lg:text-[24px] text-[20px] font-semibold text-second'>${ProductPrice}</h2>
                      <p className='text-sm text-Primary font-medium line-through' >${ProductDis}</p>
                    </div>
                  </div>
                  {/* --------Size--------- */}
                  <div id="Size" className='mt-[32px]'>
                    <div>
                      <h2 className='text-base font-semibold text-second mb-3'>Size : S</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                      <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">S</button>
                      <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">M</button>
                      <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">L</button>
                      <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">XL</button>
                      <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type="button">2XL</button>
                    </div>
                  </div>
                  {/* --------Quantity Selector--------- */}
                  <div id='Quantity_Cart' className='mt-[32px] flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[12px] flex items-center justify-center text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>SetValue(Value - 1)}><TiMinus /></button>
                      <p className='text-base text-Primary font-medium'>{Value}</p>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[12px] flex items-center justify-center text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>SetValue(Value + 1)}><FaPlus /></button>
                    </div>
                    <Link onClick={()=>HandleBuyClick()} className='lg:w-[178px] w-[147px] lg:h-[52px] h-[45px] bg-second text-white flex items-center  justify-center cursor-pointer gap-[8px] rounded-full hover:scale-[1.04] duration-[.3s] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' ><IoBagHandleOutline />Add to cart</Link>
                  </div>
                  {/* --------Total Amount--------- */}
                  <div id='Total_Amount' className='mt-[32px]'>
                    <div>
                        <div className='flex items-center justify-between'>
                          <p className='text-Primary font-normal text-base'>${ProductPrice} x 1</p>
                          <p className='text-Primary font-normal text-base'>${ProductPrice}</p>
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