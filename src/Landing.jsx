import React from 'react'
import { useNavigate } from 'react-router-dom';
import Letters from './components/reusable/Letters.jsx'

const Landing = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Header#about');
  }

  return (
    <>
      <div>
          <div>
          <Letters letters="Hi, I'm Jonathan."></Letters>
          </div>
          <div>
          <Letters letters="Looking into further developments in Cyber Security and Cloud Computing."></Letters>
          </div>
          <button onClick={handleClick} className='btn'>start</button>
      </div>
    </>
  )
}

export default Landing