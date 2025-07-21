import React from 'react'
import Banner from '../components/Home/Banner'
import Service from '../components/Home/Service'
import { Brands } from '../components/Home/Brands'
import Recommend from '../components/Home/Recommend'
import BestSeller from '../components/Home/BestSeller'
import BottomBanner from '../components/Home/BottomBanner'

export const Home = () => {
  return (
    <>
    <Banner/>
    <Service/>
    <Brands/>
    <Recommend/>
    <BestSeller/>
    <BottomBanner/>
    </>
  )
}
