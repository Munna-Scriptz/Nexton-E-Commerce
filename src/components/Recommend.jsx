import React, { useEffect, useState } from 'react'
import SingleProducts from './common/SingleProducts'
import { CommonHead } from './common/CommonHead'
import Slider from "react-slick";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const Recommend = () => {
  const [products , setProducts] = useState([])
  
  // ---------Show Details Function 
  const MyNavigation = useNavigate()
  
  const HandleDetails = (ProductDetails)=>{
    MyNavigation(`/Details/${ProductDetails}`)
  }
  
  
  // -----------Api 
  useEffect(()=>{
      axios.get('https://dummyjson.com/products')
      .then((res)=>{setProducts(res.data.products)})
      .catch((err)=>{console.log(err)})
  } , [])
  // ----------Slider 
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
    <section id='Recommend' className='mt-[138px] ml-[24px] lg:ml-0 cursor-pointer'>
        <div className="container">
            <CommonHead StartText={'Recommendations.'} EndText={' Best matching products for you'}/>
            
            <div className="slider-container">
                <Slider {...settings}>
                    {
                      products.map((items)=>(
                        <SingleProducts HandleCart={()=>HandleCart(items)} ShowDetails={()=>HandleDetails(items.id)} proName={items.title} ProCat={items.category} proPrice={items.price} proRate={items.rating} ProStock={items.stock} proDis={items.discountPercentage} proImg={items.thumbnail}/>
                      ))
                    }
                </Slider>
            </div>

        </div>
    </section>
  )
}

export default Recommend