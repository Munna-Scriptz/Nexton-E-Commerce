import React, { useEffect, useState } from 'react'
import CheckoutInfo from '../components/Checkout/CheckoutInfo'
import BreadCrumb from '../components/common/BreadCrumb'
import CheckoutSummery from '../components/Checkout/CheckoutSummery'
import axios from 'axios'
import { useParams } from 'react-router'

const Checkout = () => {

  return (
    <>
        <section id='Checkout' className='container mt-[40px]'>
            <div className='px-6 lg:px0'>
                <h2 className='text-4xl font-semibold text-second mb-4'>Checkout</h2>
                <BreadCrumb CrumbName={'Checkout'} CrumbPath={'/Checkout'}/>
            </div>
            <div className='flex justify-between flex-col-reverse lg:flex-row items-start mt-[52px]'>
                <CheckoutSummery HideAllInLG={`lg:hidden`} HideInSmTop={`hidden lg:hidden`}/> 
                <CheckoutInfo/>
                <CheckoutSummery HideInSmBottom={`hidden lg:block`}/> 
            </div>
        </section>
    </>
  )
}

export default Checkout