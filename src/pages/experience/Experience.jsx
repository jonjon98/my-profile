import React from 'react'
import './experience.css'
import Database from '../../assets/database/experience.json'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Experience = () => {
  const location = useLocation();

  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding} />
      <div className='experience'>
        <div className='noHighlight'>
          <h1>Experience</h1>
        </div>
        <div className='experienceText'>
          {Database.map((exp) => (
            <div className= 'animated-box in' key={exp.company}>
              <h2>{exp.role} @{exp.company}</h2>
              <h3 className='date'>{exp.date}</h3>
              {exp.desc.map((desc) => (
              <h4 key={desc}>- {desc}</h4>
              ))}
              <h4>tech used</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience