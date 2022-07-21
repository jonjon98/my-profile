import React from 'react'
import './about.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  
  return (
    <div>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='aboutMe'>
        <div className='aboutmeHeading'>
          <h1 className='typewriter'>$ whoami</h1>
        </div>
        <div className='aboutMeText'>
          <h1>
            Hey there! I'm Jonathan, and I love to learn about the latest developments in technology.
          </h1>
          <br />
          <h3>
            I get really excited when I am able to apply what I have learnt to be able to create something people enjoy using.
          </h3>
          <br />
          <h3>
            Currently on my final year in university.
          </h3>
        </div>
      </div> 
    </div>
  )
}

export default About