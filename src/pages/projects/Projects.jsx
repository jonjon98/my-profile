import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();

  return (
    <div>
      Projects
      <Nav activeNav={location.state.name} />
      <div>
        <div>FYP (WIP)</div>
        <div>MDP</div>
        <div>RC4 Cracking</div>
      </div>
    </div>
  )
}

export default Projects