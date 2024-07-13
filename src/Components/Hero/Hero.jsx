import React from 'react'
import { motion } from 'framer-motion';
import './Hero.css'
import portfolio_picture from '../../assets/portfolio_picture.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mail_icon from '../../assets/mail_icon.png';
import circle from '../../assets/circle.png';
// import AnimatedCircles from './AnimatedCircles.jsx'
// import './AnimatedCircles.css'

const circleVariants = {
  animate: {
    x: [0, 200, -200, 0], // adjust values based on desired animation path
    y: [0, -200, 200, 0], // adjust values based on desired animation path
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <span className="typing-demo">Hi, I'm <span className="name-highlight">Allyssa</span>.</span>
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        Computer Science + Business
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        Add blurb about interest & passion - career goal.
      </motion.p>
      <motion.div 
        className="hero-action"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <div className="hero-connect">
          <a href="mailto:apanga01@villanova.edu" className='email-link'>
            <img src={mail_icon} alt="Mail Icon" className='mail-icon' />
            Say hello!
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
