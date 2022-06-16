import React from 'react'
import './letters.css'

const Letter = (props) => {
  /* handle transitions and allow them to finish even
  if mouse is not hovering on the component anymore */
  const handleMouseEnter = (e) => {
    e.target.classList.add("hover");
  }
  const handleTransitionEnd = (e) => {
    e.target.classList.remove("hover");
  }

  return (
    <pre className='letterWrapper' onMouseEnter={handleMouseEnter} onTransitionEnd={handleTransitionEnd}>
      {props.letter}
    </pre>
  )
}

export default Letter