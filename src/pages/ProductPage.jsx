import React, { useEffect, useState } from 'react'
import SingleProducts from '../components/common/SingleProducts'
import axios from 'axios';
import BreadCrumb from '../components/common/BreadCrumb';
import Pagination from '../components/Product/Pagination';
import { useNavigate } from 'react-router';
import { FiFilter } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

const ProductPage = () => {
    // --------Local Storage 
    const HandleCart = (ProItems)=>{
    const ProductId = JSON.parse(localStorage.getItem('product')) || []
    ProductId?.push(ProItems.id)
    
    localStorage.setItem('product' , JSON.stringify(ProductId))
    }

    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const MyNavigate = useNavigate()
    // ----------Api Integration 

    const [products , setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{setProducts(res.data.products)})
        .catch((err)=>{console.log(err)})
    } , [])

    const HandleDetailShow =(ProductId)=>{
    MyNavigate(`/Details/${ProductId}`)

    }
    // -----------Pagination
  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

    //   ------------Show page Dropdown 
    const [perPage , SetPerPage] = useState(true)
    const handlePerPage = ()=>{
        
    }
    console.log(perPage)
  return (
    <>
        <section className='mt-[30px]'>
            <div className="container">
                <div id="Mother_Div" className='flex lg:flex-row flex-col justify-between gap-5'>
                    {/* -----Left Side  */}
                    <div id="Left_Side" className='w-[285px] lg:block hidden'>
                        <BreadCrumb CrumbPath={'/Products'} CrumbName={'Products'}/>
                        {/* categories */}
                        <div className=' border-b-1 border-[#E5E7EB] pb-[40px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Categories</h2>
                            <div  className='flex items-center gap-3'>
                                <input type="checkbox" className='w-5 h-5' id='check'/>
                                <label htmlFor='check' className='text-Primary text-sm'>Men's fashion</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check1'/>
                                <label htmlFor='check1' className='text-Primary text-sm'>Women’s fashion</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check2'/>
                                <label htmlFor='check2' className='text-Primary text-sm'>Kids & Toys</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check3'/>
                                <label htmlFor='check3' className='text-Primary text-sm'>Accessories</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check4'/>
                                <label htmlFor='check4' className='text-Primary text-sm'>Cosmetics</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check5'/>
                                <label htmlFor='check5' className='text-Primary text-sm'>Shoes</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check6'/>
                                <label htmlFor='check6' className='text-Primary text-sm'>Sports</label>
                            </div>
                        </div>
                        {/* Range */}
                        <div className=' border-b-1 border-[#E5E7EB] pb-[40px] mt-[32px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Price range</h2>
                            <div  className='flex flex-col gap-3'>
                                <input type="range" className='PrinceRange w-full' id='check'/>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='text-Primary font-normal text-base mb-1'>Min price</p>
                                        <div className='flex items-center justify-between w-[130px] py-2 px-[16px] border-1 border-[#E5E7EB] rounded-full'>
                                            <input type="number" className='placeholder:text-Primary w-full h-full border-none outline-none text-Primary font-medium text-sm' placeholder='100'/>
                                            <p className='text-Primary font-medium text-sm'>$</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-Primary font-normal text-base mb-1'>Max price</p>
                                        <div className='flex items-center justify-between w-[130px] py-2 px-[16px] border-1 border-[#E5E7EB] rounded-full'>
                                            <input type="number" className='placeholder:text-Primary w-full h-full border-none outline-none font-medium text-sm' placeholder='500'/>
                                            <p className='text-Primary font-medium text-sm'>$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sort Order */}
                        <div className=' mt-[32px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Sort order</h2>
                            <div  className='flex items-center gap-3'>
                                <input type="radio" className='w-5 h-5 rounded-full' id='radio1'/>
                                <label htmlFor='radio1' className='text-Primary text-sm'>Most Popular</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2outline-none border-[#94A3B8]' id='radio2'/>
                                <label htmlFor='radio2' className='text-Primary text-sm'>Best Rating</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2 outline-none border-[#94A3B8]' id='radio3'/>
                                <label htmlFor='radio3' className='text-Primary text-sm'>Most Popular</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2outline-none border-[#94A3B8]'id='radio4'/>
                                <label htmlFor='radio4' className='text-Primary text-sm'>Price Low - Hight</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="radio" className='w-5 h-5 rounded-full border-2outline-none border-[#94A3B8]' id='radio5'/>
                                <label htmlFor='radio5' className='text-Primary text-sm'>Price Hight - Low</label>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------For Small Devices Start */}
                    <div className='lg:hidden flex items-center justify-between px-[24px] select-none'>
                        <div className='flex items-center gap-[6px] text-Primary border-1 border-BorderCol rounded-full py-[6px] px-[12px] cursor-pointer'>
                            <FiFilter />
                            <p>Filters</p>
                        </div>
                        <div onClick={()=>SetPerPage(!perPage)} className='flex items-center gap-[6px] text-Primary border-1 border-BorderCol rounded-full py-[6px] px-[12px] cursor-pointer'>
                            <p>Rows per page</p>
                            <GoTriangleDown />
                        </div>
                    </div>
                    {/* --------Dropdown show per row  */}
                    <div className={`lg:hidden bg-transparent w-full flex pr-[12px] items-start justify-end duration-[.3s] overflow-hidden ${perPage? 'h-0' : 'h-[270px]'}`}>
                        <div className={`bg-white w-[200px] border-BorderCol border-2 ${perPage? 'h-0' : 'h-[250px]'}`}>
                            <ul className='flex flex-col'>
                                <li className='w-full h-[50px] flex items-center justify-center cursor-pointer bg-[#eeeeee]'><button>10</button></li>
                                <li className='w-full h-[50px] flex items-center justify-center cursor-pointer bg-[#fff]'><button>15</button></li>
                                <li className='w-full h-[50px] flex items-center justify-center cursor-pointer bg-[#eeeeee]'><button>20</button></li>
                                <li className='w-full h-[50px] flex items-center justify-center cursor-pointer bg-[#fff]'><button>25</button></li>
                                <li className='w-full h-[50px] flex items-center justify-center cursor-pointer bg-[#eeeeee]'><button>30</button></li>
                            </ul>
                        </div>
                    </div>
                    {/* ----------------------------------------For Small Devices end */}
                    {/* -----right Side  */}
                    <div id="Right_Side" className='flex flex-col items-end'>
                        <div className='flex flex-wrap justify-center gap-y-[52px] gap-x-5'>
                            {
                                currentItems.slice(0,9).map((items , i)=>(
                                    <SingleProducts HandleCart={()=>HandleCart(items)} ShowDetails={()=>HandleDetailShow(items.id)} key={i}proName={items.title} ProCat={items.category} proPrice={items.price} proRate={items.rating} ProStock={items.stock} proDis={items.discountPercentage} proImg={items.thumbnail}/>
                                ))
                            }
                        </div>
                        {/* -----Buttons  */}
                        <div className='mr-[24px]'>
                            <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage