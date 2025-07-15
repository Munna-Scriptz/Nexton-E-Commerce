import React from 'react'

const ProductPage = () => {
  return (
    <>
        <section className='mt-[40px]'>
            <div className="container">
                <div id="Mother_Div">
                    {/* -----Left Side  */}
                    <div id="Left_Side" className='w-[285px]'>
                        {/* categories */}
                        <div className=' border-b-1 border-[#E5E7EB] pb-[40px]'>
                            <h2 className='text-[18px] font-semibold text-second font-poppins mb-[24px]'>Categories</h2>
                            <div  className='flex items-center gap-3'>
                                <input type="checkbox" className='w-5 h-5' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Men’s fashion</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Women’s fashion</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Kids & Toys</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Accessories</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Cosmetics</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Shoes</label>
                            </div>
                            <div  className='flex items-center gap-3 mt-[16px]'>
                                <input type="checkbox" className='w-5 h-5 border-2 rounded-[4px] outline-none border-[#94A3B8]' id='check'/>
                                <label for='check' className='text-Primary text-sm'>Sports</label>
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
                                            <p className='text-Primary font-medium text-sm'>100</p>
                                            <p className='text-Primary font-medium text-sm'>$</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-Primary font-normal text-base mb-1'>Max price</p>
                                        <div className='flex items-center justify-between w-[130px] py-2 px-[16px] border-1 border-[#E5E7EB] rounded-full'>
                                            <p className='text-Primary font-medium text-sm'>500</p>
                                            <p className='text-Primary font-medium text-sm'>$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----Left Side  */}
                    <div id="Right_Side">

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage