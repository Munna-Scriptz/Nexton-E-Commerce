import React, { useEffect, useState } from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import Logo from "../assets/Images/logo.png"
import whiteLogo from "../assets/Images/WhiteLogo.png"
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router';
import LoginOrRegis from './Home/LoginOrRegis';
import { RxCross2 } from "react-icons/rx";
import { AddToCart } from './AddToCart';
import axios from 'axios';

const Navbar = () => {
  const [value , setValue] = useState(true)
  const [cart , setCart] = useState(true)
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
    const [Del , SetDel] = useState('')
    const HandleDelete = (DelItems)=> {
      SetDel(DelItems)
      localStorage.removeItem('product' , Del)
    }
    
console.log(Del)
  return (
    <div>
      <nav id='Navbar' className='py-[27px] hidden lg:block overflow-hidden border-b-2 border-[#E5E7EB]'>
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
            <button onClick={()=>setCart(!cart)} className='relative cursor-pointer'>
              <RiShoppingCart2Line className='text-[24px] text-Primary'/>
              <div className='absolute right-[-7px] top-[-7px] bg-[#0EA5E9] h-[20px] w-[20px] flex items-center justify-center rounded-full text-[#fff] text-[12px]'>{mappedProduct.length}</div>
            </button>
          </div>

        </div>
      </nav>

      {/* -----Account----- */}
      <section className={`w-full h-full backdrop-blur-md bg-[#00000063] z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-[.3s] flex items-center justify-center gap-7 ${value? 'hidden opacity-0 duration-75' : 'block opacity-100'}`}>
        <LoginOrRegis HideByLink={()=>(setValue(!value))}/>
        <button onClick={()=>(setValue(!value))} className='HidePage'>
            <RxCross2 className='text-white text-[25px] ml-[10px]'/>
            <div className="text">Skip For Now</div>
        </button>
      </section>

      {/* -----Add To Cart----- */}
        <section className={`fixed top-0 z-50 h-full w-full duration-[.3s] right-0 flex justify-end ${cart? 'hidden' : 'visible'}` }>
          <div onClick={()=>setCart(!cart)} className='fixed top-0 left-0 z-0 h-full w-full backdrop-blur-md bg-[#00000063]'></div>
          <AddToCart DeleteCart={HandleDelete} TotalCredit={Total} AllProduct={mappedProduct} Cross={<RxCross2 onClick={()=>setCart(!cart)} className='text-3xl'/>}/>
        </section>
    </div>
  )

}


export default Navbar