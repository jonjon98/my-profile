import React from 'react'
import './glitch.css'

const Glitch = (props) => {
  return (
    <p className='glitch'>
        {props.letters}
        <span aria-hidden='true'>{props.letters}</span>
        <span aria-hidden='true'>{props.letters}</span>
    </p>
  )
}

export default Glitch