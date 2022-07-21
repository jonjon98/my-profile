import React from 'react'
import './experience.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Experience = () => {
  const location = useLocation();

  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding} />
      <div className='experience'>
        <div className='experienceHeading'>
          <h1 className='typewriter'>$ cat experience</h1>
        </div>
        <div className='experienceText'>
          <div>
            <h2>job title @MicroSec</h2>
            <h3>date</h3>
            <h4>job desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>job title @Avitron</h2>
            <h3>date</h3>
            <h4>job desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>job title @ServerSam</h2>
            <h3>date</h3>
            <h4>job desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>job title @RobTech</h2>
            <h3>date</h3>
            <h4>job desciption</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>job title @Grabfood</h2>
            <h3>date</h3>
            <h4>job desciption</h4>
            <h4>tech used</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience