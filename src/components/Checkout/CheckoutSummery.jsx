import React, { useEffect, useState } from 'react'
import { IoResize } from "react-icons/io5";
import axios from 'axios';

const CheckoutSummery = ({CheckImg , CheckPrice , CheckName , HideInSmTop , HideInSmBottom , HideAllInLG}) => {
  // -------First Quantity
  const [value , setValue] = useState(1)
  if(value < 1){
    setValue(value + 1)
  }
  // -------second Quantity
  const [value2 , setValue2] = useState(1)
  if(value2 < 1){
    setValue2(value2 + 1)
  }
  // ----------------------------------------------------------Hooks 
  const ProductID = JSON.parse(localStorage.getItem('product'))
  const [Product, SetProduct] = useState([])
  
  // ---------------------------------------------------------Api 
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((res)=>{

     const CartData = res.data.products.filter((item)=>(
        ProductID.includes(item.id)
      ));

      const Qty = CartData.map((item)=>{
       return {...item , qty:1}
      })

      SetProduct(Qty)

    })
    .catch((err)=>{console.log(err)})
  },[])
  const ConstValue = 1

  const handleQty = (id)=>{
    SetProduct((prev)=>(

      prev.map((item)=>{
        if(item.id != id) return item
        
        return {...item, qty:item.qty + 1}
      })

    ))
  }
  return (
    <>
      <section id='Checkout-Summery' className={`lg:w-[618px] lg:px-0 w-full px-[24px] ${HideAllInLG}`}>
        <div className={`${HideInSmTop}`}>
          <div>
            <h2 className='text-2xl font-semibold text-second'>Order summary</h2>
          </div>
          {/* -------Product 1 Show--------- */}
          {
            Product.map((item , key)=>(
              <div key={key} className='flex items-center gap-8 py-6 border-t-2 border-BorderCol mt-6'>
                <div className='w-[96px]'>
                  <img src={item.thumbnail} alt="Product" />
                </div>
              {/* -------Product 1--------- */}
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <h2 className='font-semibold text-base text-second'>{item.title}</h2>
                    <p className='text-Primary text-sm font-normal flex items-center gap-1 mt-1'><IoResize /> One size</p>
                    <div className='flex items-center gap-4 mt-[20px]'>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>handleQty(item.id)}>-</button>
                      <p className='text-base text-Primary font-medium'>{item.qty}</p>
                      <button className='w-[24px] h-[24px] border-2 border-[#E5E7EB] rounded-full text-[18px] text-second cursor-pointer hover:bg-Primary hover:text-white duration-[.3s] select-none' onClick={()=>handleQty(item.id)}>+</button>
                    </div>
                  </div>
                  <div className=' text-end'>
                    <h2 className='font-semibold text-base text-second'>${item.price}</h2>
                    <p className='text-Primary text-sm font-normal line-through'>${item.discountPercentage}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
          {/* -------Checkout final--------- */}
          <div className={`mt-6 ${HideInSmBottom}`}>
            <p className='text-base text-Primary font-normal flex items-center justify-between'>Subtotal <span>${CheckPrice}</span></p>
            <p className='text-base text-Primary font-normal flex items-center justify-between mt-2'>Shipping estimate <span>$5.00</span></p>
            <p className='text-base text-Primary font-normal flex items-center justify-between mt-2'>Tax estimate <span>$24.90</span></p>
            <h2 className='text-second font-semibold text-base flex items-center justify-between mt-6'>Order total <span className=' truncate text-clip w-14'>${CheckPrice + 24}</span></h2>
            <button className='text-base font-medium text-white bg-second mt-6 w-full h-[52px] rounded-full cursor-pointer hover:scale-[1.05] duration-300'>Confirm order</button>
          </div>
      </section>
    </>
  )
}

export default CheckoutSummery