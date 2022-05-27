import React from 'react'
import './reusable.css'
import Letter from './Letter.jsx'

const Letters = (props) => {

  const letters = props.letters.split(/(?!$)/u);  
  const lettersItems = letters.map((letter, index) => {
      if(letter === " "){
        return <pre> </pre>
      }
      return <Letter key={index} letter={letter} />
    }
  );

  return (
    <div className='lettersWrapper'>
        {lettersItems}
    </div>
  )
}

export default Letters