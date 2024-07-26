import React from 'react'
import { motion } from 'framer-motion';
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mail_icon from '../../assets/mail_icon.svg';
import circle from '../../assets/circle.png';
import circle2 from '../../assets/circle2.png'
import mail_icon2 from '../../assets/mail_icon2.svg'

const Hero = ({ theme, toggleTheme }) => {
  const circleOpacities = {
    circle1: 0.4,
    circle2: 0.4,
    circle3: 0.8,
    circle4: 0.5,
    circle5: 0.3
  };

  const circleVariants = (opacity) => ({
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: opacity,
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      transition: {
        opacity: { duration: 1, delay: 1.8 },
        duration: 9,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  });

  return (
    <div id='home' className='hero'>
      {Object.keys(circleOpacities).map((circleClass) => (
        <motion.img 
          key={circleClass}
          src={circle2} 
          alt="Circle" 
          className={`circle ${circleClass}`} 
          initial="initial"
          animate="animate"
          variants={circleVariants(circleOpacities[circleClass])} 
        />
      ))}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
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
        Software engineer. Deciphering the magic of technology to create high-impact solutions and enhance user experiences.
        {/* A passionate software engineer, leveraging technology to create impactful solutions and enhance user experiences. */}
      </motion.p>
      <motion.div 
        className="hero-action"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <div className="hero-connect">
          <a href="mailto:apanga01@villanova.edu" className='email-link'>
            <img src={theme === "light" ? mail_icon2 : mail_icon} alt="Mail Icon" className='mail-icon' />
            Say hello!
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;