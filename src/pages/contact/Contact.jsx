import React from 'react'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  return (
    <>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='project'>
        <div className='projectHeading'>
          <h1 className='typewriter'>Contact Me</h1>
        </div>
        <form>
          <label>Name</label>
          <label>Email</label>
          <label>Message</label>
        </form>
      </div>
    </>
  )
}

export default Contact