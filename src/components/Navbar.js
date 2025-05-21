// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  let timeoutId = null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setShowNavbar(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`; // navigate to home then scroll
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar slide ${showNavbar ? 'show' : 'hide'}`}>
      <div className="logo">
        <img src="/logo2.png" alt="Moon Icon" className="logo1" />
        <span><img src="/logo.png" alt="Main Logo" /></span>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><Link to="/sun-sign" onClick={() => setIsOpen(false)}>Sun Sign</Link></li>
        <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a></li>
        <li><Link to="/support" onClick={() => setIsOpen(false)}>Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
