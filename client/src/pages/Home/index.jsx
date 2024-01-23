import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import ArrivalsSection from '../../components/HomePageComponents/ArrivalsSection'
import PopularProducts from '../../components/HomePageComponents/PopularProducts'
import ChoiceSection from '../../components/HomePageComponents/ChoiceSection'

const Home = () => {
  return (
   <>
    <Helmet>
    <title>Home</title>
  </Helmet>
   <HeroSection/>

   <ArrivalsSection/>
   <PopularProducts/>
   <ChoiceSection/>
   </>
  )
}

export default Home