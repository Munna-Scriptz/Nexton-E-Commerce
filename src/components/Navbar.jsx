import React, { useState } from 'react'
import { RiSafariLine, RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import Logo from "../assets/Images/logo.png"
import whiteLogo from "../assets/Images/WhiteLogo.png"
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router';
import LoginOrRegis from './LoginOrRegis';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [value , setValue] = useState('true')
  console.log(value)

  return (
    <div>
    <nav id='Navbar' className='py-[27px] hidden lg:block overflow-hidden'>
      <div id='NavRow' className='container flex items-center justify-between'>
        {/* ------Logo------ */}
        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
        {/* <Link to={'/'} className=' opacity-0 absolute dark:visible dark:opacity-100 dark:relative'><img src={whiteLogo} alt="Logo" /></Link> */}
        {/* ------Search Box------ */}
        
        <div className='bg-[#F8F8F8] w-[400px] h-[52px] rounded-full flex items-center gap-[12px] pl-[26px]'>
          <div><RiSearch2Line className='text-Primary text-[20px]'/></div>
          <input type="text" className='w-full h-full text-Primary text-[14px] font-poppins border-none outline-none' placeholder='Search in products...'/>
        </div> 
        
        {/* ------Nav Icons------ */}
        <div>
          <button onClick={()=>(setValue(!value))}><RiUserLine className='text-[24px] text-Primary mr-[22px] cursor-pointer'/></button>
          <button className='relative cursor-pointer'>
            <RiShoppingCart2Line className='text-[24px] text-Primary'/>
            <div className='absolute right-[-7px] top-[-7px] bg-[#0EA5E9] h-[20px] w-[20px] flex items-center justify-center rounded-full text-[#fff] text-[12px]'>3</div>
          </button>
        </div>

      </div>
    </nav>

    {/* -----Account----- */}
    <section className={`w-full h-full backdrop-blur-md bg-[#00000063] z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-[.3s] flex items-center justify-center gap-7 ${value? 'hidden opacity-0 duration-75' : 'block opacity-100'}`}>
      <LoginOrRegis/>
      <button onClick={()=>(setValue(!value))} className='HidePage'>
          <RxCross2 className='text-white text-[25px] ml-[10px]'/>
          <div className="text">Skip For Now</div>
      </button>
    </section>
    </div>
  )
}

export default Navbar