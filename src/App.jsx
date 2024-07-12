import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experiences from './Components/Experiences/Experiences';
import MyWork from './Components/MyWork/MyWork';
import Footer from './Components/Footer/Footer';
// import Resume from './Components/Resume/Resume';

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
