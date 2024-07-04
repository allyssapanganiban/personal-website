import React from 'react'
import './About.css'
import portfolio_picture from '../../assets/portfolio_picture.jpg'
import css_icon from '../../assets/css_icon.png'
import javascript_icon from '../../assets/javascript_icon.png'
import react_icon from '../../assets/react_icon.png'
import node_icon from '../../assets/node_icon.png'
import python_icon from '../../assets/python_icon.png'
import java_icon from '../../assets/java_icon.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={portfolio_picture} alt="" />
        </div>
        {/* Description */}
        <div className="about-right">
            <div className="about-para">
                <p>I am an incoming junior at <b>Villanova University</b> studying Computer Science with a minor in Business. At Villanova, I am the VP of Programs for the Girls Who Code chapter, and involved in other organizations such as NovaCANE, FASA, SASE, and the Programming Team.</p>
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
                  <p>Javascript</p>
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
                  <p>React/React Native</p>
                </div>
                <div className="about-skill">
                  <img src={node_icon} alt="" class="about-skills-icon"/>
                  <p>Node.js</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
