import React, { useState } from 'react'
import { Link } from 'react-router'
import ResLogo from "../assets/Images/resLogo.png"
import { RiSearch2Line } from "react-icons/ri";

export const ResNavbar = () => {

    const [Value , SetValue] = useState('true')
    console.log(Value)

  return (
    <>
    
    <nav id='Navbar' className='py-[27px] px-[16px] overflow-hidden lg:hidden'>
      <div id='NavRow' className='flex container items-center justify-between overflow-hidden'>
        {/* ------Logo------ */}
        <Link to={'/'} className='w-[24px] h-[24px]'><img src={ResLogo} alt="Logo" /></Link>
        {/* ------Search Box------ */}
        
        <div className='bg-[#F8F8F8] w-[200px] h-[36px] rounded-full flex items-center gap-[12px] pl-[13px]'>
          <div><RiSearch2Line className='text-Primary text-[14px]'/></div>
          <input type="text" className='w-full h-full text-Primary text-[12px] font-poppins border-none outline-none' placeholder='Search in products...'/>
        </div> 
        {/* ------Nav Menu------ */}
    
        <button className='relative w-[32px] h-[28px] cursor-pointer' onClick={()=>SetValue(!Value)}>
            <span className={`w-[15px] h-[2px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
            <span className={`w-[15px] h-[2px] bg-Primary absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`w-[15px] h-[2px] bg-Primary absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
        </button>
        {/* ------Button Menu------ */}

        <div className={`h-[100%] w-[60%] absolute top-0 bg-Primary p-5 flex justify-center duration-[.3s] rounded-2xl ${Value? 'right-[-100%] ' : 'right-0'}`}>
            <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                <Link to={'/'} className='w-[24px] h-[24px]'><img src={ResLogo} alt="Logo" /></Link>
                <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                    <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                    <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                    <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                </button>
            </div>

            <ul className='flex flex-col items-center gap-3 mt-25'>
                <li><Link className='text-[#F8F8F8]' to={'/'}>Home</Link></li>
                <li><Link className='text-[#F8F8F8]' to={'/'}>About</Link></li>
                <li><Link className='text-[#F8F8F8]' to={'/'}>Shop</Link></li>
                <li><Link className='text-[#F8F8F8]' to={'/'}>Login</Link></li>
            </ul>
        </div>

      </div>
    </nav>
    
    </>
  )
}
