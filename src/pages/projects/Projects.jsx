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
        <div className='projectHeading noHighlight'>
          <h1 className='typewriter'>$cat projects</h1>
        </div>
        <div className='projectText'>
          <div>
            <h2>FYP (WIP)</h2>
            <h3 className='date'>May 2022 - Present</h3>
            <h4>- Working on deploying an ASR application onto an on-prem NTU school server.</h4>
            <h4>- Working on using Terraform and Ansible to help with the provisioning of resources to help create and manage the VMs.</h4>
            <h4>- Configure the application on the on-prem servers for it to be accessible from the internet.</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>MDP</h2>
            <h3 className='date'>Aug 2021 - Oct 2021</h3>
            <h4>- Worked on an embedded system driven RC car in a group of 8 for 11 weeks to compete in various navigation exercises amongst other groups.</h4>
            <h4>- Developed accurate movement and sensor drivers for the RC car to achieve 3rd and 8th placing on the “Image Recognition” and the “Fastest Path” tasks respectively.</h4>
            <h4>tech used</h4>
          </div>
          <br />
          <div>
            <h2>RC4 Cracking</h2>
            <h3 className='date'>Sep 2021 - Nov 2021</h3>
            <h4>- Developed a simple Python user interface to allow the user upload a .csv file of the packets in the network traffic of a WEP server and use it to crack the password of the WEP router.</h4>
            <h4>- Implemented the FMS attack which the weakness of the RC4 in order to achieve accurate cracking of the WEP standard.</h4>
            <h4>tech used</h4>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Projects