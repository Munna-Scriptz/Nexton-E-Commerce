import React, { useEffect, useState } from 'react'
import ProductImg from "../../assets/Images/ProductImage.png"
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdReadMore } from "react-icons/md";
import { Link } from 'react-router';


const SingleProducts = ({proImg ,proName , proPrice , ProCat , proDis , proRate , ProStock}) => {

    
  return (
    <section className='w-[312px] lg:w-[309px] mt-[40px]'>
        {/* ------Product Image  */}
        <div className=' relative'>
            <img src={proImg} alt="Product Image" className='h-[347px]'/>
            <button className='ShopButton absolute right-0 top-0 pt-[22px] pr-[22px] cursor-pointer duration-[.3s] hover:scale-[1.2]'><IoBagHandleOutline className='text-[18px] text-Primary'/><span className="tooltip font-poppins text-white">SHOP</span></button>
        </div>

        {/* ------Product Details  */}
        <div id='Product_Text' className='flex items-start justify-between mt-[20px]'>
            <div>
                <h2 className='text-second font-semibold text-base leading-[24px] '>{proName}</h2>
                <p className='text-Primary font-normal text-sm leading-[20px]'>{ProCat}</p>
                <div className='flex items-center gap-[5px] mt-[15px]'>
                    <FaStar className='text-[#FBBF24]'/>
                    <p className='text-Primary font-normal text-sm'>{proRate} ({ProStock})</p>
                </div>
                {/* ---See more button  */}
            <div className='mt-4'>
              <Link className='text-white text-sm py-[12px] px-[24px] lg:py-[10px] lg:px-[22px] bg-second rounded-full flex items-center w-fit gap-1.5 duration-[.3s] hover:scale-[1.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' to={'/'}>Explore now <MdReadMore className=' text-2xl'/></Link>
            </div>
            </div>
            <div>
                <h2 className='text-second font-semibold text-base leading-[24px]'>${proPrice}</h2>
                <p className='text-Primary font-normal text-sm line-through leading-[20px]'>${proDis}</p>
            </div>
        </div>

    </section>
  )
}

export default SingleProducts