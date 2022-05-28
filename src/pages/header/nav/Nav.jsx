import React from 'react'
import { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#about');
  
  return (
    <div>
      <nav>
        <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? "active" : ''}><AiOutlineHome /></a>      
        <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? "active" : ''}><AiOutlineUser /></a>     
        <a href='#projects' onClick={() => setActiveNav("#projects")} className={activeNav === '#projects' ? "active" : ''}><BiBook /></a>      
        <a href='#skills' onClick={() => setActiveNav("#skills")} className={activeNav === '#skills' ? "active" : ''}><RiServiceLine /></a>     
        <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? "active" : ''}><BiMessageSquareDetail /></a>      
      </nav>
  </div>
  )
}

export default Nav