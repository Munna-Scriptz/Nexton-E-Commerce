import { CommonHead } from '../common/CommonHead'
import SingleBrand from '../common/SingleBrand'
import React from "react";
import Slider from "react-slick";

export const Brands = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  }

  return (
    <>

    <section id='Brands_Slider' className='mt-[52px] mb-6 lg:mt-[88px] lg:mb-[40px] pb-20 px-[20px] lg:px-0'>
      <div className="container">
        {/* --------Common Head-------- */}
        <div className='mb-[40px]'><CommonHead HideShow={'hidden'} StartText={'Start exploring.'} EndText={'Good things are waiting for you'}/></div>

        {/* --------Slider-------- */}
          <div className='cursor-pointer'>
            <div className="slider-container">
              <Slider {...settings} className='!gap-10'>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
              </Slider>
            </div>
          </div>
      </div>
        
    </section>

    </>
  )
}
