import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css'
import allyssa_headshot from '../../assets/allyssa_headshot.png'
import css_icon from '../../assets/css_icon.png'
import javascript_icon from '../../assets/javascript_icon.png'
import react_icon from '../../assets/react_icon.png'
import node_icon from '../../assets/node_icon.png'
import python_icon from '../../assets/python_icon.png'
import java_icon from '../../assets/java_icon.png'

const About = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='about' className='about'>
      <motion.div
        className="title-box"
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1>About me</h1>
      </motion.div>
      <div className="about-sections">
        <motion.div
          className="about-left"
          ref={leftRef}
          initial={{ opacity: 0, x: -30 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={allyssa_headshot} alt="" />
        </motion.div>
        {/* Description */}
        <motion.div
          className="about-right"
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
            <div className="about-para">
                <h2>I am a software engineer from Toms River, NJ.</h2>
                <p>I am a junior at <b>Villanova University</b> studying Computer Science with a minor in Business. I am a driven learner who is curious in the intersection between technology and business.</p>
                <p>Here are some languages/technologies I have been working with:</p>
            </div>
            {/* Skills */}
            <div className="about-skills">
                <div className="about-skill">
                  <img src={css_icon} alt="" class="about-skills-icon"/>
                  <p>HTML & CSS</p>
                </div>
                <div className="about-skill">
                  <img src={javascript_icon} alt="" class="about-skills-icon"/>
                  <p>Javascript & Typescript</p>
                </div>
                <div className="about-skill">
                  <img src={python_icon} alt="" class="about-skills-icon"/>
                  <p>Python</p>
                </div>
                <div className="about-skill">
                  <img src={java_icon} alt="" class="about-skills-icon"/>
                  <p>Java</p>
                </div>
                <div className="about-skill">
                  <img src={react_icon} alt="" class="about-skills-icon"/>
                  <p>React & React Native</p>
                </div>
                <div className="about-skill">
                  <img src={node_icon} alt="" class="about-skills-icon"/>
                  <p>Node.js</p>
                </div>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About
