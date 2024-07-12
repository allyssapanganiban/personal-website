import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experiences from './Components/Experiences/Experiences';
import MyWork from './Components/MyWork/MyWork';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';

const App = () => {
  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<div><Hero /><MyWork /></div>} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            {/* <Route path="/projects" element={<MyWork />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  )
}

export default App
