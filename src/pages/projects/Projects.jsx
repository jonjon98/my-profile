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
        <div className='noHighlight'>
          <h1>Projects</h1>
        </div>
        <div className='projectText'>
          {Database.map((proj) => (
            <div className= 'animated-box in' key={proj.title}>
              <h2>{proj.title}</h2>
              <h3 className='date'>{proj.date}</h3>
              {proj.desc.map((desc) => (
              <h4 key={desc}>- {desc}</h4>
              ))}
              <h4>tech used</h4>
              <a className='viewMore' href={proj.link}>View more here</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects