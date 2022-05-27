import React from 'react'
import './reusable.css'

const Letter = (props) => {
  return (
    <div className='letterWrapper'>{props.letter}</div>
  )
}

export default Letter