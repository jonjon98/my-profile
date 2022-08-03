import React from 'react'
import './about.css'
import Database from '../../assets/database/about.json'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  
  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='aboutMe'>
        <div className='aboutmeHeading noHighlight'>
          <h1 className='typewriter'>$whoami</h1>
        </div>
        <div className='aboutMeText'>
          {Database.map((about) => (
            <div key={about.intro}>
              <h2>{about.intro}</h2>
              {about.desc.map((desc) => (
              <h3 key={desc}>{desc}</h3>
              ))}
            </div>
          ))}
        </div>
        <div className='aboutMeLinks'>
          <a href='https://www.linkedin.com/in/jonjon98'>Linkedin</a>
          <a href='https://github.com/jonjon98'>Github</a>
        </div>
      </div> 
    </>
  )
}

export default About