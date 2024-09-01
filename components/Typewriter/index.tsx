'use client'
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[]; // An array of strings to display in sequence
  speed?: number; // Optional: Speed of typing in milliseconds
  pause?: number; // Optional: Pause duration between strings in milliseconds
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 100, pause = 1000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0); // Index of the current string in texts array
  const [displayedText, setDisplayedText] = useState<string>(''); // The text currently displayed
  const [index, setIndex] = useState<number>(0); // Current character index in the current string
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // State to handle text deletion

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      if (index < texts[currentTextIndex].length && !isDeleting) {
        // Typing effect
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[currentTextIndex][index]);
          setIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(typingTimeout);
      } else if (index === texts[currentTextIndex].length && !isDeleting) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && index > 0) {
        // Deleting effect
        const deletingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, speed);

        return () => clearTimeout(deletingTimeout);
      } else if (isDeleting && index === 0) {
        // Move to the next string
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Loop back to start if at the end
      }
    }
  }, [index, currentTextIndex, texts, speed, pause, isDeleting]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
