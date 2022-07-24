import React from 'react'
import './project.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();

  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='project'>
        <div className='projectHeading'>
          <h1 className='typewriter'>$cat projects</h1>
        </div>
        <div className='projectText'>
          <div>
            <h2>FYP (WIP)</h2>
            <h3>date</h3>
            <h4>project desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>MDP</h2>
            <h3>date</h3>
            <h4>project desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>RC4 Cracking</h2>
            <h3>date</h3>
            <h4>project desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Projects