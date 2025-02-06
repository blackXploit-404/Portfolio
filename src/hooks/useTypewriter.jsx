import { useState, useEffect } from 'react';

const useTypewriter = (texts, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayText !== texts[currentIndex]) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayText === '') {
        setCurrentIndex((current) => (current + 1) % texts.length);
        setIsTyping(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((current) => current.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export default useTypewriter;