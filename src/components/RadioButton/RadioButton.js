import React from 'react';
import './RadioButton.css';

const RadioButton = ({test, index}) => {
  const {answer1, answer2, answer3} = test;

  return (
    <div>
      <div className="radio-button-container">
        <input type="radio" id={answer1} name={index} value={answer1} defaultChecked  />
        <label htmlFor={answer1}>{answer1}</label>
      </div>

      <div className="radio-button-container">
        <input type="radio" id={answer2} name={index} value={answer2}/>
        <label htmlFor={answer2}>{answer2}</label>
      </div>

      <div className="radio-button-container">
        <input type="radio" id={answer3} name={index} value={answer3}/>
        <label htmlFor={answer3}>{answer3}</label>
      </div>
    </div>
  );
};

export default RadioButton;