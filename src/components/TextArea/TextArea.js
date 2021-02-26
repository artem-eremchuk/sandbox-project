import React from 'react';
import '../TextArea/TextArea.css';

const TextArea = () => {
  return (
    <textarea 
      id="answer" 
      name="answer" 
      placeholder="Enter your answer..."
    ></textarea>
  );
}

export default TextArea;