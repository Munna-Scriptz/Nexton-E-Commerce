import React from 'react'
import { FaCheck } from "react-icons/fa6";

const CheckBoxButton = ({Text}) => {
  return (
    <label className='w-fit'>
        <input type="checkbox" className="checkbox-btn" id="myCheckbox"/>
        <span className="custom-btn text-second text-[14px] font-medium cursor-pointer py-[6px] px-[14px] border-1 border-BorderCol rounded-full flex items-center gap-[7px]">{Text} <FaCheck className='opacity-0 checkICon'/></span>
    </label>
  )
}

export default CheckBoxButton