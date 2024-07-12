import React from 'react'
import { motion } from 'framer-motion';
import './Hero.css'
import portfolio_picture from '../../assets/portfolio_picture.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mail_icon from '../../assets/mail_icon.png';
import circle from '../../assets/circle.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={circle} alt="" className='circle1' />
      <img src={circle} alt="" className='circle2' />
      <img src={circle} alt="" className='circle3' />
      <img src={circle} alt="" className='circle4' />
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Hi, I'm <span>Allyssa</span>.
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
