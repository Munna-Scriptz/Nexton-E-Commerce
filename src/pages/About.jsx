import React from 'react'
import AboutImg1 from '../assets/Images/AboutImg1.png'
import AboutImg2 from '../assets/Images/AboutImg2.png'

const About = () => {
  return (
    <>
        <section id='About' className='container mt-[40px] lg:px-0 px-[24px]'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                {/* -------Left side  */}
                <div className='lg:w-[643px] w-full'>
                    <div>
                        <h2 className='lg:text-[36px] text-2xl font-semibold text-second'>About us</h2>
                        <p className='text-Primary lg:text-base text-[14px] font-medium mt-3'>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
                    </div>
                    <div className='mt-[64px]'>
                        <img src={AboutImg1} alt="Image" />
                    </div>
                </div>
                {/* -------Right side  */}
                <div className='lg:w-[553px] w-full'>
                    <h2 className='lg:text-[36px] mt-[32px] lg:mt-0 text-[20px] font-semibold text-second'>Provide fashionable and qualifed products</h2>
                    <p className='text-Primary lg:text-base text-[14px] font-medium mt-3'>Already millions of people are very satisfied by thi. s page builder and the number is growing more and more. Technolog developing, requirements are increasing. Riode has brought.</p>
                </div>
            </div>
            <div className='flex items-center flex-col-reverse lg:flex-row justify-between mt-[72px]'>
                {/* -------left side  */}
                <div className='lg:w-[553px] w-full lg:mt-0 mt-[32px]'>
                    <h2 className='lg:text-[36px] text-2xl font-semibold text-second'>Provide fashionable and qualifed products</h2>
                    <p className='text-Primary lg:text-base text-[14px] font-medium mt-3'>Already millions of people are very satisfied by thi. s page builder and the number is growing more and more. Technolog developing, requirements are increasing. Riode has brought.</p>
                </div>
                {/* -------right side  */}
                <div className='lg:w-[643px] w-full'>
                    <div className='mt-[64px]'>
                        <img src={AboutImg2} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About