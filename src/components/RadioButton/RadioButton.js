import React from 'react';
import './RadioButton.css';

const RadioButton = ({test, index, handleRadioButton}) => {

  const data = test.answers.map((unit, idx) => {
    return (
      <div className="radio-button-container" key={idx}>
        <input 
          type="radio" 
          name={index}
          id={unit.answer} 
          value={unit.answer} 
          onChange={handleRadioButton}
          // defaultChecked 
        />
        <label htmlFor={unit.answer}>{unit.answer}</label>
      </div>
    );
  });

  return data;
};

export default RadioButton;