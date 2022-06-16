import React from 'react'
import './landing.css'
import Cursor from './Cursor.js'
//import LavaFloor from './LavaFloor.js'
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
  
  /* function to give LavaFloor */
  /*LavaFloor();*/

  /* shortAboutMe labels */
  const shortAboutMe = ["Cloud Computing", "Full Stack Developer", "Cyber Security", "Networking"];
  
  /* About Page button */
  /* using states to check if "cd ~/About" button is pressed */
  const [cmdState, setCmdState] = useState(0);

  /* functions to nagivate to about page */
  const navigate = useNavigate();

  async function handleClick() {
    setCmdState(cmdState+1);
    /* sleep for 1.5 seconds */
    /* await new Promise(r => setTimeout(r, 0)); */
    navigate('/About', {state:{name:'About'}});
  }

  /* use on hover function for About Page button */
  const [aboutBtnIsHovering, aboutBtnHoverProps] = useHover();

  return (
    <>
      <canvas id='canvas' />
      {/*<canvas id='canvas2' />*/}
      
      <div className='foreground'>
        <Glitch letters="[I'm Jonathan.]"/>
        <CypherText textList={shortAboutMe} delay={1300}/>
        <button onClick={handleClick} {...aboutBtnHoverProps}>{aboutBtnIsHovering ? "cd ~/About" : "About Me"}</button>
      </div>
    </>
  )
}

export default Landing