import React from 'react'
import './about.css'
import Nav from '../../components/nav/Nav.jsx'
import profilePic from '../../assets/profilePic.jpg'
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
          <img className='aboutMeImage' src={profilePic} alt='About Pic'/>
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