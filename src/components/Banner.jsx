import React from 'react'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Banner = () => {
  // -----Slider Fun----
 const settings = {
    className: "slider-container",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>

          <section>
              <div id="Banner_Text">
                  <h2 className='font-medium text-[20px] text-Primary'>Starting from: $49.99</h2>
                  <h1 className='font-semibold text-[64px] leading-[72px] w-[632px] text-[#111827] mb-[24px] mt-[18px]'>Exclusive collection for everyone</h1>
                  <Link className='text-white py-[20px] px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5' to={'/'}>Explore now <CiSearch className='text-[20px]'/></Link>
              </div>
          </section>
        
        </Slider>
      </div>

    </>
  )
}

export default Banner