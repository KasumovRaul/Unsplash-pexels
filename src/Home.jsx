import React from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import HeroSection from './heroSection/HeroSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <HomePage/>
    </div>
  )
}

export default Home