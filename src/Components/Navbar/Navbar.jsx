import React, { useRef, useState } from 'react';
import './Navbar.css';
import favicon from '../../assets/favicon.png'
import mail_icon from '../../assets/mail_icon.png';
import github_icon from '../../assets/github_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

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
        <li><AnchorLink className='anchor-link' href='#home' offset={100}><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#experiences'><p onClick={()=>setMenu("experiences")}>Experiences</p></AnchorLink>{menu==="experiences"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Resume</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
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
