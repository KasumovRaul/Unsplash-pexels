import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>ImageLibrary</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-icon">FB</a>
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">TW</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ImageLibrary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
