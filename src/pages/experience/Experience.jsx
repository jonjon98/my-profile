import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Experience = () => {
  const location = useLocation();

  return (
    <div>
      <Nav activeNav={location.state.name} />
      Experience
    </div>
  )
}

export default Experience