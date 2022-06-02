import React from 'react'
import './landing.css'
import Cursor from './Cursor.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { VscTerminalUbuntu } from 'react-icons/vsc'

const Landing = () => {
  /* using states to check if "cd ~/About" button is pressed */
  const [cmdState, setCmdState] = useState(0);

  /* functions to nagivate to header page */
  const navigate = useNavigate();

  async function handleClick() {
    setCmdState(cmdState+1);
    /* sleep for 1.5 seconds */
    await new Promise(r => setTimeout(r, 1500));
    navigate('/About');
  }
  
  /* using states to check if typing animation is done */
  const [animationEnd, setAnimationEnd] = useState(0);
  
  function handleAnimation() {
    setAnimationEnd(animationEnd+1)
  }

  /* function to give cursor a trail */
  Cursor()

  return (
    <>
      <canvas id='canvas' />
      <div className='foreground'>
        <h1 className='prompt'><VscTerminalUbuntu className='OSPrompt' />/<AiOutlineHome className='dirPrompt' /> ~</h1>
        <h1 className={animationEnd === 0 ? "typewriter" : animationEnd > 0 ? '' : 'hidden'} onAnimationEnd={handleAnimation}>$ whoami</h1>
        <h1 className={animationEnd === 1 ? "typewriter" : animationEnd > 1 ? '' : 'hidden'} onAnimationEnd={handleAnimation}>Jonathan Yap</h1>
        <h1 className={animationEnd === 2 ? 'prompt' : 'hidden'}><VscTerminalUbuntu className='OSPrompt' />/<AiOutlineHome className='dirPrompt' /> ~</h1>
        <h1 className={cmdState === 1 ? "typewriter" : 'hidden'}>cd ~/About</h1>
        {/*<Letters letters="Hi, I'm Jonathan."></Letters>*/}
        {/*<Letters letters="Looking into further developments in Cyber Security and Cloud Computing."></Letters>*/}
        <button onClick={handleClick}>cd ~/About</button>
      </div>
    </>
  )
}

export default Landing