import React from 'react'
import './nav.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = (props) => {
  const [activeNav] = useState(props.activeNav);
  const [fromLanding] = useState(props.fromLanding);

  /* functions to nagivate to header page */
  const navigate = useNavigate();

  async function handleClick(page) {
    navigate('/' + page, {state:{name: page, fromLanding:'false'}});
  }
  
  return (
    <div className='noHighlight'>
      <nav className={fromLanding=== 'true' ? 'loading' : '' }>
      <h2 onClick={() => handleClick('')} className='homepage'>jonjon</h2>
        <div className='navLinks'>
          <a href=' ' onClick={() => handleClick('About')} className={activeNav === 'About' ? 'active' : ''}>About Me.</a>      
          <a href=' ' onClick={() => handleClick('Experience')} className={activeNav === 'Experience' ? "active" : ''}>Experience.</a>     
          <a href=' ' onClick={() => handleClick('Projects')} className={activeNav === 'Projects' ? "active" : ''}>Projects.</a>      
          <a href=' ' onClick={() => handleClick('Contact')} className={activeNav === 'Contact' ? "active" : ''}>Contact Me!</a>      
        </div>
      </nav>
  </div>
  )
}

export default Nav