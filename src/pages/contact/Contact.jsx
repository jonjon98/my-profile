import React from 'react'
import './contact.css'
import Nav from '../../components/nav/Nav.jsx'
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  return (
    <div className='noHighlight'>
      <Nav activeNav={location.state.name} fromLanding={location.state.fromLanding}/>
      <div className='contact'>
        <h1>Contact Me</h1>
        <form className='formElements' action="https://formsubmit.co/278dbd0b95eed4720a9d39cc16757902" method="POST">
          <label>Name</label>
          <br/>
          <div className="animated-box in">
            <textarea className='inputName' type="text" name="name" required/>
            <br/>
          </div>
          <label>Email Address</label>
          <br/>
          <div className="animated-box in">
            <textarea className='inputEmail' type="email" name="email" required/>
            <br/>
          </div>
          <label>Message</label>
          <br/>
          <div className="animated-box in">
            <textarea className='inputMessage' type="text" name="message" required/>
            <br/>
          </div>
          <button type="submit">Send</button>
          <input type="hidden" name="_next" value="https://jonjon98.netlify.app/Thankyou"/>
          <input type="hidden" name="_captcha" value="false"/>
        </form>
      </div>
    </div>
  )
}

export default Contact