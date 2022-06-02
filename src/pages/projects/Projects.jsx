import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();

  return (
    <div>
      <Nav activeNav={location.state.name} />
      Projects
    </div>
  )
}

export default Projects