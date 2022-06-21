import React from 'react'
import './notFound.css'
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div class="noise"></div>
        <div class="overlay"></div>
        <div class="terminal">
          <h1>Error <span class="errorcode">404</span></h1>
          <p class="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <p class="output">Please try to <a href="#1" onClick={()=>navigate(-1)}>go back</a> or <a href="#2">return to the homepage</a>.</p>
          <p class="output">Good luck.</p>
        </div>
    </div>
  )
}

export default NotFound