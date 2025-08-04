import React, { useEffect, useState } from 'react'
import ReviewProductSlider from '../components/Product/ReviewProductSlider'
import ProductsSelection from '../components/Product/ProductsSelection';
import Recommend from '../components/Home/Recommend';
import { Link, useParams } from 'react-router';
import { BsStars } from "react-icons/bs";
import axios from 'axios';
import BreadCrumb from '../components/common/BreadCrumb';


const Details = () => {
  const [Products , setProducts] = useState([])
  const MyParams = useParams()

  // --------Params---------
  // ----api 

  useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${MyParams.ProductIdNo}`)
      .then((res)=>{setProducts(res.data)})
      .catch((err)=>{console.log(err)})
  } , [])

  return (
    <>
        <section id='DetailsPage' className='lg:pt-[40px] pt-[25px] lg:m-0 m-[24px]'>
            <div className="container">
              <BreadCrumb CrumbPath={`/Details/${MyParams.ProductIdNo}`} CrumbName={'Details'}/>
              <div className="Details_Div flex lg:flex-row flex-col items-start justify-between">
                {/* -------Left Side-------- */}
                <ReviewProductSlider ProductMainImg={Products.thumbnail} ProductSubImg={Products.images}/> 
                {/* -------Right Side-------- */}
                <ProductsSelection ProductRating={Products.rating} ProductStocks={Products.stock} ProductPrice={Products.price} ProductDis={Products.discountPercentage}/>
              </div>
              {/* -----Product Infos-------- */}
              <div id='Product_Info' className='lg:mt-[105px] mt-[40px] flex flex-col lg:gap-[60px] gap-[40px] lg:mb-[96px] mb-[52px]'>
                <div>
                  <h2 className='lg:text-[36px] text-[20px] text-second font-semibold'>{Products.title}</h2>
                  <p className='lg:w-[735px] w-full text-base font-normal text-Primary lg:mt-[16px]'>{Products.description}</p>
                </div>
                <div>
                  <h2 className='lg:text-[36px] text-[20px] text-second font-semibold'>{Products.brand} + {Products.category}</h2>
                  <p className='lg:w-[735px] w-full text-base font-normal text-Primary lg:mt-1 mt-0'>Material: Soft wool blend</p>
                  <p className='lg:w-[735px] w-full text-base font-normal text-Primary'>Color: Various</p>
                </div>
                <div>
                  <h2 className='lg:text-[36px] text-[20px] text-second font-semibold'>Sale performance</h2>
                    <p className='lg:w-[735px] w-full text-base font-normal text-Primary lg:mt-1 mt-0'>Sales: {Products.minimumOrderQuantity}</p>
                    <p className='lg:w-[735px] w-full text-base font-normal text-Primary'>Review Count: -</p>
                    <p className='lg:w-[735px] w-full text-base font-normal text-Primary'>Review Average: -</p>
                </div>
                <div>
                  <h2 className='lg:text-[36px] text-[20px] text-second font-semibold mb-2'>Keywords</h2>
                  <div className='flex flex-wrap items-center gap-2'>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />{Products.brand}</Link>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />{Products.category}</Link>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />colorful accessory</Link>
                    <Link to={'/'} className='text-base font-normal text-Primary flex items-center gap-1 py-2 px-4 border-2 border-[#E5E7EB] w-fit rounded-full'><BsStars />warm headwear</Link>
                  </div>
                </div>
              </div>
              {/* ----Recommended---- */}
              <div id="Recommended" className='pb-[96px]'>
                <Recommend/>
              </div>
            </div>
        </section>
    </>
  )
}

export default Details