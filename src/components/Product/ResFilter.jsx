import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import CheckBoxButton from '../common/CheckBoxButton';
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
                <CheckBoxButton Text={`Men's`}/>
                <CheckBoxButton Text={`Women's`}/>
                <CheckBoxButton Text={`Kids & Toys`}/>
                <CheckBoxButton Text={`Accessories`}/>
                <CheckBoxButton Text={`Cosmetics`}/>
                <CheckBoxButton Text={`Shoes`}/>
                <CheckBoxButton Text={`Sports`}/>
            </div>
            {/* ------------Color----------- */}
            <div className='flex items-center justify-between mt-10'>
                <p className='text-second text-[16px] font-medium'>Color</p>
                <button className='text-second text-[20px] cursor-pointer'><FaAngleDown/></button>
            </div>
            <div id='ScrollButtons' className='mt-7 flex items-center gap-2 overflow-x-scroll'>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-Primary border-1 border-BorderCol rounded-full'></span> Grey <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-black border-1 border-BorderCol rounded-full'></span> Black <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-[#dbdbdb] border-1 border-BorderCol rounded-full'></span> White <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-teal-500 border-1 border-BorderCol rounded-full'></span> Teal <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-green-700 border-1 border-BorderCol rounded-full'></span> Green <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-orange-500 border-1 border-BorderCol rounded-full'></span> Orange <FaCheck className='opacity-0 checkICon'/></span>
                </label>
                <label className='w-fit'>
                    <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
                    <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]"><span className='w-[20px] h-[20px] bg-blue-700 border-1 border-BorderCol rounded-full'></span> Blue <FaCheck className='opacity-0 checkICon'/></span>
                </label>
            </div>
            {/* <div className='flex items-center justify-center pt-2.5'><span className='w-[100px] h-[5px] rounded-full bg-Primary'></span></div> */}
        </section>
    </>
  )
}

export default ResFilter