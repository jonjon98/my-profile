import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'


const Nav = (props) => {
  const [activeNav] = useState(props.activeNav);

  /* functions to nagivate to header page */
  const navigate = useNavigate();

  async function handleClick(page) {
    navigate('/' + page, {state:{name: page}});
  }
  
  return (
    <div>
      <nav>
        <a href=' ' onClick={() => handleClick('About')} className={activeNav === 'About' ? "active" : ''}><AiOutlineHome /></a>      
        <a href=' ' onClick={() => handleClick('Experience')} className={activeNav === 'Experience' ? "active" : ''}><AiOutlineUser /></a>     
        <a href=' ' onClick={() => handleClick('Projects')} className={activeNav === 'Projects' ? "active" : ''}><BiBook /></a>      
        <a href=' ' onClick={() => handleClick('Skills')} className={activeNav === 'Skills' ? "active" : ''}><RiServiceLine /></a>     
        <a href=' ' onClick={() => handleClick('Contact')} className={activeNav === 'Contact' ? "active" : ''}><BiMessageSquareDetail /></a>      
      </nav>
  </div>
  )
}

export default Nav