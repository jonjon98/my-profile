import React from 'react'
import './nav.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

/* function to check if mouse is hovering over button */
function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}

const Nav = (props) => {
  const [activeNav] = useState(props.activeNav);
  const [fromLanding] = useState(props.fromLanding);

  /* functions to nagivate to header page */
  const navigate = useNavigate();

  async function handleClick(page) {
    navigate('/' + page, {state:{name: page, fromLanding:'false'}});
  }

  /* use on hover function for each Nav Bar Button */
  const [aboutBtnIsHovering, aboutBtnHoverProps] = useHover();
  const [experienceBtnIsHovering, experienceBtnHoverProps] = useHover();
  const [projectsBtnIsHovering, projectsBtnHoverProps] = useHover();
  const [skillsBtnIsHovering, skillsBtnHoverProps] = useHover();
  const [contactBtnIsHovering, contactBtnHoverProps] = useHover();
  
  return (
    <div>
      <nav>
        <nav className={fromLanding=== 'true' ? 'loading' : '' }>
          <a href=' ' onClick={() => handleClick('About')} className={activeNav === 'About' ? 'active' : ''} {...aboutBtnHoverProps}>{aboutBtnIsHovering ? 'cd ~/About' : 'About Me'}</a>      
          <a href=' ' onClick={() => handleClick('Experience')} className={activeNav === 'Experience' ? "active" : ''} {...experienceBtnHoverProps}>{experienceBtnIsHovering ? 'cd ~/Experience' : 'My Experience'}</a>     
          <a href=' ' onClick={() => handleClick('Projects')} className={activeNav === 'Projects' ? "active" : ''} {...projectsBtnHoverProps}>{projectsBtnIsHovering ? 'cd ~/Projects' : 'My Projects'}</a>      
          <a href=' ' onClick={() => handleClick('Skills')} className={activeNav === 'Skills' ? "active" : ''} {...skillsBtnHoverProps}>{skillsBtnIsHovering ? 'cd ~/Skills' : 'My Skills'}</a>     
          <a href=' ' onClick={() => handleClick('Contact')} className={activeNav === 'Contact' ? "active" : ''} {...contactBtnHoverProps}>{contactBtnIsHovering ? 'cd ~/Contact' : 'Contact Me!'}</a>      
        </nav>
      </nav>
  </div>
  )
}

export default Nav