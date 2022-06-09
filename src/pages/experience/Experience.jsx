import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Experience = () => {
  const location = useLocation();

  return (
    <div>
      Experience
      <Nav activeNav={location.state.name} />
      <div>
        <div>MicroSec</div>
        <div>Avitron</div>
        <div>ServerSam</div>
        <div>RobTech</div>
        <div>GrabFood</div>
      </div>
    </div>
  )
}

export default Experience