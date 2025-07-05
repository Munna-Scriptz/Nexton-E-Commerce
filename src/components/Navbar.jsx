import React from 'react'
import { RiSafariLine, RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import Logo from "../assets/Images/logo.png"
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <>

    <nav id='Navbar' className='py-[27px] hidden lg:block dark:bg'>
      <div id='NavRow' className='container flex items-center justify-between'>
        {/* ------Logo------ */}
        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
        {/* ------Search Box------ */}
        
        <div className='bg-[#F8F8F8] w-[400px] h-[52px] rounded-full flex items-center gap-[12px] pl-[26px]'>
          <div><RiSearch2Line className='text-Primary text-[20px]'/></div>
          <input type="text" className='w-full h-full text-Primary text-[14px] font-poppins border-none outline-none' placeholder='Search in products...'/>
        </div> 
        {/* ------Nav Icons------ */}
    
        <div>
          <button><RiUserLine className='text-[24px] text-Primary mr-[22px]'/></button>
          <button className='relative'>
            <RiShoppingCart2Line className='text-[24px] text-Primary'/>
            <div className='absolute right-[-7px] top-[-7px] bg-[#0EA5E9] h-[20px] w-[20px] flex items-center justify-center rounded-full text-[#fff] text-[12px]'>3</div>
          </button>
        </div>

      </div>
    </nav>

    </>
  )
}

export default Navbar