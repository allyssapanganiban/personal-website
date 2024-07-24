import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import favicon from '../../assets/favicon.png'
import mail_icon from '../../assets/mail_icon.png';
import github_icon from '../../assets/github_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
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
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home' offset={100}><p onClick={() => setMenu("home")}className={menu === "home" ? 'active' : ''}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#about' offset={100}><p onClick={() => setMenu("about")}className={menu === "about" ? 'active' : ''}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#experiences' offset={100}><p onClick={() => setMenu("experiences")}className={menu === "experiences" ? 'active' : ''}>Experiences</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#work' offset={100}><p onClick={() => setMenu("work")}className={menu === "work" ? 'active' : ''}>Projects</p></AnchorLink></li>
        <li>
          <a href="https://drive.google.com/file/d/1PqEmQvukeT4M2SO9fx9AHPdCUT_V26Y4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <p onClick={() => setMenu("resume")} className={menu === "resume" ? 'active' : ''}>Resume</p>
          </a>
        </li>
      </ul>
      <li className="icon-container">
      <a href="mailto:apanga01@villanova.edu" target="_blank" rel="noopener noreferrer">
          <img src={mail_icon} alt="" className='icon'/></a>
        <a href="https://www.github.com/apanga01" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="" className='icon'/></a>
        <a href="https://www.linkedin.com/in/allyssapanganiban" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" className='icon'/></a>
      </li>
    </motion.div>
  );
}

export default Navbar
