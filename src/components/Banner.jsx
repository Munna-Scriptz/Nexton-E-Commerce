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
      <div className="slider-container">
        <Slider {...settings} >
          <section className='w-full h-[600px]' >
            <div style={{backgroundImage:`url(${BannerImg})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}}>
              <div className="container">
                <div id="Banner_Text" className='py-[148px]'>
                    <h2 className='font-medium text-[20px] text-Primary'>Starting from: $49.99</h2>
                    <h1 className='font-semibold text-[64px] leading-[72px] w-[632px] text-[#111827] mb-[24px] mt-[18px]'>Exclusive collection for everyone</h1>
                    <Link className='text-white py-[20px] px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5' to={'/'}>Explore now <CiSearch className='text-[20px]'/></Link>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full h-[600px]' >
            <div style={{backgroundImage:`url(${BannerImg2})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}}>
              <div className="container">
                <div id="Banner_Text" className='py-[148px]'>
                    <h2 className='font-medium text-[20px] text-Primary'>100% Original Products</h2>
                    <h1 className='font-semibold text-[64px] leading-[72px] w-[632px] text-[#111827] mb-[24px] mt-[18px]'>The All New Fashion Collection</h1>
                    <Link className='text-white py-[20px] px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5' to={'/'}>Explore now <CiSearch className='text-[20px]'/></Link>
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