import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

export const LayoutOne = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
  )
}
