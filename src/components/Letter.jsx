import React from 'react'
import './components.css'

const Letter = (props) => {
  return (
    <div className='letterWrapper'>{props.letter}</div>
  )
}

export default Letter