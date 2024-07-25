import React from 'react'
import './Footer.css'
import mail_icon from '../../assets/mail_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>Built and designed by Allyssa Panganiban. © </p>
        </div>
      </div>
      <li className="footer-icon-container">
      <a href="mailto:apanga01@villanova.edu" target="_blank" rel="noopener noreferrer">
          <img src={mail_icon} alt="" className='footer-icon'/></a>
        <a href="https://www.github.com/apanga01" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="" className='footer-icon'/></a>
        <a href="https://www.linkedin.com/in/allyssapanganiban" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" className='footer-icon'/></a>
      </li>
    </div>
  )
}

export default Footer
