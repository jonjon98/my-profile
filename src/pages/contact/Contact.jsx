import React from 'react'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  return (
    <div>
      Contact Me
      <Nav activeNav={location.state.name} />
      <form>
        <div>Name</div>
        <div>Email</div>
        <div>Message</div>
      </form>
      <div>
      <a href=' '>Linkedin</a>
      <a href=' '>Github</a>
      </div>
    </div>
  )
}

export default Contact