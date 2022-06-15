import React from 'react'
import './components.css'

const Glitch = (props) => {
  return (
    <p class='glitch'>
        {props.letters}
        <span aria-hidden='true'>{props.letters}</span>
        <span aria-hidden='true'>{props.letters}</span>
    </p>
  )
}

export default Glitch