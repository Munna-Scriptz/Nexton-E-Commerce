import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { ResNavbar } from '../components/ResNavbar'
import Footer from '../components/Footer'

export const LayoutOne = () => {
  return (
    <>
        <Navbar></Navbar>
        <ResNavbar></ResNavbar>
        <Outlet></Outlet>
        <Footer/>
    </>
  )
}
