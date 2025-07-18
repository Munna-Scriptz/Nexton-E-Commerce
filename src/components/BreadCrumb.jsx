import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = ({CrumbPath , CrumbName}) => {
  return (
    <>

        <section id='Bread_Crumb' className='flex items-center gap-3 text-[18px] mb-3 text-second font-poppins'>
            <Link to={'/'}>Home</Link>
            <IoIosArrowForward />
            <Link to={CrumbPath}>{CrumbName}</Link>
        </section>


    </>
  )
}

export default BreadCrumb