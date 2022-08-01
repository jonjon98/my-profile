import React from 'react'
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
        <input type="text" name="name" placeholder="Name" required/>
        <br/>
        <input type="email" name="email" placeholder="Email Address" required/>
        <br/>
        <input type="text" name="message" placeholder="Message" required/>
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