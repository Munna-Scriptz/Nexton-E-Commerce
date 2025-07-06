import React from 'react'

export const SingleServiceItem = ({ServiceIcon , ServiceH2 , ServiceP}) => {
  return (
    <>
        <section className='flex items-center gap-[16px]'>
            <div className='text-[16px] text-[#4B5563] lg:text-second lg:text-[24px]'>
                {ServiceIcon}
            </div>
            <div>
                <h2 className='lg:text-second text-Primary text-sm lg:text-[18px] font-semibold mb-[3px]'>{ServiceH2}</h2>
                <p className='text-Primary lg:block hidden text-sm'>{ServiceP}</p>
            </div>
        </section>
    </>
  )
}
