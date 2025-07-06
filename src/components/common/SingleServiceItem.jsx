import React from 'react'

export const SingleServiceItem = ({ServiceIcon , ServiceH2 , ServiceP}) => {
  return (
    <>
        <section className='flex items-center gap-[16px]'>
            <div>
                {ServiceIcon}
            </div>
            <div>
                <h2 className='text-second text-[18px] font-semibold mb-[3px]'>{ServiceH2}</h2>
                <p className='text-Primary text-sm'>{ServiceP}</p>
            </div>
        </section>
    </>
  )
}
