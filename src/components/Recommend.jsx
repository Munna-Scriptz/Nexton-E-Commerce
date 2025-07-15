import React from 'react'
import SingleProducts from './common/SingleProducts'
import { CommonHead } from './common/CommonHead'
import Slider from "react-slick";

const Recommend = () => {

    const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <section id='Recommend' className='mt-[138px] ml-[24px] lg:ml-0'>
        <div className="container">
            <CommonHead StartText={'Recommendations.'} EndText={' Best matching products for you'}/>
            
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

export default Recommend