import React from 'react'
import { SingleServiceItem } from '../common/SingleServiceItem'
import { BsTruck } from "react-icons/bs";
import { RiExchange2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { RiRefund2Fill } from "react-icons/ri";

const Service = () => {
  return (
    <>

    <section id='Service_Items' className='pt-[52px] pl-[24px]'>
        <div className="container">
            <h2 className='text-[16px] font-semibold visible lg:hidden'>Nexton® always with you</h2>
            <div id="itemsRow" className=' lg:border-[1px] border-[#E5E7EB] py-[24px] lg:px-[40px] rounded-[16px] flex lg:items-center justify-between flex-wrap gap-5'>
                <SingleServiceItem ServiceIcon={<BsTruck  className='text-[24px]'/>} ServiceH2={'Free shipping'} ServiceP={'On orders over $50.00'}/>
                <span className='border-[#E5E7EB] lg:border-[1px] lg:h-[50px] w-[1px]'></span>
                <SingleServiceItem ServiceIcon={<RiExchange2Line  className='text-[24px]'/>} ServiceH2={'Very easy to return'} ServiceP={'Just phone number'}/>
                <span className='border-[#E5E7EB] lg:border-[1px] lg:h-[50px] w-[1px]'></span>
                <SingleServiceItem ServiceIcon={<TfiWorld className='text-[24px]'/>} ServiceH2={'Worldwide delivery'} ServiceP={'Fast delivery worldwide'}/>
                <span className='border-[#E5E7EB] lg:border-[1px] lg:h-[50px] w-[1px]'></span>
                <SingleServiceItem ServiceIcon={<RiRefund2Fill className='text-[24px]'/>} ServiceH2={'Refunds policy'} ServiceP={'60 days return for any reason'}/>
            </div>
        </div>
    </section>

    </>
  )
}

export default Service