import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experiences from './Components/Experiences/Experiences';
import MyWork from './Components/MyWork/MyWork';
import Footer from './Components/Footer/Footer';
import './index.css'

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Experiences theme={theme} />
      <MyWork theme={theme} />
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;