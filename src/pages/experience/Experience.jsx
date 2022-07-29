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
          <h1 className='typewriter'>$cat experience</h1>
        </div>
        <div className='experienceText'>
          <div>
            <h2>Cyber Security Software Developer Intern @MicroSec</h2>
            <h3 className='date'>Dec 2021 – May 2022</h3>
            <h4>- Developed a C program to cluster logs of the same type.</h4>
            <h4>- Developed security protocols using signed certificates and certificate revocation lists. </h4>
            <h4>- Implemented a basic web-scraping tool to obtain information on a website in the form of a .csv file.</h4>
            <h4>- Implemented a user activity simulation on an internal testbed network.</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>Full Stack Developer Intern @Avitron</h2>
            <h3 className='date'>Jun 2021 – Aug 2021</h3>
            <h4>- Developed a full stack system in a team to help manage company documents.</h4>
            <h4>- Made use of company APIs to pull information from MySQL database</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>Project Lead/Full Stack Developer @ServerSam</h2>
            <h3 className='date'>May 2021 – Aug 2021</h3>
            <h4>- Led a team of three to complete deliverables set out by clients.</h4>
            <h4>- Developed websites for E-commerce sites and businesses using HTML, CSS, ASP.Net, C#, and SQL Server Management databases.</h4>
            <h4>- Implemented relevant APIs to the frontend such as Google Maps and Facebook pages. </h4>
            <h4>tech used</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience