import React from 'react'
import './letters.css'
import Letter from './Letter.jsx'

const Letters = (props) => {
  /* Map the string of letters to each returning its own component */
  const letters = props.letters.split(/(?!$)/u);  
  const lettersItems = letters.map((letter, index) => {
      return <Letter key={index} letter={letter} />
    }
  );

  return (
    <h1 className='lettersWrapper'>
        {lettersItems}
    </h1>
  )
}

export default Letters