import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to='/'>
        <div className="navbar-logo">ImageLibrary</div>
        </Link>
        {/* <nav className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Collections</li>
            <li>All Photos</li>
            <li>Business Ideas</li>
            <li>Resources</li>
          </ul>
        </nav> */}

         {/* <div className="navbar-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
         </div> */}
      </div>
    </header>
  );
};

export default Navbar;
