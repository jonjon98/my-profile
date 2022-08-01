import React from 'react'
import './contact.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  return (
    <div className='noHighlight'>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='project'>
        <div className='projectHeading'>
          <h1 className='typewriter'>Contact Me</h1>
        </div>
      <form action="https://formsubmit.co/278dbd0b95eed4720a9d39cc16757902" method="POST">
        <label>Name</label>
        <br/>
        <textarea className='inputName' type="text" name="name" required/>
        <br/>
        <label>Email Address</label>
        <br/>
        <textarea className='inputEmail' type="email" name="email" required/>
        <br/>
        <label>Message</label>
        <br/>
        <textarea className='inputMessage' type="text" name="message" required/>
        <br/>
        <button type="submit">Send</button>
        <input type="hidden" name="_next" value="https://jonjon98.netlify.app/Thankyou"/>
        <input type="hidden" name="_captcha" value="false"/>
      </form>
      </div>
    </div>
  )
}

export default Contact