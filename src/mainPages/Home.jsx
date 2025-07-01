import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home">
        <Hero></Hero>
        <Services></Services>
        <About></About>
        <Footer></Footer>
    </div>
  )
}

export default Home