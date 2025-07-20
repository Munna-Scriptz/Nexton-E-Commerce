import React, { useEffect, useState } from 'react'
import ReviewProductSlider from '../components/ReviewProductSlider'
import ProductsSelection from '../components/ProductsSelection';
import Recommend from '../components/Recommend';
import { Link, useParams } from 'react-router';
import { BsStars } from "react-icons/bs";
import axios from 'axios';


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
        <section id='DetailsPage' className='mt-[40px]'>
            <div className="container">
              <div className="Details_Div flex items-start justify-between">
                {/* -------Left Side-------- */}
                <ReviewProductSlider ProductMainImg={Products.thumbnail} ProductSubImg={Products.images}/> 
                {/* -------Right Side-------- */}
                <ProductsSelection ProductRating={Products.rating} ProductStocks={Products.stock} ProductPrice={Products.price} ProductDis={Products.discountPercentage}/>
              </div>
              {/* -----Product Infos-------- */}
              <div id='Product_Info' className='mt-[105px] flex flex-col gap-[60px] mb-[96px]'>
                <div>
                  <h2 className='text-[36px] text-second font-semibold'>{Products.title}</h2>
                  <p className='w-[735px] text-base font-normal text-Primary mt-[16px]'>{Products.description}</p>
                </div>
                <div>
                  <h2 className='text-[36px] text-second font-semibold'>{Products.brand} + {Products.category}</h2>
                  <p className='w-[735px] text-base font-normal text-Primary mt-1'>Material: Soft wool blend</p>
                  <p className='w-[735px] text-base font-normal text-Primary'>Color: Various</p>
                </div>
                <div>
                  <h2 className='text-[36px] text-second font-semibold'>Sale performance</h2>
                    <p className='w-[735px] text-base font-normal text-Primary mt-1'>Sales: {Products.minimumOrderQuantity}</p>
                    <p className='w-[735px] text-base font-normal text-Primary'>Review Count: -</p>
                    <p className='w-[735px] text-base font-normal text-Primary'>Review Average: -</p>
                </div>
                <div>
                  <h2 className='text-[36px] text-second font-semibold mb-2'>Keywords</h2>
                  <div className='flex items-center gap-2'>
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