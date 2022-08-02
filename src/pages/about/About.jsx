import React from 'react'
import './about.css'
import Database from '../../assets/database/about.json'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { SiJava, SiJavascript, SiPython, SiHtml5, SiReact } from 'react-icons/si';

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
          <h2>{Database[0].intro}</h2>
          <h3>{Database[0].desc[0]}</h3>
          <h3>{Database[0].desc[1]}</h3>
        </div>
        <div className='aboutMeText'>
          <h2>
            Skills
          </h2>
          <br />
          <h3>
            Coding
          </h3>
          <br />
          <div className='aboutMeSkills'>
            <SiJava />
            <SiJavascript />
            <SiPython />
            <SiHtml5 />
            <SiReact />
          </div>
          <br />
          <h3>
            Software Applications and Frameworks:
          </h3>
          <div className='aboutMeSkills'>

          </div>
        </div>
        <div className='aboutMeLinks'>
          <a href='https://www.linkedin.com/in/jonjon98'><AiOutlineLinkedin /></a>
          <a href='https://github.com/jonjon98'><AiOutlineGithub /></a>
        </div>
      </div> 
    </>
  )
}

export default About