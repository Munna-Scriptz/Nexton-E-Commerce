import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import { Brands } from '../components/Brands'
import Recommend from '../components/Recommend'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

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
