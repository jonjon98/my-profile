import React from 'react'
import Nav from '../nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  return (
    <div>
      <Nav activeNav={location.state.name} />
      Contact
    </div>
  )
}

export default Contact