import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ResLogo from "../assets/Images/resLogo.png"
import { RiSearch2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineGroup } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { AddToCart } from './AddToCart';
import axios from 'axios';
import { RxCross2 } from "react-icons/rx";
import { TbArrowsJoin } from "react-icons/tb";


export const ResNavbar = () => {
    const [Value , SetValue] = useState(true)
    const [showCart , SetShowCart] = useState(true)
  // -----------Cart 
  // ------------Local Store And Add to Card------------------
    const [product , setProduct] = useState([])
    const ProductID = JSON.parse(localStorage.getItem('product'))
    // --------Map Product 
    const mappedProduct = product.filter((item)=>{
       return ProductID?.includes(item.id)
    })
    // --------APi In Cart 
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${mappedProduct}`)
        .then((res)=>{setProduct(res.data.products)})
        .catch((err)=>{console.log(err)})
    }, [])

    // ----------Total Amount
   const Total = mappedProduct.reduce((sum , no)=>{
      return sum + no.price
    }, 0)
    // ----------Delete Cart

    const HandleDelete = (DelItems)=> {
      const storedProducts = JSON.parse(localStorage.getItem('product')) || [];
      const updatedProducts = storedProducts.filter(id => id !== DelItems);
      localStorage.setItem('product', JSON.stringify(updatedProducts));
      setProduct(prev => prev.filter(p => p.id !== DelItems));
    }
  return (
    <>
    
    <nav id='Navbar' className='py-[27px] px-[16px] lg:hidden relative'>
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


        <div className={`h-screen w-[60%] absolute top-0 bg-Primary p-5 flex justify-center duration-[.8s] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-15px]'}`}>
            <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                <Link to={'/'} className='w-[24px] h-[24px]'><img src={ResLogo} alt="Logo" /></Link>
                <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                    <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                    <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                    <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                </button>
            </div>

            <ul className='flex flex-col items-start gap-5 text-md mt-25'>
                <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/'}><IoHomeOutline/> Home</Link></li>
                <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/Products'}><LuShoppingBag/> Shop</Link></li>
                <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/About'}><MdOutlineGroup/> About</Link></li>
                <li><button onClick={()=>{SetValue(!Value) , SetShowCart(!showCart)}} className='text-[#F8F8F8] flex items-center gap-2'><RiShoppingCart2Line/>Cart</button></li>
                <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/Login'}><RiUserLine/> Login</Link></li>
                <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] flex items-center gap-2' to={'/Register'}><TbArrowsJoin/> Register</Link></li>
            </ul>
        </div>
      </div>
      
      {/* -----Add To Cart----- */}
        <section className={`fixed top-0 z-50 h-full w-full right-0 flex justify-end duration-[.8s] ${showCart? 'translate-x-[-740px] ' : ' translate-x-[-2px]'}` }>
          <div onClick={()=>SetShowCart(!showCart)} className='fixed top-0 left-0 z-0 h-full w-full backdrop-blur-md bg-[#00000063]'></div>
          <AddToCart CartItem={mappedProduct.length} DeleteCart={(e)=>HandleDelete(e)} TotalCredit={Total} AllProduct={mappedProduct} Cross={<RxCross2 onClick={()=>SetShowCart(!showCart)} className='text-3xl'/>}/>
        </section>
    </nav>
    
    </>
  )
}
