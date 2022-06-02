import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  
  return (
    <div>
      <Nav activeNav={location.state.name} />
      About
    </div>
  )
}

export default About