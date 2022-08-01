import React from 'react'
import './project.css'
import Database from '../../assets/database/projects.json'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();

  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='project'>
        <div className='projectHeading noHighlight'>
          <h1 className='typewriter'>$cat projects</h1>
        </div>
        <div className='projectText'>
          {Database.map((exp) => (
            <div>
              <h2>{exp.title}</h2>
              <h3 className='date'>{exp.date}</h3>
              {exp.desc.map((desc) => (
              <h4>- {desc}</h4>
              ))}
              <h4>tech used</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects