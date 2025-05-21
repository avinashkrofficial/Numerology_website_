import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer_container">
      <div className="logo">
        <img src="/logo2.png" alt="Moon Icon" className="logo1" />
        <span><img src="/logo.png" alt="Main Logo" /></span>
      </div>
      <div className="link_list">
        <h3>Main Links</h3>
        <ul>
          <li>Home</li>
          <li>Tools</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="link_list">
        <h3>Contact Us</h3>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Links & Email</li>
        </ul>
      </div>
      <div className="news_letter">
        <h3>Support</h3>
        <input type="email" placeholder="Enter your email" />
        <h3>Follow Us</h3>
        <div className="icon_container">
          <div className="icon"><i className="fa-brands fa-facebook"></i></div>
          <div className="icon"><i className="fa fa-twitter"></i></div>
          <div className="icon"><i className="fa fa-instagram"></i></div>
          <div className="icon"><i className="fa fa-youtube"></i></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;