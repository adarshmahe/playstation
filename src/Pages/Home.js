import React from 'react'
import BlogSlider from '../Components/BlogSlider/BlogSlider'
import FeaturedGame from '../Components/FeaturedGame/FeaturedGame'
import HardwareShowcase from '../Components/HardwareShowcase/HardwareShowcase'
import HeroSlider from '../Components/HeroSlider/HeroSlider'
import NewReleasesSlider from '../Components/NewReleasesSlider/NewReleasesSlider'
import PlusSection from '../Components/PlusComponent/PlusSection'

const Home = () => {
  return (
    <>
        <HeroSlider />
        <HardwareShowcase />
        <PlusSection />
        <FeaturedGame />
        <NewReleasesSlider />
        <BlogSlider />
    </>
  )
}

export default Home