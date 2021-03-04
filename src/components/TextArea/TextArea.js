import React from 'react';
import '../TextArea/TextArea.css';

const TextArea = ({index, handleTextArea, handleInputChange}) => {
  return (
    <textarea 
      name={index}
      id={`txa-card${index + 1}`}
      onBlur={handleInputChange}
      placeholder="Enter your answer..."
    ></textarea>
  );
}

export default TextArea;