import React from 'react'
import CheckoutInfo from '../components/Checkout/CheckoutInfo'
import BreadCrumb from '../components/common/BreadCrumb'
import CheckoutSummery from '../components/Checkout/CheckoutSummery'

const Checkout = () => {
  return (
    <>
        <section id='Checkout' className='container mt-[40px]'>
            <div>
                <h2 className='text-4xl font-semibold text-second mb-4'>Checkout</h2>
                <BreadCrumb CrumbName={'Checkout'} CrumbPath={'/Checkout'}/>
            </div>
            <div className='flex justify-between items-start mt-[52px]'>
                <CheckoutInfo/>
                <CheckoutSummery/>
            </div>
        </section>
    </>
  )
}

export default Checkout