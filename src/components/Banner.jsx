import React from 'react'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BannerImg from "../assets/Images/banner.png"
import BannerImg2 from "../assets/Images/Banner2.png"

const Banner = () => {
  // -----Slider Fun----
 const settings = {
    className: "slider-container",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    pauseOnHover: true
  }

  return (
    <>
      <div id='BannerSlider' className="slider-container overflow-hidden">
        <Slider {...settings} >
          <section className='w-full h-[550px] lg:h-[600px]' >
            <div className='bg-left lg:bg-center' style={{backgroundImage:`url(${BannerImg})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="container">
                <div id="Banner_Text" className='lg:py-[148px] pt-[163px] pb-[199px] pl-[24px] lg:pl-0'>
                    <h2 className='font-medium text-[14px] lg:text-[20px] text-Primary'>Starting from: $49.99</h2>
                    <h1 className='font-semibold text-[30px] lg:text-[64px] leading-[38px] lg:leading-[72px] w-[312px] lg:w-[632px] text-[#111827] mb-[24px] mt-[18px]'>Exclusive collection for everyone</h1>
                    <Link className='text-white py-[12px] px-[24px] lg:py-[20px] lg:px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5' to={'/'}>Explore now <CiSearch className='text-[20px]'/></Link>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full h-[550px] lg:h-[600px]' >
            <div style={{backgroundImage:`url(${BannerImg2})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}}>
              <div className="container">
                <div id="Banner_Text" className='lg:py-[148px] pt-[163px] pb-[199px] pl-[24px] lg:pl-0'>
                    <h2 className='font-medium text-[14px] lg:text-[20px] text-Primary'>100% Original Products</h2>
                    <h1 className='font-semibold text-[30px] lg:text-[64px] leading-[38px] lg:leading-[72px] w-[312px] lg:w-[632px] text-[#111827] mb-[24px] mt-[18px]'>The All New Fashion Collection</h1>
                    <Link className='text-white py-[12px] px-[24px] lg:py-[20px] lg:px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5' to={'/'}>Explore now <CiSearch className='text-[20px]'/></Link>
                </div>
              </div>
            </div>
          </section>

        </Slider>
      </div>

    </>
  )
}

export default Banner