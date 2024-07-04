import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experiences from './Components/Experiences/Experiences'
import MyWork from './Components/MyWork/MyWork'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <MyWork/>
      <Footer/>
    </div>
  )
}

export default App
