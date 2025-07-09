import React from 'react'
import ProductImg from "../../assets/Images/ProductImage.png"
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";


const SingleProducts = () => {
  return (
    <section className='w-[312px] lg:w-[309px] mt-[40px]'>
        {/* ------Product Image  */}
        <div className=' relative'>
            <img src={ProductImg} alt="Product Image" />
            <button className='ShopButton absolute right-0 top-0 pt-[22px] pr-[22px] cursor-pointer duration-[.3s] hover:scale-[1.2]'><IoBagHandleOutline className='text-[18px] text-Primary'/><span className="tooltip font-poppins text-second">Shop</span></button>
        </div>

        {/* ------Product Details  */}
        <div id='Product_Text' className='flex items-start justify-between mt-[20px]'>
            <div>
                <h2 className='text-second font-semibold text-base leading-[24px]'>Black Automatic Watch</h2>
                <p className='text-Primary font-normal text-sm leading-[20px]'>Accessories</p>
                <div className='flex items-center gap-[5px] mt-[15px]'>
                    <FaStar className='text-[#FBBF24]'/>
                    <p className='text-Primary font-normal text-sm'>4.9 (98)</p>
                </div>
            </div>
            <div>
                <h2 className='text-second font-semibold text-base leading-[24px]'>$169.99</h2>
                <p className='text-Primary font-normal text-sm line-through leading-[20px]'>$199.99</p>
            </div>
        </div>

    </section>
  )
}

export default SingleProducts