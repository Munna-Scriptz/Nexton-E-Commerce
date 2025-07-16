import React from 'react'
import SingleProducts from '../components/common/SingleProducts'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import axios from 'axios';

const ProductPage = () => {
    axios.get('https://dummyjson.com/products')

    
  return (
    <>
        <section className='mt-[40px]'>
            <div className="container">
                <div id="Mother_Div" className='flex justify-between gap-5'>
                    {/* -----Left Side  */}
                    <div id="Left_Side" className='w-[285px]'>
                        {/* categories */}
                        <div className=' border-b-1 border-[#E5E7EB] pb-[40px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Categories</h2>
                            <div  className='flex items-center gap-3'>
                                <input type="checkbox" className='w-5 h-5' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Men’s fashion</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check1'/>
                                <label for='check1' className='text-Primary text-sm'>Women’s fashion</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check2'/>
                                <label for='check2' className='text-Primary text-sm'>Kids & Toys</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check3'/>
                                <label for='check3' className='text-Primary text-sm'>Accessories</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check4'/>
                                <label for='check4' className='text-Primary text-sm'>Cosmetics</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check5'/>
                                <label for='check5' className='text-Primary text-sm'>Shoes</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check6'/>
                                <label for='check6' className='text-Primary text-sm'>Sports</label>
                            </div>
                        </div>
                        {/* Range */}
                        <div className=' border-b-1 border-[#E5E7EB] pb-[40px] mt-[32px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Price range</h2>
                            <div  className='flex flex-col gap-3'>
                                <input type="range" className='PrinceRange w-full' id='check'/>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='text-Primary font-normal text-base mb-1'>Min price</p>
                                        <div className='flex items-center justify-between w-[130px] py-2 px-[16px] border-1 border-[#E5E7EB] rounded-full'>
                                            <input type="number" className='placeholder:text-Primary w-full h-full border-none outline-none text-Primary font-medium text-sm' placeholder='100'/>
                                            <p className='text-Primary font-medium text-sm'>$</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-Primary font-normal text-base mb-1'>Max price</p>
                                        <div className='flex items-center justify-between w-[130px] py-2 px-[16px] border-1 border-[#E5E7EB] rounded-full'>
                                            <input type="number" className='placeholder:text-Primary w-full h-full border-none outline-none font-medium text-sm' placeholder='500'/>
                                            <p className='text-Primary font-medium text-sm'>$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sort Order */}
                        <div className=' mt-[32px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Sort order</h2>
                            <div  className='flex items-center gap-3'>
                                <input type="radio" className='w-5 h-5 rounded-full' id='radio1'/>
                                <label for='radio1' className='text-Primary text-sm'>Most Popular</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2outline-none border-[#94A3B8]' id='radio2'/>
                                <label for='radio2' className='text-Primary text-sm'>Best Rating</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2 outline-none border-[#94A3B8]' id='radio3'/>
                                <label for='radio3' className='text-Primary text-sm'>Most Popular</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2outline-none border-[#94A3B8]'id='radio4'/>
                                <label for='radio4' className='text-Primary text-sm'>Price Low - Hight</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2outline-none border-[#94A3B8]' id='radio5'/>
                                <label for='radio5' className='text-Primary text-sm'>Price Hight - Low</label>
                            </div>
                        </div>
                    </div>
                    {/* -----Left Side  */}
                    <div id="Right_Side" className='flex flex-col items-end'>
                        <div className='flex flex-wrap justify-center gap-y-[52px] gap-x-5'>
                            <SingleProducts ShowMoreButton={'hidden'}/>
                            <SingleProducts ShowMoreButton={'hidden'}/>
                            <SingleProducts ShowMoreButton={'hidden'}/>
                            <SingleProducts ShowMoreButton={'hidden'}/>
                            <SingleProducts ShowMoreButton={'hidden'}/>
                            <SingleProducts ShowMoreButton={'hidden'}/>
                        </div>
                        {/* -----Buttons  */}
                        <div className='flex items-center gap-1 mt-[52px]'>
                            <button className='h-[36px] w-[36px] text-Primary text-base rounded-[12px] cursor-pointer flex items-center justify-center'><FaAngleLeft/></button>
                            <button className='h-[36px] w-[36px] text-Primary text-base bg-[#E5E7EB] rounded-[12px] cursor-pointer'>1</button>
                            <button className='h-[36px] w-[36px] text-Primary text-base rounded-[12px] cursor-pointer'>2</button>
                            <button className='h-[36px] w-[36px] text-Primary text-base rounded-[12px] cursor-pointer'>3</button>
                            <button className='h-[36px] w-[36px] text-Primary text-base rounded-[12px] cursor-pointer'>4</button>
                            <button className='h-[36px] w-[36px] text-Primary text-base rounded-[12px] cursor-pointer flex items-center justify-center'><FaAngleRight/></button>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage