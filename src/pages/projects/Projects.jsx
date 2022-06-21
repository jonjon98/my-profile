import React from 'react'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();

  return (
    <div>
      Projects
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div>
        <div>FYP (WIP)</div>
        <div>MDP</div>
        <div>RC4 Cracking</div>
      </div>
    </div>
  )
}

export default Projects