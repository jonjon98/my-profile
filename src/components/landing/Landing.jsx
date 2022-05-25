import React from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Header#about');
  }

  return (
    <div>
        <button onClick={handleClick} className='btn'>hi</button>
    </div>
  )
}

export default Landing