import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import favicon from '../../assets/favicon.png'
import mail_icon from '../../assets/mail_icon.png';
import github_icon from '../../assets/github_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import underline from '../../assets/nav_underline.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
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
    <div className='navbar'>
      <img src={favicon} alt="" className='logo' onClick={reloadPage}/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><Link className='anchor-link' to='/'><p onClick={()=>setMenu("home")}>Home</p></Link>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link className='anchor-link' to='/about'><p onClick={()=>setMenu("about")}>About</p></Link>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link className='anchor-link' to='/experiences'><p onClick={()=>setMenu("experiences")}>Experiences</p></Link>{menu==="experiences"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link className='anchor-link' to='/projects'><p onClick={()=>setMenu("work")}>Projects</p></Link>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><a className='anchor-link' href='https://drive.google.com/file/d/1PqEmQvukeT4M2SO9fx9AHPdCUT_V26Y4/view?usp=sharing' target='_blank' rel='noopener noreferrer'><p onClick={() => setMenu("resume")}>Resume</p></a>{menu==="resume"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <li className="icon-container">
      <a href="mailto:apanga01@villanova.edu" target="_blank" rel="noopener noreferrer">
          <img src={mail_icon} alt="" className='icon'/></a>
        <a href="https://www.github.com/apanga01" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="" className='icon'/></a>
        <a href="https://www.linkedin.com/in/allyssapanganiban" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" className='icon'/></a>
      </li>
    </div>
  )
}

export default Navbar
