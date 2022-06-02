import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();

  return (
    <div>
      <Nav activeNav={location.state.name} />
      Skills
    </div>
  )
}

export default Skills