import React, { useState } from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom';

const Nav = ({ activeNav, fromLanding }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = (pageName) => {
    navigate('/' + pageName, {state:{name: pageName, fromLanding:'false'}});
    setIsMenuOpen(false);
  };

  const goHome = () => {
    window.location.href = '/';
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo/Brand that goes home */}
      <div className="nav-brand" onClick={goHome}>
        <span className="brand-text">jonjon98</span>
      </div>

      {/* Hamburger menu button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop navigation */}
      <div className="nav-links desktop-nav">
        <a href=' ' onClick={() => handleClick('About')} className={activeNav === 'About' ? "active" : ''}>About Me.</a>      
        <a href=' ' onClick={() => handleClick('Experience')} className={activeNav === 'Experience' ? "active" : ''}>Experience.</a>      
        <a href=' ' onClick={() => handleClick('Projects')} className={activeNav === 'Projects' ? "active" : ''}>Projects.</a>      
        <a href=' ' onClick={() => handleClick('Contact')} className={activeNav === 'Contact' ? "active" : ''}>Contact Me!</a>      
      </div>

      {/* Mobile navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href=' ' onClick={() => handleClick('About')} className={activeNav === 'About' ? 'active' : ''}>About Me.</a>      
        <a href=' ' onClick={() => handleClick('Experience')} className={activeNav === 'Experience' ? 'active' : ''}>Experience.</a>      
        <a href=' ' onClick={() => handleClick('Projects')} className={activeNav === 'Projects' ? 'active' : ''}>Projects.</a>      
        <a href=' ' onClick={() => handleClick('Contact')} className={activeNav === 'Contact' ? 'active' : ''}>Contact Me!</a>      
      </div>
    </nav>
  )
}

export default Nav