import React, { useState, useEffect, useCallback } from 'react';

const CypherText = ({ textList, delay = 1000, scrambleSpeed = 50 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const [isInitialDelay, setIsInitialDelay] = useState(true);

  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`"\'\\';

  const generateScrambledText = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length));
    }
    return result;
  };

  const scrambleText = useCallback((targetText) => {
    let revealedChars = 0;
    
    const scrambleInterval = setInterval(() => {
      if (revealedChars < targetText.length) {
        const newText = targetText.substring(0, revealedChars) + 
                       generateScrambledText(targetText.length - revealedChars);
        setDisplayText(newText);
        revealedChars++;
      } else {
        setDisplayText(targetText);
        setIsScrambling(false);
        clearInterval(scrambleInterval);
        
        setTimeout(() => {
          const nextIndex = (currentTextIndex + 1) % textList.length;
          setCurrentTextIndex(nextIndex);
          setIsScrambling(true);
        }, 2000);
      }
    }, scrambleSpeed);
  }, [currentTextIndex, textList.length, scrambleSpeed]);

  useEffect(() => {
    if (isInitialDelay) {
      const initialTimer = setTimeout(() => {
        setIsInitialDelay(false);
        setIsScrambling(true);
      }, delay);
      return () => clearTimeout(initialTimer);
    }

    if (!textList || textList.length === 0) return;

    if (isScrambling) {
      const currentText = textList[currentTextIndex];
      scrambleText(currentText);
    }
  }, [currentTextIndex, isScrambling, textList, delay, scrambleSpeed, isInitialDelay, scrambleText]);

  if (isInitialDelay) {
    return <span></span>;
  }

  return (
    <span className="cypher-text">
      {displayText}
    </span>
  );
};

export default CypherText;