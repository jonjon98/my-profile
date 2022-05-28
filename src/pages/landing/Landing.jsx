import React from 'react'
import { useNavigate } from 'react-router-dom';
import './landing.css'
import Letters from '../../components/Letters.jsx'
import Cursor from './Cursor.js'

const Landing = () => {
  /* functions to nagivate to header page */
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Header#about');
  }
  
  /* function to give cursor a trail */
  Cursor()

  return (
    <>
      <canvas id='canvas' />
      <div className='foreground'>
        <Letters letters="Hi, I'm Jonathan."></Letters>
        <Letters letters="Looking into further developments in Cyber Security and Cloud Computing."></Letters>
        <button onClick={handleClick}>start</button>
      </div>
    </>
  )
}

export default Landing