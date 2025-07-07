import { CommonHead } from './common/CommonHead'
import SingleBrand from './common/SingleBrand'
import React from "react";
import Slider from "react-slick";

export const Brands = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <>

    <section id='Brands_Slider' className='mt-[52px] mb-6 lg:mt-[88px] lg:mb-[40px]'>
      <div className="container">
        {/* --------Common Head-------- */}
        <div className='mb-[40px]'><CommonHead StartText={'Start exploring.'} EndText={'Good things are waiting for you'}/></div>

        {/* --------Slider-------- */}
          <div>
            <div className="slider-container">
              <Slider {...settings}>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Men's`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`For Women's`} BrandP={`Starting at $19`}/>
              </Slider>
            </div>
          </div>
      </div>
        
    </section>

    </>
  )
}
