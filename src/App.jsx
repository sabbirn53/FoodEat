import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import bgImage from './assets/2.png'
import Banner from './components/Banner/Banner'
import OurServices from './components/OurServices/OurServices'
import Footer from './components/Footer/Footer'

const bgstyle={
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <div style={bgstyle} className='overflow-x-hidden'>
      <div className='min-h-screen bg-white/4 backdrop-blur-3xl'>
      <Navbar/>
      <Hero/>
      <TopList/>
      <Banner/>
      <OurServices/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

