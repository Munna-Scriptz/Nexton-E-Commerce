import React from 'react'
import { Link } from 'react-router'

const LoginOrRegis = () => {
  return (
    <section className='flex items-center justify-center'>
        <div className='w-[600px] h-[500px] bg-[#f2f2f2] overflow-hidden relative z-[999] p-5 rounded-[7px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
            <div className=' bg-second w-[315px] h-[800px] rotate-[38deg] absolute top-[-183px] left-[-136px] z-[-1]'></div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-white font-medium text-[32px] mb-5'>Welcome!</h2>
                    <p className='text-white text-[17px] mb-7 w-[260px]'>Create your account For Free. if you are new!</p>
                    <Link className='text-white py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' to={'/'}>Sign Up</Link>
                </div>

                <div className='flex items-end flex-col'>
                    <h2 className='text-second font-medium text-[32px] mb-5 text-end'>Welcome <br /> Back!</h2>
                    <p className=' text-Primary text-[17px] mb-7 w-[290px] text-end'>Login if you already have account. And Unlock New Journey</p>
                    <Link className='text-second py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' to={'/'}>Sign Up</Link>
                    
                    <div>
                    <Link className='text-second py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' to={'/'}>Sign Up</Link>
                    <Link className='text-second py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' to={'/'}>Sign Up</Link>
                    <Link className='text-second py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' to={'/'}>Sign Up</Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default LoginOrRegis