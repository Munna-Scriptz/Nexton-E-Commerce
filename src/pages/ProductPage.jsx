import React from 'react'

const ProductPage = () => {
  return (
    <>
        <section className='mt-[40px]'>
            <div className="container">
                <div id="Mother_Div">
                    {/* -----Left Side  */}
                    <div id="Left_Side">
                        {/* categories */}
                        <div className='w-[285px] border-b-1 border-[#E5E7EB] pb-[40px]'>
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