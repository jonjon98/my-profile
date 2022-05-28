import React from 'react'
import { useNavigate } from 'react-router-dom';
import Letters from './components/reusable/Letters.jsx'
import Cursor from './globalStyle/Cursor.jsx'

const Landing = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Header#about');
  }

  Cursor()

  return (
    <>
          <canvas id='div' />
          <div className='foreground'>
            <Letters letters="Hi, I'm Jonathan."></Letters>
            <Letters letters="Looking into further developments in Cyber Security and Cloud Computing."></Letters>
            <button onClick={handleClick} className='btn'>start</button>
          </div>
    </>
  )
}

export default Landing