import React from 'react'
import './about.css'
import Database from '../../assets/database/about.json'
import Nav from '../../components/nav/Nav.jsx'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  
  const [clickCard, setClickCard] = useState(false);

  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='aboutMe'>
        <div className='aboutmeHeading noHighlight'>
            <h1 className='typewriter'>$whoami</h1>
        </div>
        <div className="container">
          <div className={clickCard === true ? 'card flipped' : 'card' } onClick={() => setClickCard(!clickCard)}>
            <figure className="front">
              <img src="http://www.jboeijenga.nl/img/front.jpg" alt="front"/>
              <div className="caption">
                <h2>Jonathan <span>Yap</span></h2>
                <p>Full Stack Developer</p>
              </div>			
            </figure>

            <figure className="back">
               <img src="http://www.jboeijenga.nl/img/back.jpg" alt="back"/>
                <div className="caption">
                  <dl>
                    <dt>Socials</dt>
                    <dd>Linkedin GitHub</dd>
                    <dt>Email</dt>
                    <dd>yapzh.jon@gmail.com</dd>
                    <dt>Web</dt>
                    <dd>jonjon98.netlify.app</dd>
                  </dl>
                </div>
            </figure>
          </div>
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