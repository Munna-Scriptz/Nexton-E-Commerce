import React from 'react'
import { Link } from 'react-router'
import ResLogo from "../assets/Images/resLogo.png"
import { RiSearch2Line } from "react-icons/ri";

export const ResNavbar = () => {
  return (
    <>
    
    <nav id='Navbar' className='container py-[27px] px-[16px]'>
      <div id='NavRow' className='flex items-center justify-between'>
        {/* ------Logo------ */}
        <Link to={'/'} className='w-[24px] h-[24px]'><img src={ResLogo} alt="Logo" /></Link>
        {/* ------Search Box------ */}
        
        <div className='bg-[#F8F8F8] w-[200px] h-[36px] rounded-full flex items-center gap-[12px] pl-[26px]'>
          <div><RiSearch2Line className='text-Primary text-[14px]'/></div>
          <input type="text" className='w-full h-full text-Primary text-[12px] font-poppins border-none outline-none' placeholder='Search in products...'/>
        </div> 
        {/* ------Nav Icons------ */}
    
        <div>
            hello
        </div>

      </div>
    </nav>
    
    </>
  )
}
