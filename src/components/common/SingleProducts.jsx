import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";


const SingleProducts = ({proImg ,proName , proPrice , ProCat , proDis , proRate , ProStock , ShowDetails , HandleCart}) => {

  return (
    <div className='w-[312px] lg:w-[309px] mt-[40px] relative'>
      {/* -----Add TO Cart  */}
      <button onClick={HandleCart} className='ShopButton absolute right-0 top-0 pt-[22px] z-20 pr-[22px] cursor-pointer duration-[.3s] hover:scale-[1.2]'><IoBagHandleOutline className='text-[18px] text-Primary'/><span className="tooltip font-poppins text-white">SHOP</span></button>
      <section onClick={()=>ShowDetails()} className='cursor-pointer'>
          {/* ------Product Image  */}
          <div className=' relative'>
              <img src={proImg} alt="Product Image" className='h-[347px]'/>
          </div>

          {/* ------Product Details  */}
          <div id='Product_Text' className='flex items-start justify-between mt-[20px]'>
              <div>
                  <h2 className='text-second font-semibold text-base leading-[24px] ProductName'>{proName}</h2>
                  <p className='text-Primary font-normal text-sm leading-[20px]'>{ProCat}</p>
                  <div className='flex items-center gap-[5px] mt-[15px]'>
                      <FaStar className='text-[#FBBF24]'/>
                      <p className='text-Primary font-normal text-sm'>{proRate} ({ProStock})</p>
                  </div>
              </div>
              <div>
                  <h2 className='text-second font-semibold text-base leading-[24px]'>${proPrice}</h2>
                  <p className='text-Primary font-normal text-sm line-through leading-[20px]'>${proDis}</p>
              </div>
          </div>

      </section>
    </div>

  )
}

export default SingleProducts