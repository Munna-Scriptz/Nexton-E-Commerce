import React from 'react'
import Slider from "react-slick";
import { CommonHead } from './common/CommonHead'
import SingleProducts from './common/SingleProducts';

const BestSeller = () => {

    const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
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
  };

  return (
    <section id='Recommend' className='mt-[176px] ml-[24px] pb-[70px] lg:ml-0'>
            <div className="container">
                <CommonHead StartText={'Best Sellers.'} EndText={' Best selling of the month'}/>
                
                <div className="slider-container">
                    <Slider {...settings}>
                        <SingleProducts/>
                        <SingleProducts/>
                        <SingleProducts/>
                        <SingleProducts/>
                        <SingleProducts/>
                        <SingleProducts/>
                        <SingleProducts/>
                    </Slider>
                </div>
    
            </div>
        </section>
  )
}

export default BestSeller