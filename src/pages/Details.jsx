import React from 'react'
import ReviewProductDetails from '../components/ReviewProductDetails'

const Details = () => {
  return (
    <>
        <section id='DetailsPage' className='mt-[40px]'>
            <div className="container">
              <div className="Details_Div flex items-start justify-between">
                {/* -------Left Side-------- */}
                <ReviewProductDetails/> 
                {/* -------Right Side-------- */}
                <div className='w-[460px] h-[463px] p-[33px] border-2 border-[#0b54e6] mt-[16px]'>

                </div>

              </div>
            </div>
        </section>
    </>
  )
}

export default Details