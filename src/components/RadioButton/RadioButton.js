import React from 'react';
import './RadioButton.css';

const RadioButton = ({test, index, handleRadioButton, handleInputChange}) => {

  const data = test.answers.map((unit, idx) => {
    return (
      <div className="radio-button-container" key={idx}>
        <input 
          type="radio" 
          name={index}
          value={unit.answer} 
          defaultChecked={idx === 0}
          onClick={handleInputChange}
          id={`rdbn-card${index + 1}-answer${idx + 1}`}
        />
        <label 
          htmlFor={`rdbn-card${index + 1}-answer${idx + 1}`}
        >
          {unit.answer}
        </label>
      </div>
    );
  });

  return data;
};

export default RadioButton;