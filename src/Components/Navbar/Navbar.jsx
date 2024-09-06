import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import favicon from '../../assets/favicon.png'
import mail_icon from '../../assets/mail_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import light_icon from '../../assets/light_icon.svg'
import dark_icon from '../../assets/dark_icon.png'
import menu_open2 from '../../assets/menu_open2.svg';
import menu_close2 from '../../assets/menu_close2.svg';
import mail_icon2 from '../../assets/mail_icon2.svg';
import github_icon2 from '../../assets/github_icon2.svg';
import linkedin_icon2 from '../../assets/linkedin_icon2.svg';



const Navbar = ({ theme, toggleTheme }) => {
  
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <motion.div
      className='navbar'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <img src={favicon} alt="" className='logo' onClick={reloadPage}/>
      <img src={theme === "light" ? menu_open2 : menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={theme === "light" ? menu_close2 : menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home' offset={100}><p onClick={() => setMenu("home")}className={menu === "home" ? 'active' : ''}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#about' offset={100}><p onClick={() => setMenu("about")}className={menu === "about" ? 'active' : ''}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#experiences' offset={100}><p onClick={() => setMenu("experiences")}className={menu === "experiences" ? 'active' : ''}>Experiences</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#work' offset={100}><p onClick={() => setMenu("work")}className={menu === "work" ? 'active' : ''}>Projects</p></AnchorLink></li>
        <li>
          <a href="https://drive.google.com/file/d/17aOEptp_32y3rGM1FhPSNB5W8bA0HbR_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <p onClick={() => setMenu("resume")} className={menu === "resume" ? 'active' : ''}>Resume</p>
          </a>
        </li>
      </ul>
      <li className="icon-container">
        <img src={theme === "light" ? dark_icon : light_icon} alt="Toggle Theme" className='icon' onClick={toggleTheme} />
        <a href="mailto:apanga01@villanova.edu" target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? mail_icon2 : mail_icon} alt="Mail" className='icon' /></a>
        <a href="https://github.com/allyssapanganiban/" target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? github_icon2 : github_icon} alt="GitHub" className='icon' /></a>
        <a href="https://www.linkedin.com/in/allyssapanganiban" target="_blank" rel="noopener noreferrer">
          <img src={theme === "light" ? linkedin_icon2 : linkedin_icon} alt="LinkedIn" className='icon' /></a>
      </li>
    </motion.div>
  );
}

export default Navbar
