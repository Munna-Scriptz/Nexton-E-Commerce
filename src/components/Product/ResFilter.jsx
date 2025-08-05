import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const ResFilter = () => {
  return (
    <>
        <section className='bg-white w-full h-[100vh] rounded-md p-[12px]'>
            {/* ------------Top Buttons----------- */}
            <div className='flex items-center justify-between mt-1'>
                <button className='text-second text-[20px] cursor-pointer'><FaAngleLeft/></button>
                <p className='text-second text-[16px] font-medium'>Filter</p>
                <button className='text-second text-[16px] font-medium cursor-pointer'>Reset</button>
            </div>
            {/* ------------Category----------- */}
            <div className='flex items-center justify-between mt-10'>
                <p className='text-second text-[16px] font-medium'>Category</p>
                <button className='text-second text-[20px] cursor-pointer'><FaAngleDown/></button>
            </div>
            <div className='mt-7 flex items-center gap-2 flex-wrap'>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Men's <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Women's <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Kid's Toys <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Accessories <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Cosmetics <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Shoes <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">Sports <FaCheck className='opacity-0 checkICon'/></span>
                </label>
            </div>
            {/* <div className='flex items-center justify-center pt-2.5'><span className='w-[100px] h-[5px] rounded-full bg-Primary'></span></div> */}
        </section>
    </>
  )
}

export default ResFilter