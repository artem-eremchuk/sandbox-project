import React from 'react';
import '../TextArea/TextArea.css';

const TextArea = ({index, handleTextArea}) => {
  return (
    <textarea 
      id={index} 
      name={index}
      onBlur={handleTextArea}
      placeholder="Enter your answer..."
    ></textarea>
  );
}

export default TextArea;