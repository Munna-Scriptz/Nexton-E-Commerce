import React from 'react'
import { SingleServiceItem } from './common/SingleServiceItem'
import { BsTruck } from "react-icons/bs";
import { RiExchange2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { RiRefund2Fill } from "react-icons/ri";

const Service = () => {
  return (
    <>

    <section id='Service_Items' className='mt-[52px]'>
        <div className="container">
            <div id="itemsRow" className=' border-[1px] border-[#E5E7EB] py-[24px] px-[40px] rounded-[16px] flex items-center justify-between'>
                <SingleServiceItem ServiceIcon={<BsTruck  className='text-[24px]'/>} ServiceH2={'Free shipping'} ServiceP={'On orders over $50.00'}/>
                <span className='border-[#E5E7EB] border-[1px] h-[50px] w-[1px]'></span>
                <SingleServiceItem ServiceIcon={<RiExchange2Line  className='text-[24px]'/>} ServiceH2={'Very easy to return'} ServiceP={'Just phone number'}/>
                <span className='border-[#E5E7EB] border-[1px] h-[50px] w-[1px]'></span>
                <SingleServiceItem ServiceIcon={<TfiWorld className='text-[24px]'/>} ServiceH2={'Worldwide delivery'} ServiceP={'Fast delivery worldwide'}/>
                <span className='border-[#E5E7EB] border-[1px] h-[50px] w-[1px]'></span>
                <SingleServiceItem ServiceIcon={<RiRefund2Fill className='text-[24px]'/>} ServiceH2={'Refunds policy'} ServiceP={'60 days return for any reason'}/>
            </div>
        </div>
    </section>

    </>
  )
}

export default Service