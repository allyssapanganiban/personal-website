import React from 'react'
import './Hero.css'
import portfolio_picture from '../../assets/portfolio_picture.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mail_icon from '../../assets/mail_icon.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={portfolio_picture} alt="" className='profile-img' /> */}
      <h1>Hello, my name is <span>Allyssa</span>.</h1>
      <p>Add blurb about interest & passion - career goal.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="mailto:apanga01@villanova.edu" className='email-link'>
            <img src={mail_icon} alt="Mail Icon" className='mail-icon' />
            Say hello!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
