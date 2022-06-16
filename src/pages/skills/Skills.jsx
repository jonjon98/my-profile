import React from 'react'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();

  return (
    <div>
      Skills
      <Nav activeNav={location.state.name} />
      <div>
        <div>React</div>
        <div>Linux</div>
        <div>MySQL</div>
      </div>
    </div>
  )
}

export default Skills