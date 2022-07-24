import React from 'react'
import './about.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const About = () => {
  const location = useLocation();
  
  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='aboutMe'>
        <div className='aboutmeHeading'>
          <h1 className='typewriter'>$whoami</h1>
        </div>
        <div className='aboutMeText'>
          <h2>
            Hey there! I'm Jonathan, and I love to learn about the latest developments in technology.
          </h2>
          <br />
          <h3>
            I get really excited when I am able to apply what I have learnt to be able to create something people enjoy using.
          </h3>
          <br />
          <h3>
            Currently on my final year in university.
          </h3>
        </div>
        <div>
          Skills
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