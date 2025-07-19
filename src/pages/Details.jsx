import React, { useState } from 'react'
import ReviewProductSlider from '../components/ReviewProductSlider'
import ProductsSelection from '../components/ProductsSelection';


const Details = () => {

  return (
    <>
        <section id='DetailsPage' className='mt-[40px]'>
            <div className="container">
              <div className="Details_Div flex items-start justify-between">
                {/* -------Left Side-------- */}
                <ReviewProductSlider/> 
                {/* -------Right Side-------- */}
                <ProductsSelection/>
              </div>
            </div>
        </section>
    </>
  )
}

export default Details