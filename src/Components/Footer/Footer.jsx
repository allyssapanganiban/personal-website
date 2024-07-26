import React from 'react'
import './Footer.css'
import mail_icon from '../../assets/mail_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import mail_icon2 from '../../assets/mail_icon2.svg';
import github_icon2 from '../../assets/github_icon2.svg';
import linkedin_icon2 from '../../assets/linkedin_icon2.svg';
import light_icon from '../../assets/light_icon.svg'
import dark_icon from '../../assets/dark_icon.png'


const Footer = ({ theme, toggleTheme }) => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>Built and designed by Allyssa Panganiban. © </p>
        </div>
      </div>
      <li className="footer-icon-container">
        <img src={theme === "light" ? dark_icon : light_icon} alt="Toggle Theme" className='icon' onClick={toggleTheme} />
        <a href="mailto:apanga01@villanova.edu" target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? mail_icon2 : mail_icon} alt="Mail" className='icon' /></a>
        <a href="https://www.github.com/apanga01" target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? github_icon2 : github_icon} alt="GitHub" className='icon' /></a>
        <a href="https://www.linkedin.com/in/allyssapanganiban" target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? linkedin_icon2 : linkedin_icon} alt="LinkedIn" className='icon' /></a>
      </li>
    </div>
  )
}

export default Footer
