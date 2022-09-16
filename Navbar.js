import React, { useState} from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(!false);

  
  

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
                     <img src='image/aimlogo.jpg' className='aim' alt='logo'/>          
                </a>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <a href='/' className='nav-links' onClick={closeMobileMenu}>Home</a>
                  </li>
                  <li className='nav-item'>
                    <a href='/services' className='nav-links' onClick={closeMobileMenu}>Services</a>
                  </li>
                  <li className='nav-item'>
                    <a href='/products' className='nav-links' onClick={closeMobileMenu}>Product</a>
                  </li>
                  <li className='nav-item'>
                    <a href='/aboutUs' className='nav-links' onClick={closeMobileMenu}>About Us</a>
                  </li>
                </ul>
            </div>
        </nav>
  
    </>
  )
};

export default Navbar