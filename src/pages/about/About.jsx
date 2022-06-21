import React from 'react'
import './about.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  
  return (
    <div>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='heading'>
        <h1 className='typewriter'>$ whoami</h1>
      </div>
      <div className='aboutMe'>
        <div className='aboutMeImageBackground'>
          <div className='slider'>
            <div className='container'>
              <div className='slide x'></div>
              <div className='slide y'></div>
              <div className='slide z'></div>
            </div>
            <div className='shadow'></div>
          </div>
        </div>
        <div className='aboutMeText'>
          <div className='aboutMeTextCardBackground'>
            <div className='aboutMeTextCard'>
            </div>
          </div>
          <div>
            "Live as if you were to die tomorrow. Learn as if you were to live forever." -Mahatma Gandhi

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
          </div>
        </div>
      </div> 
    </div>
  )
}

export default About