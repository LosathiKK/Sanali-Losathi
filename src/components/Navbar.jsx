import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      {/* Left Navigation */}
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
        >
          Works
        </Link>
        <Link 
          to="/bio" 
          className={`nav-link ${location.pathname === '/bio' ? 'nav-link-active' : ''}`}
        >
          Bio
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
        >
          Contact
        </Link>
      </div>
      
      {/* Right Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img 
            src={logo} 
            alt="Sanali Logo" 
            className="logo-image"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
