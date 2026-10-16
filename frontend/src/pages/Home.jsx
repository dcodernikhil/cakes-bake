// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroSection from '../components/home/HeroSection'
import CategoryShowcase from '../components/home/CategoryShowcase';
import Bestsellers from '../components/home/Bestsellers';
import CustomCakeStudio from '../components/home/CustomCakeStudio';
import OurStory from '../components/home/OurStory';
import WhyCakesAndBake from '../components/home/WhyCakesAndBake';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryShowcase />
      <Bestsellers />
      <CustomCakeStudio />
      <OurStory />
      <WhyCakesAndBake />
    </div>
  )
}

export default Home
