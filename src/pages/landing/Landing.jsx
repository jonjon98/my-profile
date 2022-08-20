import React from 'react'
import './landing.css'
import Database from '../../assets/database/about.json'
import Cursor from './Cursor.js'
import Glitch from '../../components/glitch/Glitch'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CypherText from 'react-cypher-text-loop'

/* function to check if mouse is hovering over button */
function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}

const Landing = () => {
  /* Canvas functions */
  /* function to give cursor a trail */
  Cursor();
  
  /* About Page button */
  /* using states to check if "cd ~/About" button is pressed */
  const [cmdState, setCmdState] = useState(0);

  /* functions to nagivate to about page */
  const navigate = useNavigate();

  async function handleClick() {
    setCmdState(cmdState+1);
    /* sleep for 1.5 seconds */
    /* await new Promise(r => setTimeout(r, 0)); */
    navigate('/About', {state:{name:'About', fromLanding:'true'}});
  }

  /* use on hover function for About Page button */
  const [aboutBtnIsHovering, aboutBtnHoverProps] = useHover();

  return (
    <div className='noHighlight'>
      <canvas id='canvas' />    
      <div className='foreground'>
        <Glitch letters="[I'm jonjon.]"/>
        <CypherText textList={Database[0].shortAboutMe} delay={1300}/>
        <button onClick={handleClick} {...aboutBtnHoverProps}>{aboutBtnIsHovering ? "Go to About" : "About Me"}</button>
      </div>
    </div>
  )
}

export default Landing